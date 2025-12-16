'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-zinc-950/95 backdrop-blur-xl border-zinc-800">
        <div className="relative w-full h-full flex flex-col">
          {/* Header avec titre et bouton fermer */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <DialogTitle className="text-2xl font-bold text-white">
              Réservez votre consultation
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>

          {/* iFrame Cal.com */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://cal.com/denis-nuitblanche/30min"
              className="w-full h-full min-h-[600px]"
              frameBorder="0"
              title="Calendrier de réservation"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}