import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { statesData } from '../data/locationsData';
import { translations } from '../data/translations';
import { MapPin, Search, Clock, Phone, Navigation, ArrowRight } from 'lucide-react';

export default function LocationExplorer({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  const [activeStateId, setActiveStateId] = useState('tn');
  const [searchQuery, setSearchQuery] = useState('');

  const currentState = statesData.find(s => s.id === activeStateId) || statesData[0];

  const filteredCities = currentState.featuredCities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.nativeName.includes(searchQuery) ||
    city.pincodes.includes(searchQuery) ||
    city.highlight.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sectionStyle = {
    padding: '64px 0',
    background: 'linear-gradient(180deg, #0c0509 0%, rgba(115,0,25,0.12) 50%, #0c0509 100%)',
    borderBottom: '1px solid rgba(229,193,88,0.2)',
  };

  return (
    <section id="locations" style={sectionStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
        
        {/* Section Header */}
        <div className="scroll-reveal" style={{ textAlign: 'center', maxWidth: 768, margin: '0 auto 40px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(229,193,88,0.1)', border: '1px solid rgba(229,193,88,0.3)',
            padding: '4px 14px', borderRadius: 9999, fontSize: '0.75rem', fontWeight: 700, color: '#fcd34d',
          }}>
            <MapPin style={{ width: 16, height: 16, color: '#fbbf24' }} />
            <span>{t.locationsSection?.title || 'Our Service Locations'}</span>
          </div>
          <h2 className="gold-text font-heading-luxury" style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: 12 }}>
            {t.locationsSection?.title || 'Doorstep Pickup Across South India'}
          </h2>
          <p style={{ color: 'rgba(254,243,199,0.7)', fontSize: '0.875rem', marginTop: 8 }}>
            {t.locationsSection?.subtitle || 'We serve all major cities. Click any state to explore covered areas.'}
          </p>
        </div>

        {/* State Selector Tabs */}
        <div className="scroll-reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 32 }}>
          {statesData.map((state) => (
            <button
              key={state.id}
              onClick={() => { setActiveStateId(state.id); setSearchQuery(''); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: 9999,
                fontSize: '0.875rem', fontWeight: 700, border: '1px solid',
                cursor: 'pointer', transition: 'all 0.3s',
                background: activeStateId === state.id
                  ? 'linear-gradient(to right, #fbbf24, #f59e0b)'
                  : '#171717',
                color: activeStateId === state.id ? '#0c0509' : '#fde68a',
                borderColor: activeStateId === state.id ? '#fde68a' : 'rgba(229,193,88,0.3)',
                transform: activeStateId === state.id ? 'scale(1.05)' : 'scale(1)',
                boxShadow: activeStateId === state.id ? '0 8px 20px rgba(245,158,11,0.2)' : 'none',
              }}
            >
              <Navigation style={{ width: 16, height: 16 }} />
              <span>{state.name} ({state.nativeName})</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: 576, margin: '0 auto 40px', position: 'relative' }}>
          <Search style={{ width: 20, height: 20, color: '#fbbf24', position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.locationsSection?.searchPlaceholder || 'Search city, pincode, or area...'}
            className="form-input"
            style={{ paddingLeft: 48, borderRadius: 9999, borderColor: 'rgba(229,193,88,0.4)' }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: '#fbbf24', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Clear
            </button>
          )}
        </div>

        {/* View Full State Page Link */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: 24 }}>
          <Link
            to={`/state/${currentState.id}`}
            className="btn-outline-luxury"
            style={{ fontSize: '0.8rem', padding: '10px 24px' }}
          >
            <span>View Full {currentState.name} Page</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>

        {/* Cities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filteredCities.length > 0 ? (
            filteredCities.map((city, idx) => (
              <div
                key={idx}
                className="glass-panel gold-border-glow scroll-reveal city-card"
                style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left', transitionDelay: `${idx * 0.05}s` }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <MapPin style={{ width: 16, height: 16, color: '#34d399', flexShrink: 0 }} />
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#fef3c7' }}>
                        {city.name}
                      </h3>
                    </div>
                    <span style={{
                      fontSize: '0.625rem', fontWeight: 700, color: '#fcd34d',
                      background: '#171717', padding: '4px 10px', borderRadius: 8,
                      border: '1px solid rgba(229,193,88,0.3)',
                    }}>
                      {city.nativeName}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: 'rgba(254,243,199,0.7)', marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fcd34d', fontWeight: 600, marginBottom: 6 }}>
                      <Clock style={{ width: 14, height: 14, color: '#fbbf24', flexShrink: 0 }} />
                      <span>Doorstep Arrival: <strong>{city.time}</strong></span>
                    </div>
                    <div style={{ fontSize: '0.688rem', color: 'rgba(254,243,199,0.6)', marginBottom: 4 }}>
                      <strong>Covered:</strong> {city.highlight}
                    </div>
                    <div style={{ fontSize: '0.688rem', color: 'rgba(251,191,36,0.5)' }}>
                      <strong>Pincodes:</strong> {city.pincodes}
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: 12, borderTop: '1px solid rgba(229,193,88,0.2)', display: 'flex', gap: 8 }}>
                  <Link
                    to={`/city/${currentState.id}/${city.slug}`}
                    className="btn-gold-luxury"
                    style={{ flex: 1, fontSize: '0.75rem', padding: '8px 12px' }}
                  >
                    <span>View {city.name}</span>
                  </Link>
                  <a
                    href="tel:6374067251"
                    className="btn-crimson"
                    style={{ fontSize: '0.75rem', padding: '8px 12px' }}
                  >
                    <Phone style={{ width: 14, height: 14 }} />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '48px 0', textAlign: 'center', color: 'rgba(254,243,199,0.7)' }}>
              No matching city for "{searchQuery}". We cover ALL towns. Call <strong>6374067251</strong>.
            </div>
          )}
        </div>

        {/* SEO Footnote */}
        <div className="scroll-reveal" style={{
          marginTop: 48, background: 'rgba(23,23,23,0.8)', border: '1px solid rgba(229,193,88,0.3)',
          padding: 24, borderRadius: 16, textAlign: 'left', maxWidth: 896, margin: '48px auto 0',
        }}>
          <h4 className="gold-text" style={{ fontSize: '1rem', fontWeight: 700 }}>
            {currentState.seoTitle}
          </h4>
          <p style={{ fontSize: '0.75rem', color: 'rgba(254,243,199,0.6)', lineHeight: 1.6, marginTop: 8 }}>
            {currentState.seoDescription || `Our mobile saree appraisal vehicles operate daily across all districts in ${currentState.name}. Sri Pattu & Zari Hub guarantees Kanchipuram mill cash payouts with zero traveling stress.`}
          </p>
        </div>

      </div>
    </section>
  );
}
