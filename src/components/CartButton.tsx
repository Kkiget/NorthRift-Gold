 'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartButton() {
  const { itemCount, total } = useCart();

  return (
    <Link
      href="/checkout"
      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
    >
      <i className="fas fa-shopping-cart"></i>
      <span>Cart ({itemCount})</span>
      {itemCount > 0 && (
        <span className="text-sm">| ${total.toFixed(2)}</span>
      )}
    </Link>
  );
}