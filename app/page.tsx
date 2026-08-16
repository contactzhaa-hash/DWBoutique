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
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      {/* Editorial Brand Intro Screen */}
      <BrandIntroLoader />

      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />
      <AtelierAndReviewsSection onOpenBooking={() => handleOpenBooking()} />
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedGown={selectedGown}
      />
    </main>
  );
}