'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product, CartItem, Currency } from '@/types';
import { CURRENCY_RATES } from '@/data/products';

interface ShopContextType {
  cart: CartItem[];
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceUSD: number) => string;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, qty: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  activeProductModal: Product | null;
  setActiveProductModal: (p: Product | null) => void;
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  bookingPreselectedSku: string | null;
  openBookingWithSku: (sku?: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselectedSku, setBookingPreselectedSku] = useState<string | null>(null);

  const formatPrice = (priceUSD: number): string => {
    const config = CURRENCY_RATES[currency];
    const converted = Math.round(priceUSD * config.rate);
    return `${config.symbol}${converted.toLocaleString()}`;
  };

  const addToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)));
  };

  const updateQuantity = (productId: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size ? { ...item, quantity: qty } : item
      )
    );
  };

  const openBookingWithSku = (sku?: string) => {
    setBookingPreselectedSku(sku || null);
    setIsBookingOpen(true);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        currency,
        setCurrency,
        formatPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        activeProductModal,
        setActiveProductModal,
        isBookingOpen,
        setIsBookingOpen,
        bookingPreselectedSku,
        openBookingWithSku,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
};