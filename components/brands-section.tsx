export function BrandsSection() {
  const brands = [
    { name: "Interstate Batteries", logo: "/interstate-batteries-logo.jpg" },
    { name: "Hankook", logo: "/hankook-tires-logo.jpg" },
    { name: "Michelin", logo: "/michelin-tires-logo.jpg" },
    { name: "Ford", logo: "/ford-automotive-logo.jpg" },
    { name: "Bridgestone", logo: "/bridgestone-tires-logo.jpg" },
  ]

  return (
    <section className="py-16">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selling only quality Brands</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
