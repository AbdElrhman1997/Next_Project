"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a6e9e] to-[#0a4d73] text-white pt-8 pb-4 bottom-0 w-full text-center">
      <div className="container mx-auto">
        {/* Grid with 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/team" className="hover:text-gray-300">
                  Our Team
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <Link href="/consulting" className="hover:text-gray-300">
                  Consulting
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/development" className="hover:text-gray-300">
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/design" className="hover:text-gray-300">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/support" className="hover:text-gray-300">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="hover:text-gray-300">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/disclaimer" className="hover:text-gray-300">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
      </div>
      <div className="mt-8 border-t border-[#0a4d73] pt-4 text-center w-full">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Test. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
