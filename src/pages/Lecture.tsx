import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Lecture = (): ReactElement => {
  return (
    <>
      <SEOHead title="강의안" description="한국외국어대학교 대학 행정 실무 바이브코딩 강의 자료" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Lecture Notes</div>
          <h2>강의안</h2>
          <p>Claude로 배우는 대학 행정 실무 바이브코딩 — 파트별 강의 자료</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 강의 자료</div>
            <h2 className="section-title-ed">파트별 <span className="accent">강의안</span></h2>
            <div className="section-meta">2 parts · detailed notes</div>
          </div>
          <div className="courses">
            <Link className="course" to="/lecture/setup">
              <div className="course-row">
                <span className="course-tag">SETUP</span>
                <span className="course-level"><i className="on" /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>00</div>
              <h3 className="course-title">실습 환경 설정</h3>
              <p className="course-desc">
                Claude.ai 가입, Claude Code 설치, GitHub 계정 등
                교육 전 미리 준비하면 좋은 실습 환경 안내
              </p>
              <div className="course-meta-row">
                <span>사전 준비</span><span>환경 설정</span>
              </div>
              <span className="course-cta">
                환경 설정 가이드 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course featured" to="/lecture/basic">
              <div className="course-row">
                <span className="course-tag">LECTURE / 01</span>
                <span className="course-level"><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">1부 강의안</h3>
              <p className="course-desc">
                바이브코딩 &amp; Claude 이해, 행정 실무 프롬프트,
                개발 환경 준비, 첫 안내 웹페이지 만들기 강의 자료
              </p>
              <div className="course-meta-row">
                <span>약 2시간 분량</span><span>Claude 입문</span>
              </div>
              <span className="course-cta">
                1부 강의안 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>

            <Link className="course" to="/lecture/intermediate">
              <div className="course-row">
                <span className="course-tag">LECTURE / 02</span>
                <span className="course-level"><i className="on" /><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>02</div>
              <h3 className="course-title">2부 강의안</h3>
              <p className="course-desc">
                행정 도구 기획, Claude로 웹앱 만들기, 데이터 연동·자동화,
                GitHub Pages 배포 및 실무 적용 강의 자료
              </p>
              <div className="course-meta-row">
                <span>약 2시간 분량</span><span>도구 제작 &amp; 배포</span>
              </div>
              <span className="course-cta">
                2부 강의안 보기
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lecture;
