"use client"

import React, { useState } from "react"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

export default function DevenirAuteurForm() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-start">

          {/* Left column (image + content) */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="mb-8 lg:mb-12">
              <img
                src="/images/typewriter.jpg"
                alt="Machine à écrire rouge - Publier chez LAHALEX"
                className="w-full max-w-[680px] mx-auto lg:mx-0 rounded-lg shadow-lg object-cover"
                style={{ aspectRatio: "4 / 3" }}
              />
            </div>

            <section className="space-y-6">
              <h2 className="text-[#770D28] text-2xl lg:text-3xl font-semibold mb-6">Pourquoi publier chez LAHALEX ?</h2>

              <div className="space-y-10 text-gray-800">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Accès à une audience internationale</h3>
                  <p className="text-base leading-relaxed">
                    En publiant sur LAHALEX, vous atteignez un public mondial, vous faisant connaître au-delà de vos
                    frontières, et établissez votre expertise à l'échelle internationale.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Renforcement de l'expertise et crédibilité</h3>
                  <p className="text-base leading-relaxed">
                    Publier régulièrement vous permet de construire une solide réputation en tant qu'expert juridique,
                    en prouvant votre maîtrise des lois et votre capacité à les appliquer.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Renforcement du réseau professionnel</h3>
                  <p className="text-base leading-relaxed">
                    En publiant sur LAHALEX, vous développez des relations avec des experts internationaux, ouvrant la
                    voie à des collaborations et opportunités de travail en réseau.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Opportunités commerciales</h3>
                  <p className="text-base leading-relaxed">
                    Les articles publiés sur LAHALEX servent de vitrine pour vos compétences, attirant des clients
                    potentiels et des opportunités d'affaires internationales.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Contribuez à l'évolution du droit africain</h3>
                  <p className="text-base leading-relaxed">
                    En publiant vos analyses, vous participez activement à l'évolution du droit africain, influençant
                    les débats juridiques et les réformes en cours.
                  </p>
                </div>

              </div>
            </section>
          </div>

          {/* Right column (form) */}
          <aside className="w-full lg:w-96 lg:flex-shrink-0 self-start mt-0 lg:mt-[588px]">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100">
              <h3 className="text-[#770D28] text-xl font-semibold mb-6">Inscrivez-vous</h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="nom">Nom</label>
                  <input
                    id="nom"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="prenom">Prénoms</label>
                  <input
                    id="prenom"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all"
                    placeholder="Vos prénoms"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all"
                    placeholder="Votre email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="tel">Contact téléphonique</label>
                  <div className="flex">
                    <select
                      id="indicatif"
                      className="border border-gray-300 rounded-l-lg px-3 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent"
                      defaultValue={"+225"}
                    >
                      <option value="+225">🇨🇮 +225</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+229">🇧🇯 +229</option>
                      <option value="+221">🇸🇳 +221</option>
                      <option value="+227">🇳🇪 +227</option>
                    </select>
                    <input
                      id="tel"
                      type="tel"
                      className="flex-1 border-t border-b border-r border-gray-300 rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent"
                      placeholder="Ex: 99 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="file">Cliquez ici pour ajouter une pièce</label>
                  <div className="relative">
                    <input
                      id="file"
                      type="file"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#770D28] file:text-white hover:file:bg-[#5e0a20] focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:ring-offset-2"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button type="button" className="text-xs text-gray-600 underline hover:text-[#770D28] transition-colors">Choisir un fichier</button>
                      <span className="text-xs text-gray-500">{file ? file.name : "Aucun fichier choisi"}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all resize-none"
                    rows={4}
                    placeholder="Votre message..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center border-2 border-[#770D28] text-[#770D28] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#fff] focus:outline-none transition-all"
                  >
                    Envoyer
                  </button>
                </div>

              </form>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
