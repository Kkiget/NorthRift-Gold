import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  featured?: boolean;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <article className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-white text-center">
            <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6">{excerpt}</p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span>{author}</span>
              <span>•</span>
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${id}`}>
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
            {category}
          </span>
          <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{author}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}