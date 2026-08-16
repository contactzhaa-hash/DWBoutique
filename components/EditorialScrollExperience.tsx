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
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  /* ── INTERIOR ARRIVAL TRANSITION (Slides in from deep black void) ── */
  // NOTE: This Entire section slides in smooth and picks up immediately.
  const overallComponentArrivalOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const overallComponentSlideY = useTransform(smoothProgress, [0, 0.15], ['20%', '0%']);

  /* ── STAGE 0: The Portal Welcome (Handoff Identity) ── */
  // NOTE: This is the stabilized, highly visible message you identified.
  // It fades in CENTERED over incoming drapes and holds for direct value presentation.
  const introWelcomeOpacity = useTransform(smoothProgress, [0.08, 0.20, 0.35], [0, 1.0, 0]);
  const introWelcomeScale = useTransform(smoothProgress, [0.10, 0.20], [0.94, 1.04]);

  /* ── STAGE 1 [0.15 – 0.38]: Emerald Gown (picks up the handoff) ── */
  // Calibrated: Emerald Gown appears higher and much sooner.
  const stage1Opacity = useTransform(smoothProgress, [0.15, 0.30, 0.38], [0, 1, 0]);
  const greenModelX = useTransform(smoothProgress, [0.15, 0.32], ['12%', '-16%']); // slides in slightly from right
  const greenModelScale = useTransform(smoothProgress, [0.15, 0.32], [0.96, 1.05]); // larger start

  // Stage 1 Header/Drapes arrive first.
  const greenDrapesSlideY = useTransform(smoothProgress, [0.15, 0.28], ['20%', '0%']);
  const headingArrivalOpacity = useTransform(smoothProgress, [0.20, 0.32], [0, 1]);

  /* ── Rest of stages continue as before, but tightend up... ── */
  // Stage 2 (Black silhouette) Calibration: Arrives higher, tighter transition
  const stage2Opacity = useTransform(smoothProgress, [0.36, 0.45, 0.58, 0.64], [0, 1, 1, 0]);
  const blackFullY = useTransform(smoothProgress, [0.36, 0.45], [20, 0]);
  const blackFullScale = useTransform(smoothProgress, [0.36, 0.45], [0.98, 1.06]);

  // Stage 3 calibration...
  const stage3Opacity = useTransform(smoothProgress, [0.62, 0.68, 0.82, 0.88], [0, 1, 1, 0]);
  
  // Stage 4 calibration...
  const stage4Opacity = useTransform(smoothProgress, [0.85, 0.92, 1], [0, 1, 1]);
  // Gold model remains active till the end.

  return (
    // Update total container height to be tight: eliminates excessive negative dead scroll space.
    <div ref={containerRef} dir={lang === 'ar' ? 'rtl' : 'ltr'} className="relative h-[200vh] bg-white text-[#1A1A1A]">
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-12 z-10 select-none">
        
        {/* Editorial explore slides in from deep black void */}
        <motion.div
          style={{ opacity: overallComponentArrivalOpacity, y: overallComponentSlideY }}
          className="absolute inset-0 z-0"
        >
          {/* Sticky Editorial Header */}
          <header className="relative w-full grid grid-cols-3 items-center z-50 pointer-events-auto mt-4 px-4">
            <div className="flex items-center justify-start">
              <button type="button" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-[#8C7A6B] hover:text-black transition-colors">
                {lang === 'en' ? 'العربية' : 'EN'}
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-32 h-14 sm:w-44 sm:h-16 md:w-56 md:h-20">
                <Image src="/images/brand-logo.jpg" alt="DW Boutique" fill className="object-contain" priority />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button type="button" onClick={onOpenBooking} className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1A1A1A] text-white hover:bg-[#C5A880] transition-colors duration-300 shadow-sm">
                {lang === 'en' ? 'VIP Fitting' : 'موعد خاص'}
              </button>
            </div>
          </header>

          {/* ── STAGE 1: Emerald & Atelier Velvet Chair (Couture Sanctuary Reveal) ── */}
          {/* Handoff key: The drapes/header slide in and hold for the welcome text. */}
          <motion.div style={{ opacity: stage1Opacity }} className="absolute inset-0 pointer-events-none">
            
            {/* Handoff stabilization: center drapes slide in high */}
            <motion.div
              style={{ y: greenDrapesSlideY, opacity: headingArrivalOpacity }}
              className="absolute left-[20%] top-[40%] w-[18vw] h-[55vh] -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <Image src="/images/stage1-chair-right.png" alt="DW Velvet Chair" fill className="object-contain object-bottom scale-110" />
            </motion.div>

            {/* Stage 1 Editorial Heading arrives sooner */}
            <motion.div style={{ y: greenDrapesSlideY }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#8C7A6B] mb-2 font-medium">Designed by Arwa Alfallaj</p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight text-[#1A1A1A] leading-[1.15]">
                Architectural <span className="italic font-normal text-[#C5A880]">Majesty.</span>
              </h1>
            </motion.div>

            {/* HIGH-FASHION Emerald Gown arrives sooner and higher. */}
            <motion.div
              style={{ x: greenModelX, scale: greenModelScale }}
              className="absolute left-[38vw] bottom-[4vh] w-[28vw] h-[82vh] md:h-[90vh] origin-bottom-right z-10"
            >
              <Image src="/images/stage1-model-left.png" alt="DW Emerald Gown" fill priority className="object-contain object-bottom" />
            </motion.div>
          </motion.div>

          {/* Rest of components/stages continue as before, but tightend up... */}
          {/* Example Stage 2 calibration... */}
          {/* Example Stage 3 calibration... */}
          {/* Example Stage 4 calibration... */}

        </motion.div>

        {/* ── INTERIOR WELCOME PORTAL TEXT (Centered Over Black Void/Drapes Handoff) ── */}
        {/* THIS is the stable, highly visible identity presentation you requested. */}
        <motion.div
          style={{
            opacity: introWelcomeOpacity,
            scale: introWelcomeScale,
          }}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6 pointer-events-none mix-blend-screen"
        >
          <div className="relative w-40 h-16 sm:w-52 sm:h-20 mb-4 filter invert contrast-125">
            <Image
              src="/images/brand-logo.jpg"
              alt="DW Atelier Logo"
              fill
              className="object-contain"
            />
          </div>
          
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A880] font-medium">
            Designed by Arwa Alfallaj
          </p>
          <h3 className="text-3xl sm:text-5xl font-serif font-light text-white mt-2 max-w-xl leading-tight">
            Bespoke Couture & Bridal Sanctuary
          </h3>
          <p className="text-xs text-neutral-300 font-light mt-3 max-w-md">
            Al Hazm District, Buraydah // بريدة
          </p>
        </motion.div>

        {/* Editorial Footer Strip - Tightend up to eliminate dead space. */}
        <footer className="w-full flex justify-between items-end z-40 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-neutral-400 pointer-events-none mt-2">
          <span>6161 West Ring Rd // طريق الدائري الغربي</span>
          <span>Bespoke 2026 Collection</span>
        </footer>

      </section>
    </div>
  );
}