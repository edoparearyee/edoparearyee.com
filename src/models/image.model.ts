export interface BreakpointImage {
  breakpoint: number;
  '1x': string;
  '2x': string;
}

export type ResponsiveImage = BreakpointImage[];

export interface ResponsiveImageWithAltText {
  image: ResponsiveImage;
  alt: string;
}
