export type Currency = 'USD' | 'SAR' | 'EUR';
export type Language = 'en' | 'ar';

export interface Product {
  id: string;
  sku: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  priceUSD: number;
  description: string;
  descriptionAr: string;
  details: string[];
  detailsAr: string[];
  fabric: string;
  fabricAr: string;
  primaryImage: string;
  secondaryImage: string;
  gallery: string[];
  sizes: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}