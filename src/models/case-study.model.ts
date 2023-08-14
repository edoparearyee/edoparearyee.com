import { ResponsiveImageWithAltText } from './image.model';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  clientName: string;
  hero: ResponsiveImageWithAltText;
  imagesMobile: ResponsiveImageWithAltText[];
  imagesDesktop: ResponsiveImageWithAltText[];
  videoUrl?: string;
  tags?: string[];
  contributors?: string[];
  awards?: Award[];
}

interface Award {
  title: string;
  year: string;
  url: string;
}
