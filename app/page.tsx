// app/page.tsx
'use client';

import React, { useState } from 'react';

// DW Boutique // Arwa Alfallaj - Atelier Immersive Walkthrough Single-Page App

import BrandIntroLoader from '@/components/BrandIntroLoader';
import EditorialScrollExperience from '@/components/EditorialScrollExperience'; // Interior explore - now stabilized
import ShopEntranceExperience from '@/components/ShopEntranceExperience'; // 3D walk-in - now faster & simplified portal
import CollectionsSection from '@/components/CollectionsSection';
import AtelierAndReviewsSection from '@/components/AtelierAndReviewsSection';
import VIPAppointmentModal from '@/components/VIPAppointmentModal';

/**
 * HomePage Component for DW Boutique Atelier.
 * Defines the cinematic, scroll-driven physical journey.
 */
export default function HomePage() {
  // State management for the VIP Booking Modal and selected gown reference
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGown, setSelectedGown] = useState<string>('');

  /**
   * Opens the booking modal, optionally referencing a specific gown.
   * @param gownTitle - The English name of the gown selected.
   */
  const handleOpenBooking = (gownTitle?: string) => {
    if (gownTitle) {
      setSelectedGown(gownTitle);
    } else {
      setSelectedGown(''); // Clear selection if opening from a general CTA
    }
    setIsModalOpen(true);
  };

  /**
   * Closes the booking modal.
   */
  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      
      {/* 
        1. LUXURY BRAND INTRO SCREEN (Loader)
        Displays upon page load to mask asset hydration.
        Curtain-lift exit.
      */}
      <BrandIntroLoader />

      {/* 
        2. HERO SHOWROOM & HIGH-FASHION EXPLORE (Interior)
        Now Stabilized: This section arrives and immediately fades in the 
        static "Welcome to the Atelier" brand identity text overlaid over incoming drapes.
        Eliminates jumpiness, negative space and provides direct value for the identity.
      */}
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 
        3. 3D SHOP ENTRANCE walkthough (Simplified Portal)
        Uses the provided shop image. Fast, simplified walk-in zoom, parting drapes, 
        swinging 3D doors opening into a DEEP BLACK VOID to ensure next section arrival is smooth.
        ZERO text overlay on doors for perfect walkthrough clarity.
      */}
      <ShopEntranceExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 
        4. COLLECTIONS & SILHOUETTE ARCHIVE
      */}
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />

      {/* 
        5. REVIEWS, LOCATION, VIP CTA BANNER & FOOTER
      */}
      <AtelierAndReviewsSection onOpenBooking={() => handleOpenBooking()} />

      {/* 
        6. VIP APPOINTMENT BOOKING MODAL (Overlay)
      */}
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedGown={selectedGown}
      />
    </main>
  );
}