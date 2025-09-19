"use client"

import { useState, useEffect } from "react"

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
    title: "LE PRINCIPE DE SÉCURITÉ JURIDIQUE : GARANT OU MIRAGE DANS LES ACTES DE L'ADMINISTRATION BÉNINOISE ?",
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
  const [itemsPerView, setItemsPerView] = useState(3) // par défaut desktop

  // Détecte la taille d'écran pour adapter le nombre d'items visibles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // tablet
      } else {
        setItemsPerView(3) // desktop
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Défilement automatique continu sans interruption
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [articles.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-[#770D28] text-[24px] md:text-[36px] font-normal leading-[43px] font-['Gobold_Extra1'] mb-8 md:mb-16">
          NOS ARTICLES
        </h2>

        <div className="relative overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {articles.map((article, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                <article className="w-full max-w-[350px] sm:max-w-[400px] mx-auto">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[391px]">
                    <div
                      className="absolute inset-0 rounded-[20px]"
                      style={{
                        background: "radial-gradient(84.4% 214% at 15.6% 50%, #B4AB6B 0%, #FFFFFF 100%)",
                      }}
                    >
                      <div className="absolute left-[15px] sm:left-[20px] top-[0px] right-[15px] sm:right-[20px] h-[240px] sm:h-[280px] md:h-[309px] bg-white border border-gray-400/40 rounded-[20px] p-3 sm:p-5">
                        <h3 className="text-black text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[18px] sm:leading-[22px] md:leading-[26px] mb-3 sm:mb-4 md:mb-6">
                          {article.title}
                        </h3>
                        <div className="absolute bottom-[15px] sm:bottom-[20px] left-[15px] sm:left-[20px] right-[15px] sm:right-[20px]">
                          <p className="text-black text-[12px] sm:text-[14px] md:text-[16px] font-semibold leading-[16px] sm:leading-[20px] md:leading-[24px]">
                            {article.author}
                          </p>
                          <p className="text-black text-[10px] sm:text-[12px] md:text-[14px] font-normal leading-[14px] sm:leading-[18px] md:leading-[20px] mt-1">
                            {article.position}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[0px] w-[80px] sm:w-[93px] h-[40px] sm:h-[50px] bg-[#770D28] rounded-[5px] flex items-center justify-center">
                        <span className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-medium">Lire</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <button onClick={prevSlide} className="p-2 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-6 h-6 text-[#770D28]" />
          </button>

          <div className="flex space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#770D28]" : "bg-gray-300"}`}
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
