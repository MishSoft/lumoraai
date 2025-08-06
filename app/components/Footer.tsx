import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left - Brand + Copyright */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">LumoraAI</h3>
          <p className="text-sm text-gray-800">
            &copy; {new Date().getFullYear()} LumoraAI. All rights reserved.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
          <a href="#features" className="hover:text-[#F93493] transition">
            Features
          </a>
          <a href="#templates" className="hover:text-[#F93493] transition">
            Templates
          </a>
          <a href="#community" className="hover:text-[#F93493] transition">
            Community
          </a>
          <a href="#pricing" className="hover:text-[#F93493] transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-[#F93493] transition">
            Contact
          </a>
        </nav>

        {/* Right - Social Media Icons */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#F93493] transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#F93493] transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#F93493] transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#F93493] transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
