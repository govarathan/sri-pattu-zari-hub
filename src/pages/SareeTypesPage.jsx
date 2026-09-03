import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, ShieldCheck, Phone } from 'lucide-react';
import { sareeTypesCatalog } from '../data/sareeTypes';
import { translations } from '../data/translations';

const imageMap = {
  'kanchipuram': '/images/kanchipuram_hero.png',
  'dharmavaram_arani': '/images/arani_saree.png',
  'veshti_angavastram': '/images/pattu_veshti.png',
  'damaged_torn': '/images/torn_vintage.png',
  'pattu_pavadai': '/images/pavadai_set.png',
  'zari_extracted': '/images/zari_thread.png'
};

export default function SareeTypesPage({ currentLang, onOpenBooking }) {
  const [filter, setFilter] = useState('All');
  const t = translations[currentLang] || translations['en'];

  const categories = ['All', 'Kanchipuram', 'Arani', 'Veshti', 'Damaged', 'Pavadai', 'Zari Thread'];

  const filteredSarees = sareeTypesCatalog.filter(saree => {
    if (filter === 'All') return true;
    if (filter === 'Kanchipuram' && saree.id === 'kanchipuram') return true;
    if (filter === 'Arani' && saree.id === 'dharmavaram_arani') return true;
    if (filter === 'Veshti' && saree.id === 'veshti_angavastram') return true;
    if (filter === 'Damaged' && saree.id === 'damaged_torn') return true;
    if (filter === 'Pavadai' && saree.id === 'pattu_pavadai') return true;
    if (filter === 'Zari Thread' && saree.id === 'zari_extracted') return true;
    return false;
  });

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto', color: '#f6f2ea' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>
          Types of Silk Sarees We Buy
        </h1>
        <p className="font-serif-luxury" style={{ fontSize: '1.2rem', color: '#e2e2e2', maxWidth: '700px', margin: '0 auto' }}>
          From vintage Kanchipuram to damaged silk, we offer the best market price based on silver and gold zari content.
        </p>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'btn-gold-luxury' : 'btn-outline-luxury'}
            style={{ 
              padding: '0.5rem 1.5rem', 
              borderRadius: '30px', 
              cursor: 'pointer',
              border: filter === cat ? 'none' : '1px solid #e5c158',
              fontWeight: filter === cat ? 'bold' : 'normal'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
        {filteredSarees.map((saree) => (
          <div key={saree.id} className="luxury-card glass-panel" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Image */}
            <div style={{ height: '250px', position: 'relative', backgroundColor: '#1a0f14' }}>
              <img 
                src={imageMap[saree.id]} 
                alt={t[saree.titleKey] || saree.titleKey} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, #0c0509)', height: '100px' }} />
            </div>

            {/* Content */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h2 className="font-heading-luxury" style={{ fontSize: '1.5rem', color: '#e5c158', margin: 0 }}>
                  {t[saree.titleKey] || saree.titleKey}
                </h2>
                <span className="gold-badge" style={{ backgroundColor: 'rgba(229,193,88,0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px', border: '1px solid #e5c158', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {saree.priceRange}
                </span>
              </div>
              
              <p className="font-serif-luxury" style={{ color: '#e2e2e2', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {t[saree.descKey] || saree.descKey}
              </p>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#e5c158', display: 'block', marginBottom: '0.5rem' }}>Purity Indication:</strong>
                <span style={{ fontSize: '0.95rem' }}>{saree.purityIndication}</span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {saree.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#e5c158" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button onClick={onOpenBooking} className="btn-gold-luxury" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>
                  <ShieldCheck size={20} />
                  Sell This Saree
                </button>
                <a href={`https://wa.me/916374067251?text=Hi, I want to sell my ${saree.titleKey}`} target="_blank" rel="noopener noreferrer" className="btn-emerald" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', backgroundColor: '#0b5e56', color: '#f6f2ea', fontSize: '1rem' }}>
                  <MessageSquare size={20} />
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="luxury-card" style={{ padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', backgroundImage: 'linear-gradient(45deg, #0c0509 0%, #1a0f14 100%)', border: '1px solid #b88d22' }}>
        <h2 className="font-heading-luxury" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#e5c158' }}>Have multiple types of sarees?</h2>
        <p className="font-serif-luxury" style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          We buy bulk collections as well. Contact us for a comprehensive doorstep evaluation.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="tel:6374067251" className="btn-gold-luxury" style={{ padding: '1rem 2rem', borderRadius: '30px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <Phone size={20} /> Call 6374067251
          </a>
        </div>
      </div>
    </div>
  );
}
