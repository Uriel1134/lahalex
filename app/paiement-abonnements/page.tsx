"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"
import { gsap } from "gsap"
import { Globe, Scale, FileText, Building2, GraduationCap, Users, Building, Info, Gift, BookOpen } from "lucide-react"

export default function PaiementAbonnements() {
  const [activeTab, setActiveTab] = useState("universel")
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedDiscount, setSelectedDiscount] = useState<number | null>(null)
  
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  const tabs = [
    { id: "universel", label: "Lahalex Universel", icon: Globe },
    { id: "avocat", label: "Lahalex Avocat", icon: Scale },
    { id: "notaire", label: "Lahalex Notaire", icon: FileText },
    { id: "commissaire", label: "Lahalex Commissaire de justice", icon: Building2 },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animation d'entrée de la section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      )

       // Animation des tabs avec effet moderne
       const tabButtons = tabsRef.current?.querySelectorAll('.tab-button')
       if (tabButtons) {
         gsap.fromTo(
           tabButtons,
           { 
             opacity: 0, 
             y: -30, 
             scale: 0.8, 
             rotationY: -15,
             transformOrigin: "center bottom"
           },
           {
             opacity: 1,
             y: 0,
             scale: 1,
             rotationY: 0,
             duration: 0.8,
             stagger: 0.1,
             ease: "elastic.out(1, 0.5)",
             delay: 0.3,
           }
         )
       }

       // Animation des cards avec effet 3D moderne
       const pricingCards = cardsRef.current?.querySelectorAll('.pricing-card')
       if (pricingCards) {
         gsap.fromTo(
           pricingCards,
           { 
             opacity: 0, 
             y: 80, 
             scale: 0.8, 
             rotationX: 25,
             rotationY: 10,
             transformOrigin: "center center",
             filter: "blur(10px)"
           },
           {
             opacity: 1,
             y: 0,
             scale: 1,
             rotationX: 0,
             rotationY: 0,
             filter: "blur(0px)",
             duration: 1.2,
             stagger: 0.2,
             ease: "power3.out",
             delay: 0.6,
           }
         )
       }

       // Animation des headers avec effet de glissement
       const headers = sectionRef.current?.querySelectorAll('.bg-gradient-to-r')
       if (headers) {
         gsap.fromTo(
           headers,
           { 
             opacity: 0, 
             x: -100, 
             scale: 0.9,
             transformOrigin: "left center"
           },
           {
             opacity: 1,
             x: 0,
             scale: 1,
             duration: 1,
             stagger: 0.1,
             ease: "power2.out",
             delay: 0.4,
           }
         )
       }
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />

      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background avec gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#770D28]/5 via-transparent to-[#770D28]/5"></div>
        
        {/* Effets de particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#770D28]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#770D28]/8 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#770D28]/12 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#770D28]/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Title avec effet moderne */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
               <h1 className="font-sf-pro text-4xl sm:text-5xl lg:text-6xl text-[#770D28] leading-tight relative z-10 font-bold">
                 Nos Formules
               </h1>
              <div className="absolute -inset-4 bg-[#770D28]/10 rounded-2xl blur-xl"></div>
            </div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Découvrez nos solutions adaptées à vos besoins professionnels
            </p>
          </div>

           {/* Navigation moderne avec glassmorphism */}
           <div ref={tabsRef} className="flex justify-center mb-16">
             <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/20 w-full max-w-6xl">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                     className={`tab-button group relative px-4 py-3 rounded-xl font-medium transition-all duration-500 ease-out flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                         ? "bg-[#770D28] text-white shadow-xl transform scale-105"
                         : "text-gray-600 hover:text-[#770D28] hover:bg-white/50 hover:scale-105"
                     }`}
                   >
                     <tab.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                     <span className="text-sm font-medium whitespace-nowrap">{tab.label}</span>
                     {activeTab === tab.id && (
                       <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl"></div>
                     )}
              </button>
            ))}
               </div>
             </div>
          </div>

          {activeTab === "universel" && (
            <div ref={cardsRef} className="pricing-content">
              {/* Header Section moderne */}
              <div className="bg-gradient-to-r from-[#770D28] to-[#5a0a1f] rounded-3xl shadow-2xl mb-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative text-white p-8 text-center">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                     <h2 className="text-3xl font-sf-pro font-bold">Lahalex Universel</h2>
                  </div>
                  <p className="text-white/90 text-lg">Solution complète pour tous vos besoins juridiques</p>
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Student Card */}
                <div className="pricing-card group relative bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out flex flex-col h-full">
                  <div className="absolute inset-0 bg-[#770D28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#770D28]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#770D28] rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                         <h4 className="font-sf-pro text-lg lg:text-xl text-gray-900 font-bold">Étudiant(es)/Doctorant(es)</h4>
                        <div className="w-12 h-1 bg-[#770D28] rounded-full mt-2"></div>
                      </div>
                    </div>
                    <div className="flex-1 mb-6">
                      <p className="text-gray-600 font-sf-pro text-lg">Justificatif obligatoire</p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="/nous-contacter"
                        className="w-full bg-gradient-to-r from-[#770D28] to-[#5a0a1f] text-white py-4 rounded-2xl font-medium hover:shadow-xl inline-block text-center font-sf-pro transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Demandez un devis</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Card */}
                <div className="pricing-card group relative bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out flex flex-col h-full">
                  <div className="absolute inset-0 bg-[#770D28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#770D28]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#770D28] rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Scale className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                         <h4 className="font-sf-pro text-lg lg:text-xl text-gray-900 font-bold">Praticiens/Praticiennes</h4>
                        <div className="w-12 h-1 bg-[#770D28] rounded-full mt-2"></div>
                      </div>
                    </div>
                    <div className="flex-1 mb-6">
                      <p className="text-gray-600 font-sf-pro text-lg">
                        Professionnel du droit : avocats, magistrats, notaires, juriste d'entreprise, consultants, etc
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="/nous-contacter"
                        className="w-full bg-gradient-to-r from-[#770D28] to-[#5a0a1f] text-white py-4 rounded-2xl font-medium hover:shadow-xl inline-block text-center font-sf-pro transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Demandez un devis</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Institutions Card */}
                <div className="pricing-card group relative bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out flex flex-col h-full">
                  <div className="absolute inset-0 bg-[#770D28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#770D28]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                       <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#770D28] rounded-2xl flex items-center justify-center text-white shadow-lg">
                         <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                       </div>
                      <div>
                         <h4 className="font-sf-pro text-lg lg:text-xl text-gray-900 font-bold">
                           Etablissements supérieurs et institutions publiques/privées
                         </h4>
                        <div className="w-12 h-1 bg-[#770D28] rounded-full mt-2"></div>
                      </div>
                    </div>
                    <div className="flex-1 mb-6">
                      <p className="text-gray-600 font-sf-pro text-lg">
                        Institution publique/privée, ONG, entreprise, association, établissement d'enseignement supérieur etc
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="/nous-contacter"
                        className="w-full bg-gradient-to-r from-[#770D28] to-[#5a0a1f] text-white py-4 rounded-2xl font-medium hover:shadow-xl inline-block text-center font-sf-pro transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Demandez un devis</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === "avocat" || activeTab === "notaire" || activeTab === "commissaire") && (
            <div ref={cardsRef} className="pricing-content">
              {/* Header Section moderne */}
              <div className="bg-gradient-to-r from-[#770D28] to-[#5a0a1f] rounded-3xl shadow-2xl mb-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative text-white p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mr-6">
                        {activeTab === "avocat" && <Scale className="w-8 h-8 text-white" />}
                        {activeTab === "notaire" && <FileText className="w-8 h-8 text-white" />}
                        {activeTab === "commissaire" && <Building2 className="w-8 h-8 text-white" />}
                      </div>
                       <h3 className="font-sf-pro text-3xl font-bold">Logiciel</h3>
                    </div>
                    <div className="flex-1 lg:ml-8">
                      <h4 className="font-medium mb-3 text-xl">Important</h4>
                      <p className="text-white/90 text-lg">
                        <strong>Option Assistant IA</strong> – Facturation selon votre consommation, sans prix fixe et
                        sans possibilité de donner un tarif à l'avance. Une facture récapitulative est envoyée en fin de
                        mois, avec un coût moyen généralement inférieur à 100 FCFA par demande.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="pricing-card group relative bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-700 ease-out">
                  <div className="absolute inset-0 bg-[#770D28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#770D28]/10 rounded-full -translate-y-20 translate-x-20"></div>
                   <div className="relative p-6 lg:p-10">
                     <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mb-6 lg:mb-10">
                       <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#770D28] rounded-3xl flex items-center justify-center text-white shadow-xl">
                         {activeTab === "avocat" && <Scale className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                         {activeTab === "notaire" && <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                         {activeTab === "commissaire" && <Building2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />}
                       </div>
                       <div>
                         <h4 className="font-sf-pro text-2xl lg:text-3xl text-gray-900 mb-2 font-bold">
                           {activeTab === "avocat" && "Lahalex Avocat"}
                           {activeTab === "notaire" && "Lahalex Notaire"}
                           {activeTab === "commissaire" && "Lahalex Commissaire de justice"}
                         </h4>
                         <p className="text-gray-600 text-base lg:text-lg">Solution professionnelle complète</p>
                         <div className="w-16 h-1 bg-[#770D28] rounded-full mt-3"></div>
                       </div>
                     </div>

                    {/* Special Offer moderne */}
                    <div className="bg-[#770D28]/5 rounded-3xl p-6 lg:p-8 mb-6 lg:mb-10 border border-[#770D28]/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#770D28]/10 rounded-full -translate-y-12 translate-x-12"></div>
                      <div className="relative flex flex-col sm:flex-row items-start gap-4">
                         <div className="bg-[#770D28] text-white rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg flex-shrink-0">
                           <Gift className="w-6 h-6 text-white" />
                         </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3 text-lg lg:text-xl">Offre spéciale</h5>
                          <p className="text-gray-700 text-base lg:text-lg">
                            La première année de mises à jour et de maintenance vous est <strong>offerte</strong>.
                            Ensuite, continuez à profiter pour seulement <strong>25.000 FCFA</strong> par mois
                          </p>
                        </div>
                      </div>
                    </div>

                     <div className="mb-6 lg:mb-10">
                       <label className="flex items-start cursor-pointer group">
                         <input
                           type="checkbox"
                           className="mr-4 lg:mr-6 mt-2 flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 text-[#770D28] bg-gray-100 border-gray-300 rounded-lg focus:ring-[#770D28] focus:ring-2"
                         />
                         <div>
                           <span className="text-gray-900 font-medium group-hover:text-[#770D28] transition-colors duration-200 text-base lg:text-lg">
                             Ajouter l'option IA afin d'optimiser votre travail
                           </span>
                           <p className="text-gray-600 mt-2 text-sm lg:text-lg">
                             Assistant intelligent pour automatiser vos tâches répétitives
                           </p>
                         </div>
                       </label>
                     </div>

                     <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                       <a
                         href="/nous-contacter"
                         className="flex-1 bg-gradient-to-r from-[#770D28] to-[#5a0a1f] text-white py-4 lg:py-5 rounded-2xl font-medium hover:shadow-xl inline-block text-center font-sf-pro transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 relative overflow-hidden group text-base lg:text-lg"
                       >
                         <span className="relative z-10">Demandez un devis</span>
                         <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       </a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* Animations modernes */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(119, 13, 40, 0.3); }
          50% { box-shadow: 0 0 40px rgba(119, 13, 40, 0.6); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        /* Effets de glassmorphism */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Effets de hover avancés */
        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Gradient animé simplifié */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

         .gradient-animated {
           background: linear-gradient(-45deg, #770D28, #770D28, #770D28, #770D28);
           background-size: 400% 400%;
           animation: gradient-shift 15s ease infinite;
         }

         /* Scroll horizontal pour mobile */
         .scrollbar-hide {
           -ms-overflow-style: none;
           scrollbar-width: none;
         }
         
         .scrollbar-hide::-webkit-scrollbar {
           display: none;
        }
      `}</style>
    </div>
  )
}
