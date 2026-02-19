"use client"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 lg:py-32" aria-label="Newsletter signup">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 sm:p-16">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Stay in the Loop</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              New Gadgets, Straight to Your Inbox
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Get notified when we add new gadgets, update specs, or publish detailed breakdowns of the latest tech.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-primary/10 border border-primary/20 p-6">
                <p className="text-primary font-medium">{"You're subscribed! We'll keep you posted."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-md sm:mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
                />
                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-12 shrink-0">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}

            <p className="mt-4 text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
