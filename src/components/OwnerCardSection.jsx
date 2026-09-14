import React from "react";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { translations } from "../data/translations";
import { getImageUrl } from "../utils/imageUtils";

export default function OwnerCardSection({ currentLang, onOpenBooking }) {
  const t = translations[currentLang] || translations.en;
  const whatsappUrl =
    "https://wa.me/916374067251?text=Hi%20Sri%20Pattu%20%26%20Zari%20Hub%2C%20I%20want%20to%20sell%20my%20silk%20sarees%20at%20my%20doorstep.";

  return (
    <section
      id="card-details"
      className="py-16 bg-neutral-950 border-b border-amber-500/20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>
              {t.cardSection?.badge ||
                "Direct Mill Buyers & Doorstep Valuation"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold gold-text">
            {t.cardSection?.title || "Sri Pattu & Zari Hub Contact Center"}
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base">
            {t.cardSection?.subtitle ||
              "Contact our doorstep team for immediate gold & silver zari silk saree valuation."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Visiting Card Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Visiting Card UI Frame */}
            <div className="w-full max-w-md bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-500 text-neutral-950 p-4 sm:p-5 rounded-2xl shadow-2xl border-4 border-amber-200 relative overflow-hidden text-left transform transition-transform hover:scale-[1.02]">
              {/* Top Card Strip with Official Logo */}
              <div className="flex justify-between items-center border-b-2 border-neutral-950/20 pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={getImageUrl("images/sri_pattu_logo.png")}
                    alt="Sri Pattu Official Logo"
                    className="w-12 h-12 rounded-full border-2 border-neutral-950 object-cover shadow-md shrink-0"
                  />
                  <div>
                    <div className="text-[9px] font-black tracking-widest text-neutral-800 uppercase">
                      ராதே கிருஷ்ணன் துணை
                    </div>
                    <div className="text-base sm:text-lg font-black text-neutral-950 leading-tight">
                      SRI PATTU & ZARI HUB
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-extrabold text-red-900">
                      SECOND HAND SILK SAREES BUYER
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Card Title */}
              <div className="text-center py-2 bg-neutral-950 text-amber-300 rounded-xl mb-3 shadow-inner">
                <div className="text-xs font-bold tracking-widest text-amber-400">
                  ஸ்ரீ பட்டு & ஜரிகை மையம்
                </div>
                <div className="text-lg sm:text-xl font-black tracking-tight text-white">
                  SRI PATTU & ZARI HUB
                </div>
                <div className="text-[9px] sm:text-[10px] text-emerald-400 uppercase font-bold tracking-widest pt-0.5">
                  ALL OVER SOUTH INDIA DOORSTEP PICKUP • SPOT CASH
                </div>
              </div>

              {/* 6 Saree Photos Grid inside Business Card */}
              <div className="grid grid-cols-6 gap-1 bg-neutral-950 p-1.5 rounded-lg mb-3 border border-amber-500/40">
                {[
                  {
                    img: getImageUrl("images/real/real_1.jpg"),
                    label: "காஞ்சி",
                  },
                  { img: getImageUrl("images/real/real_3.jpg"), label: "ஆரணி" },
                  {
                    img: getImageUrl("images/real/real_5.jpg"),
                    label: "வேஷ்டி",
                  },
                  {
                    img: getImageUrl("images/real/real_6.jpg"),
                    label: "பழுது",
                  },
                  {
                    img: getImageUrl("images/real/real_7.jpg"),
                    label: "பாவாடை",
                  },
                  {
                    img: getImageUrl("images/real/real_8.jpg"),
                    label: "ஜரிகை",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative h-10 sm:h-12 rounded overflow-hidden border border-amber-400/40"
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[7px] text-amber-200 font-bold text-center py-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Services Description Text */}
              <div className="bg-neutral-900/10 p-2.5 rounded-lg text-xs font-bold text-neutral-900 leading-snug space-y-1 mb-3 border border-neutral-950/20">
                <p>
                  பழைய கிழிந்த பட்டுப் புடவைகள், பட்டு வேஷ்டிகள், பட்டு
                  பாவாடைகள், பட்டு அங்கவஸ்திரம், காஞ்சிபுரம், ஆரணி, தர்மவரம்
                  பட்டு புடவைகள் நியாயமான விலைக்கு வாங்கப்படும்.
                </p>
                <p className="text-red-900 font-black text-[11px] pt-0.5 underline">
                  (காஞ்சிபுரம் மில் விலைக்கு வாங்கப்படும்) போன் செய்தால்
                  வீட்டிற்கே வந்து எடுக்கப்படும்
                </p>
              </div>

              {/* Card Phone Number & Interactive Action Bar */}
              <div className="bg-neutral-950 text-amber-300 p-3 rounded-xl flex flex-col gap-2 text-center shadow-lg border border-amber-400/50">
                <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                  தென்னிந்தியா முழுவதும் 24x7 ஹோம் பிக்கப் எண்
                </div>
                <a
                  href="tel:6374067251"
                  className="text-xl sm:text-2xl font-black tracking-wider text-white hover:text-emerald-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-emerald-400 animate-bounce" />
                  <span>63740 67251</span>
                </a>

                <div className="flex gap-2 pt-1">
                  <a
                    href="tel:6374067251"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-decoration-none"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 63740 67251</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-decoration-none"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>

                <div className="text-[10px] font-bold text-amber-400/80 pt-1 tracking-wider border-t border-amber-500/20 mt-1">
                  www.sri-pattu-zari-hub.com
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
                {t.cardSection?.desc ||
                  "Reach our direct silk buyers for doorstep cash payout anywhere in Tambaram, Chennai & South India."}
              </p>

              <div className="space-y-3 pt-2">
                {/* Number 1: Primary fast hotline */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-emerald-500/40">
                  <div>
                    <div className="text-xs text-emerald-400 font-bold">
                      Fast Doorstep Pickup Line (24/7)
                    </div>
                    <div className="text-lg font-black text-white">
                      63740 67251
                    </div>
                  </div>
                  <a
                    href="tel:6374067251"
                    className="btn-emerald text-xs py-2 px-4"
                  >
                    Call Now
                  </a>
                </div>

                {/* Business Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-amber-500/30">
                  <div>
                    <div className="text-xs text-amber-400 font-bold">
                      Business Email
                    </div>
                    <div className="text-sm font-bold text-amber-100">
                      sripattuzarihub@gmail.com
                    </div>
                  </div>
                  <a
                    href="mailto:sripattuzarihub@gmail.com"
                    className="btn-gold text-xs py-1.5 px-3"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-emerald text-sm justify-center py-3 text-decoration-none"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-300" />
                  <span>WhatsApp Quote Directly</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full btn-gold text-sm justify-center py-3"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Book Free Doorstep Pickup</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
