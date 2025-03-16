import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import CartButton from '@/components/CartButton'
import { CartProvider } from '@/context/CartContext'

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
      </head>
      <body className={inter.className}>
        <CartProvider>
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

          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">About Us</h3>
                  <p className="text-gray-300">
                    NorthRift Gold provides fresh, sustainable produce directly from local farmers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
                    <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                    <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                    <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><i className="fas fa-phone mr-2"></i> +254 123 456 789</li>
                    <li><i className="fas fa-envelope mr-2"></i> info@northriftgold.com</li>
                    <li><i className="fas fa-map-marker-alt mr-2"></i> Eldoret, Kenya</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook text-2xl"></i></a>
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter text-2xl"></i></a>
                    <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram text-2xl"></i></a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                <p>&copy; {new Date().getFullYear()} NorthRift Gold. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
