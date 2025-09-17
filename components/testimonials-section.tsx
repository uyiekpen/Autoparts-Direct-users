"use client";

import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-screen-xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say About AutoDirect
          </h2>
          <p className="text-muted-foreground">
            Hear from real customers who trust AutoDirect with their cars.
          </p>
        </div>

        <AnimatedTestimonials
          data={[
            {
              description:
                "AutoDirect has been my go-to for car servicing. They are fast, transparent with pricing, and always deliver excellent work. I feel confident every time I drive out of their shop.",
              image: "/test1.jpg", // African woman portrait
              name: "Sarah Johnson",
              handle: "Happy Car Owner",
            },
            {
              description:
                "Running a business means my vehicles must stay on the road. AutoDirect keeps them in top shape — quick turnarounds, fair pricing, and trustworthy service.",
              image: "test.jpg", // African businessman portrait
              name: "David Miller",
              handle: "Business Owner",
            },
            {
              description:
                "Before every road trip, I take my car to AutoDirect. Their mechanics are thorough, and I always feel safe traveling long distances. The customer service is top-notch.",
              image: "/test1.jpg", // African woman outdoors
              name: "Emily Carter",
              handle: "Frequent Traveler",
            },
          ]}
        />
      </div>
    </section>
  );
}
