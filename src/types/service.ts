// types/service.ts

export type ServiceCategory = 'alkes' | 'kantor' | 'komersial';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  type?: 'before' | 'after' | 'process' | 'result';
}

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  gallery: GalleryItem[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  image: string; // main image for the service page
  imageAlt: string; // alt text for the main image
  heroImagePrompt?: string; // for AI image generation
}

export interface ServiceCategory_Data {
  id: ServiceCategory;
  label: string;
  icon: string;
  description: string;
  serviceCount: number;
  slugs: string[];
}

export interface CategoryPageData {
  id: ServiceCategory;
  label: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  customServiceTitle: string;
  customServiceDescription: string;
}
