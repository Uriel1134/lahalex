"use client";

import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BRAND_PRIMARY = "#D4C89A";
const BRAND_PRIMARY_DARK = "#B4AB6B";
const BRAND_TEXT = "#111111";
const BRAND_BG = "#FFFFFF";
const BRAND_SOFT = "rgba(212, 200, 154, 0.15)";
const BRAND_SOFT_LIGHT = "rgba(212, 200, 154, 0.10)";

export default function LahalexUniverselPage() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-button",
        { opacity: 0, scale: 0, rotation: 360 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      )
      .fromTo(
        ".hero-stack-image",
        { opacity: 0, x: 200, rotation: 45, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=1"
      );

    const floatingImages = gsap.utils.toArray<HTMLElement>(".hero-stack-image");
    floatingImages.forEach((image, index) => {
      gsap.to(image, {
        y: index % 2 === 0 ? -12 : 12,
        x: index % 2 === 0 ? 6 : -6,
        rotation: index % 2 === 0 ? -2 : 2,
        duration: 2.8 + index * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
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

      gsap.fromTo(
        ".service-icon",
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

      gsap.fromTo(
        ".service-title",
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

      gsap.fromTo(
        ".service-button",
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
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_BG }}>
      <Header />

      <style jsx global>{`
        .hero-title,
        .hero-subtitle,
        .hero-button,
        .hero-stack-image {
          opacity: 0;
        }

        .service-card,
        .service-icon,
        .service-title,
        .service-button {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="order-2 lg:order-1">
              <h1
                className="hero-title font-gobold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight"
                style={{ color: BRAND_TEXT }}
              >
                LAHALEX UNIVERSEL
              </h1>

              <p className="hero-subtitle text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                Pensée pour accompagner les professionnels, étudiants et chercheurs en{" "}
                <strong>Droit, Agriculture, STIM, Économie et Sciences de la Santé</strong>. Que vous soyez juriste,
                économiste, professionnel de santé, entreprise ou institution, LahaLex Universel
                vous donne un accès simplifié, intelligent et innovant à l'information spécialisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="hero-button px-8 py-3 rounded-lg font-medium transition-colors text-black"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                  }}
                  onClick={() => (window.location.href = "/essai-gratuit")}
                >
                  Demandez un devis
                </button>

                <button
                  className="hero-button px-8 py-3 rounded-lg font-medium transition-colors"
                  style={{
                    border: `2px solid ${BRAND_PRIMARY_DARK}`,
                    color: BRAND_TEXT,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND_PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={() => (window.location.href = "/nous-contacter")}
                >
                  Demandez une démonstration
                </button>
              </div>
            </div>

            {/* Right Column - Images superposées sans cards blanches */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-[520px] h-[420px] sm:h-[460px] lg:h-[520px]">
                <img
                  src="/images/carousel-image-2.png"
                  alt="Lahalex carousel 1"
                  className="hero-stack-image absolute top-4 left-4 sm:left-8 w-[72%] h-auto object-contain z-[1] pointer-events-none select-none"
                />

                <img
                  src="/images/carousel-image-3.png"
                  alt="Lahalex carousel 2"
                  className="hero-stack-image absolute top-12 right-2 sm:right-6 w-[72%] h-auto object-contain z-[2] pointer-events-none select-none"
                />

                <img
                  src="/images/carousel-image-agro.png"
                  alt="Lahalex carousel agro"
                  className="hero-stack-image absolute bottom-16 left-6 sm:left-10 w-[72%] h-auto object-contain z-[3] pointer-events-none select-none"
                />

                <img
                  src="/images/carousel-image-stim.png"
                  alt="Lahalex carousel stim"
                  className="hero-stack-image absolute bottom-4 right-4 sm:right-8 w-[72%] h-auto object-contain z-[4] pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section ref={servicesRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div
          className="services-bg absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${BRAND_PRIMARY_DARK}, ${BRAND_PRIMARY})`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Recherche avancée */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div
                className="service-icon w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: BRAND_SOFT }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: BRAND_TEXT }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Recherche avancée
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre outil de recherche avancée permet d'exploiter de façon structurée et intelligente un
                vaste ensembl...
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <button
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    border: `1px solid ${BRAND_PRIMARY_DARK}`,
                    color: BRAND_TEXT,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND_SOFT_LIGHT;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={() => (window.location.href = "/recherche-juridique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Bibliothèque pluridisciplinaire */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div
                className="service-icon w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: BRAND_SOFT }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: BRAND_TEXT }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Bibliothèque pluridisciplinaire
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre bibliothèque pluridisciplinaire est une plateforme en ligne dédiée à la consultation d'un vaste
                ensemble d'ouvrages et de documents en version numé...
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <button
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    border: `1px solid ${BRAND_PRIMARY_DARK}`,
                    color: BRAND_TEXT,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND_SOFT_LIGHT;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={() => (window.location.href = "/bibliotheque-numerique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Veille journalière */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div
                className="service-icon w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: BRAND_SOFT }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: BRAND_TEXT }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"
                  ></path>
                </svg>
              </div>

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Veille journalière
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre veille journalière est un dispositif structuré de surveillance, de collecte, d'analyse et de
                diffusion continue d'informations législatives, réglementaires et jurisprudentielles.
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <button
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    border: `1px solid ${BRAND_PRIMARY_DARK}`,
                    color: BRAND_TEXT,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND_SOFT_LIGHT;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={() => (window.location.href = "/veille-juridique-universel")}
                >
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Autres outils */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg service-card flex flex-col h-full">
              <div
                className="service-icon w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: BRAND_SOFT }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: BRAND_TEXT }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Autres outils
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Cette section de notre plateforme a été conçue comme un espace de référence indispensable, tant pour les
                professionnels du droit (avocat...
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <button
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    border: `1px solid ${BRAND_PRIMARY_DARK}`,
                    color: BRAND_TEXT,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRAND_SOFT_LIGHT;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
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
  );
}