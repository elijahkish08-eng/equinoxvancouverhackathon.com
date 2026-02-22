import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default:
      "Hackathon in Vancouver 2026 | Equinox Vancouver Hackathon – Free for Teens",
    template: "%s | Equinox Vancouver Hackathon",
  },
  description:
    "Register for Equinox Vancouver Hackathon 2026 — Vancouver's premier free beginner-friendly hackathon for high school students and teenagers. Build projects, learn to code, attend workshops, and make lifelong friends. March 7, 2026 in Vancouver, BC.",
  keywords: [
    "hackathon Vancouver 2026",
    "teen hackathon Vancouver",
    "high school hackathon",
    "Equinox Vancouver Hackathon",
    "free hackathon for teenagers",
    "youth coding event Vancouver",
    "beginner-friendly hackathon",
    "Vancouver hackathon March 2026",
    "hackathon for high school students",
    "coding hackathon BC",
    "Vancouver teen coding event",
    "student hackathon Canada",
    "hackathon registration Vancouver",
  ],
  metadataBase: new URL("https://equinoxvancouver.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://equinoxvancouver.com",
    siteName: "Equinox Vancouver Hackathon",
    title:
      "Hackathon in Vancouver 2026 | Equinox Vancouver Hackathon – Register Now",
    description:
      "Vancouver's premier free hackathon for teenagers. Build projects, learn to code, and make lifelong friends. March 7, 2026 — registration open now for high school students aged 13-19.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Equinox Vancouver Hackathon 2026 — Hackathon for teenagers in Vancouver BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathon in Vancouver 2026 | Equinox Vancouver Hackathon",
    description:
      "Free beginner-friendly hackathon for teenagers in Vancouver, BC. Register now for March 7, 2026.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#3a9a5b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_spaceGrotesk.variable} ${_geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
