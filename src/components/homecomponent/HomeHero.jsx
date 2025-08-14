import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/home/hero.jpg"; 

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/80 bg-opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-6xl text-gray-300 font-bold mb-4">
          Global Shipping Solutions <span className="text-red-600"> You Can Trust</span> 
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Fast, secure, and reliable ocean freight services connecting the world.
        </p>
        <a
          href="/services"
          className="bg-red-500 hover:bg-red-700 px-6 py-3 rounded font-semibold"
        >
          Explore Services
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
