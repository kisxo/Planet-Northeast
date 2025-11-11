import { Button } from "@/components/ui/button";
import { Calendar, Music } from "lucide-react";
import { Link } from "react-router-dom";
import ziro from "@/assets/ziro.jpg";
import Hornbill from "@/assets/hornbill.jpg";
const festivals = [
  {
    title: "Ziro Music Festival",
    image: ziro,
    duration: "5 Days | 4 Nights",
    groupSize: "Open Festival",
    price: "From ₹1,499 /- Per Person",
    link: "/festivals/ziromusic",
  },
  {
    title: "Hornbill Festival",
    image: Hornbill,
    duration: "December 1st to 10th",
    groupSize: "Open Festival",
    price: "From ₹999 /- Per Person",
    link: "/festivals/ziromusic",
  },
];

const Festivals = () => {
  return (
    <section id="festivals" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Festivals</h2>
          <p className="text-lg text-muted-foreground">
            Experience the rhythm, colors, and culture of Northeast India — from
            mountain valleys filled with music to vibrant tribal celebrations.
          </p>
        </div>

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {festivals.map((festival) => (
            <div
              key={festival.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={festival.image}
                  alt={festival.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{festival.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{festival.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    <span>{festival.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    {festival.price}
                  </span>
                  <Link to={festival.link} className="border rounded-sm p-2">
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
            View All Festivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Festivals;
