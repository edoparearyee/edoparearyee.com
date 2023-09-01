/* eslint-disable @next/next/no-page-custom-font */
import { Metadata } from 'next';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import '../styles/globals.scss';

export const metadata: Metadata = {
  title:
    'Ed Opare-Aryee | Technical Lead, Technical Architect and Lead Full Stack Developer',
  description:
    'Ed Opare-Aryee is a Technical Lead, Technical Architect and Lead Full Stack Developer with over 11 years of commercial experience architecting and building web/mobile applications.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#12e1b9" />
        <meta name="msapplication-TileColor" content="#12e1b9" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
