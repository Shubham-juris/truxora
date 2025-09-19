import React from "react";
import { motion } from "framer-motion";

const AboutHighlights = () => {
  const data = [
    {
      title: "Our Mission",
      content: (
        <>
          At <span className="font-semibold">Truxora</span>, our mission is clear — 
          to redefine shipping with <span className="text-red-500 font-semibold">speed, safety, and reliability</span>.  
          We go beyond transportation; we build connections. Whether it’s small parcels 
          or large consignments, our priority is ensuring that goods arrive <span className="font-semibold">on time, every time</span>, 
          with zero compromise on safety. Our mission is not just to deliver cargo, but to deliver 
          <span className="text-red-500"> trust and peace of mind</span> to every client we serve.
        </>
      ),
    },
    {
      title: "Our Journey",
      content: (
        <>
          <span className="font-semibold">Truxora</span> began with a single vessel and a vision — 
          to revolutionize global shipping. From our humble beginnings, we have grown into an 
          <span className="text-red-500 font-semibold"> international logistics powerhouse</span>, 
          operating across continents and serving diverse industries.  
          Over the years, we have invested in <span className="font-semibold">modern fleets, digital tracking systems, 
          and world-class infrastructure</span> to make logistics smarter and faster.  
          Today, we’re proud to be a trusted partner for businesses worldwide, moving thousands 
          of shipments safely across borders every single day.
        </>
      ),
    },
    {
      title: "Our Commitment",
      content: (
        <>
          We believe logistics is not just about moving goods — it’s about <span className="text-red-500">moving lives forward</span>.  
          That’s why our commitment goes beyond delivery timelines. We stand for 
          <span className="font-semibold"> transparency, accountability, and long-term partnerships</span>.  
          Every shipment, big or small, is handled with the same level of dedication.  
          When you choose <span className="font-semibold">Truxora</span>, you choose a team that values your 
          <span className="text-red-500"> success as much as you do</span>.
        </>
      ),
    },
    {
      title: "Our Future",
      content: (
        <>
          At <span className="font-semibold">Truxora</span>, the future is about innovation.  
          We’re constantly exploring smarter solutions — from <span className="text-red-500">AI-driven logistics</span> 
          to sustainable shipping practices that reduce our environmental footprint.  
          Our goal is to remain a leader in the global shipping industry, delivering with 
          <span className="font-semibold"> efficiency, integrity, and sustainability</span>.  
          Because we believe the future of shipping should not only connect businesses, 
          but also <span className="text-red-500">protect our planet</span>.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 bg-black/70 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-black/70 border border-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4 text-center">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-center">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutHighlights;
