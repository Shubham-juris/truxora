import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "John Smith", text: "Truxora delivered our shipment ahead of schedule without a single issue. Highly recommended!" },
  { name: "Sarah Lee", text: "Professional team and outstanding service. They handled customs clearance flawlessly." },
  { name: "Michael Brown", text: "The pricing is transparent, and the service quality is unmatched in the industry." },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-black/90 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-500">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black p-6 rounded-lg border border-gray-700"
            >
              <p className="text-gray-300 italic mb-4">"{t.text}"</p>
              <h4 className="font-semibold text-red-500">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
