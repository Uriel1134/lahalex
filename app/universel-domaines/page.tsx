// app/universel-domaines/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

const domaines = [
  {
    title: "Droit",
    link: "https://universel.lahalex.com/login",
    logo: "/images/lahalex-universel.png",
    bgColor: "#770d28",
    textColor: "#D4C89A",
    buttonBorder: "#D4C89A",
    buttonText: "#D4C89A",
    buttonHoverBg: "#D4C89A",
    buttonHoverText: "#770d28",
  },
  {
    title: "Agriculture",
    link: "https://science-agro.lahalex.com/login",
    logo: "/images/lahalex-universel agro.png",
    bgColor: "#3d1f1e",
    textColor: "#D4C89A",
    buttonBorder: "#D4C89A",
    buttonText: "#D4C89A",
    buttonHoverBg: "#D4C89A",
    buttonHoverText: "#3d1f1e",
  },
  {
    title: "STIM",
    link: "https://stim.lahalex.com/login",
    logo: "/images/lahalex-universel-stim.png",
    bgColor: "#ffffff",
    textColor: "#222222",
    buttonBorder: "#222222",
    buttonText: "#222222",
    buttonHoverBg: "#222222",
    buttonHoverText: "#ffffff",
  },
  {
    title: "Économie et Gestion",
    link: "https://science-eco.lahalex.com/login",
    logo: "/images/lahalex-universel eco.png",
    bgColor: "#002546",
    textColor: "#D4C89A",
    buttonBorder: "#D4C89A",
    buttonText: "#D4C89A",
    buttonHoverBg: "#D4C89A",
    buttonHoverText: "#002546",
  },
  {
    title: "Sciences de la Santé",
    link: "https://science-sante.lahalex.com/login",
    logo: "/images/lahalex-universel sante.png",
    bgColor: "#00453D",
    textColor: "#D4C89A",
    buttonBorder: "#D4C89A",
    buttonText: "#D4C89A",
    buttonHoverBg: "#D4C89A",
    buttonHoverText: "#00453D",
  },
];

type DomaineCardProps = {
  title: string;
  link: string;
  logo: string;
  bgColor: string;
  textColor: string;
  buttonBorder: string;
  buttonText: string;
  buttonHoverBg: string;
  buttonHoverText: string;
};

function DomaineCard({
  title,
  link,
  logo,
  bgColor,
  textColor,
  buttonBorder,
  buttonText,
  buttonHoverBg,
  buttonHoverText,
}: DomaineCardProps) {
  return (
    <div
      className="rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center justify-between w-full max-w-[320px] min-h-[340px] transition-transform duration-300 hover:-translate-y-2"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-28 md:h-28 mb-6">
          <Image src={logo} alt={title} fill className="object-contain" />
        </div>

        <h2
          className="text-xl md:text-2xl font-bold text-center leading-snug"
          style={{ color: textColor }}
        >
          {title}
        </h2>
      </div>

      <Link
        href={link}
        className="mt-8 inline-flex px-6 py-2.5 rounded-full border transition-all duration-300 font-medium hover:[background-color:var(--btn-hover-bg)] hover:[color:var(--btn-hover-text)]"
        style={
          {
            borderColor: buttonBorder,
            color: buttonText,
            backgroundColor: "transparent",
            "--btn-hover-bg": buttonHoverBg,
            "--btn-hover-text": buttonHoverText,
          } as React.CSSProperties
        }
      >
        Connexion
      </Link>
    </div>
  );
}

export default function UniverselDomainesPage() {
  const topDomaines = domaines.slice(0, 2);
  const bottomDomaines = domaines.slice(2);

  return (
    <div className="min-h-screen font-sf-pro bg-[#FAF5EF]">
      <Header />

      <section className="py-20 bg-[#FCF8F3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5A5A5A] mb-4">
              Plateforme Lahalex Universel
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Choisissez votre domaine d’accès pour continuer vers la
              plateforme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mb-10">
            {topDomaines.map((domaine) => (
              <DomaineCard key={domaine.title} {...domaine} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {bottomDomaines.map((domaine) => (
              <DomaineCard key={domaine.title} {...domaine} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}