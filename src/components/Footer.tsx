import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#07190e] text-green-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        {/* Left: Name and Title */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-green-200">Aubrey Tsambatare</span>
          <span className="text-green-400 text-sm">Quantitative Analyst & Financial Engineer</span>
        </div>
        {/* Center: Copyright */}
        <div className="text-green-100/80 text-sm text-center">
          © {new Date().getFullYear()} Aubrey Tsambatare. All rights reserved.
        </div>
        {/* Right: Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-xl">
            <a href="https://www.linkedin.com/in/aubrey96/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors"><FaLinkedin /></a>
            <a href="mailto:your@email.com" className="text-green-400 hover:text-green-300 transition-colors"><FaEnvelope /></a>
          </div>
          <div className="flex gap-4 mt-2 text-green-300 text-xs">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 