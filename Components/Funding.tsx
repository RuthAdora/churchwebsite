"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Funding() {
  return (
    <motion.section
      id="funding"
      className="py-20 bg-white text-center px-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-800">
          SUPPORT OUR MISSION
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Your generosity helps us spread the message of Christ and support the
          education of future generations. Join us in making a difference
          through your donations.
        </p>
        <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
          <Link href="/funding">Give Now</Link>
        </Button>
      </div>
    </motion.section>
  );
}
