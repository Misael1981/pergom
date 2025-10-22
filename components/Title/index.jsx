import Image from "next/image"

const Title = ({ children, strong }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white uppercase">
        <span className="relative inline-block">
          <strong className="relative z-10">{strong}</strong>
          <Image
            src="/decor-title.svg"
            alt=""
            aria-hidden="true"
            width={140}
            height={20}
            priority
            className="pointer-events-none absolute top-full left-1/2 mt-[-10px] w-[140px] -translate-x-1/2 md:w-[180px]"
          />
        </span>{" "}
        {children}
      </h1>
    </div>
  )
}

export default Title
