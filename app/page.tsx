import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import AtelierSection from '@/components/AtelierSection';
import ProductModal from '@/components/ProductModal';
import CartDrawer from '@/components/CartDrawer';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FBF9F5]">
      <Header />
      <Hero />
      <ProductGrid />
      <AtelierSection />
      <ProductModal />
      <CartDrawer />
      <BookingModal />
      <Footer />
    </main>
  );
}