"use client"

import { useState } from "react"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function PaiementAbonnements() {
  const [activeTab, setActiveTab] = useState("universel")
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedDiscount, setSelectedDiscount] = useState<number | null>(null)

  const prices = {
    student: { monthly: 25000, annual: 300000 },
    professional: { monthly: 100000, annual: 1200000 },
  }

  const calculatePrice = (basePrice: number, discount: number | null, isAnnual: boolean) => {
    if (!isAnnual || !discount) return basePrice
    const discountAmount = (basePrice * discount) / 100
    return Math.round(basePrice - discountAmount)
  }

  const studentPrice = isAnnual ? prices.student.annual : prices.student.monthly
  const professionalBasePrice = isAnnual ? prices.professional.annual : prices.professional.monthly
  const professionalPrice = calculatePrice(professionalBasePrice, selectedDiscount, isAnnual)

  const tabs = [
    { id: "universel", label: "Lahalex Universel" },
    { id: "avocat", label: "Lahalex Avocat" },
    { id: "notaire", label: "Lahalex Notaire" },
    { id: "commissaire", label: "Lahalex Commissaire de justice" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      <section className="bg-[#FAF5EF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-left mb-6">
            <h1 className="font-gobold text-2xl sm:text-3xl lg:text-4xl text-[#770D28] leading-tight">NOS TARIFS</h1>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-0 gap-2 relative z-10 -mb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pricing-tab px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all text-xs sm:text-sm hover:shadow-lg ${
                  activeTab === tab.id
                    ? "bg-[#770D28] text-white"
                    : "bg-[#FAF5EF] text-[#770D28] border border-[#770D28] hover:bg-[#fdf2f8]"
                }`}
                style={{ borderRadius: 0 }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Universel Content */}
          {activeTab === "universel" && (
            <div className="pricing-content">
              {/* Header Section */}
              <div className="bg-[#770D28] rounded-t-lg">
                <div className="text-white p-4 sm:p-6">
                  <div>
                    <h3 className="font-sf-pro text-lg sm:text-xl mb-4">Nos formules</h3>
                    {/* Monthly/Annual Toggle */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <span className="text-sm font-sf-pro">Mensuel</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isAnnual}
                          onChange={(e) => setIsAnnual(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-[#FAF5EF] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#FAF5EF] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#770D28]"></div>
                      </label>
                      <span className="text-sm font-sf-pro">Annuel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 items-start">
                {/* Student Card */}
                <div className="bg-[#FAF5EF] border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-6 lg:p-8">
                    <h4 className="font-sf-pro text-lg sm:text-xl text-[#770D28] mb-4">Étudiant(es)/Doctorant(es)</h4>
                    <div className="space-y-3 mb-6">
                      {[
                        "Recherche juridique avancée",
                        "Veille juridique",
                        "Bibliothèque pluridisciplinaire",
                        "Autres outils",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
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
                    <div className="border-t pt-4">
                      <div className="text-right mb-4">
                        <span className="text-sm text-gray-500 font-sf-pro">Total</span>
                        <div className="font-gobold text-xl sm:text-2xl text-gray-900">
                          {studentPrice.toLocaleString("fr-FR")} FCFA
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <a
                          href="/connexion"
                          className="flex-1 bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center font-sf-pro"
                        >
                          S'abonner
                        </a>
                        <a
                          href="/connexion"
                          className="text-[#770D28] px-4 py-3 rounded-lg hover:bg-[#fdf2f8] whitespace-nowrap inline-block text-center font-sf-pro"
                        >
                          essai gratuit →
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Footer Bar */}
                  <div className="bg-[#770D28] text-white text-center py-3 text-sm font-medium uppercase font-sf-pro">
                    JUSTIFICATIF OBLIGATOIRE
                  </div>
                </div>

                {/* Professional Card */}
                <div className="bg-[#FAF5EF] border border-gray-200 rounded-lg p-6 lg:p-8">
                  <h4 className="font-sf-pro text-lg sm:text-xl text-[#770D28] mb-2">Praticiens/Praticiennes</h4>
                  <p className="text-sm text-gray-600 mb-6 font-sf-pro">
                    Professionnel du droit : avocats, magistrats, notaires, juriste d'entreprise, consultants, etc
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Recherche juridique avancée",
                      "Veille juridique",
                      "Bibliothèque pluridisciplinaire",
                      "Autres outils",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
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

                  {/* Discount Options */}
                  <div className="space-y-3 mb-6">
                    {[
                      { value: 5, title: "-5% de réduction", desc: "Pour un abonnement annuel payé comptant" },
                      { value: 15, title: "-15% de réduction", desc: "Pour un engagement sur 2 ans" },
                      { value: 30, title: "-30% de réduction", desc: "Pour un engagement sur 3 ans" },
                      {
                        value: 10,
                        title: "-10% de réduction",
                        desc: "sur chaque abonnement dès la souscription de 2 abonnements ou plus par la même personne",
                      },
                    ].map((discount) => (
                      <label key={discount.value} className="flex items-start">
                        <input
                          type="radio"
                          name="discount"
                          value={discount.value}
                          checked={selectedDiscount === discount.value}
                          onChange={() => setSelectedDiscount(discount.value)}
                          className="mr-3 mt-1 flex-shrink-0"
                        />
                        <div>
                          <div className="font-medium text-sm font-sf-pro">{discount.title}</div>
                          <div className="text-xs text-gray-500 font-sf-pro">{discount.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-right mb-4">
                      <span className="text-sm text-gray-500 font-sf-pro">Total</span>
                      <div className="font-gobold text-xl sm:text-2xl text-gray-900">
                        {professionalPrice.toLocaleString("fr-FR")} FCFA
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <a
                        href="/connexion"
                        className="flex-1 bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center font-sf-pro"
                      >
                        S'abonner
                      </a>
                      <a
                        href="/connexion"
                        className="text-[#770D28] px-4 py-3 rounded-lg hover:bg-[#fdf2f8] whitespace-nowrap inline-block text-center font-sf-pro"
                      >
                        essai gratuit →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Service Contents */}
          {(activeTab === "avocat" || activeTab === "notaire" || activeTab === "commissaire") && (
            <div className="pricing-content">
              {/* Header Section */}
              <div className="bg-[#770D28] rounded-t-lg">
                <div className="text-white p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0">
                    <div className="flex items-center">
                      <h3 className="font-gobold text-lg sm:text-xl">Achat du logiciel</h3>
                      <div className="hidden lg:block w-px h-8 bg-[#FAF5EF] opacity-30 ml-4"></div>
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

              {/* Single Card */}
              <div className="mt-6 lg:mt-8 max-w-2xl">
                <div className="bg-[#FAF5EF] border border-gray-200 rounded-lg p-6 lg:p-8">
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
                      <div key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
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
                  <div className="bg-blue-100 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
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

                  {/* IA Option */}
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input type="checkbox" className="mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm">Ajouter l'option IA afin d'optimiser votre travail</span>
                    </label>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-right mb-4">
                      <span className="text-sm text-gray-500">Total :</span>
                      <div className="font-gobold text-xl sm:text-2xl text-gray-900">3.500.000 FCFA</div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <a
                        href="/connexion"
                        className="flex-1 bg-[#770D28] text-white py-3 rounded-lg font-medium hover:bg-[#5a0a1f] inline-block text-center"
                      >
                        Acheter
                      </a>
                      <a
                        href="/connexion"
                        className="text-[#770D28] px-4 py-3 rounded-lg hover:bg-[#fdf2f8] whitespace-nowrap inline-block text-center font-sf-pro"
                      >
                        essai gratuit →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Formule Établissements Section - Only show for Universel */}
          {activeTab === "universel" && (
            <section className="bg-[#FAF5EF] py-20">
              <div className="bg-[#FAF5EF] py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="font-gobold text-2xl sm:text-3xl text-[#770D28] mb-8 lg:mb-12">
                    FORMULE ÉTABLISSEMENTS SUPÉRIEURS ET INSTITUTIONS PUBLIQUES/PRIVÉES
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div>
                      <p className="text-gray-900 text-base sm:text-lg mb-6 leading-relaxed font-sf-pro">
                        Vous êtes : une institution publique ou privée, une ONG, une entreprise, une association ou un
                        établissement d'enseignement supérieur ?<br />
                        Nous avons une formule sur mesure pour vous.
                      </p>
                      <a
                        href="/nous-contacter"
                        className="border-2 border-[#770D28] text-[#770D28] px-8 py-3 rounded-lg font-medium hover:bg-[#fdf2f8] transition-colors inline-block font-sf-pro"
                      >
                        Contactez-nous
                      </a>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                      <img
                        src="/placeholder.svg?height=400&width=500&text=Établissements+supérieurs"
                        alt="Établissements supérieurs"
                        className="w-full max-w-md lg:max-w-lg rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
