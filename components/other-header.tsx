"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { gsap } from "gsap";

// Charte graphique
const BRAND_ACCENT = "#D4C89A";
const BRAND_ACCENT_DARK = "#B4AB6B";
const BRAND_TEXT = "#111111";
const BRAND_BLACK = "#000000";
const BRAND_BORDER = "#E5E7EB";
const BRAND_PANEL = "#f8f7f9a4";
const BRAND_OVERLAY = "#D4C89A";
const BRAND_OVERLAY_SECONDARY = "#CBBE88";

// Couleurs menu mobile
const MOBILE_MENU_TEXT = "#6B7280";
const MOBILE_MENU_SUBTEXT = "#4B5563";
const MOBILE_MENU_BORDER = "rgba(107, 114, 128, 0.22)";

// Structure du menu VOS BESOINS
const vosBesoinsMenu = [
  {
    title: "Recherche documentaire",
    submenu: [{ title: "Lahalex Universel", href: "/recherche-juridique-universel" }],
  },
  {
    title: "Veille juridique",
    submenu: [{ title: "Lahalex Universel", href: "/veille-juridique-universel" }],
  },
  {
    title: "Rencontres juridiques",
    submenu: [{ title: "Lahalex Universel", href: "/autres-outils-universel" }],
  },
  {
    title: "Bibliothèque",
    submenu: [{ title: "Lahalex Universel", href: "/bibliotheque-numerique-universel" }],
  },
  {
    title: "Rédaction d'actes",
    submenu: [
      { title: "Lahalex Avocat", href: "/redaction-actes-avocat" },
      { title: "Lahalex Notaire", href: "/redaction-actes-notaire" },
      { title: "Lahalex Commissaire de justice", href: "/redaction-actes-commissaire" },
    ],
  },
  {
    title: "Gestion des clients/collaborateurs",
    submenu: [
      { title: "Lahalex Avocat", href: "/gestion-cabinet-avocat" },
      { title: "Lahalex Notaire", href: "/gestion-office-notaire" },
      { title: "Lahalex Commissaire de justice", href: "/gestion-etude-commissaire" },
    ],
  },
  {
    title: "Gestion de cabinet",
    submenu: [{ title: "Lahalex Avocat", href: "/gestion-cabinet-avocat" }],
  },
  {
    title: "Gestion de l'office",
    submenu: [{ title: "Lahalex Notaire", href: "/gestion-office-notaire" }],
  },
  {
    title: "Gestion de l'étude",
    submenu: [{ title: "Lahalex Commissaire de justice", href: "/gestion-etude-commissaire" }],
  },
  {
    title: "Solutions personnalisées",
    submenu: [{ title: "Nous contacter", href: "/nous-contacter" }],
  },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileVosBesoinsOpen, setMobileVosBesoinsOpen] = useState(false);
  const [vosBesoinsOpen, setVosBesoinsOpen] = useState(false);
  const [activeBesoin, setActiveBesoin] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const timer = setTimeout(() => {
      gsap.set(".mobile-menu-overlay", {
        opacity: 0,
        scale: 0.8,
        filter: "blur(20px)",
      });

      gsap.set(".mobile-menu-content", {
        opacity: 0,
        y: -100,
        scale: 0.9,
        rotation: -5,
      });

      gsap.set(".mobile-menu-item", {
        opacity: 0,
        x: -50,
        scale: 0.8,
        rotation: -10,
      });

      const tl = gsap.timeline();

      tl.to(".mobile-menu-overlay", {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      });

      tl.to(
        ".mobile-menu-content",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
          delay: 0.2,
        },
        "-=0.3"
      );

      tl.to(
        ".mobile-menu-item",
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
    }, 10);

    return () => clearTimeout(timer);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    const tl = gsap.timeline();

    tl.to(".mobile-menu-item", {
      opacity: 0,
      x: -50,
      scale: 0.8,
      rotation: -10,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    });

    tl.to(
      ".mobile-menu-content",
      {
        opacity: 0,
        y: -100,
        scale: 0.9,
        rotation: -5,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.2"
    );

    tl.to(
      ".mobile-menu-overlay",
      {
        opacity: 0,
        scale: 0.8,
        filter: "blur(20px)",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setMobileMenuOpen(false),
      },
      "-=0.1"
    );
  };

  return (
    <>
      <header ref={headerRef} className="shadow-sm relative z-50 bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-600 hover:text-black focus:outline-none transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div className="hidden sm:flex items-center space-x-6 lg:space-x-8">
                <Link
                  href="/nous-contacter"
                  className="text-sm whitespace-nowrap transition-colors hover:opacity-70"
                  style={{ color: BRAND_TEXT }}
                >
                  Nous contacter
                </Link>

                {/* Menu VOS BESOINS */}
                <div
                  className="relative group"
                  onMouseEnter={() => setVosBesoinsOpen(true)}
                  onMouseLeave={() => {
                    setVosBesoinsOpen(false);
                    setActiveBesoin(null);
                  }}
                >
                  <button
                    className="flex items-center space-x-1 text-sm focus:outline-none transition-colors hover:opacity-70"
                    style={{ color: BRAND_TEXT }}
                  >
                    <span>Vos besoins</span>
                  </button>

                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg border transition-all duration-200 z-50 ${
                      vosBesoinsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{ borderColor: BRAND_BORDER }}
                    onMouseEnter={() => setVosBesoinsOpen(true)}
                    onMouseLeave={() => {
                      setVosBesoinsOpen(false);
                      setActiveBesoin(null);
                    }}
                  >
                    <div className="flex">
                      {/* Colonne gauche */}
                      <div className="w-80 bg-white py-4">
                        {vosBesoinsMenu.map((besoin) => (
                          <div
                            key={besoin.title}
                            className={`px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-gray-50 ${
                              activeBesoin === besoin.title ? "bg-gray-50 border-r-2" : ""
                            }`}
                            style={
                              activeBesoin === besoin.title
                                ? { borderRightColor: BRAND_ACCENT }
                                : undefined
                            }
                            onMouseEnter={() => setActiveBesoin(besoin.title)}
                          >
                            <span className="text-sm text-gray-700">{besoin.title}</span>
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>

                      {/* Colonne droite */}
                      {activeBesoin && (
                        <div
                          className="w-64 py-4 border-l"
                          style={{
                            backgroundColor: BRAND_PANEL,
                            borderLeftColor: BRAND_BORDER,
                          }}
                        >
                          <div className="px-4">
                            <h4
                              className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b"
                              style={{ borderBottomColor: "#D1D5DB" }}
                            >
                              {vosBesoinsMenu.find((b) => b.title === activeBesoin)?.title}
                            </h4>
                            <div className="space-y-2">
                              {vosBesoinsMenu
                                .find((b) => b.title === activeBesoin)
                                ?.submenu.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={item.href}
                                    className="block px-3 py-2 text-sm rounded transition-colors"
                                    style={{ color: BRAND_TEXT }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = BRAND_ACCENT;
                                      e.currentTarget.style.color = BRAND_BLACK;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = "transparent";
                                      e.currentTarget.style.color = BRAND_TEXT;
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1
                  className="font-gobold text-xl sm:text-2xl"
                  style={{ color: BRAND_BLACK }}
                >
                  LAHALEX
                </h1>
              </Link>
            </div>

            {/* Right */}
            <div className="hidden sm:flex items-center space-x-4 lg:space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-black focus:outline-none transition-colors"
                >
                  <span>Nos solutions</span>
                </button>

                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  style={{ borderColor: BRAND_BORDER }}
                >
                  <div className="py-2">
                    <Link
                      href="/lahalex-universel"
                      className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors"
                      style={{ color: BRAND_TEXT }}
                    >
                      Lahalex Universel
                    </Link>
                    <Link
                      href="/lahalex-avocat"
                      className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors"
                      style={{ color: BRAND_TEXT }}
                    >
                      Lahalex Avocat
                    </Link>
                    <Link
                      href="/lahalex-notaire"
                      className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors"
                      style={{ color: BRAND_TEXT }}
                    >
                      Lahalex Notaire
                    </Link>
                    <Link
                      href="/lahalex-commissaire-justice"
                      className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors"
                      style={{ color: BRAND_TEXT }}
                    >
                      Lahalex Commissaire de justice
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/paiement-abonnements"
                className="text-sm whitespace-nowrap transition-colors hover:opacity-70"
                style={{ color: BRAND_TEXT }}
              >
                Nos formules
              </Link>

              <Link
                href="/lahalex-connexion"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-black text-black hover:bg-black hover:text-white"
              >
                Connexion
              </Link>
            </div>

            {/* Placeholder mobile */}
            <div className="w-6 sm:hidden" />
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay fixed inset-0 z-[60] flex flex-col overflow-hidden"
          style={{ backgroundColor: BRAND_OVERLAY }}
        >
          <div className="mobile-menu-content flex flex-col h-full overflow-hidden">
            <div className="flex justify-end p-6 flex-shrink-0">
              <button
                onClick={closeMobileMenu}
                className="text-3xl font-light hover:opacity-70 transition-opacity hover:scale-110 transform transition-transform"
                aria-label="Fermer le menu"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col px-16 py-8 space-y-8 flex-1 overflow-y-auto scrollbar-hide">
              <a
                href="/"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                ACCUEIL
              </a>

              <a
                href="/qui-sommes-nous"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                QUI SOMMES - NOUS ?
              </a>

              <div className="relative mobile-menu-item">
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center text-2xl font-bold uppercase hover:opacity-70 transition-opacity font-gobold"
                  style={{ color: MOBILE_MENU_TEXT }}
                >
                  NOS SOLUTIONS
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileSolutionsOpen && (
                  <div className="mt-4 space-y-3">
                    <a
                      href="/lahalex-universel"
                      className="block text-lg hover:opacity-70 transition-opacity font-gobold"
                      style={{ color: MOBILE_MENU_SUBTEXT }}
                    >
                      Lahalex Universel
                    </a>
                    <a
                      href="/lahalex-avocat"
                      className="block text-lg hover:opacity-70 transition-opacity font-gobold"
                      style={{ color: MOBILE_MENU_SUBTEXT }}
                    >
                      Lahalex Avocat
                    </a>
                    <a
                      href="/lahalex-notaire"
                      className="block text-lg hover:opacity-70 transition-opacity font-gobold"
                      style={{ color: MOBILE_MENU_SUBTEXT }}
                    >
                      Lahalex Notaire
                    </a>
                    <a
                      href="/lahalex-commissaire-justice"
                      className="block text-lg hover:opacity-70 transition-opacity font-gobold"
                      style={{ color: MOBILE_MENU_SUBTEXT }}
                    >
                      Lahalex Commissaire de justice
                    </a>
                  </div>
                )}
              </div>

              <div className="relative mobile-menu-item">
                <button
                  onClick={() => setMobileVosBesoinsOpen(!mobileVosBesoinsOpen)}
                  className="flex items-center text-2xl font-bold uppercase hover:opacity-70 transition-opacity font-gobold"
                  style={{ color: MOBILE_MENU_TEXT }}
                >
                  VOS BESOINS
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileVosBesoinsOpen && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Recherche documentaire
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/recherche-juridique-universel"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Universel
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Veille juridique
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/veille-juridique-universel"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Universel
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Bibliothèque
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/bibliotheque-numerique-universel"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Universel
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Rédaction d'actes
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/redaction-actes-avocat"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Avocat
                        </a>
                        <a
                          href="/redaction-actes-notaire"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Notaire
                        </a>
                        <a
                          href="/redaction-actes-commissaire"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Commissaire de justice
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Gestion des clients/collaborateurs
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/gestion-cabinet-avocat"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Avocat
                        </a>
                        <a
                          href="/gestion-office-notaire"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Notaire
                        </a>
                        <a
                          href="/gestion-etude-commissaire"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Commissaire de justice
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Gestion de cabinet
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/gestion-cabinet-avocat"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Avocat
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Gestion de l'office
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/gestion-office-notaire"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Notaire
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Gestion de l'étude
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/gestion-etude-commissaire"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Lahalex Commissaire de justice
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-lg font-semibold mb-2" style={{ color: MOBILE_MENU_TEXT }}>
                        Solutions personnalisées
                      </div>
                      <div className="ml-4 space-y-1">
                        <a
                          href="/nous-contacter"
                          className="block text-base hover:opacity-70 transition-opacity"
                          style={{ color: MOBILE_MENU_SUBTEXT }}
                        >
                          Nous contacter
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/paiement-abonnements"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                NOS FORMULES
              </a>
              <a
                href="/recrutement"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                RECRUTEMENT
              </a>
              <a
                href="/devenir-auteur"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                DEVENIR AUTEUR
              </a>
              <a
                href="/essai-gratuit"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                ESSAI GRATUIT
              </a>
              <a
                href="/nous-contacter"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                NOUS CONTACTER
              </a>
              <a
                href="/lahalex-connexion"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                CONNEXION
              </a>
              <a
                href="/faq"
                className="mobile-menu-item text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
                style={{ color: MOBILE_MENU_TEXT }}
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        .mobile-menu-overlay {
          opacity: 0;
          transform: scale(0.8);
          filter: blur(20px);
        }

        .mobile-menu-content {
          opacity: 0;
          transform: translateY(-100px) scale(0.9) rotate(-5deg);
        }

        .mobile-menu-item {
          opacity: 0;
          transform: translateX(-50px) scale(0.8) rotate(-10deg);
        }

        .mobile-menu-item:hover {
          transform: scale(1.05) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-overlay button[aria-label="Fermer le menu"]:hover {
          transform: scale(1.1) rotate(90deg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-overlay {
          backdrop-filter: blur(10px);
          background: linear-gradient(135deg, ${BRAND_OVERLAY}, ${BRAND_OVERLAY_SECONDARY});
        }

        .mobile-menu-item .mt-4 {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .mobile-menu-item {
            padding: 12px 0;
            border-bottom: 1px solid ${MOBILE_MENU_BORDER};
          }

          .mobile-menu-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}