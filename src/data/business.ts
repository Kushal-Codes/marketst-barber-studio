export interface BusinessData {
  name: string;
  brandTagline: string;
  established: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    postcode: string;
    fullAddress: string;
    googleMapsDirectionsUrl: string;
    googleMapsSearchUrl: string;
  };
  phone: {
    display: string;
    international: string;
    telLink: string;
  };
  email: {
    address: string;
    mailtoLink: string;
  };
  hours: Array<{
    days: string;
    hours: string;
    isOpenToday: boolean;
  }>;
  booking: {
    primaryPlatform: string;
    primaryUrl: string;
    squareUrl: string;
    whatsappUrl: string;
    actionLabel: string;
  };
  social: {
    instagram: string;
    facebook: string;
    instagramHandle: string;
  };
  keyPillars: Array<{
    title: string;
    description: string;
    highlight: string;
  }>;
}

export const businessData: BusinessData = {
  name: "Market St. Barber Studio",
  brandTagline: "Precision Cuts. Modern Fades. Droylsden Craftsmanship.",
  established: "Droylsden, Manchester",
  address: {
    street: "92 Market Street",
    neighborhood: "Droylsden",
    city: "Manchester",
    postcode: "M43 6DE",
    fullAddress: "92 Market Street, Droylsden, Manchester M43 6DE, United Kingdom",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Market+St.+Barber+Studio+92+Market+Street+Droylsden+Manchester+M43+6DE",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Market+St.+Barber+Studio+Droylsden"
  },
  phone: {
    display: "07591 287327",
    international: "+44 7591 287327",
    telLink: "tel:+447591287327"
  },
  email: {
    address: "marketstbarberstudio@gmail.com",
    mailtoLink: "mailto:marketstbarberstudio@gmail.com?subject=Barber%20Appointment%20Enquiry%20-%20Market%20St.%20Barber%20Studio"
  },
  hours: [
    { days: "Monday", hours: "9:00 AM – 6:00 PM", isOpenToday: true },
    { days: "Tuesday", hours: "Closed (Studio Reset)", isOpenToday: false },
    { days: "Wednesday – Saturday", hours: "9:00 AM – 6:00 PM", isOpenToday: true },
    { days: "Sunday", hours: "10:00 AM – 4:00 PM", isOpenToday: true }
  ],
  booking: {
    primaryPlatform: "Square Appointments & WhatsApp Direct",
    primaryUrl: "https://market-st-barber-studio.square.site/",
    squareUrl: "https://market-st-barber-studio.square.site/",
    whatsappUrl: "https://wa.me/447591287327?text=Hi%2C%20I'd%20like%20to%20book%20a%20haircut%20at%20Market%20St.%20Barber%20Studio!",
    actionLabel: "Book Appointment"
  },
  social: {
    instagram: "https://www.instagram.com/marketstbarberstudio/",
    facebook: "https://www.facebook.com/people/Market-St-Barber-Studio/61556942953246/",
    instagramHandle: "@marketstbarberstudio"
  },
  keyPillars: [
    {
      title: "Master Sharp Fades",
      description: "Low, mid, high, and skin tapers sculpted to millimeter precision with surgical clippers and foil shavers.",
      highlight: "Precision Craft"
    },
    {
      title: "Hot Towel & Straight Razor",
      description: "Traditional Turkish & British hot towel lather treatment with hand-honed blade razor lines.",
      highlight: "Pure Luxury"
    },
    {
      title: "Zero Monthly Fees Guarantee",
      description: "Direct online booking without Square lock-in or third-party client booking surcharges.",
      highlight: "Direct Booking"
    }
  ]
};

export function getStudioStatus(): { isOpen: boolean; statusText: string; subText: string } {
  const now = new Date();
  const ukHour = (now.getUTCHours() + 0) % 24; // GMT / BST approximation
  const day = now.getUTCDay(); // 0 is Sunday, 2 is Tuesday

  if (day === 2) {
    return {
      isOpen: false,
      statusText: "Closed Today (Studio Reset)",
      subText: "Re-opens Wednesday at 9:00 AM · Booking Open Online"
    };
  }

  if (day === 0) { // Sunday 10am - 4pm
    if (ukHour >= 10 && ukHour < 16) {
      return {
        isOpen: true,
        statusText: "Chairs Open Now in Droylsden",
        subText: "Walk-ins Welcome & Online Slots Available"
      };
    }
    return {
      isOpen: false,
      statusText: "Closed for the Evening",
      subText: "Sunday hours: 10:00 AM – 4:00 PM"
    };
  }

  // Mon, Wed, Thu, Fri, Sat: 9am - 6pm
  if (ukHour >= 9 && ukHour < 18) {
    return {
      isOpen: true,
      statusText: "Chairs Open Now in Droylsden",
      subText: "Accepting Walk-ins & Direct Bookings · Closes 6:00 PM"
    };
  }

  return {
    isOpen: false,
    statusText: "Closed for the Evening",
    subText: "Opens 9:00 AM Tomorrow · Instant Booking Available"
  };
}
