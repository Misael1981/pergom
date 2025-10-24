import SubTitle from "@/components/SubTitle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const items = [
  {
    id: 1,
    title: "Atendimento personalizado:",
    description:
      "Cada projeto é único, e é assim que tratamos o seu. Analisamos suas necessidades, objetivos e estilo para criar uma proposta sob medida feita especialmente para o que sua marca realmente precisa.",
  },
  {
    id: 2,
    title: "Equipe especializada:",
    description:
      "Nossa equipe é formada por designers e estrategistas apaixonados por transformar ideias em identidades marcantes. Trabalhamos com técnica, criatividade e visão de mercado.",
  },
  {
    id: 3,
    title: "Prazo e qualidade garantidos:",
    description:
      "Comprometimento é um dos nossos pilares. Entregamos dentro do prazo combinado, mantendo o mais alto padrão de qualidade em cada detalhe do projeto.",
  },
  {
    id: 4,
    title: "Visão estratégica:",
    description:
      " Não criamos apenas algo bonito, desenvolvemos soluções visuais que fortalecem sua marca, conectam com o público e geram resultados reais.",
  },
  {
    id: 5,
    title: "Processo ágil:",
    description:
      "Sabemos que tempo é essencial. Por isso, garantimos um retorno rápido com uma proposta estruturada, direta e fácil de entender, para você avançar sem burocracia.",
  },
  {
    id: 6,
    title: "Parceria contínua:",
    description:
      " Nosso trabalho não termina na entrega. Acompanhamos sua marca em cada etapa, oferecendo suporte, atualizações e novas ideias para continuar crescendo junto com você.",
  },
]

function BudgetForm() {
  return (
    <section className="boxed p-4">
      <div className="space-y-2 py-4">
        <SubTitle>SOLICITE UM ORÇAMENTO </SubTitle>
        <p className="text-lg">Por que solicitar seu orçamento conosco</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <ul className="list-disc space-y-4 pl-4 md:w-1/2">
          {items.map((item) => (
            <li key={item.id} className="list-style-disc">
              <p className="font-bold">{item.title}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="min-h-[400px] w-[400px] max-w-[95%] rounded-2xl border-2 border-[#891af1] p-4 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.35),0_20px_60px_-20px_rgba(137,26,241,0.45)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.45),0_30px_80px_-20px_rgba(137,26,241,0.55)]">
          <form className="flex flex-col justify-between gap-6">
            <Input
              placeholder="Nome..."
              className="bg-gray-200 placeholder:text-black"
            />
            <Input
              placeholder="E-mail..."
              className="bg-gray-200 placeholder:text-black"
            />
            <Input
              placeholder="Telefone..."
              className="bg-gray-200 placeholder:text-black"
            />
            <Select>
              <SelectTrigger className="w-full bg-gray-200">
                <SelectValue
                  placeholder="Qual serviço você deseja?"
                  className="placeholder:text-black"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Designer</SelectItem>
                <SelectItem value="2">Estratégia</SelectItem>
                <SelectItem value="3">Qualidade</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              className="min-h-[200px] bg-gray-200 placeholder:text-black"
              placeholder="Conte-nos sobre a sua empresa..."
            />
            <div className="flex justify-end">
              <Button className="bg-hero-gradient">Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BudgetForm
