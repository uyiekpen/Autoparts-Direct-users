"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ReusableModal } from "./modal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);

  // dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

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

      if (!res.ok) throw new Error("Failed to submit form");

      setDialogMessage("Thank You! We've received your details");
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
      <div className="container flex h-16 max-w-screen-xl items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="/auto-parts-direct-logo.png"
            alt="Auto Parts Direct Logo"
            className="h-10 w-[100px] object-cover"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-brand-yellow text-brand-gunmetal">
            Home
          </a>
          <a
            href="#about"
            className="hover:text-brand-yellow text-brand-gunmetal"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-brand-yellow text-brand-gunmetal"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-brand-yellow text-brand-gunmetal"
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          size="sm"
          className="hidden md:flex items-center gap-2 border-brand-gunmetal text-brand-gunmetal hover:bg-brand-yellow hover:text-brand-jet"
        >
          Get Started
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-gunmetal hover:text-brand-yellow"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            {/* Full width, short height (top dropdown) */}
            <SheetContent
              side="top"
              className="w-full h-[280px] bg-white border-b shadow-lg"
            >
              <nav className="flex flex-col space-y-4 mt-6 text-sm font-medium px-6">
                <a
                  href="#home"
                  className="hover:text-brand-yellow text-brand-gunmetal"
                  onClick={() => setOpenSheet(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-brand-yellow text-brand-gunmetal"
                  onClick={() => setOpenSheet(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-brand-yellow text-brand-gunmetal"
                  onClick={() => setOpenSheet(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-brand-yellow text-brand-gunmetal"
                  onClick={() => setOpenSheet(false)}
                >
                  Contact Us
                </a>
                <Button
                  size="lg"
                  className="bg-brand-gunmetal text-white hover:bg-brand-yellow hover:text-brand-jet px-8 mt-4"
                  onClick={() => {
                    setOpenSheet(false);
                    setOpen(true);
                  }}
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Form Modal */}
      <ReusableModal
        open={open}
        onClose={() => setOpen(false)}
        title="Join Access"
        className="h-auto w-[500px] max-w-full"
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
            className="w-full bg-[#3C464D] text-white rounded-xl hover:bg-[#2a3137]"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </ReusableModal>

      {/* Confirmation Dialog */}
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
              if (dialogMessage.includes("✅")) setOpen(false); // close form modal if success
            }}
            className="bg-[#3C464D] text-white rounded-xl hover:bg-[#2a3137]"
          >
            OK
          </Button>
        </div>
      </ReusableModal>
    </header>
  );
}
