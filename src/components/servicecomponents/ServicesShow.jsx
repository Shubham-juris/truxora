import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/service/img1.jpg"
import img2 from "../../assets/service/img2.png"
import img3 from "../../assets/service/img3.jpg"
import img4 from "../../assets/service/img4.jpg"


const services = [
  {
    title: "Global Shipping",
    desc: "End-to-end shipping services across continents, ensuring your cargo is delivered on time with the highest safety standards.",
    img:img1,
  },
  {
    title: "Container Logistics",
    desc: "From full container loads (FCL) to less than container loads (LCL), we provide flexible solutions for businesses of all sizes.",
    img:img2,
  },
  {
    title: "Air Freight",
    desc: "Fast and reliable air cargo services with real-time tracking, connecting businesses to markets worldwide in record time.",
    img:img3,
  },
  {
    title: "Warehousing",
    desc: "Secure, modern warehouses with smart inventory management to keep your goods safe, organized, and ready for dispatch.",
    img:img4,
  },
];

const ServicesShow = () => {
  return (
    <section className="bg-black/70 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-red-500">Services</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          At Truxora, we go beyond transportation. From shipping and air freight to 
          warehousing and global logistics, our solutions are designed to keep 
          your business moving smoothly and efficiently.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition duration-300"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesShow;
