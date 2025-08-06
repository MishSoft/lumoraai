import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-12">
      {/* Text section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Empowering Creators with the Spark of{" "}
          <span className="text-[#F93493]">AI</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          LumoraAI helps you craft content, build your brand, and shine brighter
          — faster than ever.
        </p>
      </div>

      {/* Video section */}
      <div className="w-full md:w-1/2">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-lg shadow-lg"
        >
          <source
            src="/video/A_futuristic_minimalistic_202508061711.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
