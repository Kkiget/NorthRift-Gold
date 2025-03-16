'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default function Products() {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample products data with actual images
  const products: Product[] = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "vegetables",
      price: 150, // Updated market price for large, organic heads
      image: "/images/products/tomatoes.jpg",
      description: "Locally grown tomatoes"
    },
    {
      id: 2,
      name: "Carrots",
      category: "vegetables",
      price: 150, // Updated market price for organic or premium carrots
      image: "/images/products/carrots.jpg",
      description: "Fresh, crunchy carrots"
    },
    {
      id: 3,
      name: "Cabbage",
      category: "vegetables",
      price: 150, // Updated market price for large, organic heads
      image: "/images/products/cabbage.jpg",
      description: "Fresh, crisp cabbage"
    },
    {
      id: 4,
      name: "Apples",
      category: "fruits",
      price: 1000, // Updated market price for large, high quality or out of season strawberries
      image: "/images/products/apples.jpg",
      description: "Sweet and juicy apples"
    },
    {
      id: 5,
      name: "Strawberries",
      category: "fruits",
      price: 1000, // Updated market price for large, high quality or out of season strawberries
      image: "/images/products/strawberries.jpeg",
      description: "Sweet and fresh strawberries"
    },
    {
      id: 6,
      name: "Honey",
      category: "dairy",
      price: 1500, // Updated market price for raw, organic, or specialty honey
      image: "/images/products/honey.jpg",
      description: "Pure, natural honey"
    },
    {
      id: 7,
      name: "Goat Milk",
      category: "dairy",
      price: 400, // Updated market price for organic or farm-fresh goat milk
      image: "/images/products/goat milk.jpg",
      description: "Fresh, goat milk"
    },
    {
      id: 8,
      name: "Beans",
      category: "grains",
      price: 300, // Updated market price for imported or specialty varieties
      image: "/images/products/beans.jpg",
      description: "Fresh beans"
    }
  ];

  const categories = ['all', 'vegetables', 'fruits', 'grains', 'dairy'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
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
                <h3 className="text-lg font-semibold mb-2 text-black">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">Ksh{product.price.toFixed(2)}</span>
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
    </div>
  );
}