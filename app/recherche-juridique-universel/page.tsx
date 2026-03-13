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
const BRAND_SOFT_SECTION = "rgba(188, 188, 188, 0.35)"
const BRAND_PARTICLE_1 = "rgba(212, 200, 154, 0.10)"
const BRAND_PARTICLE_2 = "rgba(212, 200, 154, 0.08)"
const BRAND_PARTICLE_3 = "rgba(212, 200, 154, 0.12)"
const BRAND_PARTICLE_4 = "rgba(212, 200, 154, 0.15)"

export default function RecherchePage() {
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".recherche-title",
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
      )

      gsap.fromTo(
        ".recherche-button",
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
        ".recherche-image",
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

      <main className="flex-1 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-8 pt-8">
            <a
              href="/lahalex-universel"
              className="flex items-center transition-colors font-sf-pro text-lg"
              style={{ color: BRAND_TEXT }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = BRAND_PRIMARY_DARK
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = BRAND_TEXT
              }}
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
            <h1
              ref={titleRef}
              className="recherche-title text-4xl sm:text-5xl lg:text-6xl font-gobold mb-12 leading-tight"
              style={{ color: BRAND_TEXT }}
            >
              Recherche avancée
            </h1>

            <div className="mb-12 flex flex-col sm:flex-row gap-4">
              <a
                href="/essai-gratuit"
                className="recherche-button inline-block text-black px-8 py-4 rounded-lg transition-all duration-300 font-sf-pro text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                style={{
                  background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                }}
              >
                Demandez un devis
              </a>

              <a
                href="/nous-contacter"
                className="recherche-button inline-block px-8 py-4 rounded-lg transition-all duration-300 font-sf-pro text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
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

            <div ref={contentRef} className="space-y-16">
              {/* Section 1 */}
              <section className="mb-16 relative overflow-visible">
                <div className="absolute right-0 top-0 hidden lg:block" style={{ marginRight: 0 }}>
                  <Image
                    src="/images/decoration-courbes.png"
                    alt="Décoration"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                <div className="relative max-w-7xl mx-auto mb-8 px-4">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1 max-w-3xl">
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left">
                        Notre outil de recherche avancée permet d'exploiter de façon <strong>structurée et intelligente</strong> un vaste ensemble de contenus <strong>juridiques, médicaux et économiques</strong> tels que la <strong>législation</strong>, la <strong>jurisprudence</strong>, la <strong>doctrine</strong>, les <strong>publications médicales</strong>, les <strong>analyses économiques</strong> ou encore l'<strong>actualité</strong>. Grâce à des <strong>technologies performantes</strong>, il offre des résultats <strong>ciblés, précis et hiérarchisés</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="recherche-image overflow-hidden mb-8">
                  <Image
                    src="/images/recherche-section-1.png"
                    alt="Interface de recherche avec résultats"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
              </section>

              {/* Section 2 */}
              <section
                className="mb-16 relative py-12"
                style={{
                  backgroundColor: BRAND_SOFT_SECTION,
                  width: "100vw",
                  marginLeft: "calc(-50vw + 50%)",
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="recherche-image overflow-hidden">
                    <Image
                      src="/images/recherche-section-2.png"
                      alt="Codes juridiques et interface"
                      width={1400}
                      height={500}
                      className="w-full h-auto object-contain"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                </div>

                <div className="absolute right-0 -bottom-16 hidden lg:block z-20">
                  <Image
                    src="/images/decoration-courbes.png"
                    alt=""
                    width={130}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-16">
                <div className="max-w-5xl mx-auto mb-8 px-4">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
                    Des filtres <strong>multicritères</strong>, une <strong>interface intuitive</strong> et des fonctionnalités de tri facilitent l'accès rapide aux informations les plus pertinentes, constamment mises à jour et directement exploitables dans la pratique professionnelle.
                  </p>
                </div>

                <div className="recherche-image overflow-hidden mb-8">
                  <Image
                    src="/images/recherche-section-3.png"
                    alt="Interface de recherche avec filtres"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-contain"
                    style={{ borderRadius: "12px" }}
                  />
                </div>

                <div className="max-w-5xl mx-auto px-4">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
                    À partir d'un <strong>simple mot-clé</strong>, le moteur de recherche <strong>analyse</strong>, <strong>croise</strong> et <strong>hiérarchise</strong> ces différentes sources afin de fournir rapidement <strong>l'information la plus fiable et la plus pertinente</strong>, parfaitement adaptée aux besoins de l'utilisateur.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .recherche-title {
          opacity: 0;
        }

        .recherche-button {
          opacity: 0;
        }

        .recherche-image {
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