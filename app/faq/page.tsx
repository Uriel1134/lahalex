"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"
import { gsap } from "gsap"

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const faqContainerRef = useRef<HTMLDivElement>(null)

  const faqItems = [
    {
      question: "Que faire si je ne reçois pas l'e-mail de confirmation après mon inscription ?",
      answer:
        "Vérifiez d'abord votre boîte de courriers indésirables (spams). Si vous ne le trouvez pas, contactez notre service d'assistance afin que nous puissions vous renvoyer l'e-mail.",
    },
    {
      question: "Comment procéder si j'ai oublié mon mot de passe ?",
      answer:
        "Cliquez sur « Mot de passe oublié » sur la page de connexion et suivez les instructions pour en créer un nouveau.",
    },
    {
      question: "Est-il possible d'utiliser mon compte sur plusieurs appareils en même temps ?",
      answer:
        "Non, cela n'est pas possible : la connexion se coupe automatiquement si le compte est utilisé simultanément sur plusieurs appareils. En revanche, il est possible de souscrire un abonnement multi-comptes, qui permet de bénéficier de réductions.",
    },
    {
      question: "Comment puis-je renouveler mon abonnement une fois arrivé à expiration ?",
      answer:
        "Rendez-vous dans l'espace abonné de votre compte et procédez directement au paiement. Plusieurs modes de règlement sont disponibles : carte bancaire, virement bancaire, PayPal ou chèque (sur demande, contactez-nous pour recevoir les instructions).",
    },
    {
      question: "Les contenus proposés sur la plateforme Lahalex sont-ils mis à jour régulièrement ?",
      answer: "Oui, ils sont actualisés en continu par nos équipes d'experts.",
    },
    {
      question: "En quoi un abonnement individuel diffère-t-il d'un abonnement institutionnel ?",
      answer:
        "L'abonnement institutionnel propose un tarif dégressif : plus le nombre d'utilisateurs est important, moins le coût par personne est élevé.",
    },
    {
      question: "Est-il possible de modifier mon abonnement en cours d'année ?",
      answer:
        "Oui, c'est possible, sauf si vous avez bénéficié d'une réduction exceptionnelle qui bloque toute modification avant l'échéance.",
    },
    {
      question: "Comment obtenir une facture ou un justificatif de paiement pour mon abonnement ?",
      answer:
        "La facture est envoyée automatiquement par e-mail après le paiement. Si vous ne la trouvez pas, vérifiez vos spams ou contactez-nous.",
    },
    {
      question: "Puis-je bénéficier d'un accompagnement personnalisé pour apprendre à utiliser la plateforme ?",
      answer:
        "Oui, il suffit de nous contacter pour bénéficier d'un accompagnement sur mesure.",
    },
    {
      question: "Y a-t-il un guide utilisateur ou une rubrique d'aide en ligne disponible ?",
      answer: "Oui, un guide utilisateur ainsi qu'une rubrique d'aide en ligne sont disponibles.",
    },
    {
      question: "Suis-je éligible à un remboursement si j'ai payé un abonnement annuel mais souhaite me rétracter ?",
      answer:
        "Oui, vous disposez d'un délai de 3 mois pour demander un remboursement. Passé ce délai, aucun remboursement n'est possible.",
    },
    {
      question:
        "Quand je souscris à un logiciel métier Lahalex (avocat, notaire, commissaire de justice), ai-je droit à une assistance ?",
      answer:
        "Oui. Une assistance personnalisée est incluse gratuitement pendant les 12 premiers mois. Au-delà de cette période, une participation financière est demandée pour continuer à bénéficier du service d'assistance.",
    },
    {
      question:
        "Est-ce que les modèles d'actes proposés dans les logiciels métiers sont régulièrement mis à jour ?",
      answer:
        "Oui. Nos modèles d'actes sont régulièrement revus et actualisés par notre équipe d'experts afin de rester conformes aux évolutions légales et réglementaires.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Animations GSAP spectaculaires - style devenir-auteur-form
  useEffect(() => {
    if (typeof window === "undefined") return

    // Animation spectaculaire au chargement
    const tl = gsap.timeline()

    // Animation du titre principal - effet bounce spectaculaire
    tl.fromTo(
      ".faq-hero-title",
      { opacity: 0, y: 100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
    )

    // Animation simple sans ScrollTrigger
    const ctx = gsap.context(() => {
      // Animation du conteneur FAQ simple
      if (faqContainerRef.current) {
        gsap.fromTo(
          faqContainerRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5,
          }
        )

        // Animation des éléments FAQ en cascade simple
        const faqItems = faqContainerRef.current.querySelectorAll(".faq-item")
        gsap.fromTo(
          faqItems,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.8,
          }
        )
      }
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={mainRef}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Header />

      {/* Effets de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#C8A96B]/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[#C8A96B]/8 rounded-full animate-drift"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#C8A96B]/12 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#C8A96B]/10 rounded-full animate-drift"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#C8A96B]/15 rounded-full animate-orbit"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#C8A96B]/8 rounded-full animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#C8A96B]/12 rounded-full animate-drift"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/2 w-1 h-1 bg-[#C8A96B]/10 rounded-full animate-orbit"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#C8A96B]/8 rounded-full animate-float"
          style={{ animationDelay: "1.2s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C8A96B] via-[#B8934F] to-[#9F7E3E] py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            ref={titleRef}
            className="faq-hero-title font-gobold text-6xl lg:text-7xl text-gray-800 mb-4"
          >
            FAQ
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative z-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
                Questions fréquemment posées
              </h2>
              <p className="text-gray-600 text-lg lg:text-xl mb-12 max-w-3xl mx-auto">
                Trouvez les réponses aux questions les plus courantes concernant nos services et solutions.
              </p>
            </div>

            {/* FAQ Items */}
            <div ref={faqContainerRef} className="max-w-5xl mx-auto space-y-8">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item group">
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-[#C8A96B]/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="faq-button w-full px-8 py-8 text-left bg-gradient-to-r from-white to-gray-50 hover:from-[#C8A96B]/5 hover:to-[#C8A96B]/10 transition-all duration-300 flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-700 text-lg lg:text-xl pr-6 group-hover:text-gray-800 transition-colors duration-300">
                        {item.question}
                      </span>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#B8934F] flex items-center justify-center transform transition-all duration-300 ${
                            openFaq === index ? "rotate-180 scale-110" : "rotate-0 scale-100"
                          }`}
                        >
                          <svg
                            className="w-6 h-6 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div
                      className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 py-8 bg-gradient-to-r from-gray-50 to-white border-t border-[#C8A96B]/15">
                        <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        /* Classes pour les animations GSAP - style devenir-auteur-form */
        .faq-hero-title {
          opacity: 0;
        }

        /* Animations pour les particules flottantes */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes drift {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          33% {
            transform: translateX(30px) translateY(-20px);
          }
          66% {
            transform: translateX(-20px) translateY(10px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 8s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 12s linear infinite;
        }

        /* Styles simples pour les cards FAQ */
        .faq-item {
          background: rgba(255, 255, 255, 1);
        }

        /* Effets de hover simples */
        .faq-item:hover {
          transform: translateY(-2px);
        }

        /* Animation de révélation du contenu */
        .faq-content {
          transform-origin: top;
        }

        /* Effets de transition fluides */
        .faq-item * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive design amélioré */
        @media (max-width: 640px) {
          .faq-item {
            margin: 0 1rem;
            margin-bottom: 2rem !important;
          }

          .faq-button {
            padding: 1.5rem 1rem;
          }

          .faq-button span {
            font-size: 0.9rem;
            line-height: 1.4;
          }
        }

        /* Amélioration de l'accessibilité */
        .faq-button:focus {
          outline: 2px solid #c8a96b;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}