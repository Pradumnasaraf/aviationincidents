import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aviation Incident Tracker - Hold Airlines & Manufacturers Accountable",
  description: "Holding airlines and aircraft manufacturers accountable through transparent incident tracking.",
  keywords: "aviation, incidents, accidents, safety, airlines, aircraft, accountability, transparency",
  authors: [{ name: "Aviation Incident Tracker" }],
  openGraph: {
    title: "Aviation Incident Tracker",
    description: "Holding airlines and aircraft manufacturers accountable through transparent incident tracking",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
