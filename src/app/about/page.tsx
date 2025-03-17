import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/about/hero.jpg"
          alt="About Us"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About NorthRift Gold</h1>
            <p className="text-xl">Your trusted partner in organic and sustainable produce</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2020, NorthRift Gold was born from a passion for sustainable agriculture and a commitment to providing the highest quality organic produce to our community. We work directly with local farmers who share our values of environmental stewardship and sustainable farming practices.
            </p>
            <p className="text-gray-600">
              Our mission is to make organic, sustainably-grown produce accessible to everyone while supporting local farmers and promoting environmentally responsible farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible farming practices that protect our planet for future generations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We support local farmers and build strong relationships within our community.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in organic farming and product quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/team/team1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/team/team2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/team/team3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Farm Relations Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
} 