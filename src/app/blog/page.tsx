'use client';

import BlogCard from '@/components/BlogCard';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export default function Blog() {
  // Sample blog posts data - you'll want to replace this with your actual data from an API or database
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Organic Farming Innovations",
      excerpt: "Discover the latest innovations in organic farming that are revolutionizing sustainable agriculture.",
      image: "/images/blog/blog4.jpg",
      date: "2024-03-13",
      author: "John Doe",
      category: "Farming"
    },
    {
      id: 2,
      title: "Benefits of Local Produce",
      excerpt: "Learn why choosing local produce is better for your health and the environment.",
      image: "/images/blog/blog2.jpg",
      date: "2024-03-12",
      author: "Jane Smith",
      category: "Health"
    },
    {
      id: 3,
      title: "Sustainable Farming Practices",
      excerpt: "Explore the sustainable farming practices that help preserve our environment.",
      image: "/images/blog/blog3.jpg",
      date: "2024-03-11",
      author: "Mike Johnson",
      category: "Sustainability"
    }
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Article */}
      <BlogCard {...featuredPost} featured={true} />

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8">Stay updated with our latest articles and farming tips</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}