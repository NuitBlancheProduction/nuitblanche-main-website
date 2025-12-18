import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Configuration de l'URL de base pour les métadonnées (Vercel ou production)
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://www.nuitblancheproduction.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Nuit Blanche Production | Agence Vidéo & Drone Technique - Vosges',
  description:
    'Agence de production vidéo globale à Golbey : Corporate, Publicité, Événementiel. Expertise drone technique : Photogrammétrie, Cartographie, Inspection. Filiale BTP Chantier Film.',
  keywords: [
    'production vidéo vosges',
    'agence audiovisuelle epinal',
    'film corporate vosges',
    'publicité vidéo lorraine',
    'captation événementielle',
    'drone technique',
    'photogrammétrie drone',
    'cartographie aérienne',
    'inspection par drone',
    'film institutionnel grand-est',
    'vidéo entreprise nancy',
    'production audiovisuelle golbey',
    'agence vidéo professionnelle',
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
    title: 'Nuit Blanche Production | Agence Vidéo & Drone Technique - Vosges',
    description:
      'Production vidéo globale : Corporate, Publicité, Événementiel. Expertise drone technique : Photogrammétrie, Cartographie et Inspection. Basés à Golbey.',
    images: [
      {
        url: '/nuit-blanche-production-video-drone-vosges-social-card.webp',
        width: 1200,
        height: 630,
        alt: 'Nuit Blanche Production - Agence Vidéo & Drone Technique Vosges',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuit Blanche Production | Agence Vidéo & Drone Technique',
    description:
      'Production vidéo globale : Corporate, Pub, Événementiel. Expertise drone technique : Photogrammétrie, Cartographie & Inspection.',
    images: ['/nuit-blanche-production-video-drone-vosges-social-card.webp'],
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

// Schema.org JSON-LD pour le SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'VideoProductionService',
      '@id': `${baseUrl}/#organization`,
      name: 'Nuit Blanche Production',
      description:
        'Agence de production vidéo professionnelle spécialisée en vidéo corporate, publicité, événementiel et services drone techniques : photogrammétrie, cartographie et inspection.',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      image: `${baseUrl}/nuit-blanche-production-video-drone-vosges-social-card.webp`,
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
      '@id': `${baseUrl}/#localbusiness`,
      name: 'Nuit Blanche Production',
      description:
        'Agence de production audiovisuelle basée à Golbey, spécialisée en vidéo entreprise et services drone techniques.',
      url: baseUrl,
      telephone: '+33-6-51-30-13-83',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '39 rue Jean Mermoz',
        addressLocality: 'Golbey',
        postalCode: '88190',
        addressRegion: 'Vosges',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.20110400744197,
        longitude: 6.435260076219138,
      },
      priceRange: '$$-$$$',
      image: `${baseUrl}/nuit-blanche-production-video-drone-vosges-social-card.webp`,
      sameAs: [
        'https://www.instagram.com/nuitblancheproduction',
        'https://www.linkedin.com/company/50366441/',
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