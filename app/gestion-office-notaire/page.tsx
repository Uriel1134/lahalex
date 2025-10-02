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

export default function NotairePage() {
  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Animations GSAP spectaculaires - style lahalex-universel
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation du titre principal - effet bounce spectaculaire
      gsap.fromTo(".gestion-title", 
        { opacity: 0, y: 100, scale: 0.5 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      // Animation du bouton avec rotation complète
      gsap.fromTo(".gestion-button", 
        { opacity: 0, scale: 0, rotation: 360 }, 
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      )

      // Animation des images avec rotation
      gsap.fromTo(".gestion-image", 
        { opacity: 0, y: 100, rotation: -30 }, 
        { 
          opacity: 1, 
          y: 0, 
          rotation: 0, 
          duration: 1.2, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".gestion-image",
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

      {/* Contenu principal */}
      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16 relative z-10">
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
            <h1 ref={titleRef} className="gestion-title font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
              Gestion simplifiée de votre office
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
              La solution digitale pour une étude moderne et performante.
              Maîtrisez tous les aspects de la vie de votre office notarial grâce
              à un module pensé pour les exigences de votre profession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/essai-gratuit"
                className="gestion-button bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
              >
                Demandez un devis
              </a>
              <a
                href="/nous-contacter"
                className="gestion-button border-2 border-[#770D28] text-[#770D28] px-8 py-3 rounded-lg font-medium hover:bg-[#770D28] hover:text-white transition-colors"
              >
                Demandez une démonstration
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="gestion-image aspect-video overflow-hidden">
              <Image
                src="/images/gestion-office-notaire-2.png"
                alt="Interface gestion office"
                width={600}
                height={400}
                className="gestion-image w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                  borderRadius: '12px'
                }}
              />
            </div>
            <div className="gestion-image aspect-video overflow-hidden">
              <Image
                src="/images/gestion-office-notaire-3.png"
                alt="Tableau de bord office"
                width={600}
                height={400}
                className="gestion-image w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 6px 12px rgba(119, 13, 40, 0.6)) drop-shadow(0 12px 24px rgba(119, 13, 40, 0.4))',
                  borderRadius: '12px'
                }}
              />
            </div>
          </div>

          {/* Avantages */}
          <div ref={contentRef} className="mb-16">
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
                <div key={i} className="content-item flex items-start space-x-3">
                  {/* Icône check */}
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

      <style jsx global>{`
        /* Classes pour les animations GSAP - style lahalex-universel */
        .gestion-title {
          opacity: 0;
        }

        .gestion-button {
          opacity: 0;
        }

        .gestion-image {
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
