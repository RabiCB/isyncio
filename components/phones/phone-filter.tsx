"use client"

import { useState, useMemo } from "react"
import { SlidersHorizontal } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

const filterTabs = [
  { id: "all", label: "All Phones" },
  { id: "flagship", label: "Flagship" },
  { id: "gaming", label: "Gaming" },
  { id: "foldable", label: "Foldable" },
  { id: "budget", label: "Budget" },
]

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

function getPhoneTag(productId: string): string {
  if (productId.includes("fold")) return "foldable"
  if (productId.includes("gaming") || productId.includes("rog")) return "gaming"
  if (productId.includes("lite") || productId.includes("budget")) return "budget"
  return "flagship"
}

export function PhoneFilters() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const phoneProducts = products.filter((p) => p.category === "phones")

  const filtered = useMemo(() => {
    let result = phoneProducts

    if (activeFilter !== "all") {
      result = result.filter((p) => getPhoneTag(p.slug) === activeFilter)
    }

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeFilter, sortBy, phoneProducts])

  return (
    <section id="phones-grid" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Phone Collection
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "phone" : "phones"} available
          </p>
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary"
            aria-label="Sort products"
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter phones by type">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeFilter === tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeFilter === tab.id
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "border border-border/60 bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card py-20 text-center">
          <p className="text-lg font-medium text-foreground">No phones in this category</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try selecting a different filter above.
          </p>
        </div>
      )}
    </section>
  )
}
