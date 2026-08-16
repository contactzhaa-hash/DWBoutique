'use client';

import { motion } from 'framer-motion';
import { useShop } from '@/context/ShopContext';

export default function Hero() {
  const { openBookingWithSku, isRTL, t } = useShop();

  const transitionConfig = {
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section className="relative w-full h-[95vh] min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40" />

      <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitionConfig, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.4em] text-[#C5A059] mb-4 font-medium"
        >
          {isRTL ? 'دار الهوت كوتور وفساتين السهرة الفاخرة' : 'Haute Couture & Evening Atelier'}
        </motion.span>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitionConfig, delay: 0.35 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FBF9F5] font-light leading-[1.15] mb-8"
        >
          {isRTL ? 'فخامة وانسيابية تفيض بالأناقة' : 'Architectural Elegance in Motion'}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitionConfig, delay: 0.5 }}
          className="text-sm md:text-base text-[#FBF9F5]/80 max-w-lg font-light leading-relaxed mb-10"
        >
          {isRTL
            ? 'فساتين سهرة ملكية وتصاميم مخصصة محاكة من أفخر أنواع الحرير الأوروبي ومصممة بأيدي كبار الحرفيين.'
            : 'Bespoke evening gowns and tailored silhouettes engineered with pure European silks and hand-sculpted contours.'}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitionConfig, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#collections"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FBF9F5] text-[#111111] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] hover:text-white transition-colors duration-300 rounded-none text-center shadow-lg"
          >
            {t('viewRunway')}
          </a>
          <button
            onClick={() => openBookingWithSku()}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-[#FBF9F5] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-300 rounded-none"
          >
            {t('bookFitting')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}