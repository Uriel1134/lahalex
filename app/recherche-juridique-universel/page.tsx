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

export default function RecherchePage() {
  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animations GSAP spectaculaires - style lahalex-universel
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation du titre principal - effet bounce spectaculaire
      gsap.fromTo(".recherche-title", 
        { opacity: 0, y: 100, scale: 0.5 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      // Animation du bouton avec rotation complète
      gsap.fromTo(".recherche-button", 
        { opacity: 0, scale: 0, rotation: 360 }, 
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      )

      // Animation des images avec rotation
      gsap.fromTo(".recherche-image", 
        { opacity: 0, y: 100, rotation: -30 }, 
        { 
          opacity: 1, 
          y: 0, 
          rotation: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".recherche-image",
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

      <main className="flex-1 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-8 pt-8">
            <a
              href="/lahalex-universel"
              className="flex items-center text-black hover:text-[#770D28] transition-colors font-sf-pro text-lg"
            >
              <svg
                className="w-5 h-5 mr-3"
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
          <div className="mb-16">
            <h1 ref={titleRef} className="recherche-title text-4xl sm:text-5xl lg:text-6xl font-gobold text-[#770D28] mb-12 leading-tight">
              Recherche juridique avancée
            </h1>

            <div className="mb-12 flex flex-col sm:flex-row gap-4">
              <a
                href="/essai-gratuit"
                className="recherche-button inline-block bg-[#770D28] text-white px-8 py-4 rounded-lg hover:bg-[#5a0a1e] transition-all duration-300 font-sf-pro text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Demandez un devis
              </a>
              <a
                href="/nous-contacter"
                className="recherche-button inline-block border-2 border-[#770D28] text-[#770D28] px-8 py-4 rounded-lg hover:bg-[#770D28] hover:text-white transition-all duration-300 font-sf-pro text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Demandez une démonstration
              </a>
            </div>

            {/* Deux images agrandies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              <div className="recherche-image h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
              <Image
                src="/images/recherche-juridique.png"
                alt="Recherche juridique avancée"
                  width={800}
                  height={600}
                className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                    borderRadius: '12px'
                  }}
              />
            </div>
              <div className="recherche-image h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
                  <Image
                    src="/images/recherche-juridique-2.png"
                    alt="Interface de recherche juridique"
                  width={800}
                  height={600}
                    className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                    borderRadius: '12px'
                  }}
                  />
                </div>
            </div>

            <div ref={contentRef} className="space-y-8">

              {/* Avantages */}
              <div className="space-y-16 relative">
 {/* Ligne verticale décorative */}
  <div className="absolute left-4 top-0 bottom-0 w-px bg-[#770D28]" />

  {/* Bloc 1 */}
  <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 relative z-10">
      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-[#770D28] rounded-full"></div>
      </div>
    </div>
                  <p className="content-item text-black text-lg sm:text-xl lg:text-2xl leading-relaxed font-sf-pro text-left sm:text-justify">
                  Notre outil de recherche juridique avancée permet d'exploiter
                  de façon structurée et intelligente un vaste ensemble de
                  contenus juridiques tels que la législation, la jurisprudence,
                  la doctrine ou encore l'actualité. Grâce à des technologies
                  performantes, il offre des résultats ciblés, précis et
                  hiérarchisés.
    </p>
  </div>

  {/* Bloc 2 */}
  <div className="flex items-start space-x-6 mt-8">
                  <div className="flex-shrink-0 relative z-10">
      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-[#770D28] rounded-full"></div>
      </div>
    </div>
                  <p className="content-item text-black text-lg sm:text-xl lg:text-2xl leading-relaxed font-sf-pro text-left sm:text-justify">
                  Des filtres multicritères, une interface intuitive et des
      fonctionnalités de tri facilitent l'accès rapide aux
      informations les plus pertinentes, constamment mises à jour
      et directement exploitables dans la pratique professionnelle.
    </p>
  </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer global */}
      <Footer />

      <style jsx global>{`
        /* Classes pour les animations GSAP - style lahalex-universel */
        .recherche-title {
          opacity: 0;
        }

        .recherche-button {
          opacity: 0;
        }

        .recherche-image {
          opacity: 0;
        }

        /* Animations pour les particules flottantes */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-10px) translateX(-5px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-30px) translateX(15px) rotate(270deg); 
          }
        }

        @keyframes drift {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateX(30px) translateY(-15px) rotate(120deg); 
          }
          66% { 
            transform: translateX(-20px) translateY(10px) rotate(240deg); 
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
          animation: orbit 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
