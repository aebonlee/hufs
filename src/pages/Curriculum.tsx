import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const Curriculum = (): ReactElement => {
  return (
    <>
      <SEOHead title="커리큘럼" description="한국외국어대학교 대학 행정 실무 바이브코딩 교육 4시간(2개 캠퍼스 동일 진행) 커리큘럼" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">Programs</div>
          <h2>커리큘럼</h2>
          <p>Claude로 배우는 대학 행정 실무 바이브코딩 — 4시간(2개 캠퍼스 동일 진행) 교육 과정 안내</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 교육 과정</div>
            <h2 className="section-title-ed">4시간 <span className="accent">커리큘럼</span></h2>
            <div className="section-meta">4 hours · 2 parts · 2 campuses</div>
          </div>
          <div className="courses">
            <Link className="course featured" to="/curriculum/basic">
              <div className="course-row">
                <span className="course-tag">SESSION / 01</span>
                <span className="course-level"><i className="on" /><i /></span>
              </div>
              <div className="course-num"><span className="slash">/</span>01</div>
              <h3 className="course-title">1부 — Claude 바이브코딩 입문</h3>
              <p className="course-desc">
                바이브코딩과 Claude 이해, 행정 실무 프롬프트 작성법,
                개발 환경 준비, Claude로 첫 행정 안내 웹페이지 만들기
              </p>
              <div className="course-meta-row">
                <span>약 2시간 · 1부</span><span>입문</span><span>실습 중심</span>
              </div>
              <span className="course-cta">
                1부 커리큘럼 보기
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
              <h3 className="course-title">2부 — 행정 실무 도구 제작 &amp; 배포</h3>
              <p className="course-desc">
                행정 업무 도구 기획, Claude로 웹앱 만들기, 데이터 연동·업무 자동화,
                GitHub Pages 배포 및 실무 적용·최종 발표
              </p>
              <div className="course-meta-row">
                <span>약 2시간 · 2부</span><span>실전</span><span>제작 · 배포</span>
              </div>
              <span className="course-cta">
                2부 커리큘럼 보기
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

export default Curriculum;
