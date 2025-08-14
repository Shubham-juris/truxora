import React from "react";
import { motion } from "framer-motion";

const AboutHighlights = () => {
  const data = [
    {
      title: "Our Mission",
      content: (
        <>
          At <span className="font-semibold">Truxora</span>, our mission is simple —
          to provide fast, safe, and reliable shipping solutions worldwide.
          We ensure every package arrives on time, every time.
        </>
      ),
    },
    {
      title: "Our Journey",
      content: (
        <>
         <span className="font-semibold">Truxora</span> started with a single
          ship and a dream — to revolutionize global shipping. Today, we operate
          across multiple continents, serving thousands of clients with advanced
          logistics and tracking solutions.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-black/90 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-black border border-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
              {item.title}
            </h2>
            <p className="text-white text-center">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutHighlights;
