import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="inicio" className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Presença digital que impulsiona seu negócio
            </h1>
            <p className="text-muted-foreground text-lg">
              Landing page rápida, moderna e objetiva. Sem banco de dados, sem
              complicação: foco total na conversão.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#contato">Fale com a gente</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="#servicos">Saiba mais</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-lg">
            <div className="bg-card/50 grid aspect-video place-items-center rounded-lg border">
              <Image
                src="/window.svg"
                alt="Demonstração"
                width={320}
                height={160}
                className="opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="servicos" className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            O que você recebe
          </h2>
          <p className="text-muted-foreground">
            Essenciais para uma landing eficaz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card rounded-lg border p-5">
            <Image src="/next.svg" alt="Performance" width={28} height={28} />
            <h3 className="mt-4 font-semibold">Performance</h3>
            <p className="text-muted-foreground">
              Carregamento rápido com Next.js.
            </p>
          </div>
          <div className="bg-card rounded-lg border p-5">
            <Image src="/globe.svg" alt="Responsivo" width={28} height={28} />
            <h3 className="mt-4 font-semibold">Responsivo</h3>
            <p className="text-muted-foreground">
              Perfeito em qualquer dispositivo.
            </p>
          </div>
          <div className="bg-card rounded-lg border p-5">
            <Image src="/file.svg" alt="SEO" width={28} height={28} />
            <h3 className="mt-4 font-semibold">SEO básico</h3>
            <p className="text-muted-foreground">
              Estrutura pronta para indexação.
            </p>
          </div>
          <div className="bg-card rounded-lg border p-5">
            <Image src="/vercel.svg" alt="Deploy" width={28} height={28} />
            <h3 className="mt-4 font-semibold">Deploy fácil</h3>
            <p className="text-muted-foreground">
              Pronto para publicar na Vercel.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Sobre a Pergom
            </h2>
            <p className="text-muted-foreground">
              Criamos experiências digitais objetivas e alinhadas ao seu
              posicionamento. Projetos simples, com foco em resultado e
              manutenção fácil.
            </p>
            <p className="text-muted-foreground">
              A landing page é ideal para campanhas, lançamentos e validações
              rápidas — sem a complexidade de sistemas completos.
            </p>
          </div>
          <div className="bg-card rounded-lg border p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border p-4">
                <p className="text-muted-foreground text-sm">
                  Tempo de entrega
                </p>
                <p className="mt-1 font-semibold">Rápido</p>
              </div>
              <div className="rounded-md border p-4">
                <p className="text-muted-foreground text-sm">Customizações</p>
                <p className="mt-1 font-semibold">Sob medida</p>
              </div>
              <div className="rounded-md border p-4">
                <p className="text-muted-foreground text-sm">Manutenção</p>
                <p className="mt-1 font-semibold">Descomplicada</p>
              </div>
              <div className="rounded-md border p-4">
                <p className="text-muted-foreground text-sm">Hospedagem</p>
                <p className="mt-1 font-semibold">Vercel ou sua preferência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-card space-y-4 rounded-xl border p-8 text-center md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Vamos construir sua landing?
          </h2>
          <p className="text-muted-foreground">
            Envie uma mensagem e retornamos com um orçamento objetivo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="mailto:contato@pergom.com">contato@pergom.com</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t">
        <div className="text-muted-foreground container mx-auto flex items-center justify-between px-4 py-6 text-sm">
          <span>© {new Date().getFullYear()} Pergom</span>
          <div className="flex gap-4">
            <Link href="#sobre" className="hover:text-primary">
              Sobre
            </Link>
            <Link href="#contato" className="hover:text-primary">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
