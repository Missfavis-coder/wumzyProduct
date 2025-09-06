"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledToFeatures, setScrolledToFeatures] = useState(false);
  const [scrolledToFooter, setScrolledToFooter] = useState(false);


  useEffect(() => {
    const featuresSection = document.querySelector("#features");
    const footerSection = document.querySelector("#footer");
    if (!featuresSection ) return;
    if (!footerSection ) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrolledToFeatures(true);
            setScrolledToFooter(true)
          } else {
            setScrolledToFeatures(false);
            setScrolledToFooter(!scrolledToFooter)
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of features section is visible
    );

    observer.observe(featuresSection);
    observer.observe(footerSection);

    return () => {
      if (featuresSection) observer.unobserve(featuresSection);
      if (footerSection) observer.unobserve(footerSection);
    };
  }, []);


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
            text-sm font-medium transition-colors text-shadow-amber-400 " ${isLinkActive(link.href)
                ? ""
                : "hover:text-yellow-600"
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
    <nav 
    className={`w-full py-4 fixed top-0 left-0 z-50 transition-colors duration-500 `}
    >
      <div className={` max-w-7xl lg:mx-auto my-2 flex justify-between items-center h-10 rounded-full px-8 py-8 lg:px-16 backdrop-blur-2xl mx-5 ${
      scrolledToFeatures ? "bg-yellow-600 text-neutral-800" : "bg-neutral-900 text-white"
    }`}>
        <div className="flex text-2xl font-bold text-white items-center gap-2">
          <Link href="/">
              AI Scheduler
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <NavLinkItems />
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/"
            className="text-sm px-5 py-2.5 bg-yellow-600  rounded-full transition-all hover:scale-105"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-700"
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
        <div className="md:hidden absolute top-full left-p w-full h-[150px] py-4 bg-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-6 sm:px-3 flex flex-col items-center">
            <NavLinkItems isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
}
