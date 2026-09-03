import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Phone, MessageSquare, Zap, Layers, Scale } from 'lucide-react';
import { translations } from '../data/translations';

export default function SareeValuationWizard({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    age: '10-20 Years (Vintage)',
    zariType: 'Pure Silver & Gold Zari',
    condition: 'Slightly Damaged / Torn',
    weight: '650'
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // Dynamic Valuation Estimate Formula based on Quiz
  const calculateWizardQuote = () => {
    let base = 6500;
    if (answers.zariType === 'Pure Silver & Gold Zari') base *= 2.8;
    else if (answers.zariType === 'Tested Zari') base *= 1.4;

    if (answers.age.includes('20+')) base *= 1.3;
    if (answers.condition.includes('Good')) base *= 1.2;

    const minVal = Math.round(base * 0.85);
    const maxVal = Math.round(base * 1.25);
    return { minVal, maxVal };
  };

  const { minVal, maxVal } = calculateWizardQuote();

  const whatsappWizardMessage = encodeURIComponent(
    `Hello Sri Pattu & Zari Hub,\nI completed the Online Saree Value Quiz:\n\n📅 Saree Age: ${answers.age}\n✨ Zari Type: ${answers.zariType}\n👗 Condition: ${answers.condition}\n⚖️ Approx Weight: ${answers.weight}g\n\n💰 Estimated Valuation: ₹${minVal.toLocaleString('en-IN')} - ₹${maxVal.toLocaleString('en-IN')}\n\nPlease visit my home for doorstep cash pickup!`
  );

  return (
    <section className="py-16 bg-neutral-950 border-b border-amber-500/20 text-left">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-red-900/40 border border-amber-400/40 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
            <Zap className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Instant Saree Cash Estimator Quiz</span>
          </div>
          <h2 className="text-3xl font-extrabold gold-text">
            Find Your Saree Payout Value in 30 Seconds
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/70">
            Answer 3 quick questions to get an instant spot cash estimate for your old silk saree collection.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="glass-panel p-6 sm:p-10 gold-border-glow relative overflow-hidden">
          
          {/* Progress Indicator Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 font-black flex items-center justify-center text-sm shadow-md">
                {step}
              </span>
              <span className="text-xs sm:text-sm font-bold text-amber-200">
                {step === 1 && "Step 1: Select Saree Age"}
                {step === 2 && "Step 2: Select Zari Thread Purity"}
                {step === 3 && "Step 3: Saree Fabric Condition"}
                {step === 4 && "Step 4: Your Spot Cash Estimate"}
              </span>
            </div>

            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map(s => (
                <div 
                  key={s}
                  className={`h-2 rounded-full transition-all ${s === step ? 'w-8 bg-amber-400' : s < step ? 'w-4 bg-emerald-400' : 'w-4 bg-neutral-800'}`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: Saree Age */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-amber-200">
                How old is your silk saree?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: '5 - 10 Years Old', desc: 'Modern Kanchipuram / Soft Silk' },
                  { label: '10 - 20 Years (Vintage)', desc: 'Heavy Pure Silver Zari Era' },
                  { label: '20+ Years Antique', desc: 'Pure Gold & Silver Weave Heritage' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAnswers({ ...answers, age: item.label });
                      nextStep();
                    }}
                    className={`p-5 rounded-2xl border text-left transition-all ${answers.age === item.label ? 'bg-gradient-to-br from-amber-500/20 via-red-950/40 to-neutral-900 border-amber-400 shadow-xl' : 'bg-neutral-900 border-amber-500/20 hover:border-amber-400'}`}
                  >
                    <div className="font-extrabold text-amber-100 text-base mb-1">{item.label}</div>
                    <div className="text-xs text-amber-200/60">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Zari Quality */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-amber-200">
                What type of Zari thread border does it have?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Pure Silver & Gold Zari', desc: 'Heavy authentic metallic thread (Highest Payout)' },
                  { label: 'Tested Zari', desc: 'Combination silver & metallic copper blend' },
                  { label: 'Commercial / Half Zari', desc: 'Lightweight metallic zari border' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAnswers({ ...answers, zariType: item.label });
                      nextStep();
                    }}
                    className={`p-5 rounded-2xl border text-left transition-all ${answers.zariType === item.label ? 'bg-gradient-to-br from-amber-500/20 via-red-950/40 to-neutral-900 border-amber-400 shadow-xl' : 'bg-neutral-900 border-amber-500/20 hover:border-amber-400'}`}
                  >
                    <div className="font-extrabold text-amber-100 text-base mb-1">{item.label}</div>
                    <div className="text-xs text-amber-200/60">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Condition */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-amber-200">
                What is the current condition of the saree?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Good Intact Condition', desc: 'Gently worn, clean silk texture' },
                  { label: 'Slightly Damaged / Stained', desc: 'Strained, discolored or minor holes' },
                  { label: 'Heavily Damaged & Torn', desc: 'Torn saree (We pay full Zari Silver Rate!)' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAnswers({ ...answers, condition: item.label });
                      nextStep();
                    }}
                    className={`p-5 rounded-2xl border text-left transition-all ${answers.condition === item.label ? 'bg-gradient-to-br from-amber-500/20 via-red-950/40 to-neutral-900 border-amber-400 shadow-xl' : 'bg-neutral-900 border-amber-500/20 hover:border-amber-400'}`}
                  >
                    <div className="font-extrabold text-amber-100 text-base mb-1">{item.label}</div>
                    <div className="text-xs text-amber-200/60">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Results & Action */}
          {step === 4 && (
            <div className="space-y-6 text-center animate-fade-in">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 text-neutral-950 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <Sparkles className="w-8 h-8 animate-spin-slow" />
              </div>

              <div>
                <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Estimated Spot Cash Payout Range</div>
                <div className="text-4xl sm:text-5xl font-black gold-text py-2">
                  ₹ {minVal.toLocaleString('en-IN')} – ₹ {maxVal.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-emerald-400 font-bold">
                  ✔ 100% Doorstep Spot Cash Paid Anywhere in South India
                </p>
              </div>

              <div className="bg-neutral-900/90 border border-amber-500/30 p-4 rounded-xl max-w-lg mx-auto text-xs text-amber-200/80 text-left space-y-1">
                <div>• <strong>Saree Age:</strong> {answers.age}</div>
                <div>• <strong>Zari Grade:</strong> {answers.zariType}</div>
                <div>• <strong>Condition:</strong> {answers.condition}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <button
                  onClick={onOpenBooking}
                  className="w-full btn-gold text-sm justify-center py-3"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Book Free Doorstep Pickup</span>
                </button>

                <a
                  href={`https://wa.me/916374067251?text=${whatsappWizardMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-emerald text-sm justify-center py-3"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-300" />
                  <span>WhatsApp Quote to Sri Pattu Hub</span>
                </a>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-amber-500/20">
            {step > 1 ? (
              <button 
                onClick={prevStep} 
                className="flex items-center gap-1.5 text-xs text-amber-300 font-bold hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 4 && (
              <button 
                onClick={nextStep} 
                className="flex items-center gap-1.5 text-xs text-amber-400 font-bold hover:underline"
              >
                <span>Skip to Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
