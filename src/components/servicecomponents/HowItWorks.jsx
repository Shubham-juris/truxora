import React from "react";
import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Request a Quote", desc: "Provide shipment details to get a tailored quote." },
  { step: "2", title: "Booking Confirmation", desc: "Secure your shipment schedule with our team." },
  { step: "3", title: "Cargo Pickup", desc: "We collect your cargo from your location or warehouse." },
  { step: "4", title: "Transportation", desc: "Your shipment is transported via sea, air, or land." },
  { step: "5", title: "Delivery", desc: "Cargo is delivered safely to its final destination." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-8">How Our Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/70 p-6 rounded-lg"
            >
              <div className="text-red-500 text-2xl font-bold mb-2">{item.step}</div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
