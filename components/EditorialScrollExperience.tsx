// components/EditorialScrollExperience.tsx
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EditorialScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* ── STAGE 1: Emerald & Chair ── */
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.24], [1, 1, 0]);
  const greenModelX = useTransform(scrollYProgress, [0, 0.20], ['0%', '-18%']);
  const greenModelScale = useTransform(scrollYProgress, [0, 0.20], [1, 0.85]);
  const chairX = useTransform(scrollYProgress, [0, 0.20], ['0%', '18%']);
  const chairScale = useTransform(scrollYProgress, [0, 0.20], [1, 0.8]);
  const heroHeadingOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroHeadingY = useTransform(scrollYProgress, [0, 0.12], [0, -35]);

  /* ── STAGE 2: Midnight Black Full Silhouette ── */
  const stage2Opacity = useTransform(scrollYProgress, [0.22, 0.28, 0.40, 0.46], [0, 1, 1, 0]);
  const blackFullY = useTransform(scrollYProgress, [0.22, 0.28], [50, 0]);
  const blackFullScale = useTransform(scrollYProgress, [0.22, 0.28], [0.95, 1]);

  /* ── STAGE 3: Dual Angle ── */
  const stage3Opacity = useTransform(scrollYProgress, [0.44, 0.50, 0.64, 0.68], [0, 1, 1, 0]);
  const blackLeftX = useTransform(scrollYProgress, [0.44, 0.52], ['-15%', '0%']);
  const blackLeftScale = useTransform(scrollYProgress, [0.44, 0.52], [0.95, 0.78]);
  const blackRightX = useTransform(scrollYProgress, [0.44, 0.52], ['25%', '0%']);
  const blackRightScale = useTransform(scrollYProgress, [0.44, 0.52], [0.88, 1]);

  /* ── STAGE 4: Gold Atelier Front & Back ── */
  const stage4Opacity = useTransform(scrollYProgress, [0.66, 0.72, 0.82, 0.86], [0, 1, 1, 0]);
  const goldBackX = useTransform(scrollYProgress, [0.66, 0.73], ['-20%', '0%']);
  const goldFrontX = useTransform(scrollYProgress, [0.66, 0.73], ['20%', '0%']);

  /* ── STAGE 5: Finale Trio ── */
  const stage5Opacity = useTransform(scrollYProgress, [0.84, 0.90, 1], [0, 1, 1]);
  const finaleCenterScale = useTransform(scrollYProgress, [0.85, 0.94], [0.88, 1]);
  const finaleLeftX = useTransform(scrollYProgress, [0.85, 0.94], ['-28%', '0%']);
  const finaleRightX = useTransform(scrollYProgress, [0.85, 0.94], ['28%', '0%']);

  return (
    <div ref={containerRef} className="relative h-[520vh] bg-white text-[#1A1A1A]">
      <section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-6 md:p-12 z-10 select-none">
        
        {/* Brand Header */}
        <header className="w-full flex justify-between items-center z-50 pointer-events-auto">
          <div className="relative w-36 h-12">
            <Image
              src="/images/brand-logo.jpg"
              alt="Designer Wardrobe Atelier"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#8C7A6B] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>

            <button className="text-[11px] uppercase tracking-[0.25em] px-6 py-2.5 bg-[#1A1A1A] text-white hover:bg-[#C5A880] transition-colors duration-300">
              {lang === 'en' ? 'Book Fitting' : 'حجز موعد قياس'}
            </button>
          </div>
        </header>

        {/* ── STAGE 1 ── */}
        <motion.div style={{ opacity: stage1Opacity }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ opacity: heroHeadingOpacity, y: heroHeadingY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8C7A6B] mb-3 font-medium">
              {lang === 'en' ? 'Haute Couture & Bridal Atelier' : 'دار الأزياء وتصاميم الأعراس'}
            </p>
            <h1 className="text-4xl md:text-7xl font-serif font-light tracking-tight text-[#1A1A1A] leading-[1.15]">
              {lang === 'en' ? (
                <>Architectural <span className="italic font-normal text-[#C5A880]">Majesty.</span></>
              ) : (
                <>فخامة معمارية.. <span className="italic font-normal text-[#C5A880]">وحضور ملكي.</span></>
              )}
            </h1>
            <p className="text-[11px] tracking-[0.3em] text-neutral-400 mt-6 uppercase">
              {lang === 'en' ? 'Scroll to explore collection' : 'مرري للأسفل لاكتشاف المجموعة'}
            </p>
          </motion.div>

          <motion.div
            style={{ x: greenModelX, scale: greenModelScale }}
            className="absolute left-2 md:left-12 bottom-0 w-[46vw] md:w-[32vw] h-[90vh] origin-bottom-left"
          >
            <Image
              src="/images/stage1-model-left.png"
              alt="DW Emerald Gown"
              fill
              priority
              className="object-contain object-bottom"
            />
          </motion.div>

          <motion.div
            style={{ x: chairX, scale: chairScale }}
            className="absolute right-2 md:right-14 bottom-4 w-[36vw] md:w-[26vw] h-[66vh] origin-bottom-right"
          >
            <Image
              src="/images/stage1-chair-right.png"
              alt="DW Velvet Chair"
              fill
              priority
              className="object-contain object-bottom"
            />
          </motion.div>
        </motion.div>

        {/* ── STAGE 2 ── */}
        <motion.div
          style={{ opacity: stage2Opacity, y: blackFullY, scale: blackFullScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute left-6 md:left-24 bottom-0 w-[48vw] md:w-[34vw] h-[92vh] origin-bottom-left">
            <Image
              src="/images/stage2-black-full.png"
              alt="DW Midnight Black Full Gown"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          <div className="absolute right-12 md:right-28 top-1/2 -translate-y-1/2 text-right hidden md:block">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
              {lang === 'en' ? 'Series 01 // Midnight Silhouette' : 'المجموعة الأولى // سحر السواد'}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A] mt-2 leading-tight">
              {lang === 'en' ? (
                <>Luminous Crystals &<br /><span className="italic font-normal text-[#C5A880]">Cascading Tulle</span></>
              ) : (
                <>بريق الكريستال الخالص<br /><span className="italic font-normal text-[#C5A880]">وانسكاب التول الفاخر</span></>
              )}
            </h2>
          </div>
        </motion.div>

        {/* ── STAGE 3 ── */}
        <motion.div style={{ opacity: stage3Opacity }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: blackLeftX, scale: blackLeftScale }}
            className="absolute left-2 md:left-10 bottom-0 w-[38vw] md:w-[26vw] h-[86vh] origin-bottom-left"
          >
            <Image
              src="/images/stage2-black-full.png"
              alt="DW Midnight Black Silhouette"
              fill
              className="object-contain object-bottom"
            />
          </motion.div>

          <motion.div
            style={{ x: blackRightX, scale: blackRightScale }}
            className="absolute right-0 md:right-8 bottom-0 w-[56vw] md:w-[45vw] h-[94vh] origin-bottom-right"
          >
            <Image
              src="/images/stage3-bodice-right.png"
              alt="DW Asymmetrical Bodice"
              fill
              className="object-contain object-bottom"
            />
          </motion.div>

          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B]">
              {lang === 'en' ? 'Bespoke Cut' : 'حرفية معمارية'}
            </p>
            <p className="text-2xl font-serif text-[#1A1A1A] mt-1 italic">
              {lang === 'en' ? 'Asymmetric Illusion Neckline' : 'قصّة كتف انسيابية متفردة'}
            </p>
          </div>
        </motion.div>

        {/* ── STAGE 4 ── */}
        <motion.div style={{ opacity: stage4Opacity }} className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-between px-6">
            <motion.div
              style={{ x: goldBackX }}
              className="relative w-[42vw] md:w-[28vw] h-[85vh] origin-bottom"
            >
              <Image
                src="/images/stage4-gold-back.png"
                alt="DW Sunburst Gold Gown Back"
                fill
                className="object-contain object-bottom"
              />
              <p className="text-center text-[10px] uppercase tracking-[0.25em] text-neutral-400 mt-2">
                {lang === 'en' ? 'Peplum Pleats // Back' : 'ثنيات البيبلم // الجهة الخلفية'}
              </p>
            </motion.div>

            <div className="text-center hidden md:block px-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
                {lang === 'en' ? 'Series 02 // Sunburst Gold' : 'المجموعة الثانية // بريق الذهب'}
              </span>
              <h3 className="text-3xl lg:text-4xl font-serif font-light text-[#1A1A1A] mt-2">
                {lang === 'en' ? 'Gilded Pleats & Contours' : 'انسكاب الثنيات وهيبة التصميم'}
              </h3>
            </div>

            <motion.div
              style={{ x: goldFrontX }}
              className="relative w-[42vw] md:w-[28vw] h-[85vh] origin-bottom"
            >
              <Image
                src="/images/stage4-gold-front.png"
                alt="DW Sunburst Gold Gown Front"
                fill
                className="object-contain object-bottom"
              />
              <p className="text-center text-[10px] uppercase tracking-[0.25em] text-neutral-400 mt-2">
                {lang === 'en' ? 'Plunge Bodice // Front' : 'الصدرية المنحوتة // الإطلالة الأمامية'}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── STAGE 5 ── */}
        <motion.div style={{ opacity: stage5Opacity }} className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
            <motion.div
              style={{ x: finaleLeftX }}
              className="absolute left-2 md:left-12 bottom-6 w-[36vw] md:w-[24vw] h-[78vh] z-10 origin-bottom"
            >
              <Image
                src="/images/stage5-navy-corset-left.png"
                alt="DW Navy Corset"
                fill
                className="object-contain object-bottom"
              />
            </motion.div>

            <motion.div
              style={{ x: finaleRightX }}
              className="absolute right-2 md:right-12 bottom-6 w-[36vw] md:w-[24vw] h-[78vh] z-10 origin-bottom"
            >
              <Image
                src="/images/stage5-navy-profile-right.png"
                alt="DW Navy Tiered Profile"
                fill
                className="object-contain object-bottom"
              />
            </motion.div>

            <motion.div
              style={{ scale: finaleCenterScale }}
              className="relative w-[50vw] md:w-[32vw] h-[94vh] z-30 origin-bottom"
            >
              <Image
                src="/images/stage5-ombre-center.png"
                alt="DW Ombre Gown"
                fill
                className="object-contain object-bottom"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bar */}
        <footer className="w-full flex justify-between items-end z-40 text-[10px] uppercase tracking-[0.25em] text-neutral-400 pointer-events-none">
          <span>{lang === 'en' ? 'Riyadh Atelier' : 'أتيليه الرياض'}</span>
          <span>{lang === 'en' ? 'Bespoke 2026 Collection' : 'مجموعة ٢٠٢٦ الخاصة'}</span>
        </footer>

      </section>
    </div>
  );
}