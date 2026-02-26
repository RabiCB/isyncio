import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhoneHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.75_0.15_190/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.75_0.15_190/0.05),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-16 md:flex-row md:gap-12 md:py-24 lg:px-8">
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <Smartphone className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              2026 Lineup
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">The Next Generation of</span>{" "}
            <span className="text-primary">Smartphones</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
           foldables, and budget smartphones. Stay ahead with up-to-date coverage of every major 
release — from camera breakdowns to battery life tests.
          </p>

          {/* <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 font-semibold">
              <Link href="#phones-grid">
                Browse All Phones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/60 px-8 font-semibold text-foreground hover:bg-secondary"
            >
              <Link href="#compare">Compare Models</Link>
            </Button>
          </div> */}

          <div className="mt-10 grid grid-cols-3 gap-6 md:gap-10">
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground md:text-3xl">6</p>
              <p className="mt-1 text-xs text-muted-foreground">Models</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground md:text-3xl">5G</p>
              <p className="mt-1 text-xs text-muted-foreground">All Models</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground md:text-3xl">AI</p>
              <p className="mt-1 text-xs text-muted-foreground">Powered</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-square">
            <Image
              src="/images/phone-hero.jpg"
              alt="NEXUS smartphone lineup 2026"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
