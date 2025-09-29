"use client"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LahalexUniverselPage() {
  // Refs pour les animations
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Animation simple et visible au chargement de la page
    const tl = gsap.timeline();

    // Animation du hero - plus visible
    tl.fromTo(".hero-title", 
      { opacity: 0, y: 100, scale: 0.5 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
    )
    .fromTo(".hero-subtitle", 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(".hero-button", 
      { opacity: 0, scale: 0, rotation: 360 }, 
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=0.5"
    )
    .fromTo(".hero-image", 
      { opacity: 0, x: 200, rotation: 45 }, 
      { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: "power3.out" }, "-=1"
    );

    // Animation des services avec scroll trigger
    const ctx = gsap.context(() => {
      // Animation simple des cartes
      gsap.fromTo(".service-card", 
        { opacity: 0, y: 100, scale: 0.8 }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des icônes
      gsap.fromTo(".service-icon", 
        { opacity: 0, scale: 0, rotation: -360 }, 
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.6)",
          stagger: 0.2,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des titres
      gsap.fromTo(".service-title", 
        { opacity: 0, x: -50 }, 
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.8,
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des boutons
      gsap.fromTo(".service-button", 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "bounce.out",
          stagger: 0.2,
          delay: 1.1,
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, [servicesRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      
      <style jsx global>{`
        .hero-title, .hero-subtitle, .hero-button, .hero-image {
          opacity: 0;
        }
        .service-card, .service-icon, .service-title, .service-button {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="hero-title font-gobold text-3xl sm:text-4xl lg:text-5xl text-[#770D28] mb-6 lg:mb-8 leading-tight">
                LAHALEX UNIVERSEL
              </h1>
              <p className="hero-subtitle text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                Pensée pour accompagner les juristes, étudiants, doctorants, entreprises, institutions publiques et
                privées, universités, notaires, avocats, commissaires de justice et tous les praticiens du droit,
                LahaLex Universel vous donne un accès simplifié, intelligent et innovant à l'information juridique.
              </p>
              <button
                className="hero-button bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
                onClick={() => (window.location.href = "/essai-gratuit")}
              >
                Essaie gratuit
              </button>
            </div>

            {/* Right Column - Video */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <img
                src="/gif/lahalex-universel.gif"
                alt="LahaLex Universel"
                className="hero-image h-64 sm:h-80 lg:h-96 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section with 4 cards for Universel */}
      <section ref={servicesRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background */}
        <div className="services-bg absolute inset-0" style={{ backgroundColor: "#770D28" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Recherche juridique avancée */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-sf-pro text-lg text-[#770D28] mb-4">Recherche juridique avancée</h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre outil de recherche juridique avancée permet d'exploiter de façon structurée et intelligente un
                vaste ensembl...
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <button
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/recherche-juridique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Bibliothèque pluridisciplinaire */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-sf-pro text-lg text-[#770D28] mb-4">Bibliothèque pluridisciplinaire</h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre bibliothèque pluridisciplinaire est une plateforme en ligne dédiée à la consultation d'un vaste
                ensemble d'ouvrages et de documents en version numé...
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <button
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/bibliotheque-numerique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Veille juridique */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-sf-pro text-lg text-[#770D28] mb-4">Veille juridique</h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre veille juridique est un dispositif structuré de surveillance, de collecte, d'analyse et de
                diffusion continue d'informations législa...
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <button
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/veille-juridique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Autres outils */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-sf-pro text-lg text-[#770D28] mb-4">Autres outils</h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Cette section de notre plateforme a été conçue comme un espace de référence indispensable, tant pour les
                professionnels du droit (avocat...
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <button
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  onClick={() => (window.location.href = "/autres-outils-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
