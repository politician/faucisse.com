import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Faucisse - La révolution végétale",
  description:
    "Faucisse est une fausse saucisse, mais une vraie idée. Découvrez notre gamme de saucisses végétales fun et engagées.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
