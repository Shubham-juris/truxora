import React from "react";
import { motion } from "framer-motion";
import { FaShip, FaGlobe, FaClock, FaTruckMoving, FaWarehouse, FaRoute } from "react-icons/fa";

const services = [
  {
    icon: <FaShip />,
    title: "Ocean Freight",
    desc: "Reliable and secure sea transport for bulk shipments, ensuring goods reach ports worldwide on time."
  },
  {
    icon: <FaGlobe />,
    title: "Global Shipping",
    desc: "Seamless international logistics solutions connecting major trade hubs across continents."
  },
  {
    icon: <FaClock />,
    title: "Express Cargo Delivery",
    desc: "Time-critical freight solutions with guaranteed fast transit for urgent shipments."
  },
  {
    icon: <FaTruckMoving />,
    title: "Inland Transportation",
    desc: "Door-to-door trucking services to ensure smooth cargo movement from port to destination."
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing & Storage",
    desc: "Safe, climate-controlled facilities for short-term and long-term cargo storage."
  },
  {
    icon: <FaRoute />,
    title: "Customs Clearance",
    desc: "Hassle-free documentation and customs processing to keep your shipments moving."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-black/70 text-white px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-red-500 font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/70 border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
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

export default Services;
