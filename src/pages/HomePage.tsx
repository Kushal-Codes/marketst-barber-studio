import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { BrandInterlude } from '../components/sections/BrandInterlude';
import { ServicesSection } from '../components/sections/ServicesSection';
import { StyleAdvisorSection } from '../components/sections/StyleAdvisorSection';
import { GallerySection } from '../components/sections/GallerySection';
import { AboutStorySection } from '../components/sections/AboutStorySection';
import { ChinatownVisitPlanner } from '../components/sections/ChinatownVisitPlanner';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { LocationContactSection } from '../components/sections/LocationContactSection';
import { Footer } from '../components/layout/Footer';
import { StickyBookingBar } from '../components/layout/StickyBookingBar';
import { BookingModal } from '../components/services/BookingModal';
import { ScrollProgress } from '../components/animations/ScrollProgress';
import { ServiceItem } from '../data/services';

export const HomePage: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-body selection:bg-purple-electric selection:text-white">
      {/* Scroll depth reading progress bar */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Editorial Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with animated Barber Pole & live Manchester clock */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Animated Brand Marquee Interlude */}
        <BrandInterlude />

        {/* 3. Signature Services, Progressive Load More & Bespoke Bundle Builder */}
        <ServicesSection onOpenBooking={(svc) => handleOpenBooking(svc)} />

        {/* 4. Interactive Style & Cut Advisor (Face Shape & Hair Texture Quiz) */}
        <StyleAdvisorSection onOpenBooking={(svc) => handleOpenBooking(svc)} />

        {/* 5. Curated Real Work Portfolio Gallery */}
        <GallerySection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. The Space & Master Barber Efi Brand Story */}
        <AboutStorySection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Chinatown Visit Planner (Walking Times, Parking & Busyness Guide) */}
        <ChinatownVisitPlanner onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Verified Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* 9. Frequently Asked Questions Accordion */}
        <FAQSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Location, Contact & Live Business Information */}
        <LocationContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Booking Bar */}
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Telephone Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
};
