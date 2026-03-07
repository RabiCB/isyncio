// app/phone/[slug]/PhoneDetail.tsx
// ─── CLIENT COMPONENT ─────────────────────────────────────────────────────────
"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowLeft, Heart, Share2, ShoppingBag, Check,
  Cpu, Battery, Camera, Monitor, Smartphone,
  HardDrive, Calendar, Palette, type LucideIcon,
} from "lucide-react"



// ─── Types ────────────────────────────────────────────────────────────────────

interface ColorSwatch {
  bg: string
  border: string
}

interface SpecItem {
  icon: LucideIcon
  label: string
  value: string
}

interface TrustItem {
  label: string
  sub: string
}

// ─── Color name → hex swatch ──────────────────────────────────────────────────

const COLOR_MAP: Record<string, ColorSwatch> = {
  "Black Titanium":   { bg: "#1a1a1a", border: "#444" },
  "White Titanium":   { bg: "#e8e8e8", border: "#bbb" },
  "Blue Titanium":    { bg: "#3a5a7a", border: "#5a7a9a" },
  "Natural Titanium": { bg: "#c8b89a", border: "#a09070" },
  "Desert Titanium":  { bg: "#b8a070", border: "#906040" },
  "Graphite":         { bg: "#3d3d3d", border: "#666" },
  "Silver":           { bg: "#c0c0c0", border: "#999" },
}

function colorFor(name: string): ColorSwatch {
  return COLOR_MAP[name] ?? { bg: "#555", border: "#888" }
}

// ─── Build spec list from phone fields ───────────────────────────────────────

function buildSpecs(phone: any): SpecItem[] {
  return [
    { icon: Monitor,    label: "Screen Size",    value: phone.screen_size },
    { icon: Monitor,    label: "Resolution",     value: phone.screen_resolution },
    { icon: Cpu,        label: "Model",          value: phone.model },
    { icon: HardDrive,  label: "RAM",            value: phone.ram },
    { icon: HardDrive,  label: "Storage",        value: phone.storage },
    { icon: Battery,    label: "Battery",        value: phone.battery },
    { icon: Camera,     label: "Main Camera",    value: phone.main_camera },
    { icon: Smartphone, label: "Selfie Camera",  value: phone.selfie_camera },
    {
      icon: Calendar,
      label: "Release Date",
      value: new Date(phone.release_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    { icon: Palette, label: "Colors", value: `${phone.colors.length} options` },
  ]
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TopBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border"
      style={{
        borderColor: "oklch(0.72 0.15 195 / 0.3)",
        background: "oklch(0.72 0.15 195 / 0.08)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full animate-pulse"
        style={{ background: "oklch(0.72 0.15 195)" }}
      />
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "oklch(0.72 0.15 195)" }}
      >
        {children}
      </span>
    </div>
  )
}

function SpecCard({ icon: Icon, label, value }: SpecItem) {
  return (
    <div
      className="p-4 rounded-xl flex items-start gap-3"
      style={{
        background: "oklch(0.14 0.002 260)",
        border: "1px solid oklch(0.22 0.005 260)",
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
        style={{ background: "oklch(0.72 0.15 195 / 0.12)" }}
      >
        <Icon className="h-4 w-4" style={{ color: "oklch(0.72 0.15 195)" }} />
      </div>
      <div className="min-w-0">
        <div
          className="text-xs uppercase tracking-wider font-medium mb-1"
          style={{ color: "oklch(0.45 0 0)" }}
        >
          {label}
        </div>
        <div
          className="text-sm font-semibold font-mono leading-snug break-words"
          style={{ color: "oklch(0.9 0 0)" }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}

function FeaturePill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
      style={{
        background: "oklch(0.18 0.005 260)",
        color: "oklch(0.75 0 0)",
        border: "1px solid oklch(0.25 0.005 260)",
      }}
    >
      <Check className="h-3 w-3 flex-shrink-0" style={{ color: "oklch(0.72 0.15 195)" }} />
      {label}
    </span>
  )
}

function TrustCard({ label, sub }: TrustItem) {
  return (
    <div
      className="flex flex-col items-center text-center p-3 rounded-xl gap-1"
      style={{
        background: "oklch(0.14 0.002 260)",
        border: "1px solid oklch(0.22 0.005 260)",
      }}
    >
      <Check className="h-4 w-4" style={{ color: "oklch(0.72 0.15 195)" }} />
      <span className="text-xs font-semibold" style={{ color: "oklch(0.8 0 0)" }}>
        {label}
      </span>
      <span className="text-xs" style={{ color: "oklch(0.45 0 0)" }}>
        {sub}
      </span>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

interface PhoneDetailProps {
  phone: any
}

const TRUST_ITEMS: TrustItem[] = [
  { label: "Free Shipping", sub: "2-day delivery" },
  { label: "2-Year Warranty", sub: "Full coverage" },
  { label: "30-Day Returns", sub: "No questions" },
]

export function PhoneDetail({ phone }: PhoneDetailProps) {
  const [activeColor, setActiveColor] = useState<number>(0)
  const [wishlisted, setWishlisted]   = useState<boolean>(false)
  const [imgError, setImgError]       = useState<boolean>(false)

  const specs = buildSpecs(phone)

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.1 0 0)", color: "oklch(0.95 0 0)" }}
    >
      {/* ── Sticky nav ── */}
      <header
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b"
        style={{
          background: "oklch(0.1 0 0 / 0.85)",
          backdropFilter: "blur(20px)",
          borderColor: "oklch(0.22 0.005 260)",
        }}
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "oklch(0.6 0 0)" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <span
          className="text-xs tracking-widest uppercase font-medium hidden sm:block"
          style={{ color: "oklch(0.4 0 0)" }}
        >
          {phone.brand} · {phone.model}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setWishlisted((prev) => !prev)}
            className="p-2 rounded-full"
            style={{ background: "oklch(0.18 0.005 260)" }}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className="h-4 w-4 transition-all"
              style={{
                color: wishlisted ? "oklch(0.72 0.15 195)" : "oklch(0.5 0 0)",
                fill: wishlisted ? "oklch(0.72 0.15 195)" : "none",
              }}
            />
          </button>
          <button
            className="p-2 rounded-full"
            style={{ background: "oklch(0.18 0.005 260)" }}
            aria-label="Share"
          >
            <Share2 className="h-4 w-4" style={{ color: "oklch(0.5 0 0)" }} />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* ── LEFT: image + color picker ── */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-4">
            <TopBadge>{phone.brand}</TopBadge>

            {/* Hero image */}
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                background: "oklch(0.14 0.002 260)",
                border: "1px solid oklch(0.22 0.005 260)",
              }}
            >
              {/* Decorative glows */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, oklch(0.72 0.15 195 / 0.1), transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at bottom left, oklch(0.6 0.118 184 / 0.07), transparent 70%)",
                }}
              />

              {!imgError ? (
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  className="object-contain p-10"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 opacity-20">
                  <Smartphone
                    className="h-28 w-28"
                    style={{ color: "oklch(0.72 0.15 195)" }}
                  />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "oklch(0.5 0 0)" }}
                  >
                    {phone.name}
                  </span>
                </div>
              )}

              <div
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.14 0.002 260), transparent)",
                }}
              />
            </div>

            {/* Color swatches */}
            <div
              className="p-4 rounded-xl space-y-3"
              style={{
                background: "oklch(0.14 0.002 260)",
                border: "1px solid oklch(0.22 0.005 260)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs uppercase tracking-wider font-semibold"
                  style={{ color: "oklch(0.45 0 0)" }}
                >
                  Color
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.75 0 0)" }}
                >
                  {phone.colors[activeColor]}
                </span>
              </div>
              <div className="flex gap-2.5 flex-wrap">
                {phone.colors.map((c:any, i:any) => {
                  const col = colorFor(c)
                  const isActive = i === activeColor
                  return (
                    <button
                      key={`${c}-${i}`}
                      onClick={() => setActiveColor(i)}
                      title={c}
                      aria-label={c}
                      aria-pressed={isActive}
                      className="h-8 w-8 rounded-full transition-all duration-200"
                      style={{
                        background: col.bg,
                        border: `2px solid ${isActive ? "oklch(0.72 0.15 195)" : col.border}`,
                        boxShadow: isActive
                          ? "0 0 0 3px oklch(0.72 0.15 195 / 0.25)"
                          : "none",
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT: details ── */}
          <div className="lg:col-span-3 space-y-8">

            {/* Title block */}
            <div className="space-y-2">
              <p
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "oklch(0.45 0 0)" }}
              >
                {phone.brand}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                {phone.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    background: "oklch(0.18 0.005 260)",
                    color: "oklch(0.6 0 0)",
                    border: "1px solid oklch(0.25 0.005 260)",
                  }}
                >
                  {phone.model}
                </span>
                <span className="text-xs" style={{ color: "oklch(0.4 0 0)" }}>
                  · Released{" "}
                  {new Date(phone.release_date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="h-px" style={{ background: "oklch(0.22 0.005 260)" }} />

            {/* Specifications */}
            <div className="space-y-3">
              <h2
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "oklch(0.45 0 0)" }}
              >
                Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specs.map((s) => (
                  <SpecCard key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Features */}
            {phone.features.length > 0 && (
              <div className="space-y-3">
                <h2
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: "oklch(0.45 0 0)" }}
                >
                  Key Features
                </h2>
                <div className="flex flex-wrap gap-2">
                  {phone.features.map((f:any) => (
                    <FeaturePill key={f} label={f} />
                  ))}
                </div>
              </div>
            )}

            <div className="h-px" style={{ background: "oklch(0.22 0.005 260)" }} />

            {/* CTA */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: "oklch(0.72 0.15 195)",
                    color: "oklch(0.1 0.01 195)",
                  }}
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </button>
                <button
                  className="flex-1 py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-70 active:scale-[0.98]"
                  style={{
                    background: "transparent",
                    color: "oklch(0.95 0 0)",
                    border: "1px solid oklch(0.3 0.005 260)",
                  }}
                >
                  Compare
                </button>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-2">
                {TRUST_ITEMS.map((t) => (
                  <TrustCard key={t.label} {...t} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}