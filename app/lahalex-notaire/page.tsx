"use client"
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

export default function LahalexNotairePage() {
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
        ".hero-bullet",
        { opacity: 0, scale: 0, rotation: 180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
        },
        "-=0.5"
      )
      .fromTo(
        ".hero-button",
        { opacity: 0, scale: 0, rotation: 360 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      )
      .fromTo(
        ".hero-image",
        { opacity: 0, x: 200, rotation: 45 },
        { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: "power3.out" },
        "-=1"
      );

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
          stagger: 0.3,
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
          stagger: 0.3,
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
          stagger: 0.3,
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
          stagger: 0.3,
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
        .hero-image,
        .hero-bullet {
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
      <section ref={heroRef} className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="order-2 lg:order-1">
              <h1
                className="hero-title font-gobold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight"
                style={{ color: BRAND_TEXT }}
              >
                LAHALEX NOTAIRE
              </h1>

              <div className="space-y-6 mb-8">
                <p className="hero-subtitle text-lg text-gray-700 leading-relaxed">
                  La solution digitale pour un office moderne et performant. Maîtrisez tous les
                  aspects de la vie de votre office notarial grâce à un module pensé pour les
                  exigences de votre profession.
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Pilotage global de l'office
                  </li>
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Base de données intelligente
                  </li>
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Suivi rigoureux des actes
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/essai-gratuit"
                  className="hero-button inline-block px-8 py-3 rounded-lg font-medium transition-colors text-black text-center"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                  }}
                >
                  Demandez un devis
                </a>

                <a
                  href="/nous-contacter"
                  className="hero-button inline-block px-8 py-3 rounded-lg font-medium transition-colors text-center"
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
                >
                  Demandez une démonstration
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src="/images/lahalex-notaire-2.png"
                alt="Illustration LahaLex Notaire"
                className="hero-image h-48 sm:h-64 lg:h-80 w-full max-w-md object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section ref={servicesRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div
          className="services-bg absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${BRAND_PRIMARY_DARK}, ${BRAND_PRIMARY})`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Gestion simplifiée */}
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Gestion simplifiée de votre cabinet
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Prenez le contrôle total de votre cabinet avec un module pensé pour les
                professionnels du droit exigeants. Suivi des dossiers,...
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <a
                  href="/gestion-office-notaire"
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
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
                >
                  En savoir plus
                </a>
              </div>
            </div>

            {/* Rédaction d'actes */}
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
              </div>

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Rédaction d'actes juridiques assistées et avancées
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Gagnez en efficacité, en rigueur et en sécurité grâce au module Rédaction de
                LahaLex Avocat :...
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <a
                  href="/redaction-actes-notaire"
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
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
                >
                  En savoir plus
                </a>
              </div>
            </div>

            {/* Outil IA */}
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>

              <h3 className="service-title font-sf-pro text-lg mb-4" style={{ color: BRAND_TEXT }}>
                Outil d'assistance IA dédié à l'optimisation de vos activités
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Boostez votre efficacité juridique avec l'assistant IA intégré à notre logiciel.
              </p>

              <div className="flex-1"></div>

              <div className="text-right mt-auto">
                <a
                  href="/assistance-ia-notaire"
                  className="service-button px-6 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
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