import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

// ⭐ Use your same images — update paths later
import ZiroImg from "@/assets/shillong.png";
import ZiroCamp from "@/assets/majuli.png";
import ZiroPackage from "@/assets/feature-adventure.jpg";
import ZiroCulture from "@/assets/ziro.jpg";
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
                Starting from ₹3,999 /- Per Person
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
          The Ziro Music Festival is a four-day celebration of independent
          music, tribal culture, and the breathtaking landscapes of the Ziro
          Valley in Arunachal Pradesh. It is known for its peaceful vibe,
          beautiful nature, and amazing outdoor stage surrounded by pine trees
          and rice fields.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Where & When
        </h3>
        <p className="text-gray-700 mb-8">
          The festival takes place in the scenic <b>Ziro Valley</b>, home to the
          <b> Apatani tribe</b>. It usually happens in the month of{" "}
          <b>September</b>, attracting travelers from across the world.
        </p>

        {/* ⭐ THINGS TO DO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Things to Do
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Enjoy live indie music performances</li>
              <li>Trek through pine forests & scenic viewpoints</li>
              <li>Try local Apatani cuisine & rice beer</li>
              <li>Explore local villages & handicrafts</li>
              <li>Camp under the stars</li>
              <li>Join bonfire sessions & afterparties</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
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
              <li>🚐 Itanagar Pickup — ₹4,999</li>
              <li>🚐 Naharlagun Pickup — ₹4,599</li>
              <li>🎵 Ziro Direct Entry — ₹3,999</li>
              <li>🏕️ Camping Options Available</li>
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

      {/* ⭐ CAMPSITE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Our Campsite
            </h2>
            <p className="text-gray-700 mb-4">
              Stay close to the festival ground with a peaceful and scenic
              camping setup surrounded by green mountains.
            </p>
            <p className="text-gray-700 mb-4">
              Cozy tents, basic amenities, warm food, and a lively traveler
              community — everything you need for a memorable festival.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ZiroCamp}
              alt="Ziro Campsite"
              className="w-full h-full object-cover"
            />
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
