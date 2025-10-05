"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import countries from "world-countries"

function ConnexionContent() {
  const [tab, setTab] = useState<"login" | "register">("register")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("+33")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const searchParams = useSearchParams()
  const solution = searchParams.get('solution') || 'universel'

  // Configuration des solutions
  const solutions = {
    universel: {
      logo: "/images/laha-logo-Universel.png",
      title: "UNIVERSEL",
      subtitle: "Centralisez le droit, simplifiez la justice",
      welcomeText: "Bienvenue sur LAHALEX UNIVERSEL"
    },
    avocat: {
      logo: "/images/laha-logo-Avocat.png",
      title: "AVOCAT",
      subtitle: "Centralisez le droit, simplifiez la justice",
      welcomeText: "Bienvenue sur LAHALEX AVOCAT"
    },
    notaire: {
      logo: "/images/laha-logo-Notaire.png",
      title: "NOTAIRE",
      subtitle: "Centralisez le droit, simplifiez la justice",
      welcomeText: "Bienvenue sur LAHALEX NOTAIRE"
    },
    commissaire: {
      logo: "/images/Laha-logo-Commissaire.png",
      title: "COMMISSAIRE DE JUSTICE",
      subtitle: "Centralisez le droit, simplifiez la justice",
      welcomeText: "Bienvenue sur LAHALEX COMMISSAIRE DE JUSTICE"
    }
  }

  const currentSolution = solutions[solution as keyof typeof solutions] || solutions.universel

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCountryDropdown) {
        setShowCountryDropdown(false)
      }
    }

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCountryDropdown])

  // Utilisation de la bibliothèque world-countries (même logique que essai-gratuit)
  const countriesList = countries
    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
    .map(country => {
      const callingCode = country.idd.root + (country.idd.suffixes?.[0] || '')
      return {
        code: callingCode,
        flag: country.flag,
        name: country.name.common,
        cca2: country.cca2
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'))


  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EF] font-[SFPro]">
      {/* HALOS décor */}
      <div className="hidden lg:block absolute -left-40 top-56 w-[520px] h-[520px] rounded-full blur-[70px] opacity-35 pointer-events-none bg-[radial-gradient(closest-side,#FDECEC,transparent_70%)]"></div>
      <div className="hidden lg:block absolute -right-40 bottom-40 w-[520px] h-[520px] rounded-full blur-[70px] opacity-35 pointer-events-none bg-[radial-gradient(closest-side,#FDECEC,transparent_70%)]"></div>

      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <a href="/" className="text-[#770D28] font-medium text-sm sm:text-base " style={{ fontFamily: '"SF Pro Display", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>Accueil</a>
        <button className="inline-flex items-center gap-2 border rounded-md px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition">
          🇫🇷 <span className="hidden sm:inline">FR</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
          </svg>
        </button>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-3 sm:px-4 lg:px-6 py-8 lg:py-12">
        <section className="relative w-full max-w-[1100px]">
          <div className="bg-white rounded-[14px] shadow-[0_8px_28px_rgba(0,0,0,.08)] overflow-visible grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            
            {/* Colonne droite (logo) => en mobile elle passe AVANT */}
            <div className="bg-[#770D28] text-white flex flex-col items-center justify-center p-8 order-1 lg:order-2">
              <Image src={currentSolution.logo} alt={currentSolution.title} width={200} height={200} className="mb-8 select-none" />
              <p className="text-center max-w-md leading-7" style={{ fontFamily: '"Gobold Lowplus", sans-serif', fontSize: '16px', lineHeight: '19.2px', fontWeight: '400', letterSpacing: 'normal', color: '#F8F9FA' }}>
                {currentSolution.subtitle}
              </p>
            </div>

            {/* Colonne gauche (formulaires) */}
            <div className="bg-[#FDECEC] px-6 lg:px-10 py-8 lg:py-10 order-2 lg:order-1 relative">
              
              {/* Onglets */}
              <div className="mx-auto mb-7 inline-flex items-center gap-2 bg-[#FDD7D7] rounded-[12px] p-2 "style={{ fontFamily: '"SF Pro Display", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '700', letterSpacing: 'normal', color: '#293240' }}>
                <button
                  onClick={() => setTab("login")}
                  className={`px-5 py-2 rounded-[10px] font-medium text-base transition ${
                    tab === "login"
                      ? "bg-white shadow-sm text-[#770D28] tab-underline"
                      : "text-[#770D28]"
                  }`}
                >
                  Connexion
                </button>
                <button
                  onClick={() => setTab("register")}
                  className={`px-5 py-2 rounded-[10px] font-medium text-base transition ${
                    tab === "register"
                      ? "bg-white shadow-sm text-[#770D28] tab-underline"
                      : "text-[#770D28]"
                  }`}
                >
                  Inscription
                </button>
              </div>

              {/* Titres dynamiques */}
              {tab === "login" ? (
                <h2 className="text-center text-[#770D28] font-semibold mb-6" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '16px', lineHeight: '19.2px', fontWeight: '600', letterSpacing: 'normal' }}>
                  {currentSolution.welcomeText}
                </h2>
              ) : (
                <h2 className="text-center text-[#770D28] font-semibold mb-6" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '16px', lineHeight: '19.2px', fontWeight: '600', letterSpacing: 'normal' }}>
                  Inscription
                </h2>
              )}

              {/* Form Connexion */}
              {tab === "login" && (
                <form className="max-w-lg mx-auto space-y-5">
                  <div>
                    <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Adresse email</label>
                    <input
                      type="email"
                      placeholder="Entrez votre e-mail"
                      style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                      className="w-full h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Mot de passe</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Entrez votre mot de passe"
                        style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                        className="w-full h-11 rounded-md border border-gray-300 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-gray-600 transition border-l border-gray-200"
                        style={{ backgroundColor: '#F8F9FD', color: '#293240' }}
                      >
                        {showPassword ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-left">
                    <a href="#" className="hover:underline" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D27' }}>Mot de passe oublié ?</a>
                  </div>

                  <button type="submit" className="w-full h-11 rounded-md bg-[#770D28] text-white hover:brightness-110 transition" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '500', letterSpacing: 'normal', color: '#FFFFFF' }}>
                    Connexion
                  </button>

                  <p className="text-center" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#293240' }}>
                    Vous n'avez pas de compte ?{" "}
                    <button type="button" onClick={() => setTab("register")} className="hover:underline" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>
                      Inscription
                    </button>
                  </p>
                </form>
              )}

              {/* Écran Inscription */}
              {tab === "register" && (
                  <div className="max-w-lg mx-auto">
                    {!showRegistrationForm ? (
                      <div className="text-center">
                        <button 
                          onClick={() => setShowRegistrationForm(true)}
                          className="w-full h-11 rounded-md bg-[#770D28] text-white hover:brightness-110 transition shadow-sm"
                          style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '500', letterSpacing: 'normal', color: '#FFFFFF' }}
                        >
                    Créer un compte
                  </button>
                  <p className="mt-6" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#293240' }}>
                    Déjà inscrit ?{" "}
                    <button type="button" onClick={() => setTab("login")} className="hover:underline" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>
                      Connexion
                    </button>
                  </p>
                      </div>
                    ) : (
                      <form className="space-y-5">
                        <div>
                          <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Nom complet</label>
                          <input
                            type="text"
                            placeholder="Votre nom complet"
                            style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                            className="w-full h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                          />
                        </div>
                        
                        <div>
                          <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Adresse email</label>
                          <input
                            type="email"
                            placeholder="Adresse email"
                            style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                            className="w-full h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                          />
                        </div>
                        
                        <div>
                          <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Téléphone</label>
                          <div className="flex gap-2">
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                className="h-11 w-24 rounded-md border border-gray-300 px-3 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white flex items-center justify-between"
                              >
                                <span className="text-sm">
                                  {countriesList.find(c => c.code === selectedCountry)?.flag} {selectedCountry}
                                </span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              
                              {showCountryDropdown && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto w-80">
                                  {countriesList.length > 0 ? (
                                    countriesList.map((country, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(country.code)
                                          setShowCountryDropdown(false)
                                        }}
                                        className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-sm"
                                      >
                                        <span>{country.flag}</span>
                                        <span className="font-medium">{country.code}</span>
                                        <span className="text-gray-500">{country.name}</span>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="px-3 py-2 text-gray-500 text-sm">
                                      Chargement des pays...
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                            <input
                              type="tel"
                              placeholder="Votre numéro de téléphone"
                              style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                              className="flex-1 h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Mot de passe</label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              placeholder="Mot de passe"
                              style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                              className="w-full h-11 rounded-md border border-gray-300 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-gray-600 transition border-l border-gray-200"
                              style={{ backgroundColor: '#F8F9FD', color: '#293240' }}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block mb-2" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}>Confirmation mot de passe</label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirmer mot de passe"
                              style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#333333' }}
                              className="w-full h-11 rounded-md border border-gray-300 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-gray-600 transition border-l border-gray-200"
                              style={{ backgroundColor: '#F8F9FD', color: '#293240' }}
                            >
                              {showConfirmPassword ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>

                        <button type="submit" className="w-full h-11 rounded-md bg-[#770D28] text-white hover:brightness-110 transition" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '500', letterSpacing: 'normal', color: '#FFFFFF' }}>
                          Inscription
                        </button>

                        <p className="text-center" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#293240' }}>
                          Vous avez déjà un compte ?{" "}
                          <button type="button" onClick={() => setTab("login")} className="hover:underline" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>
                            Connexion
                          </button>
                        </p>
                      </form>
                    )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a className="hover:underline" href="/qui-sommes-nous" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>À propos de nous</a>
          <a className="hover:underline" href="/conditions-generales" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>Termes et conditions</a>
          <a className="hover:underline" href="/politique-confidentialite" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>Politique de confidentialité</a>
        </div>
        <p className="mt-4" style={{ fontFamily: '"SF Pro Regular", sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400', letterSpacing: 'normal', color: '#770D28' }}>© LAHALEX {currentSolution.title} 2025</p>
      </footer>
    </div>
  )
}

export default function ConnexionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FAF5EF]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#770D28] mx-auto mb-4"></div>
          <p className="text-[#770D28] font-medium">Chargement...</p>
        </div>
      </div>
    }>
      <ConnexionContent />
    </Suspense>
  )
}
