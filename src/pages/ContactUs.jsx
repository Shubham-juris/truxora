import React from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/home/hero.jpg";
import MapPage from "./MapPage";

const ContactUs = () => {
  return (
    <>
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image with Full Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Background Image */}
          <img
            src={contactImg}
            alt="Contact Us"
            className="rounded-lg shadow-lg max-h-[500px] object-cover w-full"
          />

          {/* Full Black Overlay */}
          <div className="absolute inset-0 bg-black/80 rounded-lg"></div>

          {/* Overlay Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6"
          >
            <h3 className="text-lg font-semibold mb-1">📍 Address</h3>
            <a
              href="https://www.google.com/maps?q=418+Broadway+Ste+R,+Albany,+NY+12207"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mb-4 max-w-[80%] hover:underline"
            >
              Truxora inc, 418 Broadway Ste R, Albany, NY 12207
            </a>

            <h3 className="text-lg font-semibold mb-1">📞 Phone</h3>
            <a
              href="tel:+48729556920"
              className="text-sm mb-4 hover:underline"
            >
              +48 729 556 920
            </a>

          
          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-red-600 mb-6">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
    <MapPage/>
    </>
  );
};

export default ContactUs;
