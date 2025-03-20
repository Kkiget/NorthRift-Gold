'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-button');
      
      if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        id="mobile-menu-button"
        className="md:hidden text-2xl text-green-700 hover:text-amber-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/logo/Logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-green-700">
                NorthRift <span className="text-amber-600">Gold</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-green-700 hover:text-amber-600 transition-colors"
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-3 text-green-700 hover:text-amber-600 transition-colors font-medium text-lg border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-home mr-3"></i>Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-3 text-green-700 hover:text-amber-600 transition-colors font-medium text-lg border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-info-circle mr-3"></i>About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-3 text-green-700 hover:text-amber-600 transition-colors font-medium text-lg border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-box mr-3"></i>Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-3 text-green-700 hover:text-amber-600 transition-colors font-medium text-lg border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-blog mr-3"></i>Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="block py-3 text-green-700 hover:text-amber-600 transition-colors font-medium text-lg border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-shopping-cart mr-3"></i>Checkout
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-green-700 hover:text-amber-600 transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-green-700 hover:text-amber-600 transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-green-700 hover:text-amber-600 transition-colors">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
