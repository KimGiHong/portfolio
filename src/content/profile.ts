// =============================================================================
// PROFILE DATA
// -----------------------------------------------------------------------------
// 실제 커밋 이력(meetmatenative 저장소 2022.10 — 2026.05, 280 commits)을 기반으로
// 작성됨. 게시 전에 아래 항목은 본인이 검토/교체하세요:
//   - socials.github / socials.linkedin (실제 핸들 확인)
//   - education (실제 학교/전공/기간)
//   - experience[1] (이전 회사가 있다면 추가, 없으면 배열에서 제거)
//   - location (수정이 필요하면)
// =============================================================================

export const profile = {
  name: { ko: '김기홍', en: 'KimGiHong' },
  title: { ko: '프론트엔드 엔지니어', en: 'Frontend Engineer' },
  location: '서울, 대한민국',
  email: 'devgihonghong@gmail.com',

  tagline: {
    ko: '가독성 · 효율 · 최적화 · 최신 기술 — 네 축을 같은 무게로 다루는 프론트엔드 엔지니어.',
    en: 'Readability · Efficiency · Optimization · Modern tooling — a frontend engineer who keeps all four on the same scale.',
  },

  about: {
    ko: [
      '2024년 중반부터는 새 제품의 거의 모든 라인을 Claude AI agent와의 페어 프로그래밍으로 작성합니다. 제 자리는 "무엇을 만들지 · 어떻게 설계할지 · 가독성과 효율을 어떻게 지킬지"를 결정하고 검증하는 곳입니다. 코드를 누가 쳤느냐보다, 결과가 빠르고 깨끗하고 다음 사람이 읽기 좋은지가 더 중요한 질문이라고 봅니다.',
      '사내에서 AI agent 도입을 처음 추진했고 Claude 활용 세미나를 직접 진행해 팀의 작업 방식을 함께 바꿔왔습니다. AI 도입 전엔 도중에 무너지던 마이그레이션·재구축 시도가 AI agent를 들이고 나서 안정적으로 완주하는 패턴이 됐고 — 운영 중단 없이 한 달 만에 완주한 MeetMate v4 재구축이 가장 분명한 예시입니다.',
      '운영 중인 코드베이스를 다루든 신규를 만들든, 빌드·번들 예산·디렉터리 경계·회귀 테스트·접근성을 CI 가드로 박는 자리에 시간을 가장 많이 씁니다. ClassMate(2023, AI 도입 전 hand-written)에서 손으로 쌓은 기본기 위에, 지금의 AI 페어 프로그래밍 워크플로가 올라가 있다는 게 이 흐름의 핵심입니다.',
    ],
    en: [
      'Since mid-2024 I write almost every line of new products in pair-programming with Claude AI agents. My job is to decide what to build, how to design it, and how to keep readability and efficiency intact — not to type each line. Who wrote the code matters less than whether it stays fast, clean, and easy for the next reader.',
      'I was the first in my company to push for AI-agent adoption and ran the in-house Claude workshop that shifted how the team works. Migrations and rewrites that used to collapse mid-flight now finish on time — the one-month, zero-downtime MeetMate v4 rebuild is the clearest example.',
      'Whether the codebase is in production or new, I spend most of my time pinning build, bundle budget, directory boundaries, regression tests, and accessibility into CI guards. ClassMate (2023, hand-written before AI) is where the fundamentals were laid; the current AI pair-programming workflow runs on top of that foundation.',
    ],
  },

  skills: [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'] },
    { group: 'Frameworks', items: ['React 19', 'React Native', 'Next.js 14', 'Astro'] },
    {
      group: 'State & Data',
      items: ['Zustand', 'TanStack Query', 'Jotai', 'React Hook Form', 'Zod'],
    },
    {
      group: 'Styling',
      items: ['Tailwind CSS', 'styled-components', 'Emotion + MUI', 'SCSS Modules', 'Vanilla Extract'],
    },
    {
      group: 'Realtime / Media',
      items: ['lib-jitsi-meet (WebRTC SFU)', 'WebSocket', 'Server-Sent Events', 'Web Audio API', 'TFLite WASM', 'three.js'],
    },
    {
      group: 'Build & Tooling',
      items: ['Vite + SWC', 'Turborepo', 'pnpm workspaces', 'Webpack', 'Biome', 'Lefthook', 'Jenkins'],
    },
    {
      group: 'Testing',
      items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'axe-core', 'Puppeteer'],
    },
    {
      group: 'AI / Workflow',
      items: [
        'Claude AI agent pair programming',
        'AI-orchestrated migrations',
        '사내 AI 도입 추진 + 세미나',
      ],
    },
    {
      group: 'Practices',
      items: ['Feature-Sliced Design', 'Suspense-first', '접근성 (WCAG 2.1/2.5)', '번들 예산 CI 가드', '회귀 테스트 invariant'],
    },
  ],

  experience: [
    {
      company: 'Querensys',
      role: 'Frontend Engineer',
      period: '2022.10 — 현재',
      location: '서울',
      summary:
        '5개 자체 제품에 걸쳐 프론트엔드를 담당해왔습니다 — NMS-Web 2년 프론트엔드 단독 운영과 MeetMate 화상회의 웹·모바일 양쪽 프론트엔드 단독 책임이 단독 작업의 핵심이고, ClassMate(2023 hand-written) · CBR(RAG 챗봇)에서는 팀의 한 사람으로 특정 영역(권한·알림·SSE 스트리밍 등)을 맡았습니다. 2024년 중반부터 Claude AI agent와의 페어 프로그래밍을 표준 작업 방식으로 두고, 사내 AI 도입을 처음 추진해 Claude 활용 세미나를 진행했습니다.',
      achievements: [
        'MeetMate Web v4 프론트엔드 단독 재구축 완주 — 한 달 만에 React 19 + Feature-Sliced Design 신규 SPA로 분기 후 v3 레거시 89,724 라인 일괄 제거. Jenkins 5 테넌트 빌드 + 1.3MB gzip 번들 예산 + FSD 경계 위반 475 → 0 + Vitest 1,943 케이스를 한 파이프라인에. (Claude AI agent 페어 프로그래밍)',
        '사내 AI agent 도입 처음 추진 — Claude를 production 코드에 통합한 회사 첫 사례, Claude 활용 세미나 진행. AI 도입 전엔 무너지던 마이그레이션이 안정적 완주 패턴으로 전환됨을 1년+ 운영하며 검증.',
        'WebRTC 화질 정책 + Mate WS/Jitsi invariant — SFU 수신을 페이지 단위로 자르고 화질 결정을 단일 pure-function 모듈에 통합해 50명 회의 모바일 사용성 회복. "한 참가자 = 한 entry" invariant + 회귀 테스트로 분산 권위 race 종료.',
        'mate3 100명 회의 성능 — Map 인덱스 도입으로 핫패스 O(n) → O(1), 비교 횟수 10,000회 → 100회, 페이지 전환 검은 화면 제거(양방향 프리페치 + debounce 단축).',
        'NMS-Web (네트워크 관리 시스템) 프론트엔드 2년 단독 운영 — 사용자 역할별 권한 매트릭스(8 도메인 × 6 액션)와 4단계 권한 레벨(NONE/READ/WRITE/ADMIN)을 단일 prop으로 통합한 다층 RBAC 시스템 도입, 데이터 로딩은 위젯별 Suspense + 재사용 가능한 무한쿼리 프로바이더로 재구성. (백엔드는 별도 팀원)',
      ],
      stack: [
        'React 19',
        'React Native 0.77',
        'Next.js 14',
        'TypeScript',
        'Zustand',
        'TanStack Query',
        'lib-jitsi-meet',
        'Vite',
        'Jenkins',
      ],
    },
  ],

  education: [
    {
      school: '광주소프트웨어마이스터고등학교',
      degree: '임베디드 소프트웨어과',
      period: '2020.03 — 2023.02',
    },
  ],

  socials: {
    linkedin: 'https://www.linkedin.com/in/kimgihong/',
    github: 'https://github.com/KimGiHong',
    email: 'mailto:devgihonghong@gmail.com',
  },
} as const;

export type Profile = typeof profile;
