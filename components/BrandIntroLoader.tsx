// components/BrandIntroLoader.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandIntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.2s total presentation time before lifting the curtain
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#FAF9F7] flex flex-col items-center justify-center pointer-events-auto select-none px-6"
        >
          <div className="flex flex-col items-center text-center space-y-6 max-w-md mx-auto">
            
            {/* 1. Main DW Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-44 h-20 sm:w-56 sm:h-24"
            >
              <Image
                src="/images/brand-logo.jpg"
                alt="DW Boutique Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* 2. Expanding Gold Atelier Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"
            />

            {/* 3. Designer Attribution & Subtitles */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="space-y-2"
            >
              {/* Designer Name in English & Arabic */}
              <div className="space-y-0.5">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#1A1A1A] font-serif font-medium">
                  Designed by Arwa Alfallaj
                </p>
                <p className="text-[11px] text-[#8C7A6B] font-light dir-rtl">
                  تصميم: أروى الفلاج
                </p>
              </div>

              {/* Couture Atelier Sub-label */}
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 pt-1">
                Haute Couture & Bridal Atelier // Buraydah
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}