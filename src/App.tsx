import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import DestinationsPage from "./pages/DestinationsPage";
import ToursPage from "./pages/ToursPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Hornbill from "./pages/Festivals/Hornbill";
import ApataniTribe from "./pages/PhotographyTours/ApataniTribe";
import Nagaland from "./pages/PhotographyTours/Nagaland";
import DzukouValley from "./pages/Treks/DzukouValley";
import GlowLake from "./pages/Treks/GlowLake";
import Anini from "./pages/Tours/Anini";
import Mechuka from "./pages/Tours/Mechuka";
import Meghalaya from "./pages/Tours/Meghalaya";
import Tawang from "./pages/Tours/Tawang";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/contact" element={<Contact />} />

          {/* tours */}
          <Route path="/tours/anini" element={<Anini />} />
          <Route path="/tours/mechuka" element={<Mechuka />} />
          <Route path="/tours/meghalaya" element={<Meghalaya />} />
          <Route path="/tours/tawang" element={<Tawang />} />

          {/* treks */}
          <Route path="/treks/dzukou-valley" element={<DzukouValley />} />
          <Route path="/treks/glow-lake" element={<GlowLake />} />

          {/* festivals */}
          <Route path="/festivals/hornbill" element={<Hornbill />} />

          {/* Photography */}
          <Route
            path="/photography-tours/apatani-tribe"
            element={<ApataniTribe />}
          />
          <Route path="/photography-tours/nagaland" element={<Nagaland />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
