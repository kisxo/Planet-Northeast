import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* HERO SECTuION */}
      <section className="relative flex flex-col justify-center items-center text-center py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        ></div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-6 relative z-10">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl relative z-10">
          Adventure awaits! Whether you want to plan a trip, partner with us, or
          just say hello — we’d love to connect and help you explore the
          Northeast like never before.
        </p>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="flex flex-col md:flex-row justify-center items-start md:items-center px-6 md:px-16 py-20 md:space-x-20 space-y-10 md:space-y-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl font-semibold border-b-2 border-white inline-block pb-2">
            Our Contact Info
          </h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center space-x-4 hover:text-white transition transform hover:scale-105">
              <FaPhone className="text-2xl" />
              <a href="tel:+916003703568" className="underline">
                +91 60037 03568
              </a>
            </div>

            <div className="flex items-center space-x-4 hover:text-white transition transform hover:scale-105">
              <FaInstagram className="text-2xl" />
              <a
                href="https://www.instagram.com/planet_northeast?igsh=MW52eWRweGNjaHI5OQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @planet_northeast
              </a>
            </div>

            <div className="flex items-center space-x-4 hover:text-white transition transform hover:scale-105">
              <FaFacebook className="text-2xl" />
              <a
                href="https://www.facebook.com/share/14SV4aABGWQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Planet Northeast
              </a>
            </div>

            <div className="flex items-center space-x-4 hover:text-white transition transform hover:scale-105">
              <FaMapMarkerAlt className="text-2xl" />
              <p>Guwahati, Assam, India</p>
            </div>
          </div>
        </div>

        {/* MESSAGE / CTA */}
        <div className="w-full md:w-1/2 bg-white text-black rounded-xl p-10 shadow-2xl transform hover:scale-[1.02] transition">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Let’s Plan Your Next Journey ✈️
          </h3>
          <p className="text-gray-700 text-center mb-8">
            Ready for an unforgettable adventure across the breathtaking
            Northeast? Reach out today and let’s start crafting your perfect
            itinerary.
          </p>

          <div className="flex justify-center">
            <a
              href="tel:+916003703568"
              className="bg-black text-white px-8 py-3 rounded-md border border-black hover:bg-white hover:text-black font-semibold transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto text-center border-t border-gray-800 py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Planet Northeast — Discover the Unseen.
      </footer>
    </div>
  );
}
