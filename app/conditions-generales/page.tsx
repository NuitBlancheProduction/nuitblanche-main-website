import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function ConditionsGenerales() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Bouton retour */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Retour à l'accueil</span>
        </Link>

        {/* En-tête de la page */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Conditions Générales de Vente
          </h1>
          <p className="text-gray-400">NUIT BLANCHE PRODUCTION</p>
        </header>

        {/* Contenu des CGV */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">1.</span>
                Prestations et prix
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Les prestations proposées par Nuit Blanche Production couvrent l'ensemble des étapes nécessaires à la réalisation de projets audiovisuels, allant de la conception à la production en passant par la post-production. Nous sommes spécialisés dans la création de contenu audiovisuel pour une variété de plateformes, y compris la télévision, les réseaux sociaux et le cinéma.
                </p>
                <p>
                  Le prix de la prestation sera déterminé en fonction de plusieurs facteurs, notamment la complexité du projet, la durée de la prestation, les coûts des ressources nécessaires à la réalisation du projet, ainsi que tout autre coût supplémentaire convenu avec le client. Nous nous efforçons de fournir une estimation du coût le plus précis possible avant le début du projet, afin que le client puisse faire un choix éclairé.
                </p>
                <p>
                  Le client s'engage à payer le montant total convenu selon les modalités convenues, et ce avant le début du projet. Nous nous efforçons de maintenir un haut niveau de transparence en ce qui concerne les coûts associés à chaque projet, et nous nous engageons à travailler en étroite collaboration avec le client pour garantir que les coûts sont compris et acceptés avant le début de la prestation. En cas de modification du projet ou de la prestation, les coûts supplémentaires seront communiqués au client et acceptés par celui-ci avant d'être pris en compte.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">2.</span>
                Délais de paiement
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Tout paiement doit être effectué dans un délai de 30 jours à compter de la date de facturation. À défaut de règlement dans ce délai, le client sera considéré en situation de défaut de paiement.
                </p>
                <p>
                  En cas de défaut de paiement, Nuit Blanche Production se réserve le droit de suspendre immédiatement la prestation en cours, sans préavis, jusqu'au règlement complet des sommes dues. Cette suspension pourra entraîner des retards dans la réalisation du projet, dont le client assumera l'entière responsabilité, y compris pour tout coût supplémentaire ou préjudice qui en découlerait.
                </p>
                <p>
                  Si le paiement n'est pas effectué dans les 45 jours suivant la date de facturation, des pénalités de retard seront appliquées de plein droit, sans mise en demeure préalable, au taux annuel de 20 % (soit environ 1,67 % par mois). Ce taux reflète les conséquences économiques significatives que tout retard de paiement peut entraîner dans le cadre de l'activité audiovisuelle.
                </p>
                <p>
                  Conformément à l'article L.441-10 du Code de commerce, une indemnité forfaitaire pour frais de recouvrement de 40 € sera également exigée pour chaque facture en retard. Si les frais de recouvrement engagés sont supérieurs à ce montant, Nuit Blanche Production se réserve le droit de demander une indemnisation complémentaire sur présentation de justificatifs.
                </p>
                <p>
                  Le client s'engage à régler l'ensemble des sommes dues, y compris les pénalités de retard et les éventuelles indemnités de recouvrement, dans les délais convenus. En cas de non-paiement persistant, Nuit Blanche Production pourra engager une procédure de recouvrement par voie judiciaire, et le client sera tenu de supporter l'ensemble des frais de justice et honoraires afférents.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">3.</span>
                Délais d'annulation
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Le client reconnaît que Nuit Blanche Production consacre du temps et des ressources considérables à la planification et à la préparation de chaque prestation. En conséquence, en cas d'annulation de la prestation par le client, Nuit Blanche Production se réserve le droit de facturer des frais d'annulation correspondant aux coûts déjà engagés pour la prestation, tels que les frais de personnel, les frais de location d'équipement, etc.
                </p>
                <p>
                  Si l'annulation est effectuée moins de 15 jours avant le début du projet, Nuit Blanche Production se réserve le droit de facturer 50 % du montant total de la prestation. Cela reflète le fait que Nuit Blanche Production aura consacré un temps considérable à la planification et à la préparation du projet et aura peut-être perdu des opportunités de revenus en conséquence.
                </p>
                <p>
                  Il est important de noter que les frais d'annulation ne sont pas une sanction pour le client, mais plutôt une compensation pour les coûts déjà engagés et les opportunités de revenus perdues pour Nuit Blanche Production. Par conséquent, le client est invité à communiquer avec Nuit Blanche Production dès que possible en cas de nécessité d'annuler la prestation afin de minimiser les frais d'annulation.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">4.</span>
                Modification de la prestation
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Les modifications de la prestation peuvent avoir un impact sur le planning, les coûts et les ressources allouées au projet. Il est donc important que toute demande de modification soit effectuée par écrit et reçue par Nuit Blanche Production en temps opportun. Le client doit fournir une description détaillée de la modification souhaitée et s'engager à payer tous les frais supplémentaires associés à la modification.
                </p>
                <p>
                  Nuit Blanche Production s'efforcera de travailler en étroite collaboration avec le client pour minimiser les coûts supplémentaires liés aux modifications et s'assurera que les modifications sont effectuées de manière professionnelle et conformément aux normes de qualité élevées de l'entreprise. Cependant, si la modification est importante et nécessite des ressources supplémentaires, des frais supplémentaires pourront être facturés au client.
                </p>
                <p>
                  Il est important de noter que les modifications peuvent entraîner des retards dans le calendrier du projet et Nuit Blanche Production ne sera pas tenue responsable des retards causés par des modifications demandées par le client. Le client s'engage à informer Nuit Blanche Production de toutes les modifications nécessaires à temps pour minimiser les retards et les coûts supplémentaires.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">5.</span>
                Confidentialité
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nuit Blanche Production accorde une grande importance à la confidentialité et à la protection des informations fournies par le client en relation avec le projet audiovisuel. Nous nous engageons à maintenir la confidentialité de ces informations et à ne pas les divulguer, publier ou utiliser à des fins commerciales sans l'autorisation écrite du client.
                </p>
                <p>
                  Nous comprenons que certaines informations peuvent être considérées comme sensibles et nous nous engageons à traiter ces informations avec la plus grande discrétion et à les protéger conformément à la loi applicable en matière de protection des données.
                </p>
                <p>
                  En outre, Nuit Blanche Production s'engage à ne pas utiliser les informations confidentielles à des fins commerciales ou de marketing sans l'autorisation écrite du client.
                </p>
                <p>
                  Enfin, à la fin du projet, tous les documents et supports, ainsi que les enregistrements audio et vidéo, resteront la propriété du client et seront détruits ou restitués à sa demande. Nuit Blanche Production s'engage à ne conserver aucune copie de ces informations confidentielles après la fin du projet.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">6.</span>
                Assurance
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nuit Blanche Production prend très au sérieux la sécurité de ses prestations de services audiovisuels. C'est pourquoi l'entreprise a souscrit une assurance qui couvre tous les risques potentiels liés à la réalisation de projets audiovisuels. Cette assurance comprend une protection contre les dommages matériels et les accidents qui peuvent survenir sur le lieu de travail.
                </p>
                <p>
                  En cas d'incident, Nuit Blanche Production s'engage à collaborer étroitement avec le client pour résoudre rapidement le problème de manière équitable. L'entreprise s'assure que les réclamations liées à des incidents ou des dommages sont gérées de manière efficace et efficiente pour minimiser les perturbations pour le client.
                </p>
                <p>
                  Nuit Blanche Production s'engage également à maintenir à jour son assurance en fonction de l'évolution de ses activités pour garantir que le client soit toujours protégé en cas de problèmes. L'assurance est un aspect important de la prestation de services de Nuit Blanche Production et l'entreprise s'efforce de fournir le meilleur niveau de protection possible pour ses clients.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">7.</span>
                Responsabilité
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nuit Blanche Production est un prestataire de services et ne peut être tenu responsable de tout dommage indirect ou consécutif découlant de l'utilisation de ses prestations. Les dommages indirects ou consécutifs comprennent, sans s'y limiter, les pertes de profits, les pertes commerciales, les pertes de revenus, les pertes d'affaires ou tout autre type de perte financière.
                </p>
                <p>
                  Nuit Blanche Production ne sera pas tenue responsable des dommages causés par des erreurs, des défauts ou des déficiences dans les prestations, sauf si ces erreurs, défauts ou déficiences ont été causés par la négligence ou le manquement de Nuit Blanche Production à ses obligations contractuelles. La responsabilité de Nuit Blanche Production est strictement limitée à la réparation des dommages causés par sa négligence ou son manquement à ses obligations contractuelles.
                </p>
                <p>
                  Le client est responsable de toutes les pertes subies en raison d'erreurs, de défauts ou de déficiences causés par des tiers, y compris, sans limitation, les erreurs de transmission de données, les erreurs de programmation, les virus informatiques et les interférences de tiers.
                </p>
                <p>
                  Le client est tenu de notifier sans délai à Nuit Blanche Production tout défaut, erreur ou déficience dans les prestations. Si le client ne notifie pas sans délai un tel défaut, erreur ou déficience, Nuit Blanche Production ne sera pas tenue responsable des dommages causés par ce défaut, erreur ou déficience.
                </p>
                <p>
                  Nuit Blanche Production ne garantit pas que les prestations seront exemptes d'erreurs, de défauts ou de déficiences et ne garantit pas que les prestations seront continuellement disponibles, exemptes de défauts ou de déficiences.
                </p>
                <p>
                  En utilisant les prestations de Nuit Blanche Production, le client accepte ces limitations de responsabilité et de garantie. Le client reconnaît que ces limitations sont raisonnables et acceptables en considération des prestations fournies.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">8.</span>
                Droit applicable
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Les présentes conditions générales de vente sont régies par la loi française. Tout litige découlant de l'exécution de la prestation sera soumis à la juridiction des tribunaux français compétents. Les parties conviennent d'exercer leurs droits de manière raisonnable et de tenter de résoudre de bonne foi tout différend par voie de négociation amiable avant de saisir les tribunaux compétents.
                </p>
                <p>
                  Les parties reconnaissent que la saisine des tribunaux est une mesure de dernier recours et qu'il est de leur intérêt de résoudre tout différend de manière rapide et équitable. Par conséquent, les parties s'engagent à coopérer de manière constructive pour résoudre tout différend et à se conformer aux décisions rendues par les tribunaux compétents.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">9.</span>
                Modification des conditions générales
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Les présentes conditions générales de vente peuvent être modifiées par Nuit Blanche Production à tout moment. Les modifications apportées seront considérées comme étant acceptées par le client si celui-ci continue à utiliser les services de Nuit Blanche Production après la date de modification.
                </p>
                <p>
                  Il est donc important pour le client de consulter régulièrement les conditions générales de vente pour prendre connaissance des éventuelles modifications apportées. Nuit Blanche Production s'engage à informer le client par écrit ou par courrier électronique des modifications apportées aux présentes conditions générales de vente.
                </p>
                <p>
                  En cas de doute ou de question sur les modifications apportées, le client peut contacter Nuit Blanche Production pour obtenir des clarifications. La poursuite de l'utilisation des services de Nuit Blanche Production après la date de modification des conditions générales de vente sera considérée comme étant l'acceptation des modifications apportées.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span className="text-blue-500">10.</span>
                Acceptation des conditions générales
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  L'acceptation des présentes conditions générales de vente est un élément essentiel et obligatoire pour toute prestation fournie par Nuit Blanche Production. La signature du devis ou la confirmation de la commande par le client constitue une reconnaissance sans réserve des conditions générales de vente, qui sont accessibles en ligne sur le site web de Nuit Blanche Production à tout moment.
                </p>
                <p>
                  Le client déclare avoir pris connaissance des conditions générales de vente et les accepter sans réserve en signant le devis ou en confirmant sa commande. La signature du devis ou la confirmation de la commande par le client constitue un engagement ferme et définitif pour la réalisation de la prestation selon les conditions prévues dans les présentes conditions générales de vente.
                </p>
                <p>
                  Nous espérons que ces conditions générales de vente vous donneront une meilleure compréhension de nos services et de nos obligations. Nuit Blanche Production s'engage à fournir des services de qualité supérieure et à satisfaire les besoins de ses clients. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter. Nous sommes à votre disposition pour tout renseignement complémentaire et pour vous aider à faire les meilleurs choix pour vos besoins en matière de services.
                </p>
                <p>
                  Nous espérons établir une relation de confiance et de collaboration fructueuse avec vous.
                </p>
              </div>
            </section>

            {/* Informations entreprise */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  SAS Nuit Blanche Production
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-gray-200">Réalisation Audiovisuelle</strong></p>
                  <p>🌐 www.nuitblancheproduction.com</p>
                  <p>📍 39, rue Jean Mermoz 88190 Golbey</p>
                  <p><strong className="text-gray-200">Siret :</strong> 84122835600017</p>
                  <p><strong className="text-gray-200">TVA intracommunautaire :</strong> FR93841228356</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour bas de page */}
        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all border border-blue-500/20 hover:border-blue-500/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}