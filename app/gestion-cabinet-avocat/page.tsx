"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function AvocatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5EF] font-sf-pro">
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
              Gestion simplifiée de votre cabinet
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
              Prenez le contrôle total de votre cabinet avec un module pensé
              pour les professionnels du droit exigeants. Suivi des dossiers,
              gestion des clients, facturation, comptabilité : tout est
              centralisé, automatisé et conforme.
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
                  title: "Base de données intelligente",
                  desc: "Clients, magistrats, adversaires, prestataires... vos relations professionnelles sont organisées et accessibles à tout moment.",
                },
                {
                  title: "Suivi complet des dossiers",
                  desc: "Centralisez tous vos documents, courriers, e-mails et pièces dans un espace unique.",
                },
                {
                  title: "Agenda professionnel synchronisé",
                  desc: "Délais procéduraux calculés automatiquement avec alertes de prescription intégrés.",
                },
                {
                  title: "Facturation intégrée",
                  desc: "Générez vos factures et notes d'honoraires personnalisées, suivez les paiements et relancez automatiquement vos clients par e-mail ou SMS.",
                },
                {
                  title:
                    "Préparation de la liasse fiscale et des états financiers",
                  desc: "En temps réel (chiffre d'affaires, marges, résultats).",
                },
                {
                  title: "Alerte d'information sur le métier d'avocat",
                  desc: "",
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

      <Footer />
    </div>
  )
}
