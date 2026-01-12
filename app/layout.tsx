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
  title: "HACK INTO THE MULTIVERSE | Dropout Hacks",
  description: "Join the ultimate Spider-Verse themed hackathon in Kolkata. Code, build, and save the multiverse.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "HACK INTO THE MULTIVERSE | Dropout Hacks",
    description: "Join the ultimate Spider-Verse themed hackathon in Kolkata. Code, build, and save the multiverse.",
    url: "https://dropouthacks.tech",
    siteName: "Dropout Hacks",
    images: [
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
    title: "HACK INTO THE MULTIVERSE | Dropout Hacks",
    description: "Join the ultimate Spider-Verse themed hackathon in Kolkata. Code, build, and save the multiverse.",
    images: ["/logo.png"],
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
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
