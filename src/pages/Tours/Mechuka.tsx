import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Web3Form from "@/components/Web3Form";
import { useEffect, useState } from "react";

export default function Mechuka() {
        useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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

    // Update base price dynamically based on pickup point
    let newBasePrice = basePrice;
    if (name === "pickupPoint") {
      switch (value) {
        case "Dibrugarh":
          newBasePrice = 18500; // <--update this value later
          break;
        default:
          newBasePrice = null;
      }
      setBasePrice(newBasePrice);
    }

    // Calculate total price dynamically
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
          src="https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero"
          alt="Mechuka Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
              Discover Mechuka Valley
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              From Dibrugarh — 6 Days / 5 Nights <br />
              <span className="text-yellow-400 font-semibold">
                Price Starting from {basePrice} /- Per Person
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
          Mechuka Valley Tour Itinerary
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Duration: <span className="font-semibold">6 Days / 5 Nights</span> |
          From <span className="font-semibold">Dibrugarh</span>
        </p>

        <div className="space-y-4">
          {[
            "Day 1: Dibrugarh → Aalo (200 km / 7 hrs) — Arrive at Dibrugarh airport and transfer to Aalo, a scenic town on the Siang River. Overnight in Aalo.",
            "Day 2: Aalo → Mechuka (200 km / 6 hrs) — Drive to Mechuka through stunning mountain landscapes. Check into your stay and relax.",
            "Day 3: Mechuka Sightseeing — Explore monasteries, local villages, and viewpoints along the Siyom River. Experience Memba and Ramo tribal culture.",
            "Day 4: Adventure in Mechuka — Optional zip-lining and rafting activities or leisure day to enjoy the valley’s serenity. Overnight in Mechuka.",
            "Day 5: Mechuka → Aalo (180 km / 8 hrs) — Return drive to Aalo. Evening at leisure.",
            "Day 6: Aalo → Dibrugarh (220 km / 7 hrs) — Depart for Dibrugarh for your onward journey.",
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
              <li>✅ ILP (Inner Line Permit)</li>
              <li>✅ Tolls and parking included</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">
              Package Exclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ Lunch and dinner</li>
              <li>❌ First-day breakfast</li>
              <li>❌ Room heater</li>
              <li>❌ Entry fees at monasteries or attractions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- BOOKING FORM ---------- */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Mechuka Adventure
          </h2>

          <Web3Form title={"Tour"} name={"Mechuka"}>
          <div
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all"
              >
                <option value="">Select Pickup Point</option>
                <option value="Dibrugarh">Dibrugarh</option>
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

            {/* Number of Passengers */}
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 focus:ring-0 outline-none shadow-sm transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-black text-white px-10 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
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
}
