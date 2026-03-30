import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jaly Web Studio — Digital Products That Perform",
    template: "%s | Jaly Web Studio",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  description:
    "Jaly Web Studio builds Chrome extensions, web apps, SEO blogs, landing pages, and full websites that are fast, accessible, and built to convert.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jaly Web Studio",
    title: "Jaly Web Studio — Digital Products That Perform",
    description:
      "Chrome extensions, web apps, SEO blogs, landing pages, and full websites built to perform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaly Web Studio — Digital Products That Perform",
    description:
      "Chrome extensions, web apps, SEO blogs, landing pages, and full websites built to perform.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-[#111111]">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
