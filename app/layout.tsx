import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nuit Blanche Production | Agence Audiovisuelle Stratégique',
  description:
    'Agence de production audiovisuelle premium. Corporate, Événementiel, Publicité, Drone & Technique. Capturer l\'essence. Amplifier l\'image.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
