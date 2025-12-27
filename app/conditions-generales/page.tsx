import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function ConditionsGeneralesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      <Header />

      <main className="flex-1">
        <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h1 className="font-gobold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 leading-tight text-balance">
                CONDITIONS GÉNÉRALES DE VENTE ET D'ABONNEMENT (CGVA)
              </h1>
              <div className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">Version : Août 2025</p>
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
                        Les présentes conditions générales de vente et d'abonnement (« CGVA ») régissent de manière
                        exclusive et impérative toute relation contractuelle entre LAHALEX (« l'Éditeur ») et ses
                        clients (« le Client »), concernant l'accès, l'utilisation et l'abonnement à ses produits et
                        services.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                        Ces CGVA s'imposent sans restriction au Client, prévalent sur toute condition d'achat ou
                        stipulation contraire, et ne peuvent être modifiées que par un accord écrit et signé par
                        LAHALEX. L'Éditeur se réserve le droit absolu et discrétionnaire de modifier à tout moment les
                        présentes CGVA ainsi que ses tarifs, sans préavis ni justification. Les CGVA applicables sont
                        celles en vigueur à la date de souscription.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        Toute commande constitue une acceptation irrévocable et sans réserve des présentes CGVA. LAHALEX
                        se réserve le droit de refuser ou d'annuler toute commande, à sa seule discrétion, sans
                        obligation de justification ni d'indemnisation.
                      </p>
                    </div>
                  </section>

                  {/* Article 1 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 1 - CONDITIONS FINANCIÈRES ET RÈGLEMENT
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.1 Modalités de Facturation
                        </h3>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Les tarifs sont établis en francs CFA (XOF) et s'entendent toutes taxes comprises</li>
                          <li>La facturation s'effectue d'avance, en début de chaque période contractuelle</li>
                          <li>
                            Le Client accepte expressément la facturation électronique comme seul mode de transmission
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.2 Modalités de Paiement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Le règlement s'effectue comptant, sans escompte possible, par les moyens acceptés par LAHALEX
                          (virement, prélèvement, carte bancaire, mobile money). Tout paiement échelonné requiert
                          l'accord préalable écrit de LAHALEX et la mise en place obligatoire d'un prélèvement
                          automatique.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX peut, à sa seule discrétion :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Refuser, modifier ou résilier tout échéancier sans préavis</li>
                          <li>Exiger des garanties de paiement supplémentaires</li>
                          <li>Suspendre immédiatement l'accès aux services en cas de retard de paiement</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          1.3 Sanctions en cas de Défaillance
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          En cas de retard de paiement :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Application automatique de pénalités de 15% du montant total impayé</li>
                          <li>Suspension immédiate de l'abonnement sans mise en demeure préalable</li>
                          <li>Exigibilité immédiate de l'intégralité des sommes dues pour la période contractuelle</li>
                          <li>Facturation d'une indemnité forfaitaire de recouvrement de 40€ minimum</li>
                          <li>
                            Droit pour LAHALEX d'entreprendre toute action en justice aux frais exclusifs du Client
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Article 2 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 2 - DURÉE ET RÉSILIATION DU CONTRAT
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          2.1 Durée d'Engagement
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Sauf stipulation contraire, l'abonnement est conclu pour une durée minimale d'un mois,
                          tacitement reconductible. Les abonnements annuels constituent un engagement ferme et
                          irrévocable de douze mois, sans possibilité de résiliation anticipée ni de remboursement après
                          trois mois d'utilisation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          2.2 Résiliation par le Client
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Le Client peut résilier son abonnement mensuel uniquement via son espace personnel en ligne.
                          La résiliation prend effet à l'issue de la période mensuelle en cours, sans remboursement des
                          sommes versées.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          2.3 Résiliation par LAHALEX
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX peut résilier immédiatement et de plein droit tout abonnement, sans préavis ni
                          indemnité, notamment en cas de :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Violation des présentes CGVA</li>
                          <li>Usage abusif, frauduleux ou contraire à la destination des services</li>
                          <li>Défaut de paiement</li>
                          <li>Comportement portant atteinte à l'image ou aux intérêts de LAHALEX</li>
                          <li>Non-respect des obligations de confidentialité</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Article 3 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 3 - DROITS D'UTILISATION ET PROPRIÉTÉ INTELLECTUELLE
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.1 Propriété des Contenus
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX détient ou a valablement acquis l'intégralité des droits de propriété intellectuelle
                          sur ses produits, services, contenus et documentations. Aucun droit de propriété n'est
                          transféré au Client.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.2 Licence d'Utilisation Restrictive
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Le Client bénéficie d'une licence d'usage personnelle, non exclusive, non cessible et
                          strictement limitée à un usage documentaire interne. Cette licence est révocable à tout moment
                          par LAHALEX.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.3 Interdictions Absolues
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Le Client s'interdit formellement et s'engage à ne pas :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Reproduire, copier, diffuser ou redistribuer tout ou partie des contenus</li>
                          <li>
                            Procéder à l'extraction substantielle ou à la réutilisation systématique des bases de
                            données
                          </li>
                          <li>Concéder des droits d'accès à des tiers</li>
                          <li>Utiliser les contenus à des fins commerciales ou de revente</li>
                          <li>Porter atteinte aux droits de LAHALEX ou de ses partenaires</li>
                          <li>Procéder à l'ingénierie inverse des logiciels ou services</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          3.4 Sanctions en cas de Violation
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Toute violation des droits de propriété intellectuelle entraîne :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>La résiliation immédiate du contrat sans remboursement</li>
                          <li>L'engagement de la responsabilité civile et pénale du Client</li>
                          <li>Le versement de dommages-intérêts forfaitaires de 10 000€ par violation constatée</li>
                          <li>L'obligation de cessation immédiate de l'utilisation illicite</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Article 4 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 4 - RESPONSABILITÉ ET GARANTIES
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          4.1 Responsabilité du Client
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          Le Client assume l'entière responsabilité de :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>L'utilisation et l'interprétation des contenus et services</li>
                          <li>La sélection et l'exploitation des informations</li>
                          <li>Les décisions prises sur la base des contenus consultés</li>
                          <li>La sécurité de ses systèmes et données</li>
                          <li>Le respect de la réglementation applicable</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          4.2 Limitation de Responsabilité de LAHALEX
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          La responsabilité de LAHALEX est expressément exclue pour :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>L'exhaustivité, l'exactitude ou la mise à jour des informations</li>
                          <li>Les interruptions temporaires de service</li>
                          <li>Les dommages indirects, accessoires ou immatériels</li>
                          <li>Les pertes de données, d'exploitation ou de chance</li>
                          <li>Les conséquences de l'utilisation des services</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                          En cas de responsabilité avérée, l'indemnisation est strictement plafonnée au montant de
                          l'abonnement en cours.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          4.3 Absence de Garantie
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                          LAHALEX ne garantit aucun :
                        </p>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li>Fonctionnement ininterrompu des services</li>
                          <li>Résultat particulier de l'utilisation</li>
                          <li>Absence d'anomalie ou de défaillance technique</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Article 5 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 5 - CONFIDENTIALITÉ ET DONNÉES PERSONNELLES
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          5.1 Obligations du Client
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Le Client garantit la licéité et la conformité de toutes les données qu'il transmet à LAHALEX
                          et assume l'entière responsabilité de leur contenu.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          5.2 Traitement par LAHALEX
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          LAHALEX traite les données conformément à la réglementation béninoise applicable et à sa
                          politique de confidentialité, avec droit de conservation pour la durée nécessaire à
                          l'exécution du contrat et au respect de ses obligations légales.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Article 6 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 6 - SANCTIONS INTERNATIONALES
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                      Le Client garantit formellement que lui-même et ses utilisateurs :
                    </p>
                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                      <li>Ne font l'objet d'aucune sanction internationale</li>
                      <li>N'accèderont pas aux services depuis un territoire soumis à embargo</li>
                      <li>Ne donneront accès aux services à aucune partie sanctionnée</li>
                      <li>Respecteront intégralement les réglementations sur les contrôles à l'exportation</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                      Toute violation entraîne la résiliation immédiate sans indemnité et l'engagement de la
                      responsabilité du Client pour tous préjudices subis.
                    </p>
                  </section>

                  {/* Article 7 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 7 - ÉVOLUTION DES SERVICES
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-2 sm:mb-3 text-sm sm:text-base">
                      LAHALEX se réserve le droit absolu et discrétionnaire de :
                    </p>
                    <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                      <li>Modifier, suspendre ou interrompre tout ou partie de ses services</li>
                      <li>Faire évoluer les fonctionnalités, contenus ou supports</li>
                      <li>Adapter sa politique tarifaire</li>
                      <li>Modifier les présentes CGVA</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-2 sm:mt-3 text-sm sm:text-base">
                      Ces modifications s'imposent au Client sans préavis ni indemnisation.
                    </p>
                  </section>

                                    {/* Article 8 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 8 - DISPOSITIONS GÉNÉRALES
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          8.1 Droit Applicable
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Le présent contrat est exclusivement régi par le droit de la République du Bénin, à
                          l'exclusion de toute autre législation.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          8.2 Compétence Juridictionnelle
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          En cas de litige, seuls les tribunaux de la République du Bénin, et particulièrement le
                          Tribunal de Commerce de Cotonou, sont compétents, quelle que soit la nature de la demande ou
                          le lieu d'exécution du contrat.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">8.3 Validité</h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Si une clause des présentes CGVA était déclarée nulle ou inapplicable, les autres dispositions
                          conserveraient leur pleine validité. La clause nulle serait réputée non écrite.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          8.4 Intégralité
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Les présentes CGVA constituent l'intégralité de l'accord entre les parties et prévalent sur
                          tout autre document ou accord antérieur.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Article 9 */}
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                      ARTICLE 9 - CONDITIONS PARTICULIÈRES : SERVICES EN LIGNE
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          9.1 Conditions d'Accès aux Services
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.1.1 Prérequis Techniques et Responsabilités du Client</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Le Client reconnaît et accepte expressément :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>L'intégralité des coûts et limitations inhérents à la connexion Internet</li>
                              <li>Sa responsabilité exclusive concernant l'adéquation de son équipement technique</li>
                              <li>L'obligation de respecter les spécifications minimales communiquées par LAHALEX</li>
                              <li>L'obligation de mettre en place des mesures de sécurité et de sauvegarde appropriées</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Le Client garantit que sa configuration informatique est :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Exempte de virus et programmes malveillants</li>
                              <li>En parfait état de fonctionnement</li>
                              <li>Pleinement compatible avec les services LAHALEX</li>
                              <li>Protégée contre toute intrusion ou tentative d'intrusion</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.1.2 Disponibilité des Services</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Les services sont accessibles en principe 24h/24h et 7j/7, sous réserve d'interruptions pour :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Maintenance préventive ou corrective</li>
                              <li>Évolution technique des systèmes</li>
                              <li>Incidents techniques indépendants de la volonté de LAHALEX</li>
                              <li>Mesures de sécurité ou de protection</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Ces interruptions ne donnent droit à aucune indemnisation, remboursement ou compensation.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.1.3 Support Technique</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                              Un service d'assistance limité à l'utilisation des services est disponible aux horaires définis unilatéralement par LAHALEX. Ce service constitue une facilité révocable à tout moment sans préavis.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.1.4 Interdictions Absolues</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Le Client s'interdit formellement et irrévocablement de :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Accéder frauduleusement aux services ou s'y maintenir illégalement</li>
                              <li>Entraver, altérer ou perturber le fonctionnement des services</li>
                              <li>Introduire virus, malwares, ou tout dispositif nuisible</li>
                              <li>Procéder à des tentatives d'intrusion ou de piratage</li>
                              <li>Utiliser les services de manière contraire à leur destination</li>
                              <li>Porter atteinte à la sécurité ou à l'intégrité de la plateforme</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Toute violation entraîne la résiliation immédiate sans remboursement et l'engagement de la responsabilité civile et pénale du Client.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          9.2 Modalités d'Abonnement et de Facturation
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.2.1 Principe de Facturation Structurelle</h4>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                              Les abonnements sont impérativement souscrits sur la base du nombre total d'experts ou professionnels au sein de la structure du Client, sans exception possible. Aucun abonnement individuel ne peut être souscrit par un membre d'une structure multi-professionnels.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.2.2 Obligations Déclaratives du Client</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Le Client s'engage irrévocablement à :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Déclarer immédiatement toute modification de sa situation professionnelle</li>
                              <li>Signaler sans délai toute variation du nombre d'experts dans sa structure</li>
                              <li>Accepter tout ajustement rétroactif de facturation déterminé par LAHALEX</li>
                              <li>Régulariser sa situation au plus tard lors du renouvellement</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.2.3 Contrôles et Vérifications par LAHALEX</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              LAHALEX dispose du droit absolu et discrétionnaire de :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Demander à tout moment une attestation de situation du Client</li>
                              <li>Imposer un délai de 30 jours maximum pour la production de justificatifs</li>
                              <li>Procéder à des vérifications ponctuelles ou systématiques</li>
                              <li>Ajuster rétroactivement la facturation pour toute période antérieure</li>
                              <li>Suspendre immédiatement l'abonnement en cas de non-conformité</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              En cas d'absence de réponse ou de désaccord, LAHALEX peut résilier le contrat de plein droit, le Client demeurant redevable de l'intégralité des sommes dues.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          9.3 Gestion des Accès et Authentification
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.3.1 Attribution des Identifiants</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              LAHALEX attribue, à sa seule discrétion, les moyens d'accès aux services :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Codes d'identification et mots de passe personnalisés</li>
                              <li>Accès par adresse IP (exceptionnellement et sous conditions strictes)</li>
                              <li>Délégation d'authentification (selon disponibilité technique)</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Les modalités techniques d'authentification sont définies unilatéralement par LAHALEX et peuvent être modifiées à tout moment.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.3.2 Caractère Strictement Personnel des Accès</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Les identifiants sont strictement :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Personnels et intransmissibles</li>
                              <li>Confidentiels et non communicables</li>
                              <li>Réservés aux seuls utilisateurs autorisés expressément par LAHALEX</li>
                              <li>Inutilisables sur tout terminal non agréé</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Toute violation de cette confidentialité engage la responsabilité exclusive et intégrale du Client.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.3.3 Obligations de Sécurité</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Le Client assume la responsabilité absolue de :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>La préservation et la confidentialité des identifiants</li>
                              <li>La sécurisation de ses terminaux et réseaux</li>
                              <li>L'exactitude et la mise à jour de ses informations</li>
                              <li>La surveillance de l'utilisation de ses accès</li>
                              <li>La déclaration immédiate de tout usage suspect ou frauduleux</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.3.4 Mesures de Protection et Sanctions</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              LAHALEX se réserve le droit exclusif et discrétionnaire de :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Bloquer immédiatement tout accès suspect ou non conforme</li>
                              <li>Suspendre ou résilier l'abonnement en cas d'usage frauduleux</li>
                              <li>Modifier ou révoquer les identifiants à tout moment</li>
                              <li>Imposer des mesures de sécurité supplémentaires</li>
                              <li>Engager toute action judiciaire en cas de violation</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Le Client renonce expressément à toute réclamation liée à ces mesures de protection.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-2">9.3.5 Responsabilité en cas d'Usage Non Autorisé</h4>
                            <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                              Le Client demeure seul et entièrement responsable de :
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                              <li>Tout usage des services effectué avec ses identifiants</li>
                              <li>Toutes les conséquences financières et juridiques de ces usages</li>
                              <li>Les dommages causés à LAHALEX ou à des tiers</li>
                              <li>Le paiement intégral des sommes dues jusqu'à déclaration d'incident</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                              Aucune responsabilité de LAHALEX ne peut être engagée pour les conséquences d'un usage frauduleux ou non autorisé des accès du Client.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>


                  {/* Section CGV Logiciels */}
                  <div className="border-t-2 border-[#770D28] pt-8 mt-8">
                    <div className="text-center mb-6 sm:mb-8">
                      <h1 className="font-gobold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6 leading-tight text-balance">
                        CONDITIONS GÉNÉRALES DE VENTE - LOGICIELS LAHALEX
                      </h1>
                      <div className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">Version : Septembre 2025</p>
                        <p className="text-xs sm:text-sm text-gray-600">Document contractuel opposable</p>
                      </div>
                    </div>

                    {/* Dispositions préliminaires CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        DISPOSITIONS PRÉLIMINAIRES
                      </h2>
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          Les présentes conditions générales de vente (« CGV ») régissent de manière exclusive et impérative toute relation contractuelle entre LAHALEX (« l'Éditeur ») et ses clients (« le Client ») concernant l'acquisition, la licence d'utilisation et la maintenance des logiciels LAHALEX AVOCAT, LAHALEX NOTAIRE et LAHALEX COMMISSAIRE DE JUSTICE (ci-après désignés individuellement ou collectivement les « Logiciels »).
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          Ces CGV s'imposent sans restriction au Client, prévalent sur toute condition d'achat ou stipulation contraire, et ne peuvent être modifiées que par un accord écrit et signé par LAHALEX. L'Éditeur se réserve le droit absolu et discrétionnaire de modifier à tout moment les présentes CGV ainsi que ses tarifs, sans préavis ni justification.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          Toute commande constitue une acceptation irrévocable et sans réserve des présentes CGV.
                        </p>
                      </div>
                    </section>

                    {/* Article 1 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 1 - OBJET ET PORTÉE DES LOGICIELS
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            1.1 Description des Logiciels
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Les Logiciels constituent des solutions informatiques professionnelles spécialisées :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li><strong>LAHALEX AVOCAT :</strong> Logiciel de gestion de cabinet d'avocat et d'aide à la rédaction juridique</li>
                            <li><strong>LAHALEX NOTAIRE :</strong> Logiciel de gestion d'étude notariale et d'aide à la rédaction d'actes</li>
                            <li><strong>LAHALEX COMMISSAIRE DE JUSTICE :</strong> Logiciel de gestion d'office et d'aide aux procédures</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            1.2 Prérequis Techniques
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Le Client s'engage à respecter les spécifications techniques minimales communiquées par LAHALEX et assume l'entière responsabilité de la compatibilité de son environnement informatique, limitée au moment de l'installation initiale.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Article 2 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 2 - CONDITIONS FINANCIÈRES ET MODALITÉS DE RÈGLEMENT
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            2.1 Structure Tarifaire
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Les tarifs comprennent :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li><strong>Licence d'utilisation :</strong> Droit d'usage du Logiciel selon la configuration choisie</li>
                            <li><strong>Maintenance et support initial :</strong> Assistance technique gratuite pendant 12 mois</li>
                            <li><strong>Formation et accompagnement :</strong> Sessions de formation personnalisées (optionnel et payant)</li>
                            <li><strong>Modules additionnels :</strong> Extensions fonctionnelles spécialisées (optionnel et payant)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            2.2 Modalités de Paiement
                          </h3>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Les prix sont établis en francs CFA (XOF), toutes taxes comprises</li>
                            <li>Paiement comptant à la commande, sans escompte possible</li>
                            <li>Moyens acceptés : virement bancaire, carte bancaire, mobile money</li>
                            <li>Tout paiement échelonné requiert l'accord préalable écrit de LAHALEX</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            2.3 Sanctions en cas de Défaillance
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            En cas de retard de paiement :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Application automatique de pénalités de 15% du montant impayé</li>
                            <li>Suspension immédiate de la licence et des services</li>
                            <li>Exigibilité immédiate de l'intégralité des sommes dues</li>
                            <li>Indemnité forfaitaire de recouvrement de 100€ minimum</li>
                            <li>Résiliation de plein droit avec conservation des sommes versées</li>
                            <li>Perte définitive de la période de maintenance gratuite restante</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* Article 3 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 3 - RÉSERVE DE PROPRIÉTÉ ET TRANSFERT DE RISQUES
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            3.1 Principe de Réserve de Propriété
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            LAHALEX demeure propriétaire exclusif des Logiciels et de tous leurs composants jusqu'au complet paiement du prix en principal et accessoires, même en cas d'octroi de délais de paiement.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Cette réserve de propriété s'applique intégralement même en cas de :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Livraison et installation du Logiciel</li>
                            <li>Commencement d'utilisation par le Client</li>
                            <li>Procédures collectives (redressement, liquidation judiciaire)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            3.2 Conséquences de la Réserve de Propriété
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            En cas d'impayé, LAHALEX peut :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Revendiquer immédiatement la propriété des Logiciels</li>
                            <li>Procéder à la désinstallation à distance ou sur site</li>
                            <li>Récupérer tous les supports et documentations</li>
                            <li>Exiger la restitution de tous les éléments fournis</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            3.3 Transfert des Risques
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Les risques liés aux Logiciels sont transférés au Client dès la livraison ou mise à disposition, indépendamment du transfert de propriété.
                          </p>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Le Client assume dès la livraison :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Les risques de perte, détérioration ou dysfonctionnement</li>
                            <li>La responsabilité de la sauvegarde et sécurisation</li>
                            <li>Les conséquences de toute utilisation inappropriée</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    {/* Article 4 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 4 - LICENCES D'UTILISATION ET PROPRIÉTÉ INTELLECTUELLE
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            4.1 Propriété Intellectuelle Exclusive
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            LAHALEX détient l'intégralité des droits de propriété intellectuelle sur les Logiciels, notamment :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Droits d'auteur sur les codes sources et exécutables</li>
                            <li>Droits sur les bases de données intégrées</li>
                            <li>Marques, brevets et savoir-faire associés</li>
                            <li>Documentations et supports de formation</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            4.2 Licence d'Utilisation Restrictive
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Il est concédé au Client une licence :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li><strong>Personnelle et non cessible :</strong> Limitée au Client identifié</li>
                            <li><strong>Non exclusive :</strong> LAHALEX conserve le droit de concéder d'autres licences</li>
                            <li><strong>Strictement limitée :</strong> Usage professionnel interne uniquement</li>
                            <li><strong>Révocable :</strong> En cas de violation des conditions d'utilisation</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            4.3 Limitations et Interdictions Absolues
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Le Client s'interdit formellement de :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Reproduire, copier ou dupliquer les Logiciels</li>
                            <li>Procéder à l'ingénierie inverse, décompilation ou désassemblage</li>
                            <li>Modifier, adapter ou créer des œuvres dérivées</li>
                            <li>Distribuer, louer, prêter ou sous-licencier les Logiciels</li>
                            <li>Utiliser les Logiciels pour créer des produits concurrents</li>
                            <li>Supprimer ou modifier les mentions de propriété intellectuelle</li>
                            <li>Accorder des droits d'accès à des tiers non autorisés</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            4.4 Utilisation Multi-Postes
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Pour les licences multi-postes :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Le nombre d'utilisateurs simultanés est strictement limité</li>
                            <li>Chaque poste doit être déclaré et autorisé par LAHALEX</li>
                            <li>Toute utilisation excédentaire entraîne facturation supplémentaire</li>
                            <li>Un audit des installations peut être exigé à tout moment</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            4.5 Sanctions en cas de Violation
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Toute violation des droits de propriété intellectuelle entraîne :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Résiliation immédiate de la licence sans remboursement</li>
                            <li>Dommages-intérêts forfaitaires de 50 000€ minimum par violation</li>
                            <li>Engagement de la responsabilité civile et pénale du Client</li>
                            <li>Obligation de cessation immédiate et de destruction des copies illicites</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* Article 5 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 5 - LIVRAISON ET INSTALLATION
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            5.1 Modalités de Livraison
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            La livraison s'effectue selon les modalités convenues :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li><strong>Téléchargement sécurisé :</strong> Accès aux fichiers via plateforme dédiée</li>
                            <li><strong>Support physique :</strong> Envoi de supports de données (optionnel)</li>
                            <li><strong>Installation sur site :</strong> Intervention des équipes LAHALEX (optionnel)</li>
                            <li><strong>Installation à distance :</strong> Configuration par connexion sécurisée (optionnel)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            5.2 Délais de Livraison
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Les délais sont donnés à titre indicatif et ne constituent pas un engagement ferme. LAHALEX ne peut être tenue responsable des retards dus à :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Force majeure ou fait du prince</li>
                            <li>Défaillance des prestataires tiers</li>
                            <li>Impossibilité d'accès aux locaux du Client</li>
                            <li>Non-conformité de l'environnement technique du Client</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            5.3 Réception et Recette
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Le Client dispose d'un délai de 15 jours ouvrables à compter de la livraison pour signaler par écrit tout défaut de conformité. Passé ce délai, la livraison est réputée conforme et définitivement acceptée.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Article 6 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 6 - MAINTENANCE ET SUPPORT TECHNIQUE
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            6.1 Maintenance Gratuite Initiale
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            La licence d'utilisation inclut une période de maintenance gratuite de 12 mois à compter de la livraison, comprenant :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Mises à jour correctives (corrections de bugs)</li>
                            <li>Support technique de base</li>
                            <li>Adaptations réglementaires critiques</li>
                            <li>Optimisations de performance mineures</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            6.2 Maintenance Payante Post-Garantie
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            À l'expiration de la période gratuite de 12 mois, toute maintenance devient payante et comprend :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Mises à jour d'évolution (nouvelles fonctionnalités)</li>
                            <li>Support technique avancé</li>
                            <li>Adaptations réglementaires complètes</li>
                            <li>Optimisations de performance majeures</li>
                            <li>Corrections de bugs non critiques</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            6.3 Support Technique Graduated
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Le support technique est proposé selon différents niveaux :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li><strong>Support Standard :</strong> Assistance par email aux heures ouvrables</li>
                            <li><strong>Support Prioritaire :</strong> Assistance par téléphone avec engagement de délai</li>
                            <li><strong>Support Premium :</strong> Assistance dédiée et intervention sur site</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            6.4 Exclusions de Maintenance
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Sont expressément exclus de la maintenance, y compris pendant la période gratuite :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Formations et accompagnement utilisateur</li>
                            <li>Interventions liées à l'environnement du Client</li>
                            <li>Conséquences d'utilisation non conforme</li>
                            <li>Modifications ou personnalisations non autorisées</li>
                            <li>Dommages causés par des tiers ou cas de force majeure</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            6.5 Contrat de Maintenance Post-Garantie
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            Après la période gratuite, la maintenance fait l'objet d'un contrat séparé avec :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Durée minimale de 12 mois renouvelable</li>
                            <li>Facturation annuelle d'avance obligatoire</li>
                            <li>Tarification selon grilles en vigueur</li>
                            <li>Possibilité de résiliation avec préavis de 3 mois</li>
                            <li>Absence de maintenance payante entraînant la perte du support technique</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* Article 7 CGV */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLE 7 - GARANTIES ET RESPONSABILITÉ
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            7.1 Garantie de Conformité
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            LAHALEX garantit pendant 90 jours à compter de la livraison :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>La conformité des Logiciels aux spécifications documentées</li>
                            <li>Le fonctionnement selon les conditions normales d'utilisation</li>
                            <li>L'absence de défauts majeurs empêchant l'utilisation</li>
                          </ul>
                          <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                            Cette garantie est limitée à la correction des défauts ou au remboursement du prix, à la discrétion de LAHALEX.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            7.2 Limitation de Responsabilité
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            La responsabilité de LAHALEX est expressément limitée et exclue pour :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>Les dommages indirects, accessoires ou consécutifs</li>
                            <li>Les pertes de données, d'exploitation ou de bénéfices</li>
                            <li>Les préjudices commerciaux ou financiers</li>
                            <li>Les conséquences d'une utilisation inappropriée</li>
                            <li>Les dysfonctionnements liés à l'environnement du Client</li>
                          </ul>
                          <p className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                            En toute hypothèse, la responsabilité globale de LAHALEX est plafonnée au montant effectivement payé par le Client pour les Logiciels concernés.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            7.3 Absence de Garantie
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-2 text-sm sm:text-base">
                            LAHALEX ne garantit pas :
                          </p>
                          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li>L'adaptation des Logiciels aux besoins spécifiques du Client</li>
                            <li>Le fonctionnement ininterrompu ou exempt d'erreurs</li>
                            <li>La compatibilité avec l'environnement évolutif du Client</li>
                            <li>Les résultats particuliers de l'utilisation</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            7.4 Usage Frauduleux
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Aucune responsabilité de LAHALEX ne peut être engagée pour les conséquences d'un usage frauduleux ou non autorisé des accès du Client.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Articles 8-15 CGV - Version condensée */}
                    <section>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#770D28] mb-3 sm:mb-4 text-balance">
                        ARTICLES 8-15 - DISPOSITIONS COMPLÉMENTAIRES
                      </h2>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            ARTICLE 8 - FORMATION ET ACCOMPAGNEMENT
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            LAHALEX propose des sessions de formation (payantes) : formation initiale, formations aux nouvelles fonctionnalités, sessions de perfectionnement avancé, formation d'administrateurs systèmes. Services d'accompagnement sur mesure : analyse des besoins, migration des données, intégration avec les systèmes du Client, assistance au changement organisationnel.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            ARTICLE 9 - ÉVOLUTION ET MISES À JOUR
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            LAHALEX se réserve le droit discrétionnaire de faire évoluer les fonctionnalités, modifier l'interface, adapter aux évolutions réglementaires, interrompre le support de versions obsolètes. Mises à jour obligatoires gratuites la première année, puis payantes à partir du 13ème mois.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            ARTICLE 10 - DONNÉES ET CONFIDENTIALITÉ
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Le Client conserve la propriété de ses données métier. LAHALEX s'engage à traiter les données selon sa politique de confidentialité, mettre en place des mesures de sécurité appropriées, ne pas utiliser les données à des fins autres que contractuelles. Le Client assume la responsabilité exclusive de la sauvegarde, archivage, récupération et sécurisation de ses données.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            ARTICLE 11 - RÉSILIATION
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Le Client peut résilier avec préavis de 3 mois par lettre recommandée, sans remboursement. LAHALEX peut résilier immédiatement en cas de défaut de paiement, violation des conditions, usage frauduleux, atteinte aux droits de propriété intellectuelle, procédure collective. La résiliation entraîne cessation immédiate du droit d'utilisation, désactivation des licences, obligation de destruction des copies, maintien des obligations de confidentialité.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            ARTICLES 12-15 - DISPOSITIONS FINALES
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            <strong>Article 12 - Cession et Transfert :</strong> Licences strictement personnelles et intransmissibles. <strong> <br />Article 13 - Sanctions Internationales :</strong> Respect des réglementations sur les contrôles à l'exportation. <strong> <br />Article 14 - Force Majeure :</strong> Exonération de responsabilité pour cyberattaques, pannes de réseaux, défaillances d'infrastructures. <strong> <br />Article 15 - Dispositions Générales :</strong> Droit béninois applicable, compétence exclusive du Tribunal de Commerce de Cotonou, validité partielle, intégralité contractuelle, conservation des documents.
                          </p>
                        </div>
                      </div>
                    </section>

                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mt-8">
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      <strong>ACCEPTATION OBLIGATOIRE</strong>
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 mt-2">
                        Toute commande de Logiciels LAHALEX emporte acceptation pleine et entière des présentes Conditions Générales de Vente.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-3">
                        Version : 1.0 - LAHALEX se réserve le droit de modifier ces conditions à tout moment. La version applicable est celle en vigueur à la date de commande.
                    </p>
                    </div>
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
