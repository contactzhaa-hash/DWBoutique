'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { useShop } from '@/context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Eye } from 'lucide-react';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { formatPrice, setActiveProductModal, isRTL, t } = useShop();

  const categories = [
    { key: 'All', label: t('all') },
    { key: 'Evening Gowns', label: t('eveningGowns') },
    { key: 'Cocktail', label: t('cocktail') },
    { key: 'Bridal', label: t('bridal') },
    { key: 'Couture', label: t('couture') },
  ];

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const directWhatsAppInquiry = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      isRTL
        ? `مرحباً دار DW للأزياء، أود الاستفسار عن فستان "${product.nameAr}" (كود: ${product.sku}).`
        : `Hello DW Boutique Concierge, I am interested in inquiring about "${product.name}" (SKU: ${product.sku}).`
    );
    window.open(`https://wa.me/966500000000?text=${message}`, '_blank');
  };

  return (
    <section id="collections" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#FBF9F5]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/[0.08] pb-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-medium">
            {t('currentSeason')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-light mt-1">
            {t('seasonHeading')}
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 mt-6 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-xs uppercase tracking-[0.25em] transition-colors pb-1 relative ${
                activeCategory === cat.key
                  ? 'text-[#111111] font-bold'
                  : 'text-[#737373] hover:text-[#111111]'
              }`}
            >
              {cat.label}
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A059]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <AnimatePresence>
          {filtered.map((product, idx) => {
            const displayName = isRTL ? product.nameAr : product.name;
            const displayCat = isRTL ? product.categoryAr : product.category;

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`group cursor-pointer ${idx % 3 === 1 ? 'lg:translate-y-6' : ''}`}
                onClick={() => setActiveProductModal(product)}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ECE8E1] shadow-sm">
                  <img
                    src={product.primaryImage}
                    alt={displayName}
                    className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                  />

                  <img
                    src={product.secondaryImage}
                    alt={displayName}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProductModal(product);
                      }}
                      className="flex items-center space-x-1.5 rtl:space-x-reverse bg-[#FBF9F5] text-[#111111] px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-white transition-colors"
                    >
                      <Eye size={12} />
                      <span>{t('quickView')}</span>
                    </button>

                    <button
                      onClick={(e) => directWhatsAppInquiry(e, product)}
                      className="flex items-center space-x-1.5 rtl:space-x-reverse bg-[#111111] text-white px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-[#25D366] transition-colors"
                      title="Direct WhatsApp"
                    >
                      <MessageCircle size={12} />
                      <span>{t('concierge')}</span>
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-col space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#737373]">
                    {displayCat}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg text-[#111111] group-hover:text-[#C5A059] transition-colors">
                      {displayName}
                    </h3>
                    <span className="text-xs font-mono font-medium text-[#111111]">
                      {formatPrice(product.priceUSD)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}