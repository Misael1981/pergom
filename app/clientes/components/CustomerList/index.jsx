"use client"

import { useState } from "react"
import CardsCustomerLists from "../CardsCustomerLists"

const neutral_customers = [
  {
    id: 1,
    image: "/clients/man-sans.png",
    name: "Mens Sana Terapias",
    time: "3 anos",
  },
  {
    id: 2,
    image: "/clients/confraria.png",
    name: "Cachaça Confraria",
    time: "3 anos",
  },
  {
    id: 3,
    image: "/clients/dr-leonardo.png",
    name: "Dr. Leonardo Canhestro",
    time: "3 anos",
  },
  {
    id: 4,
    image: "/clients/mj-joias.png",
    name: "MJ JOIAS",
    time: "3 anos",
  },
  {
    id: 5,
    image: "/clients/dupovo.png",
    name: "DuPovo Fitness",
    time: "3 anos",
  },
  {
    id: 6,
    image: "/clients/lilyum.png",
    name: "LILYUM",
    time: "3 anos",
  },
  {
    id: 7,
    image: "/clients/bhctg.png",
    name: "BHCTG",
    time: "3 anos",
  },
  {
    id: 8,
    image: "/clients/kalimp.png",
    name: "Kalimp",
    time: "3 anos",
  },
  {
    id: 9,
    image: "/clients/f&f.png",
    name: "Fernandes & Freitas",
    time: "3 anos",
  },
]

const distributors_customers = [
  {
    id: 1,
    image: "/clients/default-cards.png",
    name: "Altas Horas",
    time: "3 anos",
  },
  {
    id: 2,
    image: "/clients/default-cards.png",
    name: "Br Atacado",
    time: "3 anos",
  },
  {
    id: 3,
    image: "/clients/default-cards.png",
    name: "Empório Moura",
    time: "3 anos",
  },
  {
    id: 4,
    image: "/clients/default-cards.png",
    name: "Mega Atacarejo",
    time: "3 anos",
  },
  {
    id: 5,
    image: "/clients/default-cards.png",
    name: "Mega Bebidas",
    time: "3 anos",
  },
  {
    id: 6,
    image: "/clients/default-cards.png",
    name: "Rei das Bebidas",
    time: "3 anos",
  },
  {
    id: 7,
    image: "/clients/default-cards.png",
    name: "Distribuidora Santa Luzia",
    time: "3 anos",
  },
  {
    id: 8,
    image: "/clients/default-cards.png",
    name: "Supermercado Bom Preço ",
    time: "3 anos",
  },
  {
    id: 9,
    image: "/clients/default-cards.png",
    name: "Agroferragens São José",
    time: "3 anos",
  },
]

const CustomerList = () => {
  const [active, setActive] = useState("clientes")
  const customers =
    active === "clientes" ? neutral_customers : distributors_customers
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div
        className="relative mb-6 flex w-fit max-w-[90%] items-center overflow-hidden rounded-full border-2 border-blue-700"
        role="tablist"
        aria-label="Filtro de clientes"
      >
        {/* Fundo animado */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-blue-700 transition-all duration-300 ease-in-out ${
            active === "clientes" ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
        />
        {/* Botões */}
        <button
          id="tab-clientes"
          role="tab"
          aria-selected={active === "clientes"}
          aria-controls="customers-panel"
          onClick={() => setActive("clientes")}
          className={`relative z-10 rounded-full px-10 py-2 text-sm font-medium transition-colors duration-300 ${
            active === "clientes" ? "text-white" : "text-blue-700"
          }`}
        >
          Clientes Neutros
        </button>
        <button
          id="tab-mercados"
          role="tab"
          aria-selected={active === "mercados"}
          aria-controls="customers-panel"
          onClick={() => setActive("mercados")}
          className={`relative z-10 rounded-full px-10 py-2 text-sm font-medium transition-colors duration-300 ${
            active === "mercados" ? "text-white" : "text-blue-700"
          }`}
        >
          Distribuidoras & Mercados
        </button>
      </div>
      <div
        id="customers-panel"
        role="tabpanel"
        aria-labelledby={active === "clientes" ? "tab-clientes" : "tab-mercados"}
        className="w-full"
      >
        <CardsCustomerLists key={active} customers={customers} />
      </div>
    </section>
  )
}

export default CustomerList
