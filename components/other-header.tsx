
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="shadow-sm relative z-50 bg-white">
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
              href="/connexion"
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
        <div className="fixed inset-0 z-40 bg-[#770D28] flex flex-col h-full justify-center items-start pl-8 sm:pl-16 space-y-6 sm:space-y-8 overflow-y-auto">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 sm:top-8 right-6 sm:right-8 text-white text-3xl sm:text-4xl font-gobold"
          >
            <X />
          </button>

          <Link
            href="/"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            ACCUEIL
          </Link>
          <Link
            href="/qui-sommes-nous"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            QUI SOMMES-NOUS ?
          </Link>

          {/* Nos solutions mobile */}
          <div className="w-full">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl flex items-center"
            >
              <span>NOS SOLUTIONS</span>
              <ChevronDown
                className={`w-6 h-6 ml-2 transition-transform ${
                  mobileSolutionsOpen ? "rotate-180" : ""
                }`}
              />
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
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            NOS formules
          </Link>
          <Link
            href="/recrutement"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            RECRUTEMENT
          </Link>
          <Link
            href="/devenir-auteur"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            DEVENIR AUTEUR
          </Link>
          <Link
            href="/essai-gratuit"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            ESSAI GRATUIT
          </Link>
          <Link
            href="/connexion"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            CONNEXION
          </Link>
          <Link
            href="/faq"
            className="font-gobold text-white text-2xl sm:text-3xl lg:text-4xl"
          >
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
}
