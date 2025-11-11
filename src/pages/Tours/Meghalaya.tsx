import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";

const Meghalaya = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    passengers: "",
    maleCount: "",
    femaleCount: "",
    additionalInfo: "",
    pickupPoint: "",
  });

  const [basePrice, setBasePrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Dynamic price handling
    let newBasePrice = basePrice;
    if (name === "pickupPoint") {
      switch (value) {
        case "Guwahati":
          newBasePrice = 14500; // <-- update later if needed
          break;
        default:
          newBasePrice = null;
      }
      setBasePrice(newBasePrice);
    }

    // Calculate total price
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
      } else {
        setTotalPrice(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <img
          src="https://media1.thrillophilia.com/filestore/nwamxdepttr4a1wa4fm2hesk5jml_Untitled%20design%20(1).jpg"
          alt="Meghalaya Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
              Explore Meghalaya
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              From Guwahati — 5 Days / 4 Nights <br />
              <span className="text-yellow-400 font-semibold">
                Price Starting from {basePrice ? `₹${basePrice}` : "—"} /- Per
                Person
              </span>
            </p>
            <a
              href="#booking"
              className="inline-block mt-8 bg-white text-black font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ---------- TOUR OVERVIEW ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Meghalaya Tour Itinerary
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Duration: <span className="font-semibold">5 Days / 4 Nights</span> |
          From <span className="font-semibold">Guwahati</span>
        </p>

        <div className="space-y-4">
          {[
            "Day 1: Guwahati → Shillong (100 km / 3 hrs) — Arrive in Guwahati. Optional visit to Kamakhya Temple, stop at Umiam Lake, and explore Ward’s Lake, Don Bosco Museum, and Police Bazaar. Overnight in Shillong.",
            "Day 2: Shillong → Cherrapunji (60 km / 3 hrs) — Visit Mawphlang Sacred Grove, Nohkalikai Falls, Mawdok Valley, Mawsmai or Arwah Caves, Eco Park, Seven Sisters Falls, and Bangladesh Viewpoint. Overnight in Cherrapunji.",
            "Day 3: Explore Cherrapunji — Trek to the Double Decker Living Root Bridge, visit Prut and Mawasawa Falls, and enjoy Cherrapunji’s nature trails. Stay overnight.",
            "Day 4: Cherrapunji → Dawki → Shnongpdeng (120 km / 3.5 hrs) — Visit the Umngot River, Indo-Bangladesh border, and Mawlynnong Village. Optional bamboo trek. Overnight at a riverside camp or homestay in Shnongpdeng.",
            "Day 5: Shnongpdeng → Guwahati via Jowai — Visit Krang Suri and Phe Phe Waterfalls. Return to Guwahati for departure.",
          ].map((day, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-black transition duration-300 bg-gradient-to-r from-gray-50 to-white"
            >
              <p className="font-medium text-gray-800">{day}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PACKAGE DETAILS ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Package Inclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Sightseeing and transport with experienced driver</li>
              <li>✅ Comfortable accommodations</li>
              <li>✅ Breakfast included</li>
              <li>✅ Local driver services</li>
              <li>✅ Tolls and parking included</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">
              Package Exclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ Lunch and dinner</li>
              <li>❌ Entry fees at attractions</li>
              <li>❌ Optional activities</li>
              <li>❌ Personal expenses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- BOOKING FORM ---------- */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Meghalaya Adventure
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-8 text-gray-700"
          >
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block mb-2 font-medium">
                Preferred Travel Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              />
            </div>

            {/* Pickup Point */}
            <div>
              <label className="block mb-2 font-medium">Pickup Point</label>
              <select
                name="pickupPoint"
                value={formData.pickupPoint}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              >
                <option value="">Select Pickup Point</option>
                <option value="Guwahati">Guwahati</option>
              </select>

              {totalPrice && (
                <div className="mt-4 text-center animate-fadeIn">
                  <p className="text-lg font-medium text-gray-600">
                    Total Price:
                  </p>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg mt-1">
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
                placeholder="Enter number of passengers"
                value={formData.passengers}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* Additional Info */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Additional Information
              </label>
              <textarea
                name="additionalInfo"
                placeholder="Any special requests or notes?"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-black text-white px-10 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meghalaya;
