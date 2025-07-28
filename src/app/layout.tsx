import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aviation Incidents - Hold Airlines & Manufacturers Accountable",
  description: "Holding airlines and aircraft manufacturers accountable through transparent incident tracking.",
  keywords: "aviation, incidents, accidents, safety, airlines, aircraft, accountability, transparency",
  authors: [{ name: "Aviation Incidents" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Aviation Incidents",
    description: "Holding airlines and aircraft manufacturers accountable through transparent incident tracking",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aviation Incidents - Safety & Accountability',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
