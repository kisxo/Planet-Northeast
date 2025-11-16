import Anini from "@/assets/anini.jpg";
import tawangRoad from "@/assets/tawang.jpg";
import tawangGroup from "@/assets/tawang.jpg";
import Machuka from "@/assets/Machuka.jpg";
import Meghalaya from "@/assets/meghalaya.jpg";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const tours = [
  {
    title: "Tawang Tour",
    image: tawangRoad, // Replace with your image import
    duration: "5 Days | 4 Nights",
    groupSize: "Private Tour",
    price: "From ₹9,999 /- Per Person",
    link: "/tours/tawang",
  },
  {
    title: "Hidden Himalayas: The Offbeat Tawang Trails- Group Tour",
    image: tawangGroup, // Replace with your image import
    duration: "6 Days | 5 Nights",
    groupSize: "Group Tour",
    price: "From ₹13,999 /- Per Person",
    link: "/tours/tawang",
  },
  {
    title: "Anini Tour",
    image: Anini, // Replace with your image import
    duration: "6 Days | 5 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹14,500 /- Per Person",
    link: "/tours/anini",
  },
  {
    title: "Mechuka Tour",
    image: Machuka, // Replace with your image import
    duration: "6 Days | 5 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹14,500 /- Per Person",
    link: "/tours/mechuka",
  },
  {
    title: "Meghalaya Tour",
    image: Meghalaya, // Replace with your image import
    duration: "5 Days | 4 Nights",
    groupSize: "Private / Group Tour",
    price: "From ₹9,999/- Per Person",
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
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  onClick={() => {
                    navigate(tour.link);
                  }}
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
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
                    Book Now
                  </Link>
                </div>
              </div>
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
