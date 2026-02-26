"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// ── Data type matching your API ───────────────────────────────────────────────

export interface PhoneData {
  name: string
  slug: string
  brand: string
  model: string
  ram: string
  storage: string
  battery: string
  screen_size: string
  screen_resolution: string
  main_camera: string
  selfie_camera: string
  image: string
  category?: "flagship" | "foldable" | "budget"
  badge?: string
  color?: string // optional accent; falls back to teal
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function shortSpec(value: string): string {
  return value.split(",")[0].trim()
}

const DEFAULT_COLOR = "#14b8a6"

const categoryStyle: Record<string, string> = {
  flagship: "bg-primary/10 text-primary border-primary/20",
  foldable: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  budget: "bg-amber-500/10 text-amber-400 border-amber-500/20",
}

// ── Card ──────────────────────────────────────────────────────────────────────

function PhoneCard({ phone }: { phone: PhoneData }) {
  const accent = phone.color ?? DEFAULT_COLOR

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
      {/* Accent top bar */}
      <div className="h-0.5 w-full" style={{ background: accent }} />

      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/30">
        <img
          src={phone.image}
          alt={`${phone.brand} ${phone.name}`}
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse at 50% 120%, ${accent}22, transparent 70%)` }}
        />

        {/* Badge */}
        {phone.badge && (
          <span
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
            style={{ background: accent }}
          >
            {phone.badge}
          </span>
        )}

        {/* Model chip */}
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2 py-0.5 font-mono text-[9px] text-white/60 backdrop-blur-sm">
          {phone.model}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {phone.brand}
            </p>
            <h3 className="mt-0.5 text-xl font-bold tracking-tight text-foreground">
              {phone.name}
            </h3>
          </div>
          {phone.category && (
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold capitalize ${categoryStyle[phone.category] ?? ""}`}
            >
              {phone.category}
            </span>
          )}
        </div>

        {/* Quick pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {[phone.screen_size, phone.ram, shortSpec(phone.storage)].map((val) => (
            <span
              key={val}
              className="rounded-full bg-muted/50 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground ring-1 ring-border/30"
            >
              {val}
            </span>
          ))}
        </div>

        {/* Spec rows */}
        <div className="mt-4 space-y-2">
          {[
            { label: "Display", value: `${phone.screen_size} · ${phone.screen_resolution}` },
            { label: "Main Cam", value: shortSpec(phone.main_camera) },
            { label: "Selfie Cam", value: shortSpec(phone.selfie_camera) },
            { label: "Battery", value: shortSpec(phone.battery) },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-2 border-b border-border/20 pb-1.5 last:border-0"
            >
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                {label}
              </span>
              <span className="truncate text-right text-[11px] font-medium text-muted-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <Button
            asChild
            size="sm"
            className="w-full rounded-full font-semibold text-xs text-white"
            style={{ background: accent }}
          >
            <Link href={`/phones/${phone.slug}`}>
              View Full Specs <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

// ── Cursor pagination hook ────────────────────────────────────────────────────

function useCursorPagination(items: PhoneData[], pageSize: number) {
  const [index, setIndex] = useState(0)

  const page = items.slice(index, index + pageSize)
  const hasPrev = index > 0
  const hasNext = index + pageSize < items.length
  const totalPages = Math.ceil(items.length / pageSize)
  const currentPage = Math.floor(index / pageSize) + 1

  return {
    page,
    hasPrev,
    hasNext,
    currentPage,
    totalPages,
    prev: () => setIndex((i) => Math.max(0, i - pageSize)),
    next: () => setIndex((i) => i + pageSize),
    goTo: (n: number) => setIndex((n - 1) * pageSize),
  }
}

// ── Main component ────────────────────────────────────────────────────────────

const PAGE_SIZE = 3

interface PhoneListProps {
  phones: PhoneData[]
}

export function PhoneList({ phones }: PhoneListProps) {
  const [filter, setFilter] = useState<"all" | "flagship" | "foldable" | "budget">("all")

  const filtered =
    filter === "all" ? phones : phones.filter((p) => p.category === filter)

  const { page, hasPrev, hasNext, currentPage, totalPages, prev, next, goTo } =
    useCursorPagination(filtered, PAGE_SIZE)

  const filters = [
    { key: "all" as const, label: "All" },
    { key: "flagship" as const, label: "Flagship" },
    { key: "foldable" as const, label: "Foldable" },
    { key: "budget" as const, label: "Budget" },
  ]

  return (
    <section id="phones-grid" className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.75_0.15_190/0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">2026 Lineup</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              All Smartphones
            </h2>
          </div>

          {/* Filter pills — only shown if phones have category field */}
          <div className="flex flex-wrap gap-2">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setFilter(key); goTo(1) }}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                  filter === key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/50 bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {page.map((phone) => (
            <PhoneCard key={phone.slug} phone={phone} />
          ))}
        </div>

        {/* Empty state */}
        {page.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No phones found.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prev}
              disabled={!hasPrev}
              className="rounded-full border-border/50 px-4 font-semibold disabled:opacity-30"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Prev
            </Button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    n === currentPage
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={next}
              disabled={!hasNext}
              className="rounded-full border-border/50 px-4 font-semibold disabled:opacity-30"
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}