import type { Metadata } from "next";
import { Bangers, Space_Grotesk } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "HACK INTO THE MULTIVERSE | Dropout Hacks - Kolkata's Premier Hackathon 2026",
    template: "%s | Dropout Hacks"
  },
  description: "Join Dropout Hacks - Kolkata's ultimate Spider-Verse themed hackathon on March 28-29, 2026. Code, build, innovate and save the multiverse. Free registration, amazing prizes, and networking opportunities for developers, designers, and tech enthusiasts.",
  keywords: [
    "Dropout Hacks",
    "dropouthacks",
    "dropout hacks kolkata",
    "hackathon kolkata",
    "kolkata hackathon 2026",
    "spider-verse hackathon",
    "tech event kolkata",
    "coding competition",
    "hackathon india",
    "student hackathon",
    "web development hackathon",
    "AI hackathon",
    "blockchain hackathon",
    "free hackathon",
    "march 2026 hackathon",
    "bengal hackathon",
    "multiverse hackathon",
    "tech fest kolkata",
    "coding event",
    "developer community kolkata"
  ],
  authors: [{ name: "Dropout Hacks Team" }],
  creator: "Dropout Hacks Team",
  publisher: "Dropout Hacks",
  category: "Technology Event",
  verification: {
    google: "UVe6mrd1b0GDwXfoe60Trth7u37XGcmfQ26orOLCdSY",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "HACK INTO THE MULTIVERSE | Dropout Hacks - Kolkata's Premier Hackathon 2026",
    description: "Join Dropout Hacks - Kolkata's ultimate Spider-Verse themed hackathon on March 28-29, 2026. Code, build, innovate and save the multiverse. Free registration, amazing prizes!",
    url: "https://dropouthacks.tech",
    siteName: "Dropout Hacks",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dropout Hacks - Hack Into The Multiverse",
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
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "HACK INTO THE MULTIVERSE | Dropout Hacks",
    description: "Join Kolkata's ultimate Spider-Verse themed hackathon on March 28-29, 2026. Code, build, and save the multiverse!",
    images: ["/twitter-image.png"],
    creator: "@dropouthacks",
  },
  alternates: {
    canonical: "https://dropouthacks.tech",
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
                "startDate": "2026-03-28",
                "endDate": "2026-03-29",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                  "@type": "Place",
                  "name": "Kolkata",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kolkata",
                    "addressRegion": "WB",
                    "addressCountry": "IN"
                  }
                },
                "image": [
                  "https://dropouthacks.tech/opengraph-image.png",
                  "https://dropouthacks.tech/logo.png"
                ],
                "description": "Join the ultimate Spider-Verse themed hackathon in Kolkata. Code, build, and save the multiverse.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://dropouthacks.tech"
                },
                "organizer": {
                  "@type": "Organization",
                  "name": "Dropout Hacks Team",
                  "url": "https://dropouthacks.tech"
                },
                "performer": {
                  "@type": "Organization",
                  "name": "Dropout Hacks Team"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Dropout Hacks",
                "alternateName": "DropoutHacks",
                "url": "https://dropouthacks.tech",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dropouthacks.tech/icon.png",
                  "width": "800",
                  "height": "800",
                  "caption": "Dropout Hacks Logo"
                },
                "image": "https://dropouthacks.tech/icon.png",
                "description": "Kolkata's premier Spider-Verse themed hackathon bringing together developers, designers, and tech enthusiasts.",
                "foundingDate": "2025",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://twitter.com/dropouthacks",
                  "https://www.facebook.com/dropouthacks",
                  "https://www.instagram.com/dropouthacks",
                  "https://www.linkedin.com/company/dropouthacks"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Event Information",
                  "url": "https://dropouthacks.tech",
                  "availableLanguage": ["English", "Hindi", "Bengali"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Dropout Hacks",
                "url": "https://dropouthacks.tech",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://dropouthacks.tech/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
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
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Team",
                    "item": "https://dropouthacks.tech/team"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Rules",
                    "item": "https://dropouthacks.tech/rules"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Volunteers",
                    "item": "https://dropouthacks.tech/volunteer"
                  }
                ]
              }
            ])
          }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
