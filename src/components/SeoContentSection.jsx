import React from 'react';
import { translations } from '../data/translations';
import { BookOpen, ShieldCheck, CheckCircle2, Award, Zap, HelpCircle } from 'lucide-react';

export default function SeoContentSection({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;

  return (
    <section className="py-16 bg-neutral-950 border-b border-amber-500/20 text-left">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        {/* SEO Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>SEO Knowledge Hub & Selling Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold gold-text leading-tight">
            {t.seoContent.h1}
          </h2>
          <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
            {t.seoContent.p1}
          </p>
        </div>

        {/* Step-by-step Guide */}
        <div className="glass-panel p-6 sm:p-8 gold-border-glow space-y-6">
          <h3 className="text-xl font-bold text-amber-300 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>How to Sell Your Second-Hand Pattu Saree in 3 Easy Steps</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/90 border border-amber-500/30 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 font-black flex items-center justify-center text-sm">1</div>
              <h4 className="font-bold text-amber-200 text-sm">Call or Send Photos</h4>
              <p className="text-xs text-amber-100/70">
                Call <strong>63740 67251</strong> or send photos of your silk saree pallu/border via WhatsApp.
              </p>
            </div>

            <div className="bg-neutral-900/90 border border-amber-500/30 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 font-black flex items-center justify-center text-sm">2</div>
              <h4 className="font-bold text-amber-200 text-sm">Doorstep Inspection</h4>
              <p className="text-xs text-amber-100/70">
                Sri Pattu & Zari Hub's team visits your home anywhere in TN, Karnataka, AP or Kerala within 1-2 hours.
              </p>
            </div>

            <div className="bg-neutral-900/90 border border-amber-500/30 p-5 rounded-xl space-y-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 font-black flex items-center justify-center text-sm">3</div>
              <h4 className="font-bold text-amber-200 text-sm">Instant Spot Cash Payout</h4>
              <p className="text-xs text-amber-100/70">
                We test silver zari purity right in front of you and pay direct Kanchipuram mill cash on the spot.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Informational SEO Text */}
        <div className="space-y-6 text-xs sm:text-sm text-amber-100/80 leading-relaxed">
          
          <div className="bg-neutral-900/60 p-6 rounded-2xl border border-amber-500/20 space-y-3">
            <h3 className="text-lg font-bold text-amber-300">
              Why Sell Your Old Silk Sarees to Sri Pattu & Zari Hub?
            </h3>
            <p>
              Traditional silk sarees often remain unused in almirahs for decades, losing their lustrous appearance or getting damaged by moisture. However, genuine Kanchipuram, Arani, and Dharmavaram sarees contain authentic silver and gold zari threads that retain high intrinsic metallic value regardless of fabric age or torn condition.
            </p>
            <p>
              While local jewelers or scrap buyers deduct heavy commission fees, <strong>Sri Pattu & Zari Hub</strong> directly operates from Kanchipuram silk weaving mills. This allows us to pass 100% of the true market value directly to you without middleman cuts.
            </p>
          </div>

          <div className="bg-neutral-900/60 p-6 rounded-2xl border border-amber-500/20 space-y-3">
            <h3 className="text-lg font-bold text-amber-300">
              Types of Silk Items We Buy Across India
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vintage Kanchipuram Pure Silk Sarees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Torn, Damaged & Stained Silk Sarees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pure Zari Silk Veshti & Angavastram</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Arani, Dharmavaram & Mysore Silk Sarees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Children's Vintage Pattu Pavadai Sets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Extracted Pure Silver & Gold Zari Thread Coils</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
