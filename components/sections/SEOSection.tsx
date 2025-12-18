export function SEOSection() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-900">
          
          {/* COLONNE 1 : LOCALISATION */}
          <div className="p-8 md:p-10 lg:p-12 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-600">
                Studio
              </p>
              <h2 className="text-xl md:text-2xl font-light text-white leading-tight">
                Golbey, Vosges.
              </h2>
              <p className="text-[11px] font-mono text-zinc-700 tracking-wider">
                48.19° N, 6.43° E
              </p>
            </div>
            
            <p className="text-sm leading-relaxed text-zinc-500">
              Agence créative au cœur du Grand-Est, près d'Épinal. Nous concevons des films d'entreprise, publicités et captations événementielles pour les entreprises, institutions et collectivités de Nancy à Metz, jusqu'au Luxembourg.
            </p>
          </div>
          
          {/* COLONNE 2 : EXPERTISE TECHNIQUE */}
          <div className="p-8 md:p-10 lg:p-12 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-600">
                Expertise
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-zinc-300">Drone</p>
                  <p className="text-xs text-zinc-600 mt-1">Prises de vues aériennes techniques</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-zinc-300">Photogrammétrie</p>
                  <p className="text-xs text-zinc-600 mt-1">Modélisation 3D de précision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-zinc-300">Inspection</p>
                  <p className="text-xs text-zinc-600 mt-1">Audit visuel infrastructures</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">→</span>
                <div>
                  <p className="text-sm font-medium text-zinc-300">Cartographie</p>
                  <p className="text-xs text-zinc-600 mt-1">Relevés topographiques drone</p>
                </div>
              </div>
            </div>
            
            <p className="text-xs leading-relaxed text-zinc-600 pt-4 border-t border-zinc-900">
              Solutions techniques pour l'industrie et le secteur tertiaire.
            </p>
          </div>
          
          {/* COLONNE 3 : RÉSEAU & FILIALES */}
          <div className="p-8 md:p-10 lg:p-12 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-600">
                Filiales
              </p>
            </div>
            
            <div className="bg-zinc-900/40 border border-zinc-900 rounded-lg p-6 space-y-4 hover:border-zinc-800 transition-colors duration-300">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-medium text-zinc-200">
                  Chantier Film
                </h3>
                <span className="text-zinc-600 text-sm">↗</span>
              </div>
              
              <p className="text-xs leading-relaxed text-zinc-500">
                Division spécialisée dans le suivi de chantier BTP et le timelapse longue durée. Documentation visuelle professionnelle de projets de construction.
              </p>
              
              <a 
                href="https://www.chantierfilm.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 underline underline-offset-4 decoration-zinc-800 hover:decoration-zinc-600 transition-all duration-200 group"
              >
                <span>Découvrir Chantier Film</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
            
            <p className="text-xs leading-relaxed text-zinc-600">
              Une organisation par pôles d'expertise pour garantir qualité et réactivité sur chaque projet.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}