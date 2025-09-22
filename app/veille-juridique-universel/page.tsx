"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function VeilleJuridiquePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      {/* Header global */}
      <Header />

      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a
              href="/nos-prestations"
              className="flex items-center text-gray-600 hover:text-[#770D28] transition-colors duration-200 text-sm sm:text-base"
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
          <section className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 leading-tight">
                  Veille juridique
                </h1>
                <a
                  href="/essai-gratuit"
                  className="inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Essai gratuit
                </a>
              </div>
              <div>
                <div className="bg-gray-300 rounded-lg aspect-video"></div>
              </div>
            </div>
          </section>

          {/* Illustrations */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-300 rounded-lg aspect-video"></div>
              <div className="bg-gray-300 rounded-lg aspect-video"></div>
            </div>
          </section>

          {/* Description */}
          <section className="mb-12">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Notre veille juridique est un dispositif structuré de
              surveillance, de collecte, d&apos;analyse et de diffusion continue
              d&apos;informations législatives, réglementaires et
              jurisprudentielles. Restez informé de l&apos;actualité dans tous
              les domaines juridiques grâce à notre service alimenté chaque jour
              par nos experts. Interface intuitive adaptée à tous vos écrans,
              notifications ciblées sur vos centres d&apos;intérêt, et outils
              pratiques pour traiter l&apos;information efficacement. LahaLex
              simplifie votre quotidien pour que vous puissiez vous consacrer
              pleinement à l&apos;essentiel. Anticipez plutôt que de subir. Dans
              un environnement juridique qui change chaque jour, prendre du
              retard sur l&apos;information peut coûter cher. Notre veille
              juridique spécialisée veille pour vous 24h/24 et vous alerte dès
              qu&apos;une nouveauté mérite votre attention.
            </p>
          </section>

          {/* Avantages */}
          <section>
            <h2 className="font-gobold text-2xl sm:text-3xl text-[#770D28] mb-8">
              Avantages dans notre bibliothèque numérique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  id: "1",
                  color: "white",
                  border: true,
                  textColor: "#770D28",
                  title: "Actualisation en temps réel",
                  desc: "",
                },
                {
                  id: "2",
                  color: "#770D28",
                  border: false,
                  textColor: "white",
                  title: "Gain de temps considérable",
                  desc: "Les informations pertinentes sont centralisées, triées et hiérarchisées selon vos besoins (secteur d'activité, matière juridique, etc.), évitant une recherche manuelle fastidieuse.",
                },
                {
                  id: "3",
                  color: "#770D28",
                  border: false,
                  textColor: "white",
                  title: "Personnalisation du suivi",
                  desc: "Possibilité de configurer des alertes thématiques, de suivre des domaines spécifiques (droit du travail, fiscalité, droit international, etc.), ou encore des juridictions ou législateurs précis.",
                },
                {
                  id: "4",
                  color: "white",
                  border: true,
                  textColor: "#770D28",
                  title: "Outil d'aide à la décision",
                  desc: "En anticipant les évolutions juridiques, la veille permet aux entreprises, avocats et juristes d'adapter rapidement leur stratégie ou leurs contrats.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-gobold text-xl`}
                    style={{
                      backgroundColor: item.color,
                      color: item.textColor,
                      border: item.border ? "2px solid #770D28" : undefined,
                    }}
                  >
                    {item.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    )}
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
