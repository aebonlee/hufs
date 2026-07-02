import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const TIMELINE = [
  {
    n: '01', time: '1교시 · 10:00 ─ 11:00 · 60분',
    title: '바이브코딩·Claude 이해 & 행정 프롬프트 작성법',
    points: [
      '바이브코딩이란 — AI에게 자연어로 의도를 전달해 만드는 개발',
      'Claude(클로드)란 — Anthropic의 대화형 AI와 AI Agent',
      'Claude.ai · Claude Code · Claude Desktop 한눈에 보기',
      '대학 행정에서의 AI 활용 사례 — 공문·민원·데이터·안내',
      '좋은 프롬프트의 4원칙 — 역할 · 맥락 · 형식 · 예시',
      '공문·안내문·민원 응대·회의록·표 데이터 정리 프롬프트',
      { p: true, t: '실습 — Claude.ai 가입 후 내 업무 메일·공문을 Claude로 작성하기' },
    ]
  },
  {
    n: '02', time: '2교시 · 11:00 ─ 12:00 · 60분',
    title: '개발 환경 준비 & 행정 안내 웹페이지 만들기',
    points: [
      'Claude Code 설치·로그인, GitHub 계정 만들기 — 저장과 무료 배포',
      '노코드/로우코드 도구 둘러보기, AI에게 프로젝트 생성 맡기기',
      '“무엇을 만들지” 한 문장으로 정의하기',
      'Claude에게 웹페이지를 요청하고 미리보기',
      '문구·색상·레이아웃을 자연어로 수정하고 저장·다시 열기',
      { p: true, t: '결과물 — 학과/부서 안내 한 장 웹페이지 완성' },
    ]
  },
];

type TimelinePoint = string | { p: boolean; t: string };

const CurriculumBasic = (): ReactElement => {
  return (
    <>
      <SEOHead title="1부 커리큘럼 — Claude 바이브코딩 입문" description="대학 행정 실무를 위한 바이브 코딩 기초 1부: Claude 이해, 행정 프롬프트, 개발 환경, 첫 웹페이지" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Session 1 · 1부 · 2교시</div>
          <h2>1부 — Claude 바이브코딩 입문</h2>
          <p>바이브코딩 &amp; Claude 이해, 행정 실무 프롬프트, 개발 환경 준비, 첫 안내 웹페이지 만들기</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 1부</div>
            <h2 className="section-title-ed"><span className="accent">2교시</span> 상세 커리큘럼</h2>
            <div className="section-meta">Session 1 — Claude & Admin Automation</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'입문에서\n첫 웹페이지까지'}</h3>
              <p>
                바이브코딩과 Claude의 개념을 이해하고, 행정 실무에 바로 쓰는
                프롬프트 작성법을 익힙니다. 개발 환경을 갖춘 뒤
                Claude로 첫 행정 안내 웹페이지를 만듭니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">일정</span><span className="curr-meta-val">1부 · 2교시</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">Claude.ai · Claude Code · GitHub</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">포맷</span><span className="curr-meta-val">강의 20% + 실습 80%</span></div>
              </div>
            </aside>

            <div className="timeline">
              {TIMELINE.map((item) => (
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
    </>
  );
};

export default CurriculumBasic;
