'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Ruler, Check } from 'lucide-react';

export default function ProductModal() {
  const { activeProductModal, setActiveProductModal, addToCart, formatPrice, openBookingWithSku, isRTL, t } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>('US 4');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [chartOpen, setChartOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!activeProductModal) return null;

  const product = activeProductModal;
  const name = isRTL ? product.nameAr : product.name;
  const category = isRTL ? product.categoryAr : product.category;
  const description = isRTL ? product.descriptionAr : product.description;
  const details = isRTL ? product.detailsAr : product.details;

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      setActiveProductModal(null);
    }, 400);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      isRTL
        ? `مرحباً دار DW للأزياء، أود الاستفسار عن فستان "${product.nameAr}" (كود: ${product.sku}) مقاس ${selectedSize}. يرجى تزويدي بتفاصيل التوفر وجلسات القياس.`
        : `Hello DW Boutique Concierge, I am inquiring about the "${product.name}" (${product.sku}) in size ${selectedSize}. Please provide bespoke tailoring consultation details.`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveProductModal(null)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl h-[88vh] max-h-[750px] bg-[#FBF9F5] rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 border border-black/[0.1]"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveProductModal(null)}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-30 text-[#111111] hover:text-[#C5A059] p-2 bg-[#FBF9F5]/90 rounded-full shadow-md"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Left Column: Image Showcase */}
          <div className="w-full md:w-1/2 h-[35vh] md:h-full relative bg-[#EAE6DE] flex flex-col">
            <div className="relative flex-1 w-full h-full overflow-hidden">
              <img
                src={product.gallery[activeImageIndex] || product.primaryImage}
                alt={name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            </div>
            {/* Gallery Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4 z-20">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-10 h-12 overflow-hidden border-2 transition-all ${
                      activeImageIndex === i ? 'border-[#C5A059] scale-105' : 'border-white/70 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Fixed Sticky Actions */}
          <div className="w-full md:w-1/2 flex flex-col h-[53vh] md:h-full bg-[#FBF9F5]">
            {/* Scrollable Information Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                <span className="text-[#C5A059] font-medium">{category}</span>
                <span className="font-mono">{product.sku}</span>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light leading-tight">
                  {name}
                </h2>
                <p className="text-lg font-mono font-semibold text-[#111111] mt-2">
                  {formatPrice(product.priceUSD)}
                </p>
              </div>

              <div className="w-full h-[1px] bg-black/[0.08]" />

              <p className="text-xs text-[#111111]/80 leading-relaxed font-light">
                {description}
              </p>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111] font-medium">
                    {t('selectSize')}
                  </span>
                  <button
                    onClick={() => setChartOpen(!chartOpen)}
                    className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] flex items-center space-x-1 rtl:space-x-reverse hover:underline"
                  >
                    <Ruler size={12} />
                    <span>{t('measurementChart')}</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs uppercase tracking-widest border transition-all ${
                        selectedSize === sz
                          ? 'border-[#111111] bg-[#111111] text-white font-medium'
                          : 'border-black/[0.15] text-[#111111] hover:border-[#C5A059] bg-transparent'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {chartOpen && (
                <div className="p-3.5 bg-[#F2EDE4] text-[11px] text-[#555] space-y-1.5 border border-black/[0.05]">
                  <p className="font-bold text-[#111111] uppercase tracking-wider">{t('standardSizing')}</p>
                  <p>• US 2: Bust 32" | Waist 24" | Hips 35"</p>
                  <p>• US 4: Bust 34" | Waist 26" | Hips 37"</p>
                  <p>• US 6: Bust 36" | Waist 28" | Hips 39"</p>
                  <p>• Bespoke: {isRTL ? 'تفصيل مخصص حسب مقاسات الجسم في الأتيليه' : 'Custom crafted to anatomical measurements.'}</p>
                </div>
              )}

              {/* Garment Details List */}
              <div className="space-y-1.5 pt-2 text-xs text-[#737373]">
                {details.map((detail, idx) => (
                  <p key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] shrink-0" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Guaranteed Visible Action Buttons at Bottom */}
            <div className="p-5 md:p-6 border-t border-black/[0.08] bg-[#FAF8F4] space-y-2 shrink-0">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 bg-[#111111] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse rounded-none shadow-md"
              >
                {addedAnimation ? <Check size={16} /> : null}
                <span>{t('addToBag')}</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleWhatsApp}
                  className="py-2.5 border border-[#25D366]/40 text-[#111111] text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center space-x-1.5 rtl:space-x-reverse rounded-none"
                >
                  <MessageCircle size={13} className="text-[#25D366]" />
                  <span>{t('inquireWhatsApp')}</span>
                </button>

                <button
                  onClick={() => {
                    setActiveProductModal(null);
                    openBookingWithSku(product.sku);
                  }}
                  className="py-2.5 border border-black/[0.15] text-[#111111] text-[10px] uppercase tracking-[0.15em] font-medium hover:border-[#C5A059] hover:text-[#C5A059] transition-colors rounded-none text-center"
                >
                  {t('bookFitting')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}