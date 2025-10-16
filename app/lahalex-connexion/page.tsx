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
                src="/images/laha-logo-Universel.png"
                alt="Lahalex Universel"
                className="w-40 h-40 mb-8"
              />
               <a href="https://universel.lahalex.com/login">
                 <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                   Connexion
                 </button>
               </a>
             </div>

             {/* Carte Avocat */}
             <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
               <img
                 src="/images/laha-logo-Avocat.png"
                 alt="Lahalex Avocat"
                 className="w-40 h-40 mb-8"
               />
               <a href="https://avocat.lahalex.com">
                 <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                   Connexion
                 </button>
               </a>
             </div>

             {/* Carte Notaire */}
             <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
               <img
                 src="/images/laha-logo-Notaire.png"
                 alt="Lahalex Notaire"
                 className="w-40 h-40 mb-8"
               />
               <a href="/connexion?solution=notaire">
                 <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#770D28] transition">
                   Connexion
                 </button>
               </a>
             </div>

             {/* Carte Commissaire de Justice */}
             <div className="bg-[#770D28] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center w-72 h-80">
               <img
                 src="/images/Laha-logo-Commissaire.png"
                 alt="Lahalex Commissaire de Justice"
                 className="w-40 h-40 mb-8"
               />
               <a href="/connexion?solution=commissaire">
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
