import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { GallerySection } from './components/sections/GallerySection';
import { LocationSection } from './components/sections/LocationSection';
import { Footer } from './components/layout/Footer';
import { StickyMobileBar } from './components/layout/StickyMobileBar';
import { BookingModal } from './components/layout/BookingModal';
import { BarberService, servicesData } from './data/services';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<BarberService | null>(null);

  const handleOpenBooking = () => {
    setSelectedService(servicesData[0]);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: BarberService) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <ServicesSection onSelectService={handleSelectService} />
        <GallerySection />
        <LocationSection onOpenBooking={handleOpenBooking} />
      </main>

      <Footer />
      <StickyMobileBar onOpenBooking={handleOpenBooking} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
