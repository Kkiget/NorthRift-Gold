'use client';

import Link from 'next/link';
import Image from 'next/image';

// Blog post data (same as in [slug]/page.tsx)
const blogPosts = [
  {
    slug: 'organic-farming-innovations',
    title: 'Organic Farming Innovations: The Future of Agriculture is Here!',
    category: 'Farming',
    author: 'Bethwel Kimaru',
    date: '3/13/2024',
    excerpt: 'The agricultural world is undergoing a revolution, and organic farming is leading the charge. Gone are the days when organic farming was seen as a niche practice.',
    image: '/images/blog/blog4.jpg'
  },
  {
    slug: 'local-produce-superfood',
    title: 'Why Local Produce is the Ultimate Superfood for Your Health and the Planet',
    category: 'Health',
    author: 'Bethwel Kimaru',
    date: '3/12/2024',
    excerpt: 'What if we told you that the secret to better health and a healthier planet is right in your backyard? Local produce is more than just a trend—it\'s a lifestyle choice.',
    image: '/images/blog/blog2.jpg'
  },
  {
    slug: 'sustainable-farming',
    title: 'Sustainable Farming: The Key to Saving Our Planet',
    category: 'Sustainability',
    author: 'Bethwel Kimaru',
    date: '3/11/2024',
    excerpt: 'The clock is ticking, and the need for sustainable farming has never been more urgent. As climate change and environmental degradation threaten our future.',
    image: '/images/blog/blog3.jpg'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">Insights, updates, and stories from the world of organic farming</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center justify-center h-full">
                      <span className="text-white text-lg font-semibold">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}