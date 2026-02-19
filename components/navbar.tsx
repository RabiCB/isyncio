"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Gadgets", href: "#gadgets" },
  { label: "Categories", href: "#categories" },
  { label: "Spotlight", href: "#spotlight" },
  { label: "Compare", href: "#compare" },
  { label: "About", href: "#about" },
  {
    label:"Blogs",
    href:"£blogs"
  }
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground font-mono tracking-tighter">IC</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-mono">ISYNC</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" aria-label="Search gadgets">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-border/60 text-foreground hover:bg-secondary">
            Newsletter
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Search gadgets">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="ml-auto border-border/60 text-foreground hover:bg-secondary">
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
