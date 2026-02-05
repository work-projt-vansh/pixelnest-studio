import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import PageTransition from './components/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  metadataBase: new URL('https://pixelnest.studio'),
  title: 'PixelNest Studio | Premium UI/UX & SaaS Product Agency',
  description:
    'PixelNest Studio designs and develops high-converting digital products across UI/UX, SaaS, web, app, and CRM development.',
  openGraph: {
    title: 'PixelNest Studio',
    description: 'We design digital experiences that convert.',
    url: 'https://pixelnest.studio',
    siteName: 'PixelNest Studio',
    type: 'website'
  },
  alternates: {
    canonical: '/'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PixelNest Studio',
  url: 'https://pixelnest.studio',
  logo: 'https://pixelnest.studio/logo.png',
  sameAs: ['https://www.linkedin.com', 'https://www.behance.net'],
  description: 'Premium digital agency for UI/UX, SaaS product design, and full-stack development.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <AnimatedCursor />
        <Navbar />
        <main className='min-h-screen'>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
