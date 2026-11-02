export interface BarberService {
  id: string;
  name: string;
  category: 'Cuts & Fades' | 'Beard & Shave' | 'Combos & VIP';
  durationMinutes: number;
  durationLabel: string;
  priceGBP: number;
  description: string;
  inclusions: string[];
  popular?: boolean;
}

export const servicesData: BarberService[] = [
  {
    id: "skin-fade",
    name: "Skin Fade",
    category: "Cuts & Fades",
    durationMinutes: 25,
    durationLabel: "25 mins",
    priceGBP: 15.00,
    description: "Flawless skin fade down to zero using foil shavers, master clippers, and custom shear texturizing on top.",
    inclusions: ["Zero foil graduation", "Precision neck taper", "Matte paste or pomade styling"],
    popular: true
  },
  {
    id: "gents-haircut",
    name: "Gents Haircut",
    category: "Cuts & Fades",
    durationMinutes: 20,
    durationLabel: "20 mins",
    priceGBP: 13.00,
    description: "Classic scissor and clipper cut tailored to your head shape, lifestyle, and natural hairline.",
    inclusions: ["Clipper & scissor blend", "Clean perimeter lines", "Tonic spray finish"],
    popular: false
  },
  {
    id: "kids-skin-fade",
    name: "Kids Haircut Skin Fade (Under 12)",
    category: "Cuts & Fades",
    durationMinutes: 25,
    durationLabel: "25 mins",
    priceGBP: 12.00,
    description: "Patient, stylish low or mid fade for children and juniors with comfortable chair treatment.",
    inclusions: ["Gentle clipper work", "Sharp shape up", "Kid-safe styling spray"],
    popular: false
  },
  {
    id: "senior-haircut",
    name: "Senior Haircut",
    category: "Cuts & Fades",
    durationMinutes: 15,
    durationLabel: "15 mins",
    priceGBP: 10.00,
    description: "Distinguished traditional gentleman haircut for seniors with eyebrow and ear trim.",
    inclusions: ["Scissor over comb", "Neck clean", "Eyebrow & ear groom"],
    popular: false
  },
  {
    id: "beard-hot-towel",
    name: "Beard, Hot Towel & Shave",
    category: "Beard & Shave",
    durationMinutes: 20,
    durationLabel: "20 mins",
    priceGBP: 13.00,
    description: "Relaxing steaming hot towel treatment with eucalyptus balm, straight-edge blade detailing, and beard oil.",
    inclusions: ["Steamed towel wrap", "Straight razor edge definition", "Deep nourishing beard oil"],
    popular: true
  },
  {
    id: "beard-and-head-shave",
    name: "Beard Shave & Head Shave",
    category: "Beard & Shave",
    durationMinutes: 45,
    durationLabel: "45 mins",
    priceGBP: 28.00,
    description: "Full double hot towel treatment covering complete head shave and precision beard sculpt.",
    inclusions: ["Dual steaming towels", "Smooth razor scalp shave", "Beard alignment & soothing aftershave balm"],
    popular: false
  },
  {
    id: "cut-and-beard",
    name: "Gents Haircut & Beard Trim/Shape up",
    category: "Combos & VIP",
    durationMinutes: 40,
    durationLabel: "40 mins",
    priceGBP: 25.00,
    description: "Complete grooming combo pairing a classic cut with razor-sharp beard grooming and shape-up.",
    inclusions: ["Full hair cut & style", "Beard trim & cheek fade", "Hot towel razor perimeter"],
    popular: false
  },
  {
    id: "fade-and-beard",
    name: "Gents Skin Fade & Beard Trim/Shape up",
    category: "Combos & VIP",
    durationMinutes: 45,
    durationLabel: "45 mins",
    priceGBP: 28.00,
    description: "Our signature and most booked service: surgical skin fade on head seamlessly blended into sharp beard taper.",
    inclusions: ["Zero-gap skin fade", "Beard sculpt & razor edge", "Hot towel finish & premium styling"],
    popular: true
  },
  {
    id: "full-service-vip",
    name: "Full Service (VIP Overhaul)",
    category: "Combos & VIP",
    durationMinutes: 55,
    durationLabel: "55 mins",
    priceGBP: 40.00,
    description: "The ultimate Droylsden barber experience. Total skin fade, luxury hot towel beard sculpt, hair wash, facial massage & ear flame.",
    inclusions: ["Signature Skin Fade", "Steamed Hot Towel Shave", "Invigorating Scalp & Face Massage", "Luxury Cologne & Oil Finish"],
    popular: true
  }
];
