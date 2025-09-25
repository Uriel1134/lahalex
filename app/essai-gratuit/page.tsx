"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import countries from 'world-countries';

export default function EssaiGratuit() {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    statut: "",
    email: "",
    pays: "",
    indicatif: "+33",
    telephone: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    accepterConditions: false,
  });

  // Générer les options de pays avec world-countries
  const countryOptions = countries
    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
    .map(country => ({
      value: country.cca2,
      label: `${country.flag} ${country.name.common}`,
      code: country.cca2
    }))
    .sort((a, b) => a.label.localeCompare(b.label, 'fr'))

  // Générer les options d'indicatifs téléphoniques avec world-countries
  const callingCodeOptions = countries
    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
    .map(country => {
      const callingCode = country.idd.root + (country.idd.suffixes?.[0] || '')
      return {
        value: callingCode,
        label: callingCode,
        code: country.cca2
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label, 'fr'))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
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
              {/* Caractéristiques principales */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-sf-pro text-gray-700">
                    Pendant 5 jours
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-sf-pro text-gray-700">
                    Sans engagement
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#770D28" }}
                  >
                                      <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                  </div>
                  <span className="text-lg font-sf-pro text-gray-700">
                    Conseils et assistance technique
                  </span>
                </div>
              </div>

            </div>

            {/* Section droite - Formulaire d'inscription (visible en premier sur mobile, à droite sur desktop) */}
            <div className="bg-white rounded-lg shadow-lg p-8 order-1 lg:order-2">
              <h2
                className="text-2xl font-gobold mb-8"
                style={{ color: "#770D28" }}
              >
                Ma demande
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="prenoms"
                    placeholder="Votre prénom"
                    value={formData.prenoms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Statut
                  </label>
                  <select
                    name="statut"
                    value={formData.statut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
                  >
                    <option value="">-- Sélectionnez un statut --</option>
                    <option value="avocat">Avocat</option>
                    <option value="notaire">Notaire</option>
                    <option value="commissaire">Commissaire de justice</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pays
                  </label>
                  <select
                    name="pays"
                    value={formData.pays || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all min-w-[120px]"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
                  >
                    <option value="">-- Pays --</option>
                    {countryOptions.map((country) => (
                      <option key={country.code} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de téléphone
                  </label>
                  <div className="flex space-x-2">
                    <select
                      name="indicatif"
                      value={formData.indicatif}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all min-w-[90px]"
                      style={
                        { "--tw-ring-color": "#770D28" } as React.CSSProperties
                      }
                    >
                      <option value="">-- Indicatif --</option>
                      {callingCodeOptions.map((country) => (
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={
                        { "--tw-ring-color": "#770D28" } as React.CSSProperties
                      }
                    />
                  </div>
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
                    <a
                      href="#"
                      className="underline"
                      style={{ color: "#770D28" }}
                    >
                      conditions générales
                    </a>
                    {" et la "}
                    <a
                      href="#"
                      className="underline"
                      style={{ color: "#770D28" }}
                    >
                      politique de confidentialité
                    </a>
                    {"."}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#770D28",
                    border: "2px solid #770D28",
                  }}
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
