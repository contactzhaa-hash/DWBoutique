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
    stiffness: 90, // faster & snappier
    damping: 24,
    restDelta: 0.001,
  });

  /* ── Architectural Walk-in Transforms (Optimized & Simplified) ── */
  
  // 1. Facade Zoom: Moves dramatically faster to fill viewport with entrance
  const facadeScale = useTransform(smoothProgress, [0, 0.45], [1, 2.4]);
  const facadeY = useTransform(smoothProgress, [0, 0.45], ['0%', '14%']);

  // 2. Title & Overhead Text Fade: Disappears much earlier
  const titleOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.12], [0, -45]);

  // 3. 3D Glass Door Swing: Fast opening into black void
  const leftDoorRotateY = useTransform(smoothProgress, [0.15, 0.50], [0, -85]);
  const rightDoorRotateY = useTransform(smoothProgress, [0.15, 0.50], [0, 85]);
  const doorOpacity = useTransform(smoothProgress, [0.45, 0.70], [1, 0]); // Dissolves quickly

  // 4. White Drapes Parting: Part further to create large opening context
  const leftCurtainX = useTransform(smoothProgress, [0.18, 0.50], ['0%', '-55%']);
  const rightCurtainX = useTransform(smoothProgress, [0.18, 0.50], ['0%', '55%']);

  // FINAL PORTAL STATE: Entire view fades to black void to stabilize next component arrival
  const facadeFinalOpacity = useTransform(smoothProgress, [0.65, 0.85], [1, 0]);

  return (
    // Update container height to be very tight: no excessive dead scroll space.
    <div ref={containerRef} className="relative h-[180vh] bg-[#141414] text-white">
      <section className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center select-none">
        
        {/* ── SECTION INTRO HEADER ── */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute top-12 sm:top-16 z-30 text-center px-4 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] font-medium">
            Flagship Boutique // بريدة
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light mt-2 tracking-tight">
            Step Inside the Atelier
          </h2>
          <p className="text-[10px] sm:text-xs text-neutral-400 tracking-[0.25em] uppercase mt-2">
            ↓ Scroll to walkthrough the doors
          </p>
        </motion.div>

        {/* ── 3D FACADE & DOORWAY PORTAL ENGINE ── */}
        <div className="relative w-full h-full flex items-center justify-center [perspective:1400px]">
          
          {/* Main Facade Container */}
          <motion.div
            style={{
              scale: facadeScale,
              y: facadeY,
              opacity: facadeFinalOpacity, // entire view fades to black
            }}
            className="relative w-[96vw] sm:w-[88vw] md:w-[78vw] aspect-[16/10] max-w-6xl shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Base Storefront Image */}
            <Image
              src="/images/dw-shop-front.jpg"
              alt="DW Boutique Buraydah Exterior"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Subtle Vignette & Framing Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* ── LEFT GLASS ENTRANCE DOOR (Simplified, Pure Swing) ── */}
            <motion.div
              style={{
                rotateY: leftDoorRotateY,
                opacity: doorOpacity,
                transformOrigin: 'left center',
              }}
              className="absolute left-[34.8%] top-[45%] w-[13.2%] h-[40.5%] border-r-2 border-[#C5A880]/80 bg-white/10 backdrop-blur-[0.5px] shadow-lg pointer-events-none [transform-style:preserve-3d]"
            >
              {/* Gold Door Handle Bar */}
              <div className="absolute right-2 top-1/3 w-1.5 h-16 bg-gradient-to-b from-[#E6D5B8] via-[#C5A880] to-[#8C7A6B] rounded-full shadow-md" />
            </motion.div>

            {/* ── RIGHT GLASS ENTRANCE DOOR (Simplified, Pure Swing) ── */}
            <motion.div
              style={{
                rotateY: rightDoorRotateY,
                opacity: doorOpacity,
                transformOrigin: 'right center',
              }}
              className="absolute left-[51.8%] top-[45%] w-[13.2%] h-[40.5%] border-l-2 border-[#C5A880]/80 bg-white/10 backdrop-blur-[0.5px] shadow-lg pointer-events-none [transform-style:preserve-3d]"
            >
              {/* Gold Door Handle Bar */}
              <div className="absolute left-2 top-1/3 w-1.5 h-16 bg-gradient-to-b from-[#E6D5B8] via-[#C5A880] to-[#8C7A6B] rounded-full shadow-md" />
            </motion.div>

            {/* ── PARTING DRAPES ── */}
            <motion.div
              style={{ x: leftCurtainX }}
              className="absolute left-[28%] top-[44%] w-[6%] h-[42%] bg-gradient-to-r from-white/30 to-transparent pointer-events-none"
            />
            <motion.div
              style={{ x: rightCurtainX }}
              className="absolute right-[28%] top-[44%] w-[6%] h-[42%] bg-gradient-to-l from-white/30 to-transparent pointer-events-none"
            />

          </motion.div>

        </div>

      </section>
    </div>
  );
}