"use client"

import { Counter } from "./counter"

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen h-screen overflow-hidden bg-[#770D28] border-l-2 border-r-2 border-white"
    >
      {/* Aurora mesh SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}
      >
        <defs>
          <radialGradient id="aurora1" cx="0.5" cy="0.4" r="0.6" fx="0.5" fy="0.4" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#EADFCB" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#EADFCB" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#770D28" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aurora2" cx="0.7" cy="0.7" r="0.4" fx="0.7" fy="0.7" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#F7CBAA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#770D28" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="900" cy="400" rx="600" ry="320" fill="url(#aurora1)" />
        <ellipse cx="1400" cy="800" rx="400" ry="180" fill="url(#aurora2)" />
      </svg>
      {/* Image centrale laptop */}
      <div
        className="absolute left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none"
        style={{
          width: 'min(900px, 80vw)',
          height: 'auto',
          maxHeight: '70vh',
        }}
      >
        <img
          src="/images/universel-laptop.png"
          alt="Universel Laptop"
          className="w-full h-auto drop-shadow-2xl"
          style={{
            maxWidth: '100%',
            maxHeight: '70vh',
            minWidth: '280px',
            objectFit: 'contain',
          }}
        />
      </div>

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
{/* Bandeau gradient bas */}
<div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black/90 to-transparent" />

{/* Titres */}
<div className="absolute left-0 right-0 bottom-4 sm:bottom-6 md:bottom-8 
  flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 
  px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
  
  {/* Groupe gauche */}
<div className="text-white font-gobold leading-none text-center lg:text-left order-1 lg:order-none 
  max-w-full overflow-hidden pr-2 lg:-ml-16 xl:-ml-24">
  <div 
    className="relative inline-flex gap-[1px] sm:gap-[2px] flex-wrap lg:flex-nowrap"
    style={{ fontSize: "clamp(16px, 4vw, 64px)" }}
  >
    {"CENTRALISEZ LE DROIT".split("").map((ch, i) => (
      <span 
        key={`l-${i}`} 
        className="relative animate-flip-in-bottom" 
        style={{ animationDelay: `${0.1 + i * 0.05}s` }}
      >
        {ch === " " ? "\u00A0" : ch}
        <span className="pointer-events-none absolute inset-0 bg-white/30 animate-light-sweep" />
      </span>
    ))}
  </div>
</div>


  {/* Groupe droit */}
{/* Groupe droit */}
<div
  className="text-white font-gobold leading-none text-center lg:text-right order-2 lg:order-none 
  max-w-full overflow-hidden lg:-mr-16 xl:-mr-24"
>
  <div
    className="relative inline-flex gap-[1px] sm:gap-[2px] flex-wrap lg:flex-nowrap"
    style={{ fontSize: "clamp(16px, 4vw, 64px)" }}
  >
    {"SIMPLIFIEZ LA JUSTICE".split("").map((ch, i) => (
      <span
        key={`r-${i}`}
        className="relative animate-flip-in-bottom"
        style={{ animationDelay: `${0.1 + i * 0.05}s` }}
      >
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
