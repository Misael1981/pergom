import Image from "next/image"
import Title from "../Title"
import { Button } from "../ui/button"

const itens = [
  "/assets/mens-sana.svg",
  "/assets/confraria.svg",
  "/assets/bhctg.svg",
  "/assets/dupovo.svg",
  "/assets/matheus-joias.svg",
]

// C:\Users\USER\Documents\Projetos-Proprios\pergom\public\assets\bhctg.svg

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient">
      <div className="boxed flex h-[60vh] max-w-[1280px] items-center justify-center">
        <div className="flex h-full flex-1 flex-col justify-around space-y-6 p-4">
          <Title strong="sua" children="marca no próximo nível" />
          <div className="space-y-4">
            <p className="text-white">
              Na Pergom Mídias, unimos criatividade e estratégia para dar vida
              às ideias. Criamos identidades fortes, gerimos redes sociais e
              produzimos conteúdos que conectam marcas e pessoas.
            </p>
            <Button variant="secondary">Saiba mais</Button>
          </div>
          <div className="w-[70%] space-y-2">
            <ul className="flex items-center gap-2">
              {itens.map((item, index) => (
                <li key={index}>
                  <Image src={item} alt="" width={60} height={60} />
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50">
              Já são mais de 30 empresas que confiam na Pergom Mídias para
              impulsionar seus negócios.
            </p>
          </div>
        </div>
        <div className="hidden h-full w-full flex-1 flex-col md:flex">
          <div className="self-end">
            <Image
              src="/assets/student.png"
              alt="Estudante com celular e uma apostila"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-[-120px]">
            <Image
              src="/assets/frame2.png"
              alt="Estudante com celular e uma apostila"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
