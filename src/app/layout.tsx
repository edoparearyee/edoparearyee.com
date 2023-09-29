/* eslint-disable @next/next/no-page-custom-font */
import { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ModalProvider } from '@/components/ModalProvider/ModalProvider';

import '../styles/globals.scss';

const description =
  'Ed Opare-Aryee is a Technical Lead, Technical Architect and Lead Full Stack Developer with over 11 years of commercial experience architecting and building web and mobile applications.';
const siteName = 'Ed Opare-Aryee';
const title = 'Ed Opare-Aryee';
const twitterHandle = '@edoparearyee';
const url = 'https://edoparearyee.com';

export const metadata: Metadata = {
  title,
  description: description,
  openGraph: {
    title,
    type: 'website',
    url,
    description,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    site: twitterHandle,
    description,
    creator: twitterHandle,
  },
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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
