"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "./text-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Fade in animation for the entire section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate individual solution cards
      const cards = sectionRef.current?.querySelectorAll(".solution-card");
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="text-[#770D28] text-[24px] md:text-[36px] font-normal leading-[43px] font-['Gobold_Extra1'] mb-8 md:mb-16"
        >
          NOS SOLUTIONS
        </h2>

        {/* Solutions grid */}
        <div className="space-y-8 md:space-y-16">
          {/* Lahalex Universel */}
          <div className="solution-card relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Bloc Laptop + Connexions */}
              <div className="relative flex-1 min-h-[220px] xs:min-h-[280px] sm:min-h-[340px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
                <div className="w-full flex justify-center items-center sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
                  <Image
                    src="/images/universel-laptop.png"
                    alt="Lahalex Universel Interface"
                    width={1200}
                    height={800}
                    className="object-contain w-[95vw] max-w-[1200px] h-auto mx-auto"
                  />
                </div>
              </div>

              {/* Texte descriptif */}
              <div className="flex-1 max-w-[400px] lg:ml-8">
                <h3 className="text-[#770D28] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] mb-4 md:mb-6">
                  <span className="font-normal">
                    <TextType
                      text={["Lahalex "]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      startOnVisible={true}
                      loop={false}
                      textColors={["#770D28"]}
                    />
                  </span>
                  <span className="font-bold">
                    <TextType
                      text={["Universel"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      startOnVisible={true}
                      loop={false}
                      textColors={["#770D28"]}
                    />
                  </span>
                </h3>

                <div className="space-y-2 text-black text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-6 md:mb-8">
                  <p>
                    <strong>Recherche juridique avancée :</strong> législation,
                    jurisprudence, doctrine et bien plus encore.
                  </p>
                  <p>
                    <strong>Filtres multicritères et outils de tri</strong> pour
                    un accès immédiat à l'information.
                  </p>
                  <p>
                    <strong>Textes juridiques constamment</strong> mis à jour et
                    interface pensée pour gagner du temps.
                  </p>
                  <p>
                    <strong>Bibliothèque numérique complète :</strong> le droit
                    mais aussi d'autres disciplines.
                  </p>
                  <p>
                    <strong>Veille juridique continue :</strong> surveillance
                    24h/24 et alertes instantanées.
                  </p>
                  <p>
                    <strong>Dictionnaire juridique :</strong> définitions
                    fiables, précises et approfondies.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    variant="outline"
                    className="border border-[#770D28] text-[#770D28] rounded-[30px] px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#770D28] hover:text-white bg-transparent"
                  >
                    En savoir plus
                  </Button>
                  <Button className="bg-[#770D28] text-white rounded-[30px] px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-[#770D28]/90">
                    Demander une démo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Lahalex Avocat */}
          <div className="solution-card flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-16 bg-[#D4C89A] rounded-[20px] p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Image à droite sur PC, au-dessus sur mobile */}
            <div className="w-full lg:w-[350px] xl:w-[400px] 2xl:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/lahalex-avocat.png"
                alt="Lahalex Avocat Interface"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#770D28] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] mb-4 md:mb-6">
                <span className="font-normal">
                  <TextType
                    text={["Lahalex "]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={false}
                    textColors={["#770D28"]}
                  />
                </span>
                <span className="font-bold">
                  <TextType
                    text={["Avocat"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={false}
                    textColors={["#770D28"]}
                  />
                </span>
              </h3>

              <p className="text-black text-[13px] sm:text-[14px] md:text-[15px] leading-[20px] sm:leading-[24px] md:leading-[30px] mb-6 md:mb-8">
               Gestion complète du cabinet : dossiers,
                clients, facturation, finance.
                <br />
                Base de données intelligente : clients,
                magistrats, adversaires, prestataires.
                <br />
               Facturation intégrée : factures personnalisées,
                suivi des paiements, relances automatiques.
                <br />
                Alertes d'information sur le métier d'avocat.
                <br />
                <strong>
                  Bibliothèque de +1000 modèles d'actes conformes et
                  régulièrement actualisés.
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  variant="outline"
                  className="border border-[#770D28] text-[#770D28] rounded-[30px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] hover:bg-[#770D28] hover:text-white bg-transparent"
                >
                  En savoir plus
                </Button>
                <Button className="bg-[#770D28] text-white rounded-[30px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] hover:bg-[#770D28]/90">
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>

          {/* Lahalex Notaire */}
          <div className="solution-card flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16">
            {/* Image d'abord en mobile */}
            <div className="w-full lg:w-[350px] xl:w-[400px] 2xl:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[20px] overflow-hidden order-1 lg:order-none">
              <Image
                src="/images/lahalex-notaire.png"
                alt="Lahalex Notaire Interface"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 order-2 lg:order-none">
              <h3 className="text-[#770D28] text-[28px] md:text-[36px] leading-[43px] mb-6">
                <span className="font-normal">
                  <TextType
                    text={["Lahalex "]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={false}
                    variableSpeed={undefined}
                    onSentenceComplete={undefined}
                    textColors={["#770D28"]}
                  />
                </span>
                <span className="font-bold">
                  <TextType
                    text={["Notaire"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={false}
                    variableSpeed={undefined}
                    onSentenceComplete={undefined}
                    textColors={["#770D28"]}
                  />
                </span>
              </h3>

              <p className="text-black text-[14px] md:text-[15px] leading-[24px] md:leading-[30px] mb-8">
                <strong>Vérification automatique :</strong> détection des pièces
                manquantes ou non conformes.
                <br />
                <strong>Agenda intégré :</strong> rappels pour signatures,
                enregistrements et dépôts.
                <br />
                <strong>Pilotage financier :</strong> chiffre d'affaires, marges
                et résultats en temps réel.
                <br />
                <strong>Bibliothèque de +500 modèles</strong> notariaux
                actualisés (vente, succession, donation, SCI, etc.).
                <br />
                <strong>Classement intelligent :</strong> accès rapide au bon
                modèle selon l'opération et les parties.
                <br />
                <strong>Assistant IA intégré :</strong> automatisation des
                tâches répétitives et gain de temps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="border border-[#770D28] text-[#770D28] rounded-[30px] px-6 md:px-8 py-3 md:py-4 hover:bg-[#770D28] hover:text-white bg-transparent"
                >
                  En savoir plus
                </Button>
                <Button className="bg-[#770D28] text-white rounded-[30px] px-6 md:px-8 py-3 md:py-4 hover:bg-[#770D28]/90">
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>

          {/* Lahalex Commissaire de justice */}
          <div className="solution-card flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-16 bg-[#D4C89A] rounded-[20px] p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Image à droite sur PC, au-dessus sur mobile */}
            <div className="w-full lg:w-[350px] xl:w-[400px] 2xl:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[20px] overflow-hidden">
              <Image
                src="/images/Gradient.png"
                alt="Lahalex Commissaire de Justice Interface"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#770D28] text-[28px] md:text-[36px] leading-[43px] mb-6">
                <span className="font-normal">
                  <TextType
                    text={["Lahalex "]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={false}
                  />
                </span>
                <span className="font-bold">
                  <TextType
                    text={["Commissaire de justice"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={false}
                    textColors={["#770D28"]}
                  />
                </span>
              </h3>

              <p className="text-black text-[14px] md:text-[15px] leading-[24px] md:leading-[30px]  mb-8">
                <strong>Base de données structurée :</strong> clients, contrats,
                juridictions connectées à vos actes.
                <br />
                <strong>Gestion complète :</strong> assignations, constats,
                recouvrements avec alertes automatiques.
                <br />
                <strong>Recouvrement simplifié :</strong> paiement en ligne en
                un clic pour les débiteurs.
                <br />
                <strong>Tournées géolocalisées :</strong> trajets optimisés
                selon missions et urgences.
                <br />
                <strong>Constats digitalisés :</strong> capture et
                enregistrement automatique dans le cloud.
                <br />
                <strong>Facturation automatisée :</strong> borderaux, relances
                par e-mail ou SMS.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="border border-[#770D28] text-[#770D28] rounded-[30px] px-6 md:px-8 py-3 md:py-4 hover:bg-[#770D28] hover:text-white bg-transparent"
                >
                  En savoir plus
                </Button>
                <Button className="bg-[#770D28] text-white rounded-[30px] px-6 md:px-8 py-3 md:py-4 hover:bg-[#770D28]/90">
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
