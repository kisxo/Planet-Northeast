import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Web3Form from "@/components/Web3Form";
import TawangBG from "@/assets/tawangGroupBG.jpeg";
import Img1 from "@/assets/tawang2.png"; // add your actual image paths here
import Img2 from "@/assets/tawang3.png";
import Img3 from "@/assets/tawangOld.jpg";
import { useEffect, useState } from "react";

export default function TawangGroup() {
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

  // FIXED — default per-person price (from your banner)
  const [pricePerPerson, setPricePerPerson] = useState(14499);
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotal = (price, passengers) => {
    if (!price || !passengers) return null;
    return price * passengers;
  };

  // FIXED — simplified handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    const passengersCount =
      name === "passengers" ? Number(value) : Number(updatedData.passengers);

    const total = calculateTotal(pricePerPerson, passengersCount);

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
      <section className="relative w-full h-[70vh] md:h-[75vh] overflow-hidden">
        <img
          src={TawangBG}
          alt="Tawang Tour"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex items-center justify-center px-4 sm:px-6 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-wide">
              JOIN THIS EXCITING GROUP TOUR AND EXPLORE THE MAJESTIC EASTERN
              HIMALAYAS
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed">
              From Guwahati — 6 Days / 5 Nights <br />
              <span className="text-yellow-400 font-semibold">
                Price Starting from ₹14,499 /- Per Person
              </span>
            </p>

            <a
              href="#booking"
              className="inline-block mt-6 sm:mt-8 bg-white text-black font-medium px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ---------- TOUR OVERVIEW ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Overview
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Discover the hidden soul of Arunachal with this 6-day offbeat Tawang
          expedition. The route weaves through tranquil valleys and ancient
          villages rarely touched by tourism. Highlights include the riverside
          peace of Sangti Valley, spiritual immersion at Tawang’s ancient
          monasteries, and vibrant Monpa and Brokpa communities preserving
          centuries-old lifestyles. Beyond Tawang, journey deep into untouched
          regions—Mago Village and Chug Valley—where daily life follows old
          rhythms amid dramatic Himalayan landscapes. The tour ends at Thembang,
          a UNESCO-listed fortress village, offering a final glimpse into living
          history and tribal tradition. Authentic encounters, remote stays, and
          pristine mountain beauty make this a true cultural adventure.
        </p>

        {/* ---------- NEW RESPONSIVE IMAGE GALLERY ---------- */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          <img
            src={Img1}
            alt="Tawang view 1"
            className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={Img2}
            alt="Tawang view 2"
            className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={Img3}
            alt="Tawang view 3"
            className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Itinerary
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Duration: <span className="font-semibold">6 Days / 5 Nights</span> |
          From <span className="font-semibold">Guwahati</span> | Vehicle: Tempo
          Traveller | Tour Type: Group Tour
        </p>

        <div className="space-y-4">
          {[
            <span>
              Day 1: <strong>Guwahati to Sangti Valley</strong>. Meet the group
              at Guwahati and begin the scenic drive to Dirang. Continue onward
              to Sangti Valley, a hidden gem surrounded by pine forests and
              river views. Evening walk around the village, mountainside farms &
              riverside. Overnight at Sangti Valley.
            </span>,
            <span>
              Day 2: <strong>Sangti Valley to Tawang</strong>. After breakfast,
              start the drive through the high mountains. Cross the legendary
              Sela Pass (13,700 ft)—snow walls, frozen lakes & vibrant prayer
              flags. Stop at Sela Lake and Jaswant Garh War Memorial. Reach
              Tawang by evening and check in. Overnight in Tawang.
            </span>,
            <span>
              Day 3: <strong>Explore Tawang and enjoy local sightseeing</strong>
              . Bumla Pass, Sangetsar Lake & Tawang Monastery Early morning
              permit check and drive to Bumla Pass (Indo-China Border). Visit
              the iconic Sangetsar (Madhuri) Lake surrounded by dead tree trunks
              & snowy cliffs. Return to Tawang for Tawang Monastery visit—the
              largest in India. Explore Tawang Market or local cafés in the
              evening. Overnight in Tawang
            </span>,
            <span>
              Day 4: <strong>Tawang to Mago Village & Gongkar Lake</strong>.
              Tawang → Mago Village → Gongkar Lake Depart for one of Arunachal’s
              most remote offbeat routes. Drive through rugged terrain to reach
              Mago Village, a peaceful settlement near the Tibet border.
              Continue toward Gongkar Lake, known for its turquoise water,
              glaciers & alpine scenery. Spend time exploring meadows, prayer
              flags & the serene high-altitude valley. Overnight at Mago Village
              (local homestay).
            </span>,
            <span>
              Day 5: <strong>Mago to Chug Valley</strong>. Leave Mago and travel
              into the lesser-known Chug Valley, rich in Monpa culture and
              untouched landscapes. Visit local monasteries, interact with
              villagers & enjoy the pure offbeat beauty of the valley. Explore
              hidden trails and mountain streams. Overnight at Chug Valley.
            </span>,
            <span>
              Day 6: <strong>Chug Valley to Thembang and Departure</strong>.
              Drive to the heritage village Thembang (UNESCO tentative
              site)—stone houses, ancient fort walls & centuries-old culture.
              Walk through the old fort village and interact with locals. Depart
              for Guwahati with beautiful memories of remote valleys, mountains,
              lakes & culture.
            </span>,
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
              <li>❌ Lunch</li>
              <li>❌ Dinner</li>
              <li>❌ Personal expenses (snacks, souvenirs, etc.)</li>
              <li>❌ Airfare</li>
            </ul>
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
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
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
                <label className="block mb-2 font-medium">Select a Date</label>
                <select
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 outline-none shadow-sm transition-all"
                >
                  <option value="">Select a Batch</option>
                  <option value="Dec 29 - Jan 3">
                    Dec 29th 2025 to Jan 3rd 2026
                  </option>
                  <option value="Jan 13 - Jan 18">
                    Jan 13th to 18th, 2026
                  </option>
                  <option value="Feb 10 - Feb 15">
                    Feb 10th to 15th, 2026
                  </option>
                  <option value="Mar 1 - Mar 6">March 1st to 6th, 2026</option>
                </select>
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
                  Submit Enquiry
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
