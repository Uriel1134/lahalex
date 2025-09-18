// app/qui-sommes-nous/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function QuiSommesNous() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative w-full bg-[#FAF5EF] overflow-x-hidden">
      {/* ---------------- NAVBAR ---------------- */}
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative w-full mt-20">
        <div className="relative w-[90%] max-w-[1320px] h-[529px] mx-auto">
          <Image
            src="/images/business-meeting.png"
            alt="Hero"
            fill
            className="rounded-2xl object-cover"
          />
          <div className="absolute inset-0 bg-[#770D28]/88 rounded-2xl"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white font-gobold text-4xl md:text-6xl mb-6">
              QUI SOMMES-NOUS ?
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-3xl leading-relaxed">
              Lahalex est une solution juridique innovante qui met à disposition
              des professionnels du droit des outils fiables et pratiques pour
              accéder, analyser et gérer efficacement l’information juridique
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- VISION & MISSION ---------------- */}
      <section className="relative w-[90%] max-w-[1320px] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[#770D28] text-3xl md:text-4xl font-semibold mb-6">
            Vision et mission
          </h2>
          <p className="text-[#293240] text-lg leading-8 mb-4">
            Chez <strong>LAHALEX</strong>, <strong>notre mission</strong> est de
            démocratiser l’accès au droit africain à travers des solutions
            numériques fiables, intuitives et abordables.
          </p>
          <p className="text-[#293240] text-lg leading-8 mb-4">
            <strong>Notre vision :</strong> devenir la référence panafricaine de
            la LegalTech, en connectant les praticiens du droit, les
            institutions et les citoyens grâce à l’innovation.
          </p>
          <p className="text-[#293240] text-lg leading-8">
            <strong>Qu’est-ce que la LegalTech ?</strong> La LegalTech désigne
            l’utilisation des technologies pour concevoir, proposer et fournir
            des services et produits liés au droit et à la justice. Elle permet
            à tous professionnels comme non-professionnels d’accéder plus
            facilement à l’information juridique et de simplifier leurs
            démarches.
          </p>
        </div>
        <Image
          src="/images/qui-sommes-nous.png"
          alt="Réunion"
          width={650}
          height={450}
          className="rounded-xl object-cover"
        />
      </section>

      {/* ---------------- VALEURS ---------------- */}
      <section className="relative w-[90%] max-w-[1320px] mx-auto py-16">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Image de fond */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20158%201-nuRhQvkcJFv6OjgIC2Twd26VILQypO.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />

          {/* Overlay gris (semi-transparent) */}
          <div className="absolute inset-0 bg-[rgba(47,47,47,0.15)] rounded-2xl"></div>

          {/* Contenu */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Titre */}
            <h2 className="text-[#770D28] text-3xl md:text-4xl font-semibold text-center mb-12">
              Valeurs <span className="font-normal">fondatrices</span>
            </h2>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Accessibilité */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/password-icon.png"
                  alt="Accessibilité"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-[#770D28] text-2xl font-bold mb-2">
                    Accessibilité
                  </h3>
                  <p className="text-gray-800 text-base md:text-lg">
                    Un droit compréhensible et disponible pour tous.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/innovation-icon.png"
                  alt="Innovation"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-[#770D28] text-2xl font-bold mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-800 text-base md:text-lg">
                    Intégrer l’IA et les nouvelles technologies au service de la
                    justice.
                  </p>
                </div>
              </div>

              {/* Fiabilité */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/fiabilite-icon.png"
                  alt="Fiabilité"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-[#770D28] text-2xl font-bold mb-2">
                    Fiabilité
                  </h3>
                  <p className="text-gray-800 text-base md:text-lg">
                    Des contenus validés par des experts.
                  </p>
                </div>
              </div>

              {/* Engagement */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/engagement-icon.png"
                  alt="Engagement"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="text-[#770D28] text-2xl font-bold mb-2">
                    Engagement
                  </h3>
                  <p className="text-gray-800 text-base md:text-lg">
                    Soutenir la formation et l’excellence académique en Afrique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- IMPACT ---------------- */}
<section className="relative w-[90%] max-w-[1320px] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
  {/* Bloc image avec décor */}
  <div className="relative">
    {/* Bloc olive derrière */}
    <div className="absolute -bottom-10 -left-8 w-[315px] h-[235px] bg-[#B4AB6B] rounded-lg z-0"></div>

    {/* Image principale */}
    <Image
      src="/images/impact.png"
      alt="Bibliothèque"
      width={583}
      height={468}
      className="relative rounded-xl object-cover z-10"
    />

    {/* Doodle décoratif */}
    <Image
      src="/images/leaf-decoration.png"
      alt=""
      width={135}
      height={151}
      className="absolute -top-12 -right-10 rotate-[87deg] z-0"
    />
  </div>

  {/* Texte */}
  <div>
    <h2 className="text-[#770D28] text-3xl md:text-4xl font-semibold mb-6">
      Impact social et éducatif
    </h2>
    <p className="text-[#293240] text-lg leading-8 max-w-[538px]">
      Nous croyons que l’accès au savoir juridique contribue à renforcer l’État
      de droit et la démocratie. À travers des partenariats avec universités,
      barreaux et institutions, LAHALEX soutient la formation continue des
      professionnels et l’insertion des étudiants dans le monde du travail.
    </p>
  </div>
</section>


      {/* ---------------- DIMENSION ---------------- */}
      <section className="relative w-[90%] max-w-[1320px] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[#770D28] text-3xl md:text-4xl font-semibold mb-6">
            Dimension panafricaine et internationale
          </h2>
          <p className="text-[#293240] text-lg leading-8">
            Présente dans plusieurs pays d’Afrique francophone et ouverte sur le
            monde, LAHALEX s’impose comme un pont entre les réalités locales et
            les standards internationaux.
          </p>
        </div>
        <Image
          src="/images/earth-africa.png"
          alt="Carte Afrique"
          width={662}
          height={455}
          className="rounded-xl object-cover"
        />
      </section>

      {/* ---------------- CITATION ---------------- */}
      <section className="relative w-[90%] max-w-[1324px] mx-auto py-20">
        <div className="relative bg-[#770D28] rounded-2xl p-12 text-center text-white">
          <p className="italic text-xl md:text-2xl leading-relaxed mb-6">
            « Grâce à l’intelligence artificielle, au big data et à des
            plateformes interactives, nous offrons aux praticiens des outils
            d’aide à la décision et de gestion de dossiers adaptés aux
            spécificités du droit OHADA et des droits nationaux africains. »
          </p>
          <p className="font-bold text-xl">L.Laleye - DG LAHALEX</p>
          <Image
            src="/images/Group-10818.png"
            alt="Motif"
            fill
            className="absolute inset-0 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}

      <Footer />
    </main>
  );
}
