"use client"

import { Counter } from "./counter"

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen h-screen overflow-hidden bg-[#770D28] border-white"
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

      {/* Flèches et textes positionnés autour du PC */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Flèche gauche haut */}
        <div className="absolute top-[8%] left-0 md:left-[15%] lg:left-[18%] flex flex-col items-center">
          <div className="text-white text-[18px] md:text-[24px] lg:text-[28px] font-bold font-gobold-normal text-center mb-4 max-w-[120px] md:max-w-[150px] md:-ml-32 lg:-ml-36 ml-16 mt-4">
            <div><span className="font-gobold">+<Counter target={15} duration={2000} className="inline" />h</span></div>
            <div>de travail</div>
            <div>économisé</div>
            <div>par semaine</div>
          </div>
          <img 
            src="/images/fleche-gauche-haut.png" 
            alt="Flèche gauche haut" 
            className="w-[60px] md:w-[80px] lg:w-[100px] h-auto rotate-90 md:rotate-0 -ml-[80px] md:ml-0 -mt-4"
          />
        </div>

        {/* Flèche gauche bas */}
        <div className="absolute bottom-[8%] md:bottom-[25%] left-0 md:left-[15%] lg:left-[18%] flex flex-col items-center">
          <img 
            src="/images/fleche-gauche-bas.png" 
            alt="Flèche gauche bas" 
            className="w-[60px] md:w-[80px] lg:w-[100px] h-auto mb-4 -rotate-90 md:rotate-0 -ml-[80px] md:ml-0"
          />
          <div className="text-white text-[18px] md:text-[24px] lg:text-[28px] font-bold font-gobold-normal text-center max-w-[120px] md:max-w-[150px] md:-ml-48 lg:-ml-52 ml-16">
            <div><span className="font-gobold">+<Counter target={17000} duration={2500} separator="." className="inline" /></span></div>
            <div>professionnels</div>
            <div>du droit</div>
            <div>convaincus</div>
          </div>
        </div>

        {/* Flèche droite haut */}
        <div className="absolute top-[8%] right-0 md:right-[15%] lg:right-[18%] flex flex-col items-center">
          <div className="text-white text-[18px] md:text-[24px] lg:text-[28px] font-bold font-gobold-normal text-center mb-4 max-w-[120px] md:max-w-[150px] md:-mr-32 lg:-mr-30 mr-16 mt-4">
            <div><span className="font-gobold">+<Counter target={500000} duration={3000} separator="." className="inline" /></span></div>
            <div>Livres</div>
            <div>numériques</div>
            <div>pluridisciplinaire</div>
          </div>
          <img 
            src="/images/fleche-droit-haut.png" 
            alt="Flèche droite haut" 
            className="w-[60px] md:w-[80px] lg:w-[100px] h-auto -rotate-90 md:rotate-0 -mr-[80px] md:mr-0 -mt-6"
          />
        </div>

        {/* Flèche droite bas */}
        <div className="absolute bottom-[8%] md:bottom-[25%] right-0 md:right-[15%] lg:right-[18%] flex flex-col items-center">
          <img 
            src="/images/fleche-droit-bas.png" 
            alt="Flèche droite bas" 
            className="w-[60px] md:w-[80px] lg:w-[100px] h-auto mb-4 rotate-90 md:rotate-0 -mr-[80px] md:mr-0"
          />
          <div className="text-white text-[18px] md:text-[24px] lg:text-[28px] font-bold font-gobold-normal text-center max-w-[120px] md:max-w-[150px] md:-mr-48 lg:-mr-52 mr-16">
            <div><span className="font-gobold">+<Counter target={2000000} duration={3500} separator="." className="inline" /></span></div>
            <div>Ressources</div>
            <div>juridiques</div>
          </div>
        </div>
      </div>

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
    </section>
  )
}
