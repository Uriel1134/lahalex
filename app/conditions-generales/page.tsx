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
                CONDITIONS GÉNÉRALES DE VENTE ET D'UTILISATION
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

                  {/* Articles suivants - format condensé pour économiser l'espace */}
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

                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      <strong>ACCEPTATION OBLIGATOIRE</strong>
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 mt-2">
                      Toute commande de services LAHALEX emporte acceptation pleine et entière des présentes Conditions
                      Générales de Vente et d'Abonnement.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-3">
                      Version : 1.0 - LAHALEX se réserve le droit de modifier ces conditions à tout moment. La version
                      applicable est celle en vigueur à la date de souscription.
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
