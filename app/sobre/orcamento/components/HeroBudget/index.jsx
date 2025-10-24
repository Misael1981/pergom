import SubTitle from "@/components/SubTitle"
import Image from "next/image"

const HeroBudget = () => {
  return (
    <section className="bg-hero-gradient p-4 text-white">
      <div className="boxed flex w-full flex-wrap items-center justify-between">
        <div className="w-full space-y-4 lg:w-1/2">
          <SubTitle className="text-yellow-400">Orçamento</SubTitle>
          <h1 className="text-3xl font-bold text-white uppercase">
            CADA GRANDE MARCA COMEÇOU COM UMA CONVERSA
          </h1>
          <p>
            Compartilhe sua visão com a gente queremos entender o que torna sua
            marca única e como podemos elevá-la por meio do design. Em poucos
            cliques, nossa equipe prepara uma proposta completa, transparente e
            personalizada, feita para transformar suas ideias em resultados
            reais.
          </p>
        </div>
        <div className="relative h-[400px] w-full lg:w-1/2">
          <Image
            src="/budget/frame-1.png"
            alt="Orçamento"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBudget
