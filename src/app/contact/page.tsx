import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Jaly Web Studio. Tell us what you're building and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — intro */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111111] text-balance mb-6"
            >
              Let&rsquo;s Talk.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-md">
              Tell us what you&rsquo;re building. No pressure, no jargon — just
              an honest conversation about whether we&rsquo;re the right fit.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-brand-purple mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:jalywebops@gmail.com"
                    className="text-[#111111] font-medium hover:text-brand-purple transition-colors focus-ring rounded"
                  >
                    jalywebops@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-brand-purple mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                    Location
                  </p>
                  <p className="text-[#111111] font-medium">Remote — worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-brand-purple mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                    Response time
                  </p>
                  <p className="text-[#111111] font-medium">
                    Within 1 business day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
