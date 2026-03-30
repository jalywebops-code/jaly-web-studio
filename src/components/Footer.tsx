import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const servicesList = [
  "SEO & AEO Optimized Websites and Blogs",
  "AI-Powered Features & Integrations",
  "Web Apps / Chrome Extensions",
  "iOS / Android Apps",
  "Landing Pages",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Logo + tagline */}
          <div>
            <Link
              href="/"
              className="inline-block mb-3 focus-ring rounded"
              aria-label="Jaly Web Studio — home"
            >
              <Image
                src="/logo.png"
                alt="Jaly Web Studio"
                width={240}
                height={60}
                className="h-[60px] w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
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
                    className="text-gray-500 hover:text-[#111111] text-sm transition-colors focus-ring rounded"
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
                    className="text-gray-500 hover:text-[#111111] text-sm transition-colors focus-ring rounded"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Jaly Web Studio. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/sitemap.xml"
              className="hover:text-[#111111] transition-colors focus-ring rounded"
            >
              Sitemap
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#111111] transition-colors focus-ring rounded"
            >
              jalywebops@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
