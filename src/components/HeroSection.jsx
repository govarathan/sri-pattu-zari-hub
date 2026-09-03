import React from 'react';
import { Phone, Award, Zap, Truck, ShieldAlert } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSection({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;

  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '48px',
    paddingBottom: '80px',
    borderBottom: '1px solid rgba(229,193,88,0.15)',
    zIndex: 10,
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    alignItems: 'center',
  };

  const textColumnStyle = {
    textAlign: 'left',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'linear-gradient(to right, rgba(229,193,88,0.15), rgba(115,0,25,0.3), rgba(229,193,88,0.08))',
    border: '1px solid rgba(229,193,88,0.35)',
    padding: '6px 18px',
    borderRadius: '9999px',
    marginBottom: '24px',
  };

  const headlineStyle = {
    fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    marginBottom: '20px',
    color: '#f6f2ea',
  };

  const descStyle = {
    fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
    color: 'rgba(246,242,234,0.8)',
    fontWeight: 300,
    lineHeight: 1.7,
    maxWidth: '640px',
    marginBottom: '28px',
  };

  const highlightsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '12px',
    marginBottom: '28px',
  };

  const highlightCardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'rgba(22,10,16,0.8)',
    border: '1px solid rgba(229,193,88,0.25)',
    padding: '14px 16px',
    borderRadius: '16px',
  };

  const ctaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
  };

  const assuranceStyle = {
    background: 'rgba(26,8,18,0.7)',
    border: '1px solid rgba(229,193,88,0.25)',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    backdropFilter: 'blur(24px)',
    maxWidth: '640px',
  };

  const visualColumnStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  };

  const cardStyle = {
    position: 'relative',
    maxWidth: '420px',
    width: '100%',
    padding: '24px',
    borderRadius: '24px',
    background: 'rgba(22,10,16,0.85)',
    backdropFilter: 'blur(20px)',
    border: '2px solid rgba(229,193,88,0.35)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(229,193,88,0.1)',
    transition: 'transform 0.5s ease',
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    border: '1px solid rgba(229,193,88,0.25)',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '16px',
    marginTop: '64px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(229,193,88,0.15)',
  };

  const statCardStyle = {
    padding: '20px',
    textAlign: 'center',
    background: 'rgba(22,10,16,0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(229,193,88,0.2)',
    borderRadius: '20px',
  };

  return (
    <section id="hero" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={gridStyle} className="hero-grid">
          
          {/* Left Text Column */}
          <div style={textColumnStyle}>
            
            {/* Badge */}
            <div style={badgeStyle}>
              <Award style={{ width: 16, height: 16, color: '#e5c158' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f7e7a9', textTransform: 'uppercase' }}>
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury" style={headlineStyle}>
              {t.hero.titlePrefix}{' '}
              <span className="gold-gradient-text" style={{ fontStyle: 'italic' }}>
                {t.hero.titleHighlight}
              </span>
              <br />
              {t.hero.titleSuffix}
            </h1>

            {/* Description */}
            <p style={descStyle}>{t.hero.desc}</p>

            {/* Value Highlights */}
            <div style={highlightsGridStyle}>
              <div style={highlightCardStyle}>
                <Zap style={{ width: 20, height: 20, color: '#e5c158', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f7e7a9' }}>{t.hero.millRateTag}</span>
              </div>
              <div style={highlightCardStyle}>
                <Truck style={{ width: 20, height: 20, color: '#34d399', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f7e7a9' }}>{t.hero.doorstepPickupTag}</span>
              </div>
            </div>

            {/* Single Primary CTA - Just Call */}
            <div style={ctaStyle}>
              <a
                href="tel:6374067251"
                className="btn-gold-luxury"
                style={{ fontSize: '1rem', padding: '16px 36px' }}
              >
                <Phone style={{ width: 20, height: 20 }} />
                <span>{t.hero.btnCall}</span>
              </a>
            </div>

            {/* Assurance */}
            <div style={assuranceStyle}>
              <ShieldAlert style={{ width: 24, height: 24, color: '#e5c158', flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: '0.8rem', color: 'rgba(247,231,169,0.9)', fontWeight: 500, lineHeight: 1.6 }}>
                {t.doorstepCallout}
              </p>
            </div>
          </div>

          {/* Right Visual Card */}
          <div style={visualColumnStyle}>
            {/* Glow */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at center, rgba(229,193,88,0.12) 0%, transparent 60%)',
              borderRadius: '50%', filter: 'blur(64px)', opacity: 0.6,
            }} />

            <div style={cardStyle}>
              <div style={imageContainerStyle}>
                <img
                  src="/images/kanchipuram_hero.png"
                  alt="Pure Gold Zari Kanchipuram Silk Saree"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #0c0509 0%, transparent 50%)',
                  opacity: 0.85,
                }} />
                <div style={{
                  position: 'absolute', bottom: '16px', left: '16px', right: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'rgba(12,5,9,0.9)', backdropFilter: 'blur(24px)',
                  padding: '14px 16px', borderRadius: '12px',
                  border: '1px solid rgba(229,193,88,0.35)',
                }}>
                  <div>
                    <div style={{ fontSize: '0.6rem', color: '#e5c158', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      Payout Valuation
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f7e7a9' }}>
                      ₹ 5,000 – ₹ 85,000+
                    </div>
                  </div>
                  <a href="tel:6374067251" className="btn-gold-luxury" style={{ fontSize: '0.7rem', padding: '8px 16px' }}>
                    Call Now
                  </a>
                </div>
              </div>

              {/* Proprietor Info */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px', textAlign: 'center',
              }}>
                <div style={{ background: '#160a10', border: '1px solid rgba(229,193,88,0.2)', padding: '12px', borderRadius: '12px' }}>
                  <div style={{ color: '#e5c158', fontWeight: 800, fontSize: '0.875rem' }}>SRI PATTU HUB</div>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(247,231,169,0.6)', fontWeight: 600 }}>Trusted Buyer</div>
                </div>
                <div style={{ background: '#160a10', border: '1px solid rgba(229,193,88,0.2)', padding: '12px', borderRadius: '12px' }}>
                  <div style={{ color: '#34d399', fontWeight: 800, fontSize: '0.875rem' }}>63740 67251</div>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(247,231,169,0.6)', fontWeight: 600 }}>Doorstep Hotline</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Bar */}
        <div style={statsGridStyle}>
          {[
            { value: '25+', label: t.quickStats.years, color: null },
            { value: '50,000+', label: t.quickStats.clients, color: null },
            { value: '5 States', label: t.quickStats.states, color: null },
            { value: 'Spot Cash', label: t.quickStats.speed, color: '#34d399' },
          ].map((stat, i) => (
            <div key={i} style={statCardStyle} className="scroll-reveal">
              <div className={stat.color ? '' : 'gold-gradient-text'} style={{
                fontSize: '1.75rem', fontWeight: 800,
                color: stat.color || undefined,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(247,231,169,0.7)', fontWeight: 500, marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 7fr 5fr !important;
          }
        }
      `}</style>
    </section>
  );
}
