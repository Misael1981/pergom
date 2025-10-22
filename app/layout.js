import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "Pergom — Mídias",
  description: "Sua marca no próximo nível",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  )
}
