import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Web3Form from "@/components/Web3Form";

const DzukouValley = () => {
        useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
    if (name === "pickupPoint") {
      switch (value) {
        case "Guwahati":
          newBasePrice = 6799;
          break;
        case "Dimapur":
          newBasePrice = 5999;
          break;
        case "Kohima":
          newBasePrice = 5399;
          break;
        default:
          newBasePrice = null;
      }
      setBasePrice(newBasePrice);
    }

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
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/images/dzukou-valley.jpg"
          alt="Dzukou Valley"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
              Dzukou Valley
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              Starting from{" "}
              <span className="text-yellow-400 font-semibold">₹5399/-</span> per
              person
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
          Dzukou Valley – 3 Days / 2 Nights
        </h2>
        <p className="text-gray-600 mb-8 font-medium">
          Explore Nagaland’s mystical valley of flowers — where clouds meet
          meadows and adventure meets serenity.
        </p>

        <div className="space-y-4">
          {[
            "Day 1: Dimapur → Jakhama — Drive 3 hrs (82 km). Enjoy traditional Naga lunch, village walk, and trek briefing. Stay: Homestay/Camp.",
            "Day 2: Jakhama → Dzukou Valley — Short drive to trailhead, then 4–5 hr trek (15–17 km). Explore meadows, enjoy sunset and campfire. Stay: Camp/Dorm.",
            "Day 3: Dzukou → Jakhama → Dimapur — Sunrise hike, breakfast, descend back, and drive to Dimapur. Optional Kohima visit.",
          ].map((day, i) => (
            <div
              key={i}
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
              Inclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Transfers from selected pickup point</li>
              <li>✅ 1N Jakhama + 1N Dzukou stay</li>
              <li>✅ Local guide & Inner Line Permit (ILP)</li>
              <li>✅ 2 lunches + energy boosters</li>
              <li>✅ Campfire experience (weather permitting)</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">
              Exclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ Breakfasts and dinners</li>
              <li>❌ First-day lunch</li>
              <li>❌ Room heater</li>
              <li>❌ Personal expenses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- BOOKING FORM ---------- */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Dzukou Valley Adventure
          </h2>

          <Web3Form title={"Trek"} name={"Dzukou Valley"}>
          <div
            className="grid md:grid-cols-2 gap-8 text-gray-700"
          >
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

            <div>
              <label className="block mb-2 font-medium">Travel Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              />
            </div>

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
                <option value="Guwahati">Guwahati – ₹6799</option>
                <option value="Dimapur">Dimapur – ₹5999</option>
                <option value="Kohima">Kohima – ₹5399</option>
              </select>

              {totalPrice && (
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium text-gray-600">
                    Total Price:
                  </p>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-1">
                    {totalPrice}
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                No. of Passengers
              </label>
              <input
                type="number"
                name="passengers"
                placeholder="Enter number of passengers"
                value={formData.passengers}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

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
};

export default DzukouValley;
