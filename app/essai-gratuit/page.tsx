"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function EssaiGratuit() {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    statut: "",
    email: "",
    indicatif: "+33",
    telephone: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    accepterConditions: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EF" }}>
      <Header />

      <main className="min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre principal */}
          <h1
            className="font-gobold text-4xl sm:text-5xl lg:text-2xl text-center lg:text-left mb-4"
            style={{ color: "#000000" }}
          >
            ESSAI GRATUIT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Section gauche - Informations essai gratuit (visible en second sur mobile, à gauche sur desktop) */}
            <div className="space-y-8 order-2 lg:order-1">
              <p className="text-lg text-gray-700 font-sf-pro leading-relaxed">
                Si vous possédez déjà un compte,{" "}
                <a href="/lahalex-connexion" className="underline" style={{ color: "#770D28" }}>
                  connectez-vous
                </a>{" "}
                pour demander votre essai gratuit. Sinon, remplissez le formulaire ci-dessous pour créer un compte et
                bénéficier de votre essai personnalisé.
              </p>

              {/* Caractéristiques principales */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-sf-pro text-gray-700">Pendant 5 jours</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-sf-pro text-gray-700">Accès immédiat</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-sf-pro text-gray-700">Sans engagement</span>
                </div>
              </div>

              {/* Support inclus */}
              <div className="space-y-4">
                <h3 className="text-xl font-gobold" style={{ color: "#770D28" }}>
                  Support inclus :
                </h3>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-sf-pro text-gray-700">Conseils et assistance technique</p>
                    <p className="text-lg font-sf-pro text-gray-700">Session privée de formation sur demande</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section droite - Formulaire d'inscription (visible en premier sur mobile, à droite sur desktop) */}
            <div className="bg-[#FAF5EF] rounded-lg shadow-lg p-8 order-1 lg:order-2">
              <h2 className="text-2xl font-gobold mb-8" style={{ color: "#770D28" }}>
                Formulaire d'inscription
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénoms</label>
                  <input
                    type="text"
                    name="prenoms"
                    placeholder="Vos prénoms"
                    value={formData.prenoms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                  <select
                    name="statut"
                    value={formData.statut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                  >
                    <option value="">-- Sélectionnez un statut --</option>
                    <option value="avocat">Avocat</option>
                    <option value="notaire">Notaire</option>
                    <option value="commissaire">Commissaire de justice</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
                  <div className="flex space-x-2">
                    <select
                      name="indicatif"
                      value={formData.indicatif}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                    >
                      <option value="+33">+33</option>
                      <option value="+44">+44</option>
                      <option value="+1">+1</option>
                    </select>
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="Votre numéro"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                  <input
                    type="password"
                    name="motDePasse"
                    value={formData.motDePasse}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer mot de passe</label>
                  <input
                    type="password"
                    name="confirmerMotDePasse"
                    value={formData.confirmerMotDePasse}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ "--tw-ring-color": "#770D28" } as React.CSSProperties}
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="conditions"
                    name="accepterConditions"
                    checked={formData.accepterConditions}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label htmlFor="conditions" className="text-sm text-gray-700">
                    {"J'accepte les "}
                    <a href="#" className="underline" style={{ color: "#770D28" }}>
                      conditions générales
                    </a>
                    {" et la "}
                    <a href="#" className="underline" style={{ color: "#770D28" }}>
                      politique de confidentialité
                    </a>
                    {"."}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#770D28", border: "2px solid #770D28" }}
                >
                  Créer mon compte LAHALEX
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
