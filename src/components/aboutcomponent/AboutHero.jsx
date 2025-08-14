import React from "react";
import { motion } from "framer-motion";
import aboutHeroImg from "../../assets/about/main1.jpg";

const AboutHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutHeroImg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">About Truxora </h1>
        <p className="mt-4 text-lg max-w-2xl font-bold mx-auto">
          Delivering excellence in shipping and logistics,<span className="text-red-600">connecting businesses to the world.</span> 
        </p>
      </motion.div>
    </div>
  );
};

export default AboutHero;
