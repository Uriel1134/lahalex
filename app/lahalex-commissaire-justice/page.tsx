"use client"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LahalexCommissaireJusticePage() {
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
          stagger: 0.3,
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
          stagger: 0.3,
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
          stagger: 0.3,
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
          stagger: 0.3,
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
                LAHALEX COMMISSAIRE DE JUSTICE
              </h1>
              <p className="hero-subtitle text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                Prenez une longueur d'avance. Pilotez votre étude en toute simplicité avec une technologie pensée pour
                votre quotidien.
              </p>
              <a
                href="/essai-gratuit"
                className="hero-button bg-[#770D28] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5a0a1f] transition-colors"
              >
                Essaie gratuit
              </a>
            </div>

            {/* Colonne droite - Illustration spécifique Commissaire de Justice */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src="/images/lahalex-commissaire.png"
                alt="Illustration LahaLex Commissaire de Justice"
                className="hero-image h-64 sm:h-80 lg:h-96 w-full max-w-md object-contain "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section with 3 cards for Commissaire */}
      <section ref={servicesRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background */}
        <div className="services-bg absolute inset-0" style={{ backgroundColor: "#770D28" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Gestion simplifiée de votre cabinet */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-sf-pro text-lg text-[#770D28] mb-4">Gestion simplifiée de votre cabinet</h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Prenez le contrôle total de votre cabinet avec un module pensé pour les professionnels du droit
                exigeants. Suivi des dossiers,...
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <a
                  href="/gestion-etude-commissaire"
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>

            {/* Rédaction d'actes juridiques assistées et avancées */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-sf-pro text-lg text-[#770D28] mb-4">
                Rédaction d'actes juridiques assistées et avancées
              </h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Gagnez en efficacité, en rigueur et en sécurité grâce au module Rédaction de LahaLex Avocat :...
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <a
                  href="/redaction-actes-commissaire"
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>

            {/* Outil d'assistance IA */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div className="service-icon w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#770D28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="service-title font-gobold text-lg text-[#770D28] mb-4">
                Outil d'assistance IA dédié à l'optimisation de vos activités
              </h3>
              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Boostez votre efficacité juridique avec l'assistant IA intégré à notre logiciel.
              </p>
              <div className="flex-1"></div>
              <div className="text-right mt-auto">
                <a
                  href="/assistance-ia-commissaire"
                  className="service-button border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
