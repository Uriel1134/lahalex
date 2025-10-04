"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ConnexionPage() {
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
      subtitle: "Votre assistant juridique intelligent",
      welcomeText: "Bienvenue sur LAHALEX AVOCAT"
    },
    notaire: {
      logo: "/images/laha-logo-Notaire.png",
      title: "NOTAIRE",
      subtitle: "Simplifiez votre pratique notariale",
      welcomeText: "Bienvenue sur LAHALEX NOTAIRE"
    },
    commissaire: {
      logo: "/images/Laha-logo-Commissaire.png",
      title: "COMMISSAIRE DE JUSTICE",
      subtitle: "Optimisez vos missions de justice",
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

  // Liste complète des pays avec codes
  const countries = [
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+1", flag: "🇺🇸", name: "États-Unis" },
    { code: "+44", flag: "🇬🇧", name: "Royaume-Uni" },
    { code: "+49", flag: "🇩🇪", name: "Allemagne" },
    { code: "+39", flag: "🇮🇹", name: "Italie" },
    { code: "+34", flag: "🇪🇸", name: "Espagne" },
    { code: "+32", flag: "🇧🇪", name: "Belgique" },
    { code: "+41", flag: "🇨🇭", name: "Suisse" },
    { code: "+31", flag: "🇳🇱", name: "Pays-Bas" },
    { code: "+351", flag: "🇵🇹", name: "Portugal" },
    { code: "+45", flag: "🇩🇰", name: "Danemark" },
    { code: "+46", flag: "🇸🇪", name: "Suède" },
    { code: "+47", flag: "🇳🇴", name: "Norvège" },
    { code: "+358", flag: "🇫🇮", name: "Finlande" },
    { code: "+43", flag: "🇦🇹", name: "Autriche" },
    { code: "+48", flag: "🇵🇱", name: "Pologne" },
    { code: "+420", flag: "🇨🇿", name: "République tchèque" },
    { code: "+421", flag: "🇸🇰", name: "Slovaquie" },
    { code: "+36", flag: "🇭🇺", name: "Hongrie" },
    { code: "+40", flag: "🇷🇴", name: "Roumanie" },
    { code: "+359", flag: "🇧🇬", name: "Bulgarie" },
    { code: "+385", flag: "🇭🇷", name: "Croatie" },
    { code: "+386", flag: "🇸🇮", name: "Slovénie" },
    { code: "+370", flag: "🇱🇹", name: "Lituanie" },
    { code: "+371", flag: "🇱🇻", name: "Lettonie" },
    { code: "+372", flag: "🇪🇪", name: "Estonie" },
    { code: "+353", flag: "🇮🇪", name: "Irlande" },
    { code: "+30", flag: "🇬🇷", name: "Grèce" },
    { code: "+357", flag: "🇨🇾", name: "Chypre" },
    { code: "+356", flag: "🇲🇹", name: "Malte" },
    { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
    { code: "+229", flag: "🇧🇯", name: "Bénin" },
    { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
    { code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire" },
    { code: "+221", flag: "🇸🇳", name: "Sénégal" },
    { code: "+223", flag: "🇲🇱", name: "Mali" },
    { code: "+227", flag: "🇳🇪", name: "Niger" },
    { code: "+228", flag: "🇹🇬", name: "Togo" },
    { code: "+224", flag: "🇬🇳", name: "Guinée" },
    { code: "+245", flag: "🇬🇼", name: "Guinée-Bissau" },
    { code: "+238", flag: "🇨🇻", name: "Cap-Vert" },
    { code: "+220", flag: "🇬🇲", name: "Gambie" },
    { code: "+232", flag: "🇸🇱", name: "Sierra Leone" },
    { code: "+231", flag: "🇱🇷", name: "Libéria" },
    { code: "+233", flag: "🇬🇭", name: "Ghana" },
    { code: "+234", flag: "🇳🇬", name: "Nigeria" },
    { code: "+237", flag: "🇨🇲", name: "Cameroun" },
    { code: "+235", flag: "🇹🇩", name: "Tchad" },
    { code: "+236", flag: "🇨🇫", name: "République centrafricaine" },
    { code: "+242", flag: "🇨🇬", name: "Congo" },
    { code: "+243", flag: "🇨🇩", name: "République démocratique du Congo" },
    { code: "+240", flag: "🇬🇶", name: "Guinée équatoriale" },
    { code: "+241", flag: "🇬🇦", name: "Gabon" },
    { code: "+239", flag: "🇸🇹", name: "Sao Tomé-et-Principe" },
    { code: "+244", flag: "🇦🇴", name: "Angola" },
    { code: "+260", flag: "🇿🇲", name: "Zambie" },
    { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
    { code: "+264", flag: "🇳🇦", name: "Namibie" },
    { code: "+267", flag: "🇧🇼", name: "Botswana" },
    { code: "+268", flag: "🇸🇿", name: "Eswatini" },
    { code: "+266", flag: "🇱🇸", name: "Lesotho" },
    { code: "+27", flag: "🇿🇦", name: "Afrique du Sud" },
    { code: "+258", flag: "🇲🇿", name: "Mozambique" },
    { code: "+265", flag: "🇲🇼", name: "Malawi" },
    { code: "+250", flag: "🇷🇼", name: "Rwanda" },
    { code: "+257", flag: "🇧🇮", name: "Burundi" },
    { code: "+254", flag: "🇰🇪", name: "Kenya" },
    { code: "+255", flag: "🇹🇿", name: "Tanzanie" },
    { code: "+256", flag: "🇺🇬", name: "Ouganda" },
    { code: "+252", flag: "🇸🇴", name: "Somalie" },
    { code: "+253", flag: "🇩🇯", name: "Djibouti" },
    { code: "+251", flag: "🇪🇹", name: "Éthiopie" },
    { code: "+249", flag: "🇸🇩", name: "Soudan" },
    { code: "+211", flag: "🇸🇸", name: "Soudan du Sud" },
    { code: "+212", flag: "🇲🇦", name: "Maroc" },
    { code: "+213", flag: "🇩🇿", name: "Algérie" },
    { code: "+216", flag: "🇹🇳", name: "Tunisie" },
    { code: "+218", flag: "🇱🇾", name: "Libye" },
    { code: "+20", flag: "🇪🇬", name: "Égypte" },
    { code: "+81", flag: "🇯🇵", name: "Japon" },
    { code: "+82", flag: "🇰🇷", name: "Corée du Sud" },
    { code: "+86", flag: "🇨🇳", name: "Chine" },
    { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
    { code: "+853", flag: "🇲🇴", name: "Macao" },
    { code: "+886", flag: "🇹🇼", name: "Taïwan" },
    { code: "+65", flag: "🇸🇬", name: "Singapour" },
    { code: "+60", flag: "🇲🇾", name: "Malaisie" },
    { code: "+66", flag: "🇹🇭", name: "Thaïlande" },
    { code: "+84", flag: "🇻🇳", name: "Vietnam" },
    { code: "+855", flag: "🇰🇭", name: "Cambodge" },
    { code: "+856", flag: "🇱🇦", name: "Laos" },
    { code: "+95", flag: "🇲🇲", name: "Myanmar" },
    { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
    { code: "+91", flag: "🇮🇳", name: "Inde" },
    { code: "+92", flag: "🇵🇰", name: "Pakistan" },
    { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
    { code: "+98", flag: "🇮🇷", name: "Iran" },
    { code: "+964", flag: "🇮🇶", name: "Irak" },
    { code: "+90", flag: "🇹🇷", name: "Turquie" },
    { code: "+7", flag: "🇷🇺", name: "Russie" },
    { code: "+380", flag: "🇺🇦", name: "Ukraine" },
    { code: "+375", flag: "🇧🇾", name: "Biélorussie" },
    { code: "+370", flag: "🇱🇹", name: "Lituanie" },
    { code: "+371", flag: "🇱🇻", name: "Lettonie" },
    { code: "+372", flag: "🇪🇪", name: "Estonie" },
    { code: "+61", flag: "🇦🇺", name: "Australie" },
    { code: "+64", flag: "🇳🇿", name: "Nouvelle-Zélande" },
    { code: "+679", flag: "🇫🇯", name: "Fidji" },
    { code: "+685", flag: "🇼🇸", name: "Samoa" },
    { code: "+676", flag: "🇹🇴", name: "Tonga" },
    { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
    { code: "+687", flag: "🇳🇨", name: "Nouvelle-Calédonie" },
    { code: "+689", flag: "🇵🇫", name: "Polynésie française" },
    { code: "+55", flag: "🇧🇷", name: "Brésil" },
    { code: "+54", flag: "🇦🇷", name: "Argentine" },
    { code: "+56", flag: "🇨🇱", name: "Chili" },
    { code: "+57", flag: "🇨🇴", name: "Colombie" },
    { code: "+51", flag: "🇵🇪", name: "Pérou" },
    { code: "+58", flag: "🇻🇪", name: "Venezuela" },
    { code: "+593", flag: "🇪🇨", name: "Équateur" },
    { code: "+591", flag: "🇧🇴", name: "Bolivie" },
    { code: "+598", flag: "🇺🇾", name: "Uruguay" },
    { code: "+595", flag: "🇵🇾", name: "Paraguay" },
    { code: "+592", flag: "🇬🇾", name: "Guyana" },
    { code: "+597", flag: "🇸🇷", name: "Suriname" },
    { code: "+594", flag: "🇬🇫", name: "Guyane française" },
    { code: "+590", flag: "🇬🇵", name: "Guadeloupe" },
    { code: "+596", flag: "🇲🇶", name: "Martinique" },
    { code: "+262", flag: "🇷🇪", name: "La Réunion" },
    { code: "+262", flag: "🇾🇹", name: "Mayotte" },
    { code: "+590", flag: "🇧🇱", name: "Saint-Barthélemy" },
    { code: "+590", flag: "🇲🇫", name: "Saint-Martin" },
    { code: "+508", flag: "🇵🇲", name: "Saint-Pierre-et-Miquelon" },
    { code: "+262", flag: "🇹🇫", name: "Terres australes françaises" },
    { code: "+262", flag: "🇼🇫", name: "Wallis-et-Futuna" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EF] font-[Inter]">
      {/* HALOS décor */}
      <div className="hidden lg:block absolute -left-40 top-56 w-[520px] h-[520px] rounded-full blur-[70px] opacity-35 pointer-events-none bg-[radial-gradient(closest-side,#FDECEC,transparent_70%)]"></div>
      <div className="hidden lg:block absolute -right-40 bottom-40 w-[520px] h-[520px] rounded-full blur-[70px] opacity-35 pointer-events-none bg-[radial-gradient(closest-side,#FDECEC,transparent_70%)]"></div>

      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <a href="/" className="text-[#770D28] font-medium text-sm sm:text-base">Accueil</a>
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
              <p className="text-center text-lg lg:text-xl font-medium max-w-md leading-7">
                {currentSolution.subtitle}
              </p>
            </div>

            {/* Colonne gauche (formulaires) */}
            <div className="bg-[#FDECEC] px-6 lg:px-10 py-8 lg:py-10 order-2 lg:order-1 relative">
              
              {/* Onglets */}
              <div className="mx-auto mb-7 inline-flex items-center gap-2 bg-[#FDD7D7] rounded-[12px] p-2">
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
                <h2 className="text-center text-[#770D28] font-semibold mb-6 text-2xl">
                  {currentSolution.welcomeText}
                </h2>
              ) : (
                <h2 className="text-center text-[#770D28] font-semibold mb-6 text-2xl">
                  Inscription
                </h2>
              )}

              {/* Form Connexion */}
              {tab === "login" && (
                <form className="max-w-lg mx-auto space-y-5">
                  <div>
                    <label className="block text-base font-medium text-[#770D28] mb-2">Adresse email</label>
                    <input
                      type="email"
                      placeholder="Entrez votre e-mail"
                      className="w-full h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-[#770D28] mb-2">Mot de passe</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Entrez votre mot de passe"
                        className="w-full h-11 rounded-md border border-gray-300 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 px-4 text-gray-500 hover:text-gray-700 transition"
                      >
                        👁️
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <a href="#" className="text-sm text-[#770D28] hover:underline">Mot de passe oublié ?</a>
                  </div>

                  <button type="submit" className="w-full h-11 rounded-md bg-[#770D28] text-white font-medium hover:brightness-110 transition">
                    Connexion
                  </button>

                  <p className="text-sm text-center text-[#2b0a12]">
                    Vous n'avez pas de compte ?{" "}
                    <button type="button" onClick={() => setTab("register")} className="text-[#770D28] font-medium hover:underline">
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
                          className="w-full h-11 rounded-md bg-[#770D28] text-white font-medium hover:brightness-110 transition shadow-sm"
                        >
                          Créer un compte
                        </button>
                        <p className="mt-6 text-sm text-[#2b0a12]">
                          Déjà inscrit ?{" "}
                          <button type="button" onClick={() => setTab("login")} className="text-[#770D28] font-medium hover:underline">
                            Connexion
                          </button>
                        </p>
                      </div>
                    ) : (
                      <form className="space-y-5">
                        <div>
                          <label className="block text-base font-medium text-[#770D28] mb-2">Nom complet</label>
                          <input
                            type="text"
                            placeholder="Votre nom complet"
                            className="w-full h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-base font-medium text-[#770D28] mb-2">Adresse email</label>
                          <input
                            type="email"
                            placeholder="Adresse email"
                            className="w-full h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-base font-medium text-[#770D28] mb-2">Téléphone</label>
                          <div className="flex gap-2">
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                className="h-11 w-24 rounded-md border border-gray-300 px-3 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition bg-white flex items-center justify-between"
                              >
                                <span className="text-sm">
                                  {countries.find(c => c.code === selectedCountry)?.flag} {selectedCountry}
                                </span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              
                              {showCountryDropdown && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto w-80">
                                  {countries.map((country, index) => (
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
                                  ))}
                                </div>
                              )}
                            </div>
                            <input
                              type="tel"
                              placeholder="Votre numéro de téléphone"
                              className="flex-1 h-11 rounded-md border border-gray-300 px-4 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-base font-medium text-[#770D28] mb-2">Mot de passe</label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              placeholder="Mot de passe"
                              className="w-full h-11 rounded-md border border-gray-300 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute inset-y-0 right-0 px-4 text-gray-500 hover:text-gray-700 transition"
                            >
                              👁️
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-base font-medium text-[#770D28] mb-2">Confirmation mot de passe</label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirmer mot de passe"
                              className="w-full h-11 rounded-md border border-gray-300 px-4 pr-12 placeholder-gray-400 focus:outline-none focus:border-[#770D28] focus:ring-1 focus:ring-[#770D28] transition"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute inset-y-0 right-0 px-4 text-gray-500 hover:text-gray-700 transition"
                            >
                              👁️
                            </button>
                          </div>
                        </div>

                        <button type="submit" className="w-full h-11 rounded-md bg-[#770D28] text-white font-medium hover:brightness-110 transition">
                          Inscription
                        </button>

                        <p className="text-sm text-center text-[#2b0a12]">
                          Vous avez déjà un compte ?{" "}
                          <button type="button" onClick={() => setTab("login")} className="text-[#770D28] font-medium hover:underline">
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
      <footer className="py-8 text-center text-sm text-[#770D28]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a className="hover:underline" href="/qui-sommes-nous">À propos de nous</a>
          <a className="hover:underline" href="#">Termes et conditions</a>
          <a className="hover:underline" href="#">Politique de confidentialité</a>
        </div>
        <p className="mt-4 text-sm">© LAHALEX {currentSolution.title} 2025</p>
      </footer>
    </div>
  )
}
