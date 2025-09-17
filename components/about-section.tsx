"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ReusableModal } from "./modal";

export function AboutSection() {
  const [open, setOpen] = useState(false);
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
    <section id="about" className="p-6 bg-gray-50">
      <div className="container max-w-screen-xl mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              About AutoPart Direct
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              One platform for all your car needs Parts & Mechanics, made
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
                    className="bg-brand-yellow text-white px-4 py-2 rounded text-sm font-semibold cursor-pointer"
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
    </section>
  );
}
