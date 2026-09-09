import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ChevronRight, MessageSquare, ShieldCheck, CheckCircle2, Bike, HandCoins, Sparkles, Navigation } from 'lucide-react';
import { statesData } from '../data/locationsData';
import { sareeTypesCatalog } from '../data/sareeTypes';
import { getImageUrl } from '../utils/imageUtils';

export default function CityPage({ currentLang, onOpenBooking }) {
  const { stateId, citySlug } = useParams();
  
  // Find state or default to TN
  const state = statesData.find(s => s.id === stateId) || statesData.find(s => s.featuredCities.some(c => c.slug === citySlug)) || statesData[0];
  
  // Find matching city/sub-location across state or all states
  const city = state?.featuredCities?.find(
    c => c.slug === citySlug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === citySlug
  ) || statesData.flatMap(s => s.featuredCities).find(
    c => c.slug === citySlug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === citySlug
  );

  useEffect(() => {
    if (city) {
      document.title = `${city.name} Second Saree Buyer & Old Silk Saree Cash | Sri Pattu & Zari Hub`;
    }
  }, [city]);

  const t = translations[currentLang] || translations['en'];

  if (!city) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', color: '#f6f2ea' }}>
        <h2 className="font-heading-luxury" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{t.cityPage?.notFound || 'Location not found'}</h2>
        <Link to="/" className="btn-gold-luxury" style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}>{t.cityPage?.breadcrumbHome || 'Return to Home'}</Link>
      </div>
    );
  }

  const steps = [
    { icon: <Phone size={32} />, title: t.cityPage?.step1Title || 'Step 1: Contact Executive', desc: t.cityPage?.step1Desc || 'Call 63740 67251 or WhatsApp us to schedule a pickup.' },
    { icon: <Bike size={32} />, title: t.cityPage?.step2Title || 'Step 2: Doorstep Visit', desc: t.cityPage?.step2Desc || `Our mobile team arrives at your location in ${city.name}.` },
    { icon: <ShieldCheck size={32} />, title: t.cityPage?.step3Title || 'Step 3: Touchstone Zari Test', desc: t.cityPage?.step3Desc || 'Transparent evaluation of silver & gold zari quality.' },
    { icon: <HandCoins size={32} />, title: t.cityPage?.step4Title || 'Step 4: Instant Spot Cash', desc: t.cityPage?.step4Desc || 'Immediate cash payment handed over at your doorstep.' }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', color: '#f6f2ea' }}>
      
      {/* Schema.org JSON-LD for Local Sub-Location */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Sri Pattu & Zari Hub - ${city.name} Second Saree Buyer`,
          "alternateName": [`${city.name} Old Pattu Saree Buyer`, `Silk Saree Buyer ${city.name}`],
          "image": "https://govarathan.github.io/sri-pattu-zari-hub/images/kanchipuram_hero.png",
          "telephone": "+916374067251",
          "url": `https://govarathan.github.io/sri-pattu-zari-hub/#/city/${state.id}/${city.slug}`,
          "priceRange": "₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": state.name,
            "postalCode": city.pincodes ? city.pincodes.split(',')[0].trim() : '600001',
            "addressCountry": "IN"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": ["https://wa.me/916374067251"],
          "description": `#1 rated second saree buyer in ${city.name}. We buy old Kanchipuram silk sarees, damaged zari, pattu veshtis with free doorstep valuation and instant spot cash payout.`
        })}
      </script>

      {/* Breadcrumbs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: '#b88d22', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: '#e5c158', textDecoration: 'none' }}>{t.cityPage?.breadcrumbHome || 'Home'}</Link>
        <ChevronRight size={16} />
        <Link to={`/state/${state.id}`} style={{ color: '#e5c158', textDecoration: 'none' }}>{state.name}</Link>
        <ChevronRight size={16} />
        <span style={{ color: '#f6f2ea' }}>{city.name}</span>
      </nav>

      {/* City Hero */}
      <div className="luxury-card glass-panel" style={{ padding: '4rem 2rem', borderRadius: '16px', marginBottom: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {city.time && (
          <div className="gold-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.9rem', backgroundColor: 'rgba(229,193,88,0.15)', marginBottom: '1.5rem', border: '1px solid #e5c158' }}>
            <Clock size={16} />
            <span>{t.cityPage?.expressService || 'Express Doorstep Service:'} {city.time}</span>
          </div>
        )}
        <h1 className="font-heading-luxury gold-gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0 0 1rem 0', lineHeight: '1.2' }}>
          {city.name} {t.cityPage?.heroTitleSuffix || 'Second Saree Buyer & Old Silk Saree Spot Cash'}
        </h1>
        <h2 style={{ fontSize: '1.4rem', color: '#e5c158', margin: '0 0 2rem 0', fontWeight: 'normal' }}>
          {city.nativeName} - ஸ்ரீ பட்டு & ஜரிகை மையம்
        </h2>
        <p className="font-serif-luxury" style={{ fontSize: '1.15rem', maxWidth: '850px', margin: '0 auto 2rem auto', lineHeight: '1.6', color: '#e2e2e2' }}>
          {t.cityPage?.heroDesc || `Get the highest direct mill payout for your old Kanchipuram, Arani, Banarasi, and damaged pattu sarees in ${city.name}. Free doorstep pickup & instant cash guaranteed.`}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={onOpenBooking} className="btn-gold-luxury" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', borderRadius: '30px', cursor: 'pointer' }}>
            {t.cityPage?.bookBtn || 'Book Free Doorstep Pickup'} in {city.name}
          </button>
          <a href="tel:6374067251" className="btn-emerald" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '30px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#0b5e56', color: '#fff' }}>
            <Phone size={20} /> {t.cityPage?.callExecutiveBtn || 'Call Executive:'} 63740 67251
          </a>
        </div>
      </div>

      {/* Coverage Details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h3 className="font-heading-luxury" style={{ fontSize: '1.4rem', color: '#e5c158', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={22} /> {t.cityPage?.neighborhoodsTitle || 'Covered Neighborhoods & Landmarks'}
          </h3>
          <p style={{ lineHeight: '1.8', fontSize: '1rem', color: '#f6f2ea' }}>{city.highlight}</p>
        </div>
        <div className="luxury-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <h3 className="font-heading-luxury" style={{ fontSize: '1.4rem', color: '#e5c158', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Navigation size={22} /> {t.cityPage?.pincodesTitle || 'Serviceable Pincodes & Speed'}
          </h3>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fde68a', marginBottom: '0.5rem' }}>{city.pincodes}</p>
          <div style={{ fontSize: '0.9rem', color: '#34d399', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} /> {t.cityPage?.arrivalTime || 'Doorstep arrival:'} {city.time}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <h2 className="font-heading-luxury" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem', color: '#e5c158' }}>
        4-Step Doorstep Pickup in {city.name}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(229,193,88,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e5c158', marginBottom: '1.5rem', border: '2px solid #e5c158' }}>
              {step.icon}
            </div>
            <h4 className="font-heading-luxury" style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#f6f2ea' }}>{step.title}</h4>
            <p className="font-serif-luxury" style={{ color: '#f7e7a9', lineHeight: '1.5', fontSize: '0.9rem' }}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Saree Types We Buy */}
      <h2 className="font-heading-luxury" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem', color: '#e5c158' }}>
        {t.cityPage?.varietiesTitle || 'Top Silk Saree Varieties We Buy in'} {city.name}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        {sareeTypesCatalog.slice(0, 4).map((saree) => (
          <div key={saree.id} className="luxury-card glass-panel" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ height: '200px', backgroundColor: '#1a0f14', position: 'relative' }}>
              <img src={getImageUrl(saree.image)} alt={saree.badge} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
          {currentLang === 'ta' ? `${city.name}-இல் பழைய பட்டு புடவைகள் வாங்கப்படும்` : 
           currentLang === 'kn' ? `${city.name}-ನಲ್ಲಿ ಹಳೆಯ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ಖರೀದಿಸುತ್ತೇವೆ` :
           currentLang === 'te' ? `${city.name}-లో పాత పట్టు చీరలు కొనుగోలు చేయబడును` :
           currentLang === 'ml' ? `${city.name}-ൽ പഴയ പട്ട് സാരികൾ വാങ്ങും` :
           `${city.name} Second Saree Buyer & Spot Cash`}
        </h3>
        <p className="font-serif-luxury" style={{ lineHeight: '1.8', color: '#e2e2e2', fontSize: '1.1rem' }}>
          {currentLang === 'ta' ? `பழைய மற்றும் சேதமடைந்த காஞ்சிபுரம் பட்டு புடவைகள் ${city.name} பகுதியில் சிறந்த விலைக்கு வாங்கப்படும். உங்கள் வீட்டிற்கே வந்து பணம் வழங்கப்படும்.` : 
           currentLang === 'te' ? `పాత మరియు పాడైపోయిన కాంచీపురం పట్టు చీరలు ${city.name} లో అత్యుత్తమ ధరకు కొనుగోలు చేయబడును. మీ ఇంటికే వచ్చి నగదు ఇస్తాము.` :
           currentLang === 'kn' ? `ಹಳೆಯ ಮತ್ತು ಹಾಳಾದ ಕಾಂಚೀಪುರಂ ರೇಷ್ಮೆ ಸೀರೆಗಳನ್ನು ${city.name} ನಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಬೆಲೆಗೆ ಖರೀದಿಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಮನೆಗೆ ಬಂದು ಹಣ ನೀಡಲಾಗುತ್ತದೆ.` :
           currentLang === 'ml' ? `പഴയതും കേടായതുമായ കാഞ്ചീപുരം പട്ടു സാരികൾ ${city.name}-ൽ ഏറ്റവും ഉയർന്ന വിലയ്ക്ക് വാങ്ങുന്നു. വീട്ടിലെത്തി പണം നൽകുന്നു.` :
           `Sell your old and damaged silk sarees for the best price in ${city.name}. Free doorstep service provided.`}
        </p>
      </div>

      {/* Contact CTA */}
      <div className="luxury-card" style={{ padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', backgroundImage: 'linear-gradient(45deg, #0c0509 0%, #1a0f14 100%)', border: '1px solid #b88d22' }}>
        <h2 className="font-heading-luxury" style={{ fontSize: '2rem', marginBottom: '2rem', color: '#e5c158' }}>{t.cityPage?.bookServiceTitle || 'Book Doorstep Service in'} {city.name}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
          <a href="tel:6374067251" className="btn-gold-luxury" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <Phone size={20} /> {t.cityPage?.primaryBtn || 'Primary: 63740 67251'}
          </a>
          <a href="tel:7358327898" className="btn-outline-luxury" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={20} /> {t.cityPage?.altBtn || 'Alt:'} 73583 27898
          </a>
          <a href="tel:9941761336" className="btn-outline-luxury" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={20} /> {t.cityPage?.altBtn || 'Alt:'} 99417 61336
          </a>
          <a href={`https://wa.me/916374067251?text=Hi, I am located in ${city.name} and want to sell silk sarees.`} target="_blank" rel="noopener noreferrer" className="btn-emerald" style={{ padding: '1rem', borderRadius: '8px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', backgroundColor: '#0b5e56', color: '#f6f2ea', marginTop: '1rem' }}>
            <MessageSquare size={20} /> {t.cityPage?.whatsappBtn || 'WhatsApp Quote'} for {city.name}
          </a>
        </div>
      </div>
    </div>
  );
}
