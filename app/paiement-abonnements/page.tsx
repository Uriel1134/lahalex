"use client"

import { useState } from "react"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function PaiementAbonnements() {
  const [activeTab, setActiveTab] = useState("universel")
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedDiscount, setSelectedDiscount] = useState<number | null>(null)

  const tabs = [
    { id: "universel", label: "Lahalex Universel" },
    { id: "avocat", label: "Lahalex Avocat" },
    { id: "notaire", label: "Lahalex Notaire" },
    { id: "commissaire", label: "Lahalex Commissaire de justice" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-left mb-6">
            <h1 className="font-gobold text-2xl sm:text-3xl lg:text-4xl text-[#770D28] leading-tight">NOS TARIFS</h1>
          </div>

          <div className="flex flex-wrap justify-center mb-0 gap-2 relative z-10 -mb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pricing-tab px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 ease-in-out text-xs sm:text-sm transform hover:scale-105 hover:shadow-lg active:scale-95 ${
                  activeTab === tab.id
                    ? "bg-[#770D28] text-white shadow-lg"
                    : "bg-white text-[#770D28] border border-[#770D28] hover:bg-[#fdf2f8] hover:border-[#5a0a1f]"
                }`}
                style={{ borderRadius: 0 }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "universel" && (
            <div className="pricing-content animate-fade-in opacity-0 animate-delay-100">
              {/* Header Section */}
              <div className="bg-[#770D28] rounded-t-lg transform transition-all duration-500 ease-out">
                <div className="text-white p-4 sm:p-6"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8 items-stretch">
                {/* Student Card */}
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#770D28] animate-slide-up opacity-0 animate-delay-200">
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <h4 className="font-sf-pro text-lg sm:text-xl text-[#770D28] mb-4">Étudiant(es)/Doctorant(es)</h4>
                    <div className="space-y-3 mb-6 flex-1">
                      {[
                        "Recherche juridique avancée",
                        "Veille juridique",
                        "Bibliothèque pluridisciplinaire",
                        "Autres outils",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center transform transition-all duration-200 hover:translate-x-1"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 transition-transform duration-200 hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-sm font-sf-pro">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a
                        href="/nous-contacter"
                        className="w-full bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center font-sf-pro transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg"
                      >
                        Demandez un devis
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Card */}
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#770D28] animate-slide-up opacity-0 animate-delay-300">
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <h4 className="font-sf-pro text-lg sm:text-xl text-[#770D28] mb-2">Praticiens/Praticiennes</h4>
                    <p className="text-sm text-gray-600 mb-6 font-sf-pro">
                      Professionnel du droit : avocats, magistrats, notaires, juriste d'entreprise, consultants, etc
                    </p>

                    <div className="space-y-3 mb-6 flex-1">
                      {[
                        "Recherche juridique avancée",
                        "Veille juridique",
                        "Bibliothèque pluridisciplinaire",
                        "Autres outils",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center transform transition-all duration-200 hover:translate-x-1"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 transition-transform duration-200 hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-sm font-sf-pro">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <a
                        href="/nous-contacter"
                        className="w-full bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center font-sf-pro transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg"
                      >
                        Demandez un devis
                      </a>
                    </div>
                  </div>
                </div>

                {/* Institutions Card */}
                <div className="bg-white border border-gray-200 rounded-lg flex flex-col transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#770D28] animate-slide-up opacity-0 animate-delay-400">
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <h4 className="font-sf-pro text-lg sm:text-xl text-[#770D28] mb-4">
                      Formule établissements supérieurs et institutions publiques/privées
                    </h4>
                    <div className="flex-1">
                      <p className="text-gray-900 text-base sm:text-lg mb-6 leading-relaxed font-sf-pro">
                        Vous êtes : une institution publique ou privée, une ONG, une entreprise, une association ou un
                        établissement d'enseignement supérieur ?<br />
                        Nous avons une formule sur mesure pour vous.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="/nous-contacter"
                        className="w-full bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center font-sf-pro transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg"
                      >
                        Demandez un devis
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === "avocat" || activeTab === "notaire" || activeTab === "commissaire") && (
            <div className="pricing-content animate-fade-in opacity-0 animate-delay-100">
              {/* Header Section */}
              <div className="bg-[#770D28] rounded-t-lg transform transition-all duration-500 ease-out">
                <div className="text-white p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0">
                    <div className="flex items-center">
                      <h3 className="font-gobold text-lg sm:text-xl">Achat du logiciel</h3>
                      <div className="hidden lg:block w-px h-8 bg-white opacity-30 ml-4"></div>
                    </div>
                    <div className="flex-1 lg:ml-4">
                      <h4 className="font-medium mb-2">Important</h4>
                      <p className="text-sm">
                        <strong>Option Assistant IA</strong> – Facturation selon votre consommation, sans prix fixe et
                        sans possibilité de donner un tarif à l'avance. Une facture récapitulative est envoyée en fin de
                        mois, avec un coût moyen généralement inférieur à 100 FCFA par demande.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 max-w-2xl">
                <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#770D28] animate-slide-up opacity-0 animate-delay-200">
                  <h4 className="font-sf-pro text-lg sm:text-xl text-[#770D28] mb-6">
                    {activeTab === "avocat" && "Lahalex Avocat"}
                    {activeTab === "notaire" && "Lahalex Notaire"}
                    {activeTab === "commissaire" && "Lahalex Commissaire de justice"}
                  </h4>

                  <div className="space-y-3 mb-6">
                    {[
                      "Gestion simplifiée de votre cabinet",
                      "Rédaction d'actes juridiques assistée et avancée",
                      "Option - Outil d'assistance IA dédié à l'optimisation de vos activités",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start transform transition-all duration-200 hover:translate-x-1"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0 transition-transform duration-200 hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Special Offer */}
                  <div className="bg-blue-100 rounded-lg p-4 mb-6 transform transition-all duration-200 hover:bg-blue-200">
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0 transition-transform duration-200 hover:scale-110">
                        i
                      </div>
                      <div className="text-sm">
                        <p>
                          La première année de mises à jour et de maintenance vous est <strong>offerte</strong>.
                          Ensuite, continuez à profiter pour seulement <strong>25.000 FCFA</strong> par mois
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        className="mr-3 mt-1 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      />
                      <span className="text-sm group-hover:text-[#770D28] transition-colors duration-200">
                        Ajouter l'option IA afin d'optimiser votre travail
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                    <a
                      href="/nous-contacter"
                      className="flex-1 bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center font-sf-pro transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    >
                      Demandez un devis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-delay-100 {
          animation-delay: 0.1s;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-delay-300 {
          animation-delay: 0.3s;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  )
}
