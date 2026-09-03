import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, ZoomIn, ArrowRight } from 'lucide-react';
import { sareeTypesCatalog } from '../data/sareeTypes';
import { translations } from '../data/translations';

export default function AutoSlidingCards({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sareeTypesCatalog.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sareeTypesCatalog.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sareeTypesCatalog.length) % sareeTypesCatalog.length);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#0c0509] via-[#1a0812]/40 to-[#0c0509] border-b border-[#e5c158]/20 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e5c158]/10 border border-[#e5c158]/30 px-3 py-1 rounded-full text-xs font-bold text-[#e5c158] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Auto-Sliding Saree Showcase</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-serif-luxury gold-gradient-text">
              Featured Silk Saree Payout Rates
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-[#f7e7a9] bg-[#160a10] border border-[#e5c158]/40 px-3 py-1.5 rounded-full font-bold hover:border-[#e5c158]"
            >
              {isAutoPlaying ? '⏸ Pause Sliding' : '▶ Auto Slide'}
            </button>
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#160a10] border border-[#e5c158]/40 text-[#e5c158] flex items-center justify-center hover:bg-[#e5c158] hover:text-[#0c0509] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#160a10] border border-[#e5c158]/40 text-[#e5c158] flex items-center justify-center hover:bg-[#e5c158] hover:text-[#0c0509] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {sareeTypesCatalog.map((item, idx) => {
              const title = t.types[item.titleKey] || item.titleKey;
              const desc = t.types[item.descKey] || item.descKey;

              return (
                <div 
                  key={idx}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 luxury-card p-5 border border-[#e5c158]/30 flex flex-col justify-between group transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div>
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-4 h-56 border border-[#e5c158]/30">
                      <img 
                        src={item.image} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0509] via-transparent to-transparent opacity-80"></div>
                      
                      <span className="absolute top-3 left-3 gold-badge text-[10px] bg-[#0c0509]/80 backdrop-blur-md">
                        {item.badge}
                      </span>

                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <div className="text-[10px] text-[#e5c158] font-bold uppercase tracking-wider">Spot Cash Payout</div>
                        <div className="text-xl font-extrabold text-[#f7e7a9]">{item.estimatedPriceRange}</div>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-[#f7e7a9] mb-1 group-hover:text-[#e5c158] transition-colors">
                      {title}
                    </h4>

                    <p className="text-xs text-[#f6f2ea]/70 mb-4 line-clamp-2">
                      {desc}
                    </p>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full btn-gold-luxury text-xs justify-center py-2.5"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Sell This Saree</span>
                  </button>

                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {sareeTypesCatalog.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-[#e5c158]' : 'w-2 bg-[#e5c158]/30 hover:bg-[#e5c158]/60'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
