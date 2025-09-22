"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function NotairePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Retour */}
        <div className="flex items-center space-x-2 mb-8 text-sm text-gray-600">
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
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Lahalex Notaire
          </a>
        </div>

        {/* Section Intro */}
        <section className="mb-16">
          <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
            Outil d&apos;assistance IA dédié à l&apos;optimisation de vos activités
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
            Optimisez votre pratique notariale grâce à l&apos;assistant IA intégré à
            notre logiciel. Déléguez les tâches répétitives et concentrez-vous sur
            ce qui compte.
          </p>
          <a
            href="/essai-gratuit"
            className="inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
          >
            Essai gratuit
          </a>
        </section>

        {/* Placeholders images */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-64 rounded-lg"></div>
          </div>
        </section>

        {/* Avantages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Vos avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Bibliothèque complète des actes notariaux",
                desc: "Accédez à plus de 100 actes types régulièrement actualisés (vente, succession, donation, création de SCI, etc.).",
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
              <div key={i} className="flex items-start space-x-3">
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
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
