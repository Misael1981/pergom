import { Phone, Layers, ClipboardList, Handshake } from "lucide-react"
import Image from "next/image"

export default function StepsSection() {
  const steps = [
    {
      icon: "/budget/database.svg",
      text: "1. Analisamos  o seu pedido e retornamos para agendar uma ligação. ",
    },
    {
      icon: "/budget/lecture.svg",
      text: "2. Fazemos uma ligação para entender sua demanda ",
    },
    {
      icon: "/budget/presentation.svg",
      text: "3. Apresentamos a proposta adequada ao tamanho da sua necessidade.",
    },
    {
      icon: "/budget/handshake.svg",
      text: "4. Formalizamos o contrato, pagamento e início das atividades.",
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Título */}
      <div className="mb-10 flex items-center justify-center gap-3 lg:w-[40%]">
        <div className="h-0 w-0 border-t-[8px] border-r-[10px] border-b-[8px] border-t-transparent border-r-blue-600 border-b-transparent"></div>
        <h2 className="text-2xl font-semibold text-gray-900">
          O que acontece depois que você solicita o orçamento
        </h2>
        <div className="h-0 w-0 border-t-[8px] border-b-[8px] border-l-[10px] border-t-transparent border-b-transparent border-l-blue-600"></div>
      </div>

      {/* Linha e etapas */}
      <ul className="flex flex-wrap items-center justify-center gap-12">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex w-[200px] flex-col items-center justify-center gap-2"
          >
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#000ce4]">
              <Image src={step.icon} alt="Logo" width={50} height={50} />
            </div>
            <p className="text-xs font-medium text-gray-900">{step.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
