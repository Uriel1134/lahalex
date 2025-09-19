"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function RedactionActesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5EF] font-sf-pro">
      {/* Header global */}
      <Header />

      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <div className="flex items-center space-x-2 mb-8 text-sm text-gray-600">
            <a
              href="/lahalex-avocat"
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
                />
              </svg>
              Lahalex Avocat
            </a>
          </div>

          {/* Hero */}
          <div className="mb-12 lg:mb-16">
            <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
              Rédaction d'actes juridiques assistée et avancée
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
              Gagnez en efficacité, en rigueur et en sécurité grâce au module
              Rédaction de LahaLex Avocat : un espace conçu pour transformer la
              création d'actes juridiques en une expérience fluide, intelligente
              et sur mesure.
            </p>
            <a
              href="/essai-gratuit"
              className="bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
            >
              Essai gratuit
            </a>
          </div>

          {/* Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-200 h-48 sm:h-64 rounded-lg"></div>
            <div className="bg-gray-200 h-48 sm:h-64 rounded-lg"></div>
            <div className="bg-gray-200 h-48 sm:h-64 rounded-lg"></div>
          </div>

          {/* Avantages */}
          <div className="mb-16">
            <h2 className="font-gobold text-2xl sm:text-3xl text-gray-900 mb-8">
              Vos avantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title:
                    "Accès à une bibliothèque de plus de 800 modèles juridiques",
                  desc: "",
                },
                {
                  title: "Importation et gestion de vos propres modèles",
                  desc: "",
                },
                {
                  title:
                    "Actualisée régulièrement, elle couvre tous les domaines du droit",
                  desc: "civil, pénal, commercial, social, etc.",
                },
                {
                  title: "Remplissage intelligent des documents",
                  desc: "Les informations sont automatiquement extraites de vos fiches clients ou dossiers en cours.",
                },
                {
                  title: "Classification intelligente des modèles",
                  desc: "Trouvez le bon document en un clic selon la nature du litige ou le profil juridique des parties (mineur, société étrangère, administration...).",
                },
                {
                  title: "Personnalisation poussée",
                  desc: "Ajoutez le logo de votre cabinet, vos styles, vos modèles internes pour un rendu parfaitement professionnel.",
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
                    <h3 className="font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  )
}
