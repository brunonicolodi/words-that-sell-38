import SectionHeader from "./SectionHeader";

const Problem = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="O problema"
          title={
            <>
              Todo mundo te diz para criar um Instagram.{" "}
              <span className="text-muted-foreground">
                Mas e o que você consegue com isso?
              </span>
            </>
          }
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Mais trabalho",
              text: "Você posta, posta e posta. E o cansaço aumenta sem retorno proporcional.",
            },
            {
              title: "Frustração crescente",
              text: "Você não sente que ele realmente está te ajudando no que interessa.",
            },
            {
              title: "Vendas paradas",
              text: "Engajamento até existe — mas conversão, faturamento e crescimento, não.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-serif-display text-lg">
                ·
              </div>
              <h3 className="text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-l-2 border-primary/30 pl-8">
          <p className="font-serif-display text-2xl leading-relaxed text-foreground md:text-3xl">
            “A diferença entre as marcas que vendem e as que lutam para
            engajar está no <em className="text-primary">poder das palavras</em>.”
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
            E é exatamente isso que faço há quase uma década.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
