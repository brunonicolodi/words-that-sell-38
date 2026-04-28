import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";

const mentorias = [
  {
    n: "01",
    title: "Mentoria Básica em Copywriting",
    desc: "O essencial que você precisa saber para se comunicar na internet com clareza e propósito de venda.",
    meta: "3 encontros · virtuais ou ao vivo",
  },
  {
    n: "02",
    title: "IA aplicada ao seu trabalho",
    desc: "Use Inteligência Artificial para escrever melhor, mais rápido e com estratégia. 100% prática.",
    meta: "1 encontro · virtual ou ao vivo",
  },
];

const Mentorias = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Mentorias"
          title={
            <>
              Aprenda comigo.{" "}
              <span className="text-muted-foreground">No seu ritmo, com método.</span>
            </>
          }
        />

        <div className="mx-auto mt-16 max-w-4xl divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
          {mentorias.map((m) => (
            <div
              key={m.n}
              className="group grid gap-4 p-8 transition-colors duration-300 first:rounded-t-3xl last:rounded-b-3xl hover:bg-accent/40 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8"
            >
              <span className="font-serif-display text-3xl text-primary-glow md:text-4xl">
                {m.n}
              </span>
              <div>
                <h3 className="text-xl text-foreground md:text-2xl">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground md:text-right">
                {m.meta}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default Mentorias;
