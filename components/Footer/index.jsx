import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const midias = [
  {
    name: "Facebook",
    link: "#",
    image: "/social-midias/facebook.svg",
  },
  {
    name: "Instagram",
    link: "#",
    image: "/social-midias/instagram.svg",
  },
  {
    name: "LinkedIn",
    link: "#",
    image: "/social-midias/linkedin.svg",
  },
  {
    name: "You Tube",
    link: "#",
    image: "/social-midias/youtube.svg",
  },
]

const linksPages = [
  {
    name: "Termos de Serviço",
    link: "/termos-de-servico",
  },
  {
    name: "Politica de Privacidade",
    link: "/politica-de-privacidade",
  },
  {
    name: "Cookie Settings",
    link: "/cookie-settings",
  },
]

const Footer = () => {
  return (
    <footer className="bg-hero-gradient px-4 pt-6 pb-2 text-white">
      <div className="mb-6 flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="Pergom" width={100} height={50} />
        <ul className="flex items-center justify-center gap-2">
          {midias.map((midia) => (
            <li key={midia.name}>
              <Link href={midia.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={midia.image}
                  alt={midia.name}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Pergom Mídias. Todos os direitos
            reservados.
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {linksPages.map((link) => (
              <li key={link.name}>
                <Link href={link.link} className="underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
