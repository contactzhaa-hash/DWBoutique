import { Product, Currency } from '@/types';

export const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string; code: Currency }> = {
  USD: { rate: 1, symbol: '$', code: 'USD' },
  SAR: { rate: 3.75, symbol: 'SAR ', code: 'SAR' },
  EUR: { rate: 0.92, symbol: '€', code: 'EUR' },
};

export const PRODUCTS: Product[] = [
  {
    id: 'dw-01',
    sku: 'DW-COUT-801',
    name: 'Aurelia Sculpted Mikado Gown',
    category: 'Evening Gowns',
    priceUSD: 3450,
    description: 'Structured architectural column gown tailored from heavy silk mikado, featuring a hand-pleated asymmetric neckline and trailing watteau train.',
    details: ['100% Silk Mikado', 'Internal corset with boning', 'Concealed back zip', 'Dry clean only'],
    fabric: 'Silk Mikado & French Organza',
    primaryImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['US 2', 'US 4', 'US 6', 'US 8', 'US 10', 'Bespoke'],
  },
  {
    id: 'dw-02',
    sku: 'DW-EVN-802',
    name: 'Obsidian Velvet Draped Column',
    category: 'Evening Gowns',
    priceUSD: 2890,
    description: 'Floor-skimming Italian velvet gown with an off-shoulder cowl neckline and delicate gold-thread embroidery along the split hem.',
    details: ['Italian Silk Velvet', 'Silk charmeuse lining', 'Side slit with gold picot edge', 'Specialist dry clean'],
    fabric: 'Italian Silk Velvet',
    primaryImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['US 2', 'US 4', 'US 6', 'US 8', 'US 10', 'US 12'],
  },
  {
    id: 'dw-03',
    sku: 'DW-BRD-803',
    name: 'Seraphina Crystalline Tulle Robe',
    category: 'Bridal',
    priceUSD: 4900,
    description: 'Ethereal multi-layered bridal robe hand-embellished with tonal glass crystals and micro-pearls over chantilly lace foundation.',
    details: ['Chantilly Lace & Illusion Tulle', 'Hand-applied crystal clusters', 'Detachable cathedral cape', 'Includes garment preservation box'],
    fabric: 'French Tulle & Chantilly Lace',
    primaryImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['US 2', 'US 4', 'US 6', 'US 8', 'Bespoke'],
  },
  {
    id: 'dw-04',
    sku: 'DW-CKT-804',
    name: 'Elysian Crepe Tuxedo Midi',
    category: 'Cocktail',
    priceUSD: 1950,
    description: 'Double-breasted tailored tuxedo midi with peak satin lapels, covered buttons, and an open back accent.',
    details: ['Heavy Wool-Silk Crepe', 'Satin lapel contrast', 'Tailored shoulder pads', 'Handmade buttonholes'],
    fabric: 'Wool-Silk Crepe',
    primaryImage: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['US 2', 'US 4', 'US 6', 'US 8', 'US 10'],
  },
  {
    id: 'dw-05',
    sku: 'DW-COUT-805',
    name: 'Helios Liquid Gold Lamé Silhouette',
    category: 'Couture',
    priceUSD: 5200,
    description: 'One-of-a-kind draped goddess gown made from liquid metallic lamé that flows like molten gold. Features an open back and gathered halter collar.',
    details: ['Bespoke Metallic Lamé', 'Weighted hem for fluidity', 'Made to measure only', 'Hand-stitched in Riyadh Atelier'],
    fabric: 'Gold Lamé & Silk Chiffon',
    primaryImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['Bespoke'],
  },
  {
    id: 'dw-06',
    sku: 'DW-EVN-806',
    name: 'Nocturne Tiered Pleat Gown',
    category: 'Evening Gowns',
    priceUSD: 3100,
    description: 'Precision sunburst-pleated organza layered in descending tiers, creating striking kinetic volume with every step.',
    details: ['Permanent sunburst pleating', 'Crino-lined horsehair hem', 'Sleeveless deep-V back', 'Concealed side zip'],
    fabric: 'Silk Organza',
    primaryImage: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['US 2', 'US 4', 'US 6', 'US 8', 'US 10'],
  },
];