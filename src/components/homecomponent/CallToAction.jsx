import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-16 text-center px-4 md:px-12 bg-red-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Ship with Us?</h2>
        <p className="text-gray-200 mb-6">
          Get in touch today for a free quote and reliable shipping solutions.
        </p>
        <a
          href="/contact"
          className="bg-black hover:bg-gray-800 px-6 py-3 rounded font-semibold"
        >
          Get a Quote
        </a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
