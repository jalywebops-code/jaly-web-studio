import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isReal: boolean;
  href: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "tab-manager-pro",
    title: "Tab Manager Pro",
    description:
      "A Chrome extension that intelligently groups, suspends, and searches browser tabs. Built with Manifest V3, React, and TypeScript. 500+ active users.",
    tags: ["Chrome Extension", "React", "TypeScript", "Manifest V3"],
    isReal: true,
    href: "/work#tab-manager-pro",
  },
  {
    id: "placeholder-2",
    title: "Coming Soon",
    description: "Next project in progress.",
    tags: [],
    isReal: false,
    href: "/work",
  },
  {
    id: "placeholder-3",
    title: "Coming Soon",
    description: "Next project in progress.",
    tags: [],
    isReal: false,
    href: "/work",
  },
  {
    id: "placeholder-4",
    title: "Coming Soon",
    description: "Next project in progress.",
    tags: [],
    isReal: false,
    href: "/work",
  },
  {
    id: "placeholder-5",
    title: "Coming Soon",
    description: "Next project in progress.",
    tags: [],
    isReal: false,
    href: "/work",
  },
];

interface PortfolioGridProps {
  /** Limit how many cards to show (e.g. 3 for homepage preview) */
  limit?: number;
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-gray-300"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function PortfolioGrid({ limit }: PortfolioGridProps) {
  const displayed = limit ? portfolioItems.slice(0, limit) : portfolioItems;

  return (
    <section className="py-24 bg-gray-50" aria-labelledby="portfolio-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">
            Our Work
          </p>
          <h2
            id="portfolio-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] text-balance"
          >
            Projects We&rsquo;re Proud Of
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((item) =>
            item.isReal ? (
              <Link
                key={item.id}
                href={item.href}
                id={item.id}
                className="group flex flex-col p-8 border border-gray-200 rounded-xl bg-white hover:border-brand-purple hover:shadow-md transition-all duration-200 focus-ring"
              >
                {/* Placeholder image area */}
                <div
                  className="w-full h-44 rounded-lg bg-gradient-to-br from-purple-50 to-green-50 mb-6 flex items-center justify-center"
                  aria-label="Tab Manager Pro screenshot placeholder"
                >
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-12 h-12 text-brand-purple opacity-40"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
                    <line x1="24" y1="2" x2="24" y2="16" stroke="currentColor" strokeWidth="2" />
                    <line x1="24" y1="32" x2="24" y2="46" stroke="currentColor" strokeWidth="2" />
                    <line x1="2" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="2" />
                    <line x1="32" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-brand-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-brand-purple transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple">
                  View details
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ) : (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-xl bg-white min-h-[260px]"
                aria-label="Coming soon project"
              >
                <LockIcon />
                <p className="mt-4 text-sm font-semibold text-gray-400">
                  Coming Soon
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
