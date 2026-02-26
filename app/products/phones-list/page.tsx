import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PhoneHero } from "@/components/phones/phone-hero"
import { PhoneFilters } from "@/components/phones/phone-filter"
import { PhoneCompare } from "@/components/phones/phones-compare"
import { PhoneList } from "@/components/phones/phone-list"
import { fetchPhones } from "@/lib/api"

export const metadata: Metadata = {
  title: "Phones | NEXUS",
  description:
    "Discover our lineup of flagship, foldable, gaming, and budget-friendly smartphones. Find the perfect phone for your lifestyle.",
}

export default async function PhonesPage() {
  const phones=await fetchPhones()

  console.log(phones)
  return (
    <div className="bg-background">
      
      <main>
        <PhoneHero />
        {/* <PhoneList phones={phones}/> */}
        {/* <PhoneFilters />
        <PhoneCompare /> */}
      </main>
      <SiteFooter />
    </div>
  )
}
