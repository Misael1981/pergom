import { Button } from "@/components/ui/button"
import Link from "next/link"

const CtaButton = () => {
  return (
    <div className="mt-8 flex justify-end lg:mt-0">
      <Button variant="secondary" className="">
        <Link href="/sobre/orcamento">Faça um Orçamento</Link>
      </Button>
    </div>
  )
}

export default CtaButton
