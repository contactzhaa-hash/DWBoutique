'use client';

import React, { useState, useEffect } from 'react';
import { useShop } from '@/context/ShopContext';
import { Currency, Language } from '@/types';
import { ShoppingBag, Calendar, Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { cart, currency, setCurrency, language, setLanguage, isRTL, setIsCartOpen, openBookingWithSku, t } = useShop();
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
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-black/[0.06] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-[11px] uppercase tracking-[0.25em] text-[#111111]/80 font-medium">
          <a href="#collections" className="hover:text-[#C5A059] transition-colors">
            {t('collections')}
          </a>
          <a href="#atelier" className="hover:text-[#C5A059] transition-colors">
            {t('atelier')}
          </a>
          <button
            onClick={() => openBookingWithSku()}
            className="hover:text-[#C5A059] transition-colors uppercase tracking-[0.25em]"
          >
            {t('fitting')}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden text-[#111111] p-1"
          aria-label="Toggle Navigation"
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl md:text-3xl tracking-wider text-[#111111]">
              DW
            </span>
          </div>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#737373] mt-0.5">
            {isRTL ? 'خزانة المصممين' : 'Designer Wardrobe'}
          </span>
        </Link>

        {/* Controls: Language, Currency, Cart */}
        <div className="flex items-center space-x-5 rtl:space-x-reverse">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center space-x-1 rtl:space-x-reverse text-[11px] font-semibold tracking-wider text-[#111111] hover:text-[#C5A059] transition-colors border border-black/[0.1] px-2.5 py-1"
          >
            <Globe size={12} className="text-[#C5A059]" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Currency Switcher */}
          <div className="hidden sm:flex items-center space-x-1.5 rtl:space-x-reverse text-[11px] tracking-wider text-[#737373]">
            {(['SAR', 'USD', 'EUR'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-1.5 py-0.5 transition-colors ${
                  currency === curr
                    ? 'text-[#111111] font-bold underline underline-offset-4 decoration-[#C5A059]'
                    : 'hover:text-[#111111]'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Private Fitting Quick Action */}
          <button
            onClick={() => openBookingWithSku()}
            className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse text-[11px] uppercase tracking-[0.2em] text-[#111111] hover:text-[#C5A059] transition-colors"
          >
            <Calendar size={14} className="text-[#C5A059]" />
            <span>{t('fitting')}</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center p-1 text-[#111111] hover:text-[#C5A059] transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#C5A059] text-white text-[9px] w-4 h-4 flex items-center justify-center font-mono font-bold">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-black/[0.08] px-6 py-6 space-y-4 shadow-xl">
          <a
            href="#collections"
            onClick={() => setMobileNavOpen(false)}
            className="block text-xs uppercase tracking-[0.25em] text-[#111111]"
          >
            {t('collections')}
          </a>
          <a
            href="#atelier"
            onClick={() => setMobileNavOpen(false)}
            className="block text-xs uppercase tracking-[0.25em] text-[#111111]"
          >
            {t('atelier')}
          </a>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              openBookingWithSku();
            }}
            className="block text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium"
          >
            {t('bookFitting')}
          </button>
          <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'ar' : 'en');
                setMobileNavOpen(false);
              }}
              className="text-[#C5A059] font-semibold"
            >
              {language === 'en' ? 'تغيير إلى العربية' : 'Switch to English'}
            </button>
            <div className="flex space-x-3 rtl:space-x-reverse font-mono">
              {(['SAR', 'USD', 'EUR'] as Currency[]).map((curr) => (
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
        </div>
      )}
    </header>
  );
}