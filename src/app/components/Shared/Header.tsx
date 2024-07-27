"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm mb-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            <span className="text-green-800 mr-1">Hira</span>
            <span className="text-secondary">Restaurant</span>
          </span>
        </Link>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
        <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/menu" className="block py-2 px-3 text-gray-900 rounded hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Menu
              </Link>
            </li>
            <li className="flex items-center mt-2 md:mt-0">
              <Link href="/cart" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary cursor-pointer w-6 h-6">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
