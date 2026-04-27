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

const BRAND_PRIMARY = "#D4C89A"
const BRAND_PRIMARY_DARK = "#B4AB6B"
const BRAND_TEXT = "#111111"
const BRAND_BG = "#FFFFFF"
const BRAND_PARTICLE_1 = "rgba(212, 200, 154, 0.10)"
const BRAND_PARTICLE_2 = "rgba(212, 200, 154, 0.08)"
const BRAND_PARTICLE_3 = "rgba(212, 200, 154, 0.12)"
const BRAND_PARTICLE_4 = "rgba(212, 200, 154, 0.15)"
const BRAND_GLOW_STRONG = "rgba(212, 200, 154, 0.6)"
const BRAND_GLOW_MEDIUM = "rgba(212, 200, 154, 0.4)"

export default function AvocatPage() {
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gestion-title",
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      gsap.fromTo(
        ".gestion-button",
        { opacity: 0, scale: 0, rotation: 360 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5,
        }
      )

      gsap.fromTo(
        ".gestion-image",
        { opacity: 0, y: 100, rotation: -30 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gestion-image",
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
      style={{ backgroundColor: BRAND_BG }}
    >
      <Header />

      {/* Effets de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-2 h-2 rounded-full animate-float"
          style={{ backgroundColor: BRAND_PARTICLE_1 }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 rounded-full animate-drift"
          style={{ backgroundColor: BRAND_PARTICLE_2, animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 rounded-full animate-float"
          style={{ backgroundColor: BRAND_PARTICLE_3, animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 rounded-full animate-drift"
          style={{ backgroundColor: BRAND_PARTICLE_1, animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-1 h-1 rounded-full animate-orbit"
          style={{ backgroundColor: BRAND_PARTICLE_4, animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full animate-float"
          style={{ backgroundColor: BRAND_PARTICLE_2, animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-drift"
          style={{ backgroundColor: BRAND_PARTICLE_3, animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/2 w-1 h-1 rounded-full animate-orbit"
          style={{ backgroundColor: BRAND_PARTICLE_1, animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full animate-float"
          style={{ backgroundColor: BRAND_PARTICLE_2, animationDelay: "1.2s" }}
        ></div>
      </div>

      <main className="flex-1 bg-white py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <div className="flex items-center space-x-2 mb-8 text-sm text-gray-600">
            <a
              href="/lahalex-avocat"
              className="flex items-center transition-colors"
              style={{ color: "#4B5563" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = BRAND_TEXT
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#4B5563"
              }}
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
              Lahalex Avocat
            </a>
          </div>

          {/* Hero */}
          <div className="mb-12 lg:mb-16">
            <h1
              ref={titleRef}
              className="gestion-title font-gobold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight"
              style={{ color: BRAND_TEXT }}
            >
              Gestion simplifiée de votre cabinet
            </h1>

            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-4xl">
              Prenez le contrôle total de votre cabinet avec un module pensé
              pour les professionnels du droit exigeants. Suivi des dossiers,
              gestion des clients, facturation, comptabilité : tout est
              centralisé, automatisé et conforme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/essai-gratuit"
                className="gestion-button text-black px-8 py-3 rounded-lg font-medium transition-colors text-center"
                style={{
                  background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                }}
              >
                Demandez un devis
              </a>

              <a
                href="/nous-contacter"
                className="gestion-button px-8 py-3 rounded-lg font-medium transition-colors text-center"
                style={{
                  border: `2px solid ${BRAND_PRIMARY_DARK}`,
                  color: BRAND_TEXT,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND_PRIMARY
                  e.currentTarget.style.color = BRAND_TEXT
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = BRAND_TEXT
                }}
              >
                Demandez une démonstration
              </a>
            </div>
          </div>

          {/* Illustrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:-mt-50">
            <div className="gestion-image h-[800px] sm:h-[900px] lg:h-[1000px] overflow-hidden">
              <Image
                src="/images/gestion-cabinet-avocat.png"
                alt="Gestion cabinet avocat"
                width={1400}
                height={1200}
                className="gestion-image w-full h-full object-contain"
                style={{
                  filter: `drop-shadow(0 6px 12px ${BRAND_GLOW_STRONG}) drop-shadow(0 12px 24px ${BRAND_GLOW_MEDIUM})`,
                  borderRadius: "12px",
                }}
              />
            </div>

            <div className="gestion-image h-[800px] sm:h-[900px] lg:h-[1000px] overflow-hidden lg:-mt-10">
              <Image
                src="/images/gestion-cabinet-avocat-2.png"
                alt="Interface gestion cabinet"
                width={1600}
                height={1400}
                className="gestion-image w-full h-full object-contain"
                style={{
                  filter: `drop-shadow(0 6px 12px ${BRAND_GLOW_STRONG}) drop-shadow(0 12px 24px ${BRAND_GLOW_MEDIUM})`,
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>

          {/* Avantages */}
          <div ref={contentRef} className="lg:-mt-40">
            <h2 className="font-gobold text-2xl sm:text-3xl text-gray-900 mb-8">
              Vos avantages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Base de données intelligente",
                  desc: "Clients, magistrats, adversaires, prestataires... vos relations professionnelles sont organisées et accessibles à tout moment.",
                },
                {
                  title: "Suivi complet des dossiers",
                  desc: "Centralisez tous vos documents, courriers, e-mails et pièces dans un espace unique.",
                },
                {
                  title: "Agenda professionnel synchronisé",
                  desc: "Délais procéduraux calculés automatiquement avec alertes de prescription intégrés.",
                },
                {
                  title: "Facturation intégrée",
                  desc: "Générez vos factures et notes d'honoraires personnalisées, suivez les paiements et relancez automatiquement vos clients par e-mail ou SMS.",
                },
                {
                  title:
                    "Préparation de la liasse fiscale et des états financiers",
                  desc: "En temps réel (chiffre d'affaires, marges, résultats).",
                },
                {
                  title: "Alerte d'information sur le métier d'avocat",
                  desc: "",
                },
              ].map((item, i) => (
                <div key={i} className="content-item flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: BRAND_TEXT }}
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
                    <h3 className="font-medium text-gray-900 mb-2">
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

      <Footer />

      <style jsx global>{`
        .gestion-title {
          opacity: 0;
        }

        .gestion-button {
          opacity: 0;
        }

        .gestion-image {
          opacity: 0;
        }

        @keyframes float {
          0%,
          100% {
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
          0%,
          100% {
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