import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const TIMELINE = [
  {
    n: '01', time: '1교시 · 13:00 ─ 14:00 · 60분',
    title: '행정 업무 도구 기획 & Claude로 웹앱 만들기',
    points: [
      '반복되는 행정 업무에서 “자동화 거리” 찾기',
      '요구사항 정의 — 누가, 무엇을, 어떻게',
      '화면 설계 — 입력 · 목록 · 검색 구조 잡기, 기획서 자동 작성',
      'HTML · React 기초를 가볍게 이해하고 기능을 자연어로 요청',
      '오류는 에러 메시지를 붙여 고치고, 버튼·폼·목록 단위로 키우기',
      { p: true, t: '실습 — 학사 FAQ / 신청 양식 / 일정 안내 중 택1 구현' },
    ]
  },
  {
    n: '02', time: '2교시 · 14:00 ─ 15:00 · 60분',
    title: '데이터 연동·자동화 & 배포·실무 적용',
    points: [
      'Google 스프레드시트·문서를 데이터로 활용, 저장·불러오기',
      '반복 작업(분류·집계·정리)을 AI로 자동화, 챗봇/검색 붙이기',
      'GitHub Pages로 만든 도구를 무료 배포하고 링크로 공유',
      '실무 적용 전략과 보안·개인정보 주의점',
      { p: true, t: '최종 — 내가 만든 행정 도구 발표 & 피드백' },
    ]
  },
];

type TimelinePoint = string | { p: boolean; t: string };

const CurriculumIntermediate = (): ReactElement => {
  return (
    <>
      <SEOHead title="2부 커리큘럼 — 행정 실무 도구 제작 & 배포" description="대학 행정 실무를 위한 바이브 코딩 기초 2부: 도구 기획, Claude 웹앱, 데이터 연동·자동화, 배포" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Session 2 · 2부 · 2교시</div>
          <h2>2부 — 행정 실무 도구 제작 &amp; 배포</h2>
          <p>행정 도구 기획, Claude로 웹앱 만들기, 데이터 연동·업무 자동화, GitHub Pages 배포</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 2부</div>
            <h2 className="section-title-ed"><span className="accent">2교시</span> 상세 커리큘럼</h2>
            <div className="section-meta">Session 2 — Build & Deploy Admin Tools</div>
          </div>

          <div className="curriculum-ed">
            <aside className="curr-aside">
              <h3>{'기획에서\n배포까지'}</h3>
              <p>
                실제 행정 업무를 소재로 도구를 기획하고, Claude로 웹앱을
                만듭니다. 데이터를 연동해 반복 업무를 자동화한 뒤
                GitHub Pages로 배포해 동료와 공유합니다.
              </p>
              <div className="curr-meta">
                <div className="curr-meta-row"><span className="curr-meta-key">일정</span><span className="curr-meta-val">2부 · 2교시</span></div>
                <div className="curr-meta-row"><span className="curr-meta-key">도구</span><span className="curr-meta-val">React · Google Sheets · GitHub Pages</span></div>
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

export default CurriculumIntermediate;
