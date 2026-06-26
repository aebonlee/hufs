import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const sections = [
  { id: 'part1', label: 'Part1. 바이브코딩 & Claude 이해' },
  { id: 'part2', label: 'Part2. 행정 실무 프롬프트' },
  { id: 'part3', label: 'Part3. 개발 환경 준비' },
  { id: 'part4', label: 'Part4. 첫 행정 웹페이지 만들기' },
];

const LectureBasic = (): ReactElement => {
  const [activeSection, setActiveSection] = useState('part1');

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <SEOHead title="1회차 강의안 — Claude 바이브코딩 입문" description="대학 행정 바이브코딩 1회차: Claude 이해, 행정 프롬프트, 개발 환경, 첫 웹페이지" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Session 1 Lecture</div>
          <h2>1회차 강의안 — Claude 바이브코딩 입문</h2>
          <p>1회차 · 09:00~13:00 · 4시간</p>
        </div>
      </section>

      <section className="section">
        <div className="lecture-layout">

          {/* ── 사이드바 ── */}
          <aside className="lecture-sidebar">
            <div className="ls-title">
              <i className="fa-solid fa-book-open" />
              1회차 목차
            </div>

            <ul className="ls-nav">
              {sections.map((s) => (
                <li key={s.id} className="ls-nav-item">
                  <button
                    className={`ls-nav-link${activeSection === s.id ? ' active' : ''}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    <i className="fa-solid fa-circle" />
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="ls-divider" />

            <div className="ls-guide">
              <div className="ls-guide-label">학습 목표</div>
              <ul className="ls-guide-list">
                <li>바이브코딩과 Claude의 개념을 이해합니다</li>
                <li>행정 실무에 쓰는 프롬프트를 작성합니다</li>
                <li>Claude Code 등 개발 환경을 준비합니다</li>
                <li>Claude로 첫 행정 안내 웹페이지를 만듭니다</li>
              </ul>
            </div>

            <div className="ls-divider" />

            <Link to="/lecture/intermediate" className="ls-course-link">
              <i className="fa-solid fa-arrow-right" />
              2회차 강의안으로 이동
              <span>Session 2</span>
            </Link>
          </aside>

          {/* ── 메인 콘텐츠 ── */}
          <div className="lecture-main">
            <div className="lecture-page" style={{ padding: 0, maxWidth: 'none' }}>

              {/* ═══ Part 1 ═══ */}
              <div id="part1" className="lecture-section">
                <h3>Part 1. 바이브코딩 &amp; Claude 이해 (09:00~10:00)</h3>
                <div className="lecture-content">
                  <h4>1. 바이브코딩(Vibe Coding)이란?</h4>
                  <p>
                    바이브코딩은 AI에게 자연어로 만들고 싶은 것의 의도(vibe)를 전달하면
                    AI가 코드를 생성해 주는 새로운 개발 방식입니다. 코드를 한 줄씩 직접
                    타이핑하는 대신, AI와 대화하며 프로그램을 완성합니다. 코딩 비전공자인
                    행정 직원도 “무엇을 만들고 싶은지”만 명확히 말할 수 있으면 충분합니다.
                  </p>

                  <h4>2. Claude(클로드)란?</h4>
                  <div className="example-box">
                    <strong>Claude</strong>: Anthropic이 만든 대화형 AI로, 긴 문서 이해와
                    안전한 응답, 코드 작성에 강점이 있습니다.<br /><br />
                    <strong>Claude.ai</strong>: 웹·앱에서 대화하는 가장 쉬운 방식 — 공문 초안,
                    회의록 정리, 데이터 요약에 바로 활용<br />
                    <strong>Claude Code</strong>: 터미널에서 동작하는 AI 코딩 에이전트 — 파일 생성,
                    코드 작성, 배포까지 대신 수행<br />
                    <strong>Claude Desktop</strong>: 데스크톱 앱으로 파일·도구와 연결해 사용
                  </div>

                  <h4>3. 대학 행정에서 AI를 어디에 쓸까?</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', margin: '1.2rem 0' }}>
                    {[
                      { num: '01', icon: 'fa-solid fa-file-lines', name: '문서 작성', tag: '공문·안내', desc: '공문, 안내문, 보고서 초안을 빠르게 작성하고 다듬기', color: '#003876' },
                      { num: '02', icon: 'fa-solid fa-headset', name: '민원 응대', tag: 'CS', desc: '반복 문의에 대한 정중한 답변 초안, FAQ 정리', color: '#C8102E' },
                      { num: '03', icon: 'fa-solid fa-table', name: '데이터 정리', tag: '엑셀', desc: '명단·신청 데이터의 분류·요약·중복 제거', color: '#00855A' },
                      { num: '04', icon: 'fa-solid fa-globe', name: '안내 웹페이지', tag: 'WEB', desc: '학사 일정, FAQ, 신청 안내를 웹페이지로 제작', color: '#D4760A' },
                    ].map(item => (
                      <div key={item.num} style={{
                        background: 'var(--navy-50)', border: '1px solid var(--line)',
                        borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px',
                        borderTop: `3px solid ${item.color}`,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '13px', fontWeight: 800, color: item.color, opacity: 0.6 }}>{item.num}</span>
                          <span style={{ fontSize: '11px', fontWeight: 700, color: item.color, background: `${item.color}18`, padding: '3px 10px', borderRadius: '10px' }}>{item.tag}</span>
                        </div>
                        <i className={item.icon} style={{ fontSize: '28px', color: item.color }} />
                        <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy-800)' }}>{item.name}</div>
                        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="tip-box">
                    <strong>실습</strong>: claude.ai에 접속해 계정을 만들고,
                    “우리 부서 신입 직원 환영 메일을 정중한 톤으로 작성해줘”라고 요청해 보세요.
                    톤·길이를 바꿔가며 다시 요청해 보세요.
                  </div>
                </div>
              </div>

              {/* ═══ Part 2 ═══ */}
              <div id="part2" className="lecture-section">
                <h3>Part 2. 행정 실무를 위한 Claude 프롬프트 작성법 (10:00~11:00)</h3>
                <div className="lecture-content">
                  <h4>1. 좋은 프롬프트의 4원칙</h4>
                  <div className="example-box">
                    <strong>① 역할(Role)</strong>: “너는 대학 학사팀 행정 담당자야”<br />
                    <strong>② 맥락(Context)</strong>: 대상, 목적, 배경 정보를 함께 제공<br />
                    <strong>③ 형식(Format)</strong>: 표·목록·이메일 등 원하는 출력 형태 지정<br />
                    <strong>④ 예시(Example)</strong>: 참고할 샘플이나 톤을 함께 제시
                  </div>

                  <h4>2. 공문·안내문 작성 프롬프트</h4>
                  <div className="prompt-example">{`너는 대학 학사팀의 행정 담당자야.
아래 내용으로 학생 대상 공지문을 작성해줘.

[내용]
- 2026학년도 1학기 수강신청 정정 기간 안내
- 기간: 3월 2일(월) 10:00 ~ 3월 4일(수) 17:00
- 방법: 종합정보시스템 → 수강신청 → 정정
- 문의: 학사팀 02-000-0000

[형식]
- 정중하고 명확한 공지문 톤
- 제목 + 본문 + 문의처
- 핵심 일정은 굵게 강조`}</div>

                  <h4>3. 민원 응대·회의록 정리 프롬프트</h4>
                  <div className="prompt-example">{`[민원 응대]
"학생이 '졸업 요건 학점을 못 채웠는데 추가 수강이 가능한가요'라고
문의했어. 정중하고 공감하는 톤으로, 일반적인 절차를 안내하는
답변 초안을 작성해줘. 확정 답변이 아니라 담당자 확인이 필요하다는
안내도 포함해줘."

[회의록 정리]
"아래 회의 메모를 '결정사항 / 논의사항 / 후속조치(담당자·기한)'
세 항목의 표로 정리해줘.
(메모 붙여넣기)"`}</div>

                  <h4>4. 엑셀/표 데이터 정리 프롬프트</h4>
                  <div className="prompt-example">{`"아래 신청자 명단을 학과별로 그룹화하고,
학과별 인원수를 표로 요약해줘.
중복된 이름이 있으면 표시해줘.
(명단 데이터 붙여넣기)"`}</div>

                  <div className="tip-box">
                    <strong>개인정보 주의</strong>: 실제 학생·교직원의 이름, 학번, 연락처 등
                    개인정보는 그대로 입력하지 않습니다. 가명·예시 데이터로 연습하고,
                    실무 적용 시에는 기관의 개인정보 보호 지침을 따릅니다.
                  </div>
                </div>
              </div>

              {/* ═══ Part 3 ═══ */}
              <div id="part3" className="lecture-section">
                <h3>Part 3. 개발 환경 준비 &amp; 첫 프로젝트 (11:00~12:00)</h3>
                <div className="lecture-content">
                  <h4>1. 무엇을 준비하나요?</h4>
                  <ul>
                    <li><strong>Claude.ai 계정</strong>: 웹에서 바로 대화 — 가장 쉬운 시작점</li>
                    <li><strong>Claude Code</strong>: 터미널 기반 AI 코딩 에이전트 (선택, 실습용)</li>
                    <li><strong>GitHub 계정</strong>: 코드 저장 + GitHub Pages 무료 배포</li>
                    <li><strong>웹 브라우저</strong>: Chrome 등 최신 브라우저면 충분</li>
                  </ul>

                  <h4>2. Claude Code 설치 (실습용)</h4>
                  <div className="prompt-example">{`# Node.js 설치 확인 (없으면 nodejs.org에서 설치)
node -v

# Claude Code 설치 (npm)
npm install -g @anthropic-ai/claude-code

# 실행 — 프로젝트 폴더에서
claude

# 첫 로그인은 안내에 따라 브라우저에서 인증`}</div>
                  <div className="example-box">
                    터미널이 낯설다면 <strong>Claude.ai 웹</strong>만으로도 1회차 실습을
                    충분히 따라올 수 있습니다. Claude Code는 “파일을 직접 만들어주는”
                    경험을 위해 함께 소개합니다.
                  </div>

                  <h4>3. GitHub 계정 만들기</h4>
                  <ul>
                    <li><strong>github.com</strong> 접속 → Sign up → 이메일·비밀번호 입력</li>
                    <li>무료 플랜으로 충분 — 저장소(Repository) 생성 가능</li>
                    <li>나중에 <strong>GitHub Pages</strong>로 만든 웹페이지를 무료 공개</li>
                  </ul>

                  <h4>4. AI에게 프로젝트 생성 맡기기</h4>
                  <div className="prompt-example">{`[Claude / Claude Code에게]
"학과 안내용 간단한 한 장짜리 웹페이지를 만들고 싶어.
HTML 파일 하나로, 별도 설치 없이 브라우저에서 바로 열리게 해줘.
상단 제목, 소개 문단, 연락처 영역이 있으면 좋겠어."`}</div>

                  <div className="tip-box">
                    <strong>실습</strong>: GitHub 계정을 만들고, Claude에게 위 프롬프트로
                    HTML 한 장을 요청해 받은 코드를 <code className="inline-code">index.html</code>로
                    저장한 뒤 더블클릭해 브라우저에서 열어보세요.
                  </div>
                </div>
              </div>

              {/* ═══ Part 4 ═══ */}
              <div id="part4" className="lecture-section">
                <h3>Part 4. Claude로 첫 행정 안내 웹페이지 만들기 (12:00~13:00)</h3>
                <div className="lecture-content">
                  <h4>1. “무엇을 만들지” 한 문장으로 정의하기</h4>
                  <p>
                    좋은 결과물은 명확한 한 문장에서 시작합니다. 예: “우리 부서를 찾는
                    학생을 위한 안내 한 장 페이지 — 부서 소개, 업무 안내, 위치·연락처,
                    자주 묻는 질문이 들어간다.”
                  </p>

                  <h4>2. Claude에게 페이지 요청하기</h4>
                  <div className="prompt-example">{`"아래 내용으로 보기 좋은 한 장짜리 안내 웹페이지를 만들어줘.
HTML/CSS를 한 파일에 담고, 모바일에서도 잘 보이게 반응형으로.

[부서] 국제처 (International Office)
[소개] 외국인 유학생과 교환학생 지원 업무 담당
[업무] 비자/체류, 기숙사 신청, 한국어 프로그램 안내
[FAQ] 비자 연장은 어떻게? / 기숙사 신청 기간은?
[연락처] office@hufs.ac.kr · 02-000-0000 · 본관 2층

색상은 남색(네이비) 계열로 차분하게, 제목은 크게."`}</div>

                  <h4>3. 자연어로 수정하기</h4>
                  <div className="example-box">
                    “FAQ를 접고 펼 수 있는 형태로 바꿔줘”<br />
                    “상단에 학교 로고가 들어갈 자리를 만들어줘”<br />
                    “연락처 영역의 글씨를 더 크게, 버튼처럼 보이게 해줘”<br />
                    “전체 톤을 더 밝고 친근하게 바꿔줘”
                  </div>

                  <h4>4. 결과물 확인 & 저장</h4>
                  <ul>
                    <li>받은 코드를 <code className="inline-code">index.html</code>로 저장</li>
                    <li>파일을 더블클릭해 브라우저에서 미리보기</li>
                    <li>마음에 들지 않는 부분은 다시 Claude에게 수정 요청</li>
                  </ul>

                  <h4>5. 1회차 실습 체크리스트</h4>
                  <ul>
                    <li>Claude.ai 계정 생성 및 첫 대화</li>
                    <li>역할·맥락·형식·예시를 갖춘 행정 프롬프트 작성</li>
                    <li>공문/민원/데이터 정리 프롬프트 각 1회 이상 연습</li>
                    <li>GitHub 계정 생성</li>
                    <li>Claude로 행정 안내 웹페이지 1장 완성 및 저장</li>
                  </ul>

                  <div className="tip-box">
                    <strong>다음 시간 예고</strong>: 2회차에서는 이 페이지를 실제 “도구”로
                    발전시킵니다. 데이터를 연동하고, 기능을 붙이고, GitHub Pages로
                    배포해 동료가 링크로 바로 쓸 수 있게 만듭니다.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LectureBasic;
