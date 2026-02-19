import Image from "next/image"
import { ArrowRight, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-headphones.jpg"
          alt="Premium wireless headphones showcasing modern tech design"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-primary uppercase">New Gadgets Added Weekly</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance">
            <span className="block">Explore</span>
            <span className="block text-primary">Every</span>
            <span className="block">Detail</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Your complete reference for the latest tech gadgets. Dive deep into specifications, features, design breakdowns, and everything you need to know before making a decision.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 h-12 text-base" asChild>
              <a href="#gadgets">
                Browse Gadgets
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border/60 text-foreground hover:bg-secondary h-12 text-base" asChild>
              <a href="#categories">
                <Layers className="h-4 w-4" />
                All Categories
              </a>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-10">
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">850+</div>
              <div className="text-sm text-muted-foreground">Gadgets Catalogued</div>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">12</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">Daily</div>
              <div className="text-sm text-muted-foreground">New Additions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
