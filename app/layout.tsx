import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nuitblancheproduction.com'),
  title: 'Nuit Blanche Production | Vidéo Entreprise, Pub & Drone (Vosges)',
  description:
    'Agence de production vidéo à Golbey : Interviews, films corporate, publicité, événementiel. Expertise drone : Photogrammétrie, Cartographie, Inspection. Filiale Chantier Film.',
  keywords: [
    'vidéo corporate vosges',
    'film publicitaire epinal',
    'production vidéo entreprise',
    'captation événementiel',
    'interview vidéo',
    'photogrammétrie drone',
    'cartographie aérienne',
    'inspection technique drone',
    'drone professionnel grand-est',
    'agence vidéo nancy',
    'production audiovisuelle golbey',
    'vidéo institutionnelle lorraine',
    'suivi chantier filiale',
  ],
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicons/site.webmanifest',
  appleWebApp: {
    title: 'Nuit Blanche Production',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nuit Blanche Production',
    title: 'Nuit Blanche Production | Agence Créative & Technique - Vosges',
    description:
      'Production vidéo corporate, publicité et événementiel. Expertise drone pointue : Photogrammétrie, Cartographie et Inspection technique. Basés à Golbey.',
    images: [
      {
        url: '/nuit-blanche-production-video-drone-vosges-social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuit Blanche Production - Agence Vidéo & Drone Vosges',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuit Blanche Production | Vidéo & Drone Technique',
    description:
      'Agence de production vidéo globale : Corporate, Pub, Event. Expertise drone avancée : Photogrammétrie & Inspection.',
    images: ['/nuit-blanche-production-video-drone-vosges-social-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'VideoProductionService',
      '@id': 'https://nuitblancheproduction.com/#organization',
      name: 'Nuit Blanche Production',
      description:
        'Agence de production vidéo professionnelle spécialisée en vidéo corporate, publicité, événementiel et services drone techniques : photogrammétrie, cartographie et inspection.',
      url: 'https://nuitblancheproduction.com',
      logo: 'https://nuitblancheproduction.com/logo.png',
      image: 'https://nuitblancheproduction.com/nuit-blanche-production-video-drone-vosges-social-card.jpg',
      priceRange: '$$-$$$',
      areaServed: [
        {
          '@type': 'State',
          name: 'Grand Est',
        },
        {
          '@type': 'City',
          name: 'Épinal',
        },
        {
          '@type': 'City',
          name: 'Nancy',
        },
        {
          '@type': 'City',
          name: 'Golbey',
        },
      ],
      serviceType: [
        'Vidéo Corporate',
        'Film Publicitaire',
        'Captation Événementielle',
        'Interview Vidéo',
        'Photogrammétrie par Drone',
        'Cartographie Aérienne',
        'Inspection Technique',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://nuitblancheproduction.com/#localbusiness',
      name: 'Nuit Blanche Production',
      description:
        'Agence de production audiovisuelle basée à Golbey, spécialisée en vidéo entreprise et services drone techniques.',
      url: 'https://nuitblancheproduction.com',
      telephone: '+33-X-XX-XX-XX-XX',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Adresse à compléter',
        addressLocality: 'Golbey',
        postalCode: '88190',
        addressRegion: 'Vosges',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1947,
        longitude: 6.4364,
      },
      priceRange: '$$-$$$',
      image: 'https://nuitblancheproduction.com/nuit-blanche-production-video-drone-vosges-social-card.jpg',
      sameAs: [
        'https://www.instagram.com/nuitblancheproduction',
        'https://www.linkedin.com/company/nuitblancheproduction',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}