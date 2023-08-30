import { Metadata } from 'next';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Ed Opare-Aryee',
  description:
    'Ed Opare-Aryee is a Technical Lead and Lead Full Stack Developer with over 11 years of commercial experience architecting and building web/mobile applications.',
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
