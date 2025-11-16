import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Web3Form from "@/components/Web3Form";
import { useEffect, useState } from "react";

export default function Tawang() {
        useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    passengers: "",
    roomType: "",
    pickupPoint: "",
    additionalInfo: "",
  });

  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotal = (price, passengers) => {
    if (!price || !passengers) return null;
    return price * passengers;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    let basePrice = pricePerPerson;

    // Update base price by room type
    if (name === "roomType") {
      switch (value) {
        case "Triple":
          basePrice = 9999;
          break;
        case "Double":
          basePrice = 12500;
          break;
        case "Single":
          basePrice = 15600;
          break;
        default:
          basePrice = 0;
      }
      setPricePerPerson(basePrice);
    }

    // Calculate total dynamically
    const passengersCount =
      name === "passengers" ? Number(value) : Number(updatedData.passengers);
    const priceToUse = name === "roomType" ? basePrice : pricePerPerson;
    const total = calculateTotal(priceToUse, passengersCount);

    setTotalPrice(total);
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TawangMonastery-ArunachalPradesh-1.jpg/1200px-TawangMonastery-ArunachalPradesh-1.jpg"
          alt="Tawang Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
              Explore Tawang
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              From Guwahati — 5 Days / 4 Nights <br />
              <span className="text-yellow-400 font-semibold">
                Price Starting from ₹9,999 /- Per Person
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
          Tawang Tour Itinerary
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Duration: <span className="font-semibold">5 Days / 4 Nights</span> |
          From <span className="font-semibold">Guwahati</span> | Vehicle: Tempo
          Traveller | Tour Type: Group Tour
        </p>

        <div className="space-y-4">
          {[
            "Day 1: Guwahati to Dirang – Sightseeing: Kameng River (Bhalukpong), Tippi Orchid Park, Nichiphula Waterfall, Nag Mandir. Stay at Dirang.",
            "Day 2: Dirang to Tawang – Sightseeing: Sela Pass, Sela Lake, Jaswant Garh War Memorial, Nuranang Falls. Stay at Tawang.",
            "Day 3: Explore Tawang – Bumla Pass, Pangateng Tso Lake, Madhuri Lake, Tawang Monastery, Giant Buddha Statue, Tawang War Memorial. Stay at Tawang.",
            "Day 4: Tawang to Dirang – Visit Dirang Monastery and Sangti Valley. Stay at Dirang.",
            "Day 5: Dirang to Guwahati – Sightseeing: Bomdila, Shergaon, Bhairabkunda, Bhutan Border.",
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
              <li>✅ Sightseeing</li>
              <li>✅ Transportation (Tempo Traveller)</li>
              <li>✅ Breakfast</li>
              <li>✅ Hotel stay</li>
              <li>✅ Inner line permit</li>
              <li>✅ Driver & fuel charges</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">
              Package Exclusions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ First day breakfast</li>
              <li>❌ Lunch & dinner</li>
              <li>❌ Bumla Pass, Pangateng Tso & Madhuri Lake transport</li>
              <li>❌ Personal expenses (snacks, souvenirs, etc.)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              *Note: Bumla Pass, Pangateng Tso & Madhuri Lake transport cost –
              ₹5,500 (1 Private Vehicle)
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BOOKING FORM ---------- */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Tawang Adventure
          </h2>

<Web3Form title={"Tour"} name={"Tawang"}>
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
              >
                <option value="">Select Pickup Point</option>
                <option value="Guwahati">Guwahati</option>
              </select>
            </div>

            {/* Room Type */}
            <div>
              <label className="block mb-2 font-medium">Room Type</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
              >
                <option value="">Select Room Type</option>
                <option value="Triple">Triple Sharing</option>
                <option value="Double">Double Sharing</option>
                <option value="Single">Single Sharing</option>
              </select>
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
                min="1"
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* Price Display */}
            {totalPrice && (
              <div className="md:col-span-2 text-center mt-4 animate-fadeIn">
                <p className="text-lg font-medium text-gray-600">
                  Total Price for {formData.passengers} Passenger
                  {Number(formData.passengers) > 1 ? "s" : ""}:
                </p>
                <p className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg mt-1">
                  ₹{totalPrice.toLocaleString()} /-
                </p>
              </div>
            )}

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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
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
