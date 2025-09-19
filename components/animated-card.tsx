"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    // État initial
    gsap.set(card, {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotation: 10
    });

    // Animation d'entrée
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 1.5,
      delay: delay,
      ease: "bounce.out"
    });

    // Animation au hover
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        rotation: 2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [delay]);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}
