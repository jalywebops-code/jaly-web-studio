// 2x2 grid: top-left green, top-right purple, bottom-left purple, bottom-right green
// (also alternates correctly in single-column mobile view)
const tileColors = [
  { bg: "bg-green-50",  border: "border-green-100",  hover: "hover:border-brand-green",  icon: "text-brand-green",  iconHover: "group-hover:bg-green-100"  },
  { bg: "bg-purple-50", border: "border-purple-100", hover: "hover:border-brand-purple", icon: "text-brand-purple", iconHover: "group-hover:bg-purple-100" },
  { bg: "bg-purple-50", border: "border-purple-100", hover: "hover:border-brand-purple", icon: "text-brand-purple", iconHover: "group-hover:bg-purple-100" },
  { bg: "bg-green-50",  border: "border-green-100",  hover: "hover:border-brand-green",  icon: "text-brand-green",  iconHover: "group-hover:bg-green-100"  },
  { bg: "bg-green-50",  border: "border-green-100",  hover: "hover:border-brand-green",  icon: "text-brand-green",  iconHover: "group-hover:bg-green-100"  },
];

const services = [
  {
    title: "SEO & AEO Optimized Websites and Blogs",
    description:
      "Websites built to rank in search and surface in AI-generated answers. Topic clustering, Core Web Vitals, JSON-LD structured data, and AEO-optimized content — so you show up whether someone's Googling or asking ChatGPT.",
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "iOS / Android Apps",
    description:
      "Native mobile apps built for iOS and Android that feel like they belong on the device. From concept to App Store and Play Store submission — clean architecture, smooth performance, and AI-ready from the ground up.",
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
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Web Apps / Chrome Extensions",
    description:
      "Full-stack web applications and Manifest V3 Chrome extensions built with Next.js and TypeScript. Scalable, maintainable, and built to perform — with hooks for AI features like smart search, summarization, and Claude API integrations where they add real value.",
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
    title: "AI-Powered Features & Integrations",
    description:
      "AI isn't a product — it's a layer. I build intelligent features into websites, apps, and workflows: chatbots that actually know your business, content pipelines that scale without the overhead, and automations that run while you sleep. If there's a smarter way to do it, we'll find it.",
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
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
        <path d="M4 10a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4H6a2 2 0 0 1-2-2z" />
        <path d="M16 10a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2z" />
        <line x1="12" y1="8" x2="12" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="16.01" />
        <line x1="8" y1="12" x2="8" y2="12.01" />
        <line x1="16" y1="12" x2="16" y2="12.01" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {displayed.map((service, i) => {
            const colors = tileColors[i % tileColors.length];
            return (
              <article
                key={service.title}
                className={`group p-8 border rounded-xl ${colors.bg} ${colors.border} ${colors.hover} hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white ${colors.icon} mb-5 ${colors.iconHover} transition-colors`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
