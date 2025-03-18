'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const testimonials = [
  {
    name: 'Sarah Wanjiku',
    role: 'Local Restaurant Owner',
    image: '/images/testimonials/testimonial1.jpg',
    rating: 5,
    quote: `The quality of produce from NorthRift Gold is exceptional. Their commitment to organic farming and local sourcing makes them our preferred supplier.`
  },
  {
    name: 'James Maina',
    role: 'Home Chef',
    image: '/images/testimonials/testimonial2.jpg',
    rating: 5,
    quote: `I love how fresh and flavorful their vegetables are. Knowing that I'm supporting local farmers makes it even better.`
  },
  {
    name: 'Mary Akinyi',
    role: 'Health Coach',
    image: '/images/testimonials/testimonial3.jpg',
    rating: 5,
    quote: `As a health coach, I recommend NorthRift Gold to all my clients. Their organic produce is consistently high quality.`
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/hero/hero1.jpg"
          alt="Fresh Organic Produce"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fresh, Organic, and Locally Sourced Produce
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Supporting Kenyan Farmers, Delivering Quality to You
            </p>
            <Link 
              href="/products"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Shop Now
            </Link>
          </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for updates on new products and farming practices.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}