import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Globe, Menu, X, Sparkles, ChevronDown, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';
import { getImageUrl } from '../utils/imageUtils';

export default function Navbar({ currentLang, setLang, activeTab, setActiveTab, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[currentLang] || translations.en;
  const location = useLocation();
  const isHome = location.pathname === '/';

  const languages = [
    { code: 'ta', label: 'தமிழ் (Tamil)' },
    { code: 'te', label: 'తెలుగు (Telugu)' },
    { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
    { code: 'ml', label: 'മലయാളം (Malayalam)' },
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी (Hindi)' }
  ];

  // Scroll listener for navbar glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    if (!langDropdownOpen) return;
    const handleClick = () => setLangDropdownOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [langDropdownOpen]);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (isHome) {
      const elem = document.getElementById(tabId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const topBarStyle = {
    background: 'linear-gradient(to right, #4a0011, #730019, #4a0011)',
    borderBottom: '1px solid rgba(229,193,88,0.3)',
    color: '#f7e7a9',
    fontSize: '0.75rem',
    padding: '8px 16px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  };

  const navStyle = {
    background: scrolled ? 'rgba(12, 5, 9, 0.95)' : 'rgba(12, 5, 9, 0.9)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    borderBottom: '1px solid rgba(229,193,88,0.2)',
    padding: '16px 24px',
    transition: 'all 0.3s ease',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, transition: 'all 0.3s' }}>
      
      {/* Top Banner */}
      <div style={topBarStyle}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', animation: 'pulse 2s infinite' }} />
            <span>{t.doorstepPromise}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '0.75rem', marginLeft: 'auto' }}>
            <a href="tel:6374067251" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#e5c158', fontWeight: 700, textDecoration: 'none' }}>
              <Phone style={{ width: 14, height: 14, color: '#34d399' }} />
              <span>63740 67251</span>
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://wa.me/916374067251?text=Hi%2C%20I%20want%20to%20sell%20my%20old%20Pattu%20Saree." target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#6ee7b7', fontWeight: 700, textDecoration: 'none' }}>
              <MessageSquare style={{ width: 14, height: 14 }} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div style={navStyle}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Brand */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' }}>
            <img 
              src={getImageUrl('images/sri_pattu_logo.png')} 
              alt="Sri Pattu & Zari Hub Official Logo" 
              style={{
                width: 50, height: 50, borderRadius: '50%',
                border: '2px solid #e5c158', objectFit: 'cover',
                boxShadow: '0 0 20px rgba(229,193,88,0.5)',
              }} 
            />
            <div>
              <h1 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '0.05em', lineHeight: 1 }}>
                SRI PATTU & ZARI HUB
              </h1>
              <p style={{ fontSize: '0.68rem', color: 'rgba(247,231,169,0.8)', fontWeight: 500, letterSpacing: '0.03em', marginTop: 2 }}>
                South India Old Silk Saree Buyer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="hide-mobile">
            {isHome ? (
              <>
                {[
                  { id: 'hero', label: t.nav.home },
                  { id: 'calculator', label: t.nav.calculator },
                  { id: 'types', label: t.nav.sareeTypes },
                  { id: 'locations', label: t.nav.locations },
                  { id: 'card-details', label: t.nav.cardDetails },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none', border: 'none', color: activeTab === item.id ? '#e5c158' : 'rgba(246,242,234,0.7)',
                      fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                      cursor: 'pointer', paddingBottom: 4,
                      borderBottom: activeTab === item.id ? '2px solid #e5c158' : '2px solid transparent',
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link to="/" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e5c158', textDecoration: 'none' }}>
                  {t.nav.home}
                </Link>
                <Link to="/saree-types" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: location.pathname === '/saree-types' ? '#e5c158' : 'rgba(246,242,234,0.7)', textDecoration: 'none' }}>
                  {t.nav.sareeTypes}
                </Link>
                <Link to="/contact" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: location.pathname === '/contact' ? '#e5c158' : 'rgba(246,242,234,0.7)', textDecoration: 'none' }}>
                  {t.nav.cardDetails}
                </Link>
              </>
            )}
          </nav>

          {/* Right Action Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            
            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={(e) => { e.stopPropagation(); setLangDropdownOpen(!langDropdownOpen); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: '#160a10', border: '1px solid rgba(229,193,88,0.3)',
                  color: '#f7e7a9', padding: '6px 14px', borderRadius: 9999,
                  fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <Globe style={{ width: 14, height: 14, color: '#e5c158' }} />
                <span>{languages.find(l => l.code === currentLang)?.label.split(' ')[0]}</span>
                <ChevronDown style={{ width: 12, height: 12, color: '#e5c158' }} />
              </button>

              {langDropdownOpen && (
                <div style={{
                  position: 'absolute', right: 0, marginTop: 8, width: 192,
                  background: '#160a10', border: '1px solid rgba(229,193,88,0.4)',
                  borderRadius: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  overflow: 'hidden', backdropFilter: 'blur(40px)', zIndex: 50,
                }}>
                  <div style={{ padding: 10, borderBottom: '1px solid rgba(229,193,88,0.2)', fontSize: '0.625rem', color: '#e5c158', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Language / மொழி
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangDropdownOpen(false); }}
                      style={{
                        width: '100%', textAlign: 'left', padding: '10px 14px',
                        fontSize: '0.75rem', fontWeight: currentLang === l.code ? 700 : 500,
                        background: currentLang === l.code ? 'rgba(229,193,88,0.2)' : 'transparent',
                        color: currentLang === l.code ? '#e5c158' : 'rgba(246,242,234,0.8)',
                        border: 'none', cursor: 'pointer', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#25101a'}
                      onMouseLeave={(e) => e.target.style.background = currentLang === l.code ? 'rgba(229,193,88,0.2)' : 'transparent'}
                    >
                      <span>{l.label}</span>
                      {currentLang === l.code && <span style={{ color: '#e5c158' }}>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Doorstep Booking Button */}
            <button
              onClick={onOpenBooking}
              className="btn-gold-luxury hide-mobile"
              style={{ fontSize: '0.75rem', padding: '10px 20px' }}
            >
              <ShieldCheck style={{ width: 16, height: 16 }} />
              <span>Doorstep Pickup</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-mobile"
              style={{
                color: '#e5c158', padding: 8, borderRadius: 12,
                background: '#160a10', border: '1px solid rgba(229,193,88,0.3)',
                cursor: 'pointer', display: 'none',
              }}
            >
              {mobileMenuOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(12,5,9,0.98)', borderBottom: '1px solid rgba(229,193,88,0.3)',
          padding: '24px', backdropFilter: 'blur(40px)',
        }}>
          {isHome ? (
            <>
              {['hero', 'calculator', 'types', 'locations', 'card-details'].map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  style={{
                    width: '100%', textAlign: 'left', padding: '12px 0', fontSize: '0.875rem',
                    fontWeight: 700, color: '#f7e7a9', textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  {t.nav[id === 'hero' ? 'home' : id === 'card-details' ? 'cardDetails' : id === 'types' ? 'sareeTypes' : id]}
                </button>
              ))}
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '0.875rem', fontWeight: 700, color: '#f7e7a9', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}>
                Home
              </Link>
              <Link to="/saree-types" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '0.875rem', fontWeight: 700, color: '#f7e7a9', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}>
                Saree Types
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '0.875rem', fontWeight: 700, color: '#f7e7a9', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}>
                Contact
              </Link>
            </>
          )}
          <div style={{ paddingTop: 12 }}>
            <button onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }} className="btn-gold-luxury" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              <span>{t.form?.title || 'Book Doorstep Pickup'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
