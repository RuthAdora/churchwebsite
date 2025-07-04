"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SchoolPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header Section */}
      <motion.section
        className="py-12 bg-gray-50 flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-4xl mx-auto pl-16 pr-4 md:pl-16 md:pr-6 lg:pl-24 lg:pr-8">
          <p className="pt-16 text-blue-500 ">
            FAVOR{" "}
            <span className="text-blue-700 font-medium">& MERCY COMPLEX</span>
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              A loving home and a nurturing school — empowering vulnerable
              children with education, care, and faith.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-12 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto pl-8 pr-4 md:pl-16 md:pr-6 lg:pl-24 lg:pr-8">
          <p className="pt-16 text-blue-500 ">
            OUR<span className="text-blue-700 font-medium">MISSION</span>
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-lg">
              Our mission is to nurture young minds through quality,
              Christ-centered education — giving every child, regardless of
              their background, a chance to dream, learn, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto pl-8 pr-4 md:pl-16 md:pr-6 lg:pl-24 lg:pr-8">
          <p className="pt-16 text-blue-500 ">
            WHO <span className="text-blue-700 font-medium">WE SERVE</span>
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-lg">
              We are blessed to serve over 400 children from the surrounding
              community — including both fee-paying students and those in
              financial need. Through generous partners and church support, we
              ensure that no child is turned away due to lack of school fees.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Call-to-Action */}
      <section className="py-12 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto pl-8 pr-4 md:pl-16 md:pr-6 lg:pl-24 lg:pr-8">
          <p className="pt-16 text-blue-500 ">
            HELP US{" "}
            <span className="text-blue-700 font-medium">EDUCATE A CHILD</span>
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 text-lg mb-6">
              Your support can help provide school fees, books, uniforms, and
              meals for a child in need. With <strong>KES 2,000</strong>{" "}
              monthly, you can make a lasting impact in a child's education.
            </p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg transition duration-300 ease-in-out tracking-wide">
            <Link href="/funding">Support a Student</Link>
          </Button>
        </div>
      </section>

      {/* Stories of Hope */}
      <section className="py-12 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-5xl mx-auto pl-8 pr-4 md:pl-16 md:pr-6 lg:pl-24 lg:pr-8">
          <p className="pt-16 text-blue-500 ">
            STORIES <span className="text-blue-700 font-medium">OF HOPE</span>
          </p>

          <p className="text-gray-600 mb-10">
            Real stories from children whose lives have been transformed through
            your support.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-700 font-semibold text-lg mb-2">
                Mary, Age 9
              </h3>
              <p className="text-gray-600">
                Mary came to us after losing both parents. Today, she’s top of
                her class and dreams of becoming a teacher. Your support gives
                her hope.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-700 font-semibold text-lg mb-2">
                Joseph, Age 12
              </h3>
              <p className="text-gray-600">
                Once shy and withdrawn, Joseph now leads morning prayers. He’s
                found both a family and a future here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-6xl mx-auto pl-8 pr-4 md:pl-16 md:pr-6 lg:pl-24 lg:pr-8">
          <p className="pt-16 text-blue-500 ">
            LIFE AT{" "}
            <span className="text-blue-700 font-medium">OUR SCHOOL</span>
          </p>
          <p className="text-gray-600 mb-10">
            A glimpse into the daily life, joy, and growth of our children.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/images/making.png", alt: "Children in class" },
              { src: "/images/graduation.png", alt: "Meal time" },
              { src: "/images/playing.png", alt: "Playground" },
              { src: "/images/accepting.png", alt: "Chapel session" },
              { src: "/images/gifting.png", alt: "Bible study" },
              { src: "/images/health.png", alt: "Group photo" },
            ].map((img, i) => (
              <div
                key={i}
                className="w-[300px] h-[300px] mx-auto rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More on Facebook Section */}
      <section className="py-12 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-xl px-4">
          <p className="text-gray-700 text-lg mb-4">
            Want to see more photos, stories, and updates from our school?
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            asChild
          >
            <Link
              href="https://web.facebook.com/groups/1062517901169419"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on Facebook
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
