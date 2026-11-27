"use client";

import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, LayoutGrid, Radar, Search } from "lucide-react";
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
    icon: Search,
    title: "Recherche avancée",
    description:
      "Notre outil de recherche avancée permet d'exploiter de façon structurée et intelligente un vaste ensemble de contenus spécialisés.",
    href: "/recherche-juridique-universel",
  },
  {
    icon: BookOpen,
    title: "Bibliothèque numérique",
    description:
      "Notre bibliothèque numérique est une plateforme en ligne dédiée à la consultation d'un vaste ensemble d'ouvrages et de documents numériques.",
    href: "/bibliotheque-numerique-universel",
  },
  {
    icon: Radar,
    title: "Veille journalière",
    description:
      "Notre veille journalière est un dispositif structuré de surveillance, de collecte, d'analyse et de diffusion continue d'informations spécialisées.",
    href: "/veille-juridique-universel",
  },
  {
    icon: LayoutGrid,
    title: "Autres outils",
    description:
      "Cette section de notre plateforme a été conçue comme un espace de référence indispensable pour les professionnels, chercheurs et institutions.",
    href: "/autres-outils-universel",
  },
];

const heroSlides = [
  {
    image: "/images/carousel-image-3.png",
    alt: "Base de données Sciences de l'économie et de la gestion",
    title: "BASE DE DONNÉES SCIENCES DE L'ÉCONOMIE ET DE LA GESTION",
    description:
      "Economie, Finance, comptabilité, management, marketing, entrepreneuriat.",
  },
  {
    image: "/images/carousel-image-stim.png",
    alt: "Base de données STIM",
    title: "BASE DE DONNÉES STIM",
    description:
      "Sciences, technologie, ingénierie, mathématiques(Mathématiques, physique, chimie, informatique, IA, robotique, data science, ingénierie, technologies émergentes).",
  },
  {
    image: "/images/universel-laptop.png",
    alt: "Base de données Sciences juridiques",
    title: "BASE DE DONNÉES SCIENCES JURIDIQUES",
    description:
      "Droit public, droit privé, droit OHADA, droit constitutionnel, droit coutumier, droit international, jurisprudences, doctrine, textes officiels",
  },
  {
    image: "/images/carousel-image-agro.png",
    alt: "Base de données Sciences agronomiques",
    title: "BASE DE DONNÉES SCIENCES AGRONOMIQUES",
    description:
      "Agronomie, élevage,  agroalimentaire, agroécologie, développement rural, sécurité alimentaire, innovation agricole.",
  },
  {
    image: "/images/carousel-image-2.png",
    alt: "Base de données SCIENCES DE LA SANTÉ",
    title: "BASE DE DONNÉES SCIENCES DE LA SANTÉ",
    // description:
    //   "Anatomie, physiologie, Microbiologie.",
  },
];

export default function LahalexUniverselPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  const imageWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showSlide = (nextIndex: number, immediate = false) => {
    const currentIndex = activeIndexRef.current;
    const currentEl = imageWrapRefs.current[currentIndex];
    const nextEl = imageWrapRefs.current[nextIndex];

    if (!nextEl) return;
    if (isAnimating && !immediate) return;
    if (!immediate && nextIndex === currentIndex) return;

    setIsAnimating(true);

    imageWrapRefs.current.forEach((el, index) => {
      if (!el) return;

      if (index !== currentIndex && index !== nextIndex) {
        gsap.set(el, {
          autoAlpha: 0,
          x: 80,
          scale: 0.985,
          zIndex: 0,
          pointerEvents: "none",
        });
      }
    });

    if (immediate) {
      imageWrapRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.set(el, {
          autoAlpha: index === nextIndex ? 1 : 0,
          x: 0,
          scale: 1,
          zIndex: index === nextIndex ? 20 : 0,
          pointerEvents: index === nextIndex ? "auto" : "none",
        });
      });

      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      setIsAnimating(false);

      return;
    }

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    if (currentEl && currentEl !== nextEl) {
      tl.to(
        currentEl,
        {
          autoAlpha: 0,
          x: -60,
          scale: 0.985,
          duration: 1.1,
          ease: "power3.inOut",
          pointerEvents: "none",
        },
        0
      );
    }

    gsap.set(nextEl, {
      autoAlpha: 0,
      x: 80,
      scale: 0.985,
      zIndex: 20,
      pointerEvents: "none",
    });

    tl.to(
      nextEl,
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.inOut",
        pointerEvents: "auto",
      },
      0
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.45"
        )
        .fromTo(
          ".hero-button",
          { opacity: 0, y: 16, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".hero-dots",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.15"
        )
        .fromTo(
          ".hero-image-stage",
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.55"
        );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".service-icon",
        { opacity: 0, scale: 0.4, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.65)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".service-title",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".service-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".service-button",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    showSlide(0, true);
  }, []);

  useEffect(() => {
    autoPlayRef.current = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % heroSlides.length;
      showSlide(nextIndex, false);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [isAnimating]);

  const restartAutoplay = () => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % heroSlides.length;
      showSlide(nextIndex, false);
    }, 5000);
  };

  const goToSlide = (index: number) => {
    if (index === activeIndexRef.current || isAnimating) return;
    showSlide(index, false);
    restartAutoplay();
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen"
      style={{ backgroundColor: BRAND_BG }}
    >
      <Header />

      <style jsx global>{`
        .hero-title,
        .hero-subtitle,
        .hero-button,
        .hero-dots,
        .hero-image-stage,
        .service-card,
        .service-icon,
        .service-title,
        .service-description,
        .service-button {
          opacity: 0;
        }
      `}</style>

      <section
        ref={heroRef}
        className="bg-white pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1
                className="hero-title font-gobold text-4xl sm:text-5xl xl:text-6xl mb-6 lg:mb-8 leading-tight"
                style={{ color: BRAND_TEXT }}
              >
                LAHALEX UNIVERSEL
              </h1>

              <p className="hero-subtitle text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-[680px]">
                Pensée pour accompagner les professionnels, étudiants et chercheurs en{" "}
                <strong>
                  Sciences juridiques, Sciences agronomiques, STIM, Sciences de l&apos;économie et de la gestion et Sciences de la santé
                </strong>
                . Que vous soyez juriste, économiste, professionnel de santé,
                entreprise ou institution, LahaLex Universel vous donne un accès
                simplifié, intelligent et innovant à l'information spécialisée.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                <button
                  className="hero-button px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-colors text-black"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                  }}
                  onClick={() => (window.location.href = "/essai-gratuit")}
                >
                  Demandez un devis
                </button>

                <button
                  className="hero-button px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-colors"
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

              <div className="hero-dots flex items-center gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: activeIndex === index ? 28 : 10,
                      height: 10,
                      backgroundColor:
                        activeIndex === index
                          ? BRAND_PRIMARY_DARK
                          : "rgba(17,17,17,0.18)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/*
                Toutes les slides sont empilées dans la même cellule de grille :
                la scène prend la hauteur de la plus haute, sans hauteur fixe.
              */}
              <div className="hero-image-stage relative grid">
                {heroSlides.map((slide, index) => {
                  const nextSlide = heroSlides[(index + 1) % heroSlides.length];
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        imageWrapRefs.current[index] = el;
                      }}
                      className="relative col-start-1 row-start-1 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6"
                      style={{
                        opacity: 0,
                        visibility: "hidden",
                      }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full sm:w-[65%] sm:scale-110 shrink-0 h-auto object-contain select-none pointer-events-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                        draggable={false}
                      />

                      <div className="min-w-0 sm:flex-1">
                        <p
                          className="font-gobold uppercase text-2xl sm:text-[1.6rem] xl:text-3xl leading-[1.1] mb-3"
                          style={{ color: BRAND_PRIMARY_DARK }}
                        >
                          {slide.title}
                        </p>
                        {slide.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {slide.description}
                          </p>
                        )}
                      </div>

                      {/* Ordinateur suivant qui dépasse sur le bord droit de l'écran (rogné par la section) */}
                      <img
                        src={nextSlide.image}
                        alt=""
                        aria-hidden="true"
                        className="hidden lg:block absolute top-1/2 left-[calc(100%+2.5rem)] w-[65%] scale-110 max-w-none -translate-y-1/2 select-none pointer-events-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCardsSection
        ref={servicesRef}
        title="Des outils essentiels pour votre réussite professionnelle"
        intro="Rechercher, lire, suivre l'actualité et approfondir : quatre outils intégrés pensés pour les professionnels, étudiants et chercheurs de tous les domaines."
        services={services}
      />

      <Footer />
    </div>
  );
}