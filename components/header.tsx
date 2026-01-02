"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap"

// Structure du menu VOS BESOINS avec routes spécifiques vers les sous-rubriques
const vosBesoinsMenu = [
  {
    title: "Recherche documentaire",
    submenu: [
      { title: "Lahalex Universel", href: "/recherche-juridique-universel" }
    ]
  },
  {
    title: "Veille journalière",
    submenu: [
      { title: "Lahalex Universel", href: "/veille-juridique-universel" }
    ]
  },
  {
    title: "Rencontres scientifiques",
    submenu: [
      { title: "Lahalex Universel", href: "/autres-outils-universel" }
    ]
  },
  {
    title: "Bibliothèque",
    submenu: [
      { title: "Lahalex Universel", href: "/bibliotheque-numerique-universel" }
    ]
  },
  {
    title: "Rédaction d'actes",
    submenu: [
      { title: "Lahalex Avocat", href: "/redaction-actes-avocat" },
      { title: "Lahalex Notaire", href: "/redaction-actes-notaire" },
      { title: "Lahalex Commissaire de justice", href: "/redaction-actes-commissaire" }
    ]
  },
  {
    title: "Gestion des clients/collaborateurs",
    submenu: [
      { title: "Lahalex Avocat", href: "/gestion-cabinet-avocat" },
      { title: "Lahalex Notaire", href: "/gestion-office-notaire" },
      { title: "Lahalex Commissaire de justice", href: "/gestion-etude-commissaire" }
    ]
  },
  {
    title: "Gestion de cabinet",
    submenu: [
      { title: "Lahalex Avocat", href: "/gestion-cabinet-avocat" }
    ]
  },
  {
    title: "Gestion de l'office",
    submenu: [
      { title: "Lahalex Notaire", href: "/gestion-office-notaire" }
    ]
  },
  {
    title: "Gestion de l'étude",
    submenu: [
      { title: "Lahalex Commissaire de justice", href: "/gestion-etude-commissaire" }
    ]
  },
  {
    title: "Solutions personnalisées",
    submenu: [
      { title: "Nous contacter", href: "/nous-contacter" }
    ]
  }
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileVosBesoinsOpen, setMobileVosBesoinsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [vosBesoinsOpen, setVosBesoinsOpen] = useState(false)
  const [activeBesoin, setActiveBesoin] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      // Délai pour s'assurer que les éléments sont dans le DOM
      const timer = setTimeout(() => {
        // Définir l'état initial des éléments
        gsap.set(".mobile-menu-overlay", {
          opacity: 0,
          scale: 0.8,
          filter: "blur(20px)"
        })

        gsap.set(".mobile-menu-content", {
          opacity: 0,
          y: -100,
          scale: 0.9,
          rotation: -5
        })

        gsap.set(".mobile-menu-item", {
          opacity: 0,
          x: -50,
          scale: 0.8,
          rotation: -10
        })

        // Animation spectaculaire d'entrée du menu mobile
        const tl = gsap.timeline()

        // Animation de l'overlay avec effet de scale et blur
        tl.to(".mobile-menu-overlay", {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out"
        })

        // Animation du contenu avec effet de glissement spectaculaire
        tl.to(
          ".mobile-menu-content",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.6)",
            delay: 0.2
          },
          "-=0.3"
        )

        // Animation des éléments de menu en cascade
        tl.to(
          ".mobile-menu-item",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
          },
          "-=0.4"
        )
      }, 10) // Petit délai pour s'assurer que le DOM est mis à jour

      return () => clearTimeout(timer)
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    // Animation spectaculaire de fermeture
    const tl = gsap.timeline()

    // Animation des éléments de menu en sortie
    tl.to(".mobile-menu-item", {
      opacity: 0,
      x: -50,
      scale: 0.8,
      rotation: -10,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    })

    // Animation du contenu
    tl.to(".mobile-menu-content", {
      opacity: 0,
      y: -100,
      scale: 0.9,
      rotation: -5,
      duration: 0.4,
      ease: "power2.in"
    }, "-=0.2")

    // Animation de l'overlay
    tl.to(".mobile-menu-overlay", {
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)",
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setMobileMenuOpen(false)
    }, "-=0.1")
  }

  return (
    <>
      <header ref={headerRef} className="absolute top-0 left-0 right-0 z-30 w-full h-[79px] bg-transparent border-transparent">
        {/* Bloc central (desktop/tablette) */}
        <div className="relative hidden sm:flex justify-center items-start">
          {/* Bloc central blanc */}
          <Image
            src="/images/Union.png"
            alt="Union shape"
            width={231}
            height={70}
            className="absolute top-0 left-1/2 -translate-x-1/2"
          />

          {/* Rectangle gauche */}
        </div>






        {/* Left decorative element (desktop/tablette) */}
        <Image
          src="/images/bg-header-transparent.png"
          alt="Border decoration"
          width={210}
          height={100}
          className="hidden sm:block absolute -left-1 -top-4"
        />

        {/* Right decorative element (desktop/tablette) */}
        <Image
          src="/images/bg-header-1-transparent.png"
          alt="Connexion background"
          width={210}
          height={100}
          className="hidden sm:block absolute right-0 -top-5"
        />

        {/* Navigation content */}
        {/* Mobile: icône gauche, logo centré, bouton connexion droit */}
        <div className="sm:hidden relative z-10 flex items-center justify-between px-4 h-full">
          {/* Icône menu */}
          <div className="flex items-center">
            <div className="w-[44px] h-[44px] bg-[#515560] rounded-full flex items-center justify-center">
              <button aria-label="Ouvrir le menu" onClick={() => setMobileMenuOpen(true)} className="w-5 h-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
          {/* Logo centré */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[#770D28] text-[22px] font-bold tracking-[0.07em] font-gobold">LAHALEX</h1>
          </div>
          {/* Bouton Connexion */}
          <a href="/lahalex-connexion">
            <Button
              variant="outline"
              className="border-2 border-black rounded-[10px] px-3 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors bg-transparent"
            >
              Connexion
            </Button>
          </a>
        </div>

        {/* Desktop/tablette: zones gauche/logo/droite */}
        <div className="hidden sm:flex relative z-10 items-center px-2 md:px-4 lg:px-8 h-full">
          {/* Zone gauche (1/2) */}
          <div className="hidden sm:flex items-center w-1/2">
            {/* Icône menu */}
            <div className="flex items-center">
              <div className="w-[40px] md:w-[52px] h-[40px] md:h-[52px] bg-[#515560] rounded-full flex items-center justify-center">
                <button aria-label="Ouvrir le menu" onClick={() => setMobileMenuOpen(true)} className="w-5 md:w-6 h-5 md:h-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Liens gauche centrés entre icône et logo */}
            <nav className="flex items-center gap-3 md:gap-6 mx-auto">
              <a
                href="nous-contacter"
                className="text-[#111111] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors"
              >
                Nous contacter
              </a>

              {/* Menu VOS BESOINS */}
              <div
                className="relative group"
                onMouseEnter={() => setVosBesoinsOpen(true)}
                onMouseLeave={() => {
                  setVosBesoinsOpen(false)
                  setActiveBesoin(null)
                }}
              >
                <button className="flex items-center gap-1 text-[#111111] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors focus:outline-none">
                  <span>Vos besoins</span>
                </button>

                {/* Menu VOS BESOINS - Structure à deux colonnes comme LexisNexis */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${vosBesoinsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  onMouseEnter={() => setVosBesoinsOpen(true)}
                  onMouseLeave={() => {
                    setVosBesoinsOpen(false)
                    setActiveBesoin(null)
                  }}
                >
                  <div className="flex">
                    {/* Colonne gauche - Liste des besoins */}
                    <div className="w-80 bg-white py-4">
                      {vosBesoinsMenu.map((besoin, index) => (
                        <div
                          key={besoin.title}
                          className={`px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-gray-50 ${activeBesoin === besoin.title ? 'bg-gray-50 border-r-2 border-[#770D28]' : ''}`}
                          onMouseEnter={() => setActiveBesoin(besoin.title)}
                        >
                          <span className="text-sm text-gray-700">
                            {besoin.title}
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      ))}
                    </div>

                    {/* Colonne droite - Sous-menu */}
                    {activeBesoin && (
                      <div className="w-64 bg-gray-50 py-4 border-l border-gray-200">
                        <div className="px-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300">
                            {vosBesoinsMenu.find(b => b.title === activeBesoin)?.title}
                          </h4>
                          <div className="space-y-2">
                            {vosBesoinsMenu.find(b => b.title === activeBesoin)?.submenu.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block px-3 py-2 text-sm text-[#770D28] hover:bg-[#770D28] hover:text-white rounded transition-colors"
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

            </nav>
            {/* Espace miroir de l'icône pour équilibrer */}
            <div className="w-[40px] md:w-[52px]" />
          </div>

          {/* Logo central */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-black text-[20px] md:text-[24px] lg:text-[30px] font-bold tracking-[0.07em] font-gobold">
              LAHALEX
            </h1>
          </div>

          {/* Zone droite (1/2) */}
          <div className="hidden sm:flex items-center w-1/2 justify-end">
            {/* Espace miroir côté logo pour équilibrer */}
            <div className="w-[40px] md:w-[52px]" />
            {/* Liens droite centrés entre logo et bouton */}
            <div className="flex items-center gap-3 md:gap-6 mx-auto">
              <div className="relative group">
                <button className="flex items-center gap-1 text-[#111111] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors focus:outline-none">
                  <span>Nos solutions</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 md:w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/lahalex-universel"
                      className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                    >
                      Lahalex Universel
                    </Link>
                    <Link
                      href="/lahalex-avocat"
                      className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                    >
                      Lahalex Avocat
                    </Link>
                    <Link
                      href="/lahalex-notaire"
                      className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                    >
                      Lahalex Notaire
                    </Link>
                    <Link
                      href="/lahalex-commissaire-justice"
                      className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                    >
                      Lahalex Commissaire de justice
                    </Link>
                  </div>
                </div>
              </div>

              <a
                href="paiement-abonnements"
                className="text-[#111111] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors"
              >
                Nos formules
              </a>
            </div>
            <a href="/lahalex-connexion">
              <Button
                variant="outline"
                className="ml-2 md:ml-4 border-2 border-black rounded-[10px] px-2 md:px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-xs md:text-sm lg:text-base text-black hover:bg-black hover:text-white transition-colors bg-transparent"
              >
                Connexion
              </Button>
            </a>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay fixed inset-0 z-50 bg-[#770D28] flex flex-col overflow-hidden">
          <div className="mobile-menu-content flex flex-col h-full overflow-hidden">
            {/* Close button */}
            <div className="flex justify-end p-6 flex-shrink-0">
              <button
                onClick={closeMobileMenu}
                className="text-white text-3xl font-light hover:opacity-70 transition-opacity hover:scale-110 transform transition-transform"
                aria-label="Fermer le menu"
              >
                ×
              </button>
            </div>

            {/* Menu items - Scrollable */}
            <nav className="flex flex-col px-16 py-8 space-y-8 flex-1 overflow-y-auto scrollbar-hide">
              <a
                href="#"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                ACCUEIL
              </a>
              <a
                href="/qui-sommes-nous"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                QUI SOMMES - NOUS ?
              </a>
              <div className="relative mobile-menu-item">
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center text-white text-2xl font-bold uppercase hover:opacity-70 transition-opacity font-gobold"
                >
                  NOS SOLUTIONS
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSolutionsOpen && (
                  <div className="mt-4 ml-4 space-y-4">
                    <a href="/lahalex-universel" className="block text-white text-lg hover:opacity-70 transition-opacity font-gobold">
                      Lahalex Universel
                    </a>
                    <a href="/lahalex-avocat" className="block text-white text-lg hover:opacity-70 transition-opacity font-gobold">
                      Lahalex Avocat
                    </a>
                    <a href="/lahalex-notaire" className="block text-white text-lg hover:opacity-70 transition-opacity font-gobold">
                      Lahalex Notaire
                    </a>
                    <a href="/lahalex-commissaire-justice" className="block text-white text-lg hover:opacity-70 transition-opacity font-gobold">
                      Lahalex Commissaire de justice
                    </a>
                  </div>
                )}
              </div>
              <div className="relative mobile-menu-item">
                <button
                  onClick={() => setMobileVosBesoinsOpen(!mobileVosBesoinsOpen)}
                  className="flex items-center text-white text-2xl font-bold uppercase hover:opacity-70 transition-opacity font-gobold"
                >
                  VOS BESOINS
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileVosBesoinsOpen && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Recherche documentaire</div>
                      <div className="ml-4 space-y-1">
                        <a href="/recherche-juridique-universel" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Universel
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Veille journalière</div>
                      <div className="ml-4 space-y-1">
                        <a href="/veille-juridique-universel" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Universel
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Bibliothèque</div>
                      <div className="ml-4 space-y-1">
                        <a href="/bibliotheque-numerique-universel" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Universel
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Rédaction d'actes</div>
                      <div className="ml-4 space-y-1">
                        <a href="/redaction-actes-avocat" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Avocat
                        </a>
                        <a href="/redaction-actes-notaire" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Notaire
                        </a>
                        <a href="/redaction-actes-commissaire" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Commissaire de justice
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Gestion des clients/collaborateurs</div>
                      <div className="ml-4 space-y-1">
                        <a href="/gestion-cabinet-avocat" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Avocat
                        </a>
                        <a href="/gestion-office-notaire" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Notaire
                        </a>
                        <a href="/gestion-etude-commissaire" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Commissaire de justice
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Gestion de cabinet</div>
                      <div className="ml-4 space-y-1">
                        <a href="/gestion-cabinet-avocat" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Avocat
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Gestion de l'office</div>
                      <div className="ml-4 space-y-1">
                        <a href="/gestion-office-notaire" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Notaire
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Gestion de l'étude</div>
                      <div className="ml-4 space-y-1">
                        <a href="/gestion-etude-commissaire" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Lahalex Commissaire de justice
                        </a>
                      </div>
                    </div>

                    <div>
                      <div className="text-white text-lg font-semibold mb-2">Solutions personnalisées</div>
                      <div className="ml-4 space-y-1">
                        <a href="/nous-contacter" className="block text-white text-base hover:opacity-70 transition-opacity">
                          Nous contacter
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="/paiement-abonnements"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                NOS FORMULES
              </a>
              <a
                href="/recrutement"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                RECRUTEMENT
              </a>
              <a
                href="/devenir-auteur"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                DEVENIR AUTEUR
              </a>
              <a
                href="/essai-gratuit"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                ESSAI GRATUIT
              </a>
              <a
                href="/nous-contacter"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                NOUS CONTACTER
              </a>
              <a
                href="/lahalex-connexion"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                CONNEXION
              </a>
              <a
                href="/faq"
                className="mobile-menu-item text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold hover:scale-105 transform transition-transform"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Styles pour le menu mobile avec scroll */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }

        /* Amélioration du scroll sur mobile */
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* Animation des éléments de menu - État initial */
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

        /* Effets de hover améliorés */
        .mobile-menu-item:hover {
          transform: scale(1.05) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Animation du bouton de fermeture */
        .mobile-menu-overlay button[aria-label="Fermer le menu"]:hover {
          transform: scale(1.1) rotate(90deg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Effet de glassmorphism pour l'overlay */
        .mobile-menu-overlay {
          backdrop-filter: blur(10px);
          background: linear-gradient(135deg, rgba(119, 13, 40, 0.95), rgba(119, 13, 40, 0.9));
        }

        /* Animation des sous-menus */
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

        /* Amélioration de la lisibilité sur mobile */
        @media (max-width: 640px) {
          .mobile-menu-item {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .mobile-menu-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  )
}
