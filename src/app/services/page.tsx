import type { Metadata } from "next";
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "iOS/Android apps, web apps, Chrome extensions, SEO & AEO websites, AI integrations, and landing pages — built fast, accessible, and built to perform.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    body: "We start with a conversation, not a proposal. Tell me what you're building, what's not working, or what you wish existed. I'll ask the right questions and give you an honest read on what it'll actually take.",
  },
  {
    step: "02",
    title: "Scope & Plan",
    body: "No vague estimates. I'll put together a clear scope of work — what gets built, how long it takes, and what it costs. If something's out of scope or a better approach exists, I'll tell you before we start.",
  },
  {
    step: "03",
    title: "Build",
    body: "I build in focused sprints with regular check-ins. You'll see progress early and often — not a big reveal at the end. Feedback is welcome throughout, not just at launch.",
  },
  {
    step: "04",
    title: "Launch & Hand Off",
    body: "When we ship, you own it. Full code access, documentation, and a walkthrough of how everything works. No lock-in, no mystery. And if you need ongoing support, I'm here for that too.",
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

      {/* How it works */}
      <section
        className="py-24 bg-gray-50"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
              The Process
            </p>
            <h2
              id="process-heading"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] text-balance"
            >
              What Working Together Looks Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {processSteps.map(({ step, title, body }) => (
              <article
                key={step}
                className="p-8 bg-white border border-gray-200 rounded-xl"
              >
                <span className="inline-block text-4xl font-extrabold text-brand-purple opacity-20 mb-4 leading-none">
                  {step}
                </span>
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Not sure which service fits your project?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-purple hover:underline focus-ring rounded"
              >
                Get in touch
              </Link>{" "}
              and we&rsquo;ll figure it out together.
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
