"use client"

import { Counter } from "./counter"

export function HeroSection() {
  return (
    <section className="relative w-full h-[560px] md:h-[720px] bg-gradient-to-b from-[#FAF5EF] to-[#FAF5EF] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 md:px-16 py-8">
        {/* Top statistics */}
        <div className="w-full flex justify-between items-start pt-8 md:pt-16">
          {/* Left statistics */}
          <div className="space-y-4 md:space-y-8">
            <div>
              <div className="text-white text-[24px] md:text-[39px] font-normal leading-tight tracking-[0.45px] font-['Gratelos']">
                +<Counter target={15} duration={2000} className="inline" />h
              </div>
              <div className="text-white text-[14px] md:text-[22px] font-normal leading-tight tracking-[0.45px] font-['Gratelos'] w-[80px] md:w-[99px]">
                de travail économisé par semaine
              </div>
            </div>

            <div>
              <div className="text-white text-[24px] md:text-[39px] font-normal leading-tight tracking-[0.54px] font-['Gratelos']">
                +<Counter target={17000} duration={2500} separator="." className="inline" />
              </div>
              <div className="text-white text-[14px] md:text-[22px] font-normal leading-tight tracking-[0.54px] font-['Gratelos'] w-[100px] md:w-[150px]">
                professionnels du droit convaincus
              </div>
            </div>
          </div>

          {/* Right statistics */}
          <div className="space-y-4 md:space-y-8 text-right">
            <div>
              <div className="text-white text-[24px] md:text-[39px] font-normal leading-tight tracking-[0.40px] font-['Gratelos']">
                +<Counter target={500000} duration={3000} separator="." className="inline" />
              </div>
              <div className="text-white text-[14px] md:text-[22px] font-normal leading-tight tracking-[0.40px] font-['Gratelos'] w-[100px] md:w-[121px] ml-auto">
                Livres numériques pluridisciplinaire
              </div>
            </div>

            <div>
              <div className="text-white text-[24px] md:text-[39px] font-normal leading-tight tracking-[0.44px] font-['Gratelos']">
                +<Counter target={2000000} duration={3500} separator="." className="inline" />
              </div>
              <div className="text-white text-[14px] md:text-[22px] font-normal leading-tight tracking-[0.44px] font-['Gratelos'] w-[80px] md:w-[91px] ml-auto">
                Ressources juridiques
              </div>
            </div>
          </div>
        </div>

        {/* Bandeau gradient bas */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black/90 to-transparent" />
        {/* Titres: mobile en pile, desktop en deux colonnes. Balayage lumineux conforme globals.css */}
        <div className="absolute left-0 right-0 bottom-6 md:bottom-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 px-2 sm:px-4 md:px-16">
          {/* Groupe gauche */}
          <div className="text-white font-gobold leading-none text-left whitespace-nowrap order-1 sm:order-none">
            <div className="relative inline-flex gap-[1px] sm:gap-[2px] text-[18px] xs:text-[22px] sm:text-[32px] md:text-[64px]">
              {"CENTRALISEZ LE DROIT".split("").map((ch, i) => (
                <span key={`l-${i}`} className="relative animate-flip-in-bottom" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                  {ch === " " ? "\u00A0" : ch}
                  <span className="pointer-events-none absolute inset-0 bg-white/30 animate-light-sweep" />
                </span>
              ))}
            </div>
          </div>

          {/* Groupe droit */}
          <div className="text-white font-gobold leading-none text-right whitespace-nowrap order-2 sm:order-none">
            <div className="relative inline-flex gap-[1px] sm:gap-[2px] text-[18px] xs:text-[22px] sm:text-[32px] md:text-[64px]">
              {"SIMPLIFIEZ LA JUSTICE".split("").map((ch, i) => (
                <span key={`r-${i}`} className="relative animate-flip-in-bottom" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                  {ch === " " ? "\u00A0" : ch}
                  <span className="pointer-events-none absolute inset-0 bg-white/30 animate-light-sweep" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
