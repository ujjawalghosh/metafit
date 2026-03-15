"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/#doctors" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg
                width="120"
                height="36"
                viewBox="0 0 120 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="28"
                  fontFamily="Arial, sans-serif"
                  fontSize="32"
                  fontWeight="bold"
                  fill="#1a1a1a"
                  letterSpacing="-1"
                >
                  MetaFit
                </text>
              </svg>
            </Link>

            {/* Desktop Links */}
            <div className="hidden xl:flex flex-1 items-center justify-center space-x-6">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-semibold text-gray-900 hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact-us" className="text-[13px] font-semibold text-gray-900 hover:text-gray-500 transition-colors">
                Contact us
              </Link>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="xl:hidden p-1 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-gray-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact-us" className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-gray-600 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 xl:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
