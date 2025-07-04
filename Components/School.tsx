"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function School() {
  return (
    <motion.section
      id="school"
      className="py-20 bg-gray-100 text-center px-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-800">
          FAVOUR & MERCY SCHOOL
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          We believe in nurturing both the spirit and the mind. Our school
          provides a loving and faith-centered environment where children can
          grow academically and spiritually.
        </p>
        <Button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white">
          <Link href="/school">Learn More</Link>
        </Button>
      </div>
    </motion.section>
  );
}
