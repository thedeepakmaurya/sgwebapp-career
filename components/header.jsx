"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full flex xl:px-[8%] px-[4%] justify-between h-20 bg-gradient-to-r from-[#65258a] to-[#e80566] max-w-[100vw] relative">
      <Image
        className="h-full"
        src="https://www.sgwebapp.com/img/sg-web-techiques-logo.svg"
        alt="logo"
        height={100}
        width={170}
      />
      <ul className="xl:flex lg:flex hidden gap-7 items-center text-white text-md">
        <li>
          <Link href="https://www.sgwebapp.com/about-us">About</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/#recentwork">Work</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/services">Services</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="https://www.sgwebapp.com/blog">Blog</Link>
        </li>
        <li className="bg-white py-3 px-6 text-black rounded-md hover:bg-[#fe4c1c]">
          <Link className="flex gap-2" href="https://www.sgwebapp.com/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2" y1="12" x2="18" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
            Get Started
          </Link>
        </li>
      </ul>
      <div className="xl:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center h-auto justify-center px-2 py-1.5 text-[#fe4c1c] bg-white rounded-sm"
        >
          {isMobileMenuOpen ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="28" height="1.5" fill="currentColor" />
              <rect y="11" width="28" height="1.5" fill="currentColor" />
              <rect y="18" width="28" height="1.5" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col px-[4%] absolute top-20 left-0 w-full bg-gradient-to-r from-[#65258a] to-[#e80566] text-white text-md gap-4 py-6">
          <li>
            <Link
              href="https://www.sgwebapp.com/about-us"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://www.sgwebapp.com/#recentwork"
              onClick={toggleMobileMenu}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="https://www.sgwebapp.com/services"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="https://www.sgwebapp.com/case-studies"
              onClick={toggleMobileMenu}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="https://www.sgwebapp.com/blog"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="bg-white py-3 px-6 text-center text-black rounded-md hover:bg-[#fe4c1c]">
            <Link
              href="https://www.sgwebapp.com/contact"
              onClick={toggleMobileMenu}
            >
              Get Started
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
