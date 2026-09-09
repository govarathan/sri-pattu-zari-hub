import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Sparkles, ShieldCheck, Heart, Code2, ExternalLink } from 'lucide-react';
import { translations } from '../data/translations';

import { getImageUrl } from '../utils/imageUtils';

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
          "name": "Sri Pattu & Zari Hub",
          "image": "https://govarathan.github.io/sri-pattu-zari-hub/images/sri_pattu_logo.png",
          "telephone": "+916374067251",
          "priceRange": "₹₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Weaving Silk Hub, GST Road, Tambaram",
            "addressLocality": "Tambaram, Chennai, Chengalpattu, Kanchipuram",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600045",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9229,
            "longitude": 80.1275
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": ["https://wa.me/916374067251"],
          "description": "Top rated South India silk buyer. We buy old Kanchipuram silk sarees, pure gold & silver zari, pattu veshtis across 100+ locations in Chennai, Chengalpattu, Kanchipuram with free doorstep pickup & instant spot cash."
        })}
      </script>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 40 }}>
        
        {/* Col 1: Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <img 
              src={getImageUrl('images/sri_pattu_logo.png')} 
              alt="Sri Pattu & Zari Hub Logo" 
              style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '2px solid #e5c158', objectFit: 'cover',
                boxShadow: '0 0 15px rgba(229,193,88,0.4)'
              }}
            />
            <div>
              <h3 className="gold-text" style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.2 }}>
                SRI PATTU & ZARI HUB
              </h3>
              <p style={{ fontSize: '0.688rem', color: '#fcd34d', fontWeight: 700 }}>
                South India Old Silk Saree Buyer
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(254,243,199,0.6)', lineHeight: 1.6, marginBottom: 16 }}>
            South India's most trusted buyer for old, second-hand & damaged Kanchipuram silk sarees, pure silver zari, silk veshtis, and pattu pavadais. Doorstep cash service guaranteed across 100+ localities.
          </p>

          {/* Developer Credit Link */}
          <a
            href="https://nebulaura.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, rgba(147,51,234,0.25), rgba(229,193,88,0.2))',
              border: '1px solid rgba(192,132,252,0.5)',
              padding: '6px 14px',
              borderRadius: '9999px',
              color: '#f7e7a9',
              fontSize: '0.75rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(168,85,247,0.25)'
            }}
            className="hover:scale-105"
          >
            <Code2 style={{ width: 14, height: 14, color: '#c084fc' }} />
            <span>Developed by</span>
            <span style={{ color: '#e9d5ff', fontWeight: 900, letterSpacing: '0.05em' }}>NebulAura</span>
            <ExternalLink style={{ width: 12, height: 12, color: '#c084fc' }} />
          </a>

        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
            Quick Navigation
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><Link to="/" style={linkStyle}>Home Page</Link></li>
            <li><Link to="/saree-types" style={linkStyle}>Types of Sarees We Buy</Link></li>
            <li><Link to="/city/tn/tambaram" style={linkStyle}>Tambaram Location Page</Link></li>
            <li><Link to="/city/tn/chengalpattu-town" style={linkStyle}>Chengalpattu Location Page</Link></li>
            <li><Link to="/city/tn/kanchipuram-town" style={linkStyle}>Kanchipuram Location Page</Link></li>
            <li><Link to="/state/tn" style={linkStyle}>Tamil Nadu Locations (100+ Hubs)</Link></li>
            <li><Link to="/state/ka" style={linkStyle}>Karnataka Locations</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact Center</Link></li>
          </ul>
        </div>

        {/* Col 3: Coverage */}
        <div>
          <h4 style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
            Coverage Areas (100+ Sub-Locations)
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.75rem', color: 'rgba(254,243,199,0.6)' }}>
            <li>📍 <strong>Chennai (100 Hubs):</strong> Tambaram, Velachery, Chromepet, T.Nagar, Adyar, Mylapore, Porur, OMR, ECR</li>
            <li>📍 <strong>Chengalpattu (50 Hubs):</strong> Town, Singaperumal Koil, Mahindra City, Maduranthakam, Cheyyur</li>
            <li>📍 <strong>Kanchipuram (50 Hubs):</strong> Big Kanchipuram, Pillaiyarpalayam, Orikkai, Walajabad, Sriperumbudur</li>
            <li>📍 <strong>All TN, KA, AP/TS, KL, PY</strong></li>
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
              <span>Contact Line 1: 73583 27898</span>
            </a>
            <a href="tel:9941761336" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fde68a', fontWeight: 700, textDecoration: 'none' }}>
              <Phone style={{ width: 16, height: 16, color: '#fbbf24' }} />
              <span>Contact Line 2: 99417 61336</span>
            </a>
          </div>

          <button onClick={onOpenBooking} className="btn-gold-luxury" style={{ width: '100%', fontSize: '0.75rem', padding: '10px 0' }}>
            <ShieldCheck style={{ width: 16, height: 16 }} />
            <span>Book Free Doorstep Pickup</span>
          </button>
        </div>
      </div>

      {/* Copyright & Attribution */}
      <div style={{
        maxWidth: 1280, margin: '48px auto 0', padding: '24px 16px 0',
        borderTop: '1px solid rgba(229,193,88,0.2)',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, fontSize: '0.75rem', color: 'rgba(254,243,199,0.4)',
      }}>
        <div>© 2026 Sri Pattu & Zari Hub. All Rights Reserved.</div>
        <a
          href="https://nebulaura.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'inherit', textDecoration: 'none' }}
        >
          <span>Developed by</span>
          <span style={{ color: '#c084fc', fontWeight: 800, textDecoration: 'underline' }}>NebulAura</span>
        </a>
      </div>
    </footer>
  );
}
