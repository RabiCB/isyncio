import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

const compareSpecs = [
  { label: "Display", key: 0 },
  { label: "Processor", key: 1 },
  { label: "Camera", key: 2 },
  { label: "Battery", key: 3 },
]

export function PhoneCompare() {
  const phones = products.filter((p) => p.category === "phones").slice(0, 3)

  return (
    <section id="compare" className="border-t border-border/30 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Side by Side
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Compare Top Models
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            See how our top three phones stack up against each other to find the perfect fit.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] table-fixed">
            <thead>
              <tr>
                <th className="w-1/4 pb-6 text-left text-sm font-medium text-muted-foreground">
                  Specification
                </th>
                {phones.map((phone) => (
                  <th key={phone.slug} className="w-1/4 pb-6 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-secondary">
                        <Image
                          src={phone.image}
                          alt={phone.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-foreground">
                          {phone.name}
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-primary">
                          ${phone.price}
                        </p>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareSpecs.map((spec, idx) => (
                <tr
                  key={spec.label}
                  className={idx < compareSpecs.length - 1 ? "border-b border-border/30" : ""}
                >
                  <td className="py-5 text-sm font-medium text-muted-foreground">
                    {spec.label}
                  </td>
                  {phones.map((phone) => (
                    <td key={phone.slug} className="py-5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">
                          {phone.features[spec.key]}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="border-t border-border/30">
                <td className="py-5 text-sm font-medium text-muted-foreground">
                  In Stock
                </td>
                {phones.map((phone) => (
                  <td key={phone.slug} className="py-5 text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {phone.inStock ? "Available" : "Out of Stock"}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="pt-6" />
                {phones.map((phone) => (
                  <td key={phone.slug} className="pt-6 text-center">
                    <Button asChild size="sm" variant="outline" className="rounded-full border-border/60 px-6 text-foreground hover:bg-secondary">
                      <Link href={`/products/${phone.slug}`}>
                        View Details
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
