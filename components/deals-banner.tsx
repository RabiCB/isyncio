import Image from "next/image"
import { ArrowRight, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompareSection() {
  return (
    <section id="compare" className="py-24 lg:py-32" aria-label="Compare gadgets">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50">
          <div className="absolute inset-0">
            <Image
              src="/images/vr-headset.jpg"
              alt="VR headset showcasing immersive technology"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          </div>

          <div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-16">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 w-fit">
                <ArrowLeftRight className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-primary tracking-wider uppercase">
                  Compare Gadgets
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                See How They Stack Up
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Pick any two gadgets and compare their full specifications side by side. From display resolution to battery capacity, see every detail that matters at a glance.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground font-mono">850+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Gadgets Available</div>
                </div>
                <div className="rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground font-mono">50+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Spec Points</div>
                </div>
                <div className="rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground font-mono">12</div>
                  <div className="mt-1 text-xs text-muted-foreground">Categories</div>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-fit h-12 px-8 text-base"
                asChild
              >
                <a href="#compare">
                  Start Comparing
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative h-80 w-80">
                <Image
                  src="/images/vr-headset.jpg"
                  alt="VR headset detail view"
                  fill
                  className="object-contain rounded-2xl"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
