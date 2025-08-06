import React from "react";

const templates = [
  {
    title: "Social Media Post",
    description:
      "Generate high-converting Instagram or TikTok captions with visuals.",
    image: "/images/11.png",
  },
  {
    title: "Video Script Generator",
    description: "Turn ideas into engaging short-form scripts in seconds.",
    image: "/images/22.png",
  },
  {
    title: "Product Descriptions",
    description: "Craft persuasive product copy for your shop or landing page.",
    image: "/images/33.png",
  },
];

export default function Templates() {
  return (
    <section id="templates" className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready-to-Use <span className="text-[#F93493]">Templates</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose from a variety of smart templates designed to supercharge your
          content creation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {templates.map((template, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-5"
          >
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {template.title}
            </h3>
            <p className="text-gray-600 text-sm">{template.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
