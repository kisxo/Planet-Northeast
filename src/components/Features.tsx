import featureNature from "@/assets/nature2.jpg";
import featureAdventure from "@/assets/aboutusimg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            About us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What to Expect <br />
            from Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Authentic local experiences — not just sightseeing. Handpicked stays
            close to nature and culture. Hassle-free planning with personal
            care. Real connections with local people, food, and stories.
            Adventures that feel raw, soulful, and unforgettable.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img
                  src={featureNature}
                  alt="Immersive nature experiences"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-background text-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  01
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                We don’t just travel on the surface
              </h3>
              <p className="text-muted-foreground">
                Every journey we design invites you to discover the deeper
                layers — the untold stories, local flavours, and living
                traditions of Northeast India. Travel becomes more than movement
                — it becomes meaning.
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img
                  src={featureAdventure}
                  alt="Trusted local partners"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-background text-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  02
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                We travel with intention to give back
              </h3>
              <p className="text-muted-foreground">
                Not just take away memories. Our promise: to leave every place
                better than we found it.
              </p>
            </div>
          </div>

          <Button variant="default" size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
