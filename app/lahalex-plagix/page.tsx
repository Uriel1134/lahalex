"use client";

import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import Image from "next/image";
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

const plagixModules = [
  {
    title: "Base documentaire académique souveraine",
    description:
      "Synchronisation automatisée avec une vaste base documentaire académique enrichie de millions de documents et publications scientifiques. Déduplication par empreinte SHA-256 et indexation plein texte de haute performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Moteur N-grams & Analyse sémantique",
    description:
      "Alignement rigoureux de n-grams (4 à 6 mots consécutifs) selon les standards académiques. Détection fine des paraphrases (distance de Levenshtein, RapidFuzz) et analyse de proximité sémantique par embeddings vectoriels de dernière génération.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Moteur OCR haute fidélité",
    description:
      "Pipeline complet de reconnaissance optique de caractères (PaddleOCR et Tesseract) avec redressement automatique (deskew), amélioration de contraste et débruitage. Analyse intégrale des PDF scannés, fac-similés et captures photographiques.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Détecteur de contenus générés par IA",
    description:
      "Identification avancée des textes rédigés par modèles de langage et intelligence artificielle. Analyse heuristique locale combinant burstiness, entropie lexicale, répétitions et marqueurs stylistiques, complétée par des détecteurs spécialisés.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Détection cross-langue (traduction directe)",
    description:
      "Détection automatisée du plagiat par traduction directe Français ⇄ Anglais. Découpage intelligent, traduction pivot et alignement d'empreintes sémantiques pour déjouer les tentatives d'emprunt dissimulé dans une autre langue.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
  },
  {
    title: "Rapports certifiés & Seuils décisionnels",
    description:
      "Évaluation rigoureuse selon les seuils d'intégrité académique et de tolérance institutionnelle. Exclusion intelligente des bibliographies et citations normées (APA, MLA, ISO 690), avec génération de rapports PDF certifiés et exports CSV détaillés.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function LahalexPlagixPage() {
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
          delay: 0.4,
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
          delay: 0.6,
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
        .service-title {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne gauche - Contenu */}
            <div className="order-2 lg:order-1">
              <h1
                className="hero-title font-gobold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight"
                style={{ color: BRAND_TEXT }}
              >
                PLAGIX
              </h1>

              <div className="space-y-6 mb-8">
                <p className="hero-subtitle text-base sm:text-lg text-gray-700 leading-relaxed">
                  La plateforme souveraine de détection de plagiat et de contrôle de l’intégrité académique,
                  développée par LAHALEX. Analysez vos mémoires, thèses, articles scientifiques et documents
                  institutionnels avec une rigueur absolue.
                </p>

                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Base académique multi-sources
                  </li>
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Moteur N-grams, détection de paraphrases et similarités sémantiques
                  </li>
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Moteur OCR avancé pour PDF scannés et photographies de documents
                  </li>
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Détecteur d’intelligence artificielle &amp; détection cross-langue
                  </li>
                  <li className="flex items-start">
                    <span
                      className="hero-bullet w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: BRAND_PRIMARY_DARK }}
                    ></span>
                    Rapports certifiés PDF avec calcul officiel des seuils décisionnels
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

            {/* Colonne droite - Visuel média */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/plagix/accueil.png"
                  alt="Interface Plagix"
                  width={1284}
                  height={816}
                  priority
                  className="hero-image w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Modules Cards Section */}
      <section ref={servicesRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div
          className="services-bg absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${BRAND_PRIMARY_DARK}, ${BRAND_PRIMARY})`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-gobold text-black uppercase tracking-wide mb-4">
              LES MODULES ET INNOVATIONS PLAGIX
            </h2>
            <p className="text-gray-800 text-sm sm:text-base">
              Un écosystème technologique souverain conçu pour les universités, centres de recherche,
              écoles doctorales et institutions académiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {plagixModules.map((mod, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-xl service-card flex flex-col h-full border border-gray-100 transition-transform hover:-translate-y-1"
              >
                {/* Icône */}
                <div
                  className="service-icon w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: BRAND_SOFT, color: BRAND_TEXT }}
                >
                  {mod.icon}
                </div>

                {/* Titre */}
                <h3 className="service-title font-sf-pro font-semibold text-lg sm:text-xl mb-4" style={{ color: BRAND_TEXT }}>
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="service-description text-gray-700 text-sm leading-relaxed flex-1">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
