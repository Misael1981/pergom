import SubTitle from "@/components/SubTitle"
import TitleClients from "../TitleClients"
import Image from "next/image"

const ClientsHero = () => {
  return (
    <section className="p-4">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-full space-y-4 py-6 lg:w-1/2">
          <SubTitle className="text-secondary">AVALIAÇÃO DOS CLIENTES</SubTitle>
          <TitleClients children="QUEM CONFIA," strong="RECOMENDA!" />
          <p>
            Em um mundo onde tudo é avaliado, a opinião de quem já viveu a
            experiência faz toda a diferença. Por isso, reunimos aqui as
            avaliações e feedbacks de clientes que confiaram no nosso trabalho e
            se surpreenderam com os resultados. Veja como estamos transformando
            experiências em recomendações reais.
          </p>
        </div>
        <div>
          <Image
            src="/clients/frame-1.png"
            alt="Foto de clientes avaliando o serviço"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default ClientsHero
