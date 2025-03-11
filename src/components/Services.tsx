export function Services() {
    return <div className="min-h-screen">
        <h2 className="text-3xl font-semibold mb-4 text-center mt-10  text-white">Our Services</h2>
        <div className="grid grid-cols-1  gap-8 max-w-5xl mx-auto mb-10">
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
}