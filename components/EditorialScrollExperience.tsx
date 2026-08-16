// components/EditorialScrollExperience.tsx
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Props {
  onOpenBooking?: () => void;
}

export default function EditorialScrollExperience({ onOpenBooking }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 22,
    restDelta: 0.001,
  });

  /* ── STAGE 1 [0.00 – 0.28]: Emerald & Atelier Velvet Chair ── */
  const stage1Opacity = useTransform(smoothProgress, [0, 0.20, 0.28], [1, 1, 0]);
  const greenModelX = useTransform(smoothProgress, [0, 0.25], ['0%', '-16%']);
  const greenModelScale = useTransform(smoothProgress, [0, 0.25], [1.05, 0.88]);
  const chairX = useTransform(smoothProgress, [0, 0.25], ['0%', '16%']);
  const chairScale = useTransform(smoothProgress, [0, 0.25], [1.05, 0.82]);
  const heroHeadingOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroHeadingY = useTransform(smoothProgress, [0, 0.15], [0, -25]);

  /* ── STAGE 2 [0.26 – 0.54]: Midnight Black Full Silhouette ── */
  const stage2Opacity = useTransform(smoothProgress, [0.26, 0.34, 0.48, 0.54], [0, 1, 1, 0]);
  const blackFullY = useTransform(smoothProgress, [0.26, 0.34], [35, 0]);
  const blackFullScale = useTransform(smoothProgress, [0.26, 0.34], [0.96, 1.04]);

  /* ── STAGE 3 [0.52 – 0.78]: Split Bodice & Standing Silhouette ── */
  const stage3Opacity = useTransform(smoothProgress, [0.52, 0.58, 0.72, 0.78], [0, 1, 1, 0]);
  const blackLeftX = useTransform(smoothProgress, [0.52, 0.60], ['-15%', '0%']);
  const blackLeftScale = useTransform(smoothProgress, [0.52, 0.60], [1, 0.82]);
  const blackRightX = useTransform(smoothProgress, [0.52, 0.60], ['18%', '0%']);
  const blackRightScale = useTransform(smoothProgress, [0.52, 0.60], [0.92, 1.05]);

  /* ── STAGE 4 [0.76 – 1.00]: Sunburst Gold Finale ── */
  const stage4Opacity = useTransform(smoothProgress, [0.76, 0.82, 0.98, 1], [0, 1, 1, 0]);
  const goldBackX = useTransform(smoothProgress, [0.76, 0.84], ['-18%', '0%']);
  const goldFrontX = useTransform(smoothProgress, [0.76, 0.84], ['18%', '0%']);

  return (
    <div ref={containerRef} dir={lang === 'ar' ? 'rtl' : 'ltr'} className="relative h-[400vh] bg-white text-[#1A1A1A]">
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-12 z-10 select-none">
        
        {/* Brand Header */}
        <header className="w-full flex justify-between items-center z-50 pointer-events-auto">
          <div className="relative w-28 h-9 sm:w-36 sm:h-12">
            <Image
              src="/images/brand-logo.jpg"
              alt="Designer Wardrobe Atelier"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#8C7A6B] hover:text-black transition-colors"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <button
              onClick={onOpenBooking}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1A1A1A] text-white hover:bg-[#C5A880] transition-colors duration-300 shadow-sm"
            >
              {lang === 'en' ? 'VIP Fitting' : 'موعد خاص'}
            </button>
          </div>
        </header>

        {/* ── STAGE 1: Emerald & Chair ── */}
        <motion.div style={{ opacity: stage1Opacity }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ opacity: heroHeadingOpacity, y: heroHeadingY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
          >
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#8C7A6B] mb-2 sm:mb-3 font-medium">
              {lang === 'en' ? 'Haute Couture & Bridal Atelier' : 'دار الأزياء وتصاميم الأعراس'}
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight text-[#1A1A1A] leading-[1.15]">
              {lang === 'en' ? (
                <>Architectural <span className="italic font-normal text-[#C5A880]">Majesty.</span></>
              ) : (
                <>فخامة معمارية.. <span className="italic font-normal text-[#C5A880]">وحضور ملكي.</span></>
              )}
            </h1>
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-neutral-400 mt-4 sm:mt-6 uppercase">
              {lang === 'en' ? 'Scroll to explore' : 'مرري للأسفل لاكتشاف المجموعة'}
            </p>
          </motion.div>

          <motion.div
            style={{ x: greenModelX, scale: greenModelScale }}
            className="absolute left-0 sm:left-4 md:left-12 bottom-0 w-[52vw] sm:w-[42vw] md:w-[34vw] h-[86vh] md:h-[94vh] origin-bottom-left"
          >
            <Image src="/images/stage1-model-left.png" alt="DW Emerald Gown" fill priority className="object-contain object-bottom" />
          </motion.div>

          <motion.div
            style={{ x: chairX, scale: chairScale }}
            className="absolute right-0 sm:right-4 md:right-14 bottom-2 sm:bottom-4 w-[42vw] sm:w-[34vw] md:w-[28vw] h-[62vh] md:h-[70vh] origin-bottom-right"
          >
            <Image src="/images/stage1-chair-right.png" alt="DW Velvet Chair" fill priority className="object-contain object-bottom" />
          </motion.div>
        </motion.div>

        {/* ── STAGE 2: Midnight Black Full Silhouette ── */}
        <motion.div
          style={{ opacity: stage2Opacity, y: blackFullY, scale: blackFullScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute left-2 sm:left-10 md:left-24 bottom-0 w-[55vw] sm:w-[44vw] md:w-[36vw] h-[88vh] md:h-[95vh] origin-bottom-left">
            <Image src="/images/stage2-black-full.png" alt="DW Midnight Black Gown" fill priority className="object-contain object-bottom" />
          </div>

          <div className="absolute right-6 sm:right-12 md:right-28 top-1/2 -translate-y-1/2 text-right max-w-[45vw] md:max-w-none">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              {lang === 'en' ? 'Series 01 // Silhouette' : 'المجموعة الأولى // سحر السواد'}
            </span>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-serif font-light text-[#1A1A1A] mt-1 sm:mt-2 leading-tight">
              {lang === 'en' ? (
                <>Luminous Crystals &<br /><span className="italic font-normal text-[#C5A880]">Cascading Tulle</span></>
              ) : (
                <>بريق الكريستال الخالص<br /><span className="italic font-normal text-[#C5A880]">وانسكاب التول الفاخر</span></>
              )}
            </h2>
          </div>
        </motion.div>

        {/* ── STAGE 3: Bodice & Split Angle ── */}
        <motion.div style={{ opacity: stage3Opacity }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: blackLeftX, scale: blackLeftScale }}
            className="absolute left-0 sm:left-6 md:left-10 bottom-0 w-[42vw] sm:w-[34vw] md:w-[28vw] h-[82vh] md:h-[90vh] origin-bottom-left"
          >
            <Image src="/images/stage2-black-full.png" alt="DW Silhouette" fill className="object-contain object-bottom" />
          </motion.div>

          <motion.div
            style={{ x: blackRightX, scale: blackRightScale }}
            className="absolute right-0 sm:right-4 md:right-8 bottom-0 w-[62vw] sm:w-[52vw] md:w-[46vw] h-[88vh] md:h-[96vh] origin-bottom-right"
          >
            <Image src="/images/stage3-bodice-right.png" alt="DW Bodice Closeup" fill className="object-contain object-bottom" />
          </motion.div>

          <div className="absolute left-1/2 top-1/4 sm:top-1/3 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              {lang === 'en' ? 'Bespoke Cut' : 'حرفية معمارية'}
            </p>
            <p className="text-lg sm:text-2xl font-serif text-[#1A1A1A] mt-1 italic">
              {lang === 'en' ? 'Asymmetric Neckline' : 'قصّة كتف انسيابية'}
            </p>
          </div>
        </motion.div>

        {/* ── STAGE 4: Sunburst Gold Front & Back ── */}
        <motion.div style={{ opacity: stage4Opacity }} className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-between px-2 sm:px-6">
            <motion.div style={{ x: goldBackX }} className="relative w-[48vw] sm:w-[38vw] md:w-[30vw] h-[80vh] md:h-[88vh] origin-bottom">
              <Image src="/images/stage4-gold-back.png" alt="DW Gold Back" fill className="object-contain object-bottom" />
              <p className="text-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-1">
                {lang === 'en' ? 'Back Pleats' : 'ثنيات الظهر'}
              </p>
            </motion.div>

            <div className="text-center hidden lg:block px-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
                {lang === 'en' ? 'Series 02 // Sunburst Gold' : 'المجموعة الثانية // بريق الذهب'}
              </span>
              <h3 className="text-3xl lg:text-4xl font-serif font-light text-[#1A1A1A] mt-2">
                {lang === 'en' ? 'Gilded Pleats & Contours' : 'انسكاب الثنيات وهيبة التصميم'}
              </h3>
            </div>

            <motion.div style={{ x: goldFrontX }} className="relative w-[48vw] sm:w-[38vw] md:w-[30vw] h-[80vh] md:h-[88vh] origin-bottom">
              <Image src="/images/stage4-gold-front.png" alt="DW Gold Front" fill className="object-contain object-bottom" />
              <p className="text-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-neutral-400 mt-1">
                {lang === 'en' ? 'Front Bodice' : 'الصدرية المنحوتة'}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Editorial Footer Strip */}
        <footer className="w-full flex justify-between items-end z-40 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-neutral-400 pointer-events-none">
          <span>{lang === 'en' ? 'Buraydah Atelier // حي الحزم' : 'أتيليه بريدة // حي الحزم'}</span>
          <span>{lang === 'en' ? 'Bespoke 2026 Collection' : 'مجموعة ٢٠٢٦ الخاصة'}</span>
        </footer>

      </section>
    </div>
  );
}