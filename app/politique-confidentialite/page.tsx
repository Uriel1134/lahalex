import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      <Header />

      <main className="flex-1">
        <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h1 className="font-gobold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 leading-tight text-balance text-[#770D28]">
                POLITIQUE DE CONFIDENTIALITÉ
              </h1>
              <div className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                  Version : Septembre 2025
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                  {/* Dispositions préliminaires */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      DISPOSITIONS PRÉLIMINAIRES
                    </h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                        La présente politique de confidentialité constitue un document contractuel opposable déterminant
                        de manière exhaustive les modalités de collecte, traitement, conservation et communication des
                        données à caractère personnel par LAHALEX.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                        Elle s'applique impérativement lors de toute interaction avec les services LAHALEX, y compris la
                        navigation sur les sites internet, l'accès aux produits et services, et la participation à tout
                        événement organisé ou parrainé par LAHALEX.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        LAHALEX, en qualité de responsable de traitement, détermine souverainement les finalités et
                        moyens des traitements de données personnelles.
                      </p>
                    </div>
                  </section>

                  {/* Article 1 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 1 - COLLECTE DES DONNÉES PERSONNELLES
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.1 Modalités de Collecte
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX collecte les données personnelles selon trois modalités principales, sans limitation :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Données communiquées directement par l'Utilisateur</li>
                          <li>Données obtenues par l'intermédiaire de tiers autorisés</li>
                          <li>Données générées automatiquement lors de l'utilisation des Services</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.2 Caractère Obligatoire ou Facultatif
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Les champs obligatoires sont identifiés comme tels lors de la collecte. Le refus de fournir
                          les données requises entraîne automatiquement la limitation ou l'impossibilité d'accès aux
                          Services, sans que la responsabilité de LAHALEX puisse être engagée.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.3 Données Fournies Directement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Les informations personnelles transmises volontairement peuvent comprendre, sans limitation :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li className="break-words">
                            Données d'identification : nom, prénom, adresse électronique, postale, téléphone,
                            identifiants réseaux sociaux
                          </li>
                          <li>Identifiants d'accès : nom d'utilisateur, mot de passe, informations de sécurisation</li>
                          <li>Informations professionnelles : poste, qualifications, parcours, photographie</li>
                          <li>Données financières : coordonnées bancaires, modalités de paiement</li>
                          <li>Communications : commentaires, requêtes, questions, demandes diverses</li>
                          <li>Préférences : langue, choix de communication, centres d'intérêt</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.4 Données Transmises par des Tiers
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX peut recevoir des données de :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li className="break-words">
                            La structure employant l'Utilisateur (coordonnées professionnelles, données
                            d'enregistrement)
                          </li>
                          <li>Ses filiales, partenaires commerciaux et prestataires autorisés</li>
                          <li>Les réseaux sociaux (avec autorisation de l'Utilisateur)</li>
                          <li>Les prestataires techniques de géolocalisation</li>
                          <li>Les sources publiques et fournisseurs spécialisés</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.5 Données Automatiquement Collectées
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX enregistre automatiquement et systématiquement :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li className="break-words">
                            Données techniques : adresse IP, navigateur, système d'exploitation, identifiants
                            techniques, rapports d'erreurs
                          </li>
                          <li>
                            Données d'usage : fonctionnalités utilisées, contenus consultés, horodatages, paramètres
                          </li>
                          <li>Données de navigation : pages visitées, requêtes, résultats de recherche</li>
                          <li>Données de formation : cours visionnés, exercices, réponses aux évaluations</li>
                          <li>Données géographiques : localisation pour adaptation du contenu</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.6 Cookies et Technologies Similaires
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX utilise systématiquement des cookies et technologies similaires pour :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Conserver les préférences et paramètres</li>
                          <li>Faciliter l'authentification et l'accès</li>
                          <li>Diffuser des publicités ciblées</li>
                          <li>Analyser les performances et l'usage</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                          L'Utilisateur reconnaît que le blocage des cookies peut restreindre l'accès aux Services.
                          LAHALEX décline toute responsabilité en cas de dysfonctionnement résultant de cette
                          restriction.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Article 2 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 2 - FINALITÉS DU TRAITEMENT
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          2.1 Finalités Principales
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Les données personnelles sont traitées aux fins suivantes, sans limitation :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Fourniture, administration et sécurisation des Services</li>
                          <li>Traitement des demandes, commandes et transactions</li>
                          <li>Support technique et maintenance</li>
                          <li>Amélioration et développement des Services</li>
                          <li>Personnalisation du contenu selon les intérêts et la localisation</li>
                          <li>Communication institutionnelle et commerciale</li>
                          <li>Analyses statistiques et reporting</li>
                          <li>Respect des obligations légales et contractuelles</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          2.2 Finalités Marketing et Commerciales
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX se réserve le droit d'utiliser les données pour :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Diffuser des communications promotionnelles et publicités ciblées</li>
                          <li>Promouvoir ses produits, services et événements ainsi que ceux de ses partenaires</li>
                          <li>Organiser des enquêtes, sondages et opérations promotionnelles</li>
                          <li>Analyser l'efficacité des campagnes marketing</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          2.3 Base Juridique du Traitement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Les traitements s'appuient sur :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>L'exécution du contrat ou de mesures précontractuelles</li>
                          <li>Le respect d'obligations légales</li>
                          <li>Les intérêts légitimes de LAHALEX</li>
                          <li>Le consentement de l'Utilisateur (révocable)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                          Les intérêts légitimes de LAHALEX prévalent sauf exception légale expresse.
                        </p>
                      </div>
                    </div>
                  </section>

                                    {/* Ajout de l'article 3 complet */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 3 - PARTAGE ET COMMUNICATION DES DONNÉES
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.1 Communication Interne à l'Organisation
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Lorsque l'accès s'effectue via un abonnement organisationnel, les données et informations d'usage peuvent être transmises au gestionnaire pour supervision, gestion administrative et formation.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.2 Applications et Services Tiers
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          En cas d'utilisation d'applications tierces intégrées, les données nécessaires sont communiquées aux éditeurs concernés selon leurs politiques respectives.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.3 Partenaires et Prestataires Autorisés
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                          LAHALEX partage les données avec :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base mb-2">
                          <li>Ses entités affiliées et divisions</li>
                          <li>Ses prestataires, fournisseurs et agents (établissements financiers, hébergeurs, opérateurs marketing, transporteurs)</li>
                          <li>Ses partenaires commerciaux autorisés</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Ces destinataires traitent les données selon les instructions de LAHALEX et dans le respect de la présente politique.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.4 Communication pour Motifs Légaux
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                          LAHALEX communique les données lorsque nécessaire pour :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Se conformer aux obligations légales et procédures judiciaires</li>
                          <li>Détecter, prévenir ou enquêter sur les fraudes et incidents</li>
                          <li>Protéger ses droits, propriété et sécurité</li>
                          <li>Réaliser des opérations structurelles (fusion, acquisition, cession)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.5 Espaces Publics
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          L'Utilisateur reconnaît que toute information publiée dans les espaces publics du Service peut être collectée et utilisée par des tiers. LAHALEX décline toute responsabilité à cet égard.
                        </p>
                      </div>
                    </div>
                  </section>


                  {/* Article 4 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 4 - CONSERVATION DES DONNÉES
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          4.1 Principe de Conservation
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX conserve les données personnelles pendant la durée nécessaire aux finalités poursuivies, augmentée des délais légaux de prescription et d'archivage.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          4.2 Durées Spécifiques
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                          La conservation peut s'étendre pour :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Le respect des obligations légales et réglementaires</li>
                          <li>La tenue d'archives comptables et financières</li>
                          <li>La gestion et résolution de litiges</li>
                          <li>La sécurité des systèmes et prévention des fraudes</li>
                          <li>L'exécution et le suivi contractuel</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          4.3 Conservation Post-Résiliation
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          En cas d'abonnement organisationnel, LAHALEX conserve les coordonnées professionnelles même après résiliation pour assurer la continuité des échanges.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Article 5 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 5 - LOCALISATION ET TRANSFERTS
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          5.1 Traitement International
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Les données peuvent être hébergées et traitées dans tout État où LAHALEX, ses affiliées ou prestataires exploitent des infrastructures.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          5.2 Garanties de Protection
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX met en place les mesures contractuelles et techniques nécessaires pour garantir un niveau de protection conforme aux exigences légales, quel que soit le lieu de traitement.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          5.3 Mesures de Sécurité
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX applique des mesures techniques et organisationnelles appropriées pour assurer la sécurité, l'intégrité, la confidentialité et la disponibilité des données.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Article 6 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 6 - DROITS DES UTILISATEURS
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          6.1 Droits Reconnus
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                          Conformément à la réglementation applicable, l'Utilisateur dispose des droits suivants :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Droit d'accès à ses données personnelles</li>
                          <li>Droit de rectification ou d'effacement</li>
                          <li>Droit de limitation du traitement</li>
                          <li>Droit d'opposition au traitement</li>
                          <li>Droit à la portabilité des données</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          6.2 Modalités d'Exercice
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                          Pour exercer ces droits, l'Utilisateur doit s'adresser à : <strong>contact@lahalex.com</strong>
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX se réserve le droit d'exiger une vérification d'identité préalable et peut refuser les demandes manifestement infondées ou excessives.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          6.3 Délais de Traitement
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Les demandes sont traitées dans les délais légaux, prolongeables en cas de complexité particulière.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          6.4 Limitations des Droits
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Les droits peuvent être limités lorsque leur exercice porterait atteinte aux intérêts légitimes de LAHALEX, à la sécurité des Services, ou aux droits de tiers.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Articles 7-13 manquants */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLES 7-13 - DISPOSITIONS COMPLÉMENTAIRES
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 7 - GESTION DES COMMUNICATIONS
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          <strong>7.1 Paramétrage des Préférences :</strong> L'Utilisateur peut configurer ses préférences de communication via son compte utilisateur ou en contactant LAHALEX. <strong> <br />7.2 Communications Obligatoires :</strong> LAHALEX se réserve le droit d'adresser des notifications obligatoires relatives aux modifications essentielles du Service, nonobstant les préférences de l'Utilisateur.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 8 - PROTECTION DES MINEURS
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX ne collecte pas intentionnellement de données concernant les enfants de moins de 14 ans. Les Services ne sont pas destinés à ce public. En cas de collecte accidentelle, LAHALEX supprime immédiatement ces données sur demande.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 9 - DISPOSITIONS SPÉCIALES - AUTEURS ET CONTRIBUTEURS
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          <strong>9.1 Données Spécifiques Collectées :</strong> Pour les auteurs et contributeurs, LAHALEX collecte identité, structure d'appartenance et coordonnées, parcours professionnel et domaines d'expertise, biographie, profil, photographie, enregistrements vocaux, informations financières pour rémunération, données éditoriales et administratives. <strong> <br />9.2 Finalités du Traitement :</strong> Ces données sont utilisées pour la gestion éditoriale et publication des travaux, l'exécution des contrats d'auteur/contributeur, la promotion des contenus et services. <strong> <br />9.3 Publication et Diffusion :</strong> L'auteur/contributeur autorise expressément la publication de ses données biographiques et professionnelles en relation avec ses contributions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 10 - MODIFICATIONS DE LA POLITIQUE
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          <strong>10.1 Droit de Modification :</strong> LAHALEX se réserve le droit de modifier à tout moment la présente politique de confidentialité, sans préavis obligatoire. <strong> <br />10.2 Notification des Modifications :</strong> Les modifications substantielles sont publiées sur cette page avec indication de la date de mise à jour.  L'Utilisateur peut être informé par tout 
                          canal approprié.<strong> <br />10.3 Acceptation des Modifications :</strong> L'utilisation continue des Services après modification vaut acceptation expresse de la nouvelle politique.
                        </p>
                    </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 11 - RESPONSABILITÉ ET LIMITATIONS
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          <strong>11.1 Limitation de Responsabilité :</strong> LAHALEX ne peut être tenue responsable des conséquences résultant de l'interception ou l'utilisation frauduleuse de données lors de leur transmission sur Internet, des défaillances techniques des systèmes tiers, de l'utilisation inappropriée des données par l'Utilisateur, des violations de sécurité imputables à des tiers. <strong> <br />11.2 Obligations de l'Utilisateur :</strong> L'Utilisateur s'engage à fournir des informations exactes et à jour, protéger ses identifiants d'accès, respecter les droits des tiers, signaler immédiatement tout usage frauduleux.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 12 - CONTACT ET RÉCLAMATIONS
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          <strong>12.1 Service Client :</strong> Pour toute question relative à la présente politique ou au traitement des données : <strong>contact@lahalex.com</strong> <strong> <br />12.2 Autorité de Contrôle :</strong> L'Utilisateur peut introduire une réclamation auprès de l'autorité de protection des données compétente en République du Bénin.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          ARTICLE 13 - DISPOSITIONS GÉNÉRALES
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          <strong>13.1 Droit Applicable :</strong> La présente politique est exclusivement régie par le droit de la République du Bénin. <strong> <br />13.2 Validité :</strong> Si une disposition était déclarée nulle, les autres dispositions conserveraient leur pleine validité. <strong> <br />13.3 Langue de Référence :</strong> En cas de traduction, la version française fait foi.
                        </p>
                      </div>
                    </div>
                  </section>



                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      <strong>ACCEPTATION OBLIGATOIRE</strong>
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 mt-2">
                      L'utilisation des Services LAHALEX emporte acceptation pleine et entière de la présente politique
                      de confidentialité.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-3">
                      Version : 2.0 - Renforcée - LAHALEX se réserve le droit de modifier cette politique à tout moment.
                      La version applicable est celle en vigueur lors de chaque utilisation des Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
