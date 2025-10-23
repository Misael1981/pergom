import Image from "next/image"
import SubTitle from "../SubTitle"

export default function AboutHome() {
  return (
    <section className="boxed p-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
        {/* Título - esquerda (linha 1) */}
        <div className="space-y-4 md:col-start-1 md:row-start-1">
          <div className="space-y-4 py-4">
            <SubTitle className="text-secondary">Sobre a empresa</SubTitle>
            <h3 className="text-2xl font-semibold">
              Todo mundo tem uma história. Essa é a nossa:
            </h3>
          </div>
        </div>

        {/* Imagem - direita (ocupa as duas linhas) */}
        <div className="md:col-start-2 md:row-start-1 md:row-span-2 md:self-start md:justify-self-end">
          <Image
            src="/photo-rodrigo.png"
            alt="Sobre a empresa"
            width={500}
            height={300}
            sizes="(min-width: 768px) 500px, 100vw"
          />
        </div>

        {/* Parágrafos - esquerda (linha 2) */}
        <div className="space-y-2 md:col-start-1 md:row-start-2 lg:text-xs">
          <p>
            Formado como Técnico em Eletrônica, iniciei a faculdade de Engenharia
            de Telecomunicações, mas trancando-a quando descobri minha verdadeira
            paixão: o mundo das criações.
          </p>
          <p>
            Ao longo da minha caminhada, acumulei experiências valiosas que me
            trouxeram até aqui. Fui professor de informática por cerca de 3 anos
            em grandes escolas, além de atuar no sistema FIEMG e SENAC. Foi nesse
            ambiente que despertei para a criatividade, aprendendo e me
            apaixonando por ferramentas como Corel Draw e Photoshop.
          </p>
          <p>
            Buscando aprimoramento, fiz cursos de Cinema 4D, Pacote Adobe, Final
            Cut, além de dezenas de treinamentos em diferentes áreas de criação.
            Atuei como Projetista 3D por 4 anos e Editor de Vídeo na IURD TV
            (Record), além de produtoras de TV, prestando serviços para emissoras
            como SBT e Band, e também em projetos comerciais para a Globo e outras
            redes. Durante vários anos, trabalhei ainda em campanhas políticas de
            grande alcance.
          </p>
          <p>
            No empreendedorismo, tive uma estamparia e fundei uma marca de roupas
            chamada La Selva. Em 2019, após largar dois empregos para cuidar do
            meu pai, enfrentei o desemprego. Foi um momento desafiador, mas que se
            transformou na melhor decisão da minha vida: fundar a PerGom. Comecei
            sozinho, enfrentando anos de luta, milhares de projetos, vitórias e
            fracassos — e tudo isso me trouxe até aqui.
          </p>
          <p>
            Uma experiência marcante foi morar na Inglaterra, onde aprendi muito
            sobre fotografia, filmagem e edição de videoclipes. Ainda assim,
            depois de quase 3 anos estagnado, decidi dar um novo passo segundo a
            direção de Deus: mergulhar no estudo da Inteligência Artificial
            Generativa — o que chamo de “uma faculdade de IA's” — dedicada à
            manipulação de imagens, sons e produtos.
          </p>
          <p>
            Dessa visão nasceu a nova roupagem da PERGOM MÍDIA's, lançada
            oficialmente em 03 de outubro de 2025. Um recomeço, uma nova
            trajetória, com fé, dedicação e inovação.
          </p>
        </div>
      </div>
    </section>
  )
}
