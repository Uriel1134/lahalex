"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import countries from 'world-countries'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    indicatif: "+33",
    telephone: "",
    message: "",
  })

  // Générer les options de pays avec world-countries
  const countryOptions = countries
    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
    .map(country => {
      const callingCode = country.idd.root + (country.idd.suffixes?.[0] || '')
      return {
        value: callingCode,
        label: `${country.flag} ${callingCode} ${country.name.common}`,
        code: country.cca2
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label, 'fr'))

  const faqItems = [
    {
      question: "Que faire si je ne reçois pas l'e-mail de confirmation après mon inscription ?",
      answer: "Vérifiez d'abord votre boîte de courriers indésirables (spams). Si vous ne le trouvez pas, contactez notre service d'assistance afin que nous puissions vous renvoyer l'e-mail.",
    },
    {
      question: "Comment procéder si j'ai oublié mon mot de passe ?",
      answer: "Cliquez sur « Mot de passe oublié » sur la page de connexion et suivez les instructions pour en créer un nouveau.",
    },
    {
      question: "Est-il possible d'utiliser mon compte sur plusieurs appareils en même temps ?",
      answer: "Non, cela n'est pas possible : la connexion se coupe automatiquement si le compte est utilisé simultanément sur plusieurs appareils. En revanche, il est possible de souscrire un abonnement multi-comptes, qui permet de bénéficier de réductions.",
    },
    {
      question: "Comment puis-je renouveler mon abonnement une fois arrivé à expiration ?",
      answer: "Rendez-vous dans l'espace abonné de votre compte et procédez directement au paiement. Plusieurs modes de règlement sont disponibles : carte bancaire, virement bancaire, PayPal ou chèque (sur demande, contactez-nous pour recevoir les instructions).",
    },
    {
      question: "Les contenus proposés sur la plateforme Lahalex sont-ils mis à jour régulièrement ?",
      answer: "Oui, ils sont actualisés en continu par nos équipes d'experts.",
    },
    {
      question: "En quoi un abonnement individuel diffère-t-il d'un abonnement institutionnel ?",
      answer: "L'abonnement institutionnel propose un tarif dégressif : plus le nombre d'utilisateurs est important, moins le coût par personne est élevé.",
    },
    {
      question: "Est-il possible de modifier mon abonnement en cours d'année ?",
      answer: "Oui, c'est possible, sauf si vous avez bénéficié d'une réduction exceptionnelle qui bloque toute modification avant l'échéance.",
    },
    {
      question: "Comment obtenir une facture ou un justificatif de paiement pour mon abonnement ?",
      answer: "La facture est envoyée automatiquement par e-mail après le paiement. Si vous ne la trouvez pas, vérifiez vos spams ou contactez-nous.",
    },
    {
      question: "Puis-je bénéficier d'un accompagnement personnalisé pour apprendre à utiliser la plateforme ?",
      answer: "Oui, il suffit de nous contacter pour bénéficier d'un accompagnement sur mesure.",
    },
    {
      question: "Y a-t-il un guide utilisateur ou une rubrique d'aide en ligne disponible ?",
      answer: "Oui, un guide utilisateur ainsi qu'une rubrique d'aide en ligne sont disponibles.",
    },
    {
      question: "Suis-je éligible à un remboursement si j'ai payé un abonnement annuel mais souhaite me rétracter ?",
      answer: "Oui, vous disposez d'un délai de 3 mois pour demander un remboursement. Passé ce délai, aucun remboursement n'est possible.",
    },
    {
      question: "Quand je souscris à un logiciel métier Lahalex (avocat, notaire, commissaire de justice), ai-je droit à une assistance ?",
      answer: "Oui. Une assistance personnalisée est incluse gratuitement pendant les 12 premiers mois. Au-delà de cette période, une participation financière est demandée pour continuer à bénéficier du service d'assistance.",
    },
    {
      question: "Est-ce que les modèles d'actes proposés dans les logiciels métiers sont régulièrement mis à jour ?",
      answer: "Oui. Nos modèles d'actes sont régulièrement revus et actualisés par notre équipe d'experts afin de rester conformes aux évolutions légales et réglementaires.",
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
            <div className="bg-white p-8 ">
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
                    {countryOptions.map((country) => (
                      <option key={country.code} value={country.value}>
                        {country.label}
                      </option>
                    ))}
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
