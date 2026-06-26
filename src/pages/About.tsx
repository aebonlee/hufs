import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <>
      <SEOHead title="제작의도 | HUFS Vibe Coding" description="한국외국어대학교 교직원 대상 대학 행정 실무 바이브코딩 교육 플랫폼 소개" />

      <section className="page-header-ed">
        <div className="container">
          <div className="eyebrow">About This Site</div>
          <h2>제작의도</h2>
          <p>한국외국어대학교 교직원을 위한 대학 행정 실무 바이브코딩 교육 플랫폼</p>
        </div>
      </section>

      <section className="section-ed">
        <div className="container">
          {/* 제작의도 */}
          <div>
            <div style={{
              background: 'var(--navy-50)',
              borderLeft: '4px solid var(--gold)',
              padding: '28px 32px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '48px',
              lineHeight: 1.8,
              fontSize: '15px',
              color: 'var(--text-primary)',
            }}>
              <strong style={{ fontSize: '17px', color: 'var(--navy-800)', display: 'block', marginBottom: '12px' }}>
                이 사이트는 한국외국어대학교 교직원 여러분을 위해 맞춤 제작되었습니다.
              </strong>
              <p style={{ margin: '0 0 12px' }}>
                드림아이티비즈(DreamIT Biz)는 기관의 실제 업무 환경과 니즈를 반영한 맞춤형 교육 플랫폼을 제작합니다.
                본 사이트는 한국외국어대학교 교직원을 위한 “대학 행정 실무를 위한 바이브 코딩” 교육을 위해 설계되었으며,
                Claude를 활용해 입문부터 도구 제작·배포까지 이어지는 8시간(4시간 × 2회) 커리큘럼을 제공합니다.
              </p>
              <p style={{ margin: 0 }}>
                공문·민원·데이터 정리 등 행정 실무에 바로 적용할 수 있는 프롬프트 사례, AI 실습 환경, 자가 평가 시스템을 통해
                교육 효과를 극대화하고, 교육 이후에도 지속적인 학습이 가능하도록 구성하였습니다.
              </p>
            </div>

            {/* 제작 배경 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              제작 배경
            </h3>
            <div style={{ display: 'grid', gap: '20px', marginBottom: '48px' }}>
              {[
                {
                  icon: 'fa-bullseye',
                  title: '행정 실무 맞춤',
                  desc: 'Claude를 활용해 공문 작성, 민원 응대, 데이터 정리부터 행정 웹도구 제작·배포까지 실무 과제를 완성합니다.'
                },
                {
                  icon: 'fa-laptop-code',
                  title: '실습 중심 플랫폼',
                  desc: '강의 20% + 실습 80%의 구성으로, 바이브코딩을 활용해 직접 행정 도구를 만들어봅니다.'
                },
                {
                  icon: 'fa-comments',
                  title: '코드 없이도 충분',
                  desc: 'Claude와 자연어로 대화하며 만들기 때문에, 코딩 경험이 없는 교직원도 결과물을 완성할 수 있습니다.'
                },
                {
                  icon: 'fa-infinity',
                  title: '지속 학습 지원',
                  desc: '교육 종료 후에도 강의 자료, 프롬프트 학습, 추천 사이트에 지속적으로 접근할 수 있습니다.'
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--navy-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--gold)', fontSize: '18px' }} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-800)', fontSize: '15px' }}>{item.title}</strong>
                    <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 플랫폼 구성 */}
            <h3 style={{ fontSize: '20px', color: 'var(--navy-800)', fontWeight: 700, marginBottom: '20px' }}>
              플랫폼 구성
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '48px',
            }}>
              {[
                { num: '01', title: '교육과정', desc: '8시간(4시간 × 2회) 커리큘럼', link: '/curriculum' },
                { num: '02', title: '강의안', desc: '회차별 상세 학습 자료', link: '/lecture' },
                { num: '03', title: '프롬프트 학습', desc: '작성 기법 + 평가 + 테스트', link: '/prompt-eval' },
                { num: '04', title: '바이브코딩 실습', desc: '프롬프트 작성 실습', link: '/practice' },
                { num: '05', title: '프롬프트 사례', desc: '업무용 프롬프트 사례', link: '/prompt-cases' },
                { num: '06', title: '추천사이트', desc: 'AI 도구 + 학습 리소스', link: '/recommended' },
              ].map((item) => (
                <Link key={item.num} to={item.link} style={{
                  padding: '20px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px' }}>{item.num}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy-800)', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.desc}</div>
                </Link>
              ))}
            </div>

            {/* 제작사 / 강사 링크 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              <Link to="/about/company" style={{
                padding: '28px',
                background: 'var(--ink-surface)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: '#fff',
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>DEVELOPER</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>드림아이티비즈</div>
                <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.5 }}>
                  86개 교육 사이트를 운영하는 에듀테크 전문 기업
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>
                  자세히 보기 <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '11px' }} />
                </div>
              </Link>
              <Link to="/about/instructor" style={{
                padding: '28px',
                background: 'linear-gradient(135deg, var(--navy-50), rgba(212,118,10,0.05))',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: 'var(--navy-800)',
                transition: 'all 0.2s',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>INSTRUCTOR</div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>강사 소개</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  기업 AI 교육 전문 강사 이애본 박사 프로필
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>
                  자세히 보기 <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px', fontSize: '11px' }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
