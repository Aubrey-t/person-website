"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "#education", label: "Education", isEducation: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

interface NavBarProps {
  alignLeft?: boolean;
}

export default function NavBar({ alignLeft = false }: NavBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Scroll to education section if on home, else go home and scroll after navigation
  const handleEducationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById("education");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#education");
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#0a1812] border-b border-green-900/40 shadow-sm">
      <div className={`max-w-7xl mx-auto px-4 flex h-16 items-center ${alignLeft ? "justify-between" : "justify-center"}`}>
        {/* Nav Links */}
        <div className={`flex gap-12 ${alignLeft ? "" : "mx-auto"}`}>
          {navLinks.map((link) =>
            link.isEducation ? (
              <a
                key={link.label}
                href="#education"
                onClick={handleEducationClick}
                className={`text-lg font-medium transition-colors text-white hover:text-green-400 ${pathname === "/" && typeof window !== 'undefined' && window.location.hash === "#education" ? 'text-green-400' : ''}`}
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors text-white hover:text-green-400 ${pathname === link.href ? 'text-green-400' : ''}`}
              >
                {link.label}
              </Link>
            )
          )}
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