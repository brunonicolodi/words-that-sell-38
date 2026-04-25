import SectionHeader from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Reunião",
    text: "Vou entender suas dores, contexto e objetivos. Sem pressa, com escuta de verdade.",
  },
  {
    n: "02",
    title: "Desenvolvimento",
    text: "Estudo, pesquisa e criação do serviço ou material contratado, sob medida para o seu negócio.",
  },
  {
    n: "03",
    title: "Resultados",
    text: "Em até 30 dias, você tem em mãos o material pronto para gerar conversão.",
  },
];

const Process = () => {
  return (
    <section className="bg-gradient-soft py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="O processo"
          title="O que acontece depois do contato"
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <span className="font-serif-display text-5xl text-primary-glow/40">{s.n}</span>
                <h3 className="mt-4 text-xl text-foreground md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
