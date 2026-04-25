import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  variant?: "cta" | "ctaOutline";
  label?: string;
}

const CTAButton = ({ variant = "cta", label = "Toque aqui e agende uma conversa" }: CTAButtonProps) => {
  return (
    <Button
      asChild
      variant={variant}
      size="xl"
      className="group"
    >
      <a href="#contato">
        {label}
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default CTAButton;
