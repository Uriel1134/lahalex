import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lahalex - Centralisez le droit, simplifiez la justice",
  description: "Plateforme juridique complète pour professionnels du droit",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (typeof window !== 'undefined') {
    // Log de debug pour vérifier le chargement des polices
    document.fonts?.ready.then(() => {
      const goboldLoaded = document.fonts.check("16px 'Gobold Extra1'") || document.fonts.check("16px 'Gobold_Extra1'")
      const gratelosLoaded = document.fonts.check("16px 'Gratelos'")
      // eslint-disable-next-line no-console
      console.log('[fonts] Gobold Extra1 loaded:', goboldLoaded, '| Gratelos loaded:', gratelosLoaded)
    })
  }
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
