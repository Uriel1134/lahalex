"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    indicatif: "+33",
    telephone: "",
    message: "",
  })

  const faqItems = [
    {
      question: "Comment créer un compte sur LAHALEX ?",
      answer:
        'Pour créer un compte sur LAHALEX, cliquez sur "Inscription" en haut à droite de la page, remplissez le formulaire avec vos informations personnelles et professionnelles, puis validez votre inscription.',
    },
    {
      question: "Comment se fait recruter sur LAHALEX ?",
      answer:
        'Pour postuler chez LAHALEX, consultez notre section "Recrutement" où vous trouverez toutes les offres d\'emploi disponibles. Envoyez votre candidature avec CV et lettre de motivation.',
    },
    {
      question: "Comment avoir une abonnement particulier sur LAHALEX ?",
      answer:
        "Pour souscrire à un abonnement personnalisé, contactez notre équipe commerciale qui étudiera vos besoins spécifiques et vous proposera une offre sur mesure adaptée à votre profil professionnel.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#770D28] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gobold text-5xl lg:text-2xl text-white">FAQ</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - FAQ */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous avez une question ?</h2>
                <p className="text-gray-600 mb-8">
                  Veuillez lire les questions ci-dessous et si vous ne trouvez pas votre réponse, envoyez-nous votre
                  question, nous vous répondrons dès que possible.
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-8">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item border border-gray-200 rounded-lg bg-white">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="faq-button w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      <svg
                        className={`faq-icon w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                          openFaq === index ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div
                      className={`faq-content overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 py-8 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Poser votre question</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all duration-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all duration-300"
                />

                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="indicatif"
                    value={formData.indicatif}
                    onChange={handleInputChange}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all duration-300"
                  >
                    <option value="+33">+33</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Votre numéro"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Entrez votre texte"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#770D28] focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-white border-2 border-[#770D28] text-[#770D28] py-3 px-6 rounded-lg font-medium hover:bg-[#770D28] hover:text-white transition-all duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
