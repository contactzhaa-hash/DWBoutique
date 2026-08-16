// components/AtelierAndReviewsSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  onOpenBooking?: () => void;
}

const REVIEWS = [
  {
    quote:
      "The craftsmanship on my bridal gown was extraordinary. The asymmetric drape and hand-beading felt like a piece of art tailored precisely for my wedding night.",
    quoteAr:
      "حرفية استثنائية في تفصيل فستان زفافي. انسيابية التصميم ودقة التطريز اليدوي جعلت إطلالتي أشبه بتحفة فنية في ليلة العمر.",
    author: "Reem Al-Otaibi",
    authorAr: "ريم العتيبي",
    date: "Verified Bride // عروس ٢٠٢٦",
    rating: "★★★★★",
  },
  {
    quote:
      "The private atelier experience in Buraydah was seamless. From the first fitting to the final silhouette adjustment, the level of couture precision by Arwa Alfallaj is unmatched.",
    quoteAr:
      "تجربة زيارة الأتيليه في بريدة كانت غاية في الرقي. دقة متناهية من المصممة أروى الفلاج في ضبط التفاصيل حتى التسليم النهائي.",
    author: "Sara Al-Harbi",
    authorAr: "سارة الحربي",
    date: "Haute Couture Client // سهرة خاصة",
    rating: "★★★★★",
  },
  {
    quote:
      "DW Boutique completely elevated wedding couture in Al Qassim. The fabric quality, sunburst pleats, and regal presence surpassed all expectations.",
    quoteAr:
      "نقلة نوعية في تصاميم الهوت كوتور والفساتين الراقية بالقصيم. فخامة الأقمشة وجودة الثنيات الملكية تفوق الوصف.",
    author: "Maha Al-Sulaiman",
    authorAr: "مها السليمان",
    date: "Verified Client // تقييم موثق",
    rating: "★★★★★",
  },
];

export default function AtelierAndReviewsSection({ onOpenBooking }: Props) {
  const googleMapsUrl = 'https://maps.app.goo.gl/GAXdKwVYCgKsqgki6';

  return (
    <section className="bg-[#FAF9F7] py-20 sm:py-28 px-4 sm:px-8 md:px-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* ── CLIENT REVIEWS & ACCOLADES ── */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
              Social Proof & Accolades
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-900 mt-2">
              Words from Our Brides
            </h2>
            <p className="text-[11px] text-[#C5A880] tracking-[0.25em] mt-2 sm:mt-3">
              ★ 5.0 RATING ON GOOGLE REVIEWS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REVIEWS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 md:p-10 border border-neutral-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="text-[#C5A880] text-xs tracking-widest mb-3 sm:mb-4">
                    {item.rating}
                  </div>
                  <p className="font-serif italic text-neutral-800 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    "{item.quote}"
                  </p>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed dir-rtl text-right">
                    "{item.quoteAr}"
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-100 flex justify-between items-center text-xs">
                  <div>
                    <h4 className="font-serif text-neutral-900 font-medium">
                      {item.author}
                    </h4>
                    <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider block mt-0.5">
                      {item.date}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EDITORIAL VIP FITTING CALL-TO-ACTION BANNER ── */}
        <div className="relative bg-[#1A1A1A] text-white p-8 sm:p-12 md:p-16 overflow-hidden border border-neutral-800 shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A880]">
              Private Showroom Experience // تجربة خاصة
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight">
              Book a VIP Fitting Session
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
              Experience one-on-one bridal and couture consultations tailored to your silhouette with designer Arwa Alfallaj at our Buraydah atelier.
            </p>
            <p className="text-xs text-neutral-400 font-light dir-rtl">
              احجزي جلستك الخاصة لتجربة فساتين الأعراس والسهرة مع المصممة أروى الفلاج في أتيليه بريدة.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-white transition-colors duration-300 shadow-md"
              >
                Reserve VIP Fitting (حجز موعد)
              </button>
              <a
                href="https://wa.me/966535962115"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-neutral-600 text-white text-xs uppercase tracking-[0.25em] hover:border-white transition-colors duration-300 text-center"
              >
                WhatsApp Concierge ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── FLAGSHIP SHOWROOM LOCATION CARD ── */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 shadow-sm">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              Showroom & Atelier
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mt-2 mb-2 sm:mb-3">
              Buraydah Flagship
            </h3>
            <p className="text-xs leading-relaxed text-neutral-600 font-light">
              6161 West Ring Road, Al Hazm District<br />
              Buraydah 52261 3339, Saudi Arabia
            </p>
            <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1 dir-rtl text-right lg:text-left">
              ٦١٦١ الطريق الدائري الغربي، حي الحزم، بريدة ٥٢٢٦١ ٣٣٣٩
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[11px] uppercase tracking-[0.2em] text-[#8C7A6B] border-b border-[#8C7A6B] hover:text-black hover:border-black transition-colors pb-0.5"
            >
              Open in Google Maps ↗
            </a>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              Private Concierge
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mt-2 mb-2 sm:mb-3">
              Direct Fittings
            </h3>
            <p className="text-xs leading-relaxed text-neutral-600 font-light">
              WhatsApp: <a href="https://wa.me/966535962115" target="_blank" rel="noopener noreferrer" className="text-black font-medium hover:underline">+966 53 596 2115</a>
            </p>
            <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1">
              Private fittings and couture consultations with Arwa Alfallaj arranged by appointment.
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              Salon Hours
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mt-2 mb-2 sm:mb-3">
              Visiting Hours
            </h3>
            <p className="text-xs leading-relaxed text-neutral-600 font-light">
              Saturday – Thursday: 4:00 PM – 11:00 PM<br />
              Friday: Private VIP Appointments Only
            </p>
            <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1">
              السبت – الخميس: ٤:٠٠ مساءً – ١١:٠٠ مساءً
            </p>
          </div>
        </div>

        {/* ── ATELIER GRAND FOOTER & SOCIAL LINKS ── */}
        <footer className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="relative w-44 h-16">
              <Image
                src="/images/brand-logo.jpg"
                alt="DW Boutique Atelier - Arwa Alfallaj"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              © {new Date().getFullYear()} DW BOUTIQUE // DESIGNED BY ARWA ALFALLAJ
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600">
            <a
              href="https://www.instagram.com/dw.boutique_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.snapchat.com/@dw.boutique"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Snapchat ↗
            </a>
            <a
              href="https://www.tiktok.com/@dw.boutique_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              TikTok ↗
            </a>
          </div>

          <a
            href="https://wa.me/966535962115"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.2em] px-4 py-2 border border-neutral-300 hover:border-black text-[#1A1A1A] transition-all"
          >
            WhatsApp Concierge ↗
          </a>
        </footer>

      </div>
    </section>
  );
}