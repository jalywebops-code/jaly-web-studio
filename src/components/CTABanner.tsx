import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
}

export default function CTABanner({
  headline = "Ready to build something great?",
  subheadline = "Let's talk about your project. No pressure, no jargon — just an honest conversation.",
}: CTABannerProps) {
  return (
    <section
      className="bg-brand-purple py-20"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance mb-4"
        >
          {headline}
        </h2>
        <p className="text-purple-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {subheadline}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-brand-purple text-base font-bold hover:bg-purple-50 transition-colors focus-ring shadow-lg btn-animate"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
