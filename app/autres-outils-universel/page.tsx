"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function UniverselPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      <Header />

      {/* Retour */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a
              href="/lahalex-universel"
              className="flex items-center text-gray-600 hover:text-[#770D28] transition-colors"
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
              Lahalex Universel
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
                  Autres outils
                </h1>
                <a
                  href="/essai-gratuit"
                  className="inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
                >
                  Essai gratuit
                </a>
              </div>

              {/* Placeholder image */}
              <div className="order-1 lg:order-2">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/images/autre-outil.png"
                    alt="Autres outils"
                    width={800}
                    height={450}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Row of 2 placeholders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/autre-outil-2.png"
                  alt="Autres outils"
                  width={600}
                  height={338}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/images/autre-outil-3.png"
                  alt="Autres outils"
                  width={600}
                  height={338}
                  className="w-full h-full object-contain"
                /> 
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              Cette section de notre plateforme a été conçue comme un espace de
              référence indispensable, tant pour les professionnels du droit
              (avocats, magistrats, juristes d&apos;entreprise, notaires) que
              pour les étudiants en droit. Elle regroupe des ressources fiables,
              rigoureusement sélectionnées, permettant de réviser, consolider,
              approfondir ou vérifier rapidement une notion, sans quitter
              l&apos;environnement numérique de travail.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              Chaque outil a été pensé pour répondre à un besoin concret,
              quotidien et stratégique dans la maîtrise du droit.
            </p>
          </div>
        </section>

        {/* Tools Sections */}
        <section className="bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
            {[
              {
                number: "1",
                title: "Fiches de synthèse",
                desc: "Des synthèses claires, structurées et directement exploitables sur les principales notions juridiques. Elles s'appuient sur des cas concrets, avec des références législatives et jurisprudentielles pertinentes.",
                utilite: "Aide-mémoire rapide, support de révision ou d'enseignement.",
                avantage: "Clarté, gain de temps, accès immédiat à l'essentiel.",
                reverse: false,
              },
              {
                number: "2",
                title: "Fiches de méthode",
                desc: "Des guides pratiques conçus pour maîtriser les exigences académiques et professionnelles. Elles couvrent des formats essentiels comme le cas pratique, le commentaire d'arrêt, la dissertation juridique, mais aussi la rédaction de conclusions, et d'autres écrits professionnels.",
                utilite:
                  "Renforce les compétences méthodologiques, structure le raisonnement juridique.",
                avantage:
                  "Clarifie les attentes, propose des schémas types et des conseils concrets adaptés à chaque exercice.",
                reverse: true,
              },
              {
                number: "3",
                title: "Dictionnaire juridique avancé",
                desc: "Notre dictionnaire juridique est un outil numérique avancé conçu pour offrir aux professionnels et étudiants du droit une compréhension claire, précise et approfondie du vocabulaire juridique.",
                utilite:
                  "Clarifie les termes techniques et juridiques souvent complexes.",
                avantage:
                  "Compréhension rapide, fiabilité terminologique, utile en rédaction et en argumentation.",
                reverse: false,
              },
              {
                number: "4",
                title: "Doctrine",
                desc: "Lahalex vous accompagne dans tous vos défis juridiques grâce à des contenus d'experts reconnus : actualités en temps réel, doctrines de référence, formation continue et jurisprudences commentées.",
                utilite:
                  "Approfondissement des enjeux juridiques, construction d'argumentaires solides.",
                avantage:
                  "Veille intellectuelle et stratégique, utile à la recherche, l'enseignement ou la pratique.",
                reverse: true,
              },
            ].map((tool, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div
                  className={`bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-lg ${
                    tool.reverse ? "order-2 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <Image
                    src={`/images/autre-outil${tool.number === "1" ? "" : tool.number === "2" ? "-2" : tool.number === "3" ? "-3" : tool.number === "4" ? "-4" : ""}.png`}
                    alt={tool.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex items-start space-x-4 ${
                    tool.reverse
                      ? "order-1 lg:order-2"
                      : "order-2 lg:order-1"
                  }`}
                >
                  <div className="w-12 h-12 bg-[#770D28] text-white rounded-full flex items-center justify-center font-gobold text-xl flex-shrink-0">
                    {tool.number}
                  </div>
                  <div>
                    <h3 className="font-gobold text-xl sm:text-2xl text-gray-900 mb-4">
                      {tool.title} :
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                      {tool.desc}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-gray-900 flex-shrink-0">
                          • Utilité :
                        </span>
                        <span className="text-gray-700">{tool.utilite}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-gray-900 flex-shrink-0">
                          • Avantage :
                        </span>
                        <span className="text-gray-700">{tool.avantage}</span>
                      </div>
                    </div>
                  </div>
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
