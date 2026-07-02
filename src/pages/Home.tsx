import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
import type { ReactElement } from 'react';

/* ── Data ── */
const TIMELINE_DAY1 = [
  {
    n: '01', time: '1교시 · 10:00 ─ 11:00 · 60분',
    title: '바이브코딩·Claude 이해 & 행정 프롬프트 작성법',
    points: [
      '바이브코딩이란 — AI에게 자연어로 의도를 전달해 만드는 개발',
      'Claude(클로드)란 — Anthropic의 대화형 AI와 AI Agent',
      'Claude.ai · Claude Code · Claude Desktop 한눈에 보기',
      '좋은 프롬프트의 4원칙 — 역할·맥락·형식·예시',
      '공문·안내문·민원 응대·회의록·표 데이터 정리 프롬프트',
      { p: true, t: '실습 — Claude.ai 가입 후 내 업무 메일·공문을 Claude로 작성하기' },
    ]
  },
  {
    n: '02', time: '2교시 · 11:00 ─ 12:00 · 60분',
    title: '개발 환경 준비 & 행정 안내 웹페이지 만들기',
    points: [
      'Claude Code 설치·로그인, GitHub 계정 만들기(저장·무료 배포)',
      '노코드/로우코드 도구 둘러보기, AI에게 프로젝트 생성 맡기기',
      '“무엇을 만들지” 한 문장으로 정의하기',
      'Claude에게 웹페이지를 요청하고 문구·색상·레이아웃 자연어로 수정',
      { p: true, t: '결과물 — 학과/부서 안내 한 장 웹페이지 완성' },
    ]
  },
];

const TIMELINE_DAY2 = [
  {
    n: '01', time: '1교시 · 13:00 ─ 14:00 · 60분',
    title: '행정 업무 도구 기획 & Claude로 웹앱 만들기',
    points: [
      '반복되는 행정 업무에서 “자동화 거리” 찾기',
      '요구사항·화면 설계 — 누가·무엇을·어떻게 / 입력·목록·검색',
      'Claude와 함께 기획서 자동 작성 후 웹앱으로 옮기기',
      'HTML·React 기초를 가볍게 이해하고 기능을 자연어로 요청',
      '오류는 에러 메시지를 붙여 고치고, 기능 단위로 키워가기',
      { p: true, t: '실습 — 학사 FAQ / 신청 양식 / 일정 안내 중 택1 구현' },
    ]
  },
  {
    n: '02', time: '2교시 · 14:00 ─ 15:00 · 60분',
    title: '데이터 연동·자동화 & 배포·실무 적용',
    points: [
      'Google 스프레드시트·문서를 데이터로 활용, 저장·불러오기',
      '반복 작업(분류·집계·정리) 자동화, 간단한 챗봇/검색 붙이기',
      'GitHub Pages로 만든 도구를 무료 배포하고 링크로 공유',
      '실무 적용 전략과 보안·개인정보 주의점',
      { p: true, t: '최종 — 내가 만든 행정 도구 발표 & 피드백' },
    ]
  },
];

const TOOLS = [
  { name: 'Claude.ai', cat: 'LLM · Anthropic', desc: '대화형 AI. 공문·기획·코드 작성을 자연어로 요청.', mark: 'C' },
  { name: 'Claude Code', cat: 'AI AGENT · CLI', desc: '터미널 기반 코딩 에이전트. 파일 생성부터 배포까지 대행.', mark: 'CC' },
  { name: 'GitHub', cat: 'VERSION CONTROL', desc: '코드 저장소 & 무료 웹 배포(GitHub Pages).', mark: 'G' },
  { name: 'React + Vite', cat: 'FRAMEWORK · Frontend', desc: '웹 화면을 만드는 도구. AI가 코드를 대신 작성.', mark: 'R' },
  { name: 'Google Sheets', cat: 'PRODUCTIVITY · Data', desc: '행정 데이터를 다루는 익숙한 표 도구를 데이터로 연결.', mark: 'GS' },
  { name: 'GitHub Pages', cat: 'DEPLOY · Hosting', desc: '만든 웹도구를 무료로 인터넷에 공개하고 공유.', mark: 'P' },
];

const PILLARS = [
  { n: '/01', t: '클로드와 대화하며', d: '코드를 외우지 않습니다. Claude에게 자연어로 요청하고, 수정하고, 완성합니다. 비전공자도 충분합니다.' },
  { n: '/02', t: '행정 실무 중심', d: '공문 작성, 민원 응대, 데이터 정리, 안내 페이지 등 실제 대학 행정 업무를 소재로 만듭니다.' },
  { n: '/03', t: '결과물을 손에', d: '4시간 뒤, 직접 만든 행정 웹도구를 배포해 동료와 공유하고 바로 업무에 적용합니다.' },
];

type TimelinePoint = string | { p: boolean; t: string };

const Home = (): ReactElement => {
  const [tab, setTab] = useState<'day1' | 'day2'>('day1');
  const data = tab === 'day1' ? TIMELINE_DAY1 : TIMELINE_DAY2;

  const marqueePhrase = 'Vibe Coding · Claude · Claude Code · 행정 자동화 · 공문 작성 · 데이터 정리 · 웹도구 · GitHub Pages · 배포';

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* ── Hero ── */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span>한국외국어대학교 · 2026 · 대학 행정 실무를 위한 바이브 코딩 기초</span>
              </div>
              <h1 className="hero-title-ed">
                코드를 몰라도<br />
                <span className="accent">Claude와 함께</span><br />
                <span className="accent">행정 업무를 자동화</span>
              </h1>
              <p className="hero-lead">
                한국외국어대학교 교직원을 위한 바이브코딩 실습 교육.
                Claude(클로드)와 대화하며 공문·민원·데이터 정리부터
                나만의 행정 웹도구 제작·배포까지, 4시간 집중 과정입니다.
                서울·글로벌 2개 캠퍼스에서 동일한 내용으로 진행합니다.
              </p>
              <div className="hero-actions-ed">
                <Link className="btn btn-primary" to="/curriculum/basic">
                  커리큘럼 살펴보기
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link className="btn btn-ghost" to="/practice">
                  실습 시작하기
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <div className="metric-stack">
                <div className="metric">
                  <div className="metric-num"><span className="accent">2</span></div>
                  <div className="metric-label">진행 캠퍼스</div>
                </div>
                <div className="metric">
                  <div className="metric-num">4<span className="small">h</span></div>
                  <div className="metric-label">교육 시간</div>
                </div>
                <div className="metric">
                  <div className="metric-num">Claude</div>
                  <div className="metric-label">핵심 도구</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">80</span><span className="small">%</span></div>
                  <div className="metric-label">실습 비율</div>
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-eyebrow">2026 · HUFS Vibe Coding</div>
                <div className="hero-card-title">교육 일정 안내 · 4시간 동일 과정 2회</div>
                <ul className="hero-card-list">
                  <li>7/28(화) — 서울캠퍼스 교수학습개발원 1층 108호 (PC 실습실)</li>
                  <li>7/30(목) — 글로벌캠퍼스 백년관 2층 213호 (멀티미디어교육실)</li>
                  <li>시간 — 10:00 ~ 15:00 (점심 12:00 ~ 13:00)</li>
                  <li>대상 — 한국외국어대학교 교직원</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee">
        <div className="marquee-track">
          <span>
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                {marqueePhrase.split(' · ').map((w, j) => (
                  <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
                ))}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Courses ── */}
      <section className="section-ed" id="curriculum">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Programs</div>
            <h2 className="section-title-ed">4시간 <span className="accent">커리큘럼</span></h2>
            <div className="section-meta">4 hours · 2 campuses · Claude</div>
          </div>
          <div className="courses">
            <Link className="course featured" to="/curriculum/basic">
              <div className="course-row">
                <span className="course-tag">SESSION / 01</span>
                <span className="course-level"><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">Claude 바이브코딩 입문</h3>
              <p className="course-desc">
                바이브코딩과 Claude를 이해하고, 행정 실무 프롬프트를 익힌 뒤
                개발 환경을 갖춰 첫 안내 웹페이지를 만듭니다.
              </p>
              <div className="course-meta-row">
                <span>약 2시간</span><span>1부</span><span>입문 · 실습 포함</span>
              </div>
              <span className="course-cta">
                커리큘럼 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
            <Link className="course" to="/curriculum/intermediate">
              <div className="course-row">
                <span className="course-tag">SESSION / 02</span>
                <span className="course-level"><i className="on" /><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>02</div>
              <h3 className="course-title">행정 실무 도구 제작 &amp; 배포</h3>
              <p className="course-desc">
                실제 행정 업무를 기획해 Claude로 웹앱을 만들고, 데이터를 연동·자동화한 뒤
                GitHub Pages로 배포해 동료와 공유합니다.
              </p>
              <div className="course-meta-row">
                <span>약 2시간</span><span>2부</span><span>제작 · 배포</span>
              </div>
              <span className="course-cta">
                커리큘럼 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Curriculum Timeline ── */}
      <section className="section-ed" id="curriculum-detail" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Schedule</div>
            <h2 className="section-title-ed"><span className="accent">2개 파트</span> &times; 약 2시간</h2>
            <div className="section-meta">
              {tab === 'day1' ? 'Session 1 — Claude 입문 & 행정 자동화' : 'Session 2 — 행정 도구 제작 & 배포'}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              {(['day1', 'day2'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setTab(d)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '20px',
                    border: tab === d ? '2px solid var(--ink-surface)' : '1px solid var(--line)',
                    background: tab === d ? 'var(--ink-surface)' : 'var(--bg-white)',
                    color: tab === d ? '#fff' : 'var(--text-secondary)',
                    fontSize: '13px',
                    fontWeight: tab === d ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit',
                  }}
                >
                  {d === 'day1' ? '1부 (2H)' : '2부 (2H)'}
                </button>
              ))}
            </div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>
                {tab === 'day1' ? '입문에서\n첫 웹페이지까지' : '기획에서\n배포까지'}
              </h3>
              <p>
                {tab === 'day1'
                  ? 'Claude와 바이브코딩을 이해하고, 행정 실무 프롬프트를 익힌 뒤 개발 환경을 갖춰 첫 안내 웹페이지를 만듭니다.'
                  : '실제 행정 업무를 기획해 Claude로 웹앱을 만들고, 데이터를 연동·자동화한 뒤 GitHub Pages로 배포합니다.'}
              </p>
              <div className="curr-tabs">
                <button className={`curr-tab ${tab === 'day1' ? 'active' : ''}`} onClick={() => setTab('day1')}>1부</button>
                <button className={`curr-tab ${tab === 'day2' ? 'active' : ''}`} onClick={() => setTab('day2')}>2부</button>
              </div>
              <div className="curr-meta">
                {tab === 'day1' ? (
                  <>
                    <div className="curr-meta-row"><span className="curr-meta-key">구성</span><span className="curr-meta-val">1부 · 약 2시간</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">주제</span><span className="curr-meta-val">Claude 입문 + 행정 자동화</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">Claude.ai · Claude Code · GitHub</span></div>
                  </>
                ) : (
                  <>
                    <div className="curr-meta-row"><span className="curr-meta-key">구성</span><span className="curr-meta-val">2부 · 약 2시간</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">주제</span><span className="curr-meta-val">행정 도구 제작 + 배포</span></div>
                    <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">React · Sheets · GitHub Pages</span></div>
                  </>
                )}
              </div>
            </aside>

            <div className="timeline">
              {data.map((item) => (
                <div className="tl-item" key={item.n}>
                  <div>
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-num">{item.n}<span>/02</span></div>
                  </div>
                  <div className="tl-body">
                    <h4>{item.title}</h4>
                    <ul>
                      {item.points.map((p: TimelinePoint, i: number) => (
                        typeof p === 'string'
                          ? <li key={i}>{p}</li>
                          : <li key={i} className="practice">{p.t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section-ed" id="tools" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 03 / Toolkit</div>
            <h2 className="section-title-ed">다루는 <span className="accent">도구들</span></h2>
            <div className="section-meta">6 core tools · Claude 중심</div>
          </div>
          <div className="tools-grid">
            {TOOLS.map((t, i) => (
              <div className="tool" key={i}>
                <div className="tool-mark">{t.mark}</div>
                <div>
                  <div className="tool-cat">{t.cat}</div>
                  <div className="tool-name">{t.name}</div>
                </div>
                <p className="tool-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section-ed" id="approach" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 04 / Approach</div>
            <h2 className="section-title-ed">학습 하는 <span className="accent">방식</span></h2>
            <div className="section-meta">3 principles</div>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-num">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-ed">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">&mdash; 교육 안내</div>
              <h2 className="cta-title-ed">
                4시간 후,<br />
                <span className="accent">행정 업무가 가벼워집니다.</span>
              </h2>
            </div>
            <div className="cta-side">
              <p>
                강의 20% · 실습 80%의 집중 과정. 코딩 경험이 없어도
                Claude와 함께라면 충분합니다. 한국외국어대학교 교직원
                누구나 참여할 수 있습니다.
              </p>
              <Link className="btn btn-cta" to="/login">
                로그인하고 시작하기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
