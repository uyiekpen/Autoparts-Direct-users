"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ReusableModal } from "./modal";
import { Label } from "recharts";
import { Input } from "./ui/input";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between p-4 ">
        <a href="/" className="flex items-center">
          <div className="relative ">
            <img
              src="/auto-parts-direct-logo.png"
              alt="Auto Parts Direct Logo"
              className="h-10 w-[100px] object-cover"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-6 text-sm font-medium"
          aria-label="Main Navigation"
        >
          <a
            href="/"
            className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
          >
            Home
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
          >
            About
          </a>
          <a
            href="#services"
            className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
          >
            Services
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          size="sm"
          className="hidden md:flex items-center gap-2 border-brand-gunmetal text-brand-gunmetal hover:bg-brand-yellow hover:text-brand-jet bg-transparent"
        >
          Get Access
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-gunmetal hover:text-brand-yellow"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <nav
                className="flex flex-col space-y-4 mt-8 text-sm font-medium"
                aria-label="Mobile Navigation"
              >
                <a
                  href="#home"
                  className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="transition-colors hover:text-brand-yellow text-brand-gunmetal"
                >
                  Contact Us
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-brand-yellow hover:text-slate-900 bg-transparent px-8"
                >
                  Join Access
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
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
    </header>
  );
}
