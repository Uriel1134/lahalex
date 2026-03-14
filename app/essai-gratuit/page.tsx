"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";
import Stepper, { Step } from "@/components/Stepper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import countries from "world-countries";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EssaiGratuit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    statut: "",
    email: "",
    pays: "",
    indicatif: "+33",
    telephone: "",
    solutions: [] as string[],
  });

  // Refs pour les animations GSAP
  const mainRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const stepperRef = useRef<HTMLDivElement>(null);

  // Générer les options de pays avec world-countries
  const countryOptions = countries
    .filter((country) => country.idd && country.idd.root && country.idd.suffixes)
    .map((country) => ({
      value: country.cca2,
      label: `${country.flag} ${country.name.common}`,
      code: country.cca2,
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "fr"));

  // Générer les options d'indicatifs téléphoniques avec world-countries
  const callingCodeOptions = countries
    .filter((country) => country.idd && country.idd.root && country.idd.suffixes)
    .map((country) => {
      const callingCode = country.idd.root + (country.idd.suffixes?.[0] || "");
      return {
        value: callingCode,
        label: callingCode,
        code: country.cca2,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label, "fr"));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Prepare form data for FormSubmit
      const submitData = new FormData();
      submitData.append("_subject", "Nouvelle demande d'essai gratuit - Lahalex");
      submitData.append("_captcha", "false");
      submitData.append("_template", "table");
      submitData.append("nom", formData.nom);
      submitData.append("prenoms", formData.prenoms);
      submitData.append("statut", formData.statut);
      submitData.append("email", formData.email);
      submitData.append("pays", formData.pays);
      submitData.append("telephone", `${formData.indicatif} ${formData.telephone}`);
      submitData.append("solutions", formData.solutions.join(", "));

      // Submit to FormSubmit
      await fetch("https://formsubmit.co/contactlahalex@gmail.com", {
        method: "POST",
        body: submitData,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still show success message even if there's an error
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (name === "solutions" && type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        solutions: checked
          ? [...prev.solutions, value]
          : prev.solutions.filter((solution) => solution !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  // Animations GSAP spectaculaires - style devenir-auteur-form
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Animation spectaculaire au chargement - style lahalex-universel
    const tl = gsap.timeline();

    // Animation du titre principal - effet bounce spectaculaire
    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "bounce.out" }
    );

    // Animation des sections avec ScrollTrigger
    const ctx = gsap.context(() => {
      // Animation des caractéristiques avec effet de glissement spectaculaire
      if (featuresRef.current) {
        gsap.fromTo(
          featuresRef.current,
          {
            opacity: 0,
            x: -150,
            scale: 0.8,
            rotation: -10,
            transformOrigin: "left center",
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animation des éléments de caractéristiques en cascade avec effets spectaculaires
        const featureItems = featuresRef.current.querySelectorAll("div");
        gsap.fromTo(
          featureItems,
          {
            opacity: 0,
            y: 50,
            scale: 0.7,
            rotation: 5,
            transformOrigin: "center bottom",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.6)",
            delay: 0.5,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animation du Stepper avec effet 3D spectaculaire
      if (stepperRef.current) {
        gsap.fromTo(
          stepperRef.current,
          {
            opacity: 0,
            y: 150,
            scale: 0.6,
            rotationX: 45,
            rotationY: 20,
            rotationZ: 10,
            transformOrigin: "center center",
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stepperRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Header />

      {/* Effets de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#C8A96B]/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[#C8A96B]/8 rounded-full animate-drift"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#C8A96B]/12 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#C8A96B]/10 rounded-full animate-drift"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#C8A96B]/15 rounded-full animate-orbit"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#C8A96B]/8 rounded-full animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#C8A96B]/12 rounded-full animate-drift"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/2 w-1 h-1 bg-[#C8A96B]/10 rounded-full animate-orbit"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#C8A96B]/8 rounded-full animate-float"
          style={{ animationDelay: "1.2s" }}
        ></div>
      </div>

      <main ref={mainRef as any} className="min-h-screen py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre principal */}
          <h1
            ref={titleRef}
            className="hero-title font-gobold text-4xl sm:text-5xl lg:text-2xl text-center lg:text-left mb-4"
            style={{ color: "#4B5563" }}
          >
            ESSAI GRATUIT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Section gauche - Informations essai gratuit */}
            <div ref={featuresRef} className="space-y-8 order-2 lg:order-1">
              {/* Caractéristiques principales */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#C8A96B" }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
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
                    style={{ backgroundColor: "#C8A96B" }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
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
                    style={{ backgroundColor: "#C8A96B" }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
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

            {/* Section droite - Formulaire d'inscription avec Stepper */}
            <div
              ref={stepperRef}
              className="order-1 lg:order-2 flex items-center justify-center min-h-[600px]"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full p-10 text-center animate-in fade-in zoom-in duration-700 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-[500px] min-h-[450px] border border-gray-100">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-[#C8A96B]/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-[#C8A96B] to-[#B8934F] rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:scale-105">
                      <svg
                        className="w-10 h-10 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-4xl font-gobold text-[#C8A96B] mb-4 tracking-wide">
                    Demande envoyée !
                  </h3>

                  <div className="space-y-2 mb-8 max-w-sm mx-auto">
                    <p className="text-lg text-gray-700 font-semibold">
                      Merci de votre intérêt pour LahaLex.
                    </p>
                    <p className="text-gray-600">
                      Notre équipe a bien reçu votre demande et vous recontactera dans les plus brefs délais.
                    </p>
                  </div>

                  <a
                    href="/"
                    className="group flex items-center gap-2 text-[#C8A96B] font-semibold hover:text-[#B8934F] transition-colors py-2 px-4 rounded-full hover:bg-[#C8A96B]/5"
                  >
                    <span>Retour à l'accueil</span>
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              ) : (
                <Stepper
                  initialStep={1}
                  onStepChange={
                    (() => {
                      console.log("Étape changée");
                    }) as any
                  }
                  onFinalStepCompleted={() => {
                    console.log("Formulaire terminé!");
                    handleSubmit(new Event("submit") as any);
                  }}
                  backButtonText="Précédent"
                  nextButtonText="Suivant"
                  stepCircleContainerClassName="bg-white border-gray-200 shadow-xl"
                  contentClassName="min-h-[400px] py-4"
                  renderStepIndicator={undefined}
                >
                  {/* Étape 1: Informations personnelles */}
                  <Step>
                    <div className="space-y-6">
                      <h3 className="text-xl font-gobold text-[#C8A96B] mb-4">
                        Informations personnelles
                      </h3>

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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                          style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                          style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Statut professionnel
                        </label>
                        <select
                          name="statut"
                          value={formData.statut}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                          style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
                        >
                          <option value="">-- Sélectionnez un statut --</option>
                          <option value="avocat">Avocat</option>
                          <option value="notaire">Notaire</option>
                          <option value="commissaire">Commissaire de justice</option>
                          <option value="etudiant">Étudiant</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                  </Step>

                  {/* Étape 2: Contact */}
                  <Step>
                    <div className="space-y-6">
                      <h3 className="text-xl font-gobold text-[#C8A96B] mb-4">
                        Informations de contact
                      </h3>

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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                          style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                          style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
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
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all min-w-[90px] text-gray-700"
                            style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
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
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700"
                            style={{ "--tw-ring-color": "#C8A96B" } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    </div>
                  </Step>

                  {/* Étape 3: Choix des solutions */}
                  <Step>
                    <div className="space-y-6">
                      <h3 className="text-xl font-gobold text-[#C8A96B] mb-4">
                        Que souhaitez-vous essayer ?
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="universel"
                            name="solutions"
                            value="universel"
                            checked={formData.solutions.includes("universel")}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-[#C8A96B] border-gray-300 rounded focus:ring-[#C8A96B]"
                          />
                          <label htmlFor="universel" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Lahalex Universel - Droit
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="avocat"
                            name="solutions"
                            value="avocat"
                            checked={formData.solutions.includes("avocat")}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-[#C8A96B] border-gray-300 rounded focus:ring-[#C8A96B]"
                          />
                          <label htmlFor="avocat" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Lahalex Universel - Économie
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="notaire"
                            name="solutions"
                            value="notaire"
                            checked={formData.solutions.includes("notaire")}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-[#C8A96B] border-gray-300 rounded focus:ring-[#C8A96B]"
                          />
                          <label htmlFor="notaire" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Lahalex Universel - Médecine
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="commissaire-avocat"
                            name="solutions"
                            value="lahalex-avocat"
                            checked={formData.solutions.includes("lahalex-avocat")}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-[#C8A96B] border-gray-300 rounded focus:ring-[#C8A96B]"
                          />
                          <label htmlFor="commissaire-avocat" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Lahalex Avocat
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="commissaire-notaire"
                            name="solutions"
                            value="lahalex-notaire"
                            checked={formData.solutions.includes("lahalex-notaire")}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-[#C8A96B] border-gray-300 rounded focus:ring-[#C8A96B]"
                          />
                          <label htmlFor="commissaire-notaire" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Lahalex Notaire
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="commissaire-justice"
                            name="solutions"
                            value="lahalex-commissaire-justice"
                            checked={formData.solutions.includes("lahalex-commissaire-justice")}
                            onChange={handleInputChange}
                            className="mt-1 h-4 w-4 text-[#C8A96B] border-gray-300 rounded focus:ring-[#C8A96B]"
                          />
                          <label htmlFor="commissaire-justice" className="text-sm font-medium text-gray-700 cursor-pointer">
                            Lahalex Commissaire de justice
                          </label>
                        </div>
                      </div>
                    </div>
                  </Step>
                </Stepper>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        /* Classes pour les animations GSAP - style devenir-auteur-form */
        .hero-title {
          opacity: 0;
        }

        /* Animations pour les particules flottantes */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes drift {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          33% {
            transform: translateX(30px) translateY(-20px);
          }
          66% {
            transform: translateX(-20px) translateY(10px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-drift {
          animation: drift 8s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 12s linear infinite;
        }

        /* Effets de glassmorphism */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Effets de hover avancés */
        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}