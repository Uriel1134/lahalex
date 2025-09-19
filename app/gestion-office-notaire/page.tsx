"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function NotairePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5EF] font-sf-pro">
      {/* Header global */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-sm text-gray-600">
            <a
              href="/lahalex-notaire"
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
              Lahalex Notaire
            </a>
          </div>

          {/* Hero */}
          <div className="mb-12 lg:mb-16">
            <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
              Gestion simplifiée de votre office
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
              La solution digitale pour une étude moderne et performante.
              Maîtrisez tous les aspects de la vie de votre office notarial grâce
              à un module pensé pour les exigences de votre profession.
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
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Avantages */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-gobold text-gray-900 mb-8">
              Vos avantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Pilotage global de l'office",
                  desc: "Un seul outil pour suivre l'ensemble de vos dossiers : rendez-vous et clients. De l'ouverture au dépôt, vous gardez la main sur tout.",
                },
                {
                  title: "Base de données intelligente",
                  desc: "Clients, parties, confrères, administrations, banques : vos relations professionnelles sont structurées, mises à jour automatiquement et consultables à tout moment.",
                },
                {
                  title: "Suivi rigoureux des actes",
                  desc: "Centralisez vos actes, pièces justificatives, courriers, échanges et projets. Chaque dossier est clair, complet, sécurisé.",
                },
                {
                  title: "Pilotage financier de l'office",
                  desc: "Consultez vos indicateurs clés (chiffre d'affaires, marges, résultats) en temps réel pour une gestion saine et proactive.",
                },
                {
                  title: "Détection automatique des pièces manquantes",
                  desc: "LahaLex vous alerte en temps réel lorsqu'une pièce est absente ou non conforme, selon le type d'acte (vente, succession, donation...).",
                },
                {
                  title: "Agenda professionnel intégré",
                  desc: "Synchronisé avec votre planning d'office, il vous rappelle les dates de signature, d'enregistrement ou de dépôt avec alertes personnalisées.",
                },
                {
                  title: "Facturation et comptabilité simplifiées",
                  desc: "Générez vos actes de perception, gérez les émoluments, frais et débours, suivez les paiements, relancez vos clients sans effort.",
                },
                {
                  title: "Alerte métier intégrée",
                  desc: "",
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
