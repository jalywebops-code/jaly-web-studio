const services = [
  {
    title: "Chrome Extensions",
    description:
      "Manifest V3 extensions that are fast, secure, and designed for real user workflows. From productivity tools to browser automation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="2" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Web Apps",
    description:
      "Full-stack applications built with Next.js and TypeScript. Scalable, maintainable, and optimised for performance from the start.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "SEO Blogs",
    description:
      "Content-first sites built for search. Programmatic SEO, Core Web Vitals, JSON-LD structured data, and MDX-powered content pipelines.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages that load instantly. Compelling copy structure, clear CTAs, and A/B-test-ready layout patterns.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    title: "Full Websites",
    description:
      "End-to-end websites for businesses and creators. Design system, CMS integration, analytics, accessibility, and ongoing support.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

interface ServiceCardsProps {
  /** Limit the number of cards shown (useful for homepage preview) */
  limit?: number;
}

export default function ServiceCards({ limit }: ServiceCardsProps) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] text-balance"
          >
            Services Built for Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service) => (
            <article
              key={service.title}
              className="group p-8 border border-gray-200 rounded-xl bg-white hover:border-brand-purple hover:shadow-md transition-all duration-200 cursor-default"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 text-brand-purple mb-5 group-hover:bg-purple-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
