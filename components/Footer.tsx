'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-black/[0.08] bg-[#FBF9F5] text-[#111111]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="font-serif text-2xl tracking-wider">DW</span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#737373] mt-1">
            Designer Wardrobe • Evening Dresses
          </p>
        </div>

        <div className="flex space-x-8 text-[11px] uppercase tracking-[0.25em] text-[#737373]">
          <a href="#collections" className="hover:text-[#111111] transition-colors">Collections</a>
          <a href="#atelier" className="hover:text-[#111111] transition-colors">Atelier</a>
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition-colors"
          >
            VIP Concierge
          </a>
        </div>

        <p className="text-[10px] font-mono text-[#737373]">
          © 2026 DW BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}