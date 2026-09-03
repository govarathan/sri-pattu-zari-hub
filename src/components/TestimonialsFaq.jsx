import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, MessageCircle, HelpCircle, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function TestimonialsFaq({ currentLang }) {
  const t = translations[currentLang] || translations.en;
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const reviews = [
    {
      name: "Sowmya Lakshmi",
      city: "T. Nagar, Chennai",
      rating: 5,
      comment: "I had 4 old wedding Kanchipuram sarees from 20 years ago. Sri Pattu Hub's agent came directly to my home in T.Nagar within 45 minutes, checked the zari, and paid ₹64,000 cash on the spot! Highly honest service.",
      tag: "Verified Doorstep Payout"
    },
    {
      name: "Ramesh Babu",
      city: "Jayanagar, Bangalore",
      rating: 5,
      comment: "Best rate for old silk sarees in Bangalore! Local shops offered low price, but Sri Pattu & Zari Hub gave direct Kanchipuram mill rate. Very polite team.",
      tag: "Bangalore Doorstep Service"
    },
    {
      name: "Venkat Rao",
      city: "Banjara Hills, Hyderabad",
      rating: 5,
      comment: "విజయవాడ మరియు హైదరాబాద్‌లో ఇంత మంచి రేటు ఎవరూ ఇవ్వరు. మా ఇంట్లోని పాత ధర్మవరం పట్టు చీరలకు వెంటనే క్యాష్ ఇచ్చారు.",
      tag: "Hyderabad Customer"
    },
    {
      name: "Deepa Nair",
      city: "Edappally, Kochi",
      rating: 5,
      comment: "വളരെ വിശ്വസനീയമായ സേവനം. പഴയ കാഞ്ചീപുരം സാരിക്ക് മികച്ച വില കിട്ടി. 1 മണിക്കൂറിനുള്ളിൽ വീട്ടിലെത്തി പണം നൽകി.",
      tag: "Kochi Kerala Customer"
    }
  ];

  const faqs = [
    {
      q: "உங்களிடம் உள்ள பழைய பட்டுப் புடவைகளை விற்க நாங்கள் எங்கு வரவேண்டும்? (Do I need to visit any shop to sell my saree?)",
      a: "நீங்கள் எங்கும் வரத் தேவையில்லை! 6374067251 என்ற எண்ணிற்கு போன் செய்தாலே போதும். எங்களது பிரதிநிதி நேரடியாக உங்கள் வீட்டிற்கே வந்து பட்டுப் புடவைகளை பரிசோதித்து ரொக்கப் பணம் வழங்குவார். (No need to travel! We come directly to your doorstep across South India)."
    },
    {
      q: "கிழிந்த அல்லது அழுக்கான பட்டுப் புடவைகளை வாங்குவீர்களா? (Do you buy torn or damaged silk sarees?)",
      a: "ஆம்! புடவை எவ்வளவு பழையதாகவோ அல்லது கிழிந்து இருந்தாலும், அதில் உள்ள வெள்ளி மற்றும் தங்க ஜரிகையின் எடையைக் கணக்கிட்டு முழுமையான மில் விலையை வழங்குவோம்."
    },
    {
      q: "பணம் எப்போது வழங்கப்படும்? (When will the cash be paid?)",
      a: "உங்கள் வீட்டிலேயே ஜரிகை தூய்மையை பரிசோதித்த அடுத்த நிமிடமே 100% ஸ்பாட் கேஷ் (Spot Cash) அல்லது உடனடி வங்கியின் UPI (GPay/PhonePe) மூலம் பணம் வழங்கப்படும்."
    },
    {
      q: "ஜரிகையின் தூய்மையை எவ்வாறு பரிசோதிப்பீர்கள்? (How do you test the purity of Zari?)",
      a: "எங்கள் நிபுணர்கள் உங்கள் முன்னிலையிலேயே டச்ஸ்டோன் (Touchstone) மற்றும் டிஜிட்டல் எடை தராசு மூலம் வெள்ளி/தங்க சதவீதத்தை துல்லியமாக சோதிப்பார்கள்."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-950 via-red-950/20 to-neutral-950 border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        {/* Testimonials Hub */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>Customer Feedback</span>
            </div>
            <h2 className="text-3xl font-extrabold gold-text">
              What Our Sellers Say Across South India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="glass-panel p-6 gold-border-glow text-left space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-amber-200 text-base">{rev.name}</h4>
                    <span className="text-xs text-amber-400/80">{rev.city}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {rev.tag}
                  </span>
                </div>

                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-amber-100">
              Got Questions About Selling Old Sarees?
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="glass-panel border border-amber-500/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-amber-200 text-sm sm:text-base flex justify-between items-center gap-4 hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-amber-100/80 leading-relaxed border-t border-amber-500/10 bg-neutral-900/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
