export interface Product {
  slug: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: string
  rating: number
  reviews: number
  features: string[]
  inStock: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
  slug: string
}

export const products: Product[] = [
  {
    slug: "nova-headphones",
    name: "Nova Pro Headphones",
    description: "Immersive noise-cancelling wireless headphones with 40-hour battery life and spatial audio technology for an unparalleled listening experience.",
    price: 349,
    originalPrice: 429,
    image: "/images/hero-gadget.jpg",
    category: "audio",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 2847,
    features: ["Active Noise Cancellation", "40hr Battery", "Spatial Audio", "Bluetooth 5.3"],
    inStock: true,
  },
  {
    slug: "pulse-smartwatch",
    name: "Pulse Ultra Watch",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and a stunning AMOLED display. Your ultimate fitness companion.",
    price: 299,
    originalPrice: 349,
    image: "/images/product-smartwatch.jpg",
    category: "wearables",
    badge: "New",
    rating: 4.7,
    reviews: 1563,
    features: ["Heart Rate Monitor", "GPS Tracking", "5ATM Water Resistant", "7-day Battery"],
    inStock: true,
  },
  {
    slug: "echo-earbuds",
    name: "Echo Buds Pro",
    description: "Ultra-compact true wireless earbuds with crystal-clear audio, adaptive noise cancellation, and seamless connectivity.",
    price: 179,
    image: "/images/product-earbuds.jpg",
    category: "audio",
    rating: 4.6,
    reviews: 3211,
    features: ["Adaptive ANC", "24hr Total Battery", "Wireless Charging", "IPX5 Water Resistant"],
    inStock: true,
  },
  {
    slug: "wave-speaker",
    name: "Wave 360 Speaker",
    description: "Portable Bluetooth speaker with 360-degree immersive sound, rugged design, and 20-hour playtime for adventures everywhere.",
    price: 129,
    originalPrice: 159,
    image: "/images/product-speaker.jpg",
    category: "audio",
    badge: "Sale",
    rating: 4.5,
    reviews: 987,
    features: ["360 Sound", "IP67 Waterproof", "20hr Battery", "Multi-Speaker Pairing"],
    inStock: true,
  },
  {
    slug: "sky-drone",
    name: "Sky Phantom Drone",
    description: "Compact foldable drone with 4K camera, intelligent flight modes, and 35-minute flight time for breathtaking aerial shots.",
    price: 799,
    image: "/images/product-drone.jpg",
    category: "cameras",
    badge: "Premium",
    rating: 4.9,
    reviews: 645,
    features: ["4K 60fps Camera", "35min Flight Time", "Obstacle Avoidance", "GPS Return Home"],
    inStock: true,
  },
  {
    slug: "strike-keyboard",
    name: "Strike Mech Keyboard",
    description: "Premium mechanical gaming keyboard with hot-swappable switches, per-key RGB lighting, and aircraft-grade aluminum frame.",
    price: 199,
    originalPrice: 249,
    image: "/images/product-keyboard.jpg",
    category: "gaming",
    rating: 4.7,
    reviews: 2100,
    features: ["Hot-Swappable", "Per-Key RGB", "Aluminum Frame", "USB-C / Wireless"],
    inStock: true,
  },
  {
    slug: "lens-camera",
    name: "Lens Mark IV Camera",
    description: "Mirrorless digital camera with 45MP full-frame sensor, 8K video recording, and advanced AI autofocus for professional creators.",
    price: 1299,
    image: "/images/product-camera.jpg",
    category: "cameras",
    badge: "Pro",
    rating: 4.9,
    reviews: 412,
    features: ["45MP Full-Frame", "8K Video", "AI Autofocus", "In-Body Stabilization"],
    inStock: true,
  },
]

export const categories: Category[] = [
  {
    id: "audio",
    name: "Audio",
    description: "Premium headphones, earbuds, and speakers for audiophiles",
    image: "/images/category-audio.jpg",
    productCount: 3,
    slug: "audio",
  },
  {
    id: "wearables",
    name: "Wearables",
    description: "Smartwatches and fitness trackers for the connected lifestyle",
    image: "/images/category-wearables.jpg",
    productCount: 1,
    slug: "wearables",
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "High-performance peripherals for competitive gamers",
    image: "/images/category-gaming.jpg",
    productCount: 1,
    slug: "gaming",
  },
  {
    id: "cameras",
    name: "Cameras & Drones",
    description: "Professional cameras and drones for creators and explorers",
    image: "/images/category-cameras.jpg",
    productCount: 2,
    slug: "cameras",
  },
]
