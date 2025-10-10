"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ReusableModal } from "@/components/modal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Us" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://autoparts-sms-backend-325363198603.us-central1.run.app/api/accesslist/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Failed to submit form");

      setDialogMessage("✅ Thank You! We've received your details.");
      setDialogOpen(true);
      setFormData({ fullName: "", email: "", phoneNumber: "" });
    } catch (error) {
      console.error(error);
      setDialogMessage("❌ Something went wrong. Please try again.");
      setDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="container flex h-16 items-center justify-between p-4">
        <div className="flex w-full items-center justify-between">
          {/* === Logo === */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/auto-parts-direct-logo.png"
              alt="Auto Parts Direct Logo"
              className="h-10 w-[100px] object-cover"
            />
          </Link>

          {/* === Desktop Navigation === */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-yellow text-brand-gunmetal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* === Desktop CTA Buttons === */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setOpen(true)}
              size="sm"
              className="border-brand-gunmetal text-brand-gunmetal hover:bg-brand-yellow hover:text-brand-jet transition-all px-6"
            >
              Get Started
            </Button>

            {/* External Vendor Link */}
            <a
              href="https://autoparts-direct-mechanic-vendor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-brand-gunmetal text-white hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-500 hover:text-brand-jet px-6 transition-all"
              >
                Become a Vendor
              </Button>
            </a>
          </div>
        </div>

        {/* === Mobile Menu === */}
        <div className="md:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-brand-gunmetal hover:text-brand-yellow"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-full h-[320px] bg-white border-b shadow-lg"
            >
              <nav className="flex flex-col space-y-4 mt-6 text-sm font-medium px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-brand-yellow text-brand-gunmetal transition-colors"
                    onClick={() => setOpenSheet(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <hr className="border-t border-gray-200 my-2" />

                <Button
                  size="lg"
                  className="bg-brand-gunmetal text-white hover:bg-brand-yellow hover:text-brand-jet px-8 mt-4 w-full transition-all"
                  onClick={() => {
                    setOpenSheet(false);
                    setOpen(true);
                  }}
                >
                  Get Started
                </Button>

                {/* External Vendor Link for Mobile */}
                <a
                  href="https://autoparts-direct-mechanic-vendor.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-brand-gunmetal text-white hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-500 hover:text-brand-jet px-8 mt-2 w-full transition-all"
                  >
                    Become a Vendor
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* === Form Modal === */}
      <ReusableModal
        open={open}
        onClose={() => setOpen(false)}
        title="Join Access"
        className="h-auto w-[450px] max-w-full"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-sm text-[#3C464D]">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label className="text-sm text-[#3C464D]">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label className="text-sm text-[#3C464D]">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3C464D] text-white rounded-xl hover:bg-[#2a3137] transition-all"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </ReusableModal>

      {/* === Confirmation Modal === */}
      <ReusableModal
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Submission Complete"
        className="h-auto w-[400px] max-w-full text-center"
      >
        <p className="text-base text-[#3C464D]">{dialogMessage}</p>
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => {
              setDialogOpen(false);
              if (dialogMessage.startsWith("✅")) setOpen(false);
            }}
            className="bg-[#3C464D] text-white rounded-xl hover:bg-[#2a3137] transition-all"
          >
            OK
          </Button>
        </div>
      </ReusableModal>
    </header>
  );
}
