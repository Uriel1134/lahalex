"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function CommissaireJusticePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      {/* Header global */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <div className="flex items-center space-x-2 mb-8 text-sm text-gray-600">
            <a
              href="/lahalex-commissaire-justice"
              className="flex items-center hover:text-[#770D28] transition-colors"
            >
              <svg
                className="h-4 w-4 mr-2"
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
              Lahalex Commissaire de justice
            </a>
          </div>

          {/* Hero */}
          <section className="mb-12">
            <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 leading-tight">
              Gestion simplifiée de votre étude
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed">
              Prenez une longueur d&apos;avance. Pilotez votre étude en toute
              simplicité avec une technologie pensée pour votre quotidien.
            </p>
            <a
              href="/essai-gratuit"
              className="bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
            >
              Essai gratuit
            </a>
          </section>

          {/* Illustrations */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-300 h-64 rounded-lg"></div>
              <div className="bg-gray-300 h-64 rounded-lg"></div>
              <div className="bg-gray-300 h-64 rounded-lg"></div>
            </div>
          </section>

          {/* Avantages */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-gobold text-gray-900 mb-8">
              Vos avantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Tournées géolocalisées & optimisées",
                  desc: "Un algorithme intelligent calcule les plus rapides et les plus économiques, selon vos missions et urgences.",
                },
                {
                  title: "Facturation automatisée & relances faciles",
                  desc: "Générez vos bordereaux d'honoraires et relancez en un clic par e-mail ou SMS. Plus de retards de paiement !",
                },
                {
                  title: "Base de données professionnelle ultra-structurée",
                  desc: "Clients, confrères, juridictions... Vos contacts sont organisés et connectés à tous vos actes.",
                },
                {
                  title: "Suivi comptable en temps réel",
                  desc: "Suivez vos performances : chiffre d'affaires, marges, résultats... et préparez facilement vos états financiers.",
                },
                {
                  title: "Gestion complète de vos actes",
                  desc: "Assignations, constats, recouvrements : chaque mission est suivie à la minute près, avec alertes automatiques sur les délais.",
                },
                {
                  title: "Agenda synchronisé avec rappels automatiques",
                  desc: "Finis les oublis ! Suivez vos audiences, significations et prescriptions d'un simple coup d'œil.",
                },
                {
                  title: "Alerte d'information métier",
                  desc: "Soyez informé des dernières nouveautés réglementaires, pratiques et jurisprudentielles. Restez toujours à jour.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  {/* Icône check */}
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

                  {/* Texte */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.desc}</p>
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
