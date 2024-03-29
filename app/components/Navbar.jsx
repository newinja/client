'use client'

import { useState } from "react";
import React from "react";


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // !false
  }
  return (
    <div className="">
      <div className="s shadow-md shadow-gray-400">
        <header className="flex justify-between p-4 container mx-auto">
          <div className="Brand">
            <a href="/">LOGO</a>
          </div>


          {/* Toggle MenuButton */}
          <div className="md:hidden ">
            <button id="menu-toggle" className="text-green-600" onClick={toggleMenu}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4 6h19M4 12h19M4 18h19"></path>
              </svg>
            </button>
          </div>
          {/* Toggle MenuButton */}

          <ul className="hidden md:flex space-x-4">
            <li className=" md:hover:text-green-800 text-green-600"><a href="/">หน้าแรก</a></li>
            <li className=" md:hover:text-green-800 text-green-600"><a href="/garden-service">บริการของเรา</a></li>
            <li className=" md:hover:text-green-800 text-green-600"><a href="/blogs">บทความ</a></li>
            <li className=" md:hover:text-green-800 text-green-600"><a href="/portfolio">ผลงาน</a></li>
            <li className=" md:hover:text-green-800 text-green-600"><a href="/contact-me">ติดต่อเรา</a></li>

          </ul>
        </header>
      </div>

      {/* Moblie Menu */}
      {
        isMenuOpen ? (
          <ul className="flex-col text-center">
            <li className=" md:hover:text-green-800 text-green-600 mt-1 p-3 shadow-sm" ><a href="/">หน้าแรก</a></li>
            <li className=" md:hover:text-green-800 text-green-600  p-3 shadow-sm"><a href="/garden-service">บริการของเรา</a></li>
            <li className=" md:hover:text-green-800 text-green-600  p-3 shadow-sm"><a href="/blogs">บทความ</a></li>
            <li className=" md:hover:text-green-800 text-green-600  p-3 shadow-sm"><a href="/portfolio">ผลงาน</a></li>
            <li className=" md:hover:text-green-800 text-green-600  p-3 shadow-sm"><a href="/contact-me">ติดต่อเรา</a></li>
          </ul>
        ) : null
      }
      {/* Moblie Menu */}
    </div>
  );

}


export default Navbar;
