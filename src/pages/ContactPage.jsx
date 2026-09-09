import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { translations } from '../data/translations';
import { getImageUrl } from '../utils/imageUtils';

export default function ContactPage({ currentLang }) {
  const t = translations[currentLang] || translations['en'];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Tambaram / Chennai',
    sareeType: 'Kanchipuram Silk',
    condition: 'Old/Used'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sri Pattu & Zari Hub, I want to book a doorstep pickup.
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.city}
Saree Type: ${formData.sareeType}
Condition: ${formData.condition}`;
    window.open(`https://wa.me/916374067251?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto', color: '#f6f2ea' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(229,193,88,0.1)',
          border: '1px solid rgba(229,193,88,0.3)',
          padding: '6px 18px',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          color: '#e5c158',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>
          <Sparkles size={14} /> {t.contactPage?.badge || 'Official Business Contact Center'}
        </div>

        <h1 className="font-heading-luxury gold-gradient-text" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '0 0 1rem 0' }}>
          {t.contactPage?.title || 'Contact Sri Pattu & Zari Hub'}
        </h1>
        <p className="font-serif-luxury" style={{ fontSize: '1.1rem', color: '#e2e2e2', maxWidth: '700px', margin: '0 auto' }}>
          {t.contactPage?.subtitle || "Connect directly with South India's top rated second saree buyer for express doorstep pickup & spot cash valuation."}
        </p>
      </div>

      {/* Business Card Showcase Replica */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
        <div className="luxury-card" style={{ 
          width: '100%', 
          maxWidth: '600px', 
          padding: '2.5rem', 
          borderRadius: '20px', 
          backgroundImage: 'linear-gradient(135deg, #1a0f14 0%, #2a1820 100%)', 
          border: '2px solid #b88d22',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 0 20px rgba(229,193,88,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Card background pattern */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08,
            backgroundImage: `url("${getImageUrl('images/saree_scroll_bg.png')}")`,
            backgroundSize: 'cover', zIndex: 0
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid rgba(229,193,88,0.3)', paddingBottom: '1rem' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.8rem', color: '#e5c158', margin: 0, fontWeight: 'bold' }}>{t.contactPage?.cardHeader || 'Contact Center:'}</p>
                <h3 className="font-heading-luxury" style={{ fontSize: '1.2rem', margin: 0, color: '#f6f2ea' }}>Sri Pattu & Zari Hub</h3>
                <h4 style={{ fontSize: '0.85rem', margin: 0, color: '#fcd34d' }}>{t.contactPage?.cardSubheader || 'Kanchipuram Silk Center'}</h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <a href="tel:7358327898" style={{ display: 'block', color: '#e5c158', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>7358327898</a>
                <a href="tel:9941761336" style={{ display: 'block', color: '#e5c158', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>9941761336</a>
              </div>
            </div>

            <h2 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0', lineHeight: '1.3' }}>
              ஸ்ரீ பட்டு & ஜரிகை மையம்
            </h2>
            <h2 className="font-heading-luxury" style={{ fontSize: '1.3rem', margin: '0 0 1.5rem 0', color: '#e2e2e2', letterSpacing: '1px' }}>
              SRI PATTU & ZARI HUB
            </h2>

            <p className="font-serif-luxury" style={{ fontSize: '0.95rem', color: '#f7e7a9', lineHeight: '1.6', margin: '0 auto 1.5rem auto', maxWidth: '90%' }}>
              {t.contactPage?.cardDesc || 'We buy old damaged silk sarees, silk veshtis, silk pavadais, Kanchipuram, Arani, and Dharmavaram silk sarees at fair market mill prices.'}
            </p>

            <div style={{ backgroundColor: 'rgba(229,193,88,0.15)', border: '1px solid rgba(229,193,88,0.4)', padding: '1rem 1.5rem', borderRadius: '12px', display: 'inline-block' }}>
              <a href="tel:6374067251" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e5c158', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Phone size={24} /> 63740 67251
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for Direct Contact Cards and Form */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        
        {/* Contact info column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 className="font-heading-luxury" style={{ fontSize: '1.8rem', color: '#e5c158', margin: 0 }}>{t.contactPage?.hotlinesTitle || 'Direct Hotline Directory'}</h2>
          
          <div className="luxury-card glass-panel" style={{ padding: '1.5rem', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(52, 211, 153, 0.15)', border: '1px solid #34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
              <Phone size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 'bold' }}>{t.contactPage?.doorstepPickupLine || 'Fast Doorstep Pickup Line (24/7)'}</div>
              <a href="tel:6374067251" style={{ fontSize: '1.3rem', color: '#ffffff', textDecoration: 'none', fontWeight: '800' }}>63740 67251</a>
            </div>
          </div>

          <div className="luxury-card glass-panel" style={{ padding: '1.5rem', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
              <MessageSquare size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 'bold' }}>{t.contactPage?.whatsappQuoteLine || 'WhatsApp Instant Quote'}</div>
              <a href="https://wa.me/916374067251" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: '#34d399', textDecoration: 'none', fontWeight: '700' }}>Chat on WhatsApp</a>
            </div>
          </div>

          <div className="luxury-card glass-panel" style={{ padding: '1.5rem', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(229,193,88,0.15)', border: '1px solid #e5c158', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5c158' }}>
              <Phone size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#e5c158', fontWeight: 'bold' }}>{t.contactPage?.alternateLines || 'Alternate Contact Lines'}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <a href="tel:7358327898" style={{ fontSize: '1.1rem', color: '#f7e7a9', textDecoration: 'none', fontWeight: '700' }}>+91 73583 27898</a>
                <a href="tel:9941761336" style={{ fontSize: '1.1rem', color: '#f7e7a9', textDecoration: 'none', fontWeight: '700' }}>+91 99417 61336</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 className="font-heading-luxury" style={{ fontSize: '1.8rem', color: '#e5c158', margin: '0 0 0.5rem 0' }}>{t.contactPage?.formTitle || 'Book Doorstep Pickup'}</h2>
          <p style={{ color: '#e2e2e2', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t.contactPage?.formSub || 'Fill details to get an instant valuation & pickup time on WhatsApp.'}</p>
          
          <form onSubmit={handleWhatsAppSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#e5c158', fontWeight: 'bold' }}>{t.contactPage?.nameLabel || 'Your Name'}</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="e.g. Ramesh / Lakshmi" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(229,193,88,0.3)', borderRadius: '8px', color: '#f6f2ea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#e5c158', fontWeight: 'bold' }}>{t.contactPage?.phoneLabel || 'Phone Number'}</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" placeholder="10-digit mobile number" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(229,193,88,0.3)', borderRadius: '8px', color: '#f6f2ea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#e5c158', fontWeight: 'bold' }}>{t.contactPage?.cityLabel || 'City / Neighborhood'}</label>
              <input type="text" name="city" required value={formData.city} onChange={handleChange} className="form-input" placeholder="Tambaram, Velachery, T. Nagar, etc." style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(229,193,88,0.3)', borderRadius: '8px', color: '#f6f2ea' }} />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <label style={{ fontSize: '0.85rem', color: '#e5c158', fontWeight: 'bold' }}>{t.contactPage?.sareeTypeLabel || 'Saree Type'}</label>
                <select name="sareeType" value={formData.sareeType} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(229,193,88,0.3)', borderRadius: '8px', color: '#f6f2ea' }}>
                  <option>Kanchipuram Silk</option>
                  <option>Arani Silk</option>
                  <option>Dharmavaram Silk</option>
                  <option>Pattu Veshti</option>
                  <option>Damaged Saree</option>
                  <option>Zari Threads</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <label style={{ fontSize: '0.85rem', color: '#e5c158', fontWeight: 'bold' }}>{t.contactPage?.conditionLabel || 'Condition'}</label>
                <select name="condition" value={formData.condition} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.6)', border: '1px solid rgba(229,193,88,0.3)', borderRadius: '8px', color: '#f6f2ea' }}>
                  <option>Old/Used</option>
                  <option>Slightly Damaged</option>
                  <option>Torn/Heavily Damaged</option>
                  <option>New/Unused</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-gold-luxury" style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1rem' }}>
              <Send size={18} />
              {t.contactPage?.submitBtn || 'Submit via WhatsApp'}
            </button>
          </form>
        </div>
      </div>

      {/* Multi-language Intro */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <h3 className="font-heading-luxury" style={{ fontSize: '1.4rem', color: '#e5c158', marginBottom: '1.25rem' }}>{t.contactPage?.multiLangTitle || 'Doorstep Express Service Across South India'}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <p style={{ color: '#e5c158', fontSize: '0.85rem', marginBottom: '0.25rem', fontWeight: 'bold' }}>Tamil Nadu & Puducherry</p>
            <p style={{ fontSize: '1rem', color: '#f6f2ea' }}>பழைய பட்டு புடவைகள் வாங்கப்படும்</p>
          </div>
          <div>
            <p style={{ color: '#e5c158', fontSize: '0.85rem', marginBottom: '0.25rem', fontWeight: 'bold' }}>Karnataka</p>
            <p style={{ fontSize: '1rem', color: '#f6f2ea' }}>ಹಳೆಯ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ಖರೀದಿಸುತ್ತೇವೆ</p>
          </div>
          <div>
            <p style={{ color: '#e5c158', fontSize: '0.85rem', marginBottom: '0.25rem', fontWeight: 'bold' }}>Andhra & Telangana</p>
            <p style={{ fontSize: '1rem', color: '#f6f2ea' }}>పాత పట్టు చీరలు కొనుగోలు చేయబడును</p>
          </div>
          <div>
            <p style={{ color: '#e5c158', fontSize: '0.85rem', marginBottom: '0.25rem', fontWeight: 'bold' }}>Kerala</p>
            <p style={{ fontSize: '1rem', color: '#f6f2ea' }}>പഴയ പട്ട് സാരികൾ വാങ്ങും</p>
          </div>
        </div>
      </div>
    </div>
  );
}
