// data/products.ts

export interface ProductItem {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  category: 'Bridal' | 'Evening' | 'Junior';
  categoryLabelEn: string;
  categoryLabelAr: string;
  colorEn: string;
  colorAr: string;
  thumbnail: string;
  gallery: string[];
  tagEn: string;
  tagAr: string;
}

export const ATELIER_PRODUCTS: ProductItem[] = [
  // ── BRIDAL & EVENING ──
  {
    id: 'DW-BR-01',
    slug: 'architectural-crystal-bridal-gown',
    nameEn: 'Architectural Crystal Bridal Ballgown',
    nameAr: 'فستان الزفاف المعماري بكريستال الفضة',
    category: 'Bridal',
    categoryLabelEn: 'Bridal Suite',
    categoryLabelAr: 'جناح العرائس',
    colorEn: 'Silver White',
    colorAr: 'أبيض فضي',
    thumbnail: '/images/dw-w-gowna.jpg',
    gallery: [
      '/images/dw-w-gowna.jpg',
      '/images/dw-w-gownb.jpg',
      '/images/dw-w-gownc.jpg',
      '/images/dw-w-gownd.jpg',
    ],
    tagEn: 'Haute Bridal',
    tagAr: 'تصميم ملكي خاص',
  },
  {
    id: 'DW-EV-01',
    slug: 'champagne-beaded-cape-gown',
    nameEn: 'Champagne Beaded Column Gown with Cape',
    nameAr: 'فستان الشامبانيا الهندسي بكاب ملكي',
    category: 'Evening',
    categoryLabelEn: 'Evening Couture',
    categoryLabelAr: 'سهرة راقية',
    colorEn: 'Champagne',
    colorAr: 'شامبانيا',
    thumbnail: '/images/dw-outfit-gown1.jpeg',
    gallery: [
      '/images/dw-outfit-gown1.jpeg',
      '/images/dw-whitegown2.jpeg',
    ],
    tagEn: 'Hand-Beaded',
    tagAr: 'تطريز يدوي',
  },

  // ── JUNIOR COUTURE ──
  {
    id: 'DW-JR-01',
    slug: 'celeste-blue-rosette-dress',
    nameEn: 'Celeste Blue Rosette Tiered Tulle Dress',
    nameAr: 'فستان سيليست التول بالأكتاف غير المتماثلة',
    category: 'Junior',
    categoryLabelEn: 'Petite Atelier',
    categoryLabelAr: 'كوتور الأطفال',
    colorEn: 'Powder Blue',
    colorAr: 'أزرق سماوي',
    thumbnail: '/images/dw-c-blueb.jpg',
    gallery: [
      '/images/dw-c-bluea.jpg',
      '/images/dw-c-blueb.jpg',
      '/images/dw-c-bluec.jpg',
      '/images/dw-c-blued.jpg',
      '/images/dw-c-bluee.jpg',
      '/images/dw-c-bluef.jpg',
      '/images/dw-c-blueg.jpg',
      '/images/dw-c-blueh.jpg',
    ],
    tagEn: 'Petite Couture',
    tagAr: 'أميرات DW',
  },
  {
    id: 'DW-JR-02',
    slug: 'tangerine-satin-corset-dress',
    nameEn: 'Tangerine Satin Dress with Navy Corset',
    nameAr: 'فستان الحرير البرتقالي برباط كورسيه كحلي',
    category: 'Junior',
    categoryLabelEn: 'Petite Atelier',
    categoryLabelAr: 'كوتور الأطفال',
    colorEn: 'Tangerine Orange',
    colorAr: 'برتقالي وكحلي',
    thumbnail: '/images/dw-c-9a.jpg',
    gallery: [
      '/images/dw-c-9a.jpg',
      '/images/dw-c-9b.jpg',
      '/images/dw-c-9c.jpg',
      '/images/dw-c-9d.jpg',
      '/images/dw-c-9e.jpg',
    ],
    tagEn: 'Bespoke Corset',
    tagAr: 'كورسيه مخملي',
  },
  {
    id: 'DW-JR-03',
    slug: 'lilac-blossom-twirl-dress',
    nameEn: 'Lilac Blossom Satin & Tulle Twirl Dress',
    nameAr: 'فستان اللافندر والستان المنفوش للأميرات',
    category: 'Junior',
    categoryLabelEn: 'Petite Atelier',
    categoryLabelAr: 'كوتور الأطفال',
    colorEn: 'Lilac Pink',
    colorAr: 'لافندر وزهري',
    thumbnail: '/images/dw-c-pinkb.jpg',
    gallery: [
      '/images/dw-c-pink.jpg',
      '/images/dw-c-pinkb.jpg',
      '/images/dw-c-pinkc.jpg',
      '/images/dw-c-pinkd.jpg',
      '/images/dw-c-pinke.jpg',
    ],
    tagEn: 'Signature Twirl',
    tagAr: 'قصة منفوشة',
  },
  {
    id: 'DW-JR-04',
    slug: 'dusty-mauve-corset-fascinator',
    nameEn: 'Dusty Mauve Corset Gown & Fascinator',
    nameAr: 'فستان الموف التول بقبعة الأتيليه الملكية',
    category: 'Junior',
    categoryLabelEn: 'Petite Atelier',
    categoryLabelAr: 'كوتور الأطفال',
    colorEn: 'Dusty Mauve',
    colorAr: 'موف داكن',
    thumbnail: '/images/dw-children8a.jpg',
    gallery: [
      '/images/dw-children8a.jpg',
      '/images/dw-children8b.jpg',
      '/images/dw-children8c.jpg',
      '/images/dw-children8d.jpg',
      '/images/dw-children8e.jpg',
    ],
    tagEn: 'Complete Set',
    tagAr: 'طقم كامل بالقبعة',
  },
  {
    id: 'DW-JR-05',
    slug: 'royal-burgundy-bloom-sister-set',
    nameEn: 'Royal Burgundy Bloom Sister Ensemble',
    nameAr: 'طقم الأخوات العنابي بالورود المجسمة',
    category: 'Junior',
    categoryLabelEn: 'Sister Matching Sets',
    categoryLabelAr: 'أطقم الأخوات',
    colorEn: 'Burgundy Red',
    colorAr: 'عنابي ملكي',
    thumbnail: '/images/dw-c-redc.jpg',
    gallery: [
      '/images/dw-c-reda.jpg',
      '/images/dw-c-redb.jpg',
      '/images/dw-c-redc.jpg',
      '/images/dw-c-redd.jpg',
      '/images/dw-c-rede.jpg',
    ],
    tagEn: 'Sister Duo',
    tagAr: 'طقم متطابق',
  },
  {
    id: 'DW-JR-06',
    slug: 'ivory-petal-butterfly-dress',
    nameEn: 'Ivory Petal & Butterfly Flared Mini Dress',
    nameAr: 'فستان البتلات العاجي المنفوش للصغيرات',
    category: 'Junior',
    categoryLabelEn: 'Flower Girl',
    categoryLabelAr: 'وصيفات العروس',
    colorEn: 'Ivory White',
    colorAr: 'أبيض عاجي',
    thumbnail: '/images/dw-c-whiteb.jpg',
    gallery: [
      '/images/dw-c-whitea.jpg',
      '/images/dw-c-whiteb.jpg',
      '/images/dw-c-whitec.jpg',
      '/images/dw-c-whited.jpg',
      '/images/dw-c-whitef.jpg',
      '/images/dw-c-whiteg.jpg',
      '/images/dw-c-whiteh.jpg',
      '/images/dw-c-whitei.jpg',
      '/images/dw-c-whitej.jpg',
    ],
    tagEn: 'Flower Girl',
    tagAr: 'فساتين أعراس للصغيرات',
  },
];