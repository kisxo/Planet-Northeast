import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Dzokou from "@/assets/Dzukou.jpg";
import glow from "@/assets/glowlake.jpg";
const treks = [
  {
    title: "Dzukou Valley Trek",
    image: Dzokou,
    duration: "3 Days | 2 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹5,399 /- Per Person",
    link: "/treks/dzukou-valley",
  },
  {
    title: "Glow Lake Trek",
    image: glow,
    duration: "3 Days | 2 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹5,999 /- Per Person",
    link: "/treks/glow-lake",
  },
];

const Treks = () => {
  const navigate = useNavigate();
  return (
    <section id="treks" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Treks</h2>
          <p className="text-lg text-muted-foreground">
            Explore handpicked trekking adventures across the Northeast —
            rolling valleys, untouched forests, and unforgettable experiences.
          </p>
        </div>

        {/* Treks Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <div
              key={trek.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img onClick={()=>{navigate(trek.link);}}
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{trek.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{trek.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{trek.price}</span>
                  <Link to={trek.link} className="border rounded-sm p-2">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Treks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Treks;
