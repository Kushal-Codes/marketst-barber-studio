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
    id: "hero-fade",
    imageSrc: "/images/real/marketst_hero.jpg",
    title: "Signature Sharp Skin Fade",
    category: "Skin Fade",
    provenance: "Verified Market St. Instagram Showcase",
    description: "Flawless gradient transition down to clean skin with textured crop on top, photographed in the Droylsden studio chair."
  },
  {
    id: "drop-fade-1",
    imageSrc: "/images/real/marketst_cut_0_0.jpg",
    title: "Precision Temple & Neck Taper",
    category: "Modern Cut",
    provenance: "Verified Market St. Instagram Showcase",
    description: "Surgical razor lining around hairline with high taper blend and tailored scissor styling."
  },
  {
    id: "beard-sculpt-1",
    imageSrc: "/images/real/marketst_cut_1_0.jpg",
    title: "Crisp Beard Sculpt & Line Up",
    category: "Beard Grooming",
    provenance: "Verified Market St. Instagram Showcase",
    description: "Sharp straight-razor cheek line, graduated jaw fade, and defined chin profile."
  },
  {
    id: "studio-chair",
    imageSrc: "/images/real/fb_img_0.jpg",
    title: "Market St. Studio Station",
    category: "Studio Atmosphere",
    provenance: "Official Studio Showcase",
    description: "Clean, welcoming barber chairs on 92 Market Street in Droylsden with modern lighting and professional clipper setups."
  }
];
