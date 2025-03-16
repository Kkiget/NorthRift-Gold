'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        100% TRUSTED PLATFORM
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Fresh. Organic.<br />Sustainable.
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg">
                        Experience the finest organic produce delivered straight from our sustainable farms to your table.
                    </p>
                    <Link href="/products" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700">
                        Buy Our Products Today
                        <span className="ml-2">→</span>
                    </Link>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 relative">
                    <div className="relative w-full h-[400px] md:h-[500px]">
                        <Image
                            src="/images/hero/farmer.jpg"
                            alt="Organic Farmer"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-8 flex space-x-4">
                        <div className="w-24 h-24 relative">
                            <Image
                                src="/images/hero/preview1.jpg"
                                alt="Fresh Produce Preview 1"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-24 h-24 relative">
                            <Image
                                src="/images/hero/preview2.jpg"
                                alt="Fresh Produce Preview 2"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
                <span className="text-2xl">↓</span>
                <span className="text-sm">Scroll Down</span>
            </div>
        </section>
    );
}