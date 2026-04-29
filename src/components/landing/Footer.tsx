import logoMark from "@/assets/logo-mark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
        <img src={logoMark} alt="BN" className="h-12 w-12 object-contain" />
        <p>© {new Date().getFullYear()} — Copywriter freelancer · Erechim, Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;
