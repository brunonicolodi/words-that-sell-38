const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p className="font-serif-display text-base text-foreground">
          Copy<span className="text-primary-glow">.</span>
        </p>
        <p>© {new Date().getFullYear()} — Copywriter freelancer · Erechim, Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;
