"use client"

import { useState } from "react"
import Image from "next/image"

export default function UniverselPage() {
  const [tab, setTab] = useState<"login" | "register">("register")
  const [showPassword, setShowPassword] = useState(false)

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
      <main className="flex-1 flex items-center justify-center px-3 sm:px-4 lg:px-6 py-6 lg:py-8">
        <section className="relative w-full max-w-[1100px]">
          <div className="bg-white rounded-[14px] shadow-[0_8px_28px_rgba(0,0,0,.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            
            {/* Colonne droite (logo) => en mobile elle passe AVANT */}
            <div className="bg-[#770D28] text-white flex flex-col items-center justify-center p-8 order-1 lg:order-2">
              <Image src="/logo.png" alt="LAHALEX" width={160} height={160} className="mb-6 select-none" />
              <span className="tracking-widest text-sm opacity-90 mb-3">UNIVERSEL</span>
              <p className="text-center text-lg lg:text-xl font-medium max-w-md leading-7">
                Centralisez le droit, simplifiez la justice
              </p>
            </div>

            {/* Colonne gauche (formulaires) */}
            <div className="bg-[#FDECEC] px-6 lg:px-10 py-8 lg:py-10 order-2 lg:order-1">
              
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
                  Bienvenue sur LAHALEX UNIVERSEL
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
                <div className="max-w-lg mx-auto text-center">
                  <button className="w-full h-11 rounded-md bg-[#770D28] text-white font-medium hover:brightness-110 transition shadow-sm">
                    Créer un compte
                  </button>
                  <p className="mt-6 text-sm text-[#2b0a12]">
                    Déjà inscrit ?{" "}
                    <button type="button" onClick={() => setTab("login")} className="text-[#770D28] font-medium hover:underline">
                      Connexion
                    </button>
                  </p>
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
        <p className="mt-4 text-sm">© LAHALEX UNIVERSEL 2025</p>
      </footer>
    </div>
  )
}
