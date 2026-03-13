"use client";

import { useState } from "react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import countries from "world-countries";

const BRAND_PRIMARY = "#D4C89A";
const BRAND_PRIMARY_DARK = "#B4AB6B";
const BRAND_TEXT = "#111111";
const BRAND_BG = "#FFFFFF";
const BRAND_SOFT = "rgba(212, 200, 154, 0.10)";
const BRAND_SOFT_BORDER = "rgba(212, 200, 154, 0.30)";

export default function NousContacter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countryOptions = countries
    .filter((country) => country.idd && country.idd.root && country.idd.suffixes)
    .map((country) => ({
      value: country.cca2,
      label: `${country.flag} ${country.name.common}`,
      code: country.cca2,
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "fr"));

  if (isSubmitted) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: BRAND_BG }}>
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div
            className="rounded-lg p-8 border"
            style={{
              backgroundColor: BRAND_SOFT,
              borderColor: BRAND_SOFT_BORDER,
            }}
          >
            <svg
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: BRAND_PRIMARY_DARK }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h2
              className="text-2xl font-gobold mb-4"
              style={{ color: BRAND_TEXT }}
            >
              Message envoyé avec succès !
            </h2>

            <p className="text-gray-700 font-sf-pro mb-6">
              Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-black font-sf-pro px-6 py-2 rounded-md transition-all"
              style={{
                background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
              }}
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
    <div className="min-h-screen" style={{ backgroundColor: BRAND_BG }}>
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
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ backgroundColor: "rgba(17, 17, 17, 0.72)" }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="hero-title text-white font-gobold text-4xl md:text-6xl mb-6">
              NOUS CONTACTER
            </h1>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <form
          action="https://formsubmit.co/contactlahalex@gmail.com"
          method="POST"
          className="space-y-8"
          onSubmit={() => setIsSubmitted(true)}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nouveau contact depuis le site Lahalex"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value={typeof window !== "undefined" ? window.location.href : ""}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Prénom*</label>
              <input
                type="text"
                name="prenom"
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Nom*</label>
              <input
                type="text"
                name="nom"
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Société*</label>
              <input
                type="text"
                name="societe"
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Téléphone*</label>
              <input
                type="tel"
                name="telephone"
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">
              E-mail professionnel*
            </label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2"
              style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Activité*</label>
              <select
                name="activite"
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2 bg-white"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              >
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
              <select
                name="pays"
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2 bg-white"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
              >
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
            <textarea
              name="commentaires"
              className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro min-h-[100px] outline-none focus:ring-2"
              style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
            />
          </div>

          <div className="text-xs text-gray-600 font-sf-pro mb-4">
            LAHALEX peut vous contacter pour vous communiquer des informations sur nos
            produit, services et événements. Vous pourrez vous désabonner à tout
            moment via le lien fourni dans nos communications. Pour plus
            d'information, vous pouvez consulter notre{" "}
            <a
              href="/politique-confidentialite"
              className="underline"
              style={{ color: BRAND_PRIMARY_DARK }}
            >
              politique de confidentialité
            </a>
            .
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto text-black font-sf-pro px-8 py-3 rounded-md text-lg font-semibold shadow transition-all"
            style={{
              background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
            }}
          >
            ENVOYER
          </button>

          <div className="text-xs text-gray-500 font-sf-pro mt-2">
            Ce site est protégé par reCAPTCHA et la{" "}
            <a
              href="/politique-confidentialite"
              className="underline"
              style={{ color: BRAND_PRIMARY_DARK }}
            >
              politique de confidentialité
            </a>{" "}
            et les{" "}
            <a
              href="/conditions-generales"
              className="underline"
              style={{ color: BRAND_PRIMARY_DARK }}
            >
              conditions d'utilisation
            </a>{" "}
            de Google s'appliquent.
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}