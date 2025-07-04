"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FundingPage() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 bg-white text-center flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Support Favor & Mercy
      </h1>

      <p className="text-lg max-w-2xl text-gray-700 mb-6">
        Help us continue the mission of the church and support education through
        our school. Your donations go directly to expanding our programs,
        helping families, and building a better future.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left max-w-md w-full mb-6">
        <p className="text-lg font-semibold text-green-700">Give via M-Pesa:</p>
        <p className="mt-2 text-gray-800">
          <span className="font-medium">Paybill:</span>{" "}
          <span className="font-mono">222118</span>
          <br />
          <span className="font-medium">Account:</span>{" "}
          <span className="font-mono">Favor#y</span>
        </p>
      </div>

      <Button className="bg-green-600 hover:bg-green-700 text-white mb-4 px-8 py-4 text-lg">
        <Link href="/#contact">Inquire</Link>
      </Button>

      <p className="text-sm text-gray-500 italic max-w-md">
        “Whoever is generous to the poor lends to the Lord, and He will repay
        them for their deed.” — Proverbs 19:17
      </p>
    </motion.section>
  );
}
