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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
