'use client';

import React, { useState, useEffect } from 'react';
import { useShop } from '@/context/ShopContext';
import { Currency } from '@/types';
import { ShoppingBag, Calendar, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { cart, currency, setCurrency, setIsCartOpen, openBookingWithSku } = useShop();
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-black/[0.06] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.25em] text-[#111111]/80 font-medium">
          <a href="#collections" className="hover:text-[#C5A059] transition-colors">
            Collections
          </a>
          <a href="#atelier" className="hover:text-[#C5A059] transition-colors">
            The Atelier
          </a>
          <button
            onClick={() => openBookingWithSku()}
            className="hover:text-[#C5A059] transition-colors uppercase tracking-[0.25em]"
          >
            Private Fitting
          </button>
        </nav>

        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden text-[#111111] p-1"
          aria-label="Toggle Navigation"
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link href="/" className="flex flex-col items-center group">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl md:text-3xl tracking-wider text-[#111111]">
              DW
            </span>
          </div>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#737373] mt-0.5">
            Designer Wardrobe
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-1 text-[11px] tracking-[0.15em] text-[#737373]">
            {(['USD', 'SAR', 'EUR'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-1.5 py-0.5 transition-colors ${
                  currency === curr
                    ? 'text-[#111111] font-semibold underline underline-offset-4 decoration-[#C5A059]'
                    : 'hover:text-[#111111]'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            onClick={() => openBookingWithSku()}
            className="hidden lg:flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#111111] hover:text-[#C5A059] transition-colors"
          >
            <Calendar size={14} className="text-[#C5A059]" />
            <span>Fitting</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center p-1 text-[#111111] hover:text-[#C5A059] transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#C5A059] text-white text-[9px] w-4 h-4 rounded-none flex items-center justify-center font-mono">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-black/[0.08] px-6 py-6 space-y-4">
          <a
            href="#collections"
            onClick={() => setMobileNavOpen(false)}
            className="block text-xs uppercase tracking-[0.25em] text-[#111111]"
          >
            Collections
          </a>
          <a
            href="#atelier"
            onClick={() => setMobileNavOpen(false)}
            className="block text-xs uppercase tracking-[0.25em] text-[#111111]"
          >
            The Atelier
          </a>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              openBookingWithSku();
            }}
            className="block text-xs uppercase tracking-[0.25em] text-[#C5A059]"
          >
            Book Private Fitting
          </button>
          <div className="pt-4 border-t border-black/[0.06] flex space-x-3 text-xs tracking-widest">
            {(['USD', 'SAR', 'EUR'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={currency === curr ? 'font-bold text-[#C5A059]' : 'text-[#737373]'}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}