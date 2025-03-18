import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multiplayer Clock | Chess Timer for up to 12 players",
  description:
    "A customizable timer app for board games, turn-based activities, and multiplayer games. Features include time increments, multiple player support (2-12 players), and visual player wheel.",
  keywords: [
    "timer",
    "multiplayer timer",
    "chess clock",
    "board game timer",
    "turn timer",
    "game clock",
    "time management",
  ],
  authors: [{ name: "Owen Gretzinger" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Multiplayer Clock | Chess Timer for up to 12 players",
    description:
      "A customizable timer app for board games, turn-based activities, and multiplayer games. Features include time increments, multiple player support (2-12 players), and visual player wheel.",
    url: "https://multiplayer-clock.vercel.app",
    type: "website",
    siteName: "Multiplayer Clock",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Multiplayer Clock App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiplayer Clock | Chess Timer for up to 12 players",
    description:
      "A customizable timer for board games and multiplayer activities with support for up to 12 players",
    images: ["/twitter-image.png"],
  },
  applicationName: "Multiplayer Clock",
  creator: "Owen Gretzinger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
