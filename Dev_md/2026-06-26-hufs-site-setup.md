# HUFS 대학 행정 바이브코딩 교육 사이트 구축

> **날짜**: 2026-06-26
> **작업자**: Claude Opus 4.8 (1M context)
> **사이트**: https://hufs.dreamitbiz.com
> **리포**: https://github.com/aebonlee/hufs
> **대상**: 한국외국어대학교(HUFS) 교직원
> **베이스**: kdn2026 (https://github.com/aebonlee/kdn2026)

---

## 개요

kdn2026 사이트의 디자인/구조를 기반으로 **한국외국어대학교 대학 행정 실무 바이브코딩** 교육 사이트를 구축했습니다.
주제: **"대학 행정 실무를 위한 바이브 코딩"** (Claude 기반), 총 8시간 — 4시간 × 2회.

기존 kdn2026이 *Cursor IDE + ChatGPT* 기반 풀스택 3일(21시간) 과정이었던 것을,
**Claude(Claude.ai / Claude Code) 기반**의 대학 행정 실무 2회차(8시간) 과정으로 전면 재구성했습니다.

## 교육 정보

| 항목 | 내용 |
|------|------|
| 교육대상 | 한국외국어대학교 교직원 (코딩 비전공자 포함) |
| 교육시간 | 8시간 (4시간 × 2회) |
| 핵심 도구 | Claude.ai, Claude Code, GitHub, React+Vite, Google Sheets, GitHub Pages |
| 교육방법 | 강의(20%), 실습(80%) |
| 강사 | 이애본 박사 (드림아이티비즈) |

## 커리큘럼

### 1회차 — Claude 바이브코딩 입문 & 행정 자동화 (4H)
1. 바이브코딩과 Claude 이해 (AI Agent, Claude.ai/Code, 대학 행정 AI 활용)
2. 행정 실무 프롬프트 작성법 (공문·민원·회의록·데이터 정리)
3. 개발 환경 준비 & 첫 프로젝트 (Claude Code 설치, GitHub 계정)
4. 실습 — Claude로 행정 안내 웹페이지 만들기

### 2회차 — 행정 실무 도구 제작 & 배포 (4H)
1. 행정 업무 도구 기획 (학사 FAQ / 신청 양식 / 일정 안내)
2. Claude로 웹앱 만들기 (HTML/React 기초, 자연어 요청·디버깅)
3. 데이터 연동 & 업무 자동화 (Sheets, localStorage, 자동 집계, CSV)
4. 배포 & 실무 적용 (GitHub Pages 배포, 공유, 개인정보·보안 주의)

## 기술 스택

React 19 · Vite 7 · TypeScript · React Router 7 · Supabase · gh-pages 배포

## 작업 내역

### 1. 프로젝트 복사 (kdn2026 → hufs)
- kdn2026의 src/, public/, scripts/, 설정 파일을 hufs에 복사 (.git/node_modules/dist/Dev_md/docs 제외)
- hufs 리포의 .git(remote=hufs)은 그대로 유지

### 2. 설정/브랜딩

| 파일 | 변경 사항 |
|------|-----------|
| `src/config/site.ts` | id=`hufs`, name=`HUFS Vibe Coding`, dbPrefix=`hufs_`, url, themeColor `#003876`(HUFS 네이비), 메뉴 2회차로 축소 |
| `package.json` | name=`hufs-vibe-coding`, homepage 변경 |
| `index.html` | title/description/OG/canonical/theme-color 갱신 |
| `CNAME`, `public/CNAME` | `hufs.dreamitbiz.com` |
| `src/utils/translations.ts` | site.nav(1·2회차), home, footer tagline 갱신 (ko/en) |
| `README.md` | HUFS 안내로 재작성 |

### 3. 콘텐츠 페이지 (전면 재작성)

| 파일 | 내용 |
|------|------|
| `src/pages/Home.tsx` | 2회차 × 4시간, 2탭 타임라인, Claude 중심 6개 도구, 행정 자동화 메시지 |
| `src/pages/Curriculum.tsx` | 2회차 허브 |
| `src/pages/CurriculumBasic.tsx` | 1회차 커리큘럼 (4교시) |
| `src/pages/CurriculumIntermediate.tsx` | 2회차 커리큘럼 (4교시) |
| `src/pages/Lecture.tsx` | 강의안 허브 (환경설정 + 2회차) |
| `src/pages/LectureBasic.tsx` | 1회차 강의안 (Claude 이해·행정 프롬프트·환경·첫 웹페이지) |
| `src/pages/LectureIntermediate.tsx` | 2회차 강의안 (기획·웹앱·데이터·배포) |
| `src/pages/LectureSetup.tsx` | 실습 환경(VS Code/Git/Node.js/GitHub) + **Cursor IDE → Claude Code** 교체 |
| `src/pages/About.tsx` | HUFS 제작의도·플랫폼 구성 |
| `src/pages/PromptCases.tsx` | 업무 프롬프트 사례 40선 — 전력산업 → **대학 행정** 도메인 전면 교체 |
| `src/pages/VibePractice.tsx` | 바이브코딩 실습 24개 — 대학 행정 시나리오 + Claude API |
| `src/pages/Practice.tsx`, `PromptLearning.tsx` | 행정 실무 프롬프트 실습/학습 자료로 교체 |
| `src/components/layout/Navbar.tsx`, `Footer.tsx` | 브랜드 HUFS 갱신 |
| `src/utils/practice.ts` | 점수 테이블 prefix `kdn_` → `site.dbPrefix`(`hufs_`) |

### 4. 라우팅 정리
- 2.5일차/3일차(Extra·Advanced) 커리큘럼·강의안 페이지 삭제 및 `PublicLayout.tsx` 라우트/메뉴 제거
- Claude Code 교육(4종), 프롬프트 실습, 추천사이트 메뉴는 유지 (Claude 과정에 적합)

### 5. 에셋
- `scripts/generate-og.cjs` HUFS 디자인으로 재작성 → `public/og-image.png` 재생성
- 미사용 `kdn-logo.png`, `og-image-v2.png` 삭제
- `public/sitemap.xml`, `robots.txt`, `404.html` HUFS 라우트/타이틀로 갱신

## 빌드/배포

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # tsc -b && vite build (통과 확인)
npm run deploy   # gh-pages -d dist
```

- 빌드: `npm run build` 정상 통과 (TypeScript 에러 0).
- 배포: 현재 GitHub Actions 워크플로 없음 → `npm run deploy`(gh-pages)로 수동 배포.
  GitHub Pages 사용 시 build_type(legacy → workflow) 확인 필요.
- Supabase: 단일 공유 프로젝트 사용, 테이블 prefix `hufs_`. auth 사이트이므로
  URL/anon key fallback이 supabase.ts에 하드코딩되어 있어야 클린 빌드에서 로그인 정상.

## 비고 / TODO
- 교육 실제 일정(날짜)은 미정 상태로 "1회차/2회차"만 표기 — 확정 시 Home/Curriculum에 날짜 반영.
- 구글/카카오 OAuth redirect 허용 도메인에 `hufs.dreamitbiz.com` 추가 필요(운영 전).
- 필요 시 favicon을 HUFS 전용으로 교체.
