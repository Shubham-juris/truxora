import React from "react";
import { motion } from "framer-motion";

const points = [
  "24/7 Customer Support",
  "Global Shipping Network",
  "Real-Time Tracking",
  "Fast & Secure Delivery",
];

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-16 bg-black/50 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-10">Why Choose Us</h2>

        {/* Grid for 2 rows, 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="font-semibold text-gray-900 text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
