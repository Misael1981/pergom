import Image from "next/image"
import SubTitle from "../SubTitle"
import { Card, CardContent } from "../ui/card"
import ThirthTitleClients from "./components/ThirthTitleClients"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const itemsCards = [
  {
    id: 1,
    title: "DuPovo Fitness",
    customerSince: "Cliente há 3 anos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus molestie diam vel mollis. Maecenas risus ipsum, accumsan sed elementum at, rhoncus et diam.",
    image: "/clients/dupovo.png",
  },
  {
    id: 2,
    title: "Mens Sana Terapais",
    customerSince: "Cliente há 5 anos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus molestie diam vel mollis. Maecenas risus ipsum, accumsan sed elementum at, rhoncus et diam.",
    image: "/clients/man-sans.png",
  },
  {
    id: 3,
    title: "Lilyum",
    customerSince: "Cliente há 8 anos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus molestie diam vel mollis. Maecenas risus ipsum, accumsan sed elementum at, rhoncus et diam.",
    image: "/clients/lilyum.png",
  },
  {
    id: 4,
    title: "BHCTG",
    customerSince: "Cliente há 4 anos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus molestie diam vel mollis. Maecenas risus ipsum, accumsan sed elementum at, rhoncus et diam.",
    image: "/clients/bhctg.png",
  },
]

const ClientsHome = () => {
  return (
    <section className="bg-hero-gradient p-4">
      <div className="boxed space-y-4">
        <div className="space-y-4">
          <SubTitle className="text-white">AVALIAÇÃO DOS CLIENTES</SubTitle>
          <ThirthTitleClients />
        </div>
        {/* Cards */}
        <div className="flex gap-4 overflow-auto lg:flex-wrap [&::-webkit-scrollbar]:hidden">
          {itemsCards.map((item) => (
            <div
              key={item.id}
              className="bg-card-foreground w-[300px] max-w-[90%] min-w-[240px] space-y-2 rounded-lg p-2 lg:max-w-[240px]"
            >
              <div className="relative flex h-[150px] w-full items-center justify-center">
                <Image src={item.image} alt={item.title} fill className="" />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.customerSince}</p>
              </div>
              <div className="">
                <p className="text-xs text-gray-700">{item.description}</p>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost text-sm">
                  Veja Completo
                  <ArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="flex justify-end">
          <Button variant="outline" className="rounded-full">
            Veja todos
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ClientsHome
