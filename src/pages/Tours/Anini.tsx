// import Navbar from "../../components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Anini() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     passengers: "",
//     maleCount: "",
//     femaleCount: "",
//     additionalInfo: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Booking submitted successfully!");
//   };

//   return (
//     <div className="bg-white text-gray-800">
//       <Navbar />

//       {/* ---------- HERO SECTION ---------- */}
//       <section className="relative h-[70vh] w-full overflow-hidden">
//         <img
//           src="/images/anini.jpg"
//           alt="Anini Tour"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <div className="text-center text-white px-6">
//             <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-3">
//               Anini Tour
//             </h1>
//             <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
//               Explore the untouched paradise of Arunachal Pradesh
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- DESCRIPTION ---------- */}
//       <section className="max-w-5xl mx-auto px-6 py-14 border-b border-gray-200">
//         <h2 className="text-3xl font-bold mb-4 text-gray-900">
//           About the Journey
//         </h2>
//         <p className="text-lg leading-relaxed text-gray-600">
//           Nestled in the Dibang Valley, Anini offers breathtaking landscapes,
//           untouched nature, and a serene escape from the modern world. From
//           misty mountains to tribal villages, every corner of Anini whispers
//           peace and purity. Enjoy scenic drives, cultural exploration, and
//           tranquil moments under starry skies.
//         </p>
//       </section>

//       {/* ---------- ITINERARY ---------- */}
//       <section className="max-w-5xl mx-auto px-6 py-14 border-b border-gray-200">
//         <h2 className="text-3xl font-bold mb-6 text-gray-900">Itinerary</h2>
//         <div className="space-y-4">
//           {[
//             "Day 1: Arrival at Anini, check-in, and local sightseeing.",
//             "Day 2: Visit tribal villages and enjoy local cuisine.",
//             "Day 3: Trek to the nearby mountains and picnic by riverside.",
//             "Day 4: Explore nature trails and return journey.",
//           ].map((day, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200"
//             >
//               <p className="font-medium">{day}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- INCLUDES & EXCLUDES ---------- */}
//       <section className="max-w-5xl mx-auto px-6 py-14 border-b border-gray-200">
//         <div className="grid md:grid-cols-2 gap-10">
//           <div>
//             <h3 className="text-2xl font-semibold mb-4 text-green-700">
//               Includes
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>✅ Accommodation (3 Nights / 4 Days)</li>
//               <li>✅ Breakfast & Dinner</li>
//               <li>✅ Local Transport & Driver</li>
//               <li>✅ Tour Guide</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold mb-4 text-red-700">
//               Excludes
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>❌ Airfare or Train Tickets</li>
//               <li>❌ Lunch</li>
//               <li>❌ Personal Expenses</li>
//               <li>❌ Travel Insurance</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ---------- BOOKING FORM ---------- */}
//       <section className="max-w-5xl mx-auto px-6 py-14">
//         <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//           <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
//             Book Your Anini Adventure
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="grid md:grid-cols-2 gap-6 text-gray-700"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black"
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black"
//             />

//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black"
//             />

//             <input
//               type="number"
//               name="passengers"
//               placeholder="No. of Passengers"
//               value={formData.passengers}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black"
//             />

//             <div className="flex gap-4">
//               <input
//                 type="number"
//                 name="maleCount"
//                 placeholder="Male"
//                 value={formData.maleCount}
//                 onChange={handleChange}
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black w-full"
//               />
//               <input
//                 type="number"
//                 name="femaleCount"
//                 placeholder="Female"
//                 value={formData.femaleCount}
//                 onChange={handleChange}
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black w-full"
//               />
//             </div>

//             <textarea
//               name="additionalInfo"
//               placeholder="Additional Information"
//               value={formData.additionalInfo}
//               onChange={handleChange}
//               className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black md:col-span-2"
//             ></textarea>

//             <div className="md:col-span-2 text-center">
//               <button
//                 type="submit"
//                 className="bg-black text-white px-10 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
//               >
//                 Submit Booking
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
