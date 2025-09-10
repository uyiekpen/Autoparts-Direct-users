"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export function FullServiceSection() {
  const [highlighted, setHighlighted] = useState<string[]>([]);

  const toggleHighlight = (service: string) => {
    setHighlighted((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const ServiceCard = ({ service }: { service: string }) => (
    <button
      type="button"
      onClick={() => toggleHighlight(service)}
      className={`px-4 py-2 rounded-md text-sm w-[70%] sm:w-fit shadow-md transition 
        ${
          highlighted.includes(service)
            ? "text-red-600 border border-red-200 bg-red-50 shadow-red-100"
            : "text-gray-700 bg-white hover:shadow-lg"
        }`}
    >
      {service}
    </button>
  );

  const leftServices = [
    "Alignments",
    "Check engine lights",
    "Oil changes",
    "Ac repair",
    "Timing belts head gaskets",
    "Battery's, alternators, and starters",
    "Exhaust",
  ];

  const rightServices = [
    "Brakes",
    "Engine repair",
    "Transmission Flushes",
    "Shocks",
    "Mileage Maintenance Service",
    "Tune-ups",
    "Service maintenance lights",
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container max-w-screen-xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Full-Service Package
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At Autoparts direct, we understand that your car is more than just a
          mode of transport. It’s your daily companion, your road trip partner,
          and a reflection of your lifestyle.
        </p>

        {/* Services + Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Services */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {leftServices.map((service) => (
              <ServiceCard key={service} service={service} />
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center order-first md:order-none">
            <img
              src="/professional-mechanic-in-blue-uniform-working-in-m.jpg"
              alt="Professional mechanic"
              className="rounded-lg shadow-md w-full h-full object-contain"
            />
          </div>

          {/* Right Services */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {rightServices.map((service) => (
              <ServiceCard key={service} service={service} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-gray-700 border-gray-300 hover:bg-gray-100"
          >
            Much more
          </Button>
        </div>
      </div>
    </section>
  );
}
