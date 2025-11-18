import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

//Use your same images — update paths later
import ZiroImg from "@/assets/ZiroHero.jpg";
import ZiroCamp from "@/assets/ziroCampsite.jpg";
import ZiroCamp2 from "@/assets/capmZiro2.jpg";
import ZiroPackage from "@/assets/packages (1).jpg";
import ZiroCulture from "@/assets/thingsToDo.jpg";
import Web3Form from "@/components/Web3Form";

const ZiroMusic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    passengers: "",
    package: "",
    additionalInfo: "",
  });

  const [basePrice, setBasePrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    let newBasePrice = basePrice;

    // ⭐ Package Pricing (Ziro Pickup Points)
    if (name === "package") {
      switch (value) {
        case "Itanagar — ₹4999":
          newBasePrice = 4999;
          break;
        case "Naharlagun — ₹4599":
          newBasePrice = 4599;
          break;
        case "Ziro — ₹3999":
          newBasePrice = 3999;
          break;
        default:
          newBasePrice = null;
      }
      setBasePrice(newBasePrice);
    }

    if (name === "passengers" || name === "package") {
      const passengers =
        name === "passengers" ? Number(value) : Number(updatedData.passengers);
      const effectiveBase = name === "package" ? newBasePrice : basePrice;

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
    alert("🎉 Booking submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      passengers: "",
      package: "",
      additionalInfo: "",
    });
    setBasePrice(null);
    setTotalPrice(null);
  };

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* ⭐ HERO SECTION */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <img
          src={ZiroImg}
          alt="Ziro Music Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
              Ziro Music Festival
            </h1>
            <p className="text-lg md:text-2xl text-gray-200">
              Experience India’s most iconic outdoor music festival
              <br />
              <span className="text-yellow-400 font-semibold">
                Starting from ₹1,499 /- Per Person
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

      {/* ⭐ ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          About Ziro Music Festival
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ziro Music Festival is a four-day indie music celebration held every
          year in the breathtaking Ziro Valley of Arunachal Pradesh. Surrounded
          by rolling paddy fields, pine forests, and misty mountains, the
          festival blends music, nature, and culture into a unique open-air
          experience. It showcases a diverse lineup of indie, folk, and
          experimental artists from across India and around the world. Known for
          its eco-friendly practices, bamboo stage design, and vibrant camping
          culture, the festival also offers visitors a chance to experience the
          rich traditions and warm hospitality of the Apatani tribe. It’s
          considered one of India’s most soulful and scenic music festivals.
        </p>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Where & When
        </h3>
        <p className="text-gray-700 mb-8">
          The Ziro Music Festival is held in the picturesque Ziro Valley of
          Arunachal Pradesh, surrounded by paddy fields and pine-covered hills.
          This four-day indie music event usually takes place in the last week
          of September each year. Blending music, nature, and local Apatani
          culture, it offers an eco-friendly, open-air festival experience
          unlike anywhere else in India.
        </p>

        {/* ⭐ THINGS TO DO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Things to Do
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Paddy-field fishing and learning sustainable Apatani
                agriculture.
              </li>
              <li>Visit local wineries and taste indigenous beverages.</li>
              <li>
                Village walk for cultural immersion and local interactions..
              </li>
              <li>Portrait photography of iconic Apatani women</li>
              <li>Explore Talley Valley and its rich biodiversity.</li>
              <li>Enjoy local Apatani cuisine and organic delicacies.</li>
              <li>Outdoor music concerts and electrifying rock nights.</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg mt-16">
            <img
              src={ZiroCulture}
              alt="Ziro Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ⭐ PACKAGES SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Packages
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-bold">1. 5N/6D – Ex Guwahati</span>—
                ₹18,500 ✨ Includes: 🏕️ Camping • 🚐 Transfers • 🏞️
                Sightseeing/Activities • 🍳 Dinner & Breakfast
              </li>

              <li>
                <span className="font-bold">2. 4N/5D – Ex Itanagar</span>—
                ₹16,500 ✨ Includes: 🏕️ Camping • 🚐 Transfers • 🏞️
                Sightseeing/Activities • 🍳 Dinner & Breakfast
              </li>

              <li>
                <span className="font-bold">3. 4N/5D – Camping Package</span>—
                ₹10,500 ✨ Includes: 🏕️ Camping • 🏞️ Sightseeing/Activities • 🍳
                Dinner & Breakfast
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ZiroPackage}
              alt="Ziro Packages"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Itinerary
        </h2>

        <div className="space-y-5">
          {[
            "Day 1: Guwahati → Ziro (Overnight Drive). Meet at 7:30 PM and begin the overnight journey to Ziro (approx. 10 hrs / 404 km). Arrive next morning and check in for rest.",
            "Day 2: Arrival & Festival Evening. Check in at Planet Northeast Ziro Campsite. Enjoy breakfast, settle in, and head to the Ziro Festival grounds. Return to your cozy tent for an overnight stay.",
            "Day 3: Valley Exploration + Festival Night. Visit Old Ziro, Siikhe & Seeh Lakes. Evening at the festival followed by bonfire jams at the campsite.",
            "Day 4: Apatani Village & Winery Visit. Morning village walk to learn Apatani culture, tattoos, and farming. Later visit Naara Aaba Winery for wine tasting. Evening music festival and overnight at camp.",
            "Day 5: Paddy Field Fishing + Final Festival Day. Experience traditional Apatani paddy field fishing. Enjoy the last festival day and return to camp for the final night under the stars.",
            "Day 6: Return to Guwahati. Breakfast at campsite, then drive back to Guwahati. Drop at airport/station. Trip ends with unforgettable memories.",
          ].map((day, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-black transition bg-white"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full font-semibold text-lg shrink-0">
                {index + 1}
              </div>
              <p className="font-medium text-gray-800 leading-relaxed">{day}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ CAMPSITE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Our Campsite
            </h2>

            <p className="text-gray-700 mb-4">
              Our campsite is located just 10 minutes from the Ziro Festival
              venue, set beneath tall pine trees and surrounded by vibrant
              cosmos flowers. Spread across a large, open area, it offers a
              spacious and peaceful environment for guests to relax and enjoy
              nature. We provide premium-quality tents equipped with comfortable
              amenities, ensuring a cozy stay throughout the festival. Guests
              can enjoy on-site activities like archery and darts, adding a fun
              touch to the experience. Every year, we proudly host over 150
              guests, maintaining a strong focus on food quality, hygiene, and
              comfort. Sustainability is a core part of our operations—we
              practice responsible waste management to keep the valley clean and
              beautiful. Overall, we strive to deliver a warm, memorable, and
              truly enjoyable stay for every traveler
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Facilities
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🚽</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Concrete Western & Indian toilets
                    </span>{" "}
                    – clean, permanent structures.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🚿</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      24×7 running water & showers
                    </span>{" "}
                    available.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🛌</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Premium quality tents</span>{" "}
                    with mat, pillow & comforter.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🔌</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Multiple charging ports
                    </span>{" "}
                    across the campsite.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🔥</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Spacious bonfire zone</span>{" "}
                    for evening gatherings.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🎶</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Live jamming sessions</span>{" "}
                    by local artists.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🍽️</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">Authentic ethnic food</span>{" "}
                    freshly prepared.
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-xl">🌲</span>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Shaded pine forest campsite
                    </span>{" "}
                    — no harsh morning sunlight.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* IMAGES SECTION */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ZiroCamp}
                alt="Ziro Campsite"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Newly Added Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ZiroCamp2} // ← Replace with your image import
                alt="Ziro Campsite Additional View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ BOOKING FORM */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Ziro Music Festival Trip
          </h2>

          <Web3Form title={"Festival"} name={"Ziro Music"}>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm focus:border-gray-400"
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
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
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
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
                />
              </div>

              {/* ⭐ Package Selector */}
              <div>
                <label className="block mb-2 font-medium">Select Package</label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
                >
                  <option value="">Select Pickup Point</option>
                  <option value="Itanagar — ₹4999">Itanagar — ₹4999</option>
                  <option value="Naharlagun — ₹4599">Naharlagun — ₹4599</option>
                  <option value="Ziro — ₹3999">Ziro — ₹3999</option>
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
                  Number of Passengers
                </label>
                <input
                  type="number"
                  name="passengers"
                  placeholder="Enter number of passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                  min={1}
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
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
                  rows={4}
                  className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 shadow-sm"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  className="bg-black text-white px-10 py-3 rounded-lg font-medium hover:bg-gray-800 transition shadow-md"
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

export default ZiroMusic;
