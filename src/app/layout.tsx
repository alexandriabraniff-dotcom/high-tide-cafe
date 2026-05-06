import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "High Tide Cafe | Semaphore, SA",
    template: "%s | High Tide Cafe",
  },
  description:
    "Coastal coffee, fresh bites and good vibes on the Semaphore esplanade. Breakfast and lunch served daily.",
  keywords: ["cafe", "coffee", "Semaphore", "Adelaide", "breakfast", "lunch", "High Tide"],
  openGraph: {
    title: "High Tide Cafe Semaphore",
    description:
      "Coastal coffee, fresh bites and good vibes on the Semaphore esplanade.",
    url: "https://hightidecafe.com.au",
    siteName: "High Tide Cafe",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "High Tide Cafe",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FEF8F4] antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
