import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const bookingSchema = z.object({
  tour_name: z.string().min(2, "Tour name is required"),
  destination: z.string().min(2, "Destination is required"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
  travelers: z.number().min(1, "At least 1 traveler required"),
  total_price: z.number().min(0, "Price must be positive"),
});

interface BookingFormProps {
  userId: string;
  onComplete: () => void;
}

const BookingForm = ({ userId, onComplete }: BookingFormProps) => {

  return (<></>
  );
};

export default BookingForm;
