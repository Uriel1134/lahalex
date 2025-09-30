"use client"

import React, { useState, useEffect, useRef } from "react"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import countries from 'world-countries'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function DevenirAuteurForm() {
  const [file, setFile] = useState<File | null>(null)
  
  const mainRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  // Générer les options de pays avec world-countries
  const countryOptions = countries
    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
    .map(country => {
      const callingCode = country.idd.root + (country.idd.suffixes?.[0] || '')
      return {
        value: callingCode,
        label: `${country.flag} ${callingCode} ${country.name.common}`,
        code: country.cca2
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label, 'fr'))

  useEffect(() => {
    if (typeof window === "undefined") return

    // Animation spectaculaire au chargement - style lahalex-universel
    const tl = gsap.timeline()

    // Animation du titre principal - effet bounce spectaculaire
    tl.fromTo(".hero-title", 
      { opacity: 0, y: 100, scale: 0.5 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
    )
    // Animation du sous-titre avec glissement
    .fromTo(".hero-subtitle", 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=0.5"
    )
    // Animation de l'image avec rotation spectaculaire
    .fromTo(".hero-image", 
      { opacity: 0, x: 200, rotation: 45 }, 
      { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: "power3.out" }, "-=1"
    )

    // Animation des sections avec ScrollTrigger
    const ctx = gsap.context(() => {
      // Animation du contenu avec effet de glissement spectaculaire
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { 
            opacity: 0, 
            x: -150, 
            scale: 0.8,
            rotation: -10,
            transformOrigin: "left center"
          },
          {
            opacity: 1,
            x: 0,
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
        const contentItems = contentRef.current.querySelectorAll('div')
        gsap.fromTo(
          contentItems,
          { 
            opacity: 0, 
            y: 50, 
            scale: 0.7,
            rotation: 5,
            transformOrigin: "center bottom"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.6)",
            delay: 0.5,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Animation du formulaire avec effet 3D spectaculaire
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { 
            opacity: 0, 
            y: 150, 
            scale: 0.6, 
            rotationX: 45,
            rotationY: 20,
            rotationZ: 10,
            transformOrigin: "center center",
            filter: "blur(15px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Animation des champs du formulaire avec effets spectaculaires
        const formInputs = formRef.current.querySelectorAll('input, select, textarea, button')
        gsap.fromTo(
          formInputs,
          { 
            opacity: 0, 
            y: 40, 
            scale: 0.8,
            rotation: 15,
            transformOrigin: "center center"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "elastic.out(1, 0.7)",
            delay: 0.8,
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col relative overflow-hidden">
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

      <main ref={mainRef} className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-start">

          {/* Left column (image + content) */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="mb-8 lg:mb-12">
              <img
                ref={imageRef}
                src="/images/typewriter.jpg"
                alt="Machine à écrire rouge - Publier chez LAHALEX"
                className="hero-image w-full max-w-[680px] mx-auto lg:mx-0 rounded-lg shadow-lg object-cover"
                style={{ aspectRatio: "4 / 3" }}
              />
            </div>

            <section ref={contentRef} className="space-y-6">
              <h2 className="hero-title text-[#770D28] text-2xl lg:text-3xl font-semibold mb-6">Pourquoi publier chez LAHALEX ?</h2>

              <div className="space-y-10 text-gray-800">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Accès à une audience internationale</h3>
                  <p className="text-base leading-relaxed">
                    En publiant sur LAHALEX, vous atteignez un public mondial, vous faisant connaître au-delà de vos
                    frontières, et établissez votre expertise à l'échelle internationale.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Renforcement de l'expertise et crédibilité</h3>
                  <p className="text-base leading-relaxed">
                    Publier régulièrement vous permet de construire une solide réputation en tant qu'expert juridique,
                    en prouvant votre maîtrise des lois et votre capacité à les appliquer.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Renforcement du réseau professionnel</h3>
                  <p className="text-base leading-relaxed">
                    En publiant sur LAHALEX, vous développez des relations avec des experts internationaux, ouvrant la
                    voie à des collaborations et opportunités de travail en réseau.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Opportunités commerciales</h3>
                  <p className="text-base leading-relaxed">
                    Les articles publiés sur LAHALEX servent de vitrine pour vos compétences, attirant des clients
                    potentiels et des opportunités d'affaires internationales.
                  </p>
                </div>


              </div>
            </section>
          </div>

          {/* Right column (form) */}
          <aside className="w-full lg:w-96 lg:flex-shrink-0 self-start mt-0 lg:mt-[588px]">
            <div ref={formRef} className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100">
              <h3 className="text-[#770D28] text-xl font-semibold mb-6">Inscrivez-vous</h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="nom">Nom</label>
                  <input
                    id="nom"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="prenom">Prénoms</label>
                  <input
                    id="prenom"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all"
                    placeholder="Vos prénoms"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all"
                    placeholder="Votre email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="tel">Contact téléphonique</label>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <select
                      id="indicatif"
                      className="w-full sm:w-auto sm:min-w-[140px] sm:max-w-[200px] border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none px-3 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent"
                      defaultValue={"+225"}
                    >
                      {countryOptions.map((country) => (
                        <option key={country.code} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <input
                      id="tel"
                      type="tel"
                      className="w-full sm:flex-1 border border-gray-300 sm:border-l-0 rounded-lg sm:rounded-l-none sm:rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent"
                      placeholder="Ex: 99 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="file">Cliquez ici pour ajouter une pièce</label>
                  <div className="relative">
                    <input
                      id="file"
                      type="file"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#770D28] file:text-white hover:file:bg-[#5e0a20] focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:ring-offset-2"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button type="button" className="text-xs text-gray-600 underline hover:text-[#770D28] transition-colors">Choisir un fichier</button>
                      <span className="text-xs text-gray-500">{file ? file.name : "Aucun fichier choisi"}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all resize-none"
                    rows={4}
                    placeholder="Votre message..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center border-2 border-[#770D28] text-[#770D28] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#fff] focus:outline-none transition-all"
                  >
                    Envoyer
                  </button>
                </div>

              </form>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        /* Classes pour les animations GSAP - style lahalex-universel */
        .hero-title, .hero-subtitle, .hero-image {
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

        /* Effets de glassmorphism */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Effets de hover avancés */
        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}
