// app/faq/page.tsx (ou pages/faq.tsx si tu es en pages router)

import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function FAQPage() {
  return (
    <div className="font-sf-pro" style={{ backgroundColor: "#FAF5EF" }}>
      {/* Header */}
      <Header />

      {/* Section cartes */}
      <section className="relative py-20 bg-[#FCF8F3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
            {/* Carte Universel */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/logo.png"
                alt="Lahalex Universel"
                className="w-28 h-28 mb-6"
              />
              <h3 className="text-white font-bold text-lg tracking-wide mb-8">
                UNIVERSEL
              </h3>
              <a href="/connexion">
                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>

            {/* Carte Avocat */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/logo.png"
                alt="Lahalex Avocat"
                className="w-28 h-28 mb-6"
              />
              <h3 className="text-white font-bold text-lg tracking-wide mb-8">
                AVOCAT
              </h3>
              <a href="/connexion">
                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>

            {/* Carte Notaire */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/logo.png"
                alt="Lahalex Notaire"
                className="w-28 h-28 mb-6"
              />
              <h3 className="text-white font-bold text-lg tracking-wide mb-8">
                NOTAIRE
              </h3>
              <a href="/connexion">
                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>

            {/* Carte Commissaire de Justice */}
            <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
              <img
                src="/logo.png"
                alt="Lahalex Commissaire de Justice"
                className="w-28 h-28 mb-6"
              />
              <h3 className="text-white font-bold text-lg tracking-wide text-center mb-8">
                COMMISSAIRE DE JUSTICE
              </h3>
              <a href="/connexion">
                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                  Connexion
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
