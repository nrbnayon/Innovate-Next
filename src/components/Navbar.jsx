import React from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "Event", path: "/event" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-[#363636] text-white py-4 px-6 mb-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-12">
          {navlinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                href={link.path}
                className="flex items-center space-x-1 hover:text-gray-300"
              >
                <span>{link.title}</span>
                <ChevronDown size={16} />
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded-md shadow-lg z-20">
                {/* Dropdown content can be added here */}
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Submenu Item 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Submenu Item 2
                </a>
              </div>
            </div>
          ))}
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
    </nav>
  );
};

export default Navbar;
