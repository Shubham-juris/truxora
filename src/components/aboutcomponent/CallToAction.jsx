import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      className="py-16 bg-red-600 text-white text-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready to Ship with Truxora?
      </h2>
      <p className="max-w-2xl mx-auto mb-6">
        Join thousands of businesses that trust Truxora for their shipping needs.
      </p>
      <a
        href="/contact"
        className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Get Started
      </a>
    </motion.section>
  );
};

export default CallToAction;
