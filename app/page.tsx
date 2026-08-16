// app/page.tsx
'use client';

import React, { useState } from 'react';

// DW Boutique // Arwa Alfallaj - Atelier Components
// Note: Ensure all component files (.tsx) are created in the '/components/' directory
// and that required image assets exist in the '/public/images/' directory.

import BrandIntroLoader from '@/components/BrandIntroLoader';
import EditorialScrollExperience from '@/components/EditorialScrollExperience';
import ShopEntranceExperience from '@/components/ShopEntranceExperience';
import CollectionsSection from '@/components/CollectionsSection';
import AtelierAndReviewsSection from '@/components/AtelierAndReviewsSection';
import VIPAppointmentModal from '@/components/VIPAppointmentModal';

/**
 * Main HomePage Component for DW Boutique Atelier.
 * Stitches together the immersive single-page scroll experience.
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
        Displays immediately upon page load to mask asset hydration.
        Includes logo, "Designed by Arwa Alfallaj", and curtain-lift exit.
      */}
      <BrandIntroLoader />

      {/* 
        2. EDITORIAL SCROLL HERO (4-Stages)
        Cinematic motion typography and high-fashion editorial drapes.
        Passes the booking trigger to the 'VIP Fitting' header button.
      */}
      <EditorialScrollExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 
        3. 3D WALK-IN SHOP ENTRANCE WALKTHROUGH
        Uses the provided shop image. As the user scrolls, the camera zooms, 
        drapes part, and 3D glass doors swing open to reveal the atelier interior.
      */}
      <ShopEntranceExperience />

      {/* 
        4. COLLECTIONS & SILHOUETTE ARCHIVE
        Interactive grid of couture gowns with multi-angle gallery views.
        Passing onSelectGown updates the modal state before opening it.
      */}
      <CollectionsSection onSelectGown={(title) => handleOpenBooking(title)} />

      {/* 
        5. REVIEWS, LOCATION, VIP BANNER & FOOTER
        Includes Google Reviews from brides, showroom location map link, 
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