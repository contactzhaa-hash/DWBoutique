// components/AtelierAndReviewsSection.tsx
'use client';

import React from 'react';

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
      "The private atelier experience in Buraydah was seamless. From the first fitting to the final silhouette adjustment, the level of couture precision is unmatched.",
    quoteAr:
      "تجربة زيارة الأتيليه في بريدة كانت غاية في الرقي. دقة متناهية في أخذ المقاسات وضبط التفاصيل حتى التسليم النهائي.",
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

export default function AtelierAndReviewsSection() {
  const mapQuery = encodeURIComponent(
    '6161 الطريق الدائري الغربي، حي الحزم، بريدة 52261 3339'
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section className="bg-[#FAF9F7] py-32 px-6 md:px-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* ── CLIENT TESTIMONIALS & EDITORIAL REVIEWS ── */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
              Social Proof & Accolades
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mt-2">
              Words from Our Brides
            </h2>
            <p className="text-xs text-[#C5A880] tracking-[0.25em] mt-3">
              ★ 5.0 RATING ON GOOGLE REVIEWS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 md:p-10 border border-neutral-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="text-[#C5A880] text-xs tracking-widest mb-4">
                    {item.rating}
                  </div>
                  <p className="font-serif italic text-neutral-800 text-base leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed dir-rtl text-right">
                    "{item.quoteAr}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-between items-center text-xs">
                  <div>
                    <h4 className="font-serif text-neutral-900 font-medium">
                      {item.author}
                    </h4>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mt-0.5">
                      {item.date}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C7A6B]">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FLAGSHIP SHOWROOM LOCATION & CONTACT ── */}
        <div className="bg-white border border-neutral-200 p-8 md:p-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              Showroom & Atelier
            </span>
            <h3 className="font-serif text-2xl text-neutral-900 mt-2 mb-3">
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
            <h3 className="font-serif text-2xl text-neutral-900 mt-2 mb-3">
              Direct Fittings
            </h3>
            <p className="text-xs leading-relaxed text-neutral-600 font-light">
              WhatsApp: <a href="https://wa.me/966535962115" className="text-black font-medium hover:underline">+966 53 596 2115</a>
            </p>
            <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1">
              Private fittings and couture viewings arranged by appointment only.
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              Salon Hours
            </span>
            <h3 className="font-serif text-2xl text-neutral-900 mt-2 mb-3">
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

      </div>
    </section>
  );
}