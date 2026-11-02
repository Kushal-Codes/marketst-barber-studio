export interface GalleryItem {
  id: string;
  imageSrc: string;
  title: string;
  category: string;
  provenance: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "hero-cut",
    imageSrc: "/images/real/real_cut_hero.jpg",
    title: "Sharp Skin Fade & Textured Crop",
    category: "Skin Fade",
    provenance: "Droylsden Studio Chair",
    description: "Surgical blend down to the skin with sharp perimeter lineup and textured volume on top, styled with premium matte clay."
  },
  {
    id: "cut-1",
    imageSrc: "/images/real/real_cut_1.jpg",
    title: "Precision Razor Taper & Neck Clean",
    category: "Modern Fade",
    provenance: "Droylsden Studio Chair",
    description: "Low skin taper with clean straight-edge razor alignment around the ears and neck."
  },
  {
    id: "cut-2",
    imageSrc: "/images/real/real_cut_2.jpg",
    title: "Beard Sculpt & Hot Towel Treatment",
    category: "Beard Grooming",
    provenance: "Droylsden Studio Chair",
    description: "Crisp cheek lines, graduated jaw fade, and nourishing beard oil finish."
  },
  {
    id: "cut-3",
    imageSrc: "/images/real/real_cut_3.jpg",
    title: "Gentleman's Taper & Scissor Blend",
    category: "Gents Cut",
    provenance: "Droylsden Studio Chair",
    description: "Classic scissor-over-comb texturizing tailored to the client's natural flow and head structure."
  },
  {
    id: "cut-4",
    imageSrc: "/images/real/real_cut_4.jpg",
    title: "Sharp Temple Line Up & Side Parting",
    category: "Styled Cut",
    provenance: "Droylsden Studio Chair",
    description: "Crisp angular shape-up with clean side parting and pomade hold."
  },
  {
    id: "cut-5",
    imageSrc: "/images/real/real_cut_5.jpg",
    title: "Junior Skin Fade & Hairline Detailing",
    category: "Junior Styling",
    provenance: "Droylsden Studio Chair",
    description: "Patient, stylish haircut and skin fade for younger clients with sharp edge lines."
  }
];
