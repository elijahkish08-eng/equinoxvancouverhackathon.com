"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

export function SignupSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="signup" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sign Up
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Join Equinox Vancouver
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Spots are limited! Register now to secure your place at {"Vancouver's"} spring hackathon on March 7th, 2026. {"It's"} completely free.
          </p>
        </div>

        {submitted ? (
          <Card className="border-primary/20 bg-card text-center">
            <CardContent className="flex flex-col items-center gap-4 py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                {"You're"} in!
              </h3>
              <p className="max-w-sm text-muted-foreground">
                {"We've"} received your registration. Check your email for a confirmation and more details about March 7th.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-center text-xl text-card-foreground">
                Registration Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Ada"
                      required
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Lovelace"
                      required
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ada@example.com"
                    required
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="age" className="text-foreground">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="16"
                    min={10}
                    max={19}
                    required
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="experience" className="text-foreground">
                    Coding Experience
                  </Label>
                  <select
                    id="experience"
                    required
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">{"I've never coded before"}</option>
                    <option value="some">{"I've done some tutorials"}</option>
                    <option value="intermediate">{"I've built a few projects"}</option>
                    <option value="experienced">{"I code regularly"}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="dietary" className="text-foreground">
                    Dietary Restrictions (optional)
                  </Label>
                  <Input
                    id="dietary"
                    placeholder="e.g. vegetarian, gluten-free"
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="about" className="text-foreground">
                    {"What are you excited to build? (optional)"}
                  </Label>
                  <Textarea
                    id="about"
                    placeholder="A game, a website, an AI chatbot..."
                    rows={3}
                    className="bg-background border-input text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register for Equinox"
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By registering you agree to our code of conduct. Open to
                  anyone aged 13-19.
                </p>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
