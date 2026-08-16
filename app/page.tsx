// app/page.tsx
'use client';

import React, { useState } from 'react';
import EditorialScrollExperience from '@/components/EditorialScrollExperience';
import CollectionsSection from '@/components/CollectionsSection';
import VIPAppointmentModal from '@/components/VIPAppointmentModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGown, setSelectedGown] = useState<string | undefined>(undefined);

  const handleOpenBooking = (gownName?: string) => {
    setSelectedGown(gownName);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedGown={selectedGown}
      />
    </main>
  );
}