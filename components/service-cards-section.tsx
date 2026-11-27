import { forwardRef } from "react";
import { ChevronsRight, type LucideIcon } from "lucide-react";

// Fond de la section : sert aussi à « découper » l'encoche des cartes.
export const SERVICES_BG = "#F7F5EE";

// Habillage de chaque carte (fond, textes, icône, bouton dans l'encoche).
const cardThemes = [
  {
    card: "bg-white text-[#111111] border border-black/[0.06]",
    desc: "text-gray-500",
    icon: "text-[#111111]",
    button: "bg-white text-[#111111] border border-black/10 hover:bg-[#F1EEE3]",
    deco: "border-black/[0.04]",
  },
  {
    card: "bg-[#D4C89A] text-[#111111]",
    desc: "text-[#111111]/70",
    icon: "text-[#111111]",
    button: "bg-[#D4C89A] text-[#111111] hover:bg-[#C9BC86]",
    deco: "border-white/40",
  },
  {
    card: "bg-[#1F1F1F] text-white",
    desc: "text-white/65",
    icon: "text-[#D4C89A]",
    button: "bg-[#1F1F1F] text-white hover:bg-black",
    deco: "border-[#D4C89A]/15",
  },
  {
    card: "bg-[#B4AB6B] text-[#111111]",
    desc: "text-[#111111]/75",
    icon: "text-[#111111]",
    button: "bg-[#B4AB6B] text-[#111111] hover:bg-[#A69D5E]",
    deco: "border-white/30",
  },
];

export type ServiceCardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Sans lien, la carte n'a ni encoche ni bouton « En savoir plus ». */
  href?: string;
};

type ServiceCardsSectionProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  services: ServiceCardItem[];
};

// Classes statiques pour que Tailwind les détecte.
function gridColumns(count: number) {
  if (count % 4 === 0) return "sm:grid-cols-2 lg:grid-cols-4";
  if (count > 3) return "md:grid-cols-2 lg:grid-cols-3";
  return "lg:grid-cols-3";
}

/**
 * Section « Nos services » au style LahaLex Universel : cartes colorées,
 * cercles décoratifs et bouton logé dans une encoche en bas à gauche.
 * Les classes service-* sont conservées pour les animations GSAP des pages.
 */
export const ServiceCardsSection = forwardRef<HTMLElement, ServiceCardsSectionProps>(
  function ServiceCardsSection({ eyebrow = "Nos services", title, intro, services }, ref) {
    return (
      <section
        ref={ref}
        className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden"
        style={{ backgroundColor: SERVICES_BG }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#111111]">
                <span className="text-[#B4AB6B] text-base leading-none">✱</span>
                {eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-[#111111]">
                {title}
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-500 lg:max-w-md lg:justify-self-end">
              {intro}
            </p>
          </div>

          <div className={`grid grid-cols-1 gap-5 lg:gap-6 ${gridColumns(services.length)}`}>
            {services.map((service, index) => {
              const Icon = service.icon;
              const theme = cardThemes[index % cardThemes.length];
              const cardClassName = `group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[22px] px-6 pt-6 lg:px-7 lg:pt-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.12)] ${
                service.href
                  ? "pb-24 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4AB6B]"
                  : "pb-14 lg:pb-16"
              } ${theme.card}`;

              const content = (
                <>
                  {/* Cercles décoratifs */}
                  <span
                    className={`pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full border-16 transition-transform duration-500 group-hover:scale-110 ${theme.deco}`}
                  />
                  <span
                    className={`pointer-events-none absolute -bottom-8 -right-8 h-20 w-20 rounded-full border-12 ${theme.deco}`}
                  />

                  <Icon
                    className={`service-icon mb-10 h-9 w-9 ${theme.icon}`}
                    strokeWidth={1.5}
                  />

                  <h3 className="service-title mb-3 text-lg font-semibold leading-snug">
                    {service.title}
                  </h3>

                  <p className={`service-description relative text-sm leading-relaxed ${theme.desc}`}>
                    {service.description}
                  </p>

                  {/* Encoche en bas à gauche qui accueille le bouton */}
                  {service.href && (
                    <div
                      className="absolute bottom-0 left-0 rounded-tr-[20px] pt-2.5 pr-2.5"
                      style={{ backgroundColor: SERVICES_BG }}
                    >
                      <span
                        className="pointer-events-none absolute bottom-full left-0 h-5 w-5"
                        style={{
                          background: `radial-gradient(circle at 100% 0, transparent 19.5px, ${SERVICES_BG} 20px)`,
                        }}
                      />
                      <span
                        className="pointer-events-none absolute bottom-0 left-full h-5 w-5"
                        style={{
                          background: `radial-gradient(circle at 100% 0, transparent 19.5px, ${SERVICES_BG} 20px)`,
                        }}
                      />
                      <span
                        className={`service-button inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${theme.button}`}
                      >
                        En savoir plus
                        <ChevronsRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  )}
                </>
              );

              return (
                <div key={service.title} className="service-card h-full">
                  {service.href ? (
                    <a href={service.href} className={cardClassName}>
                      {content}
                    </a>
                  ) : (
                    <div className={cardClassName}>{content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);
