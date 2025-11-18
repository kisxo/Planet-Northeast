import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We are more than a travel company.{" "}
                <span className=" text-orange-400  font-bold">
                  Planet Northeast
                </span>{" "}
                is your doorway to the cultural heartbeat of Northeast India.
                Rooted deeply in the region and connected with its people, we
                curate authentic, immersive travel experiences that go beyond
                the ordinary. From vibrant festivals and tribal traditions to
                untouched landscapes and hidden homestays, we take you into the
                living stories of Northeast India’s many tribes — each with its
                own heritage and rhythm of life. Throughout the year, we craft
                hassle-free, value-driven journeys across all Northeastern
                states — and are now expanding to Vietnam, Bhutan, and Nepal.
                Whether you seek offbeat adventures, cultural depth, scenic
                treks, or soulful moments, your journey with Planet Northeast
                will stay with you long after you return home.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in authentic travel experiences — not just seeing a
                  place, but truly feeling it.
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  At Planet Northeast, we go beyond surface-level tourism to
                  take you deeper into the heart of Northeast India — its
                  people, traditions, landscapes, and stories
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We aim to help you connect, learn, and explore — to meet the
                  locals, experience their unique cultural values, and
                  understand the diverse flora, fauna, and ways of life that
                  make this region extraordinary.
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Whether you’re a traveler, researcher, photographer, writer,
                  or simply a curious soul, we guide and inspire you to know
                  Northeast India in its truest form.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Destinations</p>
                </div>
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">10K+</h3>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </div>
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Awards Won</p>
                </div>
                <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">98%</h3>
                  <p className="text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  We create genuine experiences that connect you with local
                  cultures and communities.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Every detail is carefully planned to ensure your journey
                  exceeds expectations.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building connections and supporting local
                  communities worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section id="reviews" className="py-24 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  What People Say
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Traveler Reviews
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real stories from our travelers who explored Northeast India
                  with us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Ananya Sharma",
                    review:
                      "The best travel experience of my life! Loved the local food, people, and the care they took in planning everything.",
                  },
                  {
                    name: "Rohit Mehta",
                    review:
                      "Super smooth arrangements. Felt safe, welcomed, and connected throughout the trip. Highly recommended!",
                  },
                  {
                    name: "Maria Fernandes",
                    review:
                      "Beautiful stays and even better hosts. Every moment felt authentic and unforgettable. Will travel again!",
                  },
                  {
                    name: "Sanjay Das",
                    review:
                      "They really know Northeast India. The cultural experiences were beyond anything I expected!",
                  },
                  {
                    name: "Priya Sen",
                    review:
                      "Loved how thoughtfully everything was curated. Nothing felt rushed. Truly soulful travel.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-muted/20 border shadow-sm rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <p className="text-muted-foreground mb-4">
                      “{item.review}”
                    </p>
                    <h4 className="font-semibold text-lg">— {item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
