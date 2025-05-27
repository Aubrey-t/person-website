"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

interface NavBarProps {
  alignLeft?: boolean;
}

export default function NavBar({ alignLeft = false }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#0a1812] border-b border-green-900/40 shadow-sm">
      <div className={`max-w-7xl mx-auto px-4 flex h-16 items-center ${alignLeft ? "justify-between" : "justify-center"}`}>
        {/* Nav Links */}
        <div className={`flex gap-12 ${alignLeft ? "" : "mx-auto"}`}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors text-white hover:text-green-400 ${pathname === link.href ? 'text-green-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Download Resume Button (right) */}
        <div className={`flex-1 flex ${alignLeft ? "justify-end" : "justify-end"}`}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-5 py-2 rounded text-green-200 font-semibold bg-green-900/40 hover:bg-green-800 transition shadow focus:outline-none focus:ring-2 focus:ring-green-400 animate-pulse download-resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
} 