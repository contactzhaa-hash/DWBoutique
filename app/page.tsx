// app/page.tsx
'use client';

import React, { useState } from 'react';
import BrandIntroLoader from '@/components/BrandIntroLoader';
import ShopEntranceExperience from '@/components/ShopEntranceExperience';
import EditorialScrollExperience from '@/components/EditorialScrollExperience';
import CollectionsSection from '@/components/CollectionsSection';
import AtelierAndReviewsSection from '@/components/AtelierAndReviewsSection';
import VIPAppointmentModal from '@/components/VIPAppointmentModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGown, setSelectedGown] = useState<string>('');

  const handleOpenBooking = (gownTitle?: string) => {
    if (gownTitle) {
      setSelectedGown(gownTitle);
    } else {
      setSelectedGown('');
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#1A1A1A]">
      {/* 1. Brand Logo Loader with Designer Attribution */}
      <BrandIntroLoader />

      {/* 2. Initial Phase: 3D Facade Walkthrough & Door Swing */}
      <ShopEntranceExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 3. Interior Showroom: 4-Stage Editorial Showcase */}
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Product Archive & Interactive Multi-Angle Gallery */}
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />

      {/* 5. Atelier Reviews, Map Location & VIP CTA Banner */}
      <AtelierAndReviewsSection onOpenBooking={() => handleOpenBooking()} />

      {/* 6. VIP Booking Modal */}
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedGown={selectedGown}
      />
    </main>
  );
}