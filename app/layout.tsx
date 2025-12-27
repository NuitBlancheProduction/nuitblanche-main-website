import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://www.nuitblancheproduction.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Nuit Blanche Production',
  title: {
    template: '%s | Nuit Blanche Production',
    default: 'Nuit Blanche Production | Agence Vidéo & Drone - Vosges',
  },
  description:
    'Agence de production vidéo à Golbey : Corporate, Publicité, Événementiel. Expertise drone technique : Photogrammétrie, Cartographie, Inspection. BTP via Chantier Film.',
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
  alternates: {
    canonical: '/',
  },
  // ✅ CORRECTION 1 : Favicon .ico en premier
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Nuit Blanche Production',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nuit Blanche Production',
    title: 'Nuit Blanche Production | Agence Vidéo & Drone - Vosges',
    description:
      'Production vidéo globale : Corporate, Publicité, Événementiel. Expertise drone technique : Photogrammétrie, Cartographie et Inspection. Basés à Golbey.',
    images: [
      {
        url: '/nuit-blanche-production-video-drone-vosges-social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuit Blanche Production - Agence Vidéo & Drone - Vosges',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuit Blanche Production | Agence Vidéo & Drone',
    description:
      'Production vidéo globale : Corporate, Pub, Événementiel. Expertise drone technique : Photogrammétrie, Cartographie & Inspection.',
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

// ✅ CORRECTION 2 : Ajout d'une WebPage dans le JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Nuit Blanche Production',
      alternateName: 'NBP',
      description:
        'Nuit Blanche Production, agence de production vidéo et services drone techniques dans les Vosges.',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'fr-FR',
    },
    // ✅ NOUVEAU : WebPage pour la page d'accueil
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}/#webpage`,
      url: baseUrl,
      name: 'Nuit Blanche Production : Agence Vidéo & Drone (Vosges)',
      description:
        'Votre partenaire vidéo dans les Vosges. Films corporate, publicité et expertise drone technique (photogrammétrie, inspection).',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      about: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'fr-FR',
    },
    // Organization
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Nuit Blanche Production',
      alternateName: 'NBP',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logos/logo-nuit-blanche-production.webp`,
        width: 512,
        height: 512,
      },
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}/nuit-blanche-production-agence-video-drone-vosges.jpg`,
        width: 1200,
        height: 630,
      },
      description:
        'Agence de production vidéo professionnelle spécialisée en vidéo corporate, publicité, événementiel et services drone techniques : photogrammétrie, cartographie et inspection.',
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
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33-6-51-30-13-83',
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: 'French',
      },
      sameAs: [
        'https://www.instagram.com/nuitblancheproduction',
        'https://www.linkedin.com/company/50366441/',
      ],
    },
    // LocalBusiness
    {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#localbusiness`,
      name: 'Nuit Blanche Production',
      description:
        'Agence de production audiovisuelle basée à Golbey, spécialisée en vidéo entreprise et services drone techniques.',
      url: baseUrl,
      telephone: '+33-6-51-30-13-83',
      priceRange: '$$-$$$',
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
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}/nuit-blanche-production-agence-video-drone-vosges.jpg`,
        width: 1200,
        height: 630,
      },
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de Production Vidéo et Drone',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vidéo Corporate',
              description: 'Production de films institutionnels et vidéos d\'entreprise',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Film Publicitaire',
              description: 'Création de contenus publicitaires vidéo',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Captation Événementielle',
              description: 'Couverture vidéo d\'événements professionnels',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Photogrammétrie par Drone',
              description: 'Relevés 3D et modélisation par drone',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cartographie Aérienne',
              description: 'Cartographie et relevés topographiques par drone',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Inspection Technique',
              description: 'Inspection par drone de structures et infrastructures',
            },
          },
        ],
      },
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
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="jsonld"
        />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-Q9ECMN6Q9J" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}