import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Audio",
    description: "Headphones, speakers & earbuds",
    image: "/images/earbuds.jpg",
    count: 148,
    size: "large" as const,
    link:"/products/audio"
  },
  {
    name: "Laptops",
    description: "Performance meets portability",
    image: "/images/laptop.jpg",
    count: 76,
    size: "small" as const,
    link:"/products/laptops"
  },
  {
    name: "Cameras",
    description: "Mirrorless, action & cinema",
    image: "/images/camera.jpg",
    count: 92,
    size: "small" as const,
    link:"/products/laptops"
  },
  {
    name: "Wearables",
    description: "Smartwatches & fitness trackers",
    image: "/images/smartwatch.jpg",
    count: 124,
    size: "large" as const,
    link:"/products/wearable"
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-24 lg:py-32" aria-label="Browse gadget categories">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-primary tracking-wider uppercase">Browse</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Explore by Category
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Dive into our library of detailed gadget specs and features across every major tech category.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {categories.map((category, index) => (
            <Link href={category.link}
              key={category.name}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 transition-all hover:border-primary/30 ${
                category.size === "large"
                  ? index === 0
                    ? "lg:col-span-2 lg:row-span-2"
                    : "lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >
              <div
                className={`relative ${category.size === "large" ? "aspect-square sm:aspect-auto sm:h-full min-h-[320px]" : "aspect-[4/3] min-h-[240px]"}`}
              >
                <Image
                  src={category.image}
                  alt={`${category.name} gadgets`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    category.size === "large"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                    <p className="mt-2 text-xs font-medium text-primary">
                      {category.count} gadgets
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
