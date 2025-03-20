'use client';

import Image from 'next/image';

const values = [
  {
    title: 'Sustainability',
    description: 'We are committed to sustainable farming practices that protect our environment and ensure long-term agricultural viability.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in organic farming, ensuring our produce meets strict quality criteria and certifications.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Community',
    description: 'We believe in building strong relationships with our local community and supporting sustainable agricultural practices.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new farming techniques and technologies to improve our yields and environmental impact.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const team = [
  {
    name: 'Philemon Kiprop',
    role: 'Founder',
    image: '/images/about/kiprop.png',
    bio: 'With over 15 years of experience in organic farming, Philemon leads our mission to revolutionize sustainable agriculture in Kenya.'
  },
  {
    name: 'Jude Songok',
    role: 'Head of Operations',
    image: '/images/about/jude.png',
    bio: 'Jude oversees our daily operations and ensures the highest quality standards across all our farming practices.'
  },
  {
    name: 'Joy Korir',
    role: 'Agricultural Director',
    image: '/images/about/korir.png',
    bio: 'Joy brings expertise in sustainable farming techniques and leads our agricultural innovation initiatives.'
  },
  {
    name: 'Bethwel Kimaru',
    role: 'Community Relations',
    image: '/images/about/kimaru.png',
    bio: 'Bethwel manages our community outreach programs and farmer partnerships across the region.'
  }
];

const impactMetrics = [
  {
    number: '50+',
    label: 'Small-scale Farmers Supported',
    description: "We've partnered with local farmers to promote sustainable practices."
  },
  {
    number: '1,000+',
    label: 'Households Served',
    description: 'Delivering fresh, organic produce to families across the region.'
  },
  {
    number: '30%',
    label: 'Carbon Emissions Reduced',
    description: 'Through our commitment to local sourcing and sustainable practices.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/features/landscape.jpg"
          alt="Organic Farming Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">About NorthRift Gold</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Leading the way in sustainable organic farming, delivering quality produce while protecting our environment.
            </p>
          </div>
        </div>
              </div>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-8">
                We envision a world where farming is sustainable, communities thrive, and everyone has access to healthy, locally grown food.
              </p>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/blog5.jpg"
                  alt="Sustainable Farming"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/blog1.jpg"
                  alt="Fresh Produce"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/blog/blog6.jpg"
                  alt="Team in Action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making a difference in our community and the environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-4">{metric.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at NorthRift Gold
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind NorthRift Gold
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in our mission to create a healthier, more sustainable future. 
              Explore our products, support local farmers, and taste the difference of fresh, organic produce.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
              <a href="/products">Explore Products</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 