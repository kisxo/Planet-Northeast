import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Hornbillimg from "@/assets/Hornbill2.jpg";
import Hornbillcamp from "@/assets/hornbillcamp.jpg";
import HornbillPackage from "@/assets/Hornbillpack.jpg";
import Hornbillcult from "@/assets/Hornbillculture.jpg";
const Hornbill = () => {
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

    // ✅ Package-based price calculation
    if (name === "package") {
      switch (value) {
        case "Hornbill Camping — ₹999/- (Breakfast)":
          newBasePrice = 999;
          break;
        case "Hornbill Camping — ₹1350/- (Breakfast & Dinner)":
          newBasePrice = 1350;
          break;
        case "Hornbill & Dzukou — ₹6,499/- (3N/4D | Meals & Transport)":
          newBasePrice = 6499;
          break;
        case "Hornbill, Dzukou & Local Experiences — ₹10,999/- (4N/5D)":
          newBasePrice = 10999;
          break;
        case "Hornbill, Dzukou & Local Exp. Extended — ₹11,999/- (5N/6D)":
          newBasePrice = 11999;
          break;
        case "Complete Hornbill (With Dzukou & Offbeat Tours) — ₹18,599/- (10 Days)":
          newBasePrice = 18599;
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
    alert("✅ Booking submitted successfully!");
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

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <img
          src={Hornbillimg}
          alt="Hornbill Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
              Hornbill Festival, Nagaland
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              Experience the “Festival of Festivals” — 1st to 10th December
              <br />
              <span className="text-yellow-400 font-semibold">
                Price Starting from ₹999 /- Per Person
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

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          About Hornbill Festival
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Hornbill Festival is an annual cultural celebration held in
          Nagaland, often called the “Festival of Festivals.” It brings together
          all of the state’s indigenous tribes to showcase their vibrant
          traditions, dances, music, art, and crafts. This grand event
          highlights the rich heritage and diversity of Nagaland through
          mesmerizing performances, traditional games, local cuisines, and
          colorful handicraft displays.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Where & When
        </h3>
        <p className="text-gray-700 mb-8">
          The Hornbill Festival takes place at <b>Kisama Heritage Village</b>,
          near <b>Kohima</b>, the capital of Nagaland. It is held every year
          from <b>December 1st to 10th</b>, attracting travelers from across the
          world.
        </p>

        {/* ---------- THINGS TO DO WITH IMAGE ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Things to Do
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Witness traditional tribal dances and folk music</li>
              <li>Enjoy local delicacies and rice beer</li>
              <li>Explore ethnic craft markets</li>
              <li>Capture stunning photography moments</li>
              <li>Experience camping & bonfires under the stars</li>
              <li>Attend the electrifying Hornbill Rock Festival</li>
              <li>Discover offbeat destinations around Kohima</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={Hornbillcult}
              alt="Things to Do at Hornbill Festival"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- OUR PACKAGES ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Packages
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                🏕️ <b>Hornbill Camping</b> — ₹999/- (Breakfast) or ₹1350/- (B&D)
              </li>
              <li>
                🌄 <b>Hornbill & Dzukou</b> — ₹6,499/- (3N/4D | Meals &
                Transport)
              </li>
              <li>
                🏞️ <b>Hornbill, Dzukou & Local Experiences</b> — ₹10,999/-
                (4N/5D)
              </li>
              <li>
                🌿 <b>Hornbill Extended</b> — ₹11,999/- (5N/6D)
              </li>
              <li>
                🎉 <b>Complete Hornbill Tour</b> — ₹18,599/- (10 Days)
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={HornbillPackage}
              alt="Hornbill Packages"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- ABOUT OUR CAMPSITE ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About Our Campsite
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <b>Location:</b> Kisama Heritage Village (Inside the festival
              venue)
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our campsite isn’t just a place to stay — it’s where the real
              experience begins. It offers the perfect mix of energy and peace.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You’ll wake up to the sound of birds and distant drums, surrounded
              by misty hills. Evenings are for bonfires, music, and laughter
              under the stars.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Simple but comfortable — cozy tents, clean meals, and a warm team
              to make you feel at home.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={Hornbillcamp}
              alt="Hornbill Campsite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- BOOKING FORM ---------- */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Book Your Hornbill Festival Adventure
          </h2>

          <form
            onSubmit={handleSubmit}
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

            {/* ✅ Updated Select Package Field */}
            <div>
              <label className="block mb-2 font-medium">Select Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
              >
                <option value="">Select Your Package</option>
                <option value="Hornbill Camping — ₹999/- (Breakfast)">
                  Hornbill Camping — ₹999/- (Breakfast)
                </option>
                <option value="Hornbill Camping — ₹1350/- (Breakfast & Dinner)">
                  Hornbill Camping — ₹1350/- (Breakfast & Dinner)
                </option>
                <option value="Hornbill & Dzukou — ₹6,499/- (3N/4D | Meals & Transport)">
                  Hornbill & Dzukou — ₹6,499/- (3N/4D | Meals & Transport)
                </option>
                <option value="Hornbill, Dzukou & Local Experiences — ₹10,999/- (4N/5D)">
                  Hornbill, Dzukou & Local Experiences — ₹10,999/- (4N/5D)
                </option>
                <option value="Hornbill, Dzukou & Local Exp. Extended — ₹11,999/- (5N/6D)">
                  Hornbill, Dzukou & Local Exp. Extended — ₹11,999/- (5N/6D)
                </option>
                <option value="Complete Hornbill (With Dzukou & Offbeat Tours) — ₹18,599/- (10 Days)">
                  Complete Hornbill (With Dzukou & Offbeat Tours) — ₹18,599/-
                  (10 Days)
                </option>
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
                className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
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
                rows={4}
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
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hornbill;
