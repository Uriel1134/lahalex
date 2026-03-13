"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Couleur accent de la charte
const BRAND_ACCENT = "#D4C89A"

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-30 relative overflow-hidden"
    >
      {/* Background icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/*
        <Image
          src="/images/justice-icon.png"
          alt="Justice icon"
          width={300}
          height={300}
          className="object-contain w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto opacity-20 md:opacity-30"
        />
        */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <p className="text-gray-600 text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] font-normal">
          <span style={{ color: BRAND_ACCENT }}>Lahalex</span> vous accompagne dans tous vos{" "}
          <span style={{ color: BRAND_ACCENT }}>défis</span> en vous proposant des contenus élaborés par{" "}
          <span style={{ color: BRAND_ACCENT }}>des experts reconnus</span> : analyses menées par des universitaires et des professionnels,
          alliant la pratique et la théorie, appuyées sur des{" "}
          <span style={{ color: BRAND_ACCENT }}>doctrines de référence</span>.
        </p>
      </div>
    </section>
  )
}