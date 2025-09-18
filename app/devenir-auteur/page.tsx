import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function DevenirAuteur() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      <main className="flex-1">
        <section className="relative py-36 lg:py-48 xl:py-60 2xl:py-72 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/118764%201-x4En8UqhlT50EoajWyi6hZImCu7PVS.png"
              alt="Library background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-gobold text-white mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight">
              JURISTE, CHERCHEUR OU PRATICIEN ?
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              Publiez vos articles, analyses, chroniques jurisprudentielles, contributions doctrinales, notes de
              lecture, ouvrages, revues juridiques et bien plus encore sur notre plateforme.
            </p>
            <button className="bg-[#770D28] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#5a0a1f] transition-colors">
              Devenir auteur
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
