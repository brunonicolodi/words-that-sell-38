import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="font-serif-display text-xl text-foreground">
          Copy<span className="text-primary-glow">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#mentorias" className="transition-colors hover:text-foreground">Mentorias</a>
          <a href="#processo" className="transition-colors hover:text-foreground">Processo</a>
          <a href="#para-quem" className="transition-colors hover:text-foreground">Para quem</a>
        </nav>
        <Button asChild variant="ctaOutline" size="sm" className="rounded-full">
          <a href="#contato">Agendar conversa</a>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
