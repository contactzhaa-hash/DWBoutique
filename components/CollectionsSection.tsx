// components/CollectionsSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ATELIER_PRODUCTS, ProductItem } from '@/data/products';

interface Props {
  onSelectGown: (title: string) => void;
}

export default function CollectionsSection({ onSelectGown }: Props) {
  const [activeTab, setActiveTab] = useState<'All' | 'Bridal' | 'Evening' | 'Junior'>('All');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const filteredItems = activeTab === 'All'
    ? ATELIER_PRODUCTS
    : ATELIER_PRODUCTS.filter((item) => item.category === activeTab);

  return (
    <section className="relative z-20 bg-white py-28 px-6 md:px-16 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
              Curated Atelier Archive
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mt-2">
              Collections & Silhouette Archive
            </h2>
          </div>

          {/* Luxury Tab Navigation */}
          <div className="flex flex-wrap gap-6 mt-6 md:mt-0 text-xs uppercase tracking-[0.2em]">
            {[
              { key: 'All', label: 'All Creations (الكل)' },
              { key: 'Bridal', label: 'Bridal Suite (العرائس)' },
              { key: 'Evening', label: 'Evening Gowns (السهرة)' },
              { key: 'Junior', label: 'Petite Couture (الأطفال)' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as any)}
                className={`pb-1 transition-all ${
                  activeTab === tab.key
                    ? 'border-b-2 border-black font-semibold text-black'
                    : 'text-neutral-400 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => {
                setSelectedProduct(item);
                setActiveGalleryIndex(0);
              }}
            >
              <div className="relative aspect-[3/4] w-full bg-[#FAF9F7] overflow-hidden border border-neutral-100">
                <Image
                  src={item.thumbnail}
                  alt={item.nameEn}
                  fill
                  className="object-cover md:object-contain object-center p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-medium">
                  {item.tagEn}
                </span>
                <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-neutral-800 text-[9px] uppercase tracking-[0.15em] px-2.5 py-0.5">
                  {item.gallery.length} Angles
                </span>
              </div>

              <div className="pt-5 flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-neutral-900 group-hover:text-[#C5A880] transition-colors leading-snug">
                    {item.nameEn}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light dir-rtl">
                    {item.nameAr}
                  </p>
                  <p className="text-[10px] text-[#8C7A6B] uppercase tracking-wider pt-1">
                    {item.categoryLabelEn} // {item.categoryLabelAr}
                  </p>
                </div>
                <span className="text-xs font-serif text-neutral-400 shrink-0 ml-4">
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Multi-Angle Gallery Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-5xl bg-white border border-neutral-200 p-6 md:p-10 shadow-2xl text-neutral-900 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-black text-2xl z-10"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="relative aspect-[3/4] w-full max-h-[60vh] bg-[#FAF9F7] border border-neutral-100 overflow-hidden">
                    <Image
                      src={selectedProduct.gallery[activeGalleryIndex]}
                      alt={selectedProduct.nameEn}
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>

                  <div className="flex gap-2 mt-4 overflow-x-auto w-full py-1">
                    {selectedProduct.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`relative w-14 h-16 shrink-0 border transition-all ${
                          activeGalleryIndex === idx
                            ? 'border-black opacity-100 scale-105'
                            : 'border-neutral-200 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image src={img} alt="angle preview" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C7A6B]">
                      {selectedProduct.categoryLabelEn} // {selectedProduct.id}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 mt-2">
                      {selectedProduct.nameEn}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1 font-light dir-rtl">
                      {selectedProduct.nameAr}
                    </p>
                  </div>

                  <div className="py-4 border-y border-neutral-100 space-y-2 text-xs text-neutral-600">
                    <div className="flex justify-between">
                      <span className="text-neutral-400 uppercase tracking-wider">Palette:</span>
                      <span className="font-medium text-neutral-900">{selectedProduct.colorEn} ({selectedProduct.colorAr})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 uppercase tracking-wider">Craft:</span>
                      <span className="font-medium text-neutral-900">{selectedProduct.tagEn} ({selectedProduct.tagAr})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 uppercase tracking-wider">Location:</span>
                      <span className="font-medium text-neutral-900">Buraydah Atelier Showroom</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProduct.nameEn;
                      setSelectedProduct(null);
                      onSelectGown(title);
                    }}
                    className="w-full py-4 bg-neutral-900 text-white text-xs uppercase tracking-[0.25em] hover:bg-[#C5A880] transition-colors duration-300 font-medium"
                  >
                    Reserve Private Fitting for this Gown
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}