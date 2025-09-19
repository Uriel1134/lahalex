"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function BibliothequePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5EF] font-sf-pro">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Retour */}
        <div className="mb-8 animate-fade-in">
          <a
            href="/lahalex-universel"
            className="flex items-center text-gray-600 hover:text-[#770D28] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
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
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-from-left">
              <h1 className="font-gobold text-4xl lg:text-5xl text-[#770D28] mb-6 leading-tight">
                Bibliothèque numérique
              </h1>
              <a
                href="/essai-gratuit"
                className="inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Essai gratuit
              </a>
            </div>
            <div className="animate-slide-from-right">
              <div className="bg-gray-300 rounded-lg aspect-video"></div>
            </div>
          </div>
        </div>

        {/* Second placeholder */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-gray-300 rounded-lg aspect-video max-w-2xl mx-auto"></div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-gray-700 text-lg leading-relaxed">
            Notre bibliothèque numérique est une plateforme en ligne dédiée à la
            consultation d&apos;un vaste ensemble d&apos;ouvrages et de documents en
            version numérique de diverses matières avec plus de 500.000 livres
            disponibles. Elle permet un accès structuré et permanent à une large
            collection de ressources documentaires, accessibles à tout moment
            depuis un ordinateur, une tablette ou un smartphone. L&apos;ensemble
            de ces contenus est en accès libre et gratuit une fois votre
            abonnement souscrit.
          </p>
        </div>

        {/* Avantages */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="font-gobold text-2xl text-[#770D28] mb-8">
            Avantages dans notre bibliothèque numérique
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-left"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-[#770D28] rounded-full flex items-center justify-center font-gobold text-[#770D28] text-xl">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Consultation des ouvrages à tout moment et depuis n&apos;importe quel lieu.
                </h3>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-right"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#770D28] rounded-full flex items-center justify-center font-gobold text-white text-xl">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Notre bibliothèque numérique ne se limite pas au droit
                </h3>
                <p className="text-gray-600">
                  Elle regorge aussi de ressources en santé, finance, histoire,
                  sciences, littérature et bien plus encore.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-left"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#770D28] rounded-full flex items-center justify-center font-gobold text-white text-xl">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Plus de 3 000 nouveaux ouvrages sont ajoutés chaque année
                </h3>
                <p className="text-gray-600">
                  Garantissant une base constamment enrichie et à jour.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-right"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-[#770D28] rounded-full flex items-center justify-center font-gobold text-[#770D28] text-xl">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Navigation facilitée grâce à un moteur de recherche avancé
                </h3>
                <p className="text-gray-600">
                  Des mots-clés et des filtres thématiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
