// =============================================================================
// PRODUCT CHAPTERS
// -----------------------------------------------------------------------------
// /projects groups cases by `product` (the frontmatter value). A product that is
// not listed in `productOrder` does not appear on /projects at all — add it here
// when a new product label is introduced.
// =============================================================================

import type { Locale } from '@/i18n';

export const productOrder = [
  'MeetMate (Web)',
  'MeetMate (Mobile)',
  'LMS (Web)',
  'NMS (Web)',
  'CBR',
  'ClassMate (Web)',
] as const;

export type ProductKey = (typeof productOrder)[number];

interface ProductCopy {
  platformLabel: string;
  tagline: string;
}

export interface ProductMeta extends ProductCopy {
  anchor: string;
  productName: string;
  shortLabel: string;
  stack: readonly string[];
}

const shared: Record<ProductKey, Omit<ProductMeta, keyof ProductCopy>> = {
  'MeetMate (Web)': {
    anchor: 'meetmate-web',
    productName: 'MeetMate',
    shortLabel: 'MeetMate · Web',
    stack: ['React 19', 'Vite + SWC', 'Zustand', 'TanStack Query', 'lib-jitsi-meet', 'Jenkins'],
  },
  'MeetMate (Mobile)': {
    anchor: 'meetmate-mobile',
    productName: 'MeetMate',
    shortLabel: 'MeetMate · Mobile',
    stack: ['React Native 0.77', 'Zustand', 'lib-jitsi-meet', 'react-native-webrtc', 'Jest'],
  },
  'LMS (Web)': {
    anchor: 'lms',
    productName: 'LMS',
    shortLabel: 'LMS · Web',
    stack: ['React 18', 'TypeScript', 'Redux', 'React Query', 'jsPDF', 'Webpack'],
  },
  'NMS (Web)': {
    anchor: 'nms',
    productName: 'NMS',
    shortLabel: 'NMS · Web',
    stack: ['Next.js 14', 'TanStack Query', 'TypeScript', 'Emotion + MUI', 'Chart.js'],
  },
  CBR: {
    anchor: 'cbr',
    productName: 'CBR',
    shortLabel: 'CBR',
    stack: ['Next.js 15', 'React 19', 'FastAPI', 'LangChain', 'Qdrant', 'TanStack Query'],
  },
  'ClassMate (Web)': {
    anchor: 'classmate',
    productName: 'ClassMate',
    shortLabel: 'ClassMate',
    stack: ['React 18', 'Redux Toolkit', 'jitsi-js-utils', 'react-konva', 'webpack', 'i18next'],
  },
};

const copy: Record<Locale, Record<ProductKey, ProductCopy>> = {
  ko: {
    'MeetMate (Web)': {
      platformLabel: '웹',
      tagline:
        'B2B 다자간 화상회의 플랫폼의 웹 클라이언트. 2026년 레거시 RN+Electron 모노레포에서 분기한 신규 React 19 SPA(v4)를 프론트엔드 단독으로 재구축해, 한 달 만에 로그인부터 호스트 기능 7배치까지 완주했습니다. 실서비스에 투입한 뒤에는 실시간 동기화, 회의실 UX, 모바일·태블릿 대응을 다듬었습니다 (백엔드는 별도 팀원 담당).',
    },
    'MeetMate (Mobile)': {
      platformLabel: '모바일 · iOS + Android',
      tagline:
        '같은 화상회의 플랫폼의 모바일 앱. React Native 0.77로 구현됐고, 100명 회의 성능과 실기기 미디어 안정성부터 2026년 8월 App Store·Google Play 첫 출시와 이후 연속 배포까지 프론트엔드 단독으로 책임집니다 (백엔드는 별도 팀원 담당).',
    },
    'LMS (Web)': {
      platformLabel: '학원 LMS · 웹',
      tagline:
        '입시 학원용 LMS 웹. 강사의 테스트 등록부터 MeetMate 화상 강의실 안 응시, 학생별 성적표 PDF까지 이어집니다. 2024년부터 여러 사람이 쌓아온 팀 코드베이스를 2026년 6월 인계받아 프론트엔드를 단독으로 운영하고 있습니다 (백엔드는 별도 팀 담당).',
    },
    'NMS (Web)': {
      platformLabel: '네트워크 관리 시스템 · 웹',
      tagline:
        'B2B 네트워크 관리 시스템의 웹 클라이언트. Next.js 14 App Router 기반 멀티테넌트 제품으로, 초기 빌드아웃 인계 후 2년간 프론트엔드 단독으로 발전·유지하며 RBAC 권한 시스템과 데이터 로딩 아키텍처를 재설계했습니다 (백엔드는 별도 팀원 담당).',
    },
    CBR: {
      platformLabel: 'RAG 사례 챗봇 · 풀스택 단기',
      tagline:
        'RAG 기반 사례 챗봇. 2025년 7-8월 7주간 팀의 한 사람으로 참여해, SSE 다단계 스트리밍 파이프라인과 라우트 이탈에도 끊기지 않는 상태 수명 관리(StreamManager)를 담당했습니다. 백엔드는 다른 분이 시작한 FastAPI + LangChain + Qdrant 코드 위에 SSE 엔드포인트 등을 AI agent와 함께 확장했습니다 (전체 풀스택 단독 아님).',
    },
    'ClassMate (Web)': {
      platformLabel: '교육·LMS 도메인 · 웹',
      tagline:
        'MeetMate 화상회의 코어를 교육·LMS 도메인으로 분기한 React 웹 제품. 2023년 팀의 한 사람으로 코치-코치이 Q&A · 커뮤니티 · 컨퍼런스 · 알림 · 4-tier 백오피스 영역에서 특정 기능을 담당했습니다 (전체 단독 아님, 동료들과 공동 개발 + 백엔드는 별도 팀원).',
    },
  },
  en: {
    'MeetMate (Web)': {
      platformLabel: 'Web',
      tagline:
        'The web client of a B2B multi-party video-conferencing platform. In 2026 I rebuilt it as the sole frontend engineer — a new React 19 SPA (v4) branched off a legacy RN + Electron monorepo — and went from login through seven batches of host features in one month. After it went into production, I refined realtime sync, the meeting-room UX and mobile/tablet support (backend owned by a separate teammate).',
    },
    'MeetMate (Mobile)': {
      platformLabel: 'Mobile · iOS + Android',
      tagline:
        'The mobile app of the same video-conferencing platform, built with React Native 0.77. As the sole frontend engineer I own everything from 100-person meeting performance and real-device media stability to the first App Store and Google Play launch in August 2026 and the continuous releases since (backend owned by a separate teammate).',
    },
    'LMS (Web)': {
      platformLabel: 'Academy LMS · Web',
      tagline:
        'An LMS web app for college-entrance-exam academies, covering everything from instructors registering tests to students taking them inside the MeetMate video classroom and per-student score report PDFs. In June 2026 I took over a team codebase that several people had built since 2024, and I now run its frontend on my own (backend owned by a separate team).',
    },
    'NMS (Web)': {
      platformLabel: 'Network management system · Web',
      tagline:
        'The web client of a B2B network management system — a multi-tenant product on the Next.js 14 App Router. After taking over the initial build-out, I evolved and maintained the frontend on my own for two years, redesigning the RBAC permission system and the data-loading architecture (backend owned by a separate teammate).',
    },
    CBR: {
      platformLabel: 'RAG case chatbot · Short full-stack stint',
      tagline:
        'A RAG-based case chatbot. Over seven weeks in July–August 2025 I joined as one member of the team and owned the multi-stage SSE streaming pipeline and the state lifecycle management that keeps streams alive across route changes (StreamManager). On the backend, I extended the FastAPI + LangChain + Qdrant code someone else had started — adding SSE endpoints and more — together with an AI agent (not a solo full-stack effort).',
    },
    'ClassMate (Web)': {
      platformLabel: 'Education / LMS domain · Web',
      tagline:
        'A React web product that branched the MeetMate video-conferencing core into the education/LMS domain. In 2023, as one member of the team, I owned specific features across coach–coachee Q&A, community, conferences, notifications and a 4-tier back office (not a solo effort — built together with colleagues, with the backend owned by separate teammates).',
    },
  },
};

export const getProductMeta = (product: string, locale: Locale): ProductMeta | undefined => {
  if (!(productOrder as readonly string[]).includes(product)) return undefined;
  const key = product as ProductKey;
  return { ...shared[key], ...copy[locale][key] };
};
