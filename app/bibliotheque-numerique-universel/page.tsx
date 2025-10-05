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

export default function BibliothequePage() {
  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animations GSAP spectaculaires - style lahalex-universel
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation du titre principal - effet bounce spectaculaire
      gsap.fromTo(".bibliotheque-title", 
        { opacity: 0, y: 100, scale: 0.5 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      // Animation de l'image avec effet de rotation spectaculaire
      gsap.fromTo(".bibliotheque-image", 
        { opacity: 0, x: 200, rotation: 45 }, 
        { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
      )

        // Animation des images secondaires avec rotation
        gsap.fromTo(".bibliotheque-image-secondary", 
          { opacity: 0, y: 100, rotation: -30 }, 
          { 
            opacity: 1, 
            y: 0, 
            rotation: 0, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".bibliotheque-image-secondary",
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        )

      // Animation du contenu avec fade simple
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { 
            opacity: 0
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.5,
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

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Retour */}
        <div className="mb-8 animate-fade-in">
          <a
            href="/lahalex-universel"
            className="flex items-center text-gray-600 hover:text-[#770D28] transition-colors duration-200"
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
        <div className="mb-6">
          <div className="text-left">
            <h1 ref={titleRef} className="bibliotheque-title font-gobold text-4xl lg:text-5xl text-[#770D28] mb-6 leading-tight">
              Bibliothèque numérique
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/essai-gratuit"
                className="bibliotheque-button inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Demandez un devis
              </a>
              <a
                href="/nous-contacter"
                className="bibliotheque-button inline-block border-2 border-[#770D28] text-[#770D28] px-8 py-3 rounded-lg font-medium hover:bg-[#770D28] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Demandez une démonstration
              </a>
            </div>
          </div>
        </div>

        {/* Images agrandies en haut */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-0 lg:gap-12">
            {/* Image à gauche */}
            <div className="bibliotheque-image-secondary h-[400px] sm:h-[500px] lg:h-[950px] overflow-hidden">
              <Image
                src="/images/bibliotheque-numerique.png"
                alt="Interface bibliothèque numérique"
                width={1300}
                height={950}
                className="w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                  borderRadius: '12px'
                }}
              />
            </div>

            {/* Image à droite */}
            <div className="bibliotheque-image-secondary h-[350px] sm:h-[450px] lg:h-[800px] overflow-hidden">
              <Image
                src="/images/bibliotheque-numerique-2.png"
                alt="Interface bibliothèque numérique"
                width={1000}
                height={800}
                className="w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>
        </div>

        {/* Texte en bas */}
        <div className="sm:-mt-40 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div ref={contentRef} className="max-w-4xl mx-auto">
            <p className="content-item text-gray-700 text-lg leading-relaxed text-left sm:text-justify">
              Notre bibliothèque numérique est une plateforme en ligne dédiée à la
              consultation d&apos;un vaste ensemble d&apos;ouvrages et de documents en
              version numérique de diverses matières avec plus de <strong>500.000 livres</strong> disponibles. Elle permet un accès structuré et permanent à une large
              collection de resources documentaires, accessibles à tout moment
              depuis un ordinateur, une tablette ou un smartphone. L&apos;ensemble
              de ces contenus est en accès libre et gratuit une fois votre
              abonnement souscrit.
            </p>
          </div>
        </div>

        {/* Avantages */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="font-gobold text-2xl text-[#770D28] mb-8">
            Avantages dans notre bibliothèque numérique
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-left"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-[#770D28] rounded-full flex items-center justify-center font-gobold text-[#770D28] text-xl">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Consultation des ouvrages à tout moment et depuis n&apos;importe quel lieu.
                </h3>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-right"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#770D28] rounded-full flex items-center justify-center font-gobold text-white text-xl">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Notre bibliothèque numérique ne se limite pas au droit
                </h3>
                <p className="text-gray-600">
                  Elle regorge aussi de ressources en santé, finance, histoire,
                  sciences, littérature et bien plus encore.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-left"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#770D28] rounded-full flex items-center justify-center font-gobold text-white text-xl">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Plus de 3 000 nouveaux ouvrages sont ajoutés chaque année
                </h3>
                <p className="text-gray-600">
                  Garantissant une base constamment enrichie et à jour.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div
              className="flex items-start space-x-4 animate-slide-from-right"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-[#770D28] rounded-full flex items-center justify-center font-gobold text-[#770D28] text-xl">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Navigation facilitée grâce à un moteur de recherche avancé
                </h3>
                <p className="text-gray-600">
                  Des mots-clés et des filtres thématiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        /* Classes pour les animations GSAP - style lahalex-universel */
        .bibliotheque-title {
          opacity: 0;
        }

        .bibliotheque-image-secondary {
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
