// app/qui-sommes-nous/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function QuiSommesNous() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs pour les animations
  const heroRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);
  const dimensionRef = useRef<HTMLElement>(null);
  const citationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animation du hero
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des titres du hero
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la section Vision & Mission
      gsap.fromTo(
        visionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des éléments de la section Vision
      gsap.fromTo(
        ".vision-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".vision-image",
        { opacity: 0, x: 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des images principales avec effet de zoom
      gsap.fromTo(
        ".main-image",
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".main-image",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la section Valeurs
      gsap.fromTo(
        valuesRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation en cascade des cartes de valeurs
      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation spécifique des icônes de valeurs
      gsap.fromTo(
        ".value-icon",
        {
          opacity: 0,
          scale: 0.3,
          rotation: -180,
          transformOrigin: "center center"
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
          stagger: 0.3,
          delay: 0.4,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des titres de valeurs
      gsap.fromTo(
        ".value-title",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.8,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des descriptions de valeurs
      gsap.fromTo(
        ".value-description",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          delay: 1.0,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la section Impact
      gsap.fromTo(
        impactRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: impactRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des éléments décoratifs
      gsap.fromTo(
        ".decorative-element",
        { opacity: 0, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: impactRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation spéciale pour les icônes de feuilles décoratives
      gsap.fromTo(
        ".leaf-decoration",
        {
          opacity: 0,
          scale: 0.5,
          rotation: -45,
          transformOrigin: "center center"
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 87,
          duration: 1.5,
          ease: "elastic.out(1, 0.4)",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".leaf-decoration",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la section Dimension
      gsap.fromTo(
        dimensionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dimensionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la citation
      gsap.fromTo(
        citationRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: citationRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation du texte de citation
      gsap.fromTo(
        ".citation-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: citationRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".citation-author",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: citationRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, [heroRef, visionRef, valuesRef, impactRef, dimensionRef, citationRef]);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full bg-white overflow-x-hidden">
      {/* ---------------- NAVBAR ---------------- */}
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section ref={heroRef} className="relative w-full mt-20">
        <div className="relative w-[90%] max-w-[1320px] h-[529px] mx-auto">
          <Image
            src="/images/business-meeting.png"
            alt="Hero"
            fill
            className="rounded-2xl object-cover"
          />
          <div className="absolute inset-0 bg-[#C8A96B]/85 rounded-2xl"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="hero-title text-gray-800 font-gobold text-4xl md:text-6xl mb-6">
              QUI SOMMES-NOUS ?
            </h1>
            <p className="hero-subtitle text-white text-lg md:text-2xl max-w-3xl leading-relaxed">
              Experts dans la conception et l’édition de bases de données documentaires
              et de logiciels métiers pluridisciplinaires, dédiés aux professionnels,
              aux institutions et aux acteurs de la recherche.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- VISION & MISSION ---------------- */}
      <section
        ref={visionRef}
        className="relative w-[90%] max-w-[1320px] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="vision-content">
          <h2 className="text-[#C8A96B] text-3xl md:text-4xl font-semibold mb-6">
            Vision et mission
          </h2>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Chez <strong>LAHALEX</strong>, <strong>notre mission</strong> est de structurer, sécuriser et valoriser
            l’information afin de la transformer en un véritable levier de performance, de décision et d’innovation.
            Nous développons des solutions numériques fiables, intuitives et évolutives, conçues pour répondre aux
            exigences des environnements professionnels et académiques.
          </p>
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Nos expertises s’inscrivent particulièrement dans les domaines du droit,
            de la médecine et des sciences économiques, où l’accès à une information rigoureuse, actualisée et
            exploitable est essentiel. À travers nos bases de données spécialisées et nos logiciels métiers,
            nous accompagnons les praticiens, chercheurs, enseignants, étudiants et décideurs dans leurs
            activités quotidiennes.
          </p>
          <p className="text-gray-700 text-lg leading-8">
            À l’intersection du savoir, de la technologie et des usages métiers, nous plaçons l’expertise documentaire, la qualité scientifique et l’innovation numérique au cœur de chacune de nos solutions.
          </p>
        </div>
        <Image
          src="/images/qui-sommes-nous.png"
          alt="Réunion"
          width={650}
          height={450}
          className="vision-image rounded-xl object-cover"
        />
      </section>

      {/* ---------------- VALEURS ---------------- */}
      <section ref={valuesRef} className="relative w-[90%] max-w-[1320px] mx-auto py-16">
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
            <h2 className="text-[#C8A96B] text-3xl md:text-4xl font-semibold text-center mb-12">
              Valeurs <span className="font-normal text-gray-700">fondatrices</span>
            </h2>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Accessibilité */}
              <div className="value-card flex items-start gap-6">
                <Image
                  src="/images/password-icon.png"
                  alt="Accessibilité"
                  width={80}
                  height={80}
                  className="value-icon w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="value-title text-[#C8A96B] text-2xl font-bold mb-2">
                    Accessibilité
                  </h3>
                  <p className="value-description text-gray-700 text-base md:text-lg">
                    Un savoir compréhensible et disponible pour tous.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="value-card flex items-start gap-6">
                <Image
                  src="/images/innovation-icon.png"
                  alt="Innovation"
                  width={80}
                  height={80}
                  className="value-icon w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="value-title text-[#C8A96B] text-2xl font-bold mb-2">
                    Innovation
                  </h3>
                  <p className="value-description text-gray-700 text-base md:text-lg">
                    Intégrer l'IA et les nouvelles technologies au service de la
                    justice.
                  </p>
                </div>
              </div>

              {/* Fiabilité */}
              <div className="value-card flex items-start gap-6">
                <Image
                  src="/images/fiabilite-icon.png"
                  alt="Fiabilité"
                  width={80}
                  height={80}
                  className="value-icon w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="value-title text-[#C8A96B] text-2xl font-bold mb-2">
                    Fiabilité
                  </h3>
                  <p className="value-description text-gray-700 text-base md:text-lg">
                    Des contenus validés par des experts.
                  </p>
                </div>
              </div>

              {/* Engagement */}
              <div className="value-card flex items-start gap-6">
                <Image
                  src="/images/engagement-icon.png"
                  alt="Engagement"
                  width={80}
                  height={80}
                  className="value-icon w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="value-title text-[#C8A96B] text-2xl font-bold mb-2">
                    Engagement
                  </h3>
                  <p className="value-description text-gray-700 text-base md:text-lg">
                    Soutenir la formation et l'excellence académique en Afrique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- IMPACT ---------------- */}
      <section
        ref={impactRef}
        className="relative w-[90%] max-w-[1320px] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Bloc image avec décor */}
        <div className="relative">
          {/* Bloc doré derrière */}
          <div className="decorative-element absolute -bottom-10 -left-8 w-[315px] h-[235px] bg-[#C8A96B] rounded-lg z-0"></div>

          {/* Image principale */}
          <Image
            src="/images/impact.png"
            alt="Bibliothèque"
            width={583}
            height={468}
            className="main-image relative rounded-xl object-cover z-10"
          />

          {/* Doodle décoratif */}
          <Image
            src="/images/leaf-decoration.png"
            alt=""
            width={135}
            height={151}
            className="leaf-decoration decorative-element absolute -top-25 -right-155 rotate-[87deg] z-0 hidden sm:block"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-[#C8A96B] text-3xl md:text-4xl font-semibold mb-6">
            Impact social et éducatif
          </h2>
          <p className="text-gray-700 text-lg leading-8 max-w-[538px]">
            Nous croyons que l'accès au savoir contribue à renforcer
            l'État de droit et la démocratie. À travers des partenariats avec
            universités, barreaux et institutions, LAHALEX soutient la formation
            continue des professionnels et l'insertion des étudiants dans le
            monde du travail.
          </p>
        </div>
      </section>

      {/* ---------------- DIMENSION ---------------- */}
      <section
        ref={dimensionRef}
        className="relative w-[90%] max-w-[1320px] mx-auto py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative">
          <h2 className="text-[#C8A96B] text-3xl md:text-4xl font-semibold mb-6">
            Dimension panafricaine et internationale
          </h2>
          <p className="text-gray-700 text-lg leading-8">
            Présente dans plusieurs pays d'Afrique francophone et ouverte sur le
            monde, LAHALEX s'impose comme un pont entre les réalités locales et
            les standards internationaux.
          </p>
          {/* Doodle décoratif */}
          <Image
            src="/images/leaf-decoration.png"
            alt=""
            width={135}
            height={151}
            className="leaf-decoration decorative-element absolute top-50 -left-10 rotate-[87deg] z-0 hidden sm:block"
          />
        </div>

        <div className="relative">
          {/* Bloc doré derrière */}
          <div className="decorative-element absolute -bottom-10 -right-8 w-[315px] h-[235px] bg-[#C8A96B] rounded-lg z-0"></div>

          {/* Image au-dessus */}
          <Image
            src="/images/earth-africa.png"
            alt="Carte Afrique"
            width={662}
            height={455}
            className="main-image rounded-xl object-cover relative z-10"
          />
        </div>
      </section>

      {/* ---------------- CITATION ---------------- */}
      <section ref={citationRef} className="relative w-[90%] max-w-[1324px] mx-auto py-20">
        {/* <div className="relative bg-[#C8A96B] rounded-2xl p-12 text-center text-gray-800">
          <p className="citation-text italic text-xl md:text-2xl leading-relaxed mb-6">
            « Grâce à l'intelligence artificielle, au big data et à des
            plateformes interactives, nous offrons aux praticiens des outils
            d'aide à la décision et de gestion de dossiers adaptés aux
            spécificités du droit OHADA et des droits nationaux africains. »
          </p>
          <p className="citation-author font-bold text-xl">L.Laleye - DG LAHALEX</p>
          <Image
            src="/images/group-10818.png"
            alt="Motif"
            fill
            className="absolute inset-0 object-cover rounded-2xl"
          />
        </div> */}
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </main>
  );
}