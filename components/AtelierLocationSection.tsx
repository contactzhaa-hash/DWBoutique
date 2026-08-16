// components/AtelierLocationSection.tsx
'use client';

import React from 'react';

export default function AtelierLocationSection() {
  const mapQuery = encodeURIComponent('6161 الطريق الدائري الغربي، حي الحزم، بريدة 52261 3339');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section className="bg-[#FAF9F7] py-24 px-6 md:px-16 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-neutral-900">
        
        {/* Address */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">Flagship Atelier</span>
          <h3 className="font-serif text-2xl mt-2 mb-3">Buraydah Showroom</h3>
          <p className="text-xs leading-relaxed text-neutral-600 font-light">
            6161 West Ring Road, Al Hazm District<br />
            Buraydah 52261 3339, Saudi Arabia
          </p>
          <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1 dir-rtl text-right md:text-left">
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

        {/* Contact & Concierge */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">Direct Concierge</span>
          <h3 className="font-serif text-2xl mt-2 mb-3">Appointments & Fittings</h3>
          <p className="text-xs leading-relaxed text-neutral-600 font-light">
            WhatsApp / Direct: <a href="tel:+966535962115" className="text-black font-medium hover:underline">+966 53 596 2115</a>
          </p>
          <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1">
            Private fittings arranged by appointment only.
          </p>
        </div>

        {/* Hours */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">Salon Hours</span>
          <h3 className="font-serif text-2xl mt-2 mb-3">Working Times</h3>
          <p className="text-xs leading-relaxed text-neutral-600 font-light">
            Saturday – Thursday: 4:00 PM – 11:00 PM<br />
            Friday: Private VIP Appointments Only
          </p>
          <p className="text-xs leading-relaxed text-neutral-600 font-light mt-1">
            السبت – الخميس: ٤:٠٠ مساءً – ١١:٠٠ مساءً
          </p>
        </div>

      </div>
    </section>
  );
}