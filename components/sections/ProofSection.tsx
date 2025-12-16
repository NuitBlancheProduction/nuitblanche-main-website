import fs from 'fs';
import path from 'path';
import { LogoMarquee } from '@/components/ui/logo-marquee';

async function getClientLogos(): Promise<string[]> {
  try {
    const clientsDir = path.join(process.cwd(), 'public', 'clients');
    
    // Vérifier si le dossier existe
    if (fs.existsSync(clientsDir)) {
      const allFiles = fs.readdirSync(clientsDir);
      
      // Filtrer uniquement les images
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];
      return allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      });
    }
    
    return [];
  } catch (error) {
    console.error('Erreur lors de la lecture du dossier clients:', error);
    return [];
  }
}

export async function ProofSection() {
  // Lecture automatique du dossier clients côté serveur
  const clientFiles = await getClientLogos();

  return (
    <section className="py-20 bg-zinc-900/50 overflow-hidden border-y border-zinc-800">
      <div className="mb-12 text-center">
        <p className="text-zinc-500 uppercase tracking-widest text-sm font-medium">
          Ils nous font confiance
        </p>
      </div>

      <LogoMarquee files={clientFiles} />
    </section>
  );
}