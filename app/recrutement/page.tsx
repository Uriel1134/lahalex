"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/other-header"
import { Footer } from "@/components/footer"

type Job = {
  id: string
  poste: string
  secteur: string
  pays: string
  resume: string
  activites: string[]
  competences: string[]
  aptitudes?: string[]
  diplomes?: string
}

const JOBS: Job[] = [
  {
    id: "dev-fullstack",
    poste: "Développeur Full Stack (Front-end & Back-end)",
    secteur: "LegalTech / Développement logiciel SaaS",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le développeur full stack participe à la conception, au développement et à la maintenance des solutions numériques de LAHALEX. Il intervient sur l'ensemble de la chaîne technique, du front-end au back-end, afin de garantir la performance, la sécurité et l'ergonomie des logiciels métiers.",
    activites: [
      "Concevoir et développer des applications web et SaaS (front & back)",
      "Participer à l'architecture technique et à l'intégration des fonctionnalités",
      "Collaborer avec les juristes et analystes pour traduire les besoins métier en solutions digitales",
      "Assurer la maintenance corrective et évolutive des solutions",
      "Mettre en œuvre des tests, assurer la sécurité et optimiser les performances",
    ],
    competences: [
      "Maîtrise des langages front-end (HTML, CSS, JavaScript/TypeScript, frameworks type React, Vue, Angular)",
      "Maîtrise des langages back-end (Node.js, Python, PHP, Java, etc.)",
      "Bonne connaissance des bases de données (SQL, NoSQL)",
      "Expérience avec les API, microservices et architectures SaaS",
      "Sens de l'innovation, autonomie et travail en équipe",
    ],
  },
  {
    id: "resp-communication",
    poste: "Responsable communication / Chargé de communication",
    secteur: "Communication / Marketing / Médias – LegalTech & Édition",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le responsable communication définit et met en œuvre la stratégie de communication interne et externe de l'organisation. Il valorise l'image de marque, développe la visibilité sur les différents canaux (presse, réseaux sociaux, web) et veille à la cohérence des messages.",
    activites: [
      "Élaborer et mettre en place la stratégie de communication",
      "Gérer les relations presse et partenariats institutionnels",
      "Créer du contenu (articles, visuels, vidéos, communiqués)",
      "Développer et animer la présence digitale (site web, réseaux sociaux)",
      "Assurer la communication interne (newsletters, événements)",
    ],
    competences: [
      "Excellente maîtrise de l'expression écrite et orale",
      "Connaissance des outils de communication digitale et des médias sociaux",
      "Créativité et sens de l'innovation",
      "Organisation, rigueur et capacité de gestion de projet",
      "Connaissance du secteur juridique est un atout",
    ],
  },
  {
    id: "assistant-admin",
    poste: "Assistant administratif / Secrétaire exécutif",
    secteur: "Administration / Gestion – Support aux métiers du droit et de la technologie",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "L'assistant administratif assure la gestion quotidienne des tâches administratives et le soutien organisationnel des équipes dirigeantes. Il veille à la bonne circulation de l'information et à l'efficacité des opérations internes.",
    activites: [
      "Gérer les courriers, mails, appels et agendas",
      "Préparer et suivre les dossiers administratifs",
      "Organiser les réunions, rédiger les comptes rendus",
      "Gérer les déplacements, événements et agendas de direction",
      "Assurer l'archivage et la gestion documentaire",
    ],
    competences: [
      "Maîtrise des outils bureautiques (Word, Excel, PowerPoint)",
      "Sens de l'organisation et rigueur administrative",
      "Discrétion, confidentialité et polyvalence",
      "Bonnes capacités rédactionnelles",
      "Maîtrise du français écrit et oral ; l'anglais est un plus",
    ],
  },
  {
    id: "resp-comptable",
    poste: "Responsable comptable / Comptable",
    secteur: "Comptabilité / Finance – LegalTech & Édition",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le responsable comptable supervise la comptabilité générale, garantit la fiabilité des comptes et veille au respect des obligations fiscales et sociales. Le comptable, quant à lui, assure l'enregistrement et le suivi des opérations financières.",
    activites: [
      "Tenir et contrôler la comptabilité générale et analytique",
      "Établir les déclarations fiscales et sociales",
      "Suivre la trésorerie et les budgets",
      "Préparer les bilans et comptes de résultat",
      "Conseiller la direction sur les aspects financiers",
    ],
    competences: [
      "Maîtrise des logiciels comptables et bureautiques",
      "Connaissance de la législation comptable, fiscale et sociale",
      "Capacité d'analyse et de synthèse",
      "Rigueur, organisation et sens des responsabilités",
      "Discrétion et intégrité professionnelle",
    ],
  },
  {
    id: "juriste-articles",
    poste: "Juriste – Rédacteur d'articles juridiques",
    secteur: "Édition juridique / LegalTech / Communication juridique",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le juriste rédacteur d'articles produit des contenus juridiques destinés à l'information et à la vulgarisation. Il contribue à rendre le droit accessible aux professionnels et au grand public.",
    activites: [
      "Rédiger des articles juridiques",
      "Effectuer des recherches documentaires et jurisprudentielles",
      "Vulgariser les textes juridiques pour différents publics",
      "Collaborer avec l'équipe éditoriale et communication",
    ],
    competences: [
      "Solides connaissances en droit régional africain, droit national, droit international",
      "Excellentes capacités rédactionnelles et pédagogiques",
      "Aptitude à vulgariser des notions juridiques complexes",
      "Rigueur intellectuelle et esprit critique",
      "Bonne maîtrise des outils numériques et de publication",
    ],
  },
  {
    id: "juriste-actes",
    poste: "Juriste – Rédacteur d'actes juridiques",
    secteur: "Services juridiques / LegalTech",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le juriste rédacteur d'actes élabore et sécurise les contrats, conventions et actes juridiques pour l'entreprise et ses clients. Il garantit leur conformité aux règles légales et réglementaires.",
    activites: [
      "Rédiger et mettre à jour les contrats et actes juridiques",
      "Vérifier la conformité avec les textes législatifs et réglementaires",
      "Conseiller la direction et les clients sur la sécurité juridique",
      "Participer à la négociation et à la validation des accords",
      "Assurer la veille juridique en lien avec les contrats",
    ],
    competences: [
      "Rigueur juridique et sens du détail",
      "Capacité de rédaction claire et précise",
      "Compétences en analyse et en conseil",
      "Discrétion et éthique professionnelle",
    ],
  },
  {
    id: "juriste-ohada",
    poste: "Juriste – Spécialiste du droit OHADA",
    secteur: "Droit des affaires / OHADA / LegalTech",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le juriste spécialiste en droit OHADA apporte une expertise pointue sur l'interprétation et l'application des Actes uniformes et des décisions de la CCJA.",
    activites: [
      "Analyser et interpréter les Actes uniformes OHADA",
      "Conseiller sur les questions de droit des sociétés, droit commercial, procédures collectives, sûretés, etc.",
      "Rédiger des études, mémos et notes de synthèse",
      "Former et sensibiliser les étudiants et professionnels au droit OHADA",
      "Participer au développement d'outils LegalTech dédiés",
    ],
    competences: [
      "Maîtrise approfondie du droit OHADA",
      "Solides capacités d'analyse juridique",
      "Excellente rigueur méthodologique",
      "Pédagogie et capacité de transmission",
      "Esprit de recherche et innovation juridique",
    ],
  },
  {
    id: "juriste-generaliste",
    poste: "Juriste généraliste / Juriste polyvalent",
    secteur: "Services juridiques / Entreprise / LegalTech",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le juriste généraliste intervient sur l'ensemble des problématiques juridiques de l'organisation, couvrant plusieurs branches du droit afin d'apporter un soutien complet et polyvalent.",
    activites: [
      "Conseiller la direction et les équipes sur les questions juridiques diverses",
      "Rédiger et analyser des contrats, conventions et notes",
      "Assurer la veille réglementaire et jurisprudentielle",
      "Participer à la gestion des contentieux",
      "Collaborer avec les prestataires externes (avocats, notaires, experts)",
    ],
    competences: [
      "Bonne maîtrise des principaux domaines du droit (civil, commercial, travail, sociétés)",
      "Capacité d'adaptation et polyvalence",
      "Esprit analytique et rigueur juridique",
      "Solides qualités rédactionnelles",
      "Sens de la confidentialité et de l'éthique",
    ],
  },
  {
    id: "directeur-executif",
    poste: "Directeur exécutif",
    secteur: "LegalTech / Management / Développement stratégique et opérationnel",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le Directeur exécutif est responsable de la direction et de la coordination des activités de LAHALEX dans un pays donné. Il supervise l'ensemble des opérations locales, gère les équipes sur place et assure le suivi des relations avec les plus gros clients et partenaires stratégiques.",
    activites: [
      "Définir et piloter la stratégie opérationnelle de LAHALEX dans son pays de gestion",
      "Superviser, encadrer et motiver les équipes locales (juristes, développeurs, commerciaux, support technique, etc.)",
      "Assurer la gestion et la fidélisation des clients stratégiques et grands comptes",
      "Représenter l'entreprise auprès des partenaires institutionnels, académiques et commerciaux",
      "Suivre les indicateurs de performance (KPI) et rendre compte à la Direction générale",
      "Veiller à la bonne application des standards et méthodes de LAHALEX (qualité, conformité, innovation)",
      "Identifier les opportunités de développement et mettre en place des actions de croissance",
      "Gérer les aspects administratifs et financiers du bureau local, en coordination avec la direction centrale",
    ],
    competences: [
      "Excellentes capacités en management d'équipe et leadership",
      "Sens aigu de la gestion des clients grands comptes",
    ],
  },
  {
    id: "analyste-veille",
    poste: "Analyste en veille juridique",
    secteur: "LegalTech / Droit & Technologies de l'information",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "L'analyste en veille juridique est chargé d'identifier, collecter, analyser et synthétiser les évolutions législatives, réglementaires et jurisprudentielles. Il fournit des informations stratégiques permettant aux professionnels et aux étudiants d'accéder à un droit actualisé et fiable.",
    activites: [
      "Assurer une veille quotidienne sur les textes officiels, jurisprudences et réformes",
      "Élaborer des notes de synthèse claires et structurées",
      "Alimenter la base de données juridique de LAHALEX",
      "Collaborer avec les développeurs pour intégrer les informations dans les logiciels métiers",
      "Proposer des analyses prospectives sur les évolutions du droit",
    ],
    competences: [
      "Excellente maîtrise du droit (droit OHADA, droit national, droit international)",
      "Solides capacités d'analyse et de synthèse",
      "Bonne connaissance des outils de veille documentaire et juridique",
      "Rigueur, esprit critique et sens de la confidentialité",
      "Maîtrise du français juridique ; l'anglais est un atout",
    ],
  },
  {
    id: "resp-etudes-doctrine",
    poste: "Responsable des études et de la doctrine juridique",
    secteur: "Droit / Recherche juridique / Doctrine / Édition juridique / LegalTech",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le Responsable des études et de la doctrine juridique pilote la production intellectuelle et scientifique dans le domaine du droit. Il coordonne la rédaction, l'analyse et la diffusion d'articles, de notes et d'études juridiques destinées à enrichir la doctrine.",
    activites: [
      "Superviser et coordonner la production d'études juridiques, de notes doctrinales et de commentaires de jurisprudence",
      "Conduire des recherches approfondies sur les évolutions législatives, réglementaires et jurisprudentielles",
      "Rédiger ou valider des articles, chroniques, mémorandums et rapports spécialisés",
      "Encadrer une équipe de juristes, chercheurs et rédacteurs",
      "Assurer la diffusion des travaux (revues juridiques, plateformes digitales, colloques, séminaires)",
      "Participer à la construction et à l'orientation de la stratégie éditoriale et doctrinale",
      "Représenter l'organisation dans les événements académiques et professionnels",
      "Contribuer à la veille juridique et doctrinale pour anticiper les tendances",
    ],
    competences: [
      "Excellente maîtrise des différentes branches du droit",
      "Capacités confirmées en recherche, analyse et synthèse juridique",
      "Compétences rédactionnelles de haut niveau (clarté, précision, rigueur)",
      "Bonne connaissance des méthodes de publication scientifique et juridique",
      "Aptitudes au management et à la coordination d'équipes",
      "Esprit critique, méthodologie et sens de la pédagogie",
      "Maîtrise des outils numériques de recherche et de diffusion de la doctrine",
      "Ouverture intellectuelle et capacité à vulgariser des sujets complexes",
    ],
  },
  {
    id: "chef-produit",
    poste: "Chef de produit / Responsable produit",
    secteur: "LegalTech / Développement de logiciels juridiques / Innovation technologique",
    pays: "Togo, Sénégal, Niger, Côte d'Ivoire",
    resume:
      "Le Chef de produit (ou Responsable produit) est chargé de piloter la stratégie, la conception, l'évolution et la gestion des produits numériques juridiques de LAHALEX, notamment LAHALEX AVOCAT, LAHALEX NOTAIRE et LAHALEX COMMISSAIRE DE JUSTICE.",
    activites: [
      "Définir et mettre en œuvre la stratégie produit en fonction des besoins des utilisateurs et des objectifs de l'entreprise",
      "Superviser la conception, l'évolution et l'amélioration des logiciels LAHALEX (Avocat, Notaire, Commissaire de justice)",
      "Recueillir, analyser et prioriser les besoins clients (avocats, notaires, juristes, etc.)",
      "Assurer le suivi des retours clients et proposer des améliorations continues",
      "Rédiger les cahiers des charges et spécifications fonctionnelles en collaboration avec les développeurs",
      "Suivre le cycle de vie des produits : conception, lancement, mise à jour, support",
      "Réaliser des benchmarks et une veille concurrentielle sur les LegalTech locales et internationales",
      "Former les équipes commerciales et assurer la promotion des produits auprès des clients et partenaires",
      "Contribuer à la stratégie de diffusion des produits et accompagner leur adoption par les utilisateurs",
    ],
    competences: [
      "Excellente compréhension du secteur juridique (avocats, notaires, commissaires de justice, juristes)",
      "Compétences confirmées en gestion de projet et en méthodologie agile",
      "Capacité d'analyse et de formalisation des besoins utilisateurs",
      "Compétences en communication et en vulgarisation technique et juridique",
      "Esprit d'innovation, sens de l'écoute et orientation client",
      "Capacité à travailler en transversalité avec des équipes pluridisciplinaires (technique, juridique, commerciale)",
    ],
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
        j.poste.toLowerCase().includes(q) || j.secteur.toLowerCase().includes(q) || j.resume.toLowerCase().includes(q),
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
              <h1 className="font-gobold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 text-[#770D28]">RECRUTEMENT</h1>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Tableau des offres */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Poste</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 hidden md:table-cell">
                        Secteur
                      </th>
{/*                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 hidden lg:table-cell">
                        Pays
                      </th>*/}
                      <th className="px-6 py-4 text-right text-sm font-medium text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filtered.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{job.poste}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 hidden md:table-cell">{job.secteur}</td>
{/*                        <td className="px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">{job.pays}</td>*/}
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
                        <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
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
                <button
                  onClick={() => setDetailsId(null)}
                  className="text-white text-2xl font-bold hover:text-gray-200"
                >
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
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">
                            Secteur d&apos;activité
                          </td>
                          <td className="p-4">{j.secteur}</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Pays</td>
                          <td className="p-4">{j.pays}</td>
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
                        {j.aptitudes && (
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
                        )}
                        {j.diplomes && (
                          <tr>
                            <td className="border-r border-gray-300 p-4 font-medium bg-gray-50">Diplômes</td>
                            <td className="p-4">{j.diplomes}</td>
                          </tr>
                        )}
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
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Contact téléphonique"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-gray-600" />
                  <div className="flex justify-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="border border-[#770D28] text-[#770D28] px-6 py-2 rounded-lg hover:bg-[#fdf2f8]"
                    >
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
