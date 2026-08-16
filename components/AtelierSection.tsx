'use client';

import React from 'react';

export default function AtelierSection() {
  return (
    <section id="atelier" className="py-28 bg-[#0A0A0A] text-[#FBF9F5] px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden bg-[#1A1A1A] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
            alt="Atelier Tailoring"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>

        <div className="space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059]">
            The Craftsmanship
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            Every drape is measured to the millimeter.
          </h2>
          <p className="text-sm text-[#8E8880] leading-relaxed font-light">
            DW Designer Wardrobe was conceived to bridge neoclassical tailoring with modern sculptural geometry. Each gown undergoes over 120 hours of hand-guided pleating, internal corset construction, and personalized fitting calibrations in our private salon.
          </p>
          <div className="pt-4 border-t border-white/10 flex items-center space-x-8 text-xs uppercase tracking-widest text-[#C5A059]">
            <div>
              <p className="font-mono text-xl text-[#FBF9F5]">120+</p>
              <p className="text-[9px] text-[#8E8880]">Hours per gown</p>
            </div>
            <div>
              <p className="font-mono text-xl text-[#FBF9F5]">100%</p>
              <p className="text-[9px] text-[#8E8880]">Pure European Silk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}