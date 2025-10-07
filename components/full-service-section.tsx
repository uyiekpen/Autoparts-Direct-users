"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import MotionCards, { MotionCardContent } from "./ui/motioncards";

export function FullServiceSection() {
  const services = [
    "Alignments",
    "Check engine lights",
    "Oil changes",
    "AC repair",
    "Timing belts & head gaskets",
    "Battery, alternators & starters",
    "Exhaust",
    "Brakes",
    "Engine repair",
    "Transmission Flushes",
    "Shocks",
    "Mileage Maintenance Service",
    "Tune-ups",
    "Service maintenance lights",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        {/* Layout */}
        {isMobile ? (
          // ✅ Mobile: Single animated list
          <MotionCards interval={2000}>
            {services.map((service) => (
              <MotionCardContent key={service}>
                <div>{service}</div>
              </MotionCardContent>
            ))}
          </MotionCards>
        ) : (
          // ✅ Desktop: Split left & right with image
          <div className="grid grid-cols-3 gap-8 items-center">
            <MotionCards interval={1500}>
              {services
                .slice(0, Math.ceil(services.length / 2))
                .map((service) => (
                  <MotionCardContent key={service}>
                    <div>{service}</div>
                  </MotionCardContent>
                ))}
            </MotionCards>

            <div className="flex justify-center">
              <img
                src="/mec.jpg"
                alt="Professional mechanic"
                className="rounded-lg shadow-md w-full h-[500px] object-cover"
              />
            </div>

            <MotionCards interval={1500}>
              {services.slice(Math.ceil(services.length / 2)).map((service) => (
                <MotionCardContent key={service}>
                  <div>{service}</div>
                </MotionCardContent>
              ))}
            </MotionCards>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-10">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-gray-700 border-gray-300 hover:bg-gray-100"
          >
            Request a part{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
