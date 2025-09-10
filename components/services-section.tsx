import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Offering you the best solution for you vehicle.
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">ALWAYS OPEN FOR YOU</span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Service and Repair work with the same care that you would at home. We have been providing our customers
                with professional automotive service and repair for over 70 years.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We pride ourselves on being a full-service automotive repair shop that can handle all of your vehicle's
                needs, from routine maintenance to major repairs.
              </p>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8">Read More</Button>
          </div>

          {/* Right Content - Mechanic Image */}
          <div className="relative">
            <div className="bg-slate-800 rounded-lg p-8 text-white">
              <div className="absolute top-4 right-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">UNBEATABLE PRICES</div>
              </div>

              <div className="mt-8">
                <img
                  src="/professional-mechanic-in-blue-uniform-working-in-m.jpg"
                  alt="Professional mechanic"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">PROFESSIONALLY QUALIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
