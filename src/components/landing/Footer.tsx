import logoFull from "@/assets/logo-full.png";
import logoMark from "@/assets/logo-mark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-foreground px-4 py-2 shadow-card">
            <img src={logoFull} alt="Bruno Nicolodi" className="h-7 w-auto" />
          </div>
          <div className="rounded-xl bg-foreground p-1.5 shadow-card">
            <img src={logoMark} alt="BN" className="h-9 w-9 object-contain" />
          </div>
        </div>
        <p>© {new Date().getFullYear()} — Copywriter freelancer · Erechim, Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;
