// app/page.tsx
'use client';

import React, { useState } from 'react';

// DW Boutique // Arwa Alfallaj - Atelier Components
// Immersive single-page architectural walkthrough.

import BrandIntroLoader from '@/components/BrandIntroLoader';
import ShopEntranceExperience from '@/components/ShopEntranceExperience'; // (Walk-in portal now second)
import EditorialScrollExperience from '@/components/EditorialScrollExperience'; // (High-fashion showroom now third)
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
        Includes logo, "Designed by Arwa Alfallaj", and curtain-lift exit.
      */}
      <BrandIntroLoader />

      {/* 
        2. 3D SHOP ENTRANCE walkthrough (Exterior -> Interior Foyer)
        Uses the shop image. Directly follows the loader exit.
        User scrolls to zoom in, doors swing open in 3D perspective.
      */}
      <ShopEntranceExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 
        3. HIGH-FASHION EDITORIAL SHOWROOM (4-Stages)
        Cinematic interior explore featuring Architectural drapes and high-fashion gowns.
        Picks up immediately after the entrance "bloom" walkthrough completes.
        Passes booking trigger to the 'VIP Fitting' header button.
      */}
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 
        4. COLLECTIONS & SILHOUETTE ARCHIVE
        Interactive grid of couture gowns with multi-angle gallery views.
        Updating selectedProduct state in HomePage when gown is clicked.
      */}
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />

      {/* 
        5. REVIEWS, LOCATION, VIP CTA BANNER & FOOTER
        Includes Google Reviews, showroom location map link, 
        and the final "Book a VIP Fitting Session" black banner CTA.
      */}
      <AtelierAndReviewsSection onOpenBooking={() => handleOpenBooking()} />

      {/* 
        6. VIP APPOINTMENT BOOKING MODAL (Overlay)
        Conditional rendering based on state. Submits requests via WhatsApp dispatch.
      */}
      <VIPAppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedGown={selectedGown}
      />
    </main>
  );
}