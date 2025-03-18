'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// Blog post data
const blogPosts = [
  {
    slug: 'organic-farming-innovations',
    title: 'Organic Farming Innovations: The Future of Agriculture is Here!',
    category: 'Farming',
    author: 'Bethwel Kimaru',
    date: '3/13/2024',
    content: `
      The agricultural world is undergoing a **revolution**, and organic farming is leading the charge. Gone are the days when organic farming was seen as a niche practice. Today, it's a **game-changer**, combining cutting-edge technology with nature's wisdom to create a sustainable and productive future.

      ## Precision Farming: The Data-Driven Revolution
      Imagine a farm where every drop of water and every nutrient is used with pinpoint accuracy. Thanks to **precision farming**, this is now a reality. By leveraging data from sensors, drones, and AI-driven machinery, farmers can optimize resource usage like never before. The result? **Higher yields, lower costs, and a healthier planet.**

      ## Automation: The Rise of Smart Farms
      Picture this: **AI-powered tractors** plowing fields and drones monitoring crop health from above. Automation is transforming organic farming, reducing labor costs, and improving efficiency. These smart machines are not just futuristic gadgets—they're essential tools for modern farmers.

      ## Biofertilizers and Natural Pest Control: Nature's Secret Weapons
      Chemical inputs are becoming a thing of the past. Innovations like **compost teas, mycorrhizal fungi, and crop rotation** are taking center stage. These natural solutions improve soil health, boost plant resilience, and reduce the need for harmful pesticides. It's farming in harmony with nature.

      ## The Future is Bright
      The future of organic farming is **brighter than ever**. As more farmers adopt these innovations, we're moving closer to a world where food production is sustainable, healthy, and environmentally friendly. The question is: **Are you ready to join the revolution?**
    `
  },
  {
    slug: 'local-produce-superfood',
    title: 'Why Local Produce is the Ultimate Superfood for Your Health and the Planet',
    category: 'Health',
    author: 'Bethwel Kimaru',
    date: '3/12/2024',
    content: `
      What if we told you that the secret to better health and a healthier planet is right in your backyard? **Local produce** is more than just a trend—it's a **lifestyle choice** that benefits you, your community, and the environment.

      ## Fresher, Richer, and More Nutritious
      When you buy local, you're getting food that's **fresher and more nutritious**. Unlike produce that's shipped across the globe, local fruits and vegetables are harvested at peak ripeness. This means they're packed with **more vitamins, minerals, and antioxidants**—everything your body needs to thrive.

      ## Say Goodbye to Harmful Preservatives
      Ever wonder why supermarket produce lasts so long? It's often treated with **preservatives and chemicals** to survive long journeys. Local produce, on the other hand, is free from these harmful additives. It's **pure, natural, and delicious**.

      ## Support Local Farmers, Strengthen Communities
      When you buy local, you're not just feeding your family—you're supporting **small-scale farmers** and strengthening your community. It's a win-win situation that keeps money circulating locally and helps farmers thrive.

      ## Reduce Your Carbon Footprint
      Did you know that the average meal travels **1,500 miles** to reach your plate? By choosing local produce, you're slashing your **carbon footprint** and helping combat climate change. Less travel means fewer emissions and a healthier planet.

      ## How to Get Started
      From **farmer's markets** to **community-supported agriculture (CSA) programs**, there are countless ways to access fresh, local produce. Make the switch today and experience the **health and environmental benefits** for yourself.
    `
  },
  {
    slug: 'sustainable-farming',
    title: 'Sustainable Farming: The Key to Saving Our Planet',
    category: 'Sustainability',
    author: 'Bethwel Kimaru',
    date: '3/11/2024',
    content: `
      The clock is ticking, and the need for **sustainable farming** has never been more urgent. As climate change and environmental degradation threaten our future, farmers are stepping up with **eco-friendly practices** that protect the planet while ensuring food security.

      ## Crop Rotation and Diversification: Nature's Blueprint
      One of the oldest tricks in the book is also one of the most effective. **Crop rotation and diversification** maintain soil fertility, reduce pests, and improve yields—all without chemicals. It's farming the way nature intended.

      ## Cover Cropping: Protecting the Earth Beneath Our Feet
      Imagine a field covered in lush, green plants even when no crops are growing. That's the power of **cover cropping**. These plants prevent erosion, improve soil structure, and even fix nitrogen in the soil. It's a simple yet powerful way to keep farmland productive for generations.

      ## Integrated Pest Management: A Smarter Way to Fight Pests
      Forget about chemical pesticides. **Integrated Pest Management (IPM)** uses natural predators, organic solutions, and smart strategies to keep pests at bay. It's better for the environment, better for crops, and better for you.

      ## Water Conservation: Every Drop Counts
      In a world where water is becoming increasingly scarce, **drip irrigation and rainwater harvesting** are lifesavers. These methods ensure that every drop of water is used efficiently, making farming viable even in dry regions.

      ## Join the Movement
      Sustainable farming isn't just for farmers—it's for **all of us**. By supporting sustainable practices, we can create a food system that's resilient, eco-friendly, and capable of feeding the world. The future of farming is in our hands. **Let's make it sustainable.**
    `
  }
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Post not found</h1>
          <Link href="/blog" className="text-green-600 hover:text-green-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">By {post.author}</span>
              <span>{post.date}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.split('\n').map((line, lineIndex) => {
                    if (line.startsWith('## ')) {
                      return (
                        <h2 key={lineIndex} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {line.replace('## ', '')}
                        </h2>
                      );
                    }
                    return (
                      <p key={lineIndex} className="text-gray-700 leading-relaxed mb-4">
                        {line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                      </p>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 