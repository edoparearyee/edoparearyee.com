import { Metadata } from 'next';

import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Edward Opare-Aryee',
  description:
    'The Portfolio for Edward Opare-Aryee. Technical Lead, Technical Architect and Lead Full Stack Developer',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
