import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import Tours from "@/components/Tours";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Trek from "@/components/Trek";
import Festivals from "@/components/Festival";
import Phototours from "@/components/Phototours";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Tours />
        <Trek />
        <Festivals />
        <Phototours />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
