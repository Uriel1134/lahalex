
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

// Structure du menu VOS BESOINS avec routes spécifiques vers les sous-rubriques
const vosBesoinsMenu = [
  {
    title: "Recherche documentaire",
    submenu: [
      { title: "Lahalex Universel", href: "/recherche-juridique-universel" }
    ]
  },
  {
    title: "Veille juridique", 
    submenu: [
      { title: "Lahalex Universel", href: "/veille-juridique-universel" }
    ]
  },
  {
    title: "Rencontres juridiques",
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
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [vosBesoinsOpen, setVosBesoinsOpen] = useState(false);
  const [activeBesoin, setActiveBesoin] = useState<string | null>(null);

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
    <header ref={headerRef} className="shadow-sm relative z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: hamburger + links */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Links (desktop only) */}
            <div className="hidden sm:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="/nous-contacter"
                className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                Nous contacter
              </Link>
              
              {/* Menu VOS BESOINS */}
              <div 
                className="relative group"
                onMouseEnter={() => setVosBesoinsOpen(true)}
                onMouseLeave={() => {
                  setVosBesoinsOpen(false)
                  setActiveBesoin(null)
                }}
              >
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
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
              
              <Link
                href="/essai-gratuit"
                className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap"
              >
                Essai gratuit
              </Link>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="font-gobold text-xl sm:text-2xl text-[#770D28]">
                LAHALEX
              </h1>
            </Link>
          </div>

          {/* Right: links */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-8">
            {/* Dropdown desktop */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
                <span>Nos solutions</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/lahalex-universel"
                    className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                  >
                    Lahalex Universel
                  </Link>
                  <Link
                    href="/lahalex-avocat"
                    className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                  >
                    Lahalex Avocat
                  </Link>
                  <Link
                    href="/lahalex-notaire"
                    className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                  >
                    Lahalex Notaire
                  </Link>
                  <Link
                    href="/lahalex-commissaire-justice"
                    className="block px-4 py-3 text-sm font-gobold uppercase hover:bg-gray-50 transition-colors text-[#770D28]"
                  >
                    Lahalex Commissaire de justice
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/paiement-abonnements"
              className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap"
            >
              Nos formules
            </Link>

            <Link
              href="/lahalex-connexion"
              className="text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors border hover:bg-[#5a0a1f]"
            >
              Connexion
            </Link>
          </div>

          {/* Placeholder (for spacing mobile) */}
          <div className="w-6 sm:hidden"></div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay fixed inset-0 z-40 bg-[#770D28] flex flex-col h-full justify-center items-start pl-8 sm:pl-16 space-y-6 sm:space-y-8 overflow-y-auto">
          <div className="mobile-menu-content flex flex-col h-full overflow-hidden">
            <button
              onClick={closeMobileMenu}
              className="absolute top-6 sm:top-8 right-6 sm:right-8 text-white text-3xl sm:text-4xl font-gobold"
            >
              <X />
            </button>

            <Link
              href="/"
              className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
            >
              ACCUEIL
            </Link>
            <Link
              href="/qui-sommes-nous"
              className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
            >
              QUI SOMMES-NOUS ?
            </Link>

          {/* Nos solutions mobile */}
          <div className="w-full mobile-menu-item">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl flex items-center"
            >
              <span>NOS SOLUTIONS</span>
              <ChevronDown className="w-6 h-6 ml-2" />
            </button>
            {mobileSolutionsOpen && (
              <div className="mt-4 ml-4 space-y-3">
                <Link
                  href="/lahalex-universel"
                  className="block font-gobold text-white text-xl sm:text-2xl lg:text-3xl"
                >
                  LAHALEX UNIVERSEL
                </Link>
                <Link
                  href="/lahalex-avocat"
                  className="block font-gobold text-white text-xl sm:text-2xl lg:text-3xl"
                >
                  LAHALEX AVOCAT
                </Link>
                <Link
                  href="/lahalex-notaire"
                  className="block font-gobold text-white text-xl sm:text-2xl lg:text-3xl"
                >
                  LAHALEX NOTAIRE
                </Link>
                <Link
                  href="/lahalex-commissaire-justice"
                  className="block font-gobold text-white text-xl sm:text-2xl lg:text-3xl"
                >
                  LAHALEX COMMISSAIRE DE JUSTICE
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/paiement-abonnements"
            className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            NOS formules
          </Link>
          <Link
            href="/recrutement"
            className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            RECRUTEMENT
          </Link>
          <Link
            href="/devenir-auteur"
            className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            DEVENIR AUTEUR
          </Link>
          <Link
            href="/essai-gratuit"
            className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            ESSAI GRATUIT
          </Link>
          <Link
            href="/lahalex-connexion"
            className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            CONNEXION
          </Link>
          <Link
            href="/faq"
            className="mobile-menu-item font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            FAQ
          </Link>
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
    </header>
  );
}
