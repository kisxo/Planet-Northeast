import Anini from "@/assets/anini.jpg";
import tawangRoad from "@/assets/tawang.jpg";
import tawangGroup from "@/assets/tawangGrouptour.jpeg";
import Machuka from "@/assets/Machuka.jpg";
import Meghalaya from "@/assets/meghalaya.jpg";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const tours = [
  {
    title: "Tawang Tour",
    image: tawangRoad,
    duration: "5 Days | 4 Nights",
    groupSize: "Private Tour",
    price: "From ₹18,499 /- Per Person",
    link: "/tours/tawang",
  },
  {
    title: "Hidden Himalayas: The Offbeat Tawang Trails- Group Tour",
    image: tawangGroup,
    duration: "6 Days | 5 Nights",
    groupSize: "Group Tour",
    price: "From ₹14,499 /- Per Person",
    link: "/tours/tawangGroup",
    tag: "Best Seller",
  },
  {
    title: "Anini Tour",
    image: Anini,
    duration: "6 Days | 5 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹16,499 /- Per Person",
    link: "/tours/anini",
  },
  {
    title: "Mechuka Tour",
    image: Machuka,
    duration: "6 Days | 5 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹16,499 /- Per Person",
    link: "/tours/mechuka",
  },
  {
    title: "Meghalaya Tour",
    image: Meghalaya,
    duration: "5 Days | 4 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹12,499/- Per Person",
    link: "/tours/meghalaya",
  },
];

const Tours = () => {
  const navigate = useNavigate();
  return (
    <section id="tours" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Tours</h2>
          <p className="text-lg text-muted-foreground">
            Discover our most loved adventures. Handpicked routes. Authentic
            experiences. Memories for a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer relative"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* UPDATED TITLE — underline removed, still clickable */}
                <h3
                  onClick={() => navigate(tour.link)}
                  className="text-xl font-semibold mb-4 cursor-pointer"
                >
                  {tour.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{tour.price}</span>
                  <Link to={tour.link} className="border rounded-sm p-2">
                    See More
                  </Link>
                </div>
              </div>

              {tour?.tag && (
                <div className="absolute top-0 right-0 px-4 pt-5 pb-3 bg-rose-500 text-neutral-50 rounded-bl-xl text-sm font-bold animate-bounce">
                  {tour?.tag}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
