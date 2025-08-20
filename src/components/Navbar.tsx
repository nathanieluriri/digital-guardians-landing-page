// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Importing modern icons

// Centralize navigation links for easy management
const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#careers", label: "Careers" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // This effect prevents the user from scrolling the page when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-[#dff2ff]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-4 py-2 lg:px-6">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <Image
              src="/digital-guardians-logo-with-wordmark.png"
              alt="Digital Guardians Logo"
              width={120}
              height={38}
              priority
            />
          </Link>

          {/* Desktop Main Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-[#2084C7]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/contact"
              className="rounded-xl border-2 border-[#404040] px-4 py-2 text-base font-semibold text-gray-800 transition-all hover:bg-gray-200/50"
            >
              Contact
            </Link>
            <Link
              href="/portal" // Changed to a more descriptive route
              className="group flex items-center gap-2.5 rounded-xl bg-[#2084C7] px-4 py-2 text-base font-semibold text-white transition-transform hover:scale-105"
            >
              <span>Portal</span>
              <Image
                src={'/white-arrow.svg'}
                height={9}
                width={21}
                alt="Arrow"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="rounded-md p-2 text-gray-800 transition hover:bg-gray-400/20 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center gap-y-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-gray-800"
                onClick={toggleMenu} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="mt-16 flex flex-col items-center gap-y-6">
            <Link
              href="/contact"
              className="w-48 rounded-xl border-2 border-[#404040] py-3 text-center text-lg font-semibold text-gray-800"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/portal"
              className="flex w-48 items-center justify-center gap-2.5 rounded-xl bg-[#2084C7] py-3 text-lg font-semibold text-white"
              onClick={toggleMenu}
            >
              <span>Portal</span>
              <Image src={'/white-arrow.svg'} height={9} width={21} alt="Arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}