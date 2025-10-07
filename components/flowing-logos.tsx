import { FlowingLogos } from "@/components/ui/flowing-logos";

export default function FlowingLogosDemo() {
  return (
    <section className="py-10 h-[200px] ">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Car Brands We Service
      </h2>
      <div className="flex justify-center">
        <FlowingLogos
          className="max-w-6xl"
          data={[
            { image: "https://logo.clearbit.com/toyota.com", name: "Toyota" },
            { image: "https://logo.clearbit.com/ford.com", name: "Ford" },
            {
              image: "https://logo.clearbit.com/mercedes-benz.com",
              name: "Mercedes-Benz",
            },
            { image: "https://logo.clearbit.com/bmw.com", name: "BMW" },
            { image: "https://logo.clearbit.com/audi.com", name: "Audi" },
            { image: "https://logo.clearbit.com/honda.com", name: "Honda" },
            {
              image: "https://logo.clearbit.com/volkswagen.com",
              name: "Volkswagen",
            },
            {
              image: "https://logo.clearbit.com/nissan-global.com",
              name: "Nissan",
            },
            {
              image: "https://logo.clearbit.com/chevrolet.com",
              name: "Chevrolet",
            },
            { image: "https://logo.clearbit.com/hyundai.com", name: "Hyundai" },
            { image: "https://logo.clearbit.com/kia.com", name: "Kia" },
            { image: "https://logo.clearbit.com/tesla.com", name: "Tesla" },
            { image: "https://logo.clearbit.com/jaguar.com", name: "Jaguar" },
            {
              image: "https://logo.clearbit.com/landrover.com",
              name: "Land Rover",
            },
            { image: "https://logo.clearbit.com/mazda.com", name: "Mazda" },
            { image: "https://logo.clearbit.com/volvocars.com", name: "Volvo" },
            { image: "https://logo.clearbit.com/porsche.com", name: "Porsche" },
            { image: "https://logo.clearbit.com/ferrari.com", name: "Ferrari" },
          ]}
        />
      </div>
    </section>
  );
}
