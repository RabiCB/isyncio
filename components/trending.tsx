import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const specs = [
  { value: "40dB", label: "Active Noise Cancellation" },
  { value: "36h", label: "Total Battery Life" },
  { value: "IPX5", label: "Water Resistance" },
  { value: "5ms", label: "Ultra-Low Latency" },
]

export function Trending() {
  return (
    <section id="spotlight" className="py-24 lg:py-32" aria-label="Gadget spotlight">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50">
              <Image
                src="/images/earbuds.jpg"
                alt="Eclipse Wireless Earbuds with charging case"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block">
              <div className="rounded-2xl bg-card border border-border/50 p-6 shadow-2xl shadow-background/50">
                <div className="text-3xl font-bold text-primary font-mono">#1</div>
                <div className="text-sm text-muted-foreground">Most Viewed</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-primary tracking-wider uppercase">Gadget Spotlight</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Eclipse Wireless Earbuds
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Engineered for audiophiles who refuse to compromise. The Eclipse earbuds feature custom 11mm drivers, adaptive ANC with transparency mode, and seamless multipoint connectivity across three devices.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl bg-secondary/50 border border-border/30 p-4"
                >
                  <div className="text-2xl font-bold text-foreground font-mono">{spec.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{spec.label}</div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-12 px-8 text-base"
              asChild
            >
              <a href="#gadgets">
                View Full Specs
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

