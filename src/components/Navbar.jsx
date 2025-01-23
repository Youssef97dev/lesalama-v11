"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ item1, item2, item3, lang }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav
      className={`fixed hidden lg:block top-0 left-0 w-full z-20 px-7 bg-color_1`}
    >
      <div className="w-full flex justify-between items-center bg-color_3 px-20 mt-5 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-salama-humberger.png"
            alt="le salama logo"
            width={76}
            height={76}
            className="cursor-pointer"
          />
        </Link>

        {/* Menu */}
        <div className="flex justify-center items-center gap-6 text-[#000000] text-[15.2px] font-extralight">
          <Link
            href="#event"
            className="cursor-pointer p-2 hover:border-b border-black"
          >
            {item1}
          </Link>
          <Link
            href="https://www.lesalamamarrakech.com/menu/"
            target="_blank"
            className="cursor-pointer p-2 hover:border-b border-black"
          >
            {item2}
          </Link>
          <Link
            href="#gallery"
            className="cursor-pointer p-2 hover:border-b border-black"
          >
            {item3}
          </Link>
          <div
            className="relative "
            onMouseLeave={() => setIsDropdownOpen(false)}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
              {lang === "en" ? (
                <img src="/english.png" className="w-5 h-5 md:w-7 md:h-7" />
              ) : (
                <img src="/france.png" className="w-5 h-5 md:w-7 md:h-7" />
              )}
              <IoMdArrowDropdown size={18} color="#464545" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-8 bg-color_3 mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                <li className="px-4 py-2 hover:bg-color_2 rounded-lg cursor-pointer">
                  <Link href="/en">
                    <img src="/english.png" className="w-5 h-5 md:w-7 md:h-7" />
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-color_2 rounded-lg cursor-pointer">
                  <Link href="/">
                    <img src="/france.png" className="w-5 h-5 md:w-7 md:h-7" />
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
