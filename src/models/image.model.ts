export interface BreakpointImage {
  breakpoint: number;
  '1x': string;
  '2x': string;
}

export type ResponsiveImage = BreakpointImage[];
