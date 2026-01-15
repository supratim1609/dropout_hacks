import type { Metadata } from "next";
import { Bangers, Space_Grotesk } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { LayoutWrapper } from "./components/LayoutWrapper";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-comic",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dropouthacks.tech"),
  title: {
    default: "Dropout Hacks | Spider-Verse Hackathon in Kolkata 2026",
    template: "%s | Dropout Hacks"
  },
  description: "Join Dropout Hacks - The ultimate Spider-Verse themed hackathon in Kolkata, March 28-29, 2026. Free registration, exciting prizes, and innovative coding challenges. Apply now for DropoutHacks!",
  keywords: [
    "dropout hacks",
    "dropouthacks",
    "dropout hacks kolkata",
    "hackathon kolkata",
    "kolkata hackathon 2026",
    "spider-verse hackathon",
    "coding competition kolkata",
    "tech event kolkata",
    "student hackathon india",
    "free hackathon",
    "hackathon registration",
    "dropout hacks 2026",
    "multiverse hackathon",
    "web development hackathon",
    "AI hackathon kolkata",
    "blockchain hackathon",
    "tech fest kolkata"
  ],
  authors: [{ name: "Dropout Hacks Team" }],
  creator: "Dropout Hacks Team",
  publisher: "Dropout Hacks",
  category: "Technology Event",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Dropout Hacks | Spider-Verse Hackathon Kolkata 2026",
    description: "Join Dropout Hacks - The ultimate Spider-Verse themed hackathon in Kolkata, March 28-29, 2026. Free registration, exciting prizes, and innovative coding challenges.",
    url: "https://dropouthacks.tech",
    siteName: "Dropout Hacks",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dropout Hacks - Hack into the Multiverse",
      },
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Dropout Hacks Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dropout Hacks | Spider-Verse Hackathon Kolkata 2026",
    description: "Join Dropout Hacks - The ultimate Spider-Verse themed hackathon in Kolkata, March 28-29, 2026. Free registration, exciting prizes!",
    images: ["/twitter-image.png"],
    creator: "@dropouthacks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://dropouthacks.tech",
  },
  verification: {
    google: "UVe6mrd1b0GDwXfoe60Trth7u37XGcmfQ26orOLCdSY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          bangers.variable,
          spaceGrotesk.variable,
          "antialiased bg-[var(--color-comic-dark)] text-white min-h-screen selection:bg-[var(--color-comic-red)] selection:text-white cursor-none"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": "Dropout Hacks: Hack into the Multiverse",
                "alternateName": ["DropoutHacks", "Dropout Hacks 2026"],
                "description": "Join Dropout Hacks - The ultimate Spider-Verse themed hackathon in Kolkata, March 28-29, 2026. Free registration, exciting prizes, and innovative coding challenges. Apply now for DropoutHacks!",
                "startDate": "2026-03-28T09:00:00+05:30",
                "endDate": "2026-03-29T18:00:00+05:30",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                  "@type": "Place",
                  "name": "Kolkata",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kolkata",
                    "addressRegion": "West Bengal",
                    "addressCountry": "IN"
                  }
                },
                "image": [
                  "https://dropouthacks.tech/opengraph-image.png",
                  "https://dropouthacks.tech/logo.png"
                ],
                "offers": {
                  "@type": "Offer",
                  "name": "Free Registration",
                  "price": "0",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://dropouthacks.tech",
                  "validFrom": "2026-01-01"
                },
                "organizer": {
                  "@type": "Organization",
                  "name": "Dropout Hacks Team",
                  "url": "https://dropouthacks.tech",
                  "logo": "https://dropouthacks.tech/logo.png",
                  "sameAs": [
                    "https://twitter.com/dropouthacks"
                  ]
                },
                "performer": {
                  "@type": "Organization",
                  "name": "Dropout Hacks Team"
                },
                "keywords": "dropout hacks, dropouthacks, hackathon kolkata, spider-verse hackathon, coding competition, tech event kolkata",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Students, Developers, Tech Enthusiasts"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Dropout Hacks",
                "alternateName": "DropoutHacks",
                "url": "https://dropouthacks.tech",
                "logo": "https://dropouthacks.tech/logo.png",
                "description": "Dropout Hacks is a Spider-Verse themed hackathon bringing together innovators, developers, and tech enthusiasts in Kolkata.",
                "sameAs": [
                  "https://twitter.com/dropouthacks"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Service",
                  "url": "https://dropouthacks.tech"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://dropouthacks.tech"
                  }
                ]
              }
            ])
          }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
