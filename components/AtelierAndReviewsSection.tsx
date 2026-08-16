// components/AtelierAndReviewsSection.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  onOpenBooking: () => void;
}

const WHATSAPP_RAW = '966535962115';
const PHONE_DISPLAY = '+966 53 596 2115';
const EMAIL_CONTACT = 'dwboutique.sa@gmail.com';
const ADDRESS_EN = '6161 West Ring Rd, Al Hazm District, Buraydah';
const ADDRESS_AR = 'طريق الدائري الغربي، حي الحزم، بريدة';
const MAPS_URL = 'https://maps.google.com/?q=DW+Boutique+Buraydah';

const WORKING_HOURS = [
  { dayEn: 'Saturday', dayAr: 'السبت', hours: '7:00 AM – 1:00 AM' },
  { dayEn: 'Sunday', dayAr: 'الأحد', hours: '7:00 AM – 1:00 AM' },
  { dayEn: 'Monday', dayAr: 'الاثنين', hours: '7:00 AM – 1:00 AM' },
  { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hours: '7:00 AM – 1:00 AM' },
  { dayEn: 'Wednesday', dayAr: 'الأربعاء', hours: '7:00 AM – 1:00 AM' },
  { dayEn: 'Thursday', dayAr: 'الخميس', hours: '7:00 AM – 2:00 AM' },
  { dayEn: 'Friday', dayAr: 'الجمعة', hours: '1:00 PM – 2:00 AM' },
];

const REVIEWS = [
  {
    author: 'Nouf Al-Mutairi',
    role: 'Bridal Client',
    commentEn: 'The attention to detail in Arwa’s custom bridal gown was beyond expectation. The fit and fabric drape were absolutely majestic.',
    commentAr: 'الاهتمام بأدق التفاصيل في فستان الزفاف فاق التوقعات. القماش والقصّة الملكية كانت مبهرة جداً.',
    rating: 4.5,
  },
  {
    author: 'Reem Al-Harbi',
    role: 'Evening Couture',
    commentEn: 'Exceptional hospitality during our private VIP fitting. DW Boutique brings Paris-level couture to the heart of Buraydah.',
    commentAr: 'استقبال راقي وتجربة قياس خاصة مريحة جداً. تصاميم فاخرة وتطريز متقن على أعلى مستوى.',
    rating: 4.5,
  },
  {
    author: 'Maha Al-Qassim',
    role: 'Bespoke Order',
    commentEn: 'The architectural shoulders and hand-embellished crystal finish made for the most memorable look of the evening.',
    commentAr: 'التطريز اليدوي وقصّة الأكتاف المعمارية ميزت الفستان في المناسبة بالكامل.',
    rating: 4.5,
  },
];

function StarRating({ rating = 4.5 }: { rating?: number }) {
  return (
    <div className="inline-flex items-center gap-1 text-[#C5A880]">
      {[...Array(4)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <svg className="w-4 h-4" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfStarGrad">
            <stop offset="50%" stopColor="#C5A880" />
            <stop offset="50%" stopColor="#E5E5E5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfStarGrad)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </div>
  );
}

function getKsaLiveStatus() {
  const now = new Date();
  const ksaDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' }));
  const day = ksaDate.getDay();
  const hour = ksaDate.getHours();
  const minute = ksaDate.getMinutes();
  const currentTime = hour + minute / 60;

  // Friday: 1:00 PM (13.0) to 2:00 AM next day
  if (day === 5) {
    if (currentTime >= 13 || currentTime < 2) {
      return { isOpen: true, text: 'Open Now • Closes at 2:00 AM' };
    }
    return { isOpen: false, text: 'Closed • Opens Friday at 1:00 PM' };
  }

  // Thursday: 7:00 AM to 2:00 AM next day
  if (day === 4) {
    if (currentTime >= 7 || currentTime < 2) {
      return { isOpen: true, text: 'Open Now • Closes at 2:00 AM' };
    }
    return { isOpen: false, text: 'Closed • Opens at 7:00 AM' };
  }

  // Saturday - Wednesday: 7:00 AM to 1:00 AM next day
  if (currentTime >= 7 || currentTime < 1) {
    return { isOpen: true, text: 'Open Now • Closes at 1:00 AM' };
  }
  return { isOpen: false, text: 'Closed • Opens at 7:00 AM' };
}

export default function AtelierAndReviewsSection({ onOpenBooking }: Props) {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string }>({
    isOpen: true,
    text: 'Checking hours...',
  });

  useEffect(() => {
    setStatus(getKsaLiveStatus());
    const interval = setInterval(() => {
      setStatus(getKsaLiveStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
    'مرحباً بوتيك دابليو (DW Boutique)، أود الاستفسار عن المجموعات وحجز موعد قياس خاص.'
  )}`;

  return (
    <section className="bg-[#FAF9F7] text-[#1A1A1A] pt-20 pb-16 px-4 sm:px-8 md:px-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ── CLIENT REVIEWS (4.5 STAR VERIFIED RATING) ── */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B] font-medium">
              Client Testimonials // آراء العرائس
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-neutral-900 mt-2">
              Enduring Elegance & Trust
            </h2>
            <div className="flex justify-center items-center gap-2 mt-3">
              <StarRating rating={4.5} />
              <span className="text-xs text-neutral-600 font-sans tracking-widest font-medium">
                4.5 / 5.0 Rating
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-neutral-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <StarRating rating={rev.rating} />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed mb-4">
                    "{rev.commentEn}"
                  </p>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed dir-rtl text-right">
                    "{rev.commentAr}"
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 mt-6 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-serif font-medium text-neutral-900 block">{rev.author}</span>
                    <span className="text-[10px] text-[#8C7A6B] uppercase tracking-wider">{rev.role}</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ATELIER LOCATION & SCHEDULE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Instant WhatsApp Assistance */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                  Flagship Showroom // الفرع الرئيسي
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                  Buraydah Atelier
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-light">
                  Designed by Arwa Alfallaj
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-800 text-xs font-light">
                <div>
                  <span className="text-[#8C7A6B] uppercase tracking-wider text-[10px] block mb-1">
                    Address:
                  </span>
                  <p className="text-neutral-200">{ADDRESS_EN}</p>
                  <p className="text-neutral-400 dir-rtl text-right text-[11px] mt-0.5">
                    {ADDRESS_AR}
                  </p>
                </div>

                <div>
                  <span className="text-[#8C7A6B] uppercase tracking-wider text-[10px] block mb-1">
                    Direct Assistance:
                  </span>
                  <p className="text-neutral-200 font-mono tracking-wide">{PHONE_DISPLAY}</p>
                  <p className="text-neutral-400 text-[11px]">{EMAIL_CONTACT}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-800 space-y-3">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white transition-colors duration-300 text-[10px] uppercase tracking-[0.25em] font-medium shadow-md"
              >
                Chat on WhatsApp ({PHONE_DISPLAY}) ↗
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3.5 border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors duration-300 text-[10px] uppercase tracking-[0.25em] font-medium"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          {/* Operating Schedule Table with Dynamic Status Badge */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-neutral-200 mb-6 gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-medium">
                    Showroom Schedule // مواعيد العمل
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mt-1">
                    Atelier & Fitting Hours
                  </h3>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest px-3 py-1 border self-start sm:self-auto ${
                    status.isOpen
                      ? 'text-emerald-800 bg-emerald-50 border-emerald-200'
                      : 'text-neutral-600 bg-neutral-100 border-neutral-200'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
                    }`}
                  />
                  {status.text}
                </span>
              </div>

              <div className="divide-y divide-neutral-100 text-xs">
                {WORKING_HOURS.map((item, index) => (
                  <div
                    key={index}
                    className="py-3 flex items-center justify-between hover:bg-neutral-50/70 px-2 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-neutral-900 w-24">
                        {item.dayEn}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {item.dayAr}
                      </span>
                    </div>
                    <span className="font-mono text-neutral-700 font-medium tracking-tight text-[11px] sm:text-xs">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-neutral-400 mt-6 pt-4 border-t border-neutral-100 tracking-wide">
              * Private bridal consultations can also be reserved outside standard salon hours upon request.
            </p>
          </div>

        </div>

        {/* ── FINAL VIP BOOKING CTA BANNER ── */}
        <div className="relative overflow-hidden bg-neutral-900 text-white p-8 sm:p-14 text-center border border-neutral-800 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-medium">
              Bespoke Couture Appointments
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-light leading-tight">
              Begin Your Custom Bridal Journey
            </h3>
            <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
              Reserve a private fitting consultation with Arwa Alfallaj at our Buraydah showroom to customize your silhouette.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#C5A880] text-black hover:bg-white transition-colors duration-300 text-xs uppercase tracking-[0.25em] font-medium shadow-md"
              >
                Book a VIP Fitting Session
              </button>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          <span>© 2026 DW Boutique. All Rights Reserved.</span>
          <span>Designed by Arwa Alfallaj // Al Hazm, Buraydah</span>
        </footer>

      </div>
    </section>
  );
}