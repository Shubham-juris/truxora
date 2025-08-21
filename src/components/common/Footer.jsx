import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTruck,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaTruck className="text-red-500 text-2xl" />
            <h2 className="text-white text-xl font-bold">Truxora</h2>
          </div>
          <p className="text-sm leading-6">
            Truxora delivers global shipping and freight solutions you can
            trust. From cargo transport to last-mile delivery, we ensure your
            goods reach their destination on time and in perfect condition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-red-500">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" />
              <a href="tel:+48729556920" className="hover:underline">
                +48 729 556 920
              </a>
            </li>
           
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <a
                href="https://www.google.com/maps?q=418+Broadway+Ste+R,+Albany,+NY+12207"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Truxora inc 418 Broadway Ste R Albany, NY, 12207
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-red-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Truxora Shipping & Logistics. All Rights
          Reserved.
        </p>
        <p className="mt-0 text-sm text-gray-400">
          Powered by <span className="text-red-500 font-bold">Greekology</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
