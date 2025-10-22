import Image from "next/image"
import ButtonSheetHeader from "./components/ButtonSheetHeader"
import NavMenu from "./components/NavMenu"
import CtaButton from "./components/CtaButton"

const Header = () => {
  return (
    <header className="bg-hero-gradient sticky top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-4 py-2">
        <Image src="/logo.svg" alt="Pergom" width={90} height={90} />
        <div className="hidden lg:flex">
          <NavMenu />
        </div>
        <div className="hidden lg:block">
          <CtaButton />
        </div>
        <ButtonSheetHeader />
      </div>
    </header>
  )
}

export default Header
