// app/page.tsx
'use client';

import React, { useState } from 'react';
import EditorialScrollExperience from '@/components/EditorialScrollExperience';
import CollectionsSection from '@/components/CollectionsSection';
import AtelierAndReviewsSection from '@/components/AtelierAndReviewsSection';
import VIPAppointmentModal from '@/components/VIPAppointmentModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGown, setSelectedGown] = useState<string | undefined>(undefined);

  return (
    <main className="min-h-screen bg-white">
      <EditorialScrollExperience onOpenBooking={() => setIsModalOpen(true)} />
      <CollectionsSection onSelectGown={(title) => { setSelectedGown(title); setIsModalOpen(true); }} />
      <AtelierAndReviewsSection />
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedGown={selectedGown}
      />
    </main>
  );
}