'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const testimonials = [
  {
    name: 'Sarah Wanjiku',
    role: 'Local Farmer',
    content: 'NorthRift Gold has transformed our farming practices. Their support and guidance have helped us achieve better yields while maintaining sustainable methods.',
    image: '/images/hero/sarah.jpg'
  },
  {
    name: 'Michael Omondi',
    role: 'Restaurant Owner',
    content: 'The quality of produce from NorthRift Gold is exceptional. Their commitment to organic farming and local sourcing aligns perfectly with our values.',
    image: '/images/hero/michael.jpg'
  },
  {
    name: 'Grace Achieng',
    role: 'Community Member',
    content: 'As a regular customer, I appreciate their dedication to supporting local farmers while providing us with fresh, organic produce.',
    image: '/images/hero/grace.jpg'
  }
];

export default function Home() {
  const { addItem } = useCart();

  // Featured products for the homepage
  const featuredProducts = [
    {
      id: 6,
      name: "Honey",
      price: 1000,
      image: "/images/products/honey.jpg",
      description: "Pure, natural honey"
    },
    {
      id: 13,
      name: "Beef Tallow",
      price: 700,
      image: "/images/products/beef tallow.jpg",
      description: "High-quality beef tallow"
    },
    {
      id: 15,
      name: "Chicken",
      price: 1500,
      image: "/images/products/chicken.jpg",
      description: "Free-range chicken"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <style jsx>{`
          @keyframes morph {
            0% { background-image: url('/images/hero/preview1.jpg'); }
            16.67% { background-image: url('/images/hero/preview2.jpg'); }
            33.33% { background-image: url('/images/hero/farmer.jpg'); }
            50% { background-image: url('/images/hero/preview3.jpg'); }
            66.67% { background-image: url('/images/newsletter/Produce2.jpeg'); }
            83.33% { background-image: url('/images/blog/blog6.jpg'); }
            100% { background-image: url('/images/blog/blog5.jpg'); }
          }
          .morphing-background {
            animation: morph 42s infinite linear;
            background-size: cover;
            background-position: center;
          }
        `}</style>
        <div className="absolute inset-0 morphing-background" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fresh, Organic, and Locally Sourced Produce
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Supporting Kenyan Farmers, Delivering Quality to You
          </p>
          <Link 
            href="/products" 
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 mt-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="space-y-4 md:col-span-3">
              <h2 className="text-3xl font-bold text-green-700">At NorthRift Gold Farm</h2>
              <p className="text-lg text-gray-600">
                We are passionate about growing fresh, chemical-free produce. Nestled in the heart of nature, our farm uses sustainable farming practices to protect the environment and deliver the healthiest food to your table. Every seed we plant is a step toward a greener, healthier future.
              </p>
              <p className="text-sm text-gray-500">
                We are dedicated to providing fresh, chemical-free produce through sustainable farming. Nestled in nature, our farm prioritizes protecting the environment while delivering healthy, high-quality food to your table.
              </p>
              <Link 
                href="/about"
                className="bg-transparent border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-700">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">KSh{product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addItem(product)}
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Organic</h3>
              <p className="text-gray-800">All our products are certified organic and grown without harmful pesticides.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Local Delivery</h3>
              <p className="text-gray-800">Fast and reliable delivery to your doorstep within 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-usd text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fair Prices</h3>
              <p className="text-gray-800">Competitive prices that support both farmers and customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Stay Updated</h2>
            <p className="text-gray-800 mb-8">Subscribe to our newsletter for the latest products and special offers.</p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-700"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from farmers, customers, and community members about their experience with NorthRift Gold
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}