"use client"
import { openModal } from "@/store/modalSlice";
import { useAppDispatch } from "@/store/store";

export default function Footer() {
  const dispatch = useAppDispatch();
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-bold mb-6 text-gray-400">Popular</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/weight-loss/ozempic" className="hover:text-gray-300">Weight Loss</a></li>
              <li><a href="/weight-loss/ozempic" className="hover:text-gray-300">Ozempic</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-400">About MetaFit</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-300">Founders letter</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Press</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-400">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#contact" onClick={() =>
                              dispatch(openModal({ modalType: "ContactUsForm" as any }))
                            } className="hover:text-gray-300">Contact us</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
              {/* <li><a href="/pricing" className="hover:text-gray-300">Pricing</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-400">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/terms-of-use" className="hover:text-gray-300">Terms of Use</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/consumer-health-data" className="hover:text-gray-300">Consumer Health Data</a></li>
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