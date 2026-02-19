import { Cpu, Image as ImageIcon, Layers, ArrowLeftRight } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Full Specifications",
    description: "Every technical detail from processor to battery, laid out clearly so you can compare at a glance.",
  },
  {
    icon: ImageIcon,
    title: "High-Res Galleries",
    description: "See every angle with high-quality images showcasing design, build quality, and key features.",
  },
  {
    icon: Layers,
    title: "Feature Breakdowns",
    description: "Understand what each gadget actually does with our detailed feature-by-feature explainers.",
  },
  {
    icon: ArrowLeftRight,
    title: "Side-by-Side Compare",
    description: "Stack any two gadgets against each other to see exactly how their specs and features differ.",
  },
]

export function Features() {
  return (
    <section className="py-24 lg:py-32 border-y border-border/50" aria-label="What NXGEN offers">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
