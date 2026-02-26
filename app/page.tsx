import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import {FeaturedProducts} from "@/components/featured-product"
import { Categories } from "@/components/categories"
import { Trending } from "@/components/trending"
import { CompareSection } from "@/components/deals-banner"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter} from "@/components/site-footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NXGEN",
  url: "https://nxgen.tech",
  description:
    "Discover the latest tech gadgets with detailed specifications, features breakdowns, and side-by-side comparisons.",
  publisher: {
    "@type": "Organization",
    name: "NXGEN",
    logo: {
      "@type": "ImageObject",
      url: "https://nxgen.tech/icon.svg",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nxgen.tech/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export default async function Home() {
  
    const res=await fetch('http://127.0.0.1:8000/phones')
    const data=await res.json()
   
  console.log(data)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-background ">
    
        <Hero />
        <Features />
        <FeaturedProducts />
        <Categories />
        <Trending />
        <CompareSection />
        <Testimonials />
        <Newsletter />
        <SiteFooter />
      </main>
    </>
  )
}
