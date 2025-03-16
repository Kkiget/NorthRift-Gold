'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addItem } = useCart();

  // Featured products for the homepage
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      price: 4.99,
      image: "/images/products/Produce4.jpg",
      description: "Locally grown organic tomatoes"
    },
    {
      id: 2,
      name: "Organic Carrots",
      price: 3.99,
      image: "/images/products/carrots.jpg",
      description: "Fresh, crunchy organic carrots"
    },
    {
      id: 3,
      name: "Organic Apples",
      price: 6.99,
      image: "/images/products/apples.jpg",
      description: "Sweet and juicy organic apples"
    }
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-green-700">Fresh. Organic. Sustainable.</h1>
            <p className="text-lg mb-8 text-gray-600">100% Trusted Platform</p>
            <Link 
              href="/products"
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors inline-block"
            >
              Buy our Products Today
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Image
              src="/images/hero/farmer.jpg"
              alt="Farmer holding fresh produce"
              width={500}
              height={400}
              className="object-cover rounded-lg"
              priority
            />
            <Image
              src="/images/hero/preview1.jpg"
              alt="Farm landscape"
              width={240}
              height={200}
              className="object-cover rounded-lg"
            />
            <Image
              src="/images/hero/preview2.jpg"
              alt="Fresh vegetables"
              width={240}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 mt-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="space-y-4 md:col-span-2">
              <h2 className="text-3xl font-bold text-green-700">At Organic</h2>
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
            <div className="grid grid-rows-2 gap-2">
              <Image
                src="/images/about/about1.jpg"
                alt="Beekeeper with honey"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
              <Image
                src="/images/about/about2.jpg"
                alt="Green leaves"
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
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
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-700">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addItem(product)}
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
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
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600">All our products are certified organic and grown without harmful pesticides.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery to your doorstep within 24 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-usd text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Prices</h3>
              <p className="text-gray-600">Competitive prices that support both farmers and customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest products and special offers.</p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
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
    </main>
  );
}