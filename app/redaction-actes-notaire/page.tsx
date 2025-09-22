"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function NotaireActesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      {/* Header global */}
      <Header />

      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <a
              href="/lahalex-notaire"
              className="flex items-center hover:text-[#770D28] transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Lahalex Notaire
            </a>
          </div>

          {/* Hero */}
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-gobold text-[#770D28] mb-6 leading-tight">
              Rédaction d&apos;actes juridiques assistée et avancée
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed">
              Transformez la rédaction de vos actes en une expérience rapide,
              rigoureuse et totalement maîtrisée. LahaLex vous offre un espace
              sécurisé, intelligent et personnalisable, adapté aux spécificités
              du notariat.
            </p>
            <a
              href="/essai-gratuit"
              className="inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
            >
              Essai gratuit
            </a>
          </section>

          {/* Illustrations */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-300 h-48 sm:h-64 rounded-lg"></div>
              <div className="bg-gray-300 h-48 sm:h-64 rounded-lg"></div>
              <div className="bg-gray-300 h-48 sm:h-64 rounded-lg"></div>
            </div>
          </section>

          {/* Avantages */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-gobold text-gray-900 mb-8">
              Vos avantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {[
                {
                  title: "Bibliothèque complète des actes notariaux",
                  desc: "Accédez à plus de 500 actes types régulièrement actualisés (vente, succession, donation, création de SCI, etc.).",
                },
                {
                  title: "Personnalisation complète",
                  desc: "Ajoutez le logo de l'office, vos styles d'écriture, vos formules spécifiques, pour un rendu soigné et fidèle à votre pratique.",
                },
                {
                  title: "Classement intelligent",
                  desc: "Trouvez immédiatement le bon modèle en fonction de l'opération envisagée et des parties impliquées (indivision, société, mineur, usufruitier...).",
                },
                {
                  title: "Importation de vos modèles internes",
                  desc: "Conservez votre savoir-faire : ajoutez vos propres trames, clauses et configurations rédactionnelles.",
                },
                {
                  title: "Remplissage automatique des actes",
                  desc: "Les données sont extraites de la fiche client et du dossier pour générer automatiquement les clauses essentielles : fini les ressaisies !",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  )
}
