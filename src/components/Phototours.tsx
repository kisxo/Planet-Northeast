import { Button } from "@/components/ui/button";
import { Camera, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const photoTours = [
  {
    title: "Apatani Tribe Photography Tour – Arunachal Pradesh",
    image: "https://nexplore.org/blog/wp-content/uploads/2024/09/best-destination-for-photography-tour.jpg",
    duration: "5 Days | 4 Nights",
    groupSize: "Small Group / Custom Tour",
    price: "From ₹19,999 /- Per Person",
    link: "/photography-tours/apatani-tribe",
  },
  {
    title: "Nagaland Cultural Photography Tour",
    image: "https://www.tsiholidays.com/uploads/package/cover/MTcyNjgyNzQ4NgfLk.jpg",
    duration: "6 Days | 5 Nights",
    groupSize: "Small Group / Custom Tour",
    price: "From ₹21,499 /- Per Person",
    link: "/photography-tours/nagaland",
  },
];

const PhotoTours = () => {
  return (
    <section id="phototours" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Photography Tours</h2>
          <p className="text-lg text-muted-foreground">
            Capture the soul of Northeast India through your lens — vibrant tribes, 
            timeless traditions, and breathtaking landscapes.
          </p>
        </div>

        {/* PhotoTours Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {photoTours.map((tour) => (
            <div
              key={tour.title}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
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

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Photo Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhotoTours;
