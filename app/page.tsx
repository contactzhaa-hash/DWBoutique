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
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      {/* Editorial Brand Intro */}
      <BrandIntroLoader />

       {/* 3D Walk-in Shop Front Entrance - Faster and simplfied walkthrough portal */}
      <ShopEntranceExperience onOpenBooking={() => handleOpenBooking()} />


      {/* Hero 4-Stage Interior Explore - picks up handoff immediately */}
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />

     
      {/* Archive Collections */}
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />

      {/* Reviews, Location & VIP Banner */}
      <AtelierAndReviewsSection onOpenBooking={() => handleOpenBooking()} />

      {/* VIP Fitting Modal */}
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedGown={selectedGown}
      />
    </main>
  );
}