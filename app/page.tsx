// app/page.tsx
'use client';

import React, { useState } from 'react';
import BrandIntroLoader from '@/components/BrandIntroLoader';
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
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      {/* 1. Brand Intro Reveal Curtain */}
      <BrandIntroLoader />

      {/* 2. 4-Stage Editorial Showcase (Emerald, Black Silhouette, Bodice/Mist, Gold) */}
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 3. Product Archive & Multi-Angle Gown Gallery */}
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />

      {/* 4. Atelier Reviews, Map Location & VIP Banner */}
      <AtelierAndReviewsSection onOpenBooking={() => handleOpenBooking()} />

      {/* 5. Booking Modal (WhatsApp Dispatch) */}
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedGown={selectedGown}
      />
    </main>
  );
}