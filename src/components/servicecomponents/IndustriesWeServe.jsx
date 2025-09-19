import React from "react";
import { motion } from "framer-motion";

const industries = [
  "E-commerce",
  "Automotive",
  "Retail",
  "Construction",
  "Pharmaceuticals",
  "Food & Beverages"
];

const IndustriesWeServe = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-black/60 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-red-500 mb-4">Industries We Serve</h2>
        <p className="text-gray-300 mb-8">
          From small businesses to multinational corporations, we deliver tailored solutions to meet diverse industry needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <span
              key={i}
              className="bg-black/70 px-4 py-2 rounded border border-gray-700"
            >
              {ind}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default IndustriesWeServe;
