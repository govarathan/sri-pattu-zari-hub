import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, User, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function ContactPage({ currentLang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    sareeType: 'Kanchipuram Silk',
    condition: 'Old/Used'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I want to book a doorstep pickup.
Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}
Saree Type: ${formData.sareeType}
Condition: ${formData.condition}`;
    window.open(`https://wa.me/916374067251?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto', color: '#f6f2ea' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>
          Contact Sri Pattu & Zari Hub
        </h1>
        <p className="font-serif-luxury" style={{ fontSize: '1.2rem', color: '#e2e2e2', maxWidth: '700px', margin: '0 auto' }}>
          Get in touch with us for instant valuation and free doorstep pickup across South India.
        </p>
      </div>

      {/* Business Card Replica */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
        <div className="luxury-card" style={{ 
          width: '100%', 
          maxWidth: '600px', 
          padding: '2.5rem', 
          borderRadius: '16px', 
          backgroundImage: 'linear-gradient(135deg, #1a0f14 0%, #2a1820 100%)', 
          border: '2px solid #b88d22',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(229,193,88,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Card subtle background pattern */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'url("/images/saree_scroll_bg.png")', backgroundSize: 'cover', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid rgba(229,193,88,0.3)', paddingBottom: '1rem' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.8rem', color: '#e5c158', margin: 0 }}>உரிமையாளர் / Proprietor:</p>
                <h3 className="font-heading-luxury" style={{ fontSize: '1.2rem', margin: 0, color: '#f6f2ea' }}>Sri Pattu & Zari Hub</h3>
                <h3 className="font-heading-luxury" style={{ fontSize: '1rem', margin: 0, color: '#f6f2ea' }}>Sneha Kanchipuram Silk Center</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <a href="tel:7358327898" style={{ display: 'block', color: '#e5c158', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>7358327898</a>
                <a href="tel:9941761336" style={{ display: 'block', color: '#e5c158', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>9941761336</a>
              </div>
            </div>

            <h2 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0', lineHeight: '1.3' }}>
              காஞ்சிபுரம் ஸ்னேகா பட்டு சென்டர்
            </h2>
            <h2 className="font-heading-luxury" style={{ fontSize: '1.4rem', margin: '0 0 1.5rem 0', color: '#e2e2e2', letterSpacing: '1px' }}>
              SNEHA KANCHIPURAM SILK CENTER
            </h2>

            <p className="font-serif-luxury" style={{ fontSize: '1rem', color: '#b88d22', lineHeight: '1.6', margin: '0 auto 1.5rem auto', maxWidth: '80%' }}>
              பழைய பட்டுப்புடவைகள், சரிகை, பித்தளை, தாமிரம், மற்றும் பழைய வெள்ளி பொருட்கள் சிறந்த விலைக்கு வாங்கப்படும்.
            </p>

            <div style={{ backgroundColor: 'rgba(229,193,88,0.1)', padding: '1rem', borderRadius: '8px', display: 'inline-block' }}>
              <a href="tel:6374067251" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e5c158', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                <Phone size={24} /> 6374067251
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for Direct Contact Cards and Form */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
        
        {/* Contact info column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 className="font-heading-luxury" style={{ fontSize: '2rem', color: '#e5c158', margin: '0 0 1rem 0' }}>Get In Touch</h2>
          
          <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(229,193,88,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5c158' }}>
              <Phone size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#f6f2ea' }}>Primary Phone</h3>
              <a href="tel:6374067251" style={{ fontSize: '1.2rem', color: '#e5c158', textDecoration: 'none', fontWeight: 'bold' }}>+91 63740 67251</a>
            </div>
          </div>

          <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(11,94,86,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b5e56' }}>
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#f6f2ea' }}>WhatsApp</h3>
              <a href="https://wa.me/916374067251" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: '#0b5e56', textDecoration: 'none', fontWeight: 'bold' }}>Chat with us</a>
            </div>
          </div>

          <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(229,193,88,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5c158' }}>
              <Phone size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#f6f2ea' }}>Alternate Numbers</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <a href="tel:7358327898" style={{ fontSize: '1.1rem', color: '#e5c158', textDecoration: 'none' }}>+91 73583 27898</a>
                <a href="tel:9941761336" style={{ fontSize: '1.1rem', color: '#e5c158', textDecoration: 'none' }}>+91 99417 61336</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="luxury-card glass-panel" style={{ padding: '2.5rem', borderRadius: '16px' }}>
          <h2 className="font-heading-luxury" style={{ fontSize: '2rem', color: '#e5c158', margin: '0 0 0.5rem 0' }}>Book Doorstep Pickup</h2>
          <p style={{ color: '#e2e2e2', marginBottom: '2rem' }}>Fill details to get a quick quote via WhatsApp.</p>
          
          <form onSubmit={handleWhatsAppSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#b88d22' }}>Your Name</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #332128', borderRadius: '8px', color: '#f6f2ea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#b88d22' }}>Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #332128', borderRadius: '8px', color: '#f6f2ea' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#b88d22' }}>City / Location</label>
              <input type="text" name="city" required value={formData.city} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #332128', borderRadius: '8px', color: '#f6f2ea' }} />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <label style={{ fontSize: '0.9rem', color: '#b88d22' }}>Saree Type</label>
                <select name="sareeType" value={formData.sareeType} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #332128', borderRadius: '8px', color: '#f6f2ea' }}>
                  <option>Kanchipuram Silk</option>
                  <option>Arani Silk</option>
                  <option>Pattu Veshti</option>
                  <option>Damaged Saree</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <label style={{ fontSize: '0.9rem', color: '#b88d22' }}>Condition</label>
                <select name="condition" value={formData.condition} onChange={handleChange} className="form-input" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #332128', borderRadius: '8px', color: '#f6f2ea' }}>
                  <option>Old/Used</option>
                  <option>Slightly Damaged</option>
                  <option>Torn/Heavily Damaged</option>
                  <option>New/Unused</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-gold-luxury" style={{ width: '100%', padding: '1rem', marginTop: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
              <MessageSquare size={20} />
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Multi-language Intro */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.03)' }}>
        <h3 className="font-heading-luxury" style={{ fontSize: '1.5rem', color: '#e5c158', marginBottom: '1.5rem' }}>We Serve Across South India</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <p style={{ color: '#b88d22', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tamil Nadu</p>
            <p style={{ fontSize: '1.1rem', color: '#f6f2ea' }}>பழைய பட்டு புடவைகள் வாங்கப்படும்</p>
          </div>
          <div>
            <p style={{ color: '#b88d22', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Karnataka</p>
            <p style={{ fontSize: '1.1rem', color: '#f6f2ea' }}>ಹಳೆಯ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ಖರೀದಿಸುತ್ತೇವೆ</p>
          </div>
          <div>
            <p style={{ color: '#b88d22', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Andhra / Telangana</p>
            <p style={{ fontSize: '1.1rem', color: '#f6f2ea' }}>పాత పట్టు చీరలు కొనుగోలు చేయబడును</p>
          </div>
          <div>
            <p style={{ color: '#b88d22', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Kerala</p>
            <p style={{ fontSize: '1.1rem', color: '#f6f2ea' }}>പഴയ പട്ട് സാരികൾ വാങ്ങും</p>
          </div>
        </div>
      </div>
    </div>
  );
}
