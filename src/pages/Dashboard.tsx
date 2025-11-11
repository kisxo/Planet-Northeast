import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, User as UserIcon, LogOut, Plus } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import ProfileForm from "@/components/ProfileForm";

interface Booking {
  id: string;
  tour_name: string;
  destination: string;
  start_date: string;
  end_date: string;
  travelers: number;
  total_price: number;
  status: string;
  special_requests: string | null;
}

interface Profile {
  full_name: string | null;
  email: string | null;
  phone: string | null;
  avatar_url: string | null;
}

const Dashboard = () => {
  return (<></>
  );
};

export default Dashboard;
