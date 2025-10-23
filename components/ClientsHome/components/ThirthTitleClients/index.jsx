import Image from "next/image"

const ThirthTitleClients = () => {
  return (
    <div className="lg:max-w-[60%]">
      <h3 className="text-2xl font-semibold text-white">
        Histórias{" "}
        <span className="relative inline-block">
          reais
          <Image
            src="/decor.svg"
            alt=""
            aria-hidden="true"
            width={150}
            height={20}
            priority
            className="pointer-events-none absolute top-full left-1/2 mt-[-10px] w-[150px] -translate-x-1/2 md:w-[180px]"
          />
        </span>{" "}
        de marcas que{" "}
        <span className="relative inline-block">
          confiaram em nós
          <Image
            src="/decor.svg"
            alt=""
            aria-hidden="true"
            width={150}
            height={20}
            priority
            className="pointer-events-none absolute top-full left-1/2 mt-[-10px] w-[150px] -translate-x-1/2 md:w-[180px]"
          />
        </span>{" "}
        e cresceram junto com a Pergom.
      </h3>
    </div>
  )
}

export default ThirthTitleClients
