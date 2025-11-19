// src/pages/ApataniTour.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Web3Form from "@/components/Web3Form";

// Hero Image
import HeroCover from "@/assets/apataniPC1.png";
import HeroCoverPhn from "@/assets/apataniMbl.jpg";
import imgApatani from "@/assets/apataniImg.jpg";
//Gallery Image
import Dzoku1 from "@/assets/apatani1.jpg";
import Dzoku2 from "@/assets/apatani2.jpg";
import Dzoku3 from "@/assets/apatani3.jpg";
import Dzoku4 from "@/assets/apatani4.jpg";
import Dzoku5 from "@/assets/apatani5.jpg";
import Dzoku6 from "@/assets/apatani6.jpg";

const ApataniTour = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    passengers: "",
    pickupPoint: "",
    additionalInfo: "",
  });

  const [basePrice, setBasePrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    let newBasePrice = basePrice;

    // ⭐ Pickup Pricing
    if (name === "pickupPoint") {
      newBasePrice = value === "Itanagar" ? 24999 : null;
      setBasePrice(newBasePrice);
    }

    // ⭐ Calculate total
    if (name === "passengers" || name === "pickupPoint") {
      const passengers =
        name === "passengers" ? Number(value) : Number(updatedData.passengers);
      const effectiveBase = name === "pickupPoint" ? newBasePrice : basePrice;

      if (effectiveBase && passengers > 0) {
        const total = effectiveBase * passengers;
        setTotalPrice(
          `₹${total.toLocaleString()} /- Total (${passengers} Person${
            passengers > 1 ? "s" : ""
          })`
        );
      } else setTotalPrice(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Booking submitted successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      passengers: "",
      pickupPoint: "",
      additionalInfo: "",
    });

    setBasePrice(null);
    setTotalPrice(null);
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* ⭐ HERO SECTION */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        {/* Mobile Image */}
        <img
          src={HeroCoverPhn}
          alt="Apatani Tour Mobile"
          className="w-full h-full object-cover sm:hidden"
        />

        {/* Desktop / Tablet Image */}
        <img
          src={HeroCover}
          alt="Apatani Tour Desktop"
          className="w-full h-full object-cover hidden sm:block"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4">
              Apatani Tribe Photography Tour
            </h1>

            <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
              Experience the ancient culture, tattoos, and traditions of the
              Apatani tribe in the breathtaking Ziro Valley.
            </p>

            <a
              href="#booking"
              className="inline-block mt-8 bg-yellow-300 text-black px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-yellow-500 hover:text-white transition"
            >
              Book Now
            </a>

            <p className="text-gray-300 mt-6 text-sm">
              Price : <span className="font-bold text-yellow-300">₹24,999</span>
            </p>
          </div>
        </div>
      </section>

      {/* ⭐ ABOUT APATANI */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed mb-6">
              Journey into the heart of Arunachal Pradesh and explore the
              Apatani tribe—one of India’s most culturally rich and visually
              striking communities. This 5-day photography expedition takes you
              through scenic valleys, ancient villages, and the vibrant Dree
              Festival, offering unmatched opportunities to capture portraits,
              rituals, landscapes, and lifestyle moments. Guided by expert
              mentors and supported by local professionals, this tour blends
              cultural immersion with hands-on learning, making it perfect for
              both hobbyists and serious photographers. Experience the harmony
              of tradition and nature as you document the soul of Ziro Valley.
            </p>

            {/* ICON POINTS */}
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm">Ziro Valley, Arunachal Pradesh</p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="text-xl">📷</span>
                <div>
                  <p className="font-semibold">Best For</p>
                  <p className="text-sm">Portrait & culture photography</p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="text-xl">🕒</span>
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-sm">6 Days</p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <span className="text-xl">👥</span>
                <div>
                  <p className="font-semibold">Group Size</p>
                  <p className="text-sm">Max 10 people</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Details Card */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5">
            <h3 className="text-lg font-semibold mb-3">Quick more Details</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>
                <strong>Pickup Points:</strong> Itanagar
              </li>
              <li>
                <strong>Season:</strong> 3 July to 7 July
              </li>
              <li>
                <strong>Theme:</strong> Portraits, Culture & Lifestyle
              </li>
              <li>
                <strong>Languages:</strong> Local • Hindi/English
              </li>
              <li>
                <strong>Local Guide:</strong> Included
              </li>
              <li>
                <strong>Gear Recommended:</strong> 50mm / 85mm lens
              </li>
              <li>
                <strong>Stay Type:</strong> Homestay / Village hut
              </li>
              <li>
                <strong>Traditional Tattoos and nose plugs:</strong> Declined in
                1970s, very rare now
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ⭐ GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Gallery</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[Dzoku1, Dzoku2, Dzoku3, Dzoku4, Dzoku5, Dzoku6].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            >
              <img
                src={img}
                alt={`Apatani photo ${i + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ CULTURE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Apatani Tribe</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Apatani tribe is known for their distinct tattoos (now rare),
              nose plugs of the past, and sustainable lifestyle. Visitors must
              follow respectful cultural etiquette to ensure meaningful and
              responsible interactions.
            </p>

            <h3 className="text-xl font-semibold mb-2">What to Respect</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Always ask for permission before portraits.</li>
              <li>Support local artisans and farmers.</li>
              <li>Avoid photographing sacred objects without consent.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Interesting Facts</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>UNESCO-recognized paddy–fish farming system.</li>
              <li>Tattoo traditions stopped in the 1970s.</li>
              <li>Bamboo & cane architecture everywhere.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imgApatani}
              alt="Apatani Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ⭐ HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">Trip Highlights</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-5 text-gray-700 leading-relaxed">
            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Explore the iconic Apatani villages
                </span>{" "}
                — wander through living heritage landscapes known for their
                unique facial tattoos, traditional homes, and centuries-old
                customs.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Document everyday tribal life
                </span>{" "}
                — capture intimate moments, rituals, and the serene rhythm of
                rural Apatani culture.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Experience the vibrant Dree Festival
                </span>{" "}
                — photograph traditional dance, attire, ceremonies, and
                community feasts in a celebration rich with colour and emotion.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Witness cinematic valley landscapes
                </span>{" "}
                — emerald rice terraces and rolling hills glow under soft
                sunrise and golden sunset light.
              </p>
            </li>
          </ul>

          <ul className="space-y-5 text-gray-700 leading-relaxed">
            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Portrait sessions with Apatani elders
                </span>{" "}
                — a rare chance to photograph historic tattoos and hear stories
                deeply rooted in tribal identity.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Walk through sacred forests and bamboo groves
                </span>{" "}
                — explore ecological traditions that have shaped Apatani life
                for generations.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Capture the serene beauty of Seeh Lake
                </span>{" "}
                — its still, mirror-like waters offer dramatic reflections for
                atmospheric landscape photography.
              </p>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-gray-900 text-xl mt-1">•</span>
              <p>
                <span className="font-semibold text-gray-900">
                  Immerse in authentic tribal hospitality
                </span>{" "}
                — slow-paced village living, warm conversations, and genuine
                cultural exchange enrich every moment.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ⭐ ITINERARY */}
      <section
        id="itinerary"
        className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          5-Day Itinerary
        </h2>

        <div className="space-y-5">
          {[
            "Day 1: Drive Itanagar–Ziro via Kimin, Potin, Yazali with scenic stops at Brahmaputra Riverside and Pitapool; arrive and overnight in Ziro.",
            "Day 2: Apatani village photowalk, attend Dree Festival (Day 1), and session on composition; overnight in Ziro.",
            "Paddy Field & Day 3: Capture Dree Festival rituals, performances, and attire; session on lighting techniques; overnight in Ziro.  Photography, Artisan Visits, Sunset shoot",
            "Day 4: Visit remote Apatani settlements for portrait and lifestyle shots; session on documentary photography; overnight in Ziro.",
            "Day 5: Depart Ziro, stop at Seeh Lake for landscapes, continue to Itanagar; tour ends.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PACKAGE DETAILS ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Package Inclusions */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Package Inclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ All Local Sightseeing</li>
              <li>✅ Transportation</li>
              <li>✅ Accommodation (Twin / Triple Sharing)</li>
              <li>✅ Daily Breakfast</li>
              <li>✅ Expert Photography Mentorship</li>
              <li>✅ Experienced Local Guide</li>
              <li>✅ Inner Line Permit (ILP)</li>
              <li>✅ Driver Charges (Toll, Parking, Food & Stay Included)</li>
            </ul>
          </div>

          {/* Package Exclusions */}
          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">
              Package Exclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ First Day Breakfast</li>
              <li>❌ Lunch & Dinner</li>
              <li>❌ Room Heater (if required)</li>
              <li>❌ Festival Entry Fees (if applicable)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ⭐ BOOKING FORM */}
      {/* ⭐ BOOKING FORM */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Apatani Tribe Experience
          </h2>

          {/* ⭐ FIXED: Removed nested form — now structure matches Nagaland */}
          <Web3Form title="Photography Tour" name="Apatani Tribe">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block mb-2 font-medium">Travel Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              {/* Pickup */}
              <div>
                <label className="block mb-2 font-medium">Pickup Point</label>
                <select
                  name="pickupPoint"
                  required
                  value={formData.pickupPoint}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <option value="">Select Pickup Point</option>
                  <option value="Itanagar">Itanagar – ₹24,999</option>
                </select>

                {totalPrice && (
                  <div className="text-center mt-4">
                    <p className="text-gray-600 font-medium">Total Price:</p>
                    <p className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {totalPrice}
                    </p>
                  </div>
                )}
              </div>

              {/* Passengers */}
              <div>
                <label className="block mb-2 font-medium">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  name="passengers"
                  min="1"
                  required
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              {/* Additional Info */}
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-10 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Submit Booking
                </button>
              </div>
            </div>
          </Web3Form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApataniTour;

//Fix the mailer
