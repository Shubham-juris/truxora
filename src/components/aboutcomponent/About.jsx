import React from "react";

const About = () => {
  return (
    <section className="bg-black/80 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-center">
          About <span className="text-red-500">Truxora</span>
        </h2>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            At <span className="font-semibold text-white">Truxora</span>, we provide 
            <span className="text-red-500 font-semibold"> end-to-end shipping solutions </span>
            across the globe. From small consignments to full container loads, our 
            modern fleet and expert crew ensure your cargo reaches its destination 
            safely, reliably, and on time.
          </p>

          <p>
            With years of industry expertise, we’ve built more than just a shipping 
            company — we’ve built a reputation for 
            <span className="text-red-500 font-semibold"> trust, transparency, and excellence</span>. 
            Our commitment goes beyond moving goods; we help businesses grow, 
            communities connect, and opportunities expand worldwide.
          </p>

          <p>
            Every shipment, no matter the size, is handled with precision and care. 
            That’s why global companies rely on 
            <span className="text-white font-semibold"> Truxora </span> as their 
            trusted logistics partner.
          </p>
        </div>

        {/* Optional Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 text-center">
          <div>
            <h3 className="text-3xl font-bold text-red-500">20+</h3>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-500">1000+</h3>
            <p className="text-gray-400 mt-2">Deliveries Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-500">50+</h3>
            <p className="text-gray-400 mt-2">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
