"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

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
                    <option value="FR">France</option>
                    <option value="BE">Belgique</option>
                    <option value="CH">Suisse</option>
                    <option value="CA">Canada</option>
                    <option value="US">États-Unis</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="SN">Sénégal</option>
                    <option value="MG">Madagascar</option>
                    <option value="MA">Maroc</option>
                    <option value="TN">Tunisie</option>
                    <option value="DZ">Algérie</option>
                    <option value="CM">Cameroun</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="ML">Mali</option>
                    <option value="NE">Niger</option>
                    <option value="TG">Togo</option>
                    <option value="BJ">Bénin</option>
                    <option value="CD">RDC</option>
                    <option value="CG">Congo</option>
                    <option value="GA">Gabon</option>
                    <option value="GN">Guinée</option>
                    <option value="GQ">Guinée équatoriale</option>
                    <option value="CF">Centrafrique</option>
                    <option value="TD">Tchad</option>
                    <option value="MG">Madagascar</option>
                    <option value="ZA">Afrique du Sud</option>
                    <option value="GB">Royaume-Uni</option>
                    <option value="IT">Italie</option>
                    <option value="ES">Espagne</option>
                    <option value="DE">Allemagne</option>
                    <option value="PT">Portugal</option>
                    <option value="NL">Pays-Bas</option>
                    <option value="RU">Russie</option>
                    <option value="CN">Chine</option>
                    <option value="IN">Inde</option>
                    <option value="JP">Japon</option>
                    <option value="BR">Brésil</option>
                    <option value="MX">Mexique</option>
                    <option value="TR">Turquie</option>
                    <option value="EG">Égypte</option>
                    <option value="SA">Arabie Saoudite</option>
                    <option value="AE">Émirats arabes unis</option>
                    <option value="AU">Australie</option>
                    <option value="KR">Corée du Sud</option>
                    <option value="AR">Argentine</option>
                    <option value="CL">Chili</option>
                    <option value="CO">Colombie</option>
                    <option value="PE">Pérou</option>
                    <option value="VE">Venezuela</option>
                    <option value="NG">Nigeria</option>
                    <option value="KE">Kenya</option>
                    <option value="ET">Éthiopie</option>
                    <option value="GH">Ghana</option>
                    <option value="UG">Ouganda</option>
                    <option value="SD">Soudan</option>
                    <option value="PK">Pakistan</option>
                    <option value="ID">Indonésie</option>
                    <option value="PH">Philippines</option>
                    <option value="TH">Thaïlande</option>
                    <option value="VN">Vietnam</option>
                    <option value="MY">Malaisie</option>
                    <option value="SG">Singapour</option>
                    <option value="NZ">Nouvelle-Zélande</option>
                    <option value="IE">Irlande</option>
                    <option value="DK">Danemark</option>
                    <option value="SE">Suède</option>
                    <option value="NO">Norvège</option>
                    <option value="FI">Finlande</option>
                    <option value="PL">Pologne</option>
                    <option value="CZ">République tchèque</option>
                    <option value="AT">Autriche</option>
                    <option value="GR">Grèce</option>
                    <option value="HU">Hongrie</option>
                    <option value="RO">Roumanie</option>
                    <option value="SK">Slovaquie</option>
                    <option value="BG">Bulgarie</option>
                    <option value="HR">Croatie</option>
                    <option value="SI">Slovénie</option>
                    <option value="EE">Estonie</option>
                    <option value="LV">Lettonie</option>
                    <option value="LT">Lituanie</option>
                    <option value="LU">Luxembourg</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="MC">Monaco</option>
                    <option value="SM">Saint-Marin</option>
                    <option value="MT">Malte</option>
                    <option value="IS">Islande</option>
                    <option value="CY">Chypre</option>
                    <option value="QA">Qatar</option>
                    <option value="KW">Koweït</option>
                    <option value="OM">Oman</option>
                    <option value="BH">Bahreïn</option>
                    <option value="JO">Jordanie</option>
                    <option value="LB">Liban</option>
                    <option value="IL">Israël</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Irak</option>
                    <option value="SY">Syrie</option>
                    <option value="YE">Yémen</option>
                    <option value="AF">Afghanistan</option>
                    <option value="NP">Népal</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="MM">Birmanie</option>
                    <option value="KH">Cambodge</option>
                    <option value="LA">Laos</option>
                    <option value="MN">Mongolie</option>
                    <option value="UZ">Ouzbékistan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KG">Kirghizistan</option>
                    <option value="TJ">Tadjikistan</option>
                    <option value="TM">Turkménistan</option>
                    <option value="AZ">Azerbaïdjan</option>
                    <option value="GE">Géorgie</option>
                    <option value="AM">Arménie</option>
                    <option value="MD">Moldavie</option>
                    <option value="UA">Ukraine</option>
                    <option value="BY">Biélorussie</option>
                    <option value="RS">Serbie</option>
                    <option value="ME">Monténégro</option>
                    <option value="AL">Albanie</option>
                    <option value="MK">Macédoine du Nord</option>
                    <option value="BA">Bosnie-Herzégovine</option>
                    <option value="XK">Kosovo</option>
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
                      <option value="+1">+1</option>
                      <option value="+33">+33</option>
                      <option value="+32">+32</option>
                      <option value="+41">+41</option>
                      <option value="+44">+44</option>
                      <option value="+49">+49</option>
                      <option value="+34">+34</option>
                      <option value="+39">+39</option>
                      <option value="+212">+212</option>
                      <option value="+216">+216</option>
                      <option value="+213">+213</option>
                      <option value="+225">+225</option>
                      <option value="+221">+221</option>
                      <option value="+226">+226</option>
                      <option value="+223">+223</option>
                      <option value="+227">+227</option>
                      <option value="+228">+228</option>
                      <option value="+229">+229</option>
                      <option value="+243">+243</option>
                      <option value="+242">+242</option>
                      <option value="+241">+241</option>
                      <option value="+240">+240</option>
                      <option value="+237">+237</option>
                      <option value="+235">+235</option>
                      <option value="+236">+236</option>
                      <option value="+261">+261</option>
                      <option value="+27">+27</option>
                      <option value="+351">+351</option>
                      <option value="+31">+31</option>
                      <option value="+7">+7</option>
                      <option value="+86">+86</option>
                      <option value="+91">+91</option>
                      <option value="+81">+81</option>
                      <option value="+55">+55</option>
                      <option value="+52">+52</option>
                      <option value="+90">+90</option>
                      <option value="+20">+20</option>
                      <option value="+971">+971</option>
                      <option value="+966">+966</option>
                      <option value="+61">+61</option>
                      <option value="+82">+82</option>
                      <option value="+54">+54</option>
                      <option value="+56">+56</option>
                      <option value="+57">+57</option>
                      <option value="+51">+51</option>
                      <option value="+58">+58</option>
                      <option value="+234">+234</option>
                      <option value="+254">+254</option>
                      <option value="+251">+251</option>
                      <option value="+233">+233</option>
                      <option value="+256">+256</option>
                      <option value="+249">+249</option>
                      <option value="+92">+92</option>
                      <option value="+62">+62</option>
                      <option value="+63">+63</option>
                      <option value="+66">+66</option>
                      <option value="+84">+84</option>
                      <option value="+60">+60</option>
                      <option value="+65">+65</option>
                      <option value="+64">+64</option>
                      <option value="+353">+353</option>
                      <option value="+45">+45</option>
                      <option value="+46">+46</option>
                      <option value="+47">+47</option>
                      <option value="+358">+358</option>
                      <option value="+48">+48</option>
                      <option value="+420">+420</option>
                      <option value="+43">+43</option>
                      <option value="+30">+30</option>
                      <option value="+36">+36</option>
                      <option value="+40">+40</option>
                      <option value="+421">+421</option>
                      <option value="+359">+359</option>
                      <option value="+385">+385</option>
                      <option value="+386">+386</option>
                      <option value="+372">+372</option>
                      <option value="+371">+371</option>
                      <option value="+370">+370</option>
                      <option value="+352">+352</option>
                      <option value="+423">+423</option>
                      <option value="+377">+377</option>
                      <option value="+378">+378</option>
                      <option value="+356">+356</option>
                      <option value="+354">+354</option>
                      <option value="+357">+357</option>
                      <option value="+974">+974</option>
                      <option value="+965">+965</option>
                      <option value="+968">+968</option>
                      <option value="+973">+973</option>
                      <option value="+962">+962</option>
                      <option value="+961">+961</option>
                      <option value="+972">+972</option>
                      <option value="+98">+98</option>
                      <option value="+964">+964</option>
                      <option value="+963">+963</option>
                      <option value="+967">+967</option>
                      <option value="+93">+93</option>
                      <option value="+977">+977</option>
                      <option value="+94">+94</option>
                      <option value="+95">+95</option>
                      <option value="+855">+855</option>
                      <option value="+856">+856</option>
                      <option value="+976">+976</option>
                      <option value="+998">+998</option>
                      <option value="+7">+7</option>
                      <option value="+994">+994</option>
                      <option value="+995">+995</option>
                      <option value="+374">+374</option>
                      <option value="+373">+373</option>
                      <option value="+380">+380</option>
                      <option value="+375">+375</option>
                      <option value="+381">+381</option>
                      <option value="+382">+382</option>
                      <option value="+355">+355</option>
                      <option value="+389">+389</option>
                      <option value="+387">+387</option>
                      <option value="+383">+383</option>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    name="motDePasse"
                    value={formData.motDePasse}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmer mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirmerMotDePasse"
                    value={formData.confirmerMotDePasse}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={
                      { "--tw-ring-color": "#770D28" } as React.CSSProperties
                    }
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
                  Créer mon compte LAHALEX
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
