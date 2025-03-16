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
  const [selectedQuantity, setSelectedQuantity] = useState<{ [key: number]: string }>({});

  // Sample products data with actual images
  const products: Product[] = [
    {
      id: 1,
      name: "Tomatoes",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/fresh tomatoes.jpg",
      description: "Locally grown tomatoes"
    },
    {
      id: 2,
      name: "Carrots",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/carrots.jpg",
      description: "Fresh, crunchy carrots"
    },
    {
      id: 3,
      name: "Cabbage",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/cabbage.jpg",
      description: "Fresh, crisp cabbage"
    },
    {
      id: 4,
      name: "Apples",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/apples.jpg",
      description: "Sweet and juicy apples"
    },
    {
      id: 5,
      name: "Strawberries",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/strawberries.jpeg",
      description: "Sweet and fresh strawberries"
    },
    {
      id: 6,
      name: "Honey",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/honey.jpg",
      description: "Pure, natural honey"
    },
    {
      id: 7,
      name: "Goat Milk",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/goat milk.jpg",
      description: "Fresh, goat milk"
    },
    {
      id: 8,
      name: "Beans",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/beans.jpg",
      description: "Fresh beans"
    },
    {
      id: 9,
      name: "Sour Milk",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/Sour Milk.jpg",
      description: "Premium quality sour milk"
    },
    {
      id: 10,
      name: "Spinach",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/spinach.jpg",
      description: "Fresh, organic spinach"
    },
    {
      id: 11,
      name: "Tilapia",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/Tilapia Fish.jpg",
      description: "Fresh tilapia fish"
    },
    {
      id: 12,
      name: "Basil",
      category: "herbs",
      price: 0, // Price set to zero
      image: "/images/products/basil.jpg",
      description: "Fresh basil leaves"
    },
    {
      id: 13,
      name: "Beef Tallow",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/beef tallow.jpg",
      description: "High-quality beef tallow"
    },
    {
      id: 14,
      name: "Capcicum",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/capcicum.jpg",
      description: "Fresh capcicum peppers"
    },
    {
      id: 15,
      name: "Chicken",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/chicken.jpg",
      description: "Free-range chicken"
    },
    {
      id: 16,
      name: "Chilly",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/chilly.jpg",
      description: "Spicy chilly peppers"
    },
    {
      id: 17,
      name: "Ghee",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/ghee.jpg",
      description: "Pure ghee"
    },
    {
      id: 18,
      name: "Goat Meat",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/goat.jpg",
      description: "Tender goat meat"
    },
    {
      id: 19,
      name: "Kales",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/kales.jpg",
      description: "Fresh kales"
    },
    {
      id: 20,
      name: "Mint",
      category: "herbs",
      price: 0, // Price set to zero
      image: "/images/products/mint.jpg",
      description: "Fresh mint leaves"
    },
    {
      id: 21,
      name: "Persley",
      category: "herbs",
      price: 0, // Price set to zero
      image: "/images/products/persley.jpg",
      description: "Fresh persley leaves"
    },
    {
      id: 22,
      name: "Pumpkins",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/pumkins.jpg",
      description: "Fresh pumpkins"
    },
    {
      id: 23,
      name: "Rosemary",
      category: "herbs",
      price: 0, // Price set to zero
      image: "/images/products/Rosemary.jpg",
      description: "Fresh rosemary leaves"
    },
    {
      id: 24,
      name: "Sheep Mutton",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/sheep.jpg",
      description: "Tender sheep mutton"
    },
    {
      id: 25,
      name: "Red Cabbage",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/red cabbage.jpg",
      description: "Fresh red cabbage"
    },
    {
      id: 26,
      name: "Red Onions",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/red onions.jpg",
      description: "Fresh red onions"
    },
    {
      id: 27,
      name: "White Onions",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/white onions.jpg",
      description: "Fresh white onions"
    },
    {
      id: 28,
      name: "Potatoes",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/potatoes.jpg",
      description: "Fresh potatoes"
    },
    {
      id: 29,
      name: "Sweet Potatoes",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/sweet potatoes.jpg",
      description: "Fresh sweet potatoes"
    },
    {
      id: 30,
      name: "Arrowroots",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/arrowroots.jpg",
      description: "Fresh arrowroots"
    },
    {
      id: 31,
      name: "Thyme",
      category: "herbs",
      price: 0, // Price set to zero
      image: "/images/products/thyme.jpg",
      description: "Fresh thyme"
    },
    {
      id: 32,
      name: "Spring Onions",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/spring onions.jpg",
      description: "Fresh spring onions"
    },
    {
      id: 33,
      name: "Kunde",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/kunde.jpg",
      description: "Fresh kunde"
    },
    {
      id: 34,
      name: "Gooseberries",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/gooseberries.jpg",
      description: "Fresh gooseberries"
    },
    {
      id: 35,
      name: "Ripe Bananas",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/ripe bananas.jpg",
      description: "Fresh ripe bananas"
    },
    {
      id: 36,
      name: "Matoke Bananas",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/matoke bananas.jpg",
      description: "Fresh matoke bananas"
    },
    {
      id: 37,
      name: "Sweet Bananas",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/sweet bananas.jpg",
      description: "Fresh sweet bananas"
    },
    {
      id: 38,
      name: "Avocado",
      category: "fruits",
      price: 0, // Price set to zero
      image: "/images/products/avocado.jpg",
      description: "Fresh avocado"
    },
    {
      id: 39,
      name: "Dry Maize",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/dry maize.jpg",
      description: "Fresh dry maize"
    },
    {
      id: 40,
      name: "Wheat",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/wheat.jpg",
      description: "Fresh wheat"
    },
    {
      id: 41,
      name: "Sorghum",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/sorghum.jpg",
      description: "Fresh sorghum"
    },
    {
      id: 42,
      name: "Finger Millet",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/Finger Millet.jpg",
      description: "Fresh finger millet"
    },
    {
      id: 43,
      name: "Cassava",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/Cassava.jpg",
      description: "Fresh cassava"
    },
    {
      id: 44,
      name: "Ground Nuts",
      category: "grains",
      price: 0, // Price set to zero
      image: "/images/products/ground nuts.jpg",
      description: "Fresh ground nuts"
    },
    {
      id: 45,
      name: "Managu",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/managu.jpg",
      description: "Fresh managu"
    },
    {
      id: 46,
      name: "Saga",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/Saga.jpg",
      description: "Fresh saga"
    },
    {
      id: 47,
      name: "Terere",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/terere.jpg",
      description: "Fresh terere"
    },
    {
      id: 48,
      name: "Mrenda",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/mrenda.jpg",
      description: "Fresh mrenda"
    },
    {
      id: 49,
      name: "Nderema",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/nderema.jpg",
      description: "Fresh nderema"
    },
    {
      id: 50,
      name: "Mitoo",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/Mitoo.jpg",
      description: "Fresh mitoo"
    },
    {
      id: 51,
      name: "Pumpkin Leaves",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/pumpkin leaves.jpg",
      description: "Fresh pumpkin leaves"
    },
    {
      id: 52,
      name: "Kienyeji Eggs",
      category: "Animal products",
      price: 0, // Price set to zero
      image: "/images/products/Kienyeji eggs.jpg",
      description: "Fresh kienyeji eggs"
    },
    {
      id: 53,
      name: "Broccoli",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/Broccoli.jpg",
      description: "Fresh broccoli"
    },
    {
      id: 54,
      name: "Cauliflower",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/cauliflower.jpg",
      description: "Fresh cauliflower"
    },
    {
      id: 55,
      name: "Dhania",
      category: "herbs",
      price: 0, // Price set to zero
      image: "/images/products/Dhania.jpg",
      description: "Fresh dhania"
    },
    {
      id: 56,
      name: "Leeks",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/leeks.jpg",
      description: "Fresh leeks"
    },
    {
      id: 57,
      name: "Celery",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/celery.jpg",
      description: "Fresh celery"
    },
    {
      id: 58,
      name: "Cucumber",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/cucumber.jpg",
      description: "Fresh cucumber"
    },
    {
      id: 59,
      name: "Chinese Cabbage",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/Chinese Cabbage.jpg",
      description: "Fresh Chinese cabbage"
    },
    {
      id: 60,
      name: "Egg Plant",
      category: "vegetables",
      price: 0, // Price set to zero
      image: "/images/products/egg plant.jpg",
      description: "Fresh egg plant"
    },
    {
      id: 61,
      name: "Green Peas",
      category: "vegetables",
      price: 0, // Price set to zero
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
    const quantity = selectedQuantity[product.id] || 'per tray';
    const basePrice = product.price;
    switch (quantity) {
      case '500 g':
        return basePrice / 2;
      case '250 g':
        return basePrice / 4;
      case 'per bunch':
        return basePrice;
      case 'per item':
        return basePrice;
      case 'per tray':
        return basePrice * 30; // Assuming 30 eggs per tray
      case '1/2 tray':
        return basePrice * 15; // Assuming 15 eggs per half tray
      default:
        return basePrice;
    }
  };

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
                <div className="flex justify-between items-center mb-2">
                  {['Goat Meat', 'Sheep Mutton'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">Kg</button>
                  )}
                  <span className="text-green-600 font-bold">Ksh{getPrice(product).toLocaleString()}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  {['Beef Tallow', 'Ghee', 'Honey'].includes(product.name) && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-2 py-1 border rounded">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '800 g')} className="px-2 py-1 border rounded">800 g</button>
                    </>
                  )}
                  {product.name === 'Kienyeji Eggs' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, 'per tray')} className="px-2 py-1 border rounded">Per Tray</button>
                      <button onClick={() => handleQuantityChange(product.id, '1/2 tray')} className="px-2 py-1 border rounded">1/2 Tray</button>
                    </>
                  )}
                  {product.name === 'Apples' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {['Strawberries', 'Gooseberries'].includes(product.name) && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '250 g')} className="px-2 py-1 border rounded">250 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-2 py-1 border rounded">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                    </>
                  )}
                  {['Spinach', 'Kales', 'Kunde', 'Managu', 'Saga', 'Terere', 'Mrenda', 'Nderema', 'Mitoo', 'Pumpkin Leaves'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, 'per bunch')} className="px-2 py-1 border rounded">Bunch</button>
                  )}
                  {product.name === 'Cauliflower' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-2 py-1 border rounded">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                    </>
                  )}
                  {product.name === 'Broccoli' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {product.name === 'Leeks' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {product.name === 'Celery' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {product.name === 'Cucumbers' && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {['Cabbage', 'Chinese Cabbage', 'Red Cabbage'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {product.name === 'Egg Plant' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-2 py-1 border rounded">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                    </>
                  )}
                  {product.name === 'Green Peas' && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 g')} className="px-2 py-1 border rounded">500 g</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                    </>
                  )}
                  {['Beans', 'Dry Maize', 'Wheat', 'Sorghum', 'Finger Millet', 'Cassava', 'Ground Nuts'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">Kg</button>
                  )}
                  {['Goat Milk', 'Sour Milk'].includes(product.name) && (
                    <>
                      <button onClick={() => handleQuantityChange(product.id, '500 ml')} className="px-2 py-1 border rounded">500 ml</button>
                      <button onClick={() => handleQuantityChange(product.id, '1 litre')} className="px-2 py-1 border rounded">1 litre</button>
                    </>
                  )}
                  {['Chicken', 'Tilapia'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, 'Unit')} className="px-2 py-1 border rounded">Unit</button>
                  )}
                  {['Matoke Bananas', 'Avocado', 'Ripe Bananas', 'Sweet Bananas'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {['Cucumber', 'Potatoes', 'Sweet Potatoes', 'Arrowroots', 'Red Onions', 'White Onions', 'Capcicum', 'Chilly', 'Tomatoes', 'Carrots', 'Pumpkins'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, '1 kg')} className="px-2 py-1 border rounded">1 kg</button>
                  )}
                  {product.name === 'Spring Onions' && (
                    <button onClick={() => handleQuantityChange(product.id, 'per bunch')} className="px-2 py-1 border rounded">Bunch</button>
                  )}
                  {['Basil', 'Mint', 'Persley', 'Rosemary', 'Thyme', 'Dhania'].includes(product.name) && (
                    <button onClick={() => handleQuantityChange(product.id, 'per bunch')} className="px-2 py-1 border rounded">Bunch</button>
                  )}
                </div>
                <button 
                  onClick={() => addItem(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}