import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <motion.section
      className="py-16 bg-black/80 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-red-600 mb-4">Our Mission</h2>
      <p className="max-w-3xl mx-auto text-white">
        At <span className="font-semibold">Truxora</span>, our mission is simple —
        to provide fast, safe, and reliable shipping solutions worldwide.
        We ensure every package arrives on time, every time.
      </p>
    </motion.section>
  );
};

export default OurMission;
