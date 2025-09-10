"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ReusableModal } from "./modal";

export function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="p-6 bg-gray-50">
      <div className="container max-w-screen-xl mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              About AutoPart Direct
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              One platform for all your car needs — Parts & Mechanics, made
              simple.
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              At <span className="font-semibold">AutoPart Direct</span>, we’re
              building a platform that makes it easier than ever for car owners
              to stay on the road. Whether you need a genuine replacement part
              or a trusted mechanic, we’ve got you covered. Our goal is to save
              you time, stress, and money all in one place.
            </p>
          </div>

          {/* Right Content - Customer Promise */}
          <div className="space-y-8">
            {/* Full Service Promise */}
            <div className="bg-slate-800 text-white p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4">COMING SOON</h4>
              <p className="text-sm mb-4 text-gray-300">
                Here’s what you’ll be able to do with AutoPart Direct:
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Request genuine auto parts anytime</span>
                </div>
                <div className="flex justify-between">
                  <span>Get connected with verified mechanics</span>
                </div>
                <div className="flex justify-between">
                  <span>Affordable pricing, no middlemen</span>
                </div>
                <div className="flex justify-between">
                  <span>Fast and reliable doorstep service</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">EARLY ACCESS</div>
                    <div className="font-bold">
                      Be among the first to use AutoPart Direct
                    </div>
                  </div>
                  <div
                    className="bg-secondary text-white px-4 py-2 rounded text-sm font-semibold cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    Get Access
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <ReusableModal
        open={open}
        onClose={() => setOpen(false)}
        title="Join Access"
        className="h-auto w-[500px]"
      >
        <div>
          <form className="space-y-4">
            <div>
              <Label className="text-sm text-[#3C464D]">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div>
              <Label className="text-sm text-[#3C464D]">Name</Label>
              <Input id="name" type="name" placeholder="Enter your name" />
            </div>

            <div>
              <Label className="text-sm text-[#3C464D]">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#3C464D] text-white rounded-xl hover:bg-[#2a3137]"
            >
              Submit
            </Button>
          </form>
        </div>
      </ReusableModal>
    </section>
  );
}
