import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/about/main.jpg"; 

const About = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-black/70 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImg}
            alt="About Truxora"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-red-600">About Us</h2>
          <p className="text-gray-300">
            At Truxora, we provide end-to-end shipping solutions across the globe. 
            Whether it’s small consignments or full containers, we ensure safe, 
            reliable, and timely delivery with our modern fleet and expert crew.
          </p>
          <p className="text-gray-300">
            With years of experience and a commitment to excellence, we’ve built a 
            reputation for delivering more than just goods — we deliver trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
