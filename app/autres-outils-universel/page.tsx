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
  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animations GSAP spectaculaires - style lahalex-universel
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation du titre principal - effet bounce spectaculaire
      gsap.fromTo(".autres-title", 
        { opacity: 0, y: 100, scale: 0.5 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      // Animation des images avec rotation
      gsap.fromTo(".autres-image", 
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

      // Animation du contenu avec ScrollTrigger
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { 
            opacity: 0, 
            y: 150, 
            scale: 0.8,
            rotation: -5,
            transformOrigin: "center center"
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

        // Animation des éléments de contenu en cascade avec effets spectaculaires
        const contentItems = contentRef.current.querySelectorAll('.content-item')
        gsap.fromTo(
          contentItems,
          { 
            opacity: 0, 
            y: 80, 
            scale: 0.7,
            rotation: 10,
            transformOrigin: "center bottom"
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
    <div ref={mainRef} className="flex flex-col min-h-screen bg-white font-sf-pro relative overflow-hidden">
      <Header />

      {/* Effets de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#770D28]/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#770D28]/8 rounded-full animate-drift" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#770D28]/12 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#770D28]/10 rounded-full animate-drift" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#770D28]/15 rounded-full animate-orbit" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#770D28]/8 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#770D28]/12 rounded-full animate-drift" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-[#770D28]/10 rounded-full animate-orbit" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#770D28]/8 rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>

      {/* Retour */}
      <section className="bg-gray-50 py-4 relative z-10">
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

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <h1 ref={titleRef} className="autres-title font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
                  Autres outils
                </h1>
                <a
                  href="/essai-gratuit"
                  className="autres-button inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
                >
                  Essai gratuit
                </a>
              </div>

              {/* Placeholder image */}
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
                  className={`h-64 sm:h-80 lg:h-96 rounded-lg ${
                    tool.reverse ? "order-2 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <Image
                    src={`/images/autre-outil${tool.number === "1" ? "" : tool.number === "2" ? "-2" : tool.number === "3" ? "-3" : tool.number === "4" ? "-4" : ""}.png`}
                    alt={tool.title}
                    width={800}
                    height={450}
                    className="autres-image w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                      borderRadius: '12px'
                    }}
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
                    <div className="space-y-4">
                      <div className="bg-[#770D28]/5 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#770D28] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            U
                          </div>
                          <div>
                            <span className="font-semibold text-[#770D28] text-sm uppercase tracking-wide block mb-1">
                              Utilité
                            </span>
                            <span className="text-gray-700 text-sm leading-relaxed">{tool.utilite}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#770D28]/5 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#770D28] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            A
                          </div>
                          <div>
                            <span className="font-semibold text-[#770D28] text-sm uppercase tracking-wide block mb-1">
                              Avantage
                            </span>
                            <span className="text-gray-700 text-sm leading-relaxed">{tool.avantage}</span>
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
        /* Classes pour les animations GSAP - style lahalex-universel */
        .autres-image {
          opacity: 0;
        }

        /* Animations pour les particules flottantes */
        @keyframes float {
          0%, 100% { 
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
          0% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(30px) translateY(-20px); }
          66% { transform: translateX(-20px) translateY(10px); }
          100% { transform: translateX(0px) translateY(0px); }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
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
