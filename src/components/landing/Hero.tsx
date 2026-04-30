import heroImage from "@/assets/hero-waves.jpg";
import logoFull from "@/assets/logo-full.png";
import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative image */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={1200}
          className="h-full w-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="container relative mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-10 flex items-center justify-center">
            <img
              src={logoFull}
              alt="Bruno Nicolodi"
              className="h-12 w-auto rounded-xl shadow-card md:h-16"
              loading="eager"
              decoding="async"
            />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Copywriting estratégico
          </span>

          <h1 className="mt-8 text-balance text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Você pode usar palavras para{" "}
            <em className="not-italic font-serif-display italic text-primary">
              adicionar números
            </em>{" "}
            à sua conta bancária.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            Inclua copywriting à estratégia do seu negócio. Tenha ao seu lado um
            redator publicitário com mais de{" "}
            <span className="font-semibold text-foreground">9 anos de experiência</span>.
            Eu ajudo você.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton />
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>+9 anos de mercado</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Erechim · Brasil</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="inline-flex items-center gap-2">
              Publicitário
              <span className="h-1 w-1 rounded-full bg-border" />
              Copywriter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
