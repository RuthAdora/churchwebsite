"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTA = () => {
  return (
    <motion.div
      className="w-full mt-32 py-20 bg-blue-900 text-white text-center px-6 rounded-xl mb-16 "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div>
        <p className="pt-16 font-bold">
          Ready to Be Part of Something Greater?
        </p>
        <div className="w-24 h-1  mx-auto mt-4 rounded-full" />
        <h3 className="text-white text-lg  mb-24">
          Join us in worship, fellowship, and service as we build a community
          anchored in Christ's love and favor.
        </h3>
      </div>

      <a
        href="#contact" // Change this to your contact or signup route
        className="    mb-10  inline-block  font-semibold  shadow-md hover:bg-blue-200 transition   text-black px-12 py-12  rounded-full mt-10"
      >
        Get Involved
      </a>
    </motion.div>
  );
};

export default CTA;
