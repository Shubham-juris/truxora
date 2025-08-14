import React from "react";

const MapPage = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Our Location</h1>
        <p className="text-gray-700 mb-8">
          <span className="font-semibold">
            Truxora inc, 418 Broadway Ste R, Albany, NY, 12207
          </span>
        </p>

        {/* Google Maps Embed */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Truxora Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.295123413846!2d-73.75183298455347!3d42.65257907916788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0b8aa92a1d5f%3A0x74661bbee854d1cc!2s418%20Broadway%20Ste%20R%2C%20Albany%2C%20NY%2012207%2C%20USA!5e0!3m2!1sen!2sin!4v1692094741221!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapPage;
