import Image from "next/image"

const TitleClients = ({ children, strong }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black uppercase">
        {children}
        <span className="relative inline-block">
          {strong}
          <Image
            src="/decor.svg"
            alt=""
            aria-hidden="true"
            width={180}
            height={50}
            priority
            className="pointer-events-none absolute top-full left-1/2 mt-[-11px] w-[180px] -translate-x-1/2 md:w-[180px]"
          />
        </span>{" "}
      </h1>
    </div>
  )
}

export default TitleClients
