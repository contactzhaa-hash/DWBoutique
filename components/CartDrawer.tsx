'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, formatPrice, isRTL, t } = useShop();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.priceUSD * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end rtl:justify-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl z-10 flex flex-col justify-between border-l rtl:border-l-0 rtl:border-r border-black/[0.08]"
          >
            <div className="p-6 border-b border-black/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <ShoppingBag size={18} className="text-[#C5A059]" />
                <h3 className="font-serif text-xl text-[#111111] font-light">
                  {t('yourSelection')} ({cart.length})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#111111] hover:text-[#C5A059] p-1"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#737373] mb-4">
                    {t('emptyBag')}
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs text-[#111111] underline underline-offset-4 decoration-[#C5A059]"
                  >
                    {t('exploreRunway')}
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const displayName = isRTL ? item.product.nameAr : item.product.name;

                  return (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex space-x-4 rtl:space-x-reverse pb-6 border-b border-black/[0.04]"
                    >
                      <img
                        src={item.product.primaryImage}
                        alt={displayName}
                        className="w-20 h-28 object-cover bg-[#ECE8E1] shrink-0"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif text-sm text-[#111111]">
                              {displayName}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-[#737373] hover:text-[#111111] p-0.5"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-[10px] uppercase tracking-widest text-[#737373] mt-1">
                            {t('selectSize')}: {item.size}
                          </p>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-black/[0.1] text-xs">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                              className="px-2 py-1 hover:bg-black/[0.05]"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="px-3 font-mono text-xs">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity + 1)
                              }
                              className="px-2 py-1 hover:bg-black/[0.05]"
                            >
                              <Plus size={10} />
                            </button>
                          </div>

                          <span className="font-mono text-xs text-[#111111]">
                            {formatPrice(item.product.priceUSD * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-black/[0.08] bg-[#F5F2EC] space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373]">
                    {t('subtotal')}
                  </span>
                  <span className="font-mono text-base font-semibold text-[#111111]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-[10px] text-[#737373] leading-relaxed">
                  {t('freeShipping')}
                </p>
                <button
                  onClick={() => alert('Proceeding to Luxury Encrypted Checkout')}
                  className="w-full py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse rounded-none shadow-md"
                >
                  <span>{t('checkout')}</span>
                  <ArrowRight size={14} className="rtl:rotate-180" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}