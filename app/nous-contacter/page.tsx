"use client";

import { useMemo, useState } from "react";
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

type FormDataType = {
  prenom: string;
  nom: string;
  societe: string;
  telephone: string;
  email: string;
  activite: string;
  pays: string;
  indicatif: string;
  commentaires: string;
};

export default function NousContacter() {
  const countryOptions = useMemo(() => {
    return countries
      .filter(
        (country) =>
          country.idd &&
          country.idd.root &&
          country.idd.suffixes &&
          country.idd.suffixes.length > 0
      )
      .map((country) => ({
        value: country.cca2,
        code: country.cca2,
        name: country.name.common,
        label: `${country.flag} ${country.name.common}`,
        dialCode: `${country.idd.root}${country.idd.suffixes[0] || ""}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }, []);

  const beninOption =
    countryOptions.find((country) => country.code === "BJ") || countryOptions[0];

  const initialFormData: FormDataType = {
    prenom: "",
    nom: "",
    societe: "",
    telephone: "",
    email: "",
    activite: "",
    pays: beninOption?.value || "",
    indicatif: beninOption?.dialCode || "",
    commentaires: "",
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const selectedCountry =
    countryOptions.find((country) => country.value === formData.pays) || beninOption;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "pays") {
      const foundCountry = countryOptions.find((country) => country.value === value);

      setFormData((prev) => ({
        ...prev,
        pays: value,
        indicatif: foundCountry?.dialCode || "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        telephone: `${formData.indicatif} ${formData.telephone}`.trim(),
        pays: selectedCountry?.name || formData.pays,
      };

      const response = await fetch("/nous-contacter/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Une erreur est survenue lors de l'envoi.");
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer votre message pour le moment."
      );
    } finally {
      setIsLoading(false);
    }
  };

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
              onClick={() => {
                setIsSubmitted(false);
                setErrorMessage("");
              }}
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

      <section className="relative w-full mt-20">
        <div className="relative w-[90%] max-w-[1320px] h-[529px] mx-auto">
          <Image
            src="/images/business-meeting.png"
            alt="Hero"
            fill
            className="rounded-2xl object-cover"
            priority
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ backgroundColor: "rgba(17, 17, 17, 0.72)" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="hero-title text-white font-gobold text-4xl md:text-6xl mb-6">
              NOUS CONTACTER
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Prénom*</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
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
                value={formData.nom}
                onChange={handleChange}
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
                value={formData.societe}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Téléphone*</label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 bg-white">
                <span
                  className="px-4 py-2 border-r border-gray-300 font-sf-pro text-sm text-gray-700 bg-gray-50 whitespace-nowrap"
                  style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                >
                  {formData.indicatif || "+---"}
                </span>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="01 90 00 00 00"
                  className="w-full px-4 py-2 font-sf-pro outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">
              E-mail professionnel*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
                value={formData.activite}
                onChange={handleChange}
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
              <label className="font-sf-pro text-sm text-gray-700">Pays*</label>
              <select
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro outline-none focus:ring-2 bg-white"
                style={{ ["--tw-ring-color" as any]: BRAND_PRIMARY_DARK }}
                required
              >
                {countryOptions.map((country) => (
                  <option key={country.code} value={country.value}>
                    {country.label} ({country.dialCode})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">Commentaires</label>
            <textarea
              name="commentaires"
              value={formData.commentaires}
              onChange={handleChange}
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

          {errorMessage && (
            <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto text-black font-sf-pro px-8 py-3 rounded-md text-lg font-semibold shadow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: `linear-gradient(to right, ${BRAND_PRIMARY}, ${BRAND_PRIMARY_DARK})`,
            }}
          >
            {isLoading ? "ENVOI EN COURS..." : "ENVOYER"}
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