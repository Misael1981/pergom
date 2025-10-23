import ClientsHome from "@/components/ClientsHome"
import HeroSection from "@/components/HeroSection"
import OurServicesHome from "@/components/OurServicesHome"

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col">
      {/* Hero */}
      <HeroSection />
      {/* Our Services */}
      <OurServicesHome />
      {/* Clients */}
      <ClientsHome />
    </main>
  )
}
