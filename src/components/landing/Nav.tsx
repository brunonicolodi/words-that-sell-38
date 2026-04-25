import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="rounded-md border-2 border-ink bg-background px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
            Copywriter
          </span>
          <span className="rounded-md bg-brand px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
            freelancer
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#servicos" className="hover:text-brand-deep">Serviços</a>
          <a href="#mentorias" className="hover:text-brand-deep">Mentorias</a>
          <a href="#processo" className="hover:text-brand-deep">Processo</a>
          <a href="#faq" className="hover:text-brand-deep">FAQ</a>
        </nav>
        <Button asChild variant="cta" size="sm">
          <a href="#contato">Bora falar →</a>
        </Button>
      </div>
    </header>
  );
};

export default Nav;
