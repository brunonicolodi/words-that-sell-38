import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  variant?: "cta" | "ctaBrand" | "ctaOutline";
  label?: string;
  size?: "lg" | "xl";
}

const CTAButton = ({ variant = "cta", label = "Toque aqui e agende uma conversa", size = "xl" }: CTAButtonProps) => {
  return (
    <Button asChild variant={variant} size={size} className="group">
      <a href="#contato">
        {label}
        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default CTAButton;
