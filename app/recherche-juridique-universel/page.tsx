"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function RecherchePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      {/* Header global */}
      <Header />

      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-8 pt-8">
            <a
              href="/lahalex-universel"
              className="flex items-center text-black hover:text-[#770D28] transition-colors font-sf-pro text-lg"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Lahalex Universel
            </a>
          </div>

          {/* Hero */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-gobold text-[#770D28] mb-12 leading-tight">
              Recherche juridique avancée
            </h1>

            <div className="mb-12">
              <a
                href="/essai-gratuit"
                className="inline-block bg-[#770D28] text-white px-8 py-4 rounded-lg hover:bg-[#5a0a1e] transition-all duration-300 font-sf-pro text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Essai gratuit
              </a>
            </div>

            {/* Placeholder principal */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[522px] bg-gray-300 rounded-lg mb-16 shadow-lg"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Texte + image */}
              <div className="space-y-8">
                <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed font-sf-pro">
                  Notre outil de recherche juridique avancée permet d'exploiter
                  de façon structurée et intelligente un vaste ensemble de
                  contenus juridiques tels que la législation, la jurisprudence,
                  la doctrine ou encore l'actualité. Grâce à des technologies
                  performantes, il offre des résultats ciblés, précis et
                  hiérarchisés.
                </p>

                <div className="w-full h-[250px] sm:h-[300px] lg:h-[371px] bg-gray-300 rounded-lg shadow-lg"></div>
              </div>

              {/* Avantages */}
              <div className="space-y-16 relative">
 {/* Ligne verticale décorative */}
  <div className="absolute left-4 top-0 bottom-0 w-px bg-[#770D28]" />

  {/* Bloc 1 */}
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 mt-3 relative z-10">
      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-[#770D28] rounded-full"></div>
      </div>
    </div>
    <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed font-sf-pro">
      Des filtres multicritères, une interface intuitive et des
      fonctionnalités de tri facilitent l'accès rapide aux
      informations les plus pertinentes, constamment mises à jour
      et directement exploitables dans la pratique professionnelle.
    </p>
  </div>

  {/* Bloc 2 */}
  <div className="flex items-start space-x-6 mt-8">
    <div className="flex-shrink-0 mt-3 relative z-10">
      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-[#770D28] rounded-full"></div>
      </div>
    </div>
    <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed font-sf-pro">
      LAHALEX centralise tout :<br />
      • derniers textes et jurisprudences en temps réel <br />
      • pertinence et précision <br />
      • mise à jour en temps réel <br />
      • gain de temps considérable
    </p>
  </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  )
}
