import type { Metadata } from "next";
import Image from "next/image";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jaly Web Studio is a Connecticut-based web design and development studio built on a simple belief: good work done right the first time is always faster than cutting corners.",
};

export default function WorkPage() {
  return (
    <>
      {/* About section */}
      <section className="pt-20 pb-16 bg-white" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
                About
              </p>
              <h1
                id="about-heading"
                className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111] text-balance mb-10"
              >
                About <span className="text-brand-green">Jaly</span> <span className="text-brand-purple">Web</span> Studio
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Jaly Web Studio is a Connecticut-based web design and development
                  studio built on a simple belief: good work done right the first
                  time is always faster than cutting corners.
                </p>
                <p>
                  After years working alongside one of the country&rsquo;s top
                  digital marketing agencies, I picked up something most developers
                  miss — the strategy behind the work. What makes a site rank. What
                  makes a visitor stay. What makes a tool actually get used. That
                  experience didn&rsquo;t just teach me the craft, it gave me a real
                  appreciation for building things that perform.
                </p>
                <p>
                  I&rsquo;m a developer, a builder, and a father of three. That last
                  part matters more than it sounds. When you&rsquo;re juggling that
                  much, inefficiency isn&rsquo;t an option. You learn to work clean,
                  stay focused, and ship things that hold up.
                </p>
                <p>
                  Every project that comes through this studio gets the same
                  treatment: thoughtful design, solid code, and a genuine interest in
                  whether it actually works for the person using it. Not just how it
                  looks in a browser — how it functions in the real world.
                </p>
                <p className="font-medium text-[#111111]">
                  If you care about quality and want someone who&rsquo;ll treat your
                  project like it matters, you&rsquo;re in the right place.
                </p>
              </div>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block relative" style={{ minHeight: "600px" }}>
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/devs-collaborating.png"
                  alt="Two developers collaborating over code"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Work With Us */}
      <section className="py-24 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
              Why Work With Us
            </p>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] text-balance mb-10"
            >
              Why Work With <span className="text-brand-green">Jaly</span> <span className="text-brand-purple">Web</span> Studio
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Most agencies will take your project, hand it to a junior, and
                move on to the next one. That&rsquo;s not how this works. Jaly
                Web Studio is new, intentionally small, and plan to keep it that
                way for a reason — every client gets my full attention, start to
                finish. No handoffs. No inbox black holes. Just someone
                who&rsquo;s genuinely invested in getting it right.
              </p>
              <p>
                Being an upstart isn&rsquo;t a weakness — it&rsquo;s the whole
                point. I don&rsquo;t have a roster of a hundred clients to hide
                behind. Your project matters to my reputation, my growth, and
                frankly, my pride in the work. That&rsquo;s a level of
                accountability you won&rsquo;t get from a studio that&rsquo;s
                already made it. You get someone who still has everything to
                prove, and who shows up that way every single time.
              </p>
              <p className="font-medium text-[#111111]">
                What you&rsquo;ll get is simple: honest communication, clean
                work, and a builder who treats your deadline like it&rsquo;s his
                own. If something isn&rsquo;t right, we fix it. If something
                could be better, I&rsquo;ll tell you. That&rsquo;s the deal —
                and it doesn&rsquo;t change whether you&rsquo;re a one-page site
                or a full platform build.
              </p>
            </div>
          </div>
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
