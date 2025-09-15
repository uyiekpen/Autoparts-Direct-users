"use client";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ReusableModal } from "./modal";
import { useState, useEffect } from "react";

// Words to cycle through
const words = [
  "Attention It Deserves",
  "Parts You Can Trust",
  "Mechanics Who Care",
];

// Typewriter hook
function useTypewriter(words: string[], speed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return words[index].substring(0, subIndex);
}

export function HeroSection() {
  const [open, setOpen] = useState(false);
  const typedText = useTypewriter(words);

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
        "https://autoparts-sms-backend-325363198603.us-central1.run.app/api/accesslist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit form");

      setDialogMessage(" Successfully submitted!");
      setDialogOpen(true);
      setFormData({ fullName: "", email: "", phoneNumber: "" });
    } catch (error) {
      console.error(error);
      setDialogMessage(" Something went wrong. Please try again.");
      setDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mechanic-working-on-car-engine-in-professional-gar.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          Where Your Car Gets the{" "}
          <span className="text-brand-yellow">{typedText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl">
          Reliable car parts and trusted mechanics. Request a part or book a
          mechanic everything your car needs, in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* <Button size="lg" className="bg-brand-yellow text-white px-8">
            Request a Part
          </Button> */}
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent px-8"
            onClick={() => setOpen(true)}
          >
            Get Access
          </Button>
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
        title="Message"
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
    </section>
  );
}
