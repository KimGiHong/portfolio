// =============================================================================
// i18n
// -----------------------------------------------------------------------------
// Korean is the default locale and lives at the site root (/about, /projects/…).
// English mirrors every route under /en (/en/about, /en/projects/…).
// UI chrome strings live here; long-form copy lives in profile.ts, products.ts
// and the projects / projectsEn content collections.
// =============================================================================

export const locales = ['ko', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ko';

/** BCP-47 tags for Intl formatting and og:locale. */
export const intlLocale: Record<Locale, string> = { ko: 'ko-KR', en: 'en-US' };
export const ogLocale: Record<Locale, string> = { ko: 'ko_KR', en: 'en_US' };

export const getLocaleFromPath = (pathname: string): Locale =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ko';

/** Strip the locale prefix: '/en/projects/x' → '/projects/x'. */
export const stripLocale = (pathname: string): string => {
  if (getLocaleFromPath(pathname) === 'ko') return pathname;
  const rest = pathname.slice('/en'.length);
  return rest === '' ? '/' : rest;
};

/** Prefix a locale-neutral path: ('/projects', 'en') → '/en/projects'. Hash/query preserved. */
export const localizePath = (path: string, locale: Locale): string => {
  if (locale === defaultLocale) return path;
  return path === '/' ? '/en/' : `/en${path}`;
};

/** Same page in the other locale. */
export const switchLocalePath = (pathname: string, target: Locale): string =>
  localizePath(stripLocale(pathname), target);

/** Periods are stored once (in the Korean source); only the open-ended marker is localized. */
export const localizePeriod = (period: string, locale: Locale): string =>
  locale === 'en' ? period.replace('진행 중', 'Present').replace('현재', 'Present') : period;

export const ui = {
  ko: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.toggle': '메뉴 열기',
    'lang.switch': 'English',
    'lang.switchShort': 'EN',
    'lang.switchLabel': 'Read this page in English',

    'home.cta.projects': '작업 살펴보기 →',
    'home.cta.resume': '이력서',
    'home.readCase': '케이스 스터디 읽기 →',
    'home.allProjects': '전체 프로젝트 보기 →',
    'home.about.title': '소개',
    'home.about.more': '소개 더 읽기 →',

    'about.title': '소개',
    'about.skills': '다루는 도구',
    'about.experience': '경력',
    'about.resumeLink': '이력서에서 자세히 보기 →',
    'about.talks': '발표 · 자료',
    'about.contact': '연락',
    'about.seminarMarker': 'Claude 활용 세미나',
    'about.talk.meta': '2025.04 · 사내 세미나',
    'about.talk.title': 'Claude AI Agent 활용 세미나',
    'about.talk.body':
      'Claude를 production 코드에 통합하는 워크플로와 실전 사례를 사내 개발팀 대상으로 발표했습니다. 회사 내 AI agent 도입의 출발점이 됐고, 이후 NMS·MeetMate·CBR 등 신규 작업이 AI 페어 프로그래밍으로 전환되는 계기가 됐습니다.',
    'about.talk.coverAlt': 'Claude AI Agent 활용 세미나 발표 첫 슬라이드 미리보기',
    'about.talk.slides': '발표 슬라이드 (PPTX, 820KB) →',
    'about.talk.script': '발표 스크립트 (DOCX, 24KB) →',
    'about.talk.langNote': '',

    'projects.title': '작업',
    'projects.intro':
      '제품마다 자기 챕터를 갖습니다. 각 챕터는 제품 맥락 한 단락과 그 안에서 다룬 사례 목록으로 펼쳐지고, 사례 제목을 누르면 본문으로 이어집니다.',
    'projects.note':
      '모두 사내 프로젝트로 소스 코드는 NDA에 의해 비공개입니다. 2024년 중반 이후 작업은 Claude AI agent와의 페어 프로그래밍으로 구현되며 본인이 아키텍처·리뷰·검증을 담당했습니다 (각 케이스 상세 페이지에 implementation 표기). ClassMate(2023)는 AI 도입 전 hand-written 시기의 작업입니다. 구체적인 구현·메트릭·디버깅 과정은 인터뷰에서 자세히 공유드릴 수 있습니다.',

    'case.implementation.hand-written': 'Hand-written (pre-AI era, 2023)',
    'case.implementation.ai-paired': 'AI-paired (Claude agent)',
    'case.implementation.mixed': 'Hybrid (handover era — hand-written → AI-paired)',

    'resume.savePdf': 'PDF로 저장',
    'resume.description': '김기홍의 이력서',

    'notFound.title': '404 — 찾을 수 없는 지면',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.toggle': 'Toggle navigation',
    'lang.switch': '한국어',
    'lang.switchShort': 'KO',
    'lang.switchLabel': '이 페이지를 한국어로 보기',

    'home.cta.projects': 'Explore the work →',
    'home.cta.resume': 'Resume',
    'home.readCase': 'Read the case study →',
    'home.allProjects': 'See all projects →',
    'home.about.title': 'About',
    'home.about.more': 'Read more about me →',

    'about.title': 'About',
    'about.skills': 'Tools I Work With',
    'about.experience': 'Experience',
    'about.resumeLink': 'See the full resume →',
    'about.talks': 'Talks · Materials',
    'about.contact': 'Contact',
    'about.seminarMarker': 'in-house Claude workshop',
    'about.talk.meta': '2025.04 · In-house seminar',
    'about.talk.title': 'Working with Claude AI Agents — Seminar',
    'about.talk.body':
      'I presented a workflow for integrating Claude into production code, along with real-world cases, to the in-house development team. It became the starting point for AI-agent adoption at the company and the turning point that moved new work — NMS, MeetMate, CBR and more — onto AI pair programming.',
    'about.talk.coverAlt': 'Preview of the first slide of the Claude AI Agent seminar',
    'about.talk.slides': 'Slides (PPTX, 820KB) →',
    'about.talk.script': 'Talk script (DOCX, 24KB) →',
    'about.talk.langNote': 'Materials are in Korean.',

    'projects.title': 'Work',
    'projects.intro':
      'Each product gets its own chapter: one paragraph of product context, followed by the cases I worked on within it. Click a case title to read the full write-up.',
    'projects.note':
      'All of these are in-house projects, and the source code is private under NDA. Since mid-2024 my work has been implemented through pair programming with Claude AI agents, with me owning the architecture, review and verification (each case page notes its implementation mode). ClassMate (2023) is from the hand-written era before AI adoption. I am happy to walk through implementation details, metrics and debugging in an interview.',

    'case.implementation.hand-written': 'Hand-written (pre-AI era, 2023)',
    'case.implementation.ai-paired': 'AI-paired (Claude agent)',
    'case.implementation.mixed': 'Hybrid (handover era — hand-written → AI-paired)',

    'resume.savePdf': 'Save as PDF',
    'resume.description': 'Resume of KimGiHong',

    'notFound.title': '404 — Page not found',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['ko'];

// Compile-time parity check: English must define every Korean key.
ui.en satisfies Record<UIKey, string>;

export const useTranslations = (locale: Locale) => (key: UIKey): string => ui[locale][key];
