import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import ClientNavBar from "@/components/ClientNavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aubrey Tsambatare | Quantitative Analyst & Financial Engineer in Toronto",
  description:
    "Aubrey Tsambatare is a Toronto-based Quantitative Analyst and Financial Engineer with expertise in derivatives pricing, portfolio optimization, and quantitative research. Explore his blog, projects, and resume.",
  keywords: [
    "Aubrey Tsambatare", "Simbarashe Tsambatare", "Tafadzwa Tsambatare", "Quantitative Analyst Toronto", "Financial Engineer Canada", "Mathematical Finance", "Portfolio Optimization", "Derivatives Pricing", "Python Finance Projects", "University of Toronto MMF", "Quant Blog", "Quantitative Researcher Toronto", "Equity Derivatives", "Monte Carlo Simulation", "Finance Blog Toronto", "Zimbabwean Quant", "Financial Modeling Canada", "Asset Allocation", "Trading Strategies", "Quant Intern", "Data-Driven Investing", "Aubrey Tsambatare Blog", "Quant Internship Presentation", "MMF Internship", "Python for Finance", "Tsambatare Portfolio", "Valuation Projects", "Delta Gamma Hedging", "Mean Reversion", "Career in Quant Finance", "software engineering", "Toronto", "Canada", "Quant", "MMF University of Toronto"
  ],
  authors: [{ name: "Aubrey Tsambatare" }],
  robots: "index, follow",
  openGraph: {
    title: "Aubrey Tsambatare | Quantitative Analyst & Financial Engineer",
    description:
      "Explore the projects, blogs, and professional background of Aubrey Tsambatare, a Toronto-based quant and financial engineer.",
    url: "https://www.tsambatare.com",
    type: "website",
    images: [
      {
        url: "https://www.tsambatare.com/your-thumbnail.jpg", // Replace with real image URL
        width: 1200,
        height: 630,
        alt: "Aubrey Tsambatare Thumbnail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aubrey Tsambatare | Quantitative Analyst & Financial Engineer",
    description:
      "Toronto-based quant specializing in portfolio optimization, derivatives modeling, and Python-driven financial research.",
    images: ["https://www.tsambatare.com/your-thumbnail.jpg"] // Replace with real image URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7XF73Q7V5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7XF73Q7V5');
          `}
        </Script>
        <ClientNavBar />
        <SideNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
