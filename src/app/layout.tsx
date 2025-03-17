import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import CartButton from '@/components/CartButton'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NorthRift Gold - Fresh Sustainable Produce',
  description: 'Your source for fresh, organic, and sustainable produce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <style>
          {`
            @font-face {
              font-family: 'BankGothicMediumBT';
              src: url('/fonts/BankGothicMediumBT.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <header className="sticky top-0 bg-white shadow-md z-50">
            <nav className="flex justify-between items-center px-8 py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/Logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl font-bold">NorthRift Gold</span>
              </Link>
              <ul className="hidden md:flex items-center space-x-6">
                <li><Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link></li>
                <li><Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors">Products</Link></li>
                <li><Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">Blog</Link></li>
                <li><CartButton /></li>
              </ul>
              <MobileNav />
            </nav>
          </header>

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
