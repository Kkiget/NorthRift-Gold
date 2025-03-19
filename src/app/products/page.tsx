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
  quantity?: number;
}

export default function Products() {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedQuantity, setSelectedQuantity] = useState<{ [key: number]: string }>({});

  // Sample products data with actual images
  const products: Product[] = [
    {
      id: 1,
      name: "Tomatoes",
      category: "vegetables",
      price: 100, // Updated price
      image: "/images/products/fresh tomatoes.jpg",
      description: "Locally grown tomatoes"
    },
    {
      id: 2,
      name: "Carrots",
      category: "vegetables",
      price: 150, // Updated price
      image: "/images/products/carrots.jpg",
      description: "Fresh, crunchy carrots"
    },
    {
      id: 3,
      name: "Cabbage",
      category: "vegetables",
      price: 35, // Updated price
      image: "/images/products/cabbage.jpg",
      description: "Fresh, crisp cabbage"
    },
    {
      id: 4,
      name: "Apples",
      category: "fruits",
      price: 450, // Updated price
      image: "/images/products/apples.jpg",
      description: "Sweet and juicy apples"
    },
    {
      id: 5,
      name: "Strawberries",
      category: "fruits",
      price: 200, // Updated price
      image: "/images/products/strawberries.jpeg",
      description: "Sweet and fresh strawberries"
    },
    {
      id: 6,
      name: "Honey",
      category: "Animal products",
      price: 1000, // Updated price
      image: "/images/products/honey.jpg",
      description: "Pure, natural honey"
    },
    {
      id: 7,
      name: "Goat Milk",
      category: "Animal products",
      price: 200, // Updated price
      image: "/images/products/goat milk.jpg",
      description: "Fresh, goat milk"
    },
    {
      id: 8,
      name: "Beans",
      category: "grains",
      price: 300, // Updated price
      image: "/images/products/beans.jpg",
      description: "Fresh beans"
    },
    {
      id: 9,
      name: "Sour Milk",
      category: "Animal products",
      price: 200, // Updated price
      image: "/images/products/Sour Milk.jpg",
      description: "Premium quality sour milk"
    },
    {
      id: 10,
      name: "Spinach",
      category: "vegetables",
      price: 25, // Updated price
      image: "/images/products/spinach.jpg",
      description: "Fresh, organic spinach"
    },
    {
      id: 11,
      name: "Tilapia",
      category: "Animal products",
      price: 600, // Updated price
      image: "/images/products/Tilapia Fish.jpg",
      description: "Fresh tilapia fish"
    },
    {
      id: 12,
      name: "Basil",
      category: "herbs",
      price: 55, // Updated price
      image: "/images/products/basil.jpg",
      description: "Fresh basil leaves"
    },
    {
      id: 13,
      name: "Beef Tallow",
      category: "Animal products",
      price: 700, // Updated price
      image: "/images/products/beef tallow.jpg",
      description: "High-quality beef tallow"
    },
    {
      id: 14,
      name: "Capcicum",
      category: "vegetables",
      price: 150, // Updated price
      image: "/images/products/capcicum.jpg",
      description: "Fresh capcicum peppers"
    },
    {
      id: 15,
      name: "Chicken",
      category: "Animal products",
      price: 1500, // Updated price
      image: "/images/products/chicken.jpg",
      description: "Free-range chicken"
    },
    {
      id: 16,
      name: "Chilly",
      category: "vegetables",
      price: 200, // Updated price
      image: "/images/products/chilly.jpg",
      description: "Spicy chilly peppers"
    },
    {
      id: 17,
      name: "Ghee",
      category: "Animal products",
      price: 1200, // Updated price
      image: "/images/products/ghee.jpg",
      description: "Pure ghee"
    },
    {
      id: 18,
      name: "Goat Meat",
      category: "Animal products",
      price: 1200, // Updated price
      image: "/images/products/goat.jpg",
      description: "Tender goat meat"
    },
    {
      id: 19,
      name: "Kales",
      category: "vegetables",
      price: 25, // Updated price
      image: "/images/products/kales.jpg",
      description: "Fresh kales"
    },
    {
      id: 20,
      name: "Mint",
      category: "herbs",
      price: 40, // Updated price
      image: "/images/products/mint.jpg",
      description: "Fresh mint leaves"
    },
    {
      id: 21,
      name: "Persley",
      category: "herbs",
      price: 35, // Updated price
      image: "/images/products/persley.jpg",
      description: "Fresh persley leaves"
    },
    {
      id: 22,
      name: "Pumpkins",
      category: "vegetables",
      price: 300, // Updated price
      image: "/images/products/pumkins.jpg",
      description: "Fresh pumpkins"
    },
    {
      id: 23,
      name: "Rosemary",
      category: "herbs",
      price: 45, // Updated price
      image: "/images/products/Rosemary.jpg",
      description: "Fresh rosemary leaves"
    },
    {
      id: 24,
      name: "Sheep Mutton",
      category: "Animal products",
      price: 1000, // Updated price
      image: "/images/products/sheep.jpg",
      description: "Tender sheep mutton"
    },
    {
      id: 25,
      name: "Red Cabbage",
      category: "vegetables",
      price: 160, // Updated price
      image: "/images/products/red cabbage.jpg",
      description: "Fresh red cabbage"
    },
    {
      id: 26,
      name: "Red Onions",
      category: "vegetables",
      price: 100, // Updated price
      image: "/images/products/red onions.jpg",
      description: "Fresh red onions"
    },
    {
      id: 27,
      name: "White Onions",
      category: "vegetables",
      price: 160, // Updated price
      image: "/images/products/white onions.jpg",
      description: "Fresh white onions"
    },
    {
      id: 28,
      name: "Potatoes",
      category: "vegetables",
      price: 60, // Updated price
      image: "/images/products/potatoes.jpg",
      description: "Fresh potatoes"
    },
    {
      id: 29,
      name: "Sweet Potatoes",
      category: "vegetables",
      price: 90, // Updated price
      image: "/images/products/sweet potatoes.jpg",
      description: "Fresh sweet potatoes"
    },
    {
      id: 30,
      name: "Arrowroots",
      category: "vegetables",
      price: 100, // Updated price
      image: "/images/products/arrowroots.jpg",
      description: "Fresh arrowroots"
    },
    {
      id: 31,
      name: "Thyme",
      category: "herbs",
      price: 35, // Updated price
      image: "/images/products/thyme.jpg",
      description: "Fresh thyme"
    },
    {
      id: 32,
      name: "Spring Onions",
      category: "vegetables",
      price: 25, // Updated price
      image: "/images/products/spring onions.jpg",
      description: "Fresh spring onions"
    },
    {
      id: 33,
      name: "Kunde",
      category: "vegetables",
      price: 30, // Updated price
      image: "/images/products/kunde.jpg",
      description: "Fresh kunde"
    },
    {
      id: 34,
      name: "Gooseberries",
      category: "fruits",
      price: 200, // Updated price
      image: "/images/products/gooseberries.jpg",
      description: "Fresh gooseberries"
    },
    {
      id: 35,
      name: "Ripe Bananas",
      category: "fruits",
      price: 90, // Updated price
      image: "/images/products/ripe bananas.jpg",
      description: "Fresh ripe bananas"
    },
    {
      id: 36,
      name: "Matoke Bananas",
      category: "fruits",
      price: 170, // Updated price
      image: "/images/products/matoke bananas.jpg",
      description: "Fresh matoke bananas"
    },
    {
      id: 37,
      name: "Sweet Bananas",
      category: "fruits",
      price: 200, // Updated price
      image: "/images/products/sweet bananas.jpg",
      description: "Fresh sweet bananas"
    },
    {
      id: 38,
      name: "Avocado",
      category: "fruits",
      price: 180, // Updated price
      image: "/images/products/avocado.jpg",
      description: "Fresh avocado"
    },
    {
      id: 39,
      name: "Dry Maize",
      category: "grains",
      price: 50, // Corrected price
      image: "/images/products/dry maize.jpg",
      description: "Fresh dry maize"
    },
    {
      id: 40,
      name: "Wheat",
      category: "grains",
      price: 100, // Updated price
      image: "/images/products/wheat.jpg",
      description: "Fresh wheat"
    },
    {
      id: 41,
      name: "Sorghum",
      category: "grains",
      price: 200, // Corrected price
      image: "/images/products/sorghum.jpg",
      description: "Fresh sorghum"
    },
    {
      id: 42,
      name: "Finger Millet",
      category: "grains",
      price: 270, // Updated price
      image: "/images/products/Finger Millet.jpg",
      description: "Fresh finger millet"
    },
    {
      id: 43,
      name: "Cassava",
      category: "grains",
      price: 110, // Updated price
      image: "/images/products/Cassava.jpg",
      description: "Fresh cassava"
    },
    {
      id: 44,
      name: "Ground Nuts",
      category: "grains",
      price: 160, // Updated price
      image: "/images/products/ground nuts.jpg",
      description: "Fresh ground nuts"
    },
    {
      id: 45,
      name: "Managu",
      category: "vegetables",
      price: 35, // Updated price
      image: "/images/products/managu.jpg",
      description: "Fresh managu"
    },
    {
      id: 46,
      name: "Saga",
      category: "vegetables",
      price: 30, // Updated price
      image: "/images/products/Saga.jpg",
      description: "Fresh saga"
    },
    {
      id: 47,
      name: "Terere",
      category: "vegetables",
      price: 40, // Updated price
      image: "/images/products/terere.jpg",
      description: "Fresh terere"
    },
    {
      id: 48,
      name: "Mrenda",
      category: "vegetables",
      price: 30, // Updated price
      image: "/images/products/mrenda.jpg",
      description: "Fresh mrenda"
    },
    {
      id: 49,
      name: "Nderema",
      category: "vegetables",
      price: 30, // Updated price
      image: "/images/products/nderema.jpg",
      description: "Fresh nderema"
    },
    {
      id: 50,
      name: "Mitoo",
      category: "vegetables",
      price: 50, // Updated price
      image: "/images/products/Mitoo.jpg",
      description: "Fresh mitoo"
    },
    {
      id: 51,
      name: "Pumpkin Leaves",
      category: "vegetables",
      price: 40, // Updated price
      image: "/images/products/pumpkin leaves.jpg",
      description: "Fresh pumpkin leaves"
    },
    {
      id: 52,
      name: "Kienyeji Eggs",
      category: "Animal products",
      price: 750, // Updated price
      image: "/images/products/Kienyeji eggs.jpg",
      description: "Fresh kienyeji eggs"
    },
    {
      id: 53,
      name: "Broccoli",
      category: "vegetables",
      price: 200, // Updated price
      image: "/images/products/Broccoli.jpg",
      description: "Fresh broccoli"
    },
    {
      id: 54,
      name: "Cauliflower",
      category: "vegetables",
      price: 200, // Updated price
      image: "/images/products/cauliflower.jpg",
      description: "Fresh cauliflower"
    },
    {
      id: 55,
      name: "Dhania",
      category: "herbs",
      price: 25, // Updated price
      image: "/images/products/Dhania.jpg",
      description: "Fresh dhania"
    },
    {
      id: 56,
      name: "Leeks",
      category: "vegetables",
      price: 200, // Updated price
      image: "/images/products/leeks.jpg",
      description: "Fresh leeks"
    },
    {
      id: 57,
      name: "Celery",
      category: "vegetables",
      price: 280, // Updated price
      image: "/images/products/celery.jpg",
      description: "Fresh celery"
    },
    {
      id: 58,
      name: "Cucumber",
      category: "vegetables",
      price: 150, // Updated price
      image: "/images/products/cucumber.jpg",
      description: "Fresh cucumber"
    },
    {
      id: 59,
      name: "Chinese Cabbage",
      category: "vegetables",
      price: 175, // Updated price
      image: "/images/products/Chinese Cabbage.jpg",
      description: "Fresh Chinese cabbage"
    },
    {
      id: 60,
      name: "Egg Plant",
      category: "vegetables",
      price: 150, // Updated price
      image: "/images/products/egg plant.jpg",
      description: "Fresh egg plant"
    },
    {
      id: 61,
      name: "Green Peas",
      category: "vegetables",
      price: 450, // Updated price
      image: "/images/products/Green peas.jpg",
      description: "Fresh green peas"
    }
  ];

  const categories = ['all', 'vegetables', 'fruits', 'grains', 'herbs', 'Animal products'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuantityChange = (productId: number, quantity: string) => {
    setSelectedQuantity((prev: { [key: number]: string }) => ({ ...prev, [productId]: quantity }));
  };

  const getPrice = (product: Product) => {
    const quantity = selectedQuantity[product.id] || 'per item';
    const basePrice = product.price;
    switch (quantity) {
      case '500 g':
        return basePrice / 2;
      case '250 g':
        return basePrice / 4;
      case '200 g':
        return basePrice / 5;
      case 'per bunch':
        return basePrice;
      case 'per item':
        return basePrice;
      case 'per tray':
        return basePrice * 30; // Assuming 30 eggs per tray
      case '1/2 tray':
        return basePrice * 15; // Assuming 15 eggs per half tray
      case '1 kg':
        return basePrice;
      case '1 litre':
        return basePrice;
      case '800 g':
        return basePrice;
      case 'Full':
        return basePrice;
      case 'Half':
        return basePrice / 2;
      default:
        return basePrice;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Products</h1>
          <p className="text-lg text-gray-600">Discover our fresh, organic, and sustainably sourced products</p>
        </div>
        
        {/* Search and Filters */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
          </div>
          
              <div className="flex gap-3 flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl capitalize transition-all duration-200 ${
                  selectedCategory === category
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-white text-lg font-semibold">View Details</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Goat Meat', 'Sheep Mutton'].includes(product.name) && (
                    <button
                      onClick={() => handleQuantityChange(product.id, '1 kg')} 
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Kg
                    </button>
                  )}
                  {['Beef Tallow', 'Ghee', 'Honey'].includes(product.name) && (
                    <>
                      <button
                        onClick={() => handleQuantityChange(product.id, '500 g')} 
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        500 g
                      </button>
                      <button 
                        onClick={() => handleQuantityChange(product.id, '800 g')} 
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        800 g
                      </button>
                    </>
                  )}
                  {product.name === 'Kienyeji Eggs' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, 'Full')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Full</button>
                      <button onClick={() => handleQuantityChange(product.id, 'Half')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Half</button>
                    </>
                  )}
                  {['Apples', 'Strawberries'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {['Gooseberries', 'Matoke Bananas'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {['Spinach', 'Kales', 'Kunde', 'Managu', 'Saga', 'Terere', 'Mrenda', 'Nderema', 'Mitoo', 'Pumpkin Leaves'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, 'per bunch')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Bunch</button>
                  )}
                  {product.name === 'Cauliflower' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                    </>
                  )}
                  {product.name === 'Broccoli' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {product.name === 'Leeks' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {product.name === 'Celery' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {product.name === 'Cucumbers' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {['Cabbage', 'Chinese Cabbage', 'Red Cabbage'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {product.name === 'Egg Plant' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                    </>
                  )}
                  {product.name === 'Green Peas' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                    </>
                  )}
                  {['Beans', 'Dry Maize', 'Wheat', 'Sorghum', 'Finger Millet', 'Cassava', 'Ground Nuts'].includes(product.name) && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Kg</button>
                      <button onClick={() => handleQuantityChange(product.id, '5 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">5 kg</button>
                    </>
                  )}
                  {['Goat Milk', 'Sour Milk'].includes(product.name) && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 ml')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">500 ml</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 litre')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 litre</button>
                    </>
                  )}
                  {['Chicken', 'Tilapia'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, 'Unit')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Unit</button>
                  )}
                  {['Avocado'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {['Cucumber', 'Potatoes', 'Sweet Potatoes', 'Arrowroots', 'Red Onions', 'White Onions', 'Capcicum', 'Chilly', 'Tomatoes', 'Carrots', 'Pumpkins'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">1 kg</button>
                  )}
                  {product.name === 'Spring Onions' && (
                    <button onClick={() => handleQuantityChange(product.id, 'per bunch')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Bunch</button>
                  )}
                  {['Basil', 'Mint', 'Persley', 'Rosemary', 'Thyme', 'Dhania'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, 'per bunch')} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Bunch</button>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-2xl font-bold text-green-600">KSh{getPrice(product).toLocaleString()}</span>
                  <button 
                    onClick={() => addItem(product)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}