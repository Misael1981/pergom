import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import ButtonSheetHeader from "./components/ButtonSheetHeader"
import NavMenu from "./components/NavMenu"
import CtaButton from "./components/CtaButton"

const Header = () => {
  return (
    <header className="w-full">
      <Card className="rounded-none border-none p-0">
        <CardContent className="px-4 py-2">
          <div className="flex items-center justify-between">
            <Image src="/logo.svg" alt="Pergom" width={90} height={90} />
            <div className="hidden lg:flex">
              <NavMenu />
            </div>
            <div className="hidden lg:block">
              <CtaButton />
            </div>
            <ButtonSheetHeader />
          </div>
        </CardContent>
      </Card>
    </header>
  )
}

export default Header
