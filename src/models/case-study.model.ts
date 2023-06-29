import { ResponsiveImageWithAltText } from './image.model';

export interface CaseStudy {
  slug: string;
  title: string;
  blurb: string;
  role: string;
  year: string;
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
