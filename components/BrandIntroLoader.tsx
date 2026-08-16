// components/BrandIntroLoader.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandIntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant 1.8s intro reveal timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-10%',
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-auto select-none px-6"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* DW Brand Logo Fade & Scale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-48 h-20 sm:w-60 sm:h-24"
            >
              <Image
                src="/images/brand-logo.jpg"
                alt="DW Boutique Atelier"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Gold Hairline Progress Pulse */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"
            />

            {/* Sub-Brand Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-1"
            >
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
                Designed by Arwa Alfallaj
              </p>
              <p className="text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                Buraydah // بريدة
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}