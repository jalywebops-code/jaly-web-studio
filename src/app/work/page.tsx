import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See the Chrome extensions, web apps, and digital products we've built. Real projects, real results.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-20 pb-4 bg-white" aria-labelledby="work-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
            Portfolio
          </p>
          <h1
            id="work-heading"
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111] text-balance"
          >
            Our Work
          </h1>
          <p className="mt-5 text-xl text-gray-500 max-w-2xl leading-relaxed">
            Projects we&rsquo;ve built from scratch — each one designed to
            perform, not just look good.
          </p>
        </div>
      </section>
      <PortfolioGrid />
      <CTABanner
        headline="Got a project in mind?"
        subheadline="We'd love to add it to this list. Let's talk."
      />
    </>
  );
}
