"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import {
  ArrowLeft, Heart, Share2, ChevronRight, ShoppingBag, Check, Cpu, Camera, Battery, Shield, Wifi, Zap
} from "lucide-react"



interface Phone {
  name: string
  tagline: string
  brand: string
  slug: string
  rating: number
  reviewCount: number
  price: number
  originalPrice: number
  badge: string
  colors: { name: string; hex: string; border: string }[]
  storage: string[]
  image: string
  specs: Record<string, string>
  highlights: { icon: any; label: string; sub: string }[]
  description: string
}

export default function PhoneDetailPage() {

  

  const [phone, setPhone] = useState<Phone | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [activeColor, setActiveColor] = useState(0)
  const [activeStorage, setActiveStorage] = useState(0)
  const [wishlist, setWishlist] = useState(false)
  const [activeTab, setActiveTab] = useState("specs")

  console.log(phone)

  useEffect(() => {
    
    const fetchPhone = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/phones/slug/iphone-15-pro`)
        const data = await res.json()
        setPhone(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPhone()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!phone) return <div>Phone not found</div>

  const tabs = ["specs", "highlights", "about"]

  return (
    <div className="min-h-screen p-20 text-white bg-background text-oklch-0.95">
      {/* Sticky header */}
      <header className="sticky top-0  flex items-center justify-between px-6 py-4 border-b">
        <button  className="flex items-center gap-2 text-sm hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <span className="text-xs tracking-widest uppercase font-semibold">{phone.brand} / {phone.name}</span>
        <div className="flex items-center gap-3">
          <button onClick={() => setWishlist(!wishlist)} className="p-2 rounded-full">
            <Heart className="h-4 w-4" style={{ color: wishlist ? "#B729C3" : "#666", fill: wishlist ? "#B729C3" : "none" }} />
          </button>
          <button className="p-2 rounded-full">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 grid lg:grid-cols-2 gap-16">
        {/* Left: images */}
        <div className="lg:sticky lg:top-24 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-purple-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-500">{phone.badge}</span>
          </div>

          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-800">
            <img src={phone.image?? "/placeholder.jpg"} alt={phone.name}  className="object-contain p-10" />
          </div>

          {/* <div className="flex gap-3">
            {phone.images.map((src, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`flex-1 aspect-square rounded-xl overflow-hidden ${i === activeImage ? "border-purple-500 border-2" : "border-gray-700 border"}`}>
                <Image src={src ?? "/placeholder.jpg"} alt="" fill className="object-contain p-3" />
              </button>
            ))}
          </div> */}
        </div>

        {/* Right: details */}
        <div className="space-y-8">
          {/* Name & rating */}
          <div className="space-y-3">
            <p className="text-sm tracking-widest uppercase font-semibold">{phone.brand}</p>
            <h1 className="text-4xl text-white sm:text-5xl font-bold tracking-tight">{phone.name}</h1>
            <p className="text-lg">{phone.tagline}</p>
            {/* <StarRating rating={phone.rating} count={phone.reviewCount} /> */}
          </div>

          {/* Price, colors, storage, CTA, tabs etc. */}
          {/* You can copy your existing JSX here, replacing `phone` object usage */}
        </div>
      </main>
    </div>
  )
}