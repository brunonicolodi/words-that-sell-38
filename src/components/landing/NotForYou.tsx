import { Check, X } from "lucide-react";

const wont = [
  "Revisão ortográfica",
  "Criação de arte",
  "Produção de vídeos",
  "Gestão de tráfego",
];

const will = [
  "Textos que vendem",
  "Estratégia de mensagem",
  "Tom de voz consistente",
  "Conversão real",
];

const NotForYou = () => {
  return (
    <section className="bg-gradient-soft py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              O que você NÃO encontra aqui
            </span>
            <h3 className="mt-4 font-serif-display text-2xl text-foreground md:text-3xl">
              Foco é tudo.
            </h3>
            <ul className="mt-8 space-y-4">
              {wont.map((w) => (
                <li key={w} className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm md:text-base">{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-gradient-ink p-10 text-primary-foreground shadow-elevated">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70">
              O que você encontra
            </span>
            <h3 className="mt-4 font-serif-display text-2xl md:text-3xl">
              Texto que faz o cliente parar — e comprar.
            </h3>
            <ul className="mt-8 space-y-4">
              {will.map((w) => (
                <li key={w} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/15">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm md:text-base">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotForYou;
