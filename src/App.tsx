import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MarqueeTicker } from './components/animations/MarqueeTicker';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CoverInterlude } from './components/sections/CoverInterlude';
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
    <div className="min-h-screen bg-canvas text-ink font-body selection:bg-purple-electric selection:text-white">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <MarqueeTicker />
        <ServicesSection onSelectService={handleSelectService} />
        <CoverInterlude onOpenBooking={handleOpenBooking} />
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
