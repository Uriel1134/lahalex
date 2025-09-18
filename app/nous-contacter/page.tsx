import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function NousContacter() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#770D28] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gobold text-4xl sm:text-5xl lg:text-2xl text-white leading-tight">NOUS CONTACTER</h1>
        </div>
      </section>

      {/* SECTION : NOUS JOINDRE */}
      <section className="bg-[#FAF5EF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Ligne titre + texte */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Titre */}
            <h2 className="font-gobold text-[24px] leading-[28.8px] font-normal text-[#770D28]">Nous joindre</h2>

            {/* Paragraphe d'intro */}
            <p className="text-[15px] sm:text-base leading-7 text-gray-700">
              Vous pouvez nous contacter pour toute question, suggestion ou demande de partenariat. Notre équipe est à
              votre disposition pour répondre à vos besoins.
            </p>
          </div>

          {/* 3 colonnes de contact */}
          <div className="mt-32 lg:mt-52 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
            {/* Téléphone */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                {/* icône téléphone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#770D28]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l1.96-1.96a1 1 0 011.01-.24c1.12.37 2.33.57 3.62.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.25a1 1 0 011 1c0 1.29.2 2.5.57 3.62a1 1 0 01-.24 1.01l-1.96 1.96z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-[#770D28] font-semibold">Numéro de téléphone</h3>
                <p className="text-gray-800">+33 614 972 046</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                {/* icône enveloppe */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#770D28]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm2 5.2l-9.35 5.83a1 1 0 01-1.3 0L2 9.2V18a2 2 0 002 2h16a2 2 0 002-2V9.2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-[#770D28] font-semibold">Email</h3>
                <p className="text-gray-800">contact@lahalex.com</p>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                {/* icône localisation */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#770D28]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-[#770D28] font-semibold">Adresse</h3>
                <p className="text-gray-800">
                  Rue de la Côte Fleurie, 77660
                  <br />
                  Saint-Jean-les-Deux-Jumeaux, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
