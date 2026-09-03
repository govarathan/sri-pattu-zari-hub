import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { translations } from '../data/translations';

export default function FloatingCallWidget({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-neutral-950/95 border-t border-amber-500/40 backdrop-blur-xl shadow-2xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        
        {/* Left Info Tag */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-amber-200 font-bold">Sri Pattu & Zari Hub • Doorstep Pickup:</span>
          <span className="text-emerald-400 font-black">63740 67251</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          
          <a
            href="tel:6374067251"
            className="flex-1 sm:flex-none btn-gold text-xs sm:text-sm py-2.5 px-4 justify-center animate-pulse-glow"
          >
            <Phone className="w-4 h-4 fill-neutral-950 text-neutral-950 animate-bounce" />
            <span>Call 6374067251</span>
          </a>

          <a
            href="https://wa.me/916374067251?text=Hi%2C%20I%20want%20to%20sell%20my%20old%20Pattu%20Saree.%20Please%20send%20a%20doorstep%20agent."
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none btn-emerald text-xs sm:text-sm py-2.5 px-4 justify-center"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-300" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden md:flex btn-crimson text-xs py-2.5 px-4 justify-center"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Book Pickup</span>
          </button>

        </div>

      </div>
    </div>
  );
}
