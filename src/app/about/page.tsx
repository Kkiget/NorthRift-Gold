import Image from 'next/image';

export default function About() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url("/images/about/about5.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About NorthRift Gold</h1>
            <p className="text-2xl">Your trusted partner in organic and sustainable produce</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-200 mb-8 text-lg">
                Founded in 2020, NorthRift Gold was born from a passion for sustainable agriculture and a commitment to providing the highest quality organic produce to our community. We work directly with local farmers who share our values of environmental stewardship and sustainable farming practices.
              </p>
              <p className="text-gray-200 text-lg">
                Our mission is to make organic, sustainably-grown produce accessible to everyone while supporting local farmers and promoting environmentally responsible farming practices.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Sustainability</h3>
                <p className="text-gray-200">
                  We are committed to environmentally responsible farming practices that protect our planet for future generations.
                </p>
              </div>
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Community</h3>
                <p className="text-gray-200">
                  We support local farmers and build strong relationships within our community.
                </p>
              </div>
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check-circle text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Quality</h3>
                <p className="text-gray-200">
                  We maintain the highest standards in organic farming and product quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/images/team/team1.jpg"
                    alt="Team Member"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">John Doe</h3>
                <p className="text-gray-200">Founder & CEO</p>
              </div>
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/images/team/team2.jpg"
                    alt="Team Member"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Jane Smith</h3>
                <p className="text-gray-200">Head of Operations</p>
              </div>
              <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/images/team/team3.jpg"
                    alt="Team Member"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Mike Johnson</h3>
                <p className="text-gray-200">Farm Relations Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
            <p className="text-xl mb-8 text-gray-200">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 