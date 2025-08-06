import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why <span className="text-[#F93493]">LumoraAI</span>?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our platform empowers creators to produce stunning content with
          AI-driven tools — faster, smarter, and with more impact.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="/images/wclu4awclu4awclu1.png"
            alt="AI Templates"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Templates</h3>
          <p className="text-gray-600">
            Instantly generate social posts, scripts, or brand visuals with
            smart presets built for creators.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="/images/Gemini_Generated_Image_50a7c950a7c950a72.png"
            alt="Creative Studio"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Creative Studio</h3>
          <p className="text-gray-600">
            A minimalist design interface where your ideas come to life without
            complexity or clutter.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="/images/Gemini_Generated_Image_nsju89nsju89nsju3.png"
            alt="Built for Speed"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Built for Speed</h3>
          <p className="text-gray-600">
            Fast generation, instant previews, and seamless export — all
            optimized for your workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
