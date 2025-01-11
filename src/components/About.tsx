
export function About() {

    return <>
    <div className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-4xl mx-auto">
            Welcome to Gemstone & Rudraksha Laboratory, a trusted name in the certification and 
            testing of gemstones and Rudraksha beads. Our mission is to ensure authenticity,
            quality, and trust for individuals and businesses seeking genuine spiritual and 
            ornamental products.
        </p>
        <p className="text-lg max-w-4xl mx-auto">
            At Gemstone & Rudraksha Laboratory, we combine scientific precision with a deep 
            understanding of ancient traditions. Equipped with state-of-the-art technology and
            a team of skilled gemologists and experts, we provide reliable and comprehensive testing
            and certification services.
        </p>
    </div>
    <div className="py-5 ">
    <h2 className="text-3xl font-semibold mb-4 text-center">What We Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Gemstone Certification
              </h3>
              <p className="text-gray-600">
                Identifying and verifying natural gemstones, including their
                origin, quality, and treatments.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Rudraksha Testing
              </h3>
              <p className="text-gray-600">
                Authenticating Rudraksha beads, determining their type (mukhi),
                origin, and spiritual value.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                Detailed Reports
              </h3>
              <p className="text-gray-600">
                Offering precise and transparent analysis through detailed
                reports that adhere to international standards.
              </p>
            </div>
          </div>
    </div>
    <div className="py-16">
        <h3 className="text-3xl font-semibold mb-4 text-center">Why Choose Us?</h3>
        <ul className="max-w-4xl mx-auto space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <strong>Accuracy:</strong> Advanced equipment and meticulous
              testing methods.
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <strong>Integrity:</strong> Unbiased certification, ensuring you
              receive honest and accurate results.
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <strong>Trust:</strong> Building confidence in the authenticity of
              your gemstones and Rudraksha.
            </li>
          </ul>
    </div>
    <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-7 max-w-4xl mx-auto text-center">
            To become a global leader in gemstone and Rudraksha testing,
            blending scientific excellence with traditional knowledge to foster
            trust and transparency in the industry.
          </p>
    </div>
    <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-7 max-w-4xl mx-auto text-center">
            To provide reliable certification services, empowering individuals and
            businesses to make informed decisions about their spiritual and ornamental
            investments.
            <br />
            Discover the assurance of authenticity with Gemstone & 
            Rudraksha Laboratory.
            Together, we ensure the purity and integrity of the treasures you value most.
          </p>
    </div>
    </>
}