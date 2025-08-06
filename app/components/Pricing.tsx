import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "0",
    description: "Best for trying things out or hobby creators",
    features: [
      "5 templates/month",
      "Basic AI generation",
      "Watermarked exports",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    title: "Pro",
    price: "200",
    description: "For serious creators ready to level up",
    features: [
      "Unlimited templates",
      "Advanced AI tools",
      "HD exports (no watermark)",
      "Early access to new features",
    ],
    cta: "Upgrade Now",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Simple Pricing for Every Creator
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether you&apos;re just starting out or already growing, LumoraAI has
          a plan for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-sm border text-center ${
              plan.highlighted
                ? "bg-white border-[#F93493] shadow-md"
                : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              {plan.title}
            </h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold text-gray-900 mb-6">
              ${plan.price}
              <span className="text-base font-normal text-gray-500"> /mo</span>
            </div>
            <ul className="text-gray-700 text-sm mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <span>
                    <Check className="text-green-500" />
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-2 rounded-md text-white text-sm font-medium transition ${
                plan.highlighted
                  ? "bg-[#F93493] hover:bg-pink-500"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
