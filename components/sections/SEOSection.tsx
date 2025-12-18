export function SEOSection() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-900 py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">
          {/* Titre Left Column */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-600">
              L'Agence
            </h2>
          </div>
          
          {/* Content Right Column - 2 Columns Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Paragraphe 1 : Identité & Localisation */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-zinc-500">
                <span className="text-zinc-400 font-medium">Nuit Blanche Production</span> est une agence audiovisuelle basée à Golbey, près d'Épinal dans les Vosges. Nous accompagnons entreprises, institutions et collectivités du Grand Est dans la création de films d'entreprise, publicités et captations événementielles.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Notre expertise technique nous distingue grâce à nos compétences avancées en drone, photogrammétrie, cartographie et inspection technique pour le secteur industriel. Nous intervenons régulièrement à Nancy, Metz et jusqu'au Luxembourg pour des projets exigeants nécessitant précision et innovation technologique.
              </p>
            </div>
            
            {/* Paragraphe 2 : Réseau & Filiales */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-zinc-500">
                Notre agence couvre l'ensemble de vos besoins audiovisuels grâce à nos pôles spécialisés et notre réseau de filiales dédiées. Chaque domaine d'intervention bénéficie d'une expertise pointue et d'un savoir-faire éprouvé.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Pour le suivi de chantier BTP et le timelapse longue durée, nous opérons via notre filiale{' '}
                <a 
                  href="https://www.chantierfilm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-500 transition-colors duration-200"
                >
                  Chantier Film
                </a>
                , spécialiste reconnu de la documentation visuelle de projets de construction. Cette organisation garantit la qualité et la réactivité que mérite votre projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}