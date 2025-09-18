"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-[#770D28] py-30 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/images/justice-icon.png" alt="Justice icon" width={300} height={300} className="object-contain" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-white text-center text-[24px] leading-[36px] font-normal">
          <span className="text-[#D4C89A]">Lahalex</span> vous accompagne dans tous vos{" "}
          <span className="text-[#D4C89A]">défis juridiques</span> en mettant à votre disposition des contenus issus{" "}
          <span className="text-[#D4C89A]">d'experts reconnus</span> : analyses réalisées par des juges, universitaires,
          praticiens et théoriciens du droit, <span className="text-[#D4C89A]">doctrines de référence</span>.
        </p>
      </div>
    </section>
  )
}
