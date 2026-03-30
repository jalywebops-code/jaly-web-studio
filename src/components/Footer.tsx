import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const servicesList = [
  "Chrome Extensions",
  "Web Apps",
  "SEO Blogs",
  "Landing Pages",
  "Full Websites",
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Wordmark + tagline */}
          <div>
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight mb-3 focus-ring rounded"
              aria-label="Jaly Web Studio — home"
            >
              <span className="text-brand-green">Jaly</span>
              <span className="text-brand-purple">Web</span>
              <span className="text-white"> Studio</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building digital products that are fast, accessible, and built to
              perform.
            </p>
          </div>

          {/* Col 2 — Nav links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white text-sm transition-colors focus-ring rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2" role="list">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white text-sm transition-colors focus-ring rounded"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Jaly Web Studio. All rights
            reserved.
          </p>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors focus-ring rounded"
          >
            hello@jalywebstudio.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
