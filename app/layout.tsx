import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DailyDose – Never Miss Your Supplements Again | iOS App",
  description:
    "DailyDose helps you track and remember your daily supplements with smart reminders. Perfect for whey protein, creatine, vitamins, and medications on iPhone and iPad.",
  keywords:
    "supplement tracker, pill reminder, whey protein, creatine tracker, vitamin reminder, medication tracker, iOS health app",
  authors: [{ name: "DailyDose Team" }],
  creator: "DailyDose",
  publisher: "DailyDose",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dailydose.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DailyDose – Never Miss Your Supplements Again | iOS App",
    description:
      "DailyDose helps you track and remember your daily supplements with smart reminders. Perfect for whey protein, creatine, vitamins, and medications on iPhone and iPad.",
    url: "https://dailydose.app",
    siteName: "DailyDose",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DailyDose - Smart Daily Reminders App for iOS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyDose – Never Miss Your Supplements Again | iOS App",
    description:
      "DailyDose helps you track and remember your daily supplements with smart reminders. Perfect for whey protein, creatine, vitamins, and medications on iPhone and iPad.",
    images: ["/og-image.jpg"],
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
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Never Miss a Scoop! DailyDose",
  description:
    "Track your daily supplements with smart reminders for whey protein, creatine, vitamins, and medications.",
  operatingSystem: "iOS",
  applicationCategory: "HealthAndFitnessApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    ratingCount: "1",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  downloadUrl: "https://apps.apple.com/pt/app/never-miss-a-scoop-dailydose/id6739007799?l=en-GB",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <noscript>
          <div className="noscript-banner">
            JavaScript is required for the best experience. Please enable JavaScript in your browser.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
