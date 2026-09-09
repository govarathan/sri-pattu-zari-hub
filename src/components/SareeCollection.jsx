import React, { useState } from 'react';
import { sareeTypesCatalog } from '../data/sareeTypes';
import { translations } from '../data/translations';
import { Sparkles, Check, ArrowRight, ShieldCheck, ZoomIn } from 'lucide-react';

export default function SareeCollection({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredCatalog = selectedCategory === 'all' 
    ? sareeTypesCatalog 
    : sareeTypesCatalog.filter(item => item.category === selectedCategory || item.id === selectedCategory);

  return (
    <section id="types" className="py-16 bg-neutral-950 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.typesPage?.headerTitle || 'Complete Saree & Zari Catalog'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold gold-text">
            {t.types?.title || 'Types of Silk Sarees & Raw Zari We Buy'}
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base">
            {t.types?.subtitle || 'We buy all varieties of old, second-hand, wedding, soft silk, and damaged pattu sarees at direct silk mill rates with doorstep spot cash.'}
          </p>

          {/* Expanded Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'all' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.all || 'All Types'} ({sareeTypesCatalog.length})
            </button>
            <button
              onClick={() => setSelectedCategory('kanchipuram')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'kanchipuram' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.kanchipuram || 'Kanchipuram & Soft Silk'}
            </button>
            <button
              onClick={() => setSelectedCategory('arani')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'arani' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.arani || 'Arani & Dharmavaram'}
            </button>
            <button
              onClick={() => setSelectedCategory('other_silk')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'other_silk' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.other_silk || 'Banarasi, Mysore, Tissue & Gadwal'}
            </button>
            <button
              onClick={() => setSelectedCategory('damaged')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'damaged' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.damaged || 'Damaged & Torn Silk'}
            </button>
            <button
              onClick={() => setSelectedCategory('veshti')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'veshti' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.veshti || 'Silk Veshti & Angavastram'}
            </button>
            <button
              onClick={() => setSelectedCategory('zari')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === 'zari' ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-lg shadow-amber-500/20' : 'bg-neutral-900 text-amber-200 border-amber-500/30 hover:border-amber-400'}`}
            >
              {t.typesPage?.categories?.zari || 'Raw Zari Threads & Borders'}
            </button>
          </div>
        </div>

        {/* 3D Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCatalog.map((item) => {
            const title = t.types[item.titleKey] || item.titleKey;
            const desc = t.types[item.descKey] || item.descKey;

            return (
              <div 
                key={item.id} 
                className="glass-panel p-5 gold-border-glow flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-2 relative"
              >
                
                <div>
                  {/* Image with Zoom Overlay */}
                  <div className="relative overflow-hidden rounded-xl mb-4 h-56 border border-amber-500/30">
                    <img 
                      src={item.image} 
                      alt={title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
                    
                    <span className="absolute top-3 left-3 gold-badge text-[10px] bg-neutral-950/80 backdrop-blur-md">
                      {item.badge}
                    </span>

                    <button 
                      onClick={() => setActiveModalItem(item)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-950/80 text-amber-400 flex items-center justify-center border border-amber-500/40 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">Spot Cash Valuation</div>
                      <div className="text-xl font-black text-amber-400">{item.estimatedPriceRange}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-400 transition-colors mb-2 text-left">
                    {title}
                  </h3>
                  
                  <p className="text-xs text-amber-200/70 mb-4 text-left leading-relaxed">
                    {desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 text-xs text-amber-100/90 text-left mb-6">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={onOpenBooking}
                  className="w-full btn-gold text-xs justify-center py-3"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.typesPage?.sellBtn || 'Sell This Saree at Doorstep'}</span>
                </button>

              </div>
            );
          })}
        </div>

        {/* Modal Detail Zoom Viewer */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
            <div className="bg-neutral-950 border border-amber-500/40 rounded-2xl max-w-xl w-full p-6 text-left relative shadow-2xl">
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 text-amber-400 hover:text-white bg-neutral-900 p-1.5 rounded-full"
              >
                ✕
              </button>
              
              <img 
                src={activeModalItem.image} 
                alt="Zoom view" 
                className="w-full h-64 object-cover rounded-xl border border-amber-500/30 mb-4" 
              />
              
              <h3 className="text-2xl font-bold gold-text mb-1">
                {activeModalItem.titleKey}
              </h3>
              
              <p className="text-sm text-amber-200/80 mb-3">
                {activeModalItem.descKey}
              </p>

              <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-lg text-xs text-amber-300 mb-4">
                <strong>Zari Purity Spec:</strong> {activeModalItem.purityInfo}
              </div>

              <div className="flex gap-3">
                <button onClick={() => { setActiveModalItem(null); onOpenBooking(); }} className="w-full btn-gold text-sm justify-center py-2.5">
                  Book Pickup Now
                </button>
                <a href="tel:6374067251" className="w-full btn-crimson text-sm justify-center py-2.5">
                  Call 63740 67251
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
