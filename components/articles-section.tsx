"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const articles = [
  {
    title:
      "La prise en charge financière des enquêtes sociales dans les procédures impliquant des mineurs : un vide juridique à combler en droit béninois",
    author: "Nicoli ASSOGBA",
    position: "Substitut du procureur, tribunal de Lokossa",
  },
  {
    title: "Pas de preuves, pas de répit : le juge serre la vis face aux emprunteurs défaillants en microfinance",
    author: "Noé GOKPON",
    position: "Juriste spécialiste",
  },
  {
    title:
      "LE PRINCIPE DE SÉCURITÉ JURIDIQUE : GARANT OU MIRAGE DANS LES ACTES DE L'ADMINISTRATION BÉNINOISE ?",
    author: "James ATINDEHOU",
    position: "Magistrat au Tribunal de Première instance de deuxième classe de Ouidah",
  },
  {
    title: "LA MONOGAMIE COMME PRINCIPE PAR DÉFAUT : IMPLICATIONS SOCIÉTALES ET JURIDIQUES",
    author: "Maëlle Ophélia Ariane da TRINIDADE",
    position: "Magistrat au Tribunal de Première instance de deuxième classe de Lokossa",
  },
  {
    title: "Le procès équitable à l'épreuve de la communication des causes en matière civile et commerciale",
    author: "Enagnon Gildas NONNOU",
    position: "Agrégé des facultés de droit Université d'Abomey-Calavi",
  },
]

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function ArticlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  let swiperInstance: any = null

  const handleInit = (swiper: any) => {
    swiperInstance = swiper
  }

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index)
    }
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext()
  }

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev()
  }

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-[#770D28] text-[24px] md:text-[36px] font-normal leading-[43px] font-['Gobold_Extra1'] mb-8 md:mb-16">
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
                      background: "radial-gradient(84.4% 214% at 15.6% 50%, #B4AB6B 0%, #FFFFFF 100%)",
                    }}
                  >
                    <div className="absolute left-[15px] sm:left-[20px] top-0 right-[15px] sm:right-[20px] h-[240px] sm:h-[280px] md:h-[309px] bg-white border border-gray-400/40 rounded-[20px] p-3 sm:p-5">
                      <h3 className="text-black text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[18px] sm:leading-[22px] md:leading-[26px] mb-3 sm:mb-4 md:mb-6">
                        {article.title}
                      </h3>
                      <div className="absolute bottom-[15px] sm:bottom-[20px] left-[15px] sm:left-[20px] right-[15px] sm:right-[20px]">
                        <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] font-semibold">
                          {article.author}
                        </p>
                        <p className="text-black text-[10px] sm:text-[12px] md:text-[14px] font-normal mt-1">
                          {article.position}
                        </p>
                      </div>
                    </div>
                    <a href="/lahalex-universel" className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[80px] sm:w-[93px] h-[40px] sm:h-[50px] bg-[#770D28] rounded-[5px] flex items-center justify-center hover:bg-[#5a0a1f] transition-colors">
                      <span className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-medium">
                        Lire
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation custom */}
        <div className="flex justify-center items-center space-x-4">
          <button onClick={prevSlide} className="p-2 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-6 h-6 text-[#770D28]" />
          </button>

          <div className="flex space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#770D28]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-2 hover:bg-gray-100 rounded">
            <ChevronRight className="w-6 h-6 text-[#770D28]" />
          </button>
        </div>
      </div>
    </section>
  )
}
