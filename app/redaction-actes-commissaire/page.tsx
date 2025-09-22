"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function CommissaireActesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      {/* Header global */}
      <Header />

      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <a
              href="/lahalex-commissaire-justice"
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
              Lahalex Commissaire de justice
            </a>
          </div>

          {/* Hero */}
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-gobold text-[#770D28] mb-6 leading-tight">
              Rédactions d'actes juridiques assistée et avancée
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed">
              Fini les copier-coller à rallonge et les modèles obsolètes ! Avec
              LahaLex, vous rédigez vos actes 3 fois plus vite, sans jamais
              sacrifier la qualité.
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
                  title: "+100 modèles prêts à l'emploi",
                  desc: "Constats, significations, actes de recouvrement... Rédigez tous vos actes en un clic, toujours conformes et actualisés.",
                },
                {
                  title: "Un rendu 100 % professionnel",
                  desc: "Logo, police, mise en page : personnalisez vos documents pour un rendu impeccable, à votre image.",
                },
                {
                  title: "Classement malin par mission, zone et profil",
                  desc: "Trouvez immédiatement le bon modèle selon la nature de l'acte et la situation du justiciable.",
                },
                {
                  title: "Importez vos propres modèles",
                  desc: "Vos habitudes ne changent pas : LahaLex s'adapte à vous.",
                },
                {
                  title: "Remplissage automatique & personnalisé",
                  desc: "Les informations de vos dossiers s'intègrent automatiquement dans l'acte. Moins d'erreurs, plus de rapidité.",
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
