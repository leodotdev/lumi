import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumiinus - Pet Health Blood Detection App",
  description:
    "Analyze your pet's stool for microscopic blood using your smartphone with lab-grade accuracy. Early detection leads to healthier, longer lives for your pets.",
  keywords:
    "pet health, blood detection, stool analysis, pet diagnostics, veterinary technology, pet screening, early detection",
  authors: [{ name: "Lumiinus Health" }],
  creator: "Lumiinus Health",
  publisher: "Lumiinus Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lumiinus - Pet Health Blood Detection App",
    description:
      "Analyze your pet's stool for microscopic blood using your smartphone with lab-grade accuracy.",
    url: "https://lumiinus.com",
    siteName: "Lumiinus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumiinus - Pet Health Blood Detection App",
    description:
      "Analyze your pet's stool for microscopic blood using your smartphone with lab-grade accuracy.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="canonical" href="https://lumiinus.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo_white.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
