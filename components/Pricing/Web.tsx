"use client";

import Link from "next/link";

const plans = [
  {
    title: "Basic",
    price: "From 4,500,000 VND",
    description: "Delivered within 3 days",
    features: [
      "Pre-built template selection",
      "Basic UI customization",
      "Mobile-optimized design",
      "Hosting & domain support",
      "Deployment to server",
      "Source code & documentation handover",
      "2-year warranty",
    ],
    noFeatures: ["No admin dashboard included"],
    highlight: false,
  },
  {
    title: "Pro",
    price: "From 7,500,000 VND",
    description: "Demo within 3–4 days",
    features: [
      "Similar to a reference website",
      "3 rounds of UI customization",
      "Mobile-optimized design",
      "Hosting & domain support",
      "Deployment to server",
      "Source code & documentation handover",
      "2-year warranty",
    ],
    noFeatures: ["No admin dashboard included"],
    highlight: false,
  },
  {
    title: "Premium",
    price: "From 9,500,000 VND",
    description: "Demo within 3–4 days",
    features: [
      "Similar to a reference website",
      "Unlimited UI customization",
      "Mobile-optimized design",
      "Hosting & domain support",
      "Deployment to server",
      "Source code & documentation handover",
      "2-year warranty",
      "Includes admin dashboard",
    ],
    highlight: false,
  },
  {
    title: "On-Demand",
    price: "From 15,000,000 VND",
    description: "Around 2–4 weeks",
    features: [
      "Custom design from scratch",
      "Unlimited customization",
      "Mobile-optimized design",
      "Hosting & domain support",
      "Deployment to server",
      "Source code & documentation handover",
      "2-year warranty",
      "Includes admin dashboard",
    ],
    highlight: true,
  },
];

export default function WebPricingTable() {
  return (
    <section
      id="pricing"
      className="relative z-10 bg-white py-16 dark:bg-[#0b1120] md:py-20 lg:py-28"
    >
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
          Website Pricing Plans
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-600 dark:text-gray-300">
          Professional web design packages tailored for different budgets and
          business needs.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border border-gray-200 bg-white/90 p-6 backdrop-blur-md transition-all hover:scale-[1.02] hover:shadow-xl dark:border-white/10 dark:bg-white/5 ${
                plan.highlight ? "ring-2 ring-[#0f93fa]" : ""
              }`}
            >
              <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold text-[#0f93fa]">{plan.price}</p>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {plan.description}
              </p>
              <ul className="mb-2 space-y-1 text-left text-sm text-gray-700 dark:text-gray-300">
                {plan.features.map((f, i) => (
                  <li key={i}>✔️ {f}</li>
                ))}
                {plan.noFeatures?.map((f, i) => (
                  <li key={i} className="text-gray-400">
                    ❌ {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="https://portfolio.newdanang.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-opacity-90"
          >
            Explore our portfolio for real client projects
          </Link>
        </div>
      </div>
    </section>
  );
}
