"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

type Job = {
  id: string
  poste: string
  secteur: string
  resume: string
  activites: string[]
  competences: string[]
  aptitudes: string[]
  diplomes: string
}

const JOBS: Job[] = [
  {
    id: "dev",
    poste: "Développeur et ingénieur en informatique",
    secteur: "Informatique",
    resume:
      "Concevoir, développer, tester et maintenir des logiciels et systèmes. Rôle central dans la création et l'amélioration de nos solutions numériques.",
    activites: [
      "Analyser les besoins utilisateurs et métiers",
      "Développer et maintenir des applications Web (et mobiles si besoin)",
      "Concevoir des architectures robustes et scalables",
      "Rédiger la documentation technique",
      "Écrire des tests unitaires et fonctionnels",
    ],
    competences: [
      "Langages : TypeScript/JavaScript, Python, PHP, Java",
      "Frameworks : Next.js/React, Node.js, Symfony/Laravel",
      "Bases de données : PostgreSQL, MySQL, MongoDB",
      "Git/GitHub, CI/CD, bonnes pratiques de code",
      "Sécurité & performance applicative",
    ],
    aptitudes: ["Rigueur", "Esprit d'équipe", "Autonomie", "Résolution de problèmes"],
    diplomes: "Bac+3 à Bac+5 en informatique ou expérience équivalente",
  },
  {
    id: "ia",
    poste: "Spécialiste en Intelligence Artificielle (IA)",
    secteur: "Data/IA",
    resume:
      "Concevoir, entraîner et déployer des modèles d’IA (NLP, classification, RAG) pour améliorer la recherche et l’analyse juridiques.",
    activites: [
      "Préparer des jeux de données propres et équilibrés",
      "Entraîner/évaluer des modèles ML/NLP",
      "Mettre en production (serving, monitoring, A/B testing)",
      "Travailler avec l’équipe produit pour définir les use cases",
    ],
    competences: [
      "Python, PyTorch/TensorFlow, scikit-learn",
      "LLM, embeddings, RAG, vector DB",
      "MLOps : MLflow, Weights & Biases, Docker",
      "Bonne culture data privacy/éthique",
    ],
    aptitudes: ["Curiosité scientifique", "Pédagogie", "Esprit de synthèse"],
    diplomes: "Master/PhD Data/IA ou expérience équivalente",
  },
  {
    id: "juriste",
    poste: "Juriste",
    secteur: "Juridique",
    resume:
      "Produire et valider des contenus juridiques, veiller, analyser et accompagner l’équipe produit sur la conformité.",
    activites: [
      "Rédaction/validation de contenus juridiques",
      "Veille réglementaire et jurisprudentielle",
      "Support aux équipes (produit, data, marketing)",
    ],
    competences: [
      "Excellente maîtrise de l’expression juridique",
      "Capacité d’analyse et de vulgarisation",
      "Outils bureautiques et CMS",
    ],
    aptitudes: ["Fiabilité", "Confidentialité", "Sens du détail"],
    diplomes: "Master en Droit (OHADA apprécié)",
  },
  {
    id: "data",
    poste: "Responsable de la gestion des données",
    secteur: "Data",
    resume:
      "Piloter la qualité, la gouvernance et les flux de données pour garantir l’exactitude et la traçabilité.",
    activites: [
      "Mettre en place la gouvernance et la qualité de données",
      "Superviser les pipelines d’ingestion/traitement",
      "Travailler avec l’IA et le produit sur les besoins data",
    ],
    competences: [
      "SQL/ETL, entrepôts de données",
      "Data catalog, data lineage, qualité",
      "RGPD et sécurité",
    ],
    aptitudes: ["Organisation", "Communication", "Vision système"],
    diplomes: "Bac+5 Data/BI ou expérience équivalente",
  },
  {
    id: "cloud",
    poste: "Architecte Cloud",
    secteur: "Tech/Infra",
    resume:
      "Concevoir des architectures Cloud sécurisées, performantes et économiques (haute dispo, observabilité, CI/CD).",
    activites: [
      "Design d’architectures (réseau, stockage, compute)",
      "Automatisation (IaC) et CI/CD",
      "Sécurité, monitoring, coûts",
    ],
    competences: ["AWS/Azure/GCP", "Terraform/Pulumi", "Docker/Kubernetes", "Sécurité Cloud"],
    aptitudes: ["Leadership technique", "Proactivité", "Fiabilité"],
    diplomes: "Bac+5 ou certifs Cloud reconnues",
  },
  {
    id: "seo",
    poste: "Expert en SEO/Marketing numérique",
    secteur: "Marketing",
    resume:
      "Accroître la visibilité organique et la conversion via SEO, contenu, analytics et campagnes ciblées.",
    activites: [
      "Audit SEO technique/on-page/off-page",
      "Stratégie de contenu & netlinking",
      "Suivi analytics et CRO",
    ],
    competences: ["Search Console, GA4, Semrush", "HTML/CSS basique", "Copywriting"],
    aptitudes: ["Orientation résultats", "Créativité", "Rigueur"],
    diplomes: "Bac+3/5 Marketing/Communication",
  },
  {
    id: "compliance",
    poste: "Responsable de la conformité (Compliance Officer)",
    secteur: "Conformité",
    resume:
      "Définir, déployer et contrôler le dispositif de conformité (RGPD, sécurité, exigences légales sectorielles).",
    activites: [
      "Cartographier les risques de conformité",
      "Formaliser politiques & procédures",
      "Former et contrôler",
    ],
    competences: ["RGPD, sécurité, audit", "Gestion documentaire", "Communication"],
    aptitudes: ["Intégrité", "Discrétion", "Esprit d’analyse"],
    diplomes: "Master Droit/Conformité ou équivalent",
  },
  {
    id: "business",
    poste: "Responsable commercial/Business Development",
    secteur: "Sales",
    resume:
      "Développer le portefeuille clients (B2B), conclure des partenariats et piloter le cycle de vente.",
    activites: [
      "Prospection et qualification",
      "Démos produit, négociation, closing",
      "Pilotage du pipe et reporting",
    ],
    competences: ["Vente B2B SaaS", "CRM (HubSpot, Pipedrive)", "Pitch & négociation"],
    aptitudes: ["Chasseur", "Résilience", "Écoute"],
    diplomes: "Bac+3/5 Commerce ou équivalent",
  },
  {
    id: "communication",
    poste: "Responsable de la communication",
    secteur: "Communication",
    resume:
      "Concevoir la stratégie de communication, gérer la marque, les RP et les réseaux sociaux.",
    activites: [
      "Stratégie de contenu et calendrier éditorial",
      "Gestion des réseaux sociaux et RP",
      "Kits & guidelines de marque",
    ],
    competences: ["Branding, social, rédaction", "Outils design (Figma, Canva)", "Analytics"],
    aptitudes: ["Créativité", "Organisation", "Sens du récit"],
    diplomes: "Bac+3/5 Com/Marketing",
  },
  {
    id: "support",
    poste: "Support client",
    secteur: "Opérations",
    resume:
      "Assister les utilisateurs, résoudre les incidents et nourrir l’amélioration produit par les retours.",
    activites: [
      "Traitement des tickets (mail/chat)",
      "Diagnostic et escalade",
      "Base de connaissances",
    ],
    competences: ["Excellente communication", "Outils helpdesk", "Sens du service"],
    aptitudes: ["Empathie", "Patience", "Pédagogie"],
    diplomes: "Bac+2/3, expérience support appréciée",
  },
  {
    id: "redacteur",
    poste: "Rédacteur de contenu juridique",
    secteur: "Juridique/Contenu",
    resume:
      "Rédiger des articles, notes et fiches pratiques fiables et accessibles pour nos utilisateurs.",
    activites: [
      "Rédaction & mise à jour des contenus",
      "Veille et vérification des sources",
      "Optimisation SEO éditoriale",
    ],
    competences: ["Excellente rédaction", "Méthodologie de recherche", "SEO éditorial"],
    aptitudes: ["Clarté", "Fiabilité", "Sens pédagogique"],
    diplomes: "Master Droit, expérience rédactionnelle",
  },
]

export default function RecrutementPage() {
  const [query, setQuery] = useState("")
  const [detailsId, setDetailsId] = useState<string | null>(null)
  const [applyFor, setApplyFor] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return JOBS
    return JOBS.filter(
      (j) =>
        j.poste.toLowerCase().includes(q) ||
        j.secteur.toLowerCase().includes(q) ||
        j.resume.toLowerCase().includes(q)
    )
  }, [query])

  const jobById = (id: string) => JOBS.find((j) => j.id === id)!

  return (
    <div className="flex flex-col min-h-screen bg-white font-sf-pro">
      <Header />

      <main className="flex-1">
        {/* Titre / intro */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left mb-8">
              <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
                RECRUTEMENT
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 leading-relaxed">
                Nous sommes toujours à la recherche de talents engagés. <br />
                Découvrez nos offres d&apos;emploi ou envoyez une candidature spontanée.
              </p>
            </div>

            {/* Image */}
            <div className="mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-holding-contract-his-new-office-job-after-interview%201-YQaApXjl5pHho5KHue0kud395u2rIF.png"
                alt="Recrutement"
                width={1600}
                height={720}
                unoptimized
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Recherche */}
            <div className="max-w-2xl mx-auto mb-12 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Taper votre recherche"
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#770D28]"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Tableau des offres */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Poste</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 hidden md:table-cell">Secteur</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filtered.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{job.poste}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 hidden md:table-cell">{job.secteur}</td>
                        <td className="px-6 py-4">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setDetailsId(job.id)}
                              className="text-[#770D28] hover:text-[#5a0a1f] text-sm font-medium"
                            >
                              Voir l&apos;offre
                            </button>
                            <button
                              onClick={() => setApplyFor(job.poste)}
                              className="border border-[#770D28] text-[#770D28] px-4 py-2 rounded hover:bg-[#fdf2f8] text-sm"
                            >
                              Postuler
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-6 py-8 text-center text-sm text-gray-500">
                          Aucune offre ne correspond à votre recherche.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Modal détails du poste */}
        {detailsId && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-[#770D28] text-white p-6 flex justify-between items-center">
                <h2 className="font-gobold text-xl">DÉTAILS DU POSTE</h2>
                <button onClick={() => setDetailsId(null)} className="text-white text-2xl font-bold hover:text-gray-200">
                  ×
                </button>
              </div>

              <div className="p-6">
                {(() => {
                  const j = jobById(detailsId)
                  return (
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <tbody>
                        <tr className="border-b border-gray-300">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50 w-48">Poste</td>
                          <td className="p-4">{j.poste}</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Secteur d&apos;activité</td>
                          <td className="p-4">{j.secteur}</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Résumé du poste</td>
                          <td className="p-4">{j.resume}</td>
                        </tr>
                        <tr className="border-b border-gray-300 align-top">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Principales activités</td>
                          <td className="p-4">
                            <ul className="list-disc list-inside space-y-2">
                              {j.activites.map((a, i) => (
                                <li key={i}>{a}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-300 align-top">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Compétences requises</td>
                          <td className="p-4">
                            <ul className="list-disc list-inside space-y-2">
                              {j.competences.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-300 align-top">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Aptitudes</td>
                          <td className="p-4">
                            <ul className="list-disc list-inside space-y-2">
                              {j.aptitudes.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Diplômes</td>
                          <td className="p-4">{j.diplomes}</td>
                        </tr>
                      </tbody>
                    </table>
                  )
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Modal candidature */}
        {applyFor && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
              <div className="p-8">
                <h2 className="text-xl font-medium text-center mb-2">Postuler à l&apos;offre</h2>
                <p className="text-center text-gray-600 mb-8">"{applyFor}"</p>

                <form className="space-y-4">
                  <input type="text" placeholder="Nom" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  <input type="text" placeholder="Prénom" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  <input type="tel" placeholder="Contact téléphonique" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-gray-600" />
                  <div className="flex justify-center gap-4 pt-4">
                    <button type="submit" className="border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg hover:bg-[#fdf2f8]">
                      Envoyer
                    </button>
                    <button type="button" onClick={() => setApplyFor(null)} className="text-gray-600 px-6 py-2">
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
