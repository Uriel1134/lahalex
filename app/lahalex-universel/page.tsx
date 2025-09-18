"use client"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function LahalexUniverselPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#FAF5EF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
                LAHALEX UNIVERSEL
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                Pensée pour accompagner les juristes, étudiants, doctorants, entreprises, institutions publiques et
                privées, universités, notaires, avocats, commissaires de justice et tous les praticiens du droit,
                LahaLex Universel vous donne un accès simplifié, intelligent et innovant à l'information juridique.
              </p>
              <button
                className="bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
                onClick={() => (window.location.href = "/essai-gratuit")}
              >
                Essaie gratuit
              </button>
            </div>

            {/* Right Column - Placeholder for future image/video */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section with 4 cards for Universel */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ backgroundColor: "#770D28" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Recherche juridique avancée */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-sf-pro text-lg text-[#770D28] mb-4">Recherche juridique avancée</h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Notre outil de recherche juridique avancée permet d'exploiter de façon structurée et intelligente un
                vaste ensembl...
              </p>
              <div className="text-right">
                <button
                  className="border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/recherche-juridique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Bibliothèque pluridisciplinaire */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="font-sf-pro text-lg text-[#770D28] mb-4">Bibliothèque pluridisciplinaire</h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Notre bibliothèque pluridisciplinaire est une plateforme en ligne dédiée à la consultation d'un vaste
                ensemble d'ouvrages et de documents en version numé...
              </p>
              <div className="text-right">
                <button
                  className="border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/bibliotheque-numerique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Veille juridique */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"
                  ></path>
                </svg>
              </div>
              <h3 className="font-sf-pro text-lg text-[#770D28] mb-4">Veille juridique</h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Notre veille juridique est un dispositif structuré de surveillance, de collecte, d'analyse et de
                diffusion continue d'informations législa...
              </p>
              <div className="text-right">
                <button
                  className="border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/veille-juridique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Autres outils */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-sf-pro text-lg text-[#770D28] mb-4">Autres outils</h3>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Cette section de notre plateforme a été conçue comme un espace de référence indispensable, tant pour les
                professionnels du droit (avocat...
              </p>
              <div className="text-right">
                <button
                  className="border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/autres-outils-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
