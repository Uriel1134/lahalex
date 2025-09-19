"use client"

import Image from "next/image"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function LahalexAvocatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5EF] font-sf-pro">
      <Header />

      <main className="flex-1">
        {/* Section principale */}
        <section className="bg-white py-8 sm:py-12 lg:py-16">
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
                  ></path>
                </svg>
                Lahalex Avocat
              </a>
            </div>

            {/* Titre & description */}
            <div className="mb-12 lg:mb-16">
              <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
                Outil d&apos;assistance IA dédié à l&apos;optimisation de vos
                activités
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
                Boostez votre efficacité juridique avec l&apos;assistant IA intégré à
                notre logiciel. Libérez-vous des tâches répétitives et
                concentrez-vous sur l&apos;essentiel : notre intelligence
                artificielle vous accompagne dans l&apos;analyse stratégique de vos
                dossiers. Elle vous aide à détecter les vices de procédure, à
                analyser les conclusions adverses et à préparer vos argumentaires en
                un temps record.
              </p>
              <button className="bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors">
                Essai gratuit
              </button>
            </div>

            {/* Placeholders images */}
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
                  "Détection automatique des vices de procédure",
                  "Création intelligente de dossiers, temps, contacts",
                  "Analyse assistée des conclusions et pièces adverses",
                  "Dictée vocale & commandes intelligentes pour aller plus vite, plus loin",
                ].map((avantage, i) => (
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
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">{avantage}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
