'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Ruler } from 'lucide-react';

export default function ProductModal() {
  const { activeProductModal, setActiveProductModal, addToCart, formatPrice, openBookingWithSku } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>('US 4');
  const [accordionOpen, setAccordionOpen] = useState(false);

  if (!activeProductModal) return null;

  const product = activeProductModal;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello DW Boutique Concierge, I am inquiring about the "${product.name}" (${product.sku}) in size ${selectedSize}. Please provide bespoke tailoring consultation details.`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveProductModal(null)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#FBF9F5] rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 border border-black/[0.08]"
        >
          <button
            onClick={() => setActiveProductModal(null)}
            className="absolute top-4 right-4 z-20 text-[#111111] hover:text-[#C5A059] p-2 bg-[#FBF9F5]/80 backdrop-blur-sm"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="w-full md:w-[58%] overflow-y-auto max-h-[45vh] md:max-h-[90vh] p-6 space-y-4 bg-[#F5F2EC]">
            {product.gallery.map((imgUrl, i) => (
              <div key={i} className="aspect-[3/4] w-full overflow-hidden bg-[#ECE8E1]">
                <img
                  src={imgUrl}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="w-full md:w-[42%] p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#737373] mb-2">
                <span>{product.category}</span>
                <span>{product.sku}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-light mb-3">
                {product.name}
              </h2>
              <p className="text-base font-mono text-[#111111] mb-6">
                {formatPrice(product.priceUSD)}
              </p>

              <div className="w-full h-[1px] bg-black/[0.08] mb-6" />

              <p className="text-xs text-[#111111]/80 leading-relaxed font-light mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111] font-medium">
                    Select Size
                  </span>
                  <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] flex items-center space-x-1"
                  >
                    <Ruler size={12} />
                    <span>Measurement Chart</span>
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
                          : 'border-black/[0.12] text-[#111111] hover:border-[#C5A059]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {accordionOpen && (
                <div className="mb-6 p-4 bg-[#F2EDE4] text-[11px] text-[#737373] space-y-1.5 border border-black/[0.04]">
                  <p className="font-medium text-[#111111] mb-2 uppercase tracking-widest">
                    Standard Couture Sizing
                  </p>
                  <p>• US 2: Bust 32" | Waist 24" | Hips 35"</p>
                  <p>• US 4: Bust 34" | Waist 26" | Hips 37"</p>
                  <p>• US 6: Bust 36" | Waist 28" | Hips 39"</p>
                  <p>• Bespoke: Custom crafted to anatomical measurements during private fitting.</p>
                </div>
              )}

              <div className="mb-6 space-y-1 text-xs text-[#737373]">
                {product.details.map((detail, idx) => (
                  <p key={idx} className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-[#C5A059]" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 pt-6 border-t border-black/[0.08]">
              <button
                onClick={() => {
                  addToCart(product, selectedSize);
                  setActiveProductModal(null);
                }}
                className="w-full py-3.5 bg-[#111111] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] transition-colors rounded-none"
              >
                Add to Bag
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3.5 border border-black/[0.2] text-[#111111] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center space-x-2 rounded-none"
              >
                <MessageCircle size={14} />
                <span>Inquire via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setActiveProductModal(null);
                  openBookingWithSku(product.sku);
                }}
                className="w-full text-center text-[10px] uppercase tracking-[0.2em] text-[#737373] hover:text-[#C5A059] pt-2"
              >
                Request Atelier Fitting for this piece →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}