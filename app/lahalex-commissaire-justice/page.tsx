"use client"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChartColumn, Lightbulb, Pencil } from "lucide-react";
import { ServiceCardsSection, type ServiceCardItem } from "@/components/service-cards-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BRAND_PRIMARY = "#D4C89A";
const BRAND_PRIMARY_DARK = "#B4AB6B";
const BRAND_TEXT = "#111111";
const BRAND_BG = "#FFFFFF";

const services: ServiceCardItem[] = [
  {
    icon: ChartColumn,
    title: "Gestion simplifiée de votre cabinet",
    description:
      "Prenez le contrôle total de votre cabinet avec un module pensé pour les professionnels du droit exigeants. Suivi des dossiers,...",
    href: "/gestion-etude-commissaire",
  },
  {
    icon: Pencil,
    title: "Rédaction d'actes juridiques assistées et avancées",
    description:
      "Gagnez en efficacité, en rigueur et en sécurité grâce au module Rédaction de LahaLex Avocat :...",
    href: "/redaction-actes-commissaire",
  },
  {
    icon: Lightbulb,
    title: "Outil d'assistance IA dédié à l'optimisation de vos activités",
    description:
      "Boostez votre efficacité juridique avec l'assistant IA intégré à notre logiciel.",
    href: "/assistance-ia-commissaire",
  },
];

export default function LahalexCommissaireJusticePage() {
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
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=0.5"
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
        .hero-image {
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
      <section ref={heroRef} className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1
                className="hero-title font-gobold text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight"
                style={{ color: BRAND_TEXT }}
              >
                LAHALEX COMMISSAIRE DE JUSTICE
              </h1>

              <p className="hero-subtitle text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                Prenez une longueur d'avance. Pilotez votre étude en toute simplicité avec une
                technologie pensée pour votre quotidien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/essai-gratuit"
                  className="hero-button px-8 py-3 rounded-lg font-medium transition-colors text-black text-center"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                  }}
                >
                  Demandez un devis
                </a>

                <a
                  href="/nous-contacter"
                  className="hero-button px-8 py-3 rounded-lg font-medium transition-colors text-center"
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
                src="/images/lahalex-commissaire-2.png"
                alt="Illustration LahaLex Commissaire de Justice"
                className="hero-image w-full max-w-md h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <ServiceCardsSection
        ref={servicesRef}
        title="Des outils essentiels pour votre réussite professionnelle"
        intro="Gérer, rédiger et optimiser : trois modules intégrés pensés pour les commissaires de justice et leur étude."
        services={services}
      />

      <Footer />
    </div>
  )
}