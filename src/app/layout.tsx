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
  title: "Aubrey Tsambatare",
  description: "Portfolio and blog of Aubrey Tsambatare, Quantitative Analyst & Financial Engineer."
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
