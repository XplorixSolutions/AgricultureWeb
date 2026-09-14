import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/footer/Footer";

const interTight = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Professional Agricultural Machinery & Tractor Implements | AgriForge",
    template: "%s | AgriForge",
  },
  description:
    "Professional agricultural machinery, tractor implements, and land maintenance equipment. Flail mowers, rotary tillers, forestry equipment, and attachments — engineered for demanding European operations.",
  keywords: [
    "agricultural machinery",
    "tractor implements",
    "flail mowers",
    "rotary tillers",
    "forestry equipment",
    "land maintenance",
    "grassland equipment",
    "soil cultivation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AgriForge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
        />
      </head>
      <body>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
