"use client";

import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Camera, ClipboardCheck, Languages, Lightbulb, ShieldCheck } from "lucide-react";
import { ServiceCardsSection, type ServiceCardItem } from "@/components/service-cards-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BRAND_PRIMARY = "#D4C89A";
const BRAND_PRIMARY_DARK = "#B4AB6B";
const BRAND_TEXT = "#111111";
const BRAND_BG = "#FFFFFF";

const plagixModules: ServiceCardItem[] = [
  {
    icon: BookOpen,
    title: "Base documentaire académique souveraine",
    description:
      "Synchronisation automatisée avec une vaste base documentaire académique enrichie de millions de documents et publications scientifiques. Déduplication par empreinte SHA-256 et indexation plein texte de haute performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Moteur N-grams & Analyse sémantique",
    description:
      "Alignement rigoureux de n-grams (4 à 6 mots consécutifs) selon les standards académiques. Détection fine des paraphrases (distance de Levenshtein, RapidFuzz) et analyse de proximité sémantique par embeddings vectoriels de dernière génération.",
  },
  {
    icon: Camera,
    title: "Moteur OCR haute fidélité",
    description:
      "Pipeline complet de reconnaissance optique de caractères (PaddleOCR et Tesseract) avec redressement automatique (deskew), amélioration de contraste et débruitage. Analyse intégrale des PDF scannés, fac-similés et captures photographiques.",
  },
  {
    icon: Lightbulb,
    title: "Détecteur de contenus générés par IA",
    description:
      "Identification avancée des textes rédigés par modèles de langage et intelligence artificielle. Analyse heuristique locale combinant burstiness, entropie lexicale, répétitions et marqueurs stylistiques, complétée par des détecteurs spécialisés.",
  },
  {
    icon: Languages,
    title: "Détection cross-langue (traduction directe)",
    description:
      "Détection automatisée du plagiat par traduction directe Français ⇄ Anglais. Découpage intelligent, traduction pivot et alignement d'empreintes sémantiques pour déjouer les tentatives d'emprunt dissimulé dans une autre langue.",
  },
  {
    icon: ShieldCheck,
    title: "Rapports certifiés & Seuils décisionnels",
    description:
      "Évaluation rigoureuse selon les seuils d'intégrité académique et de tolérance institutionnelle. Exclusion intelligente des bibliographies et citations normées (APA, MLA, ISO 690), avec génération de rapports PDF certifiés et exports CSV détaillés.",
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
      <section ref={heroRef} className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
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
      <ServiceCardsSection
        ref={servicesRef}
        eyebrow="Nos modules"
        title="Les modules et innovations Plagix"
        intro="Un écosystème technologique souverain conçu pour les universités, centres de recherche, écoles doctorales et institutions académiques."
        services={plagixModules}
      />

      <Footer />
    </div>
  );
}
