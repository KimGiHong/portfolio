# 김기홍 · Portfolio

[https://portfolio-kimgihongs-projects.vercel.app](https://portfolio-kimgihongs-projects.vercel.app)

프론트엔드 엔지니어 김기홍 (KimGiHong)의 개인 포트폴리오 사이트입니다. 한지(Korean mulberry paper) × Notion 톤의 에디토리얼 미감으로 제작했으며, 17개 사내 케이스 스터디를 5개 product magazine spread로 정리합니다.

## 정직한 disclosure

- **이 사이트의 코드는 Claude AI agent와의 페어 프로그래밍으로 작성됐습니다.** 본인은 디자인 방향 · 아키텍처 결정 · 코드 리뷰 · 빌드/검증을 담당했고, 라인-바이-라인 코드 입력은 대부분 AI agent와 함께 진행했습니다.
- 이 워크플로는 본인이 회사에서 1년 넘게 production 코드에 적용해 온 표준 작업 방식과 동일합니다 (사이트의 `/about` 페이지 Talks 섹션에 관련 사내 세미나 자료 첨부).
- 사이트의 17개 케이스 스터디 내용은 모두 사내 NDA로 코드가 비공개이며, 구체 메트릭·디버깅 과정·기술적 선택 이유는 인터뷰에서 자세히 공유 가능합니다.

## 기술 스택

- **빌드/런타임**: Astro 6 + TypeScript 6 (strict) — 정적 사이트, 서버리스 배포
- **스타일**: Tailwind CSS v4 (CSS-first config via PostCSS plugin)
- **인터랙션**: React 19 islands + Motion (Framer Motion 후속)
- **콘텐츠**: MDX + Astro Content Collections (Zod schema)
- **타이포그래피**: Fraunces (영문 디스플레이) · Gowun Batang (한글 디스플레이) · Pretendard (본문) · JetBrains Mono
- **PDF 출력**: `@media print` CSS — 이력서 페이지(`/resume`)는 브라우저 인쇄로 ATS-friendly PDF 출력 가능

## 인터랙티브 모먼트 3가지

1. **Hero letter cascade** — 이름 글자별 stagger fade-up (Motion)
2. **상단 scroll progress bar** — 페이지 진행률에 맞춰 자라는 maple 잉크 선
3. **Headline metric count-up** — 케이스 detail 페이지의 핵심 수치가 스크롤 진입 시 카운팅

## 로컬에서 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:4321)
npm run build    # 정적 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
npm run typecheck # Astro check (strict TS)
```

## 디렉터리 구조

```
src/
  content/
    profile.ts                # 타입 안전한 프로필 데이터 (Korean/English)
    projects/*.mdx            # 17 케이스 스터디 (MDX + frontmatter)
    config.ts                 # Astro Content Collections schema
  pages/
    index.astro               # 홈 — hero + 3 featured chapter + about snippet
    about.astro               # /about — about + skills + experience + talks + contact
    projects/
      index.astro             # /projects — 5 product magazine spread
      [...slug].astro         # 케이스 상세
    resume.astro              # /resume — print-optimized
  components/
    layout/                   # BaseLayout · Header · Footer · Container
    ui/                       # SectionTitle · Divider · Chip · RevealOnScroll
    effects/                  # PaperTexture · LetterReveal · ScrollProgress · HeadlineMetric · InkLink
  styles/
    global.css                # Tailwind v4 entry + @theme tokens + base + prose + print
public/
  materials/                  # 사내 세미나 자료 (PPTX/DOCX/cover PNG)
```

## 디자인 토큰 (요약)

- **종이**: `paper-base #FAF6EC` · `paper-aged #F2EBD8` · `paper-fiber #E8DFC8`
- **잉크**: `ink-primary #2B2A26` · `ink-body #37352F` · `ink-muted #787068` · `ink-subtle #B5AC9E`
- **테두리**: `border-soft #E9E1CE`
- **액센트**: `accent-maple #B8463D` (단풍) · `accent-pine #4F6B3F` (솔잎) · `accent-ink-wash #5A5247` (먹담)
- **타이포**: Fraunces · Gowun Batang · Pretendard Variable · Instrument Sans · JetBrains Mono

자세한 토큰은 `src/styles/global.css`의 `@theme` 블록 참고.

## License

코드는 MIT, 콘텐츠(케이스 스터디 본문, 자료, 디자인 의도)는 All Rights Reserved.

---

**Contact**: devgihonghong@gmail.com
