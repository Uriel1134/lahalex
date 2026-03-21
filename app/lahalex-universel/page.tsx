"use client";

import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { useEffect, useRef, useState } from "react";
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

const heroSlides = [
  {
    image: "/images/carousel-image-3.png",
    alt: "Base de données Économie et Gestion",
    title: "BASE DE DONNÉES ÉCONOMIE ET GESTION",
    description:
      "Finance, comptabilité, management, entrepreneuriat, marketing, fiscalité et analyse de gestion.",
  },
  {
    image: "/images/carousel-image-stim.png",
    alt: "Base de données STIM",
    title: "BASE DE DONNÉES STIM",
    description:
      "Sciences, technologie, ingénierie, mathématiques, informatique, recherche et innovation.",
  },
  {
    image: "/images/universel-laptop.png",
    alt: "Base de données Droit",
    title: "BASE DE DONNÉES DROIT",
    description:
      "Jurisprudence, doctrine, législation, contrats, procédures, actes et veille juridique.",
  },
  {
    image: "/images/carousel-image-agro.png",
    alt: "Base de données Agriculture",
    title: "BASE DE DONNÉES AGRICULTURE",
    description:
      "Agronomie, production végétale, élevage, environnement, sécurité alimentaire et développement rural.",
  },
  {
    image: "/images/carousel-image-2.png",
    alt: "Base de données Médecine",
    title: "BASE DE DONNÉES MÉDECINE",
    description:
      "Médecine, pharmacie, physiologie, santé publique, clinique, diagnostic et recherche biomédicale.",
  },
];

export default function LahalexUniverselPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  const imageWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightTextBoxRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedSlideIndex, setDisplayedSlideIndex] = useState(0);
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
      setDisplayedSlideIndex(nextIndex);
      setIsAnimating(false);

      if (rightTextBoxRef.current) {
        gsap.set(rightTextBoxRef.current, { opacity: 1, y: 0 });
      }

      return;
    }

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    setDisplayedSlideIndex(nextIndex);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    if (rightTextBoxRef.current) {
      tl.fromTo(
        rightTextBoxRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
        },
        0
      );
    }

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
          ".hero-right-text-box",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.45"
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

  const currentSlide = heroSlides[displayedSlideIndex];

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
        .hero-right-text-box,
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
        className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h1
                className="hero-title font-gobold text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-8 leading-tight"
                style={{ color: BRAND_TEXT }}
              >
                LAHALEX UNIVERSEL
              </h1>

              <p className="hero-subtitle text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-[680px]">
                Pensée pour accompagner les professionnels, étudiants et chercheurs en{" "}
                <strong>
                  Droit, Agriculture, STIM, Économie et Sciences de la Santé
                </strong>
                . Que vous soyez juriste, économiste, professionnel de santé,
                entreprise ou institution, LahaLex Universel vous donne un accès
                simplifié, intelligent et innovant à l'information spécialisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  className="hero-button px-8 py-3 rounded-xl font-medium transition-colors text-black"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
                  }}
                  onClick={() => (window.location.href = "/essai-gratuit")}
                >
                  Demandez un devis
                </button>

                <button
                  className="hero-button px-8 py-3 rounded-xl font-medium transition-colors"
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

            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
              <div
                ref={rightTextBoxRef}
                className="hero-right-text-box w-full max-w-[620px] mb-6 rounded-2xl border px-5 py-4"
                style={{
                  borderColor: "rgba(180, 171, 107, 0.28)",
                  backgroundColor: "rgba(212, 200, 154, 0.08)",
                }}
              >
                <p
                  className="text-sm sm:text-base font-semibold uppercase mb-2"
                  style={{ color: BRAND_PRIMARY_DARK }}
                >
                  {currentSlide.title}
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>

              <div className="hero-image-stage relative w-full max-w-[760px] h-[320px] sm:h-[370px] lg:h-[420px]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      imageWrapRefs.current[index] = el;
                    }}
                    className="absolute inset-0 flex items-start justify-center"
                    style={{
                      opacity: 0,
                      visibility: "hidden",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full max-w-[620px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={servicesRef}
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${BRAND_PRIMARY_DARK}, ${BRAND_PRIMARY})`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  />
                </svg>
              </div>

              <h3
                className="service-title text-lg mb-4 font-semibold"
                style={{ color: BRAND_TEXT }}
              >
                Recherche avancée
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre outil de recherche avancée permet d'exploiter de façon
                structurée et intelligente un vaste ensemble de contenus
                spécialisés.
              </p>

              <div className="flex-1" />

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
                  onClick={() =>
                    (window.location.href = "/recherche-juridique-universel")
                  }
                >
                  En savoir plus
                </button>
              </div>
            </div>

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
                  />
                </svg>
              </div>

              <h3
                className="service-title text-lg mb-4 font-semibold"
                style={{ color: BRAND_TEXT }}
              >
                Bibliothèque pluridisciplinaire
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre bibliothèque pluridisciplinaire est une plateforme en ligne
                dédiée à la consultation d'un vaste ensemble d'ouvrages et de
                documents numériques.
              </p>

              <div className="flex-1" />

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
                  onClick={() =>
                    (window.location.href =
                      "/bibliotheque-numerique-universel")
                  }
                >
                  En savoir plus
                </button>
              </div>
            </div>

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
                  />
                </svg>
              </div>

              <h3
                className="service-title text-lg mb-4 font-semibold"
                style={{ color: BRAND_TEXT }}
              >
                Veille journalière
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Notre veille journalière est un dispositif structuré de
                surveillance, de collecte, d'analyse et de diffusion continue
                d'informations spécialisées.
              </p>

              <div className="flex-1" />

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
                  onClick={() =>
                    (window.location.href = "/veille-juridique-universel")
                  }
                >
                  En savoir plus
                </button>
              </div>
            </div>

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
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h3
                className="service-title text-lg mb-4 font-semibold"
                style={{ color: BRAND_TEXT }}
              >
                Autres outils
              </h3>

              <p className="service-description text-gray-700 text-sm mb-6 leading-relaxed">
                Cette section de notre plateforme a été conçue comme un espace de
                référence indispensable pour les professionnels, chercheurs et
                institutions.
              </p>

              <div className="flex-1" />

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
                  onClick={() =>
                    (window.location.href = "/autres-outils-universel")
                  }
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