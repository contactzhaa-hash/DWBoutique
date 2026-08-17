// components/ShopEntranceExperience.tsx
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Props {
  onOpenBooking?: () => void;
}

export default function ShopEntranceExperience({ onOpenBooking }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  /* ── 3D Camera & Walkthrough Transforms ── */
  const facadeScale = useTransform(smoothProgress, [0, 0.65, 1.0], [1, 2.2, 4.2]);
  const facadeY = useTransform(smoothProgress, [0, 0.65, 1.0], ['0%', '-4%', '-10%']);

  const titleOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.2], [0, -30]);

  // 3D Glass Door Swing
  const leftDoorRotateY = useTransform(smoothProgress, [0.2, 0.7], [0, -85]);
  const rightDoorRotateY = useTransform(smoothProgress, [0.2, 0.7], [0, 85]);
  const doorOpacity = useTransform(smoothProgress, [0.65, 0.9], [1, 0]);

  // In-shop White Sheer Drapes Parting
  const leftCurtainX = useTransform(smoothProgress, [0.25, 0.75], ['0%', '-40%']);
  const rightCurtainX = useTransform(smoothProgress, [0.25, 0.75], ['0%', '40%']);

  // Outer Flanking Drapes Parting (Fills Side Dead Space)
  const outerLeftDrapeX = useTransform(smoothProgress, [0, 0.6], ['0%', '-40%']);
  const outerRightDrapeX = useTransform(smoothProgress, [0, 0.6], ['0%', '40%']);

  // Section Dissolve into Showroom
  const sectionFadeOut = useTransform(smoothProgress, [0.82, 1.0], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-[#121212] text-white">
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center select-none">
        
        {/* ── AMBIENT SIDE FABRIC WINGS ── */}
        <motion.div
          style={{ x: outerLeftDrapeX, opacity: sectionFadeOut }}
          className="absolute left-0 top-0 bottom-0 w-[14vw] lg:w-[16vw] z-10 pointer-events-none bg-gradient-to-r from-stone-900 via-stone-800/80 to-transparent border-r border-amber-900/20 shadow-2xl backdrop-blur-[1px]"
        >
          <div className="w-full h-full opacity-30 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
        </motion.div>

        <motion.div
          style={{ x: outerRightDrapeX, opacity: sectionFadeOut }}
          className="absolute right-0 top-0 bottom-0 w-[14vw] lg:w-[16vw] z-10 pointer-events-none bg-gradient-to-l from-stone-900 via-stone-800/80 to-transparent border-l border-amber-900/20 shadow-2xl backdrop-blur-[1px]"
        >
          <div className="w-full h-full opacity-30 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
        </motion.div>

        {/* ── TOP BAR ── */}
        <motion.header
          style={{ opacity: titleOpacity, y: titleY }}
          className="w-full grid grid-cols-3 items-center p-4 sm:p-6 md:p-10 z-40 pointer-events-auto"
        >
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
            Flagship Atelier // بريدة
          </div>

          <div className="flex justify-center">
            <div className="relative w-28 h-12 sm:w-40 sm:h-14">
              <Image
                src="/images/brand-logo.jpg"
                alt="DW Boutique"
                fill
                className="object-contain filter invert contrast-125"
                priority
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onOpenBooking}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-2.5 bg-[#C5A880] text-black hover:bg-white transition-colors duration-300 shadow-sm font-medium"
            >
              VIP Fitting
            </button>
          </div>
        </motion.header>

        {/* ── INVITATION TITLE ── */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute top-24 sm:top-28 z-30 text-center px-4 pointer-events-none"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C5A880] font-medium">
            Designed by Arwa Alfallaj
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-1">
            Step Inside the Atelier
          </h1>
          <p className="text-[9px] sm:text-[10px] text-neutral-400 tracking-[0.25em] uppercase mt-2">
            ↓ Scroll to walk through the doors
          </p>
        </motion.div>

        {/* ── 3D FACADE & PRECISE DOORWAY PORTAL ── */}
        <motion.div
          style={{ opacity: sectionFadeOut }}
          className="relative w-full h-full flex items-center justify-center [perspective:1400px]"
        >
          <motion.div
            style={{
              scale: facadeScale,
              y: facadeY,
              transformOrigin: '48.5% 76%', // Centers camera zoom precisely between the two marked doors
            }}
            className="relative w-[95vw] sm:w-[88vw] md:w-[80vw] aspect-[16/10] max-w-6xl shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Storefront Image */}
            <Image
              src="/images/dw-store-front2.jpeg"
              alt="DW Boutique Exterior"
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />

            {/* ── LEFT DOOR (Left Red Box: Inner Left Bay) ── */}
            <motion.div
              style={{
                rotateY: leftDoorRotateY,
                opacity: doorOpacity,
                transformOrigin: 'left center',
              }}
              className="absolute left-[35.5%] top-[59.2%] w-[11.2%] h-[34.2%] border-r-2 border-[#C5A880]/90 bg-white/10 backdrop-blur-[0.5px] shadow-lg pointer-events-none [transform-style:preserve-3d]"
            >
              {/* Brushed Brass Vertical Handle (Right Edge) */}
              <div className="absolute right-2 top-[32%] w-1 sm:w-1.5 h-14 sm:h-18 bg-gradient-to-b from-[#E6D5B8] via-[#C5A880] to-[#8C7A6B] rounded-full shadow-md" />
            </motion.div>

            {/* ── RIGHT DOOR (Right Red Box: Inner Right Bay) ── */}
            <motion.div
              style={{
                rotateY: rightDoorRotateY,
                opacity: doorOpacity,
                transformOrigin: 'right center',
              }}
              className="absolute left-[50.2%] top-[59.2%] w-[11.2%] h-[34.2%] border-l-2 border-[#C5A880]/90 bg-white/10 backdrop-blur-[0.5px] shadow-lg pointer-events-none [transform-style:preserve-3d]"
            >
              {/* Brushed Brass Vertical Handle (Left Edge) */}
              <div className="absolute left-2 top-[32%] w-1 sm:w-1.5 h-14 sm:h-18 bg-gradient-to-b from-[#E6D5B8] via-[#C5A880] to-[#8C7A6B] rounded-full shadow-md" />
            </motion.div>

            {/* Parting Sheer Accents */}
            <motion.div
              style={{ x: leftCurtainX }}
              className="absolute left-[33%] top-[59%] w-[4%] h-[34%] bg-gradient-to-r from-white/20 to-transparent pointer-events-none"
            />
            <motion.div
              style={{ x: rightCurtainX }}
              className="absolute left-[60%] top-[59%] w-[4%] h-[34%] bg-gradient-to-l from-white/20 to-transparent pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* ── FOOTER STRIP ── */}
        <motion.footer
          style={{ opacity: titleOpacity }}
          className="w-full flex justify-between items-center p-4 sm:p-8 z-30 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-neutral-400 pointer-events-none"
        >
          <span>6161 West Ring Rd // طريق الدائري الغربي</span>
          <span>Private Salon Entrance</span>
        </motion.footer>

      </section>
    </div>
  );
}