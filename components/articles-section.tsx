"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const BRAND_ACCENT = "#D4C89A"
const BRAND_TEXT = "#6B7280"
const BRAND_BG = "#FFFFFF"
const BRAND_ACCENT_DARK = "#B4AB6B"

const articles = [
  {
    title:
      "La prise en charge financière des enquêtes sociales dans les procédures impliquant des mineurs : un vide juridique à combler en droit béninois",
    author: "Nicoli ASSOGBA",
    position: "Substitut du procureur, tribunal de Lokossa",
    image: "/images/Avatar.jpg",
  },
  {
    title:
      "Pas de preuves, pas de répit : le juge serre la vis face aux emprunteurs défaillants en microfinance",
    author: "Noé GOKPON",
    position: "Juriste spécialiste",
    image: "/images/Avatar.jpg",
  },
  {
    title:
      "LE PRINCIPE DE SÉCURITÉ JURIDIQUE : GARANT OU MIRAGE DANS LES ACTES DE L'ADMINISTRATION BÉNINOISE ?",
    author: "James ATINDEHOU",
    position: "Magistrat au Tribunal de Première instance de deuxième classe de Ouidah",
    image: "/images/Avatar.jpg",
  },
  {
    title:
      "LA MONOGAMIE COMME PRINCIPE PAR DÉFAUT : IMPLICATIONS SOCIÉTALES ET JURIDIQUES",
    author: "Maëlle Ophélia Ariane da TRINIDADE",
    position: "Magistrat au Tribunal de Première instance de deuxième classe de Lokossa",
    image: "/images/Avatar.jpg",
  },
  {
    title:
      "Le procès équitable à l'épreuve de la communication des causes en matière civile et commerciale",
    author: "Enagnon Gildas NONNOU",
    position: "Agrégé des facultés de droit Université d'Abomey-Calavi",
    image: "/images/Gildas.jpeg",
  },
  {
    title:
      "L'infrastructure numérique comme nouveau champ de régulation : Les fintechs et la stabilité financière systémique dans les pays en développement",
    author: "Magloire LANHA",
    position: "Professeur titulaire agrégé des Facultés d'Economie et de Gestion",
    image: "/images/Magloire.jpg",
  },
  {
    title:
      "Nouvelles perspectives sur la politique fiscale, les inégalités de revenus et le secteur informel : cas des pays de l'Afrique subsaharienne",
    author: "Bernard-Didier Benissan",
    position: "-Docteur en économie",
    image: "/images/photoBenissan.png",
  },
    {
    title:
      "La pêcherie du lac toho (bénin, afrique de l’ouest) : typologie, organisation, acteurs, engins et commercialisation du poisson",
    author: "Clovis HOUNTCHEME ",
    position: "Spécialiste en Agronomie",
    image: "/images/Clovi.jpeg",
  },
   {
    title:
      "Anatomie du rectum et implications cliniques : revue anatomique descriptive, fonctionnelle et prospective",
    author: "Marcelin GANMENON",
    position: "Médecin Généraliste",
    image: "/images/Marcelin.jpeg",
  },
]

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
)

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
)

export function ArticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const swiperRef = useRef<any>(null)

  const handleInit = (swiper: any) => {
    swiperRef.current = swiper
  }

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    if (swiperRef.current) swiperRef.current.slideNext()
  }

  const prevSlide = () => {
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  return (
    <section className="w-full py-8 md:py-16" style={{ backgroundColor: BRAND_BG }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2
          className="text-[24px] md:text-[36px] font-normal leading-[1.2] font-['Gobold_Extra1'] mb-8 md:mb-16"
          style={{ color: BRAND_TEXT }}
        >
          NOS ARTICLES
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={handleInit}
          className="mb-12"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <article className="w-full max-w-[350px] sm:max-w-[400px] mx-auto">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[391px]">
                  <div
                    className="absolute inset-0 rounded-[20px]"
                    style={{
                      background: `radial-gradient(84.4% 214% at 15.6% 50%, ${BRAND_ACCENT_DARK} 0%, #FFFFFF 100%)`,
                    }}
                  >
                    <div className="absolute left-[15px] sm:left-[20px] top-0 right-[15px] sm:right-[20px] h-[240px] sm:h-[280px] md:h-[309px] bg-white border border-gray-400/40 rounded-[20px] p-3 sm:p-5">
                      <h3
                        className="text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[18px] sm:leading-[22px] md:leading-[26px] mb-3 sm:mb-4 md:mb-6"
                        style={{ color: BRAND_TEXT }}
                      >
                        {article.title}
                      </h3>

                      <div className="absolute bottom-[15px] sm:bottom-[20px] left-[15px] sm:left-[20px] right-[15px] sm:right-[20px] flex items-start gap-3">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gray-300 shrink-0">
                          <Image
                            src={article.image}
                            alt={article.author}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <p
                            className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold"
                            style={{ color: BRAND_TEXT }}
                          >
                            {article.author}
                          </p>

                          {article.position && (
                            <p
                              className="text-[10px] sm:text-[12px] md:text-[14px] font-normal mt-1"
                              style={{ color: BRAND_TEXT }}
                            >
                              {article.position}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <a
                      href="/lahalex-universel"
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80px] sm:w-[93px] h-[40px] sm:h-[50px] rounded-[5px] flex items-center justify-center transition-colors"
                      style={{ backgroundColor: BRAND_ACCENT }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = BRAND_ACCENT_DARK
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = BRAND_ACCENT
                      }}
                    >
                      <span
                        className="text-[16px] sm:text-[18px] md:text-[20px] font-medium"
                        style={{ color: "#000000" }}
                      >
                        Lire
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Article précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'article ${index + 1}`}
                className="w-3 h-3 rounded-full transition-colors"
                style={{
                  backgroundColor: index === currentIndex ? BRAND_ACCENT : "#D1D5DB",
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Article suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}