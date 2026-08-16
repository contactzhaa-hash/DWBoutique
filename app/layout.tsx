import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';
import LenisProvider from '@/components/LenisProvider';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'DW Designer Wardrobe | Haute Couture & Evening Atelier',
  description: 'Bespoke evening gowns, couture collections, and private salon fittings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-[#FBF9F5] text-[#111111] antialiased selection:bg-[#C5A059] selection:text-white font-sans">
        <LenisProvider>
          <ShopProvider>{children}</ShopProvider>
        </LenisProvider>
      </body>
    </html>
  );
}