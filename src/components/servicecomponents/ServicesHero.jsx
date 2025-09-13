import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/service/main2.jpeg"; 

const ServicesHero = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl px-4 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Shipping <span className="text-red-600">Services</span>
        </h1>
        <p className="text-lg text-gray-300">
          Reliable, cost-effective, and tailored solutions for your global shipping needs.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
