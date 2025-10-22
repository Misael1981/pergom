"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import NavMenu from "../NavMenu"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import CtaButton from "../CtaButton"

const ButtonSheetHeader = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <MenuIcon className="size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-hero-gradient w-[90%] p-4 text-white">
        <div className="flex h-[20vh] items-center justify-center">
          <Image src="/logo.svg" alt="Pergom" width={120} height={120} />
          <VisuallyHidden>
            <SheetTitle>Pergom</SheetTitle>
          </VisuallyHidden>
        </div>
        <NavMenu />
        <CtaButton />
      </SheetContent>
    </Sheet>
  )
}

export default ButtonSheetHeader
