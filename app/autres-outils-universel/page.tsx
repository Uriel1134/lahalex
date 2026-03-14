"use client"

import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function UniverselPage() {
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".autres-title",
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      gsap.fromTo(
        ".autres-image",
        { opacity: 0, y: 100, rotation: -30 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".autres-image",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 150,
            scale: 0.8,
            rotation: -5,
            transformOrigin: "center center",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        const contentItems = contentRef.current.querySelectorAll(".content-item")
        gsap.fromTo(
          contentItems,
          {
            opacity: 0,
            y: 80,
            scale: 0.7,
            rotation: 10,
            transformOrigin: "center bottom",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.15,
            ease: "elastic.out(1, 0.6)",
            delay: 0.3,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={mainRef}
      className="flex flex-col min-h-screen bg-white font-sf-pro relative overflow-hidden"
    >
      <Header />

      {/* Effets de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#C8A96B]/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[#C8A96B]/8 rounded-full animate-drift"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#C8A96B]/12 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#C8A96B]/10 rounded-full animate-drift"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#C8A96B]/15 rounded-full animate-orbit"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#C8A96B]/8 rounded-full animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#C8A96B]/12 rounded-full animate-drift"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/2 w-1 h-1 bg-[#C8A96B]/10 rounded-full animate-orbit"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#C8A96B]/8 rounded-full animate-float"
          style={{ animationDelay: "1.2s" }}
        ></div>
      </div>

      {/* Retour */}
      <section className="bg-gray-50 py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a
              href="/lahalex-universel"
              className="flex items-center text-gray-500 hover:text-[#C8A96B] transition-colors"
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

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1
                  ref={titleRef}
                  className="autres-title font-gobold text-3xl sm:text-4xl lg:text-5xl text-gray-700 mb-6 lg:mb-8 leading-tight"
                >
                  Autres outils
                </h1>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/essai-gratuit"
                    className="autres-button inline-block bg-[#C8A96B] text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-[#b8934f] transition-colors"
                  >
                    Demandez un devis
                  </a>
                  <a
                    href="/nous-contacter"
                    className="autres-button inline-block border-2 border-[#C8A96B] text-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-[#C8A96B] hover:text-gray-800 transition-colors"
                  >
                    Demandez une démonstration
                  </a>
                </div>
              </div>

              {/* Placeholder image */}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Cette section de notre plateforme a été conçue comme un{" "}
              <strong className="text-gray-700">espace de référence indispensable</strong>, tant pour les{" "}
              <strong className="text-gray-700">professionnels</strong>
              {" "}(juristes, professionnels de santé, économistes, entreprises) que
              pour les <strong className="text-gray-700">étudiants et chercheurs</strong>. Elle regroupe des{" "}
              <strong className="text-gray-700">ressources fiables</strong>, rigoureusement sélectionnées,
              permettant de <strong className="text-gray-700">réviser, consolider, approfondir</strong> ou
              vérifier rapidement une notion, sans quitter l&apos;environnement
              numérique de travail.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Chaque outil a été pensé pour répondre à un{" "}
              <strong className="text-gray-700">besoin concret, quotidien et stratégique</strong> dans la
              maîtrise de votre <strong className="text-gray-700">domaine d&apos;expertise</strong>.
            </p>
          </div>
        </section>

        {/* Tools Sections */}
        <section className="bg-white py-8 sm:py-12">
          <div
            ref={contentRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20"
          >
            {[
              {
                number: "1",
                title: "Fiches de synthèse",
                desc: "Des synthèses claires, structurées et directement exploitables sur les principales notions juridiques, médicales et économiques. Elles s'appuient sur des cas concrets, avec des références législatives, réglementaires, scientifiques et académiques pertinentes. Chaque fiche est accompagnée de QCM pour tester vos connaissances.",
                utilite:
                  "Aide-mémoire rapide, support de révision ou d'enseignement dans tous les domaines professionnels.",
                avantage:
                  "Clarté, gain de temps, accès immédiat à l'essentiel dans votre domaine d'expertise.",
                reverse: false,
              },
              {
                number: "2",
                title: "Fiches de méthode",
                desc: "Des guides pratiques conçus pour maîtriser les exigences académiques et professionnelles en droit, médecine et économie. Elles couvrent des formats essentiels comme le cas pratique, le commentaire d'arrêt, la dissertation, l'analyse de cas cliniques, les études économiques, ainsi que la rédaction de rapports et d'autres écrits professionnels.",
                utilite:
                  "Renforce les compétences méthodologiques, structure le raisonnement professionnel dans votre discipline.",
                avantage:
                  "Clarifie les attentes, propose des schémas types et des conseils concrets adaptés à chaque exercice et domaine.",
                reverse: true,
              },
              {
                number: "3",
                title: "Dictionnaire spécialisé",
                desc: "Notre dictionnaire spécialisé est un outil numérique avancé conçu pour offrir aux professionnels et étudiants une compréhension claire, précise et approfondie.",
                utilite:
                  "Clarifie les termes techniques et spécialisés souvent complexes dans tous les domaines.",
                avantage:
                  "Compréhension rapide, fiabilité terminologique, utile en rédaction et en argumentation professionnelle.",
                reverse: false,
              },
              {
                number: "4",
                title: "Articles scientifiques",
                desc: "Lahalex vous accompagne dans tous vos défis professionnels grâce à des contenus d'experts reconnus en droit, médecine et économie : actualités en temps réel, articles de référence, formation continue et analyses commentées.",
                utilite:
                  "Approfondissement des enjeux professionnels, construction d'argumentaires solides et pluridisciplinaires.",
                avantage:
                  "Veille intellectuelle et stratégique, utile à la recherche, l'enseignement ou la pratique dans tous les domaines.",
                reverse: true,
              },
              {
                number: "5",
                title: "Rencontres scientifique",
                desc: "Agenda récapitulatif des séminaires, colloques et conférences en droit, médecine et économie à ne pas manquer, avec la mise à disposition d'un compte rendu pour chaque événement manqué.",
                utilite:
                  "Suivez tous les événements scientifiques et professionnels importants sans faille.",
                avantage:
                  "Rattrapez facilement ceux que vous avez manqués grâce aux comptes rendus détaillés.",
                reverse: false,
              },
            ].map((tool, i) => (
              <div
                key={i}
                className="content-item grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`h-64 sm:h-80 lg:h-96 rounded-lg relative ${
                    tool.reverse ? "order-2 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <Image
                    src={`/images/${
                      tool.number === "1"
                        ? "autre-outil"
                        : tool.number === "2"
                        ? "autre-outil-2"
                        : tool.number === "3"
                        ? "autre-outil-3"
                        : tool.number === "4"
                        ? "autre-outil-4"
                        : tool.number === "5"
                        ? "rencontres-juridiques"
                        : "autre-outil"
                    }.png`}
                    alt={tool.title}
                    width={800}
                    height={450}
                    className="autres-image w-full h-full object-contain"
                    style={{
                      filter:
                        "drop-shadow(0 6px 12px rgba(200, 169, 107, 0.35)) drop-shadow(0 12px 24px rgba(200, 169, 107, 0.18))",
                      borderRadius: "12px",
                    }}
                  />

                  {tool.number === "1" && (
                    <div className="absolute -right-6 top-1/2 -translate-y-2/2 w-28 h-28 sm:w-36 sm:h-36">
                      <div className="relative w-full h-full rounded-full border-8 border-[#C8A96B] bg-white shadow-2xl overflow-hidden">
                        <div className="absolute inset-2 flex items-center justify-center">
                          <Image
                            src="/images/qcm-preview.png"
                            alt="QCM Preview"
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full pointer-events-none"></div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-12 h-16 bg-[#C8A96B] rounded-b-full transform translate-y-8 translate-x-2 rotate-45 shadow-lg"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex items-start space-x-4 ${
                    tool.reverse ? "order-1 lg:order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="w-12 h-12 bg-[#C8A96B] text-gray-800 rounded-full flex items-center justify-center font-gobold text-xl flex-shrink-0">
                    {tool.number}
                  </div>

                  <div>
                    <h3 className="font-gobold text-xl sm:text-2xl text-gray-700 mb-4">
                      {tool.title} :
                    </h3>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                      {tool.desc}
                    </p>

                    <div className="space-y-4">
                      <div className="bg-[#C8A96B]/10 border border-[#C8A96B]/20 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#C8A96B] text-gray-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            U
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide block mb-1">
                              Utilité
                            </span>
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {tool.utilite}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#C8A96B]/10 border border-[#C8A96B]/20 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#C8A96B] text-gray-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            A
                          </div>
                          <div>
                            <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide block mb-1">
                              Avantage
                            </span>
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {tool.avantage}
                            </span>
                          </div>
                        </div>
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

      <style jsx global>{`
        .autres-image {
          opacity: 0;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes drift {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          33% {
            transform: translateX(30px) translateY(-20px);
          }
          66% {
            transform: translateX(-20px) translateY(10px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 8s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 12s linear infinite;
        }
      `}</style>
    </div>
  )
}