"use client";
import Link from 'next/link';
import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { openModal } from '@/store/modalSlice';
import { useAppDispatch } from '@/store/store';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navLinks = [
    'How It Works', 'Doctors', 'Testimonials'
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 py-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-8">
          {/* Logo - SVG from source */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/">
              <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#1a1a1a" letterSpacing="-1">MetaFit</text>
              </svg>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[13px] font-semibold text-gray-900 hover:text-gray-600 transition-colors"
              >
                {link}
              </Link>
            ))}
            <Link
              key={"Contact us"}
              href="#contact"
              onClick={() =>
                dispatch(openModal({ modalType: "ContactUsForm" as any }))
              }
              className="text-[13px] font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold hidden md:block">Log in</button>
            <UserIcon className="h-6 w-6 md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}