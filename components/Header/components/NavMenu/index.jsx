import { Button } from "@/components/ui/button"
import Link from "next/link"

const itens = [
  {
    id: 1,
    label: "Inicio",
    href: "/",
  },
  {
    id: 2,
    label: "Serviços",
    href: "/servicos",
  },
  {
    id: 3,
    label: "Clientes",
    href: "/clientes",
  },
  {
    id: 4,
    label: "Sobre",
    href: "/sobre",
  },
]

const NavMenu = () => {
  return (
    <nav className="">
      <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center">
        {itens.map((item) => (
          <li
            key={item.id}
            className="border-b-2 text-lg font-semibold lg:border-b-0 lg:pb-0"
          >
            <Button
              variant="ghost"
              className="hover:text-primary text-white transition-all hover:border-b-4"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
