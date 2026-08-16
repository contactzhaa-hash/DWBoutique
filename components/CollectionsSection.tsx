// components/CollectionsSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  onSelectGown: (title: string) => void;
}

const COLLECTIONS = [
  {
    id: '01',
    title: 'Midnight Illusion Gown',
    titleAr: 'فستان سراب الليل الفاخر',
    category: 'Bridal & Evening',
    categoryAr: 'عرائس وسهرة',
    image: '/images/stage2-black-full.png',
    tag: 'Bespoke Order',
  },
  {
    id: '02',
    title: 'Sunburst Pleated Gold',
    titleAr: 'فستان شروق الذهب المكسر',
    category: 'Haute Couture',
    categoryAr: 'أزياء راقية',
    image: '/images/stage4-gold-front.png',
    tag: 'Limited Edition',
  },
  {
    id: '03',
    title: 'Emerald Architectural Ballgown',
    titleAr: 'ثوب الزمرد المعماري الملكي',
    category: 'Royal Gala',
    categoryAr: 'سهرات ملكية',
    image: '/images/stage1-model-left.png',
    tag: 'Atelier Exclusive',
  },
  {
    id: '04',
    title: 'Gilded Ombré Evening Dress',
    titleAr: 'فستان الأومبري المتدرج بالذهب',
    category: 'Signature Collection',
    categoryAr: 'المجموعة الأيقونية',
    image: '/images/stage5-ombre-center.png',
    tag: 'Masterpiece',
  },
];

export default function CollectionsSection({ onSelectGown }: Props) {
  const [filter, setFilter] = useState('All');

  return (
    <section className="relative z-20 bg-white py-32 px-6 md:px-16 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8C7A6B]">Curated Archive</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mt-2">Couture Collections</h2>
          </div>
          <div className="flex gap-6 mt-6 md:mt-0 text-xs uppercase tracking-[0.2em]">
            {['All', 'Bridal', 'Evening', 'Bespoke'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`pb-1 transition-all ${filter === tab ? 'border-b-2 border-black font-semibold text-black' : 'text-neutral-400 hover:text-black'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col" onClick={() => onSelectGown(item.title)}>
              <div className="relative aspect-[3/4] w-full bg-[#FAF9F7] overflow-hidden border border-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-bottom p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="pt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg text-neutral-900 group-hover:text-[#C5A880] transition-colors">{item.title}</h3>
                  <p className="text-xs text-neutral-400 tracking-wider uppercase mt-1">{item.category}</p>
                </div>
                <span className="text-xs font-serif text-[#8C7A6B]">{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}