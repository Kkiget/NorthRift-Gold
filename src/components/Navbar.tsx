'use client';

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styles

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Logo
                </Link>
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
                <ul className={`md:flex space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}