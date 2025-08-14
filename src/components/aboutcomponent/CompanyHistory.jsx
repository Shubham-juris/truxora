import React from "react";
import { motion } from "framer-motion";

const CompanyHistory = () => {
  return (
    <motion.section
      className="py-16 bg-black/90 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-8">Our Journey</h2>
        <p className="text-white text-center">
          Founded in 2010, Truxora started with a single ship and a dream —
          to revolutionize global shipping. Today, we operate across multiple continents,
          serving thousands of clients with advanced logistics and tracking solutions.
        </p>
      </div>
    </motion.section>
  );
};

export default CompanyHistory;
