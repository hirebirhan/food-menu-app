"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 py-8">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Hira Restaurant</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Contact Us</h3>
            <p className="text-gray-700 dark:text-gray-300">123 Food Street</p>
            <p className="text-gray-700 dark:text-gray-300">City, Country</p>
            <p className="text-gray-700 dark:text-gray-300">Email: info@hirarestaurant.com</p>
            <p className="text-gray-700 dark:text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-600 pt-4 text-center text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Hira Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
