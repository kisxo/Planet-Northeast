// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero.jpg";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="relative md:h-screen h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/20" />
//       </div>

//       <div className="relative z-10 container mx-auto px-6 text-center text-white">
//         <h1 className="text-2xl md:text-7xl font-bold mb-6 animate-fade-in">
//           Every Journey Here Feels Like a Discovery.
//         </h1>
//         <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
//           Adventure, Culture, and Nature - All in One Region
//         </p>
//         {/* <Link
//                     to={"/destinations"}
//                     className="group bg-orange-500 py-3 px-6 flex w-fit mx-auto text-neutral-50 items-center rounded-xl"
//                 >
//                     Book Now
//                     <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </Link> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg"; // Desktop image
import heroMobile from "@/assets/hero-mobile.jpg"; // Mobile image you will add
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative md:h-screen h-[500px] flex items-center justify-center overflow-hidden">
      {/* Desktop Image */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Mobile Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden block"
        style={{ backgroundImage: `url(${heroMobile})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-3xl md:text-7xl font-bold mb-6">
          Every Journey Here Feels Like a Discovery.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Adventure, Culture, and Nature - All in One Region
        </p>

        {/* Keep button hidden or enable later */}
        {/* <Link
          to={"/destinations"}
          className="group bg-orange-500 py-3 px-6 flex w-fit mx-auto text-neutral-50 items-center rounded-xl"
        >
          Book Now
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link> */}
      </div>
    </section>
  );
};

export default Hero;
