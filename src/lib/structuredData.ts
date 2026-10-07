// =============================================================================
// Structured data (schema.org JSON-LD)
// -----------------------------------------------------------------------------
// Every page emits one @graph containing the WebSite and the Person; pages add
// their own node (ProfilePage, CollectionPage, Article, BreadcrumbList) that
// points back to the Person by @id. `sameAs` is what lets search engines tie
// this site to the GitHub and LinkedIn profiles of the same person.
// =============================================================================

import { getProfile } from '@/content/profile';
import { localizePath, useTranslations, type Locale } from '@/i18n';

type Node = Record<string, unknown>;

const absolute = (site: URL, path: string) => new URL(path, site).toString();

export const personId = (site: URL) => absolute(site, '/#person');
const websiteId = (site: URL) => absolute(site, '/#website');

const inLanguage: Record<Locale, string> = { ko: 'ko-KR', en: 'en-US' };

function personNode(site: URL, locale: Locale): Node {
  const profile = getProfile(locale);
  const job = profile.experience[0];
  const school = profile.education[0];
  const [name, alternateName] =
    locale === 'ko' ? [profile.name.ko, profile.name.en] : [profile.name.en, profile.name.ko];

  return {
    '@type': 'Person',
    '@id': personId(site),
    name,
    alternateName,
    jobTitle: profile.title,
    url: absolute(site, localizePath('/', locale)),
    sameAs: [profile.socials.github, profile.socials.linkedin],
    worksFor: { '@type': 'Organization', name: job.company },
    alumniOf: { '@type': 'EducationalOrganization', name: school.school },
    address: { '@type': 'PostalAddress', addressLocality: job.location, addressCountry: 'KR' },
    knowsAbout: [
      'Frontend development',
      'React',
      'React Native',
      'TypeScript',
      'WebRTC',
      'Web performance',
      'Accessibility',
      'AI pair programming',
    ],
  };
}

function websiteNode(site: URL, locale: Locale): Node {
  const t = useTranslations(locale);
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    url: absolute(site, '/'),
    name: t('meta.siteName'),
    inLanguage: ['ko-KR', 'en-US'],
    publisher: { '@id': personId(site) },
  };
}

/** What a page declares; BaseLayout fills in path, title and description. */
export type SchemaInput =
  | { kind: 'profile' }
  | { kind: 'collection' }
  | {
      kind: 'article';
      /** Plain headline without the site suffix. */
      headline: string;
      keywords: readonly string[];
      breadcrumb: { name: string; path: string }[];
    };

type PageSchema = SchemaInput & { path: string; title: string; description: string };

export function buildStructuredData(site: URL, locale: Locale, page?: PageSchema): Node {
  const graph: Node[] = [websiteNode(site, locale), personNode(site, locale)];

  if (page) {
    const url = absolute(site, page.path);
    const common = {
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: inLanguage[locale],
      isPartOf: { '@id': websiteId(site) },
    };

    if (page.kind === 'profile') {
      graph.push({ '@type': 'ProfilePage', ...common, mainEntity: { '@id': personId(site) } });
    } else if (page.kind === 'collection') {
      graph.push({ '@type': 'CollectionPage', ...common, about: { '@id': personId(site) } });
    } else {
      graph.push({
        '@type': 'Article',
        ...common,
        headline: page.headline,
        author: { '@id': personId(site) },
        publisher: { '@id': personId(site) },
        mainEntityOfPage: url,
        image: absolute(site, '/og-image.png'),
        keywords: page.keywords.join(', '),
      });
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: page.breadcrumb.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: absolute(site, crumb.path),
        })),
      });
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
