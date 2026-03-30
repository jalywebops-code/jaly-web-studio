import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Jaly Web Studio — Digital Products That Perform",
  description:
    "We build Chrome extensions, web apps, SEO blogs, landing pages, and full websites that are fast, accessible, and built to convert.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards limit={3} />
      <PortfolioGrid limit={3} />
      <CTABanner />
    </>
  );
}
