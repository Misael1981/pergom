import Image from "next/image"
import SubTitle from "../SubTitle"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const itensCards = [
  {
    id: 1,
    title: "Artes para Feed",
    image: "/services/social-media.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.",
    href: "#",
  },
  {
    id: 2,
    title: "Stories ",
    image: "/services/video.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.",
    href: "#",
  },
  {
    id: 3,
    title: "Produções com IA ",
    image: "/services/big-data.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.",
    href: "#",
  },
  {
    id: 4,
    title: "Videos de alta qualidade",
    image: "/services/video.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.",
    href: "#",
  },
  {
    id: 5,
    title: "Produtos Personalizados",
    image: "/services/big-data.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus. Nunc porta ipsum et tempor euismod.",
    href: "#",
  },
]

const OurServicesHome = () => {
  return (
    <section className="boxed p-4">
      <div className="space-y-6 py-4">
        <SubTitle className="text-secondary">Nossos Serviços</SubTitle>
        <h3 className="text-2xl font-bold lg:max-w-[60%]">
          Nós da Pergom entregamos à você a maior variedade de serviços
        </h3>
      </div>
      <div className="flex gap-2 overflow-auto py-6 lg:flex-wrap lg:gap-4 [&::-webkit-scrollbar]:hidden">
        {itensCards.map((item) => (
          <div
            key={item.id}
            className="flex max-w-[250px] min-w-[250px] flex-col gap-6"
          >
            <div className="flex w-full justify-center">
              <Image src={item.image} alt={item.title} width={96} height={96} />
            </div>
            <h4 className="text-secondary text-lg font-bold">{item.title}</h4>
            <p className="text-sm">{item.description}</p>
            <a
              href={item.href}
              className="text-blue-900"
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
              }}
            >
              Saiba mais
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="border border-blue-900 text-blue-900"
        >
          Veja todos os serviços
          <ArrowRight />
        </Button>
      </div>
    </section>
  )
}

export default OurServicesHome
