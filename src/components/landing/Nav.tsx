import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center" aria-label="Bruno Nicolodi — início">
          <img
            src={logoFull}
            alt="Bruno Nicolodi"
            className="h-7 w-auto md:h-8"
            loading="eager"
            decoding="async"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#servicos" className="hover:text-brand-deep">Serviços</a>
          <a href="#mentorias" className="hover:text-brand-deep">Mentorias</a>
          <a href="#processo" className="hover:text-brand-deep">Processo</a>
        </nav>
        <Button asChild variant="cta" size="sm">
          <a href="#contato">Bora falar →</a>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
