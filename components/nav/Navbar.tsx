"use client";
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';
import { openModal } from '@/store/modalSlice';
import { useAppDispatch } from '@/store/store';

export default function Navbar() {
  const dispatch = useAppDispatch();
  
  // Update: Defined links with specific IDs
  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Doctors', href: '/#doctors' },
    { name: 'Testimonials', href: '/#testimonials' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 py-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-8">
          {/* Logo */}
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
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold text-gray-900 hover:text-gray-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              key="FAQs"
              href="/faq" 
              className="text-[13px] font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              FAQs
            </Link>
            <Link
              key="Contact us"
              href="#contact" // Assuming you might have a footer ID or modal trigger
              onClick={(e) => {
                e.preventDefault(); // Prevent jump if strictly modal
                dispatch(openModal({ modalType: "ContactUsForm" as any }));
              }}
              className="text-[13px] font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold hidden">Log in</button>
            <UserIcon className="h-6 w-6 md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}