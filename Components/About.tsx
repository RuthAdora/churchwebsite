"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center py-32 px-6 bg-gray-50"
    >
      <div className="max-w-6xl w-full text-center">
        {/* ABOUT CHURCH */}
        <motion.div
          className="space-y-6 text-center flex flex-col items-center justify-center mb-24 pt-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="pt-16 ">
            ABOUT <span className="text-blue-700 font-medium">US</span>
          </p>
          <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full mb-4" />
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl">
            Favor and Mercy Church is a vibrant community of believers rooted in
            faith, prayer, and the Word of God. We exist to bring healing,
            transformation, and empowerment through the love of Christ.
          </p>
        </motion.div>

        {/* MISSION & VISION */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 text-left p-10 rounded-xl shadow-md mt-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center">
                To lead people to Jesus, nurture them in faith,
                <br /> and equip them to serve and influence the world around
                them.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center">
                To raise a generation full of God's favor and mercy, empowered
                by the Spirit to walk in truth and purpose.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* PASTOR PROFILE */}
        <motion.div
          className="space-y-8 mt-32 p-10 rounded-xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-20 h-1  mx-auto rounded-full mb-4 text-center" />
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto text-left">
            <Image
              src="/images/bishop.png"
              alt="Pastor"
              width={180}
              height={180}
              className="rounded-full object-cover shadow-md"
            />
            <div>
              <h4 className="text-2xl font-bold">Bishop Grace Sewe</h4>
              <p className="text-gray-600 italic mb-3">
                Overseer, Favor and Mercy Church
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                “We believe in building a strong spiritual foundation for every
                soul through the love of Christ, sound teaching, and unwavering
                faith. You're welcome here.”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
