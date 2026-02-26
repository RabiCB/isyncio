import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Check, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"





export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params // 👈 destructure slug
  const product = products.find((p) => p.slug === slug) // 👈 match on slug

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug) // 👈 compare slugs
    .slice(0, 3)

  const savings = product.originalPrice ? product.originalPrice - product.price : 0

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-secondary">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            {product.badge && (
              <Badge className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                {product.badge}
              </Badge>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary">Save ${savings}</Badge>
                </>
              )}
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1 gap-2 rounded-full text-sm font-semibold">Add to Cart - ${product.price}</Button>
              <Button size="lg" variant="outline" className="rounded-full border-border/50 text-sm font-semibold text-foreground hover:bg-secondary">Buy Now</Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card p-4 text-center">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-foreground">Free Shipping</span>
                <span className="text-xs text-muted-foreground">Orders over $50</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card p-4 text-center">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-foreground">2 Year Warranty</span>
                <span className="text-xs text-muted-foreground">Full coverage</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card p-4 text-center">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium text-foreground">30-Day Returns</span>
                <span className="text-xs text-muted-foreground">Hassle free</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-foreground">
              Related Products
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p,index) => (
                <ProductCard key={index} product={p} /> // 👈 key on slug
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}