import Image from "next/image"
import { ArrowRight, Cpu, Battery, Wifi, Weight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const gadgets = [
  {
    id: 1,
    name: "Aero Pro Headphones",
    image: "/images/hero-headphones.jpg",
    badge: "New",
    category: "Audio",
    tagline: "Over-ear wireless with adaptive ANC",
    specs: [
      { icon: Cpu, label: "40mm Drivers" },
      { icon: Battery, label: "40h Battery" },
    ],
    releaseDate: "Jan 2026",
  },
  {
    id: 2,
    name: "Pulse GT Smartwatch",
    image: "/images/smartwatch.jpg",
    badge: "Popular",
    category: "Wearables",
    tagline: "Advanced health tracking with AMOLED display",
    specs: [
      { icon: Cpu, label: "Dual-Core SoC" },
      { icon: Battery, label: "7-Day Battery" },
    ],
    releaseDate: "Dec 2025",
  },
  {
    id: 3,
    name: "Nova X Speaker",
    image: "/images/speaker.jpg",
    badge: null,
    category: "Audio",
    tagline: "360-degree sound in a portable form factor",
    specs: [
      { icon: Wifi, label: "Bluetooth 5.4" },
      { icon: Battery, label: "20h Playback" },
    ],
    releaseDate: "Feb 2026",
  },
  {
    id: 4,
    name: "Phantom Drone V2",
    image: "/images/drone.jpg",
    badge: "Featured",
    category: "Drones",
    tagline: "4K/120fps folding drone with obstacle avoidance",
    specs: [
      { icon: Cpu, label: "4K 120fps" },
      { icon: Weight, label: "249g" },
    ],
    releaseDate: "Feb 2026",
  },
]

function GadgetCard({ gadget }: { gadget: (typeof gadgets)[0] }) {
  return (
    <article className="group relative rounded-2xl bg-card border border-border/50 overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <Image
          src={gadget.image}
          alt={gadget.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {gadget.badge && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
            {gadget.badge}
          </Badge>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium text-primary tracking-wider uppercase">
            {gadget.category}
          </p>
          <span className="text-xs text-muted-foreground">{gadget.releaseDate}</span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-card-foreground">{gadget.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {gadget.tagline}
        </p>

        <div className="mt-4 flex items-center gap-3">
          {gadget.specs.map((spec) => (
            <div key={spec.label} className="flex items-center gap-1.5 rounded-lg bg-secondary/60 px-2.5 py-1.5">
              <spec.icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">{spec.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-end">
          <Button
            size="sm"
            variant="ghost"
            className="gap-1.5 text-primary hover:text-primary hover:bg-primary/10"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </article>
  )
}

export function FeaturedProducts() {
  return (
    <section id="gadgets" className="py-24 lg:py-32" aria-label="Latest gadgets">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-primary tracking-wider uppercase">
              Latest Additions
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Recently Added Gadgets
            </h2>
          </div>
          <Button variant="outline" className="border-border/60 text-foreground hover:bg-secondary gap-2">
            View All Gadgets
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gadgets.map((gadget) => (
            <GadgetCard key={gadget.id} gadget={gadget} />
          ))}
        </div>
      </div>
    </section>
  )
}
