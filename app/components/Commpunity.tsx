import React from "react";

const users = [
  {
    name: "Maya",
    role: "Content Creator",
    image: "/images/maya.png",
    quote: "LumoraAI helped me turn ideas into polished content in seconds.",
  },
  {
    name: "Luka",
    role: "Instagram Coach",
    image: "/images/luka.png",
    quote: "Templates are 🔥 — so easy to use and convert great.",
  },
  {
    name: "Nino",
    role: "Beauty Influencer",
    image: "/images/nino.png",
    quote: "Finally a platform that understands what creators need!",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24 px-6 md:px-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join the <span className="text-[#F93493]">LumoraAI</span> Community
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Thousands of creators already use LumoraAI to level up their content —
          join them today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-lg shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-[#F93493] mb-2">{user.role}</p>
            <p className="text-gray-600 text-sm italic">“{user.quote}”</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#F93493] text-white px-6 py-3 rounded-md text-sm shadow hover:bg-pink-500 transition">
          Become a Creator
        </button>
      </div>
    </section>
  );
}
