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

export default function VeilleJuridiquePage() {
  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animations GSAP spectaculaires - style lahalex-universel
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation du titre principal - effet bounce spectaculaire
      gsap.fromTo(".veille-title",
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      // Animation des images avec rotation
      gsap.fromTo(".veille-image",
        { opacity: 0, y: 100, rotation: -30 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".veille-image",
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
      {/* Header global */}
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

      <main className="flex-1 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a
              href="/lahalex-universel"
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
            <div className="text-left">
              <h1 ref={titleRef} className="veille-title font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 leading-tight">
                Veille journalière
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/essai-gratuit"
                  className="veille-button inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Demandez un devis
                </a>
                <a
                  href="/nous-contacter"
                  className="veille-button inline-block border-2 border-[#770D28] text-[#770D28] px-8 py-3 rounded-lg font-medium hover:bg-[#770D28] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Demandez une démonstration
                </a>
              </div>
            </div>
          </section>

          {/* Section avec images et texte */}
          <section className="mb-12">
            {/* Mobile : texte - image */}
            <div className="block lg:hidden">
              {/* Texte */}
              <div className="mb-8">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                  Notre veille journalière est un dispositif structuré de
                  <strong> surveillance</strong>, de collecte, d&apos;analyse et de diffusion continue
                  d&apos;informations législatives, réglementaires, jurisprudentielles,
                  médicales et économiques. Restez informé de l&apos;actualité dans <strong>tous
                    les domaines juridiques, médicaux et économiques </strong> grâce à notre service alimenté chaque jour
                  par nos experts. Interface intuitive adaptée à <strong> tous vos écrans</strong>,
                  notifications ciblées sur vos centres d&apos;intérêt, et outils
                  pratiques pour traiter l&apos;information efficacement. LahaLex
                  simplifie votre quotidien pour que vous puissiez vous consacrer
                  pleinement à l&apos;essentiel. Anticipez plutôt que de subir.
                </p>
              </div>

              {/* Image */}
              <div className="mb-8">
                <div className="veille-image h-[400px] sm:h-[500px] overflow-hidden relative">
                  <div className="absolute top-0 right-2 max-w-[50%] z-10 block lg:hidden">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left font-medium">
                      Notre veille pluridisciplinaire spécialisée veille pour vous <strong>24H/24H</strong> et vous alerte dès qu&apos;une nouveauté mérite votre attention.
                    </p>
                  </div>
                  <Image
                    src="/images/veille-nouvelle.png"
                    alt="Interface veille juridique"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain"
                    style={{
                      borderRadius: '12px'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Desktop/Tablette : image unique - texte en bas */}
            <div className="hidden lg:block">
              {/* Image unique */}
              <div className="mb-8">
                <div className="veille-image h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden relative">
                  <div className="absolute top-0 right-25 max-w-md z-10 hidden lg:block">
                    <p className="text-gray-700 text-lg leading-relaxed text-left font-medium">
                      Notre veille pluridisciplinaire spécialisée veille pour vous <strong>24H/24H</strong> et vous alerte dès qu&apos;une nouveauté mérite votre attention.
                    </p>
                  </div>
                  <Image
                    src="/images/veille-nouvelle.png"
                    alt="Interface veille juridique"
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain"
                    style={{
                      borderRadius: '12px'
                    }}
                  />
                </div>
              </div>

              {/* Texte en bas */}
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                  Notre veille journalière est un dispositif structuré de
                  <strong> surveillance</strong>, de collecte, d&apos;analyse et de diffusion continue
                  d&apos;informations législatives, réglementaires, jurisprudentielles,
                  médicales et économiques. Restez informé de l&apos;actualité dans <strong>tous
                    les domaines juridiques, médicaux et économiques </strong> grâce à notre service alimenté chaque jour
                  par nos experts. Interface intuitive adaptée à <strong> tous vos écrans</strong>,
                  notifications ciblées sur vos centres d&apos;intérêt, et outils
                  pratiques pour traiter l&apos;information efficacement. LahaLex
                  simplifie votre quotidien pour que vous puissiez vous consacrer
                  pleinement à l&apos;essentiel. Anticipez plutôt que de subir.
                </p>
              </div>
            </div>
          </section>

          {/* Avantages */}
          <section>
            <h2 className="font-gobold text-2xl sm:text-3xl text-[#770D28] mb-8">
              Avantages dans notre veille journalière
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
                  desc: "Possibilité de configurer des alertes thématiques, de suivre des domaines spécifiques, ou encore des sources précises.",
                },
                {
                  id: "4",
                  color: "white",
                  border: true,
                  textColor: "#770D28",
                  title: "Outil d'aide à la décision",
                  desc: "En anticipant les évolutions de votre secteur, la veille permet aux entreprises d'adapter rapidement leur stratégie.",
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

      <style jsx global>{`
        /* Classes pour les animations GSAP - style lahalex-universel */
        .veille-image {
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
