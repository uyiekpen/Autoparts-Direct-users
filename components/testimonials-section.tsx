"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Happy Homeowner",
    content:
      "Fisher Tire and Auto Service has been servicing my car for many years. Trust and getting the service done in a timely manner are my top priorities. They provide me with quick service and fair pricing. I feel like I have a mechanic in the Family when I go to Fisher’s.",
    rating: 5,
    image: "/professional-headshot-of-satisfied-customer.jpg",
  },
  {
    name: "David Miller",
    role: "Local Business Owner",
    content:
      "Palmer Tire and Auto Services has always been reliable and affordable. They are quick, honest, and make me feel secure about my vehicle every time.",
    rating: 4,
    image: "/placeholder.svg",
  },
  {
    name: "Emily Carter",
    role: "Frequent Traveler",
    content:
      "The team is amazing! I can always count on them to get my car ready before long trips. Their customer service is top-notch.",
    rating: 5,
    image: "/placeholder.svg",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-screen-xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our Client say About us
          </h2>
          {/* <p className="text-muted-foreground">
            Explore all Latest, Featured Property Luxury, budget friendly, or
            family-focused
          </p> */}
        </div>

        {/* Testimonial Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-6">
          {/* Left Arrow (desktop only) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 z-10 bg-brand-yellow text-white rounded-full p-3  transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
            {/* Left: Image */}
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="rounded-lg shadow-md w-full h-full object-cover"
            />

            {/* Right: Testimonial Card */}
            <Card className="shadow-md">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-brand-yellow mb-4" />
                <p className="text-lg mb-6 italic">
                  {testimonials[current].content}
                </p>

                <div>
                  <div className="font-semibold">
                    — {testimonials[current].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </div>
                  <div className="flex mt-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Arrow (desktop only) */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 z-10 bg-brand-yellow text-white rounded-full p-3  transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-brand-yellow text-white rounded-full p-3  transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-brand-yellow text-white rounded-full p-3  transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
