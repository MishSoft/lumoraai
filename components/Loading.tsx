/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Loading() {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Image as absolute element */}
      <img
        src="/1920.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl"></div>

      {/* Spinner on top */}
      <div className="relative z-10 w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </section>
  );
}
