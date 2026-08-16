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

  /* ── 3D Architectural Zoom & Doorway Transforms ── */
  const facadeScale = useTransform(smoothProgress, [0, 0.65, 1.0], [1, 2.1, 3.8]);
  const facadeY = useTransform(smoothProgress, [0, 0.65, 1.0], ['0%', '8%', '18%']);

  // Title header fade
  const titleOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.2], [0, -30]);

  // 3D Glass Doors swing open
  const leftDoorRotateY = useTransform(smoothProgress, [0.2, 0.7], [0, -85]);
  const rightDoorRotateY = useTransform(smoothProgress, [0.2, 0.7], [0, 85]);
  const doorOpacity = useTransform(smoothProgress, [0.65, 0.9], [1, 0]);

  // Parting Drapes
  const leftCurtainX = useTransform(smoothProgress, [0.25, 0.75], ['0%', '-50%']);
  const rightCurtainX = useTransform(smoothProgress, [0.25, 0.75], ['0%', '50%']);

  // Clean fade-through to the interior showroom at the end of scroll
  const sectionFadeOut = useTransform(smoothProgress, [0.82, 1.0], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-[#FAF9F7] text-[#1A1A1A]">
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center select-none">
        
        {/* ── TOP BAR ── */}
        <motion.header
          style={{ opacity: titleOpacity, y: titleY }}
          className="w-full grid grid-cols-3 items-center p-4 sm:p-6 md:p-10 z-40 pointer-events-auto"
        >
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C7A6B] font-medium">
            Flagship Atelier // بريدة
          </div>

          <div className="flex justify-center">
            <div className="relative w-28 h-12 sm:w-40 sm:h-14">
              <Image
                src="/images/brand-logo.jpg"
                alt="DW Boutique"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onOpenBooking}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-black transition-colors duration-300 shadow-sm"
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
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B] font-medium">
            Designed by Arwa Alfallaj
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] mt-1">
            Step Inside the Atelier
          </h1>
          <p className="text-[9px] sm:text-[10px] text-neutral-400 tracking-[0.25em] uppercase mt-2">
            ↓ Scroll to walk through the doors
          </p>
        </motion.div>

        {/* ── 3D FACADE & DOORWAY STAGE ── */}
        <motion.div
          style={{ opacity: sectionFadeOut }}
          className="relative w-full h-full flex items-center justify-center [perspective:1400px]"
        >
          <motion.div
            style={{
              scale: facadeScale,
              y: facadeY,
            }}
            className="relative w-[95vw] sm:w-[88vw] md:w-[80vw] aspect-[16/10] max-w-6xl shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Storefront Image */}
            <Image
              src="/images/dw-shop-front.jpg"
              alt="DW Boutique Buraydah Storefront"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

            {/* Left Glass Door */}
            <motion.div
              style={{
                rotateY: leftDoorRotateY,
                opacity: doorOpacity,
                transformOrigin: 'left center',
              }}
              className="absolute left-[34.8%] top-[45%] w-[13.2%] h-[40.5%] border-r-2 border-[#C5A880]/90 bg-white/10 backdrop-blur-[0.5px] shadow-lg pointer-events-none [transform-style:preserve-3d]"
            >
              <div className="absolute right-2 top-1/3 w-1.5 h-16 bg-gradient-to-b from-[#E6D5B8] via-[#C5A880] to-[#8C7A6B] rounded-full shadow-md" />
            </motion.div>

            {/* Right Glass Door */}
            <motion.div
              style={{
                rotateY: rightDoorRotateY,
                opacity: doorOpacity,
                transformOrigin: 'right center',
              }}
              className="absolute left-[51.8%] top-[45%] w-[13.2%] h-[40.5%] border-l-2 border-[#C5A880]/90 bg-white/10 backdrop-blur-[0.5px] shadow-lg pointer-events-none [transform-style:preserve-3d]"
            >
              <div className="absolute left-2 top-1/3 w-1.5 h-16 bg-gradient-to-b from-[#E6D5B8] via-[#C5A880] to-[#8C7A6B] rounded-full shadow-md" />
            </motion.div>

            {/* Parting Drapes */}
            <motion.div
              style={{ x: leftCurtainX }}
              className="absolute left-[28%] top-[44%] w-[6%] h-[42%] bg-gradient-to-r from-white/30 to-transparent pointer-events-none"
            />
            <motion.div
              style={{ x: rightCurtainX }}
              className="absolute right-[28%] top-[44%] w-[6%] h-[42%] bg-gradient-to-l from-white/30 to-transparent pointer-events-none"
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