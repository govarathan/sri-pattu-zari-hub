import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { translations } from '../data/translations';

export default function ZariCalculator({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;

  const [sareeType, setSareeType] = useState('kanchipuram');
  const [zariQuality, setZariQuality] = useState('pure');
  const [weightGrams, setWeightGrams] = useState(650);

  // Rate multiplier calculation formula
  const getRatePerGram = () => {
    let baseRate = 18; // base per gram
    if (zariQuality === 'pure') baseRate = 85; // pure silver/gold zari per gram average payout
    else if (zariQuality === 'tested') baseRate = 35;
    else baseRate = 18;

    if (sareeType === 'kanchipuram') baseRate *= 1.25;
    else if (sareeType === 'zari_thread') baseRate *= 1.4;

    return baseRate;
  };

  const ratePerGram = getRatePerGram();
  const estimatedMin = Math.round(weightGrams * ratePerGram * 0.85);
  const estimatedMax = Math.round(weightGrams * ratePerGram * 1.15);

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-neutral-950 via-red-950/20 to-neutral-950 border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{t.calculator.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="glass-panel p-6 sm:p-10 gold-border-glow max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Saree Type Dropdown */}
            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                1. {t.calculator.sareeType}
              </label>
              <select
                value={sareeType}
                onChange={(e) => setSareeType(e.target.value)}
                className="form-input text-amber-100 font-semibold"
              >
                <option value="kanchipuram">Kanchipuram Heavy Pure Silk (காஞ்சிபுரம் பட்டு)</option>
                <option value="arani_dharmavaram">Arani & Dharmavaram Silk (ஆரணி & தர்மவரம்)</option>
                <option value="veshti">Silk Veshti & Angavastram (பட்டு வேஷ்டி)</option>
                <option value="damaged">Damaged / Torn Saree (கிழிந்த பட்டு சேலை)</option>
                <option value="zari_thread">Extracted Pure Zari Thread (உருகிய ஜரிகை)</option>
              </select>
            </div>

            {/* Zari Quality Grade Radio Select */}
            <div>
              <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                2. {t.calculator.zariQuality}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setZariQuality('pure')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${zariQuality === 'pure' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 border-amber-300 shadow-lg' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
                >
                  {t.calculator.pureGoldZari}
                </button>
                <button
                  type="button"
                  onClick={() => setZariQuality('tested')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${zariQuality === 'tested' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 border-amber-300 shadow-lg' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
                >
                  {t.calculator.testedZari}
                </button>
                <button
                  type="button"
                  onClick={() => setZariQuality('half')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${zariQuality === 'half' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 border-amber-300 shadow-lg' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
                >
                  {t.calculator.halfZari}
                </button>
              </div>
            </div>

            {/* Gram Weight Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  3. {t.calculator.weightGram}
                </label>
                <span className="text-base font-black text-amber-400 bg-neutral-900 px-3 py-1 rounded-lg border border-amber-500/30">
                  {weightGrams} grams
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="25"
                value={weightGrams}
                onChange={(e) => setWeightGrams(Number(e.target.value))}
                className="w-full h-3 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-amber-200/50 mt-1 font-semibold">
                <span>100g (Light)</span>
                <span>650g (Standard Saree)</span>
                <span>2000g (Heavy Collection)</span>
              </div>
            </div>

          </div>

          {/* Result Column */}
          <div className="md:col-span-5 bg-gradient-to-br from-neutral-950 via-red-950 to-neutral-950 p-6 rounded-2xl border border-amber-500/40 text-center space-y-5 shadow-2xl relative overflow-hidden">
            
            <div className="text-xs text-amber-300 font-bold uppercase tracking-widest">
              {t.calculator.estimatedValue}
            </div>

            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-black gold-text tracking-tight">
                ₹ {estimatedMin.toLocaleString('en-IN')} – ₹ {estimatedMax.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-emerald-400 font-bold mt-1">
                ✔ Spot Cash Paid at Your Doorstep
              </div>
            </div>

            <div className="space-y-2 text-xs text-amber-100/80 text-left border-t border-b border-amber-500/20 py-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero deduction for silk wear & tear</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Silver touchstone purity test in front of you</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate cash payout on the spot</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full btn-gold text-sm justify-center py-3"
            >
              <span>{t.calculator.bookPickupBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:6374067251"
              className="block text-xs text-amber-300 hover:underline font-bold"
            >
              Need Exact Price? Call: 63740 67251
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
