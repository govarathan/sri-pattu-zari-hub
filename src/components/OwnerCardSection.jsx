import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Award, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function OwnerCardSection({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;

  return (
    <section id="card-details" className="py-16 bg-neutral-950 border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.cardSection?.badge || 'Direct Mill Buyers & Doorstep Valuation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold gold-text">
            {t.cardSection?.title || 'Sri Pattu & Zari Hub Contact Center'}
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base">
            {t.cardSection?.subtitle || 'Contact our doorstep team for immediate gold & silver zari silk saree valuation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visiting Card Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Visiting Card UI Frame */}
            <div className="w-full max-w-md bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-500 text-neutral-950 p-6 rounded-2xl shadow-2xl border-4 border-amber-200 relative overflow-hidden text-left transform transition-transform hover:rotate-1 hover:scale-105">
              
              {/* Top Card Strip */}
              <div className="flex justify-between items-start border-b-2 border-neutral-950/20 pb-3 mb-3">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-neutral-800 uppercase">தொடர்பு / Contact Center:</div>
                  <div className="text-xl font-black text-neutral-950">SRI PATTU & ZARI HUB</div>
                  <div className="text-xs font-extrabold text-red-900">KANCHIPURAM SILK CENTER</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-950 text-amber-400 flex items-center justify-center font-black text-xs shadow-md">
                  PATTU
                </div>
              </div>

              {/* Main Card Title */}
              <div className="text-center py-2 bg-neutral-950 text-amber-300 rounded-xl mb-3 shadow-inner">
                <div className="text-xs font-bold tracking-widest text-amber-400">காஞ்சிபுரம்</div>
                <div className="text-2xl font-black tracking-tight text-white">பட்டு சென்டர்</div>
                <div className="text-[10px] text-amber-200 uppercase font-bold tracking-widest">KANCHIPURAM SILK CENTER</div>
              </div>

              {/* Card Services Description Text */}
              <div className="bg-neutral-900/10 p-3 rounded-lg text-xs font-bold text-neutral-900 leading-snug space-y-1 mb-4 border border-neutral-950/20">
                <p>
                  பழைய கிழிந்த பட்டுப் புடவைகள், பட்டு வேஷ்டிகள், பட்டு பாவாடைகள், பட்டு அங்கவஸ்திரம், காஞ்சிபுரம், ஆரணி, தர்மவரம் பட்டு புடவைகள் போன்ற அனைத்து பட்டு உடைகளும் வாங்கப்படும்.
                </p>
                <p className="text-red-900 font-black text-sm pt-1 underline">
                  [போன் செய்தால் வீட்டிற்கே வந்து எடுக்கப்படும்]
                </p>
              </div>

              {/* Card Phone Numbers Bar */}
              <div className="bg-neutral-950 text-amber-300 p-3 rounded-xl flex flex-col gap-1 text-center shadow-lg border border-amber-400/50">
                <div className="text-[10px] font-bold text-amber-400/80 uppercase">அழைக்க வேண்டிய எண்கள் / Call Hotline</div>
                <div className="text-xl font-black tracking-wider text-white flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-amber-400 animate-bounce" />
                  <span>63740 67251</span>
                </div>
                <div className="text-xs font-extrabold text-amber-200/90 flex justify-center gap-4 pt-1">
                  <span>73583 27898</span>
                  <span>•</span>
                  <span>99417 61336</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Contact & Action Controls */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="glass-panel p-6 sm:p-8 gold-border-glow space-y-5">
              
              <h3 className="text-2xl font-bold gold-text">
                Sri Pattu & Zari Hub - Official Contact Details
              </h3>

              <p className="text-sm text-amber-100/80 leading-relaxed">
                {t.cardSection?.desc || 'Reach our direct silk buyers for doorstep cash payout anywhere in Tambaram, Chennai & South India.'}
              </p>

              <div className="space-y-3 pt-2">
                
                {/* Number 1: Primary fast hotline */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-emerald-500/40">
                  <div>
                    <div className="text-xs text-emerald-400 font-bold">Fast Doorstep Pickup Line (24/7)</div>
                    <div className="text-lg font-black text-white">63740 67251</div>
                  </div>
                  <a href="tel:6374067251" className="btn-emerald text-xs py-2 px-4">
                    Call Now
                  </a>
                </div>

                {/* Number 2 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-amber-500/30">
                  <div>
                    <div className="text-xs text-amber-400 font-bold">Contact Line 1</div>
                    <div className="text-base font-bold text-amber-100">73583 27898</div>
                  </div>
                  <a href="tel:7358327898" className="btn-gold text-xs py-1.5 px-3">
                    Call
                  </a>
                </div>

                {/* Number 3 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-amber-500/30">
                  <div>
                    <div className="text-xs text-amber-400 font-bold">Contact Line 2</div>
                    <div className="text-base font-bold text-amber-100">99417 61336</div>
                  </div>
                  <a href="tel:9941761336" className="btn-gold text-xs py-1.5 px-3">
                    Call
                  </a>
                </div>

              </div>

              <div className="pt-3 flex gap-3">
                <button 
                  onClick={onOpenBooking}
                  className="w-full btn-gold text-sm justify-center py-3"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Book Free Doorstep Valuation</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
