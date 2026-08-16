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
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  /* ── Architectural Walk-in Transforms ── */
  // 1. Facade Zoom & Position
  const facadeScale = useTransform(smoothProgress, [0, 0.55, 0.95], [1, 1.8, 3.2]);
  const facadeY = useTransform(smoothProgress, [0, 0.55, 0.95], ['0%', '8%', '22%']);

  // 2. Title & Overhead Text Fade
  const titleOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.25], [0, -40]);

  // 3. 3D Glass Door Swing
  const leftDoorRotateY = useTransform(smoothProgress, [0.30, 0.75], [0, -82]);
  const rightDoorRotateY = useTransform(smoothProgress, [0.30, 0.75], [0, 82]);
  const doorOpacity = useTransform(smoothProgress, [0.70, 0.92], [1, 0]);

  // 4. White Drapes Parting
  const leftCurtainX = useTransform(smoothProgress, [0.35, 0.75], ['0%', '-45%']);
  const rightCurtainX = useTransform(smoothProgress, [0.35, 0.75], ['0%', '45%']);

  // 5. Interior Welcome Lighting Bloom
  const interiorBloomOpacity = useTransform(smoothProgress, [0.65, 0.88, 1], [0, 0.85, 0]);
  const interiorTextOpacity = useTransform(smoothProgress, [0.72, 0.88, 0.98], [0, 1, 0]);
  const interiorTextScale = useTransform(smoothProgress, [0.72, 0.88], [0.92, 1.05]);

  return (
    <div ref={containerRef} className="relative h-[280vh] bg-[#141414] text-white">
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
            ↓ Scroll to walk through the doors
          </p>
        </motion.div>

        {/* ── 3D FACADE & DOORWAY ENGINE ── */}
        <div className="relative w-full h-full flex items-center justify-center [perspective:1400px]">
          
          {/* Main Facade Container */}
          <motion.div
            style={{
              scale: facadeScale,
              y: facadeY,
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

            {/* ── LEFT GLASS ENTRANCE DOOR ── */}
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

            {/* ── RIGHT GLASS ENTRANCE DOOR ── */}
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

            {/* ── PARTING DRAPES (LEFT & RIGHT) ── */}
            <motion.div
              style={{ x: leftCurtainX }}
              className="absolute left-[28%] top-[44%] w-[6%] h-[42%] bg-gradient-to-r from-white/30 to-transparent pointer-events-none"
            />
            <motion.div
              style={{ x: rightCurtainX }}
              className="absolute right-[28%] top-[44%] w-[6%] h-[42%] bg-gradient-to-l from-white/30 to-transparent pointer-events-none"
            />

            {/* ── INSIDE LIGHTING BLOOM REVEAL ── */}
            <motion.div
              style={{ opacity: interiorBloomOpacity }}
              className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#EFE7D8] pointer-events-none mix-blend-screen"
            />
          </motion.div>

          {/* ── INTERIOR WELCOME TEXT (Appears inside the boutique) ── */}
          <motion.div
            style={{
              opacity: interiorTextOpacity,
              scale: interiorTextScale,
            }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          >
            <div className="relative w-40 h-16 sm:w-52 sm:h-20 mb-4">
              <Image
                src="/images/brand-logo.jpg"
                alt="DW Atelier"
                fill
                className="object-contain filter invert contrast-125"
              />
            </div>
            
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A880] font-medium">
              Welcome to the Atelier // أهلاً بكِ في عالم DW
            </p>
            <h3 className="text-3xl sm:text-5xl font-serif font-light text-white mt-2 max-w-xl leading-tight">
              Bespoke Couture & Bridal Sanctuary
            </h3>
            <p className="text-xs text-neutral-300 font-light mt-3 max-w-md">
              Designed by Arwa Alfallaj • Al Hazm District, Buraydah
            </p>
          </motion.div>

        </div>

        {/* ── BOTTOM ATELIER STRIP ── */}
        <footer className="w-full flex justify-between items-center p-6 sm:p-10 z-30 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-neutral-500 pointer-events-none">
          <span>6161 West Ring Rd // طريق الدائري الغربي</span>
          <span>Private Salon Entrance</span>
        </footer>

      </section>
    </div>
  );
}