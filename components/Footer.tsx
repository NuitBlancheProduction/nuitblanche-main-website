'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NB</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Nuit Blanche Production
              </span>
            </Link>
            <p className="text-zinc-400 max-w-md">
              Agence de production audiovisuelle premium. Capturer l'essence.
              Amplifier l'image.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-violet-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-violet-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@nuitblanche.production"
                className="text-zinc-400 hover:text-violet-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Événementiel
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Publicité
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Drone & Technique
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#fondateurs"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  L'Alliance
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-zinc-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-sm">
            © {currentYear} Nuit Blanche Production. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-zinc-500 hover:text-violet-400 transition-colors text-sm"
            >
              Mentions Légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-zinc-500 hover:text-violet-400 transition-colors text-sm"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/conditions-generales"
              className="text-zinc-500 hover:text-violet-400 transition-colors text-sm"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}