import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import CartButton from '@/components/CartButton'
import { CartProvider } from '@/context/CartContext'
import WhatsAppButton from '@/components/WhatsAppButton'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NorthRift Gold - Fresh Sustainable Produce',
  description: 'Your source for fresh, organic, and sustainable produce',
}

interface Item {
  name: string;
  price: number;
}

interface Props {
  selectedItems: Item[];
}

const PlaceOrderButton: React.FC<Props> = ({ selectedItems }) => {
  const formatMessage = () => {
    let message = 'Hello, I would like to place an order for the following items:\n\n'
    let total = 0

    selectedItems.forEach(item => {
      message += `- ${item.name}: KSh ${item.price}\n`
      total += item.price
    })

    message += `\nTotal: KSh ${total}`
    return encodeURIComponent(message)
  }

  const handlePlaceOrder = () => {
    const phoneNumber = '254715491326' // Your WhatsApp number
    const message = formatMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button 
      onClick={handlePlaceOrder} 
      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
    >
      Place Order
    </button>
  )
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
            <nav className="flex justify-between items-center px-4 sm:px-8 py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/Logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="mr-3"
                  priority
                />
                <span className="text-xl md:text-2xl font-bold text-green-700 hidden sm:block">
                  NorthRift <span className="text-amber-600">Gold</span>
                </span>
              </Link>
              <ul className="hidden md:flex items-center space-x-6">
                <li><Link href="/" className="text-green-700 hover:text-amber-600 font-medium transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-green-700 hover:text-amber-600 font-medium transition-colors">About</Link></li>
                <li><Link href="/products" className="text-green-700 hover:text-amber-600 font-medium transition-colors">Products</Link></li>
                <li><Link href="/blog" className="text-green-700 hover:text-amber-600 font-medium transition-colors">Blog</Link></li>
                <li><CartButton /></li>
              </ul>
              <div className="flex items-center md:hidden">
                <span className="text-xl font-bold text-green-700 mr-2">
                  NR <span className="text-amber-600">Gold</span>
                </span>
                <MobileNav />
              </div>
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
                    <li><i className="fas fa-phone mr-2"></i> +254 715 491 326</li>
                    <li><i className="fas fa-envelope mr-2"></i> northriftgold@gmail.com</li>
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
                <p>&copy; {new Date().getFullYear()} NorthRift Gold. All rights reserved. Designed & Developed by 
                    <a 
                        href="https://github.com/Kkiget" 
                        className="text-green-500 hover:text-green-700" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Kkiget
                    </a>
                </p>
              </div>
            </div>
          </footer>
          <WhatsAppButton />
          <PlaceOrderButton selectedItems={[]} />
        </CartProvider>
      </body>
    </html>
  )
}
