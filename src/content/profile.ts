// =============================================================================
// PROFILE DATA
// -----------------------------------------------------------------------------
// 실제 커밋 이력(meetmatenative · mate3native · LMS 저장소, 2022.10 — 2026.10)을 기반으로
// 작성됨. 마지막 갱신 2026.10.
//
// Locale-neutral facts (name, contact, links) live in `shared`; everything a
// reader reads as prose lives in `localized.ko` / `localized.en`, which must
// keep the same shape (enforced by `satisfies`). Pages call getProfile(locale).
// =============================================================================

import type { Locale } from '@/i18n';

const shared = {
  name: { ko: '김기홍', en: 'KimGiHong' },
  email: 'devgihonghong@gmail.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kimgihong/',
    github: 'https://github.com/KimGiHong',
    email: 'mailto:devgihonghong@gmail.com',
  },
} as const;

interface SkillGroup {
  group: string;
  items: readonly string[];
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: readonly string[];
  stack: readonly string[];
}

interface Education {
  school: string;
  degree: string;
  period: string;
}

interface LocalizedProfile {
  title: string;
  location: string;
  tagline: string;
  about: readonly string[];
  skills: readonly SkillGroup[];
  experience: readonly Job[];
  education: readonly Education[];
}

const jobStack = [
  'React 19',
  'React Native 0.77',
  'Next.js 14',
  'TypeScript',
  'Zustand',
  'TanStack Query',
  'lib-jitsi-meet',
  'Vite',
  'Jenkins',
] as const;

const localized = {
  ko: {
    title: '프론트엔드 엔지니어',
    location: '서울, 대한민국',
    tagline: '가독성 · 효율 · 최적화 · 최신 기술 — 네 축을 같은 무게로 다루는 프론트엔드 엔지니어.',
    about: [
      '2024년 중반부터는 새 제품의 거의 모든 라인을 Claude AI agent와의 페어 프로그래밍으로 작성합니다. 제 자리는 "무엇을 만들지 · 어떻게 설계할지 · 가독성과 효율을 어떻게 지킬지"를 결정하고 검증하는 곳입니다. 코드를 누가 쳤느냐보다, 결과가 빠르고 깨끗하고 다음 사람이 읽기 좋은지가 더 중요한 질문이라고 봅니다.',
      '사내에서 AI agent 도입을 처음 추진했고 Claude 활용 세미나를 직접 진행해 팀의 작업 방식을 함께 바꿔왔습니다. AI 도입 전엔 도중에 무너지던 마이그레이션·재구축 시도가 AI agent를 들이고 나서 안정적으로 완주하는 패턴이 됐고 — 운영 중단 없이 한 달 만에 완주한 MeetMate v4 재구축이 가장 분명한 예시입니다.',
      '운영 중인 코드베이스를 다루든 신규를 만들든, 빌드·번들 예산·디렉터리 경계·회귀 테스트·접근성을 CI 가드로 박는 자리에 시간을 가장 많이 씁니다. 만드는 것만큼 실제 사용자 앞에 내보내고 지키는 일도 중요하게 봅니다. 2026년에는 MeetMate 모바일 앱을 App Store·Google Play에 처음 출시해 5주 동안 1.0.5까지 배포했고, 여러 사람이 2년간 쌓은 LMS 코드베이스를 인계받아 혼자 운영하고 있습니다. 그 바탕에는 ClassMate(2023, AI 도입 전 hand-written)에서 손으로 쌓은 기본기가 있습니다.',
    ],
    skills: [
      { group: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'] },
      { group: 'Frameworks', items: ['React 19', 'React Native', 'Next.js 14', 'Astro'] },
      { group: 'State & Data', items: ['Zustand', 'TanStack Query', 'Jotai', 'React Hook Form', 'Zod'] },
      {
        group: 'Styling',
        items: ['Tailwind CSS', 'styled-components', 'Emotion + MUI', 'SCSS Modules', 'Vanilla Extract'],
      },
      {
        group: 'Realtime / Media',
        items: ['lib-jitsi-meet (WebRTC SFU)', 'react-native-webrtc', 'WebSocket', 'Server-Sent Events', 'Web Audio API', 'TFLite WASM', 'three.js'],
      },
      {
        group: 'Build & Tooling',
        items: ['Vite + SWC', 'Turborepo', 'pnpm workspaces', 'Webpack', 'Biome', 'Lefthook', 'Jenkins', 'R8 · Hermes'],
      },
      {
        group: 'Testing',
        items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'Maestro', 'XCUITest', 'axe-core'],
      },
      {
        group: 'AI / Workflow',
        items: ['Claude AI agent pair programming', 'AI-orchestrated migrations', '사내 AI 도입 추진 + 세미나'],
      },
      {
        group: 'Practices',
        items: ['Feature-Sliced Design', 'Suspense-first', '접근성 (WCAG 2.1/2.5)', '번들 예산 CI 가드', '회귀 테스트 invariant', '스토어 출시 · 심사 대응'],
      },
    ],
    experience: [
      {
        company: 'Querensys',
        role: 'Frontend Engineer',
        period: '2022.10 — 현재',
        location: '서울',
        summary:
          '6개 제품에 걸쳐 프론트엔드를 담당해왔습니다 — NMS-Web 2년 프론트엔드 단독 운영, MeetMate 화상회의 웹·모바일 양쪽 프론트엔드 단독 책임(모바일은 2026.08 스토어 첫 출시), 2026.06 인계받은 학원 LMS 웹 단독 운영이 단독 작업의 핵심이고, ClassMate(2023 hand-written) · CBR(RAG 챗봇)에서는 팀의 한 사람으로 특정 영역(권한·알림·SSE 스트리밍 등)을 맡았습니다. 2024년 중반부터 Claude AI agent와의 페어 프로그래밍을 표준 작업 방식으로 두고, 사내 AI 도입을 처음 추진해 Claude 활용 세미나를 진행했습니다.',
        achievements: [
          'MeetMate Web v4 프론트엔드 단독 재구축 완주 — 한 달 만에 React 19 + Feature-Sliced Design 신규 SPA로 분기 후 v3 레거시 89,724 라인 일괄 제거. Jenkins 5 테넌트 빌드 + 1.3MB gzip 번들 예산 + FSD 경계 위반 475 → 0 + Vitest 1,943 케이스를 한 파이프라인에. (Claude AI agent 페어 프로그래밍)',
          'MeetMate 모바일 스토어 첫 출시 — R8을 처음 켜 Android DEX 22.95MB → 5.60MB(다운로드 −30.6%), Hermes 바이트코드 −22% · −20.6% 두 차례 감량. 5주 동안 1.0.0 → 1.0.5(빌드 10 → 29) 연속 배포, 받은 반려는 바이너리 재업로드 없이 회신으로 해결.',
          '사내 AI agent 도입 처음 추진 — Claude를 production 코드에 통합한 회사 첫 사례, Claude 활용 세미나 진행. AI 도입 전엔 무너지던 마이그레이션이 안정적 완주 패턴으로 전환됨을 1년+ 운영하며 검증.',
          'WebRTC 화질 정책 + Mate WS/Jitsi invariant — SFU 수신을 페이지 단위로 자르고 화질 결정을 단일 pure-function 모듈에 통합해 50명 회의 모바일 사용성 회복. "한 참가자 = 한 entry" invariant + 회귀 테스트로 분산 권위 race 종료.',
          'mate3 100명 회의 성능 — Map 인덱스 도입으로 핫패스 O(n) → O(1), 비교 횟수 10,000회 → 100회, 페이지 전환 검은 화면 제거(양방향 프리페치 + debounce 단축).',
          'NMS-Web (네트워크 관리 시스템) 프론트엔드 2년 단독 운영 — 사용자 역할별 권한 매트릭스(8 도메인 × 6 액션)와 4단계 권한 레벨(NONE/READ/WRITE/ADMIN)을 단일 prop으로 통합한 다층 RBAC 시스템 도입, 데이터 로딩은 위젯별 Suspense + 재사용 가능한 무한쿼리 프로바이더로 재구성. (백엔드는 별도 팀원)',
        ],
        stack: jobStack,
      },
    ],
    education: [
      { school: '광주소프트웨어마이스터고등학교', degree: '임베디드 소프트웨어과', period: '2020.03 — 2023.02' },
    ],
  },
  en: {
    title: 'Frontend Engineer',
    location: 'Seoul, South Korea',
    tagline: 'Readability · Efficiency · Optimization · Modern tooling — a frontend engineer who keeps all four on the same scale.',
    about: [
      'Since mid-2024 I write almost every line of new products in pair programming with Claude AI agents. My job is to decide what to build, how to design it, and how to keep readability and efficiency intact — and to verify the result. Who typed the code matters less than whether the result is fast, clean, and easy for the next person to read.',
      'I was the first in my company to push for AI-agent adoption, and I ran the in-house Claude workshop that changed how the team works. Migrations and rebuilds that used to collapse mid-flight before AI now reliably reach the finish line — the MeetMate v4 rebuild, completed in one month with no service downtime, is the clearest example.',
      'Whether the codebase is in production or brand new, I spend most of my time pinning builds, bundle budgets, directory boundaries, regression tests and accessibility into CI guards. Shipping to real users and keeping things working for them matters to me as much as building. In 2026 I launched the MeetMate mobile app on the App Store and Google Play for the first time and shipped through 1.0.5 in five weeks, and I took over an LMS codebase that several people had built over two years, which I now run on my own. Underneath all of it are the fundamentals I built by hand on ClassMate (2023, hand-written before AI).',
    ],
    skills: [
      { group: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'] },
      { group: 'Frameworks', items: ['React 19', 'React Native', 'Next.js 14', 'Astro'] },
      { group: 'State & Data', items: ['Zustand', 'TanStack Query', 'Jotai', 'React Hook Form', 'Zod'] },
      {
        group: 'Styling',
        items: ['Tailwind CSS', 'styled-components', 'Emotion + MUI', 'SCSS Modules', 'Vanilla Extract'],
      },
      {
        group: 'Realtime / Media',
        items: ['lib-jitsi-meet (WebRTC SFU)', 'react-native-webrtc', 'WebSocket', 'Server-Sent Events', 'Web Audio API', 'TFLite WASM', 'three.js'],
      },
      {
        group: 'Build & Tooling',
        items: ['Vite + SWC', 'Turborepo', 'pnpm workspaces', 'Webpack', 'Biome', 'Lefthook', 'Jenkins', 'R8 · Hermes'],
      },
      {
        group: 'Testing',
        items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'Maestro', 'XCUITest', 'axe-core'],
      },
      {
        group: 'AI / Workflow',
        items: ['Claude AI agent pair programming', 'AI-orchestrated migrations', 'Led in-house AI adoption + seminar'],
      },
      {
        group: 'Practices',
        items: ['Feature-Sliced Design', 'Suspense-first', 'Accessibility (WCAG 2.1/2.5)', 'Bundle-budget CI guards', 'Regression-test invariants', 'App Store / Play launch & review'],
      },
    ],
    experience: [
      {
        company: 'Querensys',
        role: 'Frontend Engineer',
        period: '2022.10 — Present',
        location: 'Seoul',
        summary:
          'I have owned the frontend across six products. The core of my solo work: two years running the NMS-Web frontend on my own; sole frontend ownership of both the web and mobile clients of the MeetMate video-conferencing platform (the mobile app first launched on the stores in 2026.08); and running an academy LMS web app on my own since taking it over in 2026.06. On ClassMate (2023, hand-written) and CBR (a RAG chatbot) I was one member of the team and owned specific areas (permissions, notifications, SSE streaming and more). Since mid-2024 pair programming with Claude AI agents has been my standard way of working, and I was the first to push for AI adoption in the company, running the in-house Claude workshop.',
        achievements: [
          'Completed the solo frontend rebuild of MeetMate Web v4 — branched into a new React 19 + Feature-Sliced Design SPA in one month, then removed 89,724 lines of v3 legacy code in one sweep. Jenkins builds for 5 tenants, a 1.3MB gzip bundle budget, FSD boundary violations 475 → 0 and 1,943 Vitest cases, all in a single pipeline. (Claude AI agent pair programming)',
          'First store launch of the MeetMate mobile app — turned on R8 for the first time to shrink the Android DEX from 22.95MB to 5.60MB (download −30.6%), and cut Hermes bytecode twice, by −22% and −20.6%. Shipped 1.0.0 → 1.0.5 (builds 10 → 29) continuously over five weeks; the rejection we received was resolved by reply, without re-uploading the binary.',
          'First to push for AI-agent adoption in the company — the company’s first case of integrating Claude into production code, plus the in-house Claude workshop I ran. Over more than a year of operation, verified that migrations which used to collapse before AI now reliably run to completion.',
          'WebRTC quality policy + Mate WS/Jitsi invariant — cut SFU receiving down to the visible page and consolidated quality decisions into a single pure-function module, restoring mobile usability in 50-person meetings. A "one participant = one entry" invariant plus regression tests ended the races caused by split authority.',
          'mate3 100-person meeting performance — Map indexes took the hot path from O(n) to O(1) and comparisons from 10,000 to 100, and black screens on page transitions are gone (bidirectional prefetch + a shorter debounce).',
          'Ran the NMS-Web (network management system) frontend solo for two years — introduced a multi-layer RBAC system that unifies a per-role permission matrix (8 domains × 6 actions) and four permission levels (NONE/READ/WRITE/ADMIN) into a single prop, and rebuilt data loading around per-widget Suspense and a reusable infinite-query provider. (Backend owned by a separate teammate)',
        ],
        stack: jobStack,
      },
    ],
    education: [
      { school: 'Gwangju Software Meister High School', degree: 'Embedded Software', period: '2020.03 — 2023.02' },
    ],
  },
} as const satisfies Record<Locale, LocalizedProfile>;

export const getProfile = (locale: Locale) => ({ ...shared, ...localized[locale] });

export type Profile = ReturnType<typeof getProfile>;
