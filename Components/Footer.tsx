"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      className="bg-blue-900 text-white px-6 md:px-16 lg:px-32 py-20 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Church Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Favor and Mercy Church</h2>
          <p className="text-sm leading-relaxed">
            A place of worship, growth, and transformation through the love and
            truth of Jesus Christ.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-blue-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-pink-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#ministries" className="hover:underline">
                Ministries
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/school" className="hover:underline">
                Our School
              </Link>
            </li>
            <li>
              <Link href="/funding" className="hover:underline">
                Funding
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">
            Subscribe for church updates, sermons, and events.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully! 📬");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input placeholder="Your email" required />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 mt-16 pt-6 text-center text-sm text-blue-300">
        &copy; {new Date().getFullYear()} Favor and Mercy Church. All rights
        reserved.
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 bg-blue-800 hover:bg-blue-700 text-white rounded-full shadow-md transition"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </motion.footer>
  );
}
