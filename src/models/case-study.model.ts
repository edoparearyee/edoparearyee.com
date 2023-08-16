import { ResponsiveImageWithAltText } from './image.model';

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  client: Client;
  hero: ResponsiveImageWithAltText;
  imagesMobile: ResponsiveImageWithAltText[];
  imagesDesktop: ResponsiveImageWithAltText[];
  video?: Video;
  tags?: string[];
  contributors?: string[];
  awards?: Award[];
}

interface Client {
  name: string;
  logoDarkUrl: string;
  logoLightUrl: string;
}

interface Video {
  url: string;
  poster: ResponsiveImageWithAltText;
}

interface Award {
  title: string;
  year: string;
  url: string;
}
