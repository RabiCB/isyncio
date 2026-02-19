import Link from "next/link"

const footerLinks = {
  Products: [
    { label: "Headphones", href: "#" },
    { label: "Speakers", href: "#" },
    { label: "Smartwatches", href: "#" },
    { label: "Drones", href: "#" },
    { label: "Cameras", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground font-mono tracking-tighter">NX</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground font-mono">NXGEN</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium tech gadgets for the modern world. Innovation you can experience.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon label="Twitter" path="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17A4.84 4.84 0 0015.11 4c-2.67 0-4.84 2.17-4.84 4.84 0 .38.04.75.13 1.1C6.73 9.72 3.5 7.8 1.39 4.95c-.42.72-.66 1.55-.66 2.44 0 1.68.86 3.16 2.16 4.03a4.82 4.82 0 01-2.19-.61v.06c0 2.35 1.67 4.31 3.88 4.76a4.86 4.86 0 01-2.19.08c.62 1.93 2.42 3.34 4.56 3.38A9.72 9.72 0 010 21.54 13.71 13.71 0 007.55 24c9.05 0 14-7.5 14-14v-.64A9.84 9.84 0 0024 6.55c-.87.39-1.8.65-2.78.77l1.24-1.32z" />
              <SocialIcon label="Instagram" path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              <SocialIcon label="YouTube" path="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2026 NXGEN. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Terms</Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
      aria-label={label}
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  )
}
