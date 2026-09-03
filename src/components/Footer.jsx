import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ currentLang, setActiveTab, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;

  const footerStyle = {
    background: '#0a0a0a',
    borderTop: '1px solid rgba(229,193,88,0.3)',
    paddingTop: 64,
    paddingBottom: 96,
    textAlign: 'left',
    fontSize: '0.8rem',
    color: 'rgba(254,243,199,0.7)',
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    font: 'inherit',
    fontSize: '0.75rem',
  };

  return (
    <footer style={footerStyle}>
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sri Pattu & Zari Hub - Sneha Kanchipuram Silk Center",
          "image": "https://www.oldpattusareebuyers.com/images/kanchipuram_hero.png",
          "telephone": "+916374067251",
          "priceRange": "₹₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Weaving Silk Hub",
            "addressLocality": "Kanchipuram & Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "631501",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.8342,
            "longitude": 79.7036
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": ["https://wa.me/916374067251"],
          "description": "South India's premier buyer of old Kanchipuram silk sarees, pure gold & silver zari, pattu veshtis. Doorstep pickup & instant spot cash."
        })}
      </script>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 40 }}>
        
        {/* Col 1: Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'linear-gradient(135deg, #fcd34d, #f59e0b)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0c0509',
            }}>
              <Sparkles style={{ width: 20, height: 20 }} />
            </div>
            <div>
              <h3 className="gold-text" style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.2 }}>
                SRI PATTU & ZARI HUB
              </h3>
              <p style={{ fontSize: '0.688rem', color: '#fcd34d', fontWeight: 700 }}>
                Sneha Kanchipuram Silk Center
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(254,243,199,0.6)', lineHeight: 1.6, marginBottom: 12 }}>
            South India's most trusted buyer for old, second-hand & damaged Kanchipuram silk sarees, pure silver zari, silk veshtis, and pattu pavadais. Doorstep cash service guaranteed.
          </p>

        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
            Quick Navigation
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><Link to="/" style={linkStyle}>Home Page</Link></li>
            <li><Link to="/saree-types" style={linkStyle}>Types of Sarees We Buy</Link></li>
            <li><Link to="/state/tn" style={linkStyle}>Tamil Nadu Locations</Link></li>
            <li><Link to="/state/ka" style={linkStyle}>Karnataka Locations</Link></li>
            <li><Link to="/state/ap_ts" style={linkStyle}>Andhra & Telangana</Link></li>
            <li><Link to="/state/kl" style={linkStyle}>Kerala Locations</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact & Business Card</Link></li>
          </ul>
        </div>

        {/* Col 3: Coverage */}
        <div>
          <h4 style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
            Coverage Areas
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.75rem', color: 'rgba(254,243,199,0.6)' }}>
            <li>📍 <strong>Tamil Nadu:</strong> Chennai, Kanchipuram, Madurai, Coimbatore, Salem, Trichy</li>
            <li>📍 <strong>Karnataka:</strong> Bangalore, Mysore, Mangalore, Hubli, Belgaum</li>
            <li>📍 <strong>Andhra & Telangana:</strong> Hyderabad, Vijayawada, Vizag, Tirupati</li>
            <li>📍 <strong>Kerala:</strong> Kochi, Trivandrum, Kozhikode, Thrissur, Palakkad</li>
            <li>📍 <strong>Pondicherry & All South India</strong></li>
          </ul>
        </div>

        {/* Col 4: Hotlines */}
        <div>
          <h4 style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
            Direct Hotlines
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            <a href="tel:6374067251" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#34d399', fontWeight: 800, textDecoration: 'none' }}>
              <Phone style={{ width: 16, height: 16 }} />
              <span>Primary: 63740 67251</span>
            </a>
            <a href="tel:7358327898" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fde68a', fontWeight: 700, textDecoration: 'none' }}>
              <Phone style={{ width: 16, height: 16, color: '#fbbf24' }} />
              <span>Card Line 1: 73583 27898</span>
            </a>
            <a href="tel:9941761336" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fde68a', fontWeight: 700, textDecoration: 'none' }}>
              <Phone style={{ width: 16, height: 16, color: '#fbbf24' }} />
              <span>Card Line 2: 99417 61336</span>
            </a>
          </div>

          <button onClick={onOpenBooking} className="btn-gold-luxury" style={{ width: '100%', fontSize: '0.75rem', padding: '10px 0' }}>
            <ShieldCheck style={{ width: 16, height: 16 }} />
            <span>Book Free Doorstep Pickup</span>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: 1280, margin: '48px auto 0', padding: '24px 16px 0',
        borderTop: '1px solid rgba(229,193,88,0.2)',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, fontSize: '0.75rem', color: 'rgba(254,243,199,0.4)',
      }}>
        <div>© 2026 Sri Pattu & Zari Hub (Sneha Kanchipuram Silk Center). All Rights Reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>Crafted with</span>
          <Heart style={{ width: 14, height: 14, color: '#ef4444', fill: '#ef4444' }} />
          <span>for Silk Weavers & Sellers across India.</span>
        </div>
      </div>
    </footer>
  );
}
