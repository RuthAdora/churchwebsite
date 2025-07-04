"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "18173570-ea47-4060-ac3b-03edf11681b1");
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      setForm({ name: "", phone: "", message: "" });
    } else {
      setResult("❌ Failed to send. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-32 bg-gray-100 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32  mb-24 pt-4 space-y-6  "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center space-y-20">
        {/* Heading */}
        <div>
          <p className="pt-16 ">
            CONTACT <span className="text-blue-700 font-medium">US</span>
          </p>
          <div className="w-24 h-1  mx-auto mt-4 rounded-full" />
          <h3 className="text-gray-700 text-lg  mb-24">
            We'd love to hear from you. Reach out with any questions or prayer
            requests.
          </h3>
        </div>

        {/* Contact Form + Info */}
        <div className="grid md:grid-cols-2 gap-24 text-left px-4 md:px-6 lg:px-8 ml-auto">
          {/* Contact Info */}
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold text-blue-800">
              Church Address
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Favor and Mercy Church
              <br />
              1234 Church Road,
              <br />
              Nairobi, Kenya
            </p>

            <h3 className="text-2xl font-semibold text-blue-800 pt-4">
              Contact
            </h3>
            <p className="text-gray-700">📞 +254 700 000 000</p>
            <p className="text-gray-700">✉️ info@favorandmercychurch.org</p>

            <div className="pt-4">
              <a
                href="https://wa.me/254700000000?text=Hello%2C%20I'd%20like%20to%20reach%20out%20to%20Favor%20and%20Mercy%20Church"
                target="_blank"
                className="text-blue-700 underline"
              >
                💬 Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e: { target: { value: any } }) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800"
            >
              Send Message
            </Button>
            <p className="text-sm pt-2 text-green-600">{result}</p>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
