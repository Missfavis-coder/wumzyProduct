"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Products" },
  { href: "/", label: "About" },
  { href: "/privacy", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLinkActive = (href: string, activePaths?: string[]) => {
    if (activePaths) {
      return activePaths.some((p) => pathname.startsWith(p));
    }
    return pathname === href;
  };

  const NavLinkItems = ({ isMobile = false }) => (
    <>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`
            text-sm font-medium transition-colors text-gray-700" ${isLinkActive(link.href)
                ? "text-primary-600"
                : "hover:text-primary-600"
              }
          `}
          onClick={() => isMobile && setIsMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className=" w-full bg-white relative backdrop-blur-xl z-50">
      <div className=" max-w-7xl mx-auto flex justify-between items-center h-10 px-4 py-12 lg:px-16">
        <div className="flex text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text items-center gap-2">
          <Link href="/">
            WunmzyWears.
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <NavLinkItems />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/"
            className="text-sm px-5 py-2.5 bg-primary-600  rounded-full transition-all hover:scale-105"
          >
            User Profile
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute  w-full h-[150px] py-2 bg-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-6 sm:px-3 flex flex-col items-center">
            <NavLinkItems isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
}
