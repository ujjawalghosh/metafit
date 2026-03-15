"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-6 text-gray-400">Popular</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/learn-more" className="hover:text-gray-300">Learn More</Link></li>
              <li><Link href="/weight-loss/ozempic" className="hover:text-gray-300">Ozempic</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-400">About MetaFit</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/founders-letter" className="hover:text-gray-300">Founders letter</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/press" className="hover:text-gray-300">Press</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-400">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/contact-us" className="hover:text-gray-300">Contact us</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              {/* <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-400">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/terms-of-use" className="hover:text-gray-300">Terms of Use</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/consumer-health-data" className="hover:text-gray-300">Consumer Health Data</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">2026 © All rights reserved, MetaFit</p>
        </div>
      </div>
    </footer>
  );
}