"use client"

import { useState, useEffect } from "react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowConsent(false)
  }

  const handleCustomize = () => {
    // Rediriger vers une page de paramètres de cookies ou ouvrir un modal
    console.log('Personnaliser les cookies')
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 p-4 w-full max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Contenu principal */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Nous utilisons des cookies !
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Bonjour, LAHALEX UNIVERSEL utilise des cookies essentiels pour assurer son bon fonctionnement et des cookies de suivi pour comprendre comment vous interagissez avec lui.{" "}
            <button
              onClick={handleCustomize}
              className="text-[#770D28] underline hover:text-[#5a0a1e] transition-colors"
            >
              Laissez-moi choisir
            </button>
          </p>
        </div>

        {/* Boutons */}
        <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[140px]">
          <button
            onClick={handleAcceptAll}
            className="bg-[#770D28] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5a0a1e] transition-colors text-sm"
          >
            Accepter tout
          </button>
          <button
            onClick={handleRejectAll}
            className="bg-white text-[#770D28] border border-[#770D28] px-4 py-2 rounded-lg font-medium hover:bg-[#770D28] hover:text-white transition-colors text-sm"
          >
            Rejeter tout
          </button>
        </div>
      </div>
    </div>
  )
}
