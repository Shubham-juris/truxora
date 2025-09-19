import React from "react";
import { motion } from "framer-motion";
import { FaShip, FaTruck, FaPlane, FaBox, FaWarehouse, FaGlobe } from "react-icons/fa";

const services = [
  { icon: <FaShip />, title: "Ocean Freight", desc: "Safe and secure transport for bulk shipments across international waters." },
  { icon: <FaTruck />, title: "Inland Transport", desc: "Efficient road transportation to and from ports for your cargo." },
  { icon: <FaPlane />, title: "Air Freight", desc: "Fast delivery of urgent shipments through global air networks." },
  { icon: <FaBox />, title: "Cargo Consolidation", desc: "Optimized container space to reduce costs and improve efficiency." },
  { icon: <FaWarehouse />, title: "Warehousing", desc: "Secure and climate-controlled storage facilities for your goods." },
  { icon: <FaGlobe />, title: "Customs Clearance", desc: "Smooth documentation and clearance process for international trade." },
];

const OurServicesList = () => {
  return (
    <section className="py-16 bg-black/80 text-white px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-red-500">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/60 border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-red-500 text-4xl mb-4 flex justify-center">{service.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesList;
