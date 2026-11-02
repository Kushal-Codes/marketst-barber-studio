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
    title: "Signature Clean Skin Fade & Textured Crop",
    category: "Skin Fade",
    provenance: "Verified Facebook Showcase",
    description: "Surgical blend down to the skin with sharp perimeter lineup and textured volume on top, photographed in the Droylsden studio chair."
  },
  {
    id: "cut-1",
    imageSrc: "/images/real/real_cut_1.jpg",
    title: "Precision Razor Taper & Neck Clean",
    category: "Modern Fade",
    provenance: "Official Facebook Timeline Post",
    description: "Low skin taper with crisp straight-edge alignment around ears and neck."
  },
  {
    id: "cut-2",
    imageSrc: "/images/real/real_cut_2.jpg",
    title: "Full Beard Sculpt & Hot Towel Finish",
    category: "Beard Grooming",
    provenance: "Official Facebook Timeline Post",
    description: "Sharpened cheek lines, graduated jaw fade, and nourishing beard oil finish."
  },
  {
    id: "cut-3",
    imageSrc: "/images/real/real_cut_3.jpg",
    title: "Classic Gentleman Taper & Scissor Blend",
    category: "Gents Cut",
    provenance: "Official Facebook Timeline Post",
    description: "Scissor-over-comb texturizing tailored to the client's natural flow and head structure."
  },
  {
    id: "cut-4",
    imageSrc: "/images/real/real_cut_4.jpg",
    title: "Sharp Temple Line Up & Comb Over",
    category: "Styled Cut",
    provenance: "Official Facebook Timeline Post",
    description: "Crisp angular shape-up with clean side parting and matte pomade hold."
  },
  {
    id: "cut-5",
    imageSrc: "/images/real/real_cut_5.jpg",
    title: "Junior Skin Fade & Hairline Detailing",
    category: "Junior Styling",
    provenance: "Official Facebook Timeline Post",
    description: "Comfortable, patient styling for younger clients with sharp edge lines."
  }
];
