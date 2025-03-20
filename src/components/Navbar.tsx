'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styles

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartCount] = useState(0);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image 
                            src="/images/logo/Logo.png" 
                            alt="NorthRift Gold Logo" 
                            width={50} 
                            height={50}
                            className="w-auto h-auto"
                        />
                        <div className="font-['Bank Gothic'] text-black">
                            <span className="text-2xl font-bold text-shadow-md">NorthRift</span>
                            <span className="text-2xl font-bold text-yellow-700 text-shadow-md">Gold</span>
                        </div>
                    </Link>

                    <button 
                        className="md:hidden text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>

                    {isMobileMenuOpen && (
                        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}></div>
                    )}

                    <ul className={`absolute md:relative top-full left-0 w-full md:w-auto
                        md:flex md:space-x-8 bg-white md:bg-transparent
                        ${isMobileMenuOpen ? 'flex flex-col shadow-md bg-white z-50' : 'hidden'}
                        md:flex items-center transition-all duration-300 ease-in-out z-50`}
                    >
                        <li className="p-6 md:p-0">
                            <Link href="/#about" className="hover:text-green-600 transition-colors">
                                About us
                            </Link>
                        </li>
                        <li className="p-6 md:p-0">
                            <Link href="/products" className="hover:text-green-600 transition-colors">
                                Products
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link href="/#why-us" className="hover:text-green-600 transition-colors">
                                Why Us
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link href="/#testimonials" className="hover:text-green-600 transition-colors">
                                Testimonials
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link href="/blog" className="hover:text-green-600 transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li className="p-4 md:p-0 flex space-x-4">
                            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                <span>Cart</span>
                                <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-sm">
                                    {cartCount}
                                </span>
                            </button>
                            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                                Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <style jsx>{`
                    .whatsapp-button {
                        display: none;
                    }

                    .menu-open .whatsapp-button {
                        display: none; /* Ensure it stays hidden */
                    }
                `}</style>
            )}
        </header>
    );
}