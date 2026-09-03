import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChevronRight, MessageSquare, ShieldCheck, CheckCircle2, Bike, HandCoins } from 'lucide-react';
import { statesData } from '../data/locationsData';
import { sareeTypesCatalog } from '../data/sareeTypes';

export default function CityPage({ currentLang, onOpenBooking }) {
  const { stateId, citySlug } = useParams();
  
  const state = statesData.find(s => s.id === stateId);
  const city = state?.featuredCities?.find(
    c => c.slug === citySlug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === citySlug
  );

  useEffect(() => {
    if (city) {
      document.title = `Sell Old Pattu Sarees in ${city.name} - Sri Pattu & Zari Hub`;
    }
  }, [city]);

  if (!state || !city) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', color: '#f6f2ea' }}>
        <h2 className="font-heading-luxury" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Location not found</h2>
        <Link to="/" className="btn-gold-luxury" style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}>Return to Home</Link>
      </div>
    );
  }

  const steps = [
    { icon: <Phone size={32} />, title: 'Step 1: Contact Us', desc: 'Call or WhatsApp us to schedule a pickup.' },
    { icon: <Bike size={32} />, title: 'Step 2: Doorstep Visit', desc: `Our executive arrives at your location in ${city.name}.` },
    { icon: <ShieldCheck size={32} />, title: 'Step 3: Zari Testing', desc: 'Transparent evaluation of silk and zari quality.' },
    { icon: <HandCoins size={32} />, title: 'Step 4: Spot Cash', desc: 'Immediate payment at the best market price.' }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', color: '#f6f2ea' }}>
      {/* Breadcrumbs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: '#b88d22', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: '#e5c158', textDecoration: 'none' }}>Home</Link>
        <ChevronRight size={16} />
        <Link to={`/state/${stateId}`} style={{ color: '#e5c158', textDecoration: 'none' }}>{state.name}</Link>
        <ChevronRight size={16} />
        <span style={{ color: '#f6f2ea' }}>{city.name}</span>
      </nav>

      {/* City Hero */}
      <div className="luxury-card glass-panel" style={{ padding: '4rem 2rem', borderRadius: '16px', marginBottom: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {city.time && (
          <div className="gold-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.9rem', backgroundColor: 'rgba(229,193,88,0.15)', marginBottom: '1.5rem', border: '1px solid #e5c158' }}>
            <Clock size={16} />
            <span>Estimated Arrival: {city.time}</span>
          </div>
        )}
        <h1 className="font-heading-luxury gold-gradient-text" style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', lineHeight: '1.2' }}>
          Sell Old Silk Sarees in {city.name}
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: '#e5c158', margin: '0 0 2rem 0', fontWeight: 'normal' }}>
          {city.nativeName}
        </h2>
        <p className="font-serif-luxury" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
          Get the highest price for your old Kanchivaram, Arani, and Dharmavaram pattu sarees. We provide instant spot cash with free doorstep pickup across {city.name}.
        </p>
        <button onClick={onOpenBooking} className="btn-gold-luxury" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
          Book Pickup Now
        </button>
      </div>

      {/* Coverage Details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h3 className="font-heading-luxury" style={{ fontSize: '1.5rem', color: '#e5c158', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={24} /> Covered Areas & Hubs
          </h3>
          <p style={{ lineHeight: '1.8', fontSize: '1rem' }}>{city.highlight}</p>
        </div>
        <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h3 className="font-heading-luxury" style={{ fontSize: '1.5rem', color: '#e5c158', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={24} /> Serviceable Pincodes
          </h3>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fde68a' }}>{city.pincodes}</p>
        </div>
      </div>

      {/* How It Works */}
      <h2 className="font-heading-luxury" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem', color: '#e5c158' }}>
        How It Works in {city.name}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(229,193,88,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5c158', marginBottom: '1.5rem', border: '2px solid #e5c158' }}>
              {step.icon}
            </div>
            <h4 className="font-heading-luxury" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#f6f2ea' }}>{step.title}</h4>
            <p className="font-serif-luxury" style={{ color: '#b88d22', lineHeight: '1.5' }}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Saree Types We Buy */}
      <h2 className="font-heading-luxury" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem', color: '#e5c158' }}>
        Types of Sarees We Buy
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {sareeTypesCatalog.slice(0, 3).map((saree) => (
          <div key={saree.id} className="luxury-card glass-panel" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ height: '200px', backgroundColor: '#1a0f14', position: 'relative' }}>
              <img src={saree.image} alt={saree.titleKey} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(transparent, #0c0509)' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 className="font-heading-luxury" style={{ fontSize: '1.2rem', color: '#e5c158', marginBottom: '0.5rem' }}>{saree.badge}</h3>
              <div style={{ color: '#fde68a', fontWeight: 'bold', marginBottom: '0.5rem' }}>{saree.estimatedPriceRange}</div>
              <p style={{ fontSize: '0.9rem', color: '#e2e2e2' }}>{saree.purityInfo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Local Language Content */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '4rem', borderLeft: '4px solid #730019', backgroundColor: 'rgba(115,0,25,0.05)' }}>
        <h3 className="font-heading-luxury" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#e5c158' }}>
          {state.id === 'tn' || state.id === 'py' ? 'பட்டு புடவைகள் வாங்கப்படும்' : 
           state.id === 'ka' ? 'ಹಳೆಯ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ಖರೀದಿಸುತ್ತೇವೆ' :
           state.id === 'ap_ts' ? 'పాత పట్టు చీరలు కొనుగోలు చేయబడును' :
           state.id === 'kl' ? 'പഴയ പട്ട് സാരികൾ വാങ്ങും' :
           'பட்டு புடவைகள் வாங்கப்படும்'}
        </h3>
        <p className="font-serif-luxury" style={{ lineHeight: '1.8', color: '#e2e2e2', fontSize: '1.1rem' }}>
          {state.id === 'tn' || state.id === 'py' ? 'பழைய மற்றும் சேதமடைந்த காஞ்சிபுரம் பட்டு புடவைகள் சிறந்த விலைக்கு வாங்கப்படும். உங்கள் வீட்டிற்கே வந்து பணம் வழங்கப்படும்.' : 
           'Sell your old and damaged silk sarees for the best price. Free doorstep service provided.'}
        </p>
      </div>

      {/* Contact CTA */}
      <div className="luxury-card" style={{ padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', backgroundImage: 'linear-gradient(45deg, #0c0509 0%, #1a0f14 100%)', border: '1px solid #b88d22' }}>
        <h2 className="font-heading-luxury" style={{ fontSize: '2rem', marginBottom: '2rem', color: '#e5c158' }}>Contact Sri Pattu & Zari Hub</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
          <a href="tel:6374067251" className="btn-gold-luxury" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <Phone size={20} /> Primary: 6374067251
          </a>
          <a href="tel:7358327898" className="btn-outline-luxury" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={20} /> Alt: 7358327898
          </a>
          <a href="tel:9941761336" className="btn-outline-luxury" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={20} /> Alt: 9941761336
          </a>
          <a href="https://wa.me/916374067251" target="_blank" rel="noopener noreferrer" className="btn-emerald" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', backgroundColor: '#0b5e56', color: '#f6f2ea', marginTop: '1rem' }}>
            <MessageSquare size={20} /> WhatsApp Quote
          </a>
        </div>
      </div>
    </div>
  );
}
