import type { Metadata } from "next";
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Chrome extensions, web apps, SEO blogs, landing pages, and full websites — built fast, accessible, and optimised to convert.",
};

const serviceDetails = [
  {
    title: "Chrome Extensions",
    body: "We build Manifest V3 Chrome extensions using React and TypeScript. Whether it's a productivity tool, content modifier, or browser automation helper — we handle everything from the popup UI to background service workers and Chrome Storage sync. Secure, lightweight, and ready for the Chrome Web Store.",
  },
  {
    title: "Web Apps",
    body: "Full-stack applications built on Next.js with TypeScript strict mode, Tailwind CSS, and Supabase or PlanetScale backends. We architect for scale from day one — proper data modelling, auth patterns, and API design — so you're not rewriting things six months later.",
  },
  {
    title: "SEO Blogs",
    body: "Programmatic SEO sites that rank. We combine topic clustering, Core Web Vitals optimisation, JSON-LD structured data, and MDX content pipelines to build content machines that compound over time. Not just a blog — a growth channel.",
  },
  {
    title: "Landing Pages",
    body: "High-converting landing pages that load in under a second. We nail the copy structure (problem → solution → proof → CTA), keep the layout clean, and make sure nothing gets in the way of someone clicking your button. A/B-test-ready from the start.",
  },
  {
    title: "Full Websites",
    body: "End-to-end websites for businesses, studios, and creators. Design system, headless CMS integration (Sanity, Contentful, or Notion), analytics, SEO, accessibility, performance monitoring, and ongoing support. One partner for the whole thing.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-20 pb-4 bg-white"
        aria-labelledby="services-page-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
            Services
          </p>
          <h1
            id="services-page-heading"
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111] text-balance"
          >
            What We Build
          </h1>
          <p className="mt-5 text-xl text-gray-500 max-w-2xl leading-relaxed">
            Focused on five service areas where we go deep, not wide. Every
            project is built with performance and accessibility as defaults.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <ServiceCards />

      {/* Service details */}
      <section
        className="py-24 bg-white"
        aria-labelledby="service-details-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="service-details-heading"
            className="text-3xl font-extrabold text-[#111111] mb-14 tracking-tight"
          >
            How We Approach Each Service
          </h2>
          <div className="space-y-12">
            {serviceDetails.map(({ title, body }, i) => (
              <article
                key={title}
                className="grid grid-cols-1 md:grid-cols-[2rem_1fr] gap-6 items-start"
              >
                <span
                  className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-brand-purple text-sm font-bold shrink-0 mt-1"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-2xl">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-gray-100">
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Not sure which service fits your project?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-purple hover:underline focus-ring rounded"
              >
                Get in touch
              </Link>{" "}
              and we&rsquo;ll help you figure it out.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let's build something together."
        subheadline="Tell us what you're working on and we'll respond within one business day."
      />
    </>
  );
}
