"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ministries = [
  {
    title: "Worship Ministry",
    image: "/images/worship.png",
    description:
      "Leading the church into God's presence through music and praise.",
    details:
      "The Worship Ministry includes singers, musicians, sound engineers, and worship leaders.",
  },
  {
    title: "Youth Ministry",
    image: "/images/youth.png",
    description:
      "Empowering the next generation to live boldly in their faith.",
    details:
      "The Youth Ministry offers mentorship, programs, and events for teens and young adults.",
  },
  {
    title: "Outreach Ministry",
    image: "/images/outreach.png",
    description: "Serving the community with compassion and practical support.",
    details:
      "We visit hospitals, do street evangelism, and run feeding programs.",
  },
  {
    title: "Dancers",
    image: "/images/dancers.png",
    description:
      "Spreading the Gospel through media, sound, and social platforms.",
    details:
      "Media team handles live streams, photos, video editing and church branding.",
  },
];

export default function Ministries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ministry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔥 Replace this with actual email, backend API, or Google Sheet logic
    alert(
      `Thank you ${formData.name}! We'll contact you about joining the ${formData.ministry}.`
    );
    setFormData({ name: "", email: "", ministry: "" });
  };

  return (
    <motion.section
      id="ministries"
      className="w-full min-h-screen flex items-center justify-center py-32 px-6 bg-gray-50"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div>
          <p className="pt-16 ">
            OUR <span className="text-blue-700 font-medium">MINISTIRIES</span>
          </p>
          <div className="w-24 h-1  mx-auto mt-4 rounded-full" />
          <h3 className="text-gray-700 text-lg  mb-24">
            There’s a place for everyone. Explore our ministries and get
            involved!
          </h3>
        </div>

        <div className=" gap-10 md:grid-cols-2 lg:grid-cols-4 flex items-center justify-center">
          {ministries.map((ministry, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer shadow-md rounded-xl overflow-hidden transition hover:shadow-xl pr-16 pl-16">
                  <div className="relative w-full h-48">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>

                  <div className="p-5 text-left bg-white">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                      {ministry.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {ministry.description}
                    </p>
                    <Button
                      className=" bg-purple-50 text-gray-600 px-12 py-12  rounded-full mt-10"
                      onClick={() =>
                        setFormData({ ...formData, ministry: ministry.title })
                      }
                    >
                      Join this Ministry
                    </Button>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-blue-800">
                    Join the {ministry.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-gray-700 mt-2 mb-6">{ministry.details}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800"
                  >
                    Submit
                  </Button>
                </form>

                {/* Optional WhatsApp */}
                <div className="text-sm text-center mt-4">
                  Or message us on{" "}
                  <a
                    href="https://wa.me/254700000000?text=Hello%2C%20I%27d%20like%20to%20join%20the%20ministry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
