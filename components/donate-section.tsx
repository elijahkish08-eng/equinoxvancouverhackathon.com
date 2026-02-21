"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Coffee, Pizza, Laptop } from "lucide-react"

const presetAmounts = [
  { value: 10, label: "$10", icon: Coffee, description: "Buys snacks for a hacker" },
  { value: 25, label: "$25", icon: Pizza, description: "Covers a meal for the whole event" },
  { value: 50, label: "$50", icon: Laptop, description: "Sponsors a hacker's full day" },
  { value: 100, label: "$100", icon: Sparkles, description: "Funds workshops & materials" },
]

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const activeAmount = selectedAmount ?? (customAmount ? Number(customAmount) : null)

  const handleDonate = () => {
    if (!activeAmount || activeAmount <= 0) return
    // In production, this would redirect to a payment provider
    alert(`Thank you for your $${activeAmount} donation! In production, this would redirect to a payment processor.`)
  }

  return (
    <section id="donate" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Support Us
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Help us make Equinox happen
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Equinox Vancouver is completely free for attendees. Your donation
            helps cover food, venue, swag, and all the things that make this
            event unforgettable for teenagers.
          </p>
        </div>

        <Card className="border-border bg-card overflow-hidden">
          <CardContent className="p-6 md:p-8">
            {/* Preset amounts */}
            <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => {
                    setSelectedAmount(preset.value)
                    setCustomAmount("")
                  }}
                  className={`group flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                    selectedAmount === preset.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40 bg-background"
                  }`}
                >
                  <preset.icon
                    className={`h-5 w-5 ${
                      selectedAmount === preset.value
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  />
                  <span
                    className={`text-xl font-bold ${
                      selectedAmount === preset.value
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {preset.label}
                  </span>
                  <span className="text-xs text-muted-foreground text-center leading-tight">
                    {preset.description}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  $
                </span>
                <input
                  type="number"
                  min={1}
                  placeholder="Other amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="flex h-12 w-full rounded-xl border border-input bg-background pl-8 pr-4 text-lg font-medium text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            {/* Donate button */}
            <Button
              size="lg"
              onClick={handleDonate}
              disabled={!activeAmount || activeAmount <= 0}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-14"
            >
              <Heart className="mr-2 h-5 w-5" />
              {activeAmount && activeAmount > 0
                ? `Donate $${activeAmount}`
                : "Select an amount to donate"}
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Donations are processed securely. Every dollar goes directly
              toward making Equinox amazing for teens.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
