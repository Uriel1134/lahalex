// app/faq/page.tsx
// ou pages/faq.tsx si tu es en pages router

import Link from "next/link";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function FAQPage() {
  return (
    <div className="font-sf-pro" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      <section className="relative py-20 bg-[#FCF8F3]">
        <div className="container mx-auto px-4 flex flex-col items-center gap-12">
          {/* PREMIER CARD AU MILIEU */}
          <div className="bg-[#5A5A5A] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/images/Lahalex_universel1.png"
                alt="Lahalex Universel"
                className="w-44 h-auto object-contain mix-blend-lighten"
              />
            </div>

            <Link href="/universel-domaines">
              <button className="border border-white text-white px-6 py-2 rounded-full bg-transparent hover:bg-white hover:text-[#5A5A5A] transition">
                Connexion
              </button>
            </Link>
          </div>

          {/* LES 3 AUTRES CARDS EN BAS SUR LA MEME LIGNE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
            {/* Carte Avocat */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/images/laha-logo-Avocat.png"
                alt="Lahalex Avocat"
                className="w-40 h-40 mb-8 object-contain"
              />
              <a href="https://avocat.lahalex.com">
                <button className="border border-white text-white px-6 py-2 rounded-full bg-transparent hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>

            {/* Carte Notaire */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/images/laha-logo-Notaire.png"
                alt="Lahalex Notaire"
                className="w-40 h-40 mb-8 object-contain"
              />
              <a href="/connexion?solution=notaire">
                <button className="border border-white text-white px-6 py-2 rounded-full bg-transparent hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>

            {/* Carte Commissaire */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/images/Laha-logo-Commissaire.png"
                alt="Lahalex Commissaire de Justice"
                className="w-40 h-40 mb-8 object-contain"
              />
              <a href="/connexion?solution=commissaire">
                <button className="border border-white text-white px-6 py-2 rounded-full bg-transparent hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}