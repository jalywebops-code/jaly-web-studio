import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-24 pb-32"
      aria-label="Hero"
    >
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative purple blob */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, #5A1F94 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left — text */}
          <div>
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple mb-6 tracking-wide uppercase">
              <span
                className="inline-block w-6 h-px bg-brand-purple"
                aria-hidden="true"
              />
              Jaly Web Studio
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.05] text-balance mb-6">
              We Build Digital Products{" "}
              <span className="text-brand-green">That </span><span className="text-brand-purple">Perform.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed mb-10">
From Websites with AI integrations, to mobile apps and custom Chrome Extensions— built fast, accessible, and optimised to perform from day one.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brand-green text-white text-base font-semibold hover:bg-green-900 transition-colors focus-ring btn-animate"
              >
                See My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brand-purple text-white text-base font-semibold hover:bg-purple-800 transition-colors focus-ring btn-animate"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="hidden lg:flex items-stretch self-stretch">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <Image
                src="/laptop-colorful.png"
                alt="Colorfully lit laptop representing modern web development"
                width={800}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
