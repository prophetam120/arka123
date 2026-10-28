export type NavItem = {
  href: string;
  label: string;
};

export type SpaceGalleryItem = {
  src: string;
  alt: string;
  mode: "empty" | "filled";
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  priceFrom: number;
};

export type TariffItem = {
  id: string;
  name: string;
  hours: string;
  price: number;
  features: string[];
  highlighted?: boolean;
};

export type ReviewItem = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

export type GalleryItem = {
  src: string;
  alt: string;
};
