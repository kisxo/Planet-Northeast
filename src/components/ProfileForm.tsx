import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const profileSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

interface ProfileFormProps {
  userId: string;
  profile: any;
  onUpdate: () => void;
}

const ProfileForm = ({ userId, profile, onUpdate }: ProfileFormProps) => {

  return (<></>
  );
};

export default ProfileForm;
