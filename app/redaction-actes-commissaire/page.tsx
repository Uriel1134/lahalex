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

export default function CommissaireActesPage() {
  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animations GSAP spectaculaires - style lahalex-universel
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation du titre principal - effet bounce spectaculaire
      gsap.fromTo(".redaction-commissaire-title", 
        { opacity: 0, y: 100, scale: 0.5 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      // Animation du bouton avec rotation complète
      gsap.fromTo(".redaction-commissaire-button", 
        { opacity: 0, scale: 0, rotation: 360 }, 
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      )

      // Animation de l'image avec rotation
      gsap.fromTo(".redaction-commissaire-image", 
        { opacity: 0, y: 100, rotation: -30 }, 
        { 
          opacity: 1, 
          y: 0, 
          rotation: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".redaction-commissaire-image",
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

      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <a
              href="/lahalex-commissaire-justice"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Lahalex Commissaire de justice
            </a>
          </div>

          {/* Hero */}
          <section className="mb-16">
            <h1 ref={titleRef} className="redaction-commissaire-title text-3xl sm:text-4xl lg:text-5xl font-gobold text-[#770D28] mb-6 leading-tight">
              Rédactions d'actes juridiques assistée et avancée
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed">
              Fini les copier-coller à rallonge et les modèles obsolètes ! Avec
              LahaLex, vous rédigez vos actes 3 fois plus vite, sans jamais
              sacrifier la qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/essai-gratuit"
                className="redaction-commissaire-button inline-block bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
              >
                Demandez un devis
              </a>
              <a
                href="/nous-contacter"
                className="redaction-commissaire-button inline-block border-2 border-[#770D28] text-[#770D28] px-8 py-3 rounded-lg font-medium hover:bg-[#770D28] hover:text-white transition-colors"
              >
                Demandez une démonstration
              </a>
            </div>
          </section>

          {/* Image */}
          <section className="mb-16">
            <div className="redaction-commissaire-image aspect-video max-w-4xl mx-auto overflow-hidden">
              <Image
                src="/images/redaction-actes-commissaire.png"
                alt="Rédaction d'actes commissaire"
                width={800}
                height={450}
                className="redaction-commissaire-image w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                  borderRadius: '12px'
                }}
              />
            </div>
          </section>

          {/* Avantages */}
          <section ref={contentRef} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-gobold text-gray-900 mb-8">
              Vos avantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {[
                {
                  title: "+100 modèles prêts à l'emploi",
                  desc: "Constats, significations, actes de recouvrement... Rédigez tous vos actes en un clic, toujours conformes et actualisés.",
                },
                {
                  title: "Un rendu 100 % professionnel",
                  desc: "Logo, police, mise en page : personnalisez vos documents pour un rendu impeccable, à votre image.",
                },
                {
                  title: "Classement malin par mission, zone et profil",
                  desc: "Trouvez immédiatement le bon modèle selon la nature de l'acte et la situation du justiciable.",
                },
                {
                  title: "Importez vos propres modèles",
                  desc: "Vos habitudes ne changent pas : LahaLex s'adapte à vous.",
                },
                {
                  title: "Remplissage automatique & personnalisé",
                  desc: "Les informations de vos dossiers s'intègrent automatiquement dans l'acte. Moins d'erreurs, plus de rapidité.",
                },
              ].map((item, i) => (
                <div key={i} className="content-item flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#770D28] rounded-full flex items-center justify-center mt-1">
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
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
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
        .redaction-commissaire-title {
          opacity: 0;
        }

        .redaction-commissaire-button {
          opacity: 0;
        }

        .redaction-commissaire-image {
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
