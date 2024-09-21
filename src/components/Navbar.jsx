'use client'
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { title: "Home", path: "/" },
    { title: "Event", path: "/event" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#363636] py-4 border border-[#191A23]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2">
        <div className="hidden lg:flex space-x-12 text-white">
          {navlinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                href={link.path}
                className="flex items-center space-x-1 hover:text-gray-300"
              >
                <span>{link.title}</span>
                <ChevronDown size={16} />
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded-md shadow-lg z-50">
                <Link
                  href="/submenu1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Submenu Item 1
                </Link>
                <Link
                  href="/submenu2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Submenu Item 2
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden text-white">
          <button onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black px-4 py-2 rounded-full pr-10 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <Search size={20} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#363636] text-white py-4">
          {navlinks.map((link) => (
            <div key={link.path} className="px-4 py-2 border-b border-gray-700">
              <Link
                href={link.path}
                className="block hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.title}
              </Link>
            </div>
          ))}
          <div className="px-4 py-2">
            <Link href="/submenu1" className="block hover:text-gray-300">
              Submenu Item 1
            </Link>
            <Link href="/submenu2" className="block hover:text-gray-300">
              Submenu Item 2
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
