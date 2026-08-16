'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Currency, Language } from '@/types';
import { CURRENCY_RATES } from '@/data/products';

interface ShopContextType {
  cart: CartItem[];
  currency: Currency;
  setCurrency: (c: Currency) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  isRTL: boolean;
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
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    collections: 'Collections',
    atelier: 'The Atelier',
    fitting: 'Private Fitting',
    bookFitting: 'Book a Fitting',
    viewRunway: 'View Runway Collection',
    currentSeason: 'The Current Season',
    seasonHeading: 'Curated Form & Silhouette',
    all: 'All',
    eveningGowns: 'Evening Gowns',
    cocktail: 'Cocktail',
    bridal: 'Bridal',
    couture: 'Couture',
    quickView: 'Quick View',
    concierge: 'Concierge',
    selectSize: 'Select Size',
    measurementChart: 'Measurement Chart',
    addToBag: 'Add to Bag',
    inquireWhatsApp: 'Inquire via WhatsApp',
    requestFitting: 'Request Atelier Fitting for this piece →',
    yourSelection: 'Your Selection',
    emptyBag: 'Your bag is empty',
    exploreRunway: 'Explore Current Runway Collections',
    subtotal: 'Estimated Subtotal',
    checkout: 'Proceed to Checkout',
    freeShipping: 'Complimentary worldwide insured courier shipping on all bespoke orders.',
    vipExperience: 'VIP Experience',
    reserveFitting: 'Reserve a Private Fitting',
    preferredDate: 'Preferred Date',
    timeSlot: 'Private Time Slot',
    guests: 'Accompanying Guests',
    continueDetails: 'Continue to Details →',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone / WhatsApp',
    specialRequests: 'Special Requests & Notes',
    back: 'Back',
    confirmBooking: 'Confirm Booking',
    fittingReserved: 'Fitting Reserved',
    fittingConfirmation: 'Your private couture consultation request has been received. Our senior stylist will contact you via WhatsApp to finalize tailoring arrangements.',
    craftsmanship: 'The Craftsmanship',
    atelierHeading: 'Every drape is measured to the millimeter.',
    atelierBody: 'DW Designer Wardrobe was conceived to bridge neoclassical tailoring with modern sculptural geometry. Each gown undergoes over 120 hours of hand-guided pleating, internal corset construction, and personalized fitting calibrations in our private salon.',
    hoursPerGown: 'Hours per gown',
    pureSilk: 'Pure European Silk',
    allRightsReserved: 'ALL RIGHTS RESERVED.',
    brandTagline: 'Designer Wardrobe • Evening Dresses',
    vipConcierge: 'VIP Concierge',
    standardSizing: 'Standard Couture Sizing',
    justMyself: 'Just myself',
    twoGuests: '2 Guests (+ Champagne service)',
    threeGuests: '3 Guests (Private Salon Suite)',
  },
  ar: {
    collections: 'المجموعات',
    atelier: 'الأتيليه',
    fitting: 'جلسة قياس خاصة',
    bookFitting: 'حجز موعد قياس',
    viewRunway: 'استعراض المجموعة',
    currentSeason: 'الموسم الحالي',
    seasonHeading: 'أناقة وتصاميم منحوتة بدقة',
    all: 'الكل',
    eveningGowns: 'فساتين سهرة',
    cocktail: 'كوكتيل',
    bridal: 'عرائس',
    couture: 'هوت كوتور',
    quickView: 'نظرة سريعة',
    concierge: 'المساعد الخاص',
    selectSize: 'اختيار المقاس',
    measurementChart: 'دليل المقاسات',
    addToBag: 'إضافة إلى الحقيبة',
    inquireWhatsApp: 'استفسار عبر واتساب',
    requestFitting: 'طلب موعد قياس خاص لهذه القطعة ←',
    yourSelection: 'حقيبة التسوق',
    emptyBag: 'حقيبة التسوق فارغة',
    exploreRunway: 'تصفح أحدث مجموعات الأزياء',
    subtotal: 'المجموع التقريبي',
    checkout: 'إتمام الطلب',
    freeShipping: 'شحن فاخر ومؤمن مجاناً لجميع طلبات الهوت كوتور والتفصيل الخاص.',
    vipExperience: 'تجربة كبار الشخصيات',
    reserveFitting: 'حجز جلسة قياس وتصميم خاصة',
    preferredDate: 'التاريخ المفضل',
    timeSlot: 'الوقت المفضل',
    guests: 'عدد الضيوف المرافقين',
    continueDetails: 'متابعة تفاصيل الحجز ←',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف / واتساب',
    specialRequests: 'ملاحظات أو متطلبات خاصة',
    back: 'رجوع',
    confirmBooking: 'تأكيد الحجز',
    fittingReserved: 'تم تأكيد طلب الحجز',
    fittingConfirmation: 'تم استلام طلبكم لجلسة القياس الخاصة بنجاح. سيتواصل معكم المنسق الشخصي عبر الواتساب لترتيب كافة التفاصيل.',
    craftsmanship: 'حرفية وتفرد',
    atelierHeading: 'كل تفصيلة محسوبة بالمليمتر.',
    atelierBody: 'تأسست دار DW للمصممين لتجمع بين أصالة الحياكة الكلاسيكية والهندسة العصرية المنحوتة. تخضع كل قطعة لأكثر من ١٢٠ ساعة من العمل اليدوي الدقيق وبناء الكورسيهات لضمان القوام المثالي.',
    hoursPerGown: 'ساعة عمل لكل فستان',
    pureSilk: 'حرير أوروبي نقي ١٠٠٪',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    brandTagline: 'خزانة المصممين • فساتين سهرة راقية',
    vipConcierge: 'خدمة العملاء VIP',
    standardSizing: 'المقاسات القياسية للهوت كوتور',
    justMyself: 'أنا فقط',
    twoGuests: 'ضيفان (+ ضيافة فاخرة)',
    threeGuests: '٣ ضيوف (جناح الأتيليه الخاص)',
  },
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<Currency>('SAR');
  const [language, setLanguage] = useState<Language>('en');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselectedSku, setBookingPreselectedSku] = useState<string | null>(null);

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const formatPrice = (priceUSD: number): string => {
    const config = CURRENCY_RATES[currency];
    const converted = Math.round(priceUSD * config.rate);
    const symbol = isRTL ? config.symbolAr : config.symbolEn;
    return isRTL ? `${converted.toLocaleString('ar-SA')} ${symbol}` : `${symbol}${converted.toLocaleString()}`;
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
        language,
        setLanguage,
        isRTL,
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
        t,
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