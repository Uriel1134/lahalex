"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function CommissaireJusticePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5EF] font-sf-pro">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              ></path>
            </svg>
            Lahalex Commissaire de justice
          </a>
        </div>

        {/* Section Intro */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-gobold text-[#770D28] mb-6 leading-tight">
            Outil d&apos;assistance IA dédié à l&apos;optimisation de vos activités
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            Gagnez en efficacité dans vos missions avec l&apos;assistant IA intégré à
            notre logiciel. Dites adieu aux tâches répétitives : concentrez-vous
            sur vos activités de terrain et vos actes à forte valeur ajoutée.
            L&apos;intelligence artificielle vous assiste au quotidien pour une
            gestion plus rapide, plus fluide et plus sécurisée.
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
          <div className="space-y-6">
            {[
              "Création intelligente de dossiers, contacts et actes de procédure",
              "Dictée vocale & commandes intelligentes pour un gain de temps",
              "Suivi automatisé des délais légaux, exécutions et relances",
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
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item}</h3>
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
