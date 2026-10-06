import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePeriod, type Locale } from '@/i18n';

type ProjectData = CollectionEntry<'projects'>['data'];

export interface LocalizedProject {
  id: string;
  data: ProjectData;
  /** Entry whose MDX body is rendered for this locale. */
  entry: CollectionEntry<'projects'> | CollectionEntry<'projectsEn'>;
  /** Language of the rendered body — 'ko' when an English translation is missing. */
  bodyLang: Locale;
}

/**
 * Published projects for a locale, sorted by `order`.
 * The Korean entry is the single source of truth for structure; an English
 * entry only overrides prose. A missing translation falls back to Korean
 * (and is flagged via `bodyLang`) instead of dropping the case.
 */
export async function getProjects(locale: Locale): Promise<LocalizedProject[]> {
  const base = (await getCollection('projects', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
  if (locale === 'ko') {
    return base.map((entry) => ({ id: entry.id, data: entry.data, entry, bodyLang: 'ko' }));
  }

  const translations = new Map(
    (await getCollection('projectsEn')).map((entry) => [entry.id, entry]),
  );

  return base.map((entry) => {
    const en = translations.get(entry.id);
    const ko = entry.data;
    if (!en) {
      return { id: entry.id, data: ko, entry, bodyLang: 'ko' };
    }
    const t = en.data;
    const data: ProjectData = {
      ...ko,
      title: t.title,
      summary: t.summary,
      teaser: t.teaser,
      highlights: t.highlights,
      role: t.role ?? ko.role,
      stack: t.stack ?? ko.stack,
      period: localizePeriod(ko.period, 'en'),
      headlineMetric: ko.headlineMetric && {
        ...ko.headlineMetric,
        label: t.headlineMetric?.label ?? ko.headlineMetric.label,
        unit: t.headlineMetric?.unit ?? ko.headlineMetric.unit,
      },
    };
    return { id: entry.id, data, entry: en, bodyLang: 'en' };
  });
}
