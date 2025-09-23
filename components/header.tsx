"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap"

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

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
      gsap.fromTo(".mobile-menu-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })
      gsap.fromTo(
        ".mobile-menu-content",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.1 },
      )
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    gsap.to(".mobile-menu-overlay", {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => setMobileMenuOpen(false),
    })
  }

  return (
    <>
      <header ref={headerRef} className="absolute top-0 left-0 right-0 z-30 w-full h-[79px] bg-transparent">
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
        <div className="hidden sm:block absolute left-0 top-0 w-[137px] h-[76px] bg-white rounded-br-[38px]" />

        {/* Right decorative element (desktop/tablette) */}
        <div className="hidden sm:block absolute right-0 top-0 w-[162px] h-[76px] bg-white rounded-bl-[38px]" />

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
          <Button
            variant="outline"
            className="border-2 border-black rounded-[10px] px-3 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors bg-transparent"
          >
            Connexion
          </Button>
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
                className="text-[#FAF5EF] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="essai-gratuit"
                className="text-[#FAF5EF] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors"
              >
                Essai gratuit
              </a>
            </nav>
            {/* Espace miroir de l'icône pour équilibrer */}
            <div className="w-[40px] md:w-[52px]" />
          </div>

          {/* Logo central */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[#770D28] text-[20px] md:text-[24px] lg:text-[30px] font-bold tracking-[0.07em] font-gobold">
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
                <button className="flex items-center gap-1 text-[#FAF5EF] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors focus:outline-none">
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
                className="text-[#FAF5EF] text-sm md:text-base lg:text-lg font-normal hover:text-[#770D28] transition-colors"
              >
                Nos formules
              </a>
            </div>
            <Button
              variant="outline"
              className="ml-2 md:ml-4 border-2 border-black rounded-[10px] px-2 md:px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-xs md:text-sm lg:text-base text-black hover:bg-black hover:text-white transition-colors bg-transparent"
            >
              Connexion
            </Button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay fixed inset-0 z-50 bg-[#770D28] flex flex-col">
          <div className="mobile-menu-content flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={closeMobileMenu}
                className="text-white text-3xl font-light hover:opacity-70 transition-opacity"
                aria-label="Fermer le menu"
              >
                ×
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex flex-col px-16 py-8 space-y-8 flex-1">
              <a
                href="#"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
              >
                ACCUEIL
              </a>
              <a
                href="/qui-sommes-nous"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
              >
                QUI SOMMES - NOUS ?
              </a>
              <div className="relative">
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
                >
                  NOS SOLUTIONS
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
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
              <a
                href="/paiement-abonnements"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
              >
                NOS TARIFS
              </a>
              <a
                href="/recrutement"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
              >
                RECRUTEMENT
              </a>
              <a
                href="/devenir-auteur"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
              >
                DEVENIR AUTEUR
              </a>
              <a
                href="/essai-gratuit"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold"
              >
                ESSAI GRATUIT
              </a>
              <a
                href="#"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold font-gobold"
              >
                CONNEXION
              </a>
              <a
                href="/faq"
                className="text-white text-2xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity font-gobold "
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
