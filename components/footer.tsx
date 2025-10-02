// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#770D28] text-white py-12 relative overflow-hidden border-t-4 border-[#FFFFFF]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-80">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%204%404x%202-Fe0wnbOq53j1kKgJ4lxM5BcYXrSUBE.png"
          alt="Pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex items-start">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%201%202-I4WLdllE2VIT1BDUSkya5JPrlDi9TW.png"
              alt="LAHALEX Logo"
              width={150}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          {/* Informations & Contacts */}
          <div>
            <h4 className="font-gobold text-lg mb-4 uppercase">
              INFORMATIONS & CONTACTS
            </h4>
            <div className="space-y-3 text-sm font-sf-pro">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#770D28] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <p>+33 614 972 046</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#770D28] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <p>+229 015 599 0000</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#770D28] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <p className="underline">contact@lahalex.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#770D28] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>


                </div>
                <p>Du lundi au samedi,<br/>de 9h à 18h</p>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="font-gobold text-lg mb-4 uppercase">ADRESSE</h4>
            <div className="space-y-3 text-sm font-sf-pro">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#770D28] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p>Rue de la Côte Fleurie, 77660</p>
                  <p>Saint-Jean-les-deux-jumeaux, <strong>France</strong></p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#770D28] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p>Jéricho C/490, Cotonou, <strong>Bénin</strong></p>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-gobold text-lg mb-4 uppercase">
              SUIVEZ-NOUS SUR
            </h4>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.linkedin.com/company/lahalex-sarl/",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  href: "https://x.com/lahalex01?s=11",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  href: "https://www.tiktok.com/@lahalex01?_t=ZM-8z6I5ygo8Hg&_r=1",
                  path: "M19.59 6.69a4.83 4.83 0 0 1-3.01-4.51V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
                },
                {
                  href: "https://youtube.com/@lahalex01?si=VqdbnZsOS-iokuaa",
                  path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },
              ].map((icon, i) => (
                <Link
                  key={i}
                  href={icon.href}
                  className="w-8 h-8 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{
                      __html: `<path d="${icon.path}" />`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 text-xs font-sf-pro">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <Link
              href="/conditions-generales"
              className="hover:text-gray-300 uppercase"
            >
              CONDITIONS GÉNÉRALES DE VENTE ET D&apos;UTILISATION
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-gray-300 uppercase"
            >
              POLITIQUES DE CONFIDENTIALITÉ
            </Link>
            <span className="uppercase">
              COPYRIGHT © 2025 LAHALEX - TOUS DROITS RÉSERVÉS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
