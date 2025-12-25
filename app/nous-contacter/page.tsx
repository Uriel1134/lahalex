"use client";

import { useState } from "react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import countries from 'world-countries';

export default function NousContacter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Générer les options de pays avec world-countries
  const countryOptions = countries
    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
    .map(country => ({
      value: country.cca2,
      label: `${country.flag} ${country.name.common}`,
      code: country.cca2
    }))
    .sort((a, b) => a.label.localeCompare(b.label, 'fr'))

  if (isSubmitted) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-gobold text-[#770D28] mb-4">Message envoyé avec succès !</h2>
            <p className="text-gray-700 font-sf-pro mb-6">
              Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#770D28] text-white font-sf-pro px-6 py-2 rounded-md hover:bg-[#5a0a1e] transition-all"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full mt-20">
        <div className="relative w-[90%] max-w-[1320px] h-[529px] mx-auto">
          <Image
            src="/images/business-meeting.png"
            alt="Hero"
            fill
            className="rounded-2xl object-cover"
          />
          <div className="absolute inset-0 bg-[#770D28]/88 rounded-2xl"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="hero-title text-white font-gobold text-4xl md:text-6xl mb-6">
              NOUS CONTACTER
            </h1>
          </div>
        </div>
      </section>

      {/* Formulaire de contact - version épurée et responsive */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <form
          action="https://formsubmit.co/contactlahalex@gmail.com"
          method="POST"
          className="space-y-8"
          onSubmit={() => setIsSubmitted(true)}
        >
          {/* Hidden FormSubmit fields */}
          <input type="hidden" name="_subject" value="Nouveau contact depuis le site Lahalex" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Prénom*</label>
              <input type="text" name="prenom" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Nom*</label>
              <input type="text" name="nom" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Société*</label>
              <input type="text" name="societe" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Téléphone*</label>
              <input type="tel" name="telephone" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">E-mail professionnel*</label>
            <input type="email" name="email" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Activité*</label>
              <select name="activite" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required>
                <option value="">Veuillez sélectionner</option>
                <option value="Avocat">Avocat</option>
                <option value="Notaire">Notaire</option>
                <option value="Commissaire de justice">Commissaire de justice</option>
                <option value="Juriste">Juriste</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Pays</label>
              <select name="pays" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro">
                <option value="">Sélectionner</option>
                {countryOptions.map((country) => (
                  <option key={country.code} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">Commentaires</label>
            <textarea name="commentaires" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro min-h-[100px]" />
          </div>
          <div className="text-xs text-gray-600 font-sf-pro mb-4">
            LAHALEX peut vous contacter pour vous communiquer des informations sur nos produit, services et événements. Vous pourrez vous désabonner à tout moment via le lien fourni dans nos communications. Pour plus d'information, vous pouvez consulter notre <a href="/politique-confidentialite" className="text-blue-600 underline">politique de confidentialité</a>.
          </div>
          <button type="submit" className="bg-[#770D28] w-full sm:w-auto text-white font-sf-pro px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-[#5a0a1e] transition-all">ENVOYER</button>
          <div className="text-xs text-gray-500 font-sf-pro mt-2">
            Ce site est protégé par reCAPTCHA et la <a href="/politique-confidentialite" className="underline">politique de confidentialité</a> et les <a href="/conditions-generales" className="underline">conditions d'utilisation</a> de Google s'appliquent.
          </div>
        </form>
      </div>



      <Footer />
    </div>
  )
}
