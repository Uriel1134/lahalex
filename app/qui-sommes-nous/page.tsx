"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function QuiSommesNous() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)

  return (
    <div className="bg-[#FAF5EF]">
      {/* ✅ HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Menu icon */}
          <button onClick={() => setMobileMenuOpen(true)}>
            <svg width="30" height="30" viewBox="0 0 24 24" stroke="black">
              <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo */}
          <h1 className="font-gobold text-[#770D28] text-2xl">LAHALEX</h1>

          {/* Right */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#solutions" className="hover:text-[#770D28]">Nos solutions</a>
            <a href="#tarifs" className="hover:text-[#770D28]">Nos tarifs</a>
            <Button variant="outline" className="rounded-lg border px-4 py-2">
              Connexion
            </Button>
          </div>
        </div>
      </header>

      {/* ✅ MENU MOBILE SCROLLABLE */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#770D28] overflow-y-auto">
          <div className="flex flex-col min-h-screen px-8 py-12 space-y-6">
            {/* Close */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ×
            </button>

            <a href="#" className="text-white font-gobold text-3xl">ACCUEIL</a>
            <a href="#" className="text-white font-gobold text-3xl">QUI SOMMES-NOUS ?</a>

            {/* Solutions */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center text-white font-gobold text-3xl"
              >
                Nos solutions
                <svg
                  className={`w-6 h-6 ml-2 transform transition-transform ${
                    mobileSolutionsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {mobileSolutionsOpen && (
                <div className="ml-4 mt-2 space-y-3">
                  <a href="#universel" className="block text-white text-xl">Lahalex Universel</a>
                  <a href="#avocat" className="block text-white text-xl">Lahalex Avocat</a>
                  <a href="#notaire" className="block text-white text-xl">Lahalex Notaire</a>
                  <a href="#commissaire" className="block text-white text-xl">Lahalex Commissaire</a>
                </div>
              )}
            </div>

            <a href="#tarifs" className="text-white font-gobold text-3xl">NOS TARIFS</a>
            <a href="#recrutement" className="text-white font-gobold text-3xl">RECRUTEMENT</a>
            <a href="#auteur" className="text-white font-gobold text-3xl">DEVENIR AUTEUR</a>
            <a href="#essai" className="text-white font-gobold text-3xl">ESSAI GRATUIT</a>
            <a href="#connexion" className="text-white font-gobold text-3xl">CONNEXION</a>
            <a href="#faq" className="text-white font-gobold text-3xl">FAQ</a>
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* ✅ HERO */}
        <section className="relative w-full h-[529px] mx-auto max-w-[1320px] rounded-2xl overflow-hidden">
          <Image
            src="/20360 1.png"
            alt="Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#770D28]/90" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="font-gobold text-5xl md:text-6xl mb-6">QUI SOMMES-NOUS ?</h2>
            <p className="max-w-3xl text-lg md:text-2xl">
              Lahalex est une solution juridique innovante qui met à disposition des professionnels du droit
              des outils fiables et pratiques pour accéder, analyser et gérer efficacement l’information juridique
            </p>
          </div>
        </section>

        {/* ✅ VISION ET MISSION */}
        <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#770D28] text-4xl font-semibold mb-6">Vision et mission</h3>
            <p className="text-lg leading-8 text-[#293240]">
              Chez LAHALEX, notre mission est de démocratiser l’accès au droit africain à travers des solutions numériques fiables,
              intuitives et abordables. <br /><br />
              <span className="font-semibold">Notre vision :</span> devenir la référence panafricaine de la LegalTech,
              en connectant les praticiens du droit, les institutions et les citoyens grâce à l’innovation.
              <br /><br />
              <span className="font-semibold">Qu’est-ce que la LegalTech ?</span>  
              La LegalTech désigne l’utilisation des technologies pour concevoir, proposer et fournir
              des services et produits liés au droit et à la justice. Elle permet à tous, professionnels
              comme non-professionnels, d’accéder plus facilement à l’information juridique et de simplifier leurs démarches.
            </p>
          </div>
          <Image
            src="/Qui sommes-nous.png"
            alt="Qui sommes-nous"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </section>

        {/* ✅ VALEURS FONDATRICES */}
        <section
          className="relative py-24 px-6 max-w-7xl mx-auto rounded-2xl"
          style={{ backgroundImage: "url('/Rectangle 158.png')", backgroundSize: "cover" }}
        >
          <h3 className="text-[#770D28] text-4xl text-center mb-16">Valeurs fondatrices</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-[#770D28]">Accessibilité</h4>
              <p className="text-lg">Un droit compréhensible et disponible pour tous.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#770D28]">Innovation</h4>
              <p className="text-lg">Intégrer l’IA et les nouvelles technologies au service de la justice.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#770D28]">Fiabilité</h4>
              <p className="text-lg">Des contenus validés par des experts.</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#770D28]">Engagement</h4>
              <p className="text-lg">Soutenir la formation et l’excellence académique en Afrique.</p>
            </div>
          </div>
        </section>

        {/* ✅ IMPACT SOCIAL */}
        <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/impact.png"
            alt="Impact"
            width={600}
            height={400}
            className="rounded-xl"
          />
          <div>
            <h3 className="text-[#770D28] text-4xl font-semibold mb-6">Impact social et éducatif</h3>
            <p className="text-lg leading-8 text-[#293240]">
              Nous croyons que l’accès au savoir juridique contribue à renforcer l’État de droit et la démocratie.
              À travers des partenariats avec universités, barreaux et institutions, LAHALEX soutient la formation
              continue des professionnels et l’insertion des étudiants dans le monde du travail.
            </p>
          </div>
        </section>

        {/* ✅ DIMENSION PANAFRICAINE */}
        <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-[#770D28] text-4xl font-semibold mb-6">Dimension panafricaine et internationale</h3>
            <p className="text-lg leading-8 text-[#293240]">
              Présente dans plusieurs pays d’Afrique francophone et ouverte sur le monde,
              LAHALEX s’impose comme un pont entre les réalités locales et les standards internationaux.
            </p>
          </div>
          <Image
            src="/WhatsApp Image 2025-09-15 à 16.37.16_b964ec96 1.png"
            alt="Afrique"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </section>

        {/* ✅ CITATION */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <Image
            src="/Citation.png"
            alt="Citation"
            width={600}
            height={400}
            className="rounded-xl"
          />
          <div className="bg-[#770D28] rounded-2xl p-12 text-center text-white">
            <p className="italic text-xl md:text-2xl mb-6">
              « Grâce à l’intelligence artificielle, au big data et à des plateformes interactives, nous offrons aux praticiens
              des outils d’aide à la décision et de gestion de dossiers adaptés aux spécificités du droit OHADA et des droits nationaux africains. »
            </p>
            <p className="font-bold text-xl">L.Laleye – DG LAHALEX</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
