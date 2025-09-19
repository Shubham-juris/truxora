import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaGlobe, FaShip, FaClock } from "react-icons/fa";

const reasons = [
  { icon: <FaShieldAlt />, title: "Safe & Secure" },
  { icon: <FaClock />, title: "On-Time Delivery" },
  { icon: <FaGlobe />, title: "Global Network" },
  { icon: <FaShip />, title: "Modern Fleet" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-black/70 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-900 rounded shadow hover:shadow-lg transition"
            >
              <div className="text-red-500 text-3xl mb-3 flex justify-center">{item.icon}</div>
              <h4 className="font-semibold">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
