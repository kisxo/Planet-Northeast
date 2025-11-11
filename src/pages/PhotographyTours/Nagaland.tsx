import React, { useState, useRef } from "react";
import pdfDocument from "../../assets/nagaland.pdf";
import img1 from "./nagaland/img1.jpg";
import img2 from "./nagaland/img2.jpg";
import img3 from "./nagaland/img3.jpg";
import img4 from "./nagaland/img4.jpg";
import img5 from "./nagaland/img5.jpg";
import img6 from "./nagaland/img6.jpg";
import img7 from "./nagaland/img7.jpg";
import img8 from "./nagaland/img8.jpg";
import img9 from "./nagaland/img9.jpg";
import img10 from "./nagaland/img10.jpg";
import img11 from "./nagaland/img11.jpg";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const BookingForm = () => {

    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument, pdfPage } = usePdf({
        file: "test.pdf",
        page,
        canvasRef,
    });

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
                case "Ziro":
                    newBasePrice = 6999;
                    break;
                case "Itanagar":
                    newBasePrice = 7999;
                    break;
                default:
                    newBasePrice = null;
            }
            setBasePrice(newBasePrice);
        }

        if (name === "passengers" || name === "pickupPoint") {
            const passengers =
                name === "passengers"
                    ? Number(value)
                    : Number(updatedData.passengers);
            const effectiveBase =
                name === "pickupPoint" ? newBasePrice : basePrice;

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

    return (    <div className="pt-20 min-h-screen">
          <Navbar />
                    <div className="">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`gallery-${i}`}
                />
              ))}
            </div>
        <section id="booking" className="max-w-5xl mx-auto px-6 py-16">
            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl p-10 border border-gray-200">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
                    Book Your Headhunters Photography Tour- ft. Aoleang
                    Festival, Nagaland
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-8 text-gray-700"
                >
                    <div>
                        <label className="block mb-2 font-medium">
                            Full Name
                        </label>
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
                        <label className="block mb-2 font-medium">
                            Phone Number
                        </label>
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
                        <label className="block mb-2 font-medium">
                            Email Address
                        </label>
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
                        <label className="block mb-2 font-medium">
                            Travel Date
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

                    <div>
                        <label className="block mb-2 font-medium">
                            Pickup Point
                        </label>
                        <select
                            name="pickupPoint"
                            value={formData.pickupPoint}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-200 p-3 rounded-lg bg-gray-50 focus:border-gray-400 outline-none shadow-sm transition-all"
                        >
                            <option value="">Select Pickup Point</option>
                            <option value="Ziro">Ziro – ₹6999</option>
                            <option value="Itanagar">Itanagar – ₹7999</option>
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

        <Footer/>
      </div>
    );
};

export default BookingForm;
