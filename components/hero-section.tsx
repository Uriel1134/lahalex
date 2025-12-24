"use client"

import { Counter } from "./counter"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-[80px]">
      {/* Background Images/Patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Single Full Watermark */}
        <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-multiply">
          <Image
            src="/images/hero-watermark-full.png"
            alt="Background Pattern"
            fill
            className="object-fill"
            priority
          />
        </div>

        {/* Top Fade Gradient to mask watermark in header area - Stronger mask */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-white via-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 py-12 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start">

          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 pt-12 lg:pt-0 relative z-20">
            {/* Title restored to Mixed Case as per latest request */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] font-gratelos font-normal text-black leading-[1.1] tracking-normal mb-8 transform lg:-translate-x-2">
              Transformer <br />
              l'information en <br />
              performance
            </h1>

            <p className="text-lg sm:text-xl md:text-3xl text-black font-sf-pro font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-6 [word-spacing:20px]">
              Expertise unifiée en bases de <br className="hidden lg:block" />
              données documentaire et logiciels <br className="hidden lg:block" />
              métiers pour le <span className="text-[#770D28] font-gobold">DROIT</span>, la <span className="text-[#770D28] font-gobold">MÉDECINE</span> et
              l'<span className="text-[#770D28] font-gobold">ÉCONOMIE</span>.
            </p>
          </div>

          {/* Right Column: Laptop Image Carousel */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-[140%] lg:-ml-[17%] z-10">
            <div className="relative w-full max-w-none aspect-[20/11]">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-black !opacity-30 !w-3 !h-3 mx-2 rounded-full transition-all duration-300 inline-block cursor-pointer',
                  bulletActiveClass: '!bg-black !opacity-100 !w-8 !rounded-full',
                }}
                className="w-full h-full !overflow-visible"
                style={{
                  '--swiper-pagination-bottom': '-40px',
                  '--swiper-pagination-bullet-inactive-color': '#000000',
                  '--swiper-pagination-color': '#000000'
                } as React.CSSProperties}
              >
                <SwiperSlide>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/universel-laptop.png"
                      alt="Lahalex Universel Interface"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/carousel-image-2.png"
                      alt="Lahalex Feature 2"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/carousel-image-3.png"
                      alt="Lahalex Feature 3"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Row - Lowercase as per design */}
        {/* Bottom Statistics Row - Lowercase as per design - Flex for better spacing */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 md:gap-16 lg:gap-32 mt-2 md:mt-4 border-t border-gray-200/50 pt-4 max-w-7xl mx-auto">

          {/* Stat 1 */}
          <div className="text-left">
            <div className="flex items-center justify-start font-gobold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-1">
              +<Counter target={15} duration={2000} className="inline-block" />H
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-gratelos font-normal text-black leading-normal tracking-normal normal-case">
              de travail <br />
              économisées <br />
              par semaine
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-left">
            <div className="flex items-center justify-start font-gobold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-1">
              +<Counter target={500000} separator="." duration={2500} className="inline-block" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-gratelos font-normal text-black leading-normal tracking-normal normal-case">
              livres <br />
              numériques <br />
              pluridisciplinaires
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-left">
            <div className="flex items-center justify-start font-gobold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-1">
              +<Counter target={17000} separator="." duration={2000} className="inline-block" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-gratelos font-normal text-black leading-normal tracking-normal normal-case">
              professionnels <br />
              convaincus
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-left">
            <div className="flex items-center justify-start font-gobold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-1">
              +<Counter target={2000000} separator="." duration={3000} className="inline-block" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-gratelos font-normal text-black leading-normal tracking-normal normal-case">
              ressources <br />
              documentaires
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
