'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from './CartButton';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.querySelector('nav');
            if (isMobileMenuOpen && nav && !nav.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            {/* Backdrop for mobile menu */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            <nav className="container mx-auto px-4 py-4 relative z-50">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image 
                            src="/images/logo/Logo.png" 
                            alt="NorthRift Gold Logo" 
                            width={50} 
                            height={50}
                            className="w-auto h-auto"
                        />
                        <span style={{ fontFamily: 'BankGothicMediumBT' }} className="text-3xl font-bold tracking-wider">
                            <span className="text-green-600">NorthRift</span>
                            <span className="text-yellow-600 ml-1">Gold</span>
                        </span>
                    </Link>

                    <button 
                        className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>

                    <ul className={`absolute md:relative top-full left-0 w-full md:w-auto
                        md:flex md:space-x-8 bg-white md:bg-transparent
                        ${isMobileMenuOpen ? 'flex flex-col shadow-md' : 'hidden'}
                        md:flex items-center transition-all duration-300 ease-in-out
                        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        <li className="p-4 md:p-0">
                            <Link 
                                href="/#about" 
                                className="hover:text-green-600 transition-colors block py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About us
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link 
                                href="/products" 
                                className="hover:text-green-600 transition-colors block py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link 
                                href="/#why-us" 
                                className="hover:text-green-600 transition-colors block py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Why Us
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link 
                                href="/#testimonials" 
                                className="hover:text-green-600 transition-colors block py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li className="p-4 md:p-0">
                            <Link 
                                href="/blog" 
                                className="hover:text-green-600 transition-colors block py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="p-4 md:p-0 flex space-x-4">
                            <CartButton />
                            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                                Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}