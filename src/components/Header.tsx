// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Fred Soma Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {[
            "about",
            "services",
            "tech",
            "projects",
            "testimonials",
            "contact",
          ].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-700 hover:text-blue-600"
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <FiX size={24} className="text-gray-700" />
          ) : (
            <FiMenu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 py-4 px-6">
            {[
              "about",
              "services",
              "tech",
              "projects",
              "testimonials",
              "contact",
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={handleLinkClick}
                  className="block text-gray-700 hover:text-blue-600 text-lg"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
