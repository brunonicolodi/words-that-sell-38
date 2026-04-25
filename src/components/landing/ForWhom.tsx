import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";

const audience = [
  { title: "Pequenos, médios e grandes empresários", text: "Que querem usar melhor as redes sociais." },
  { title: "Marcas que vendem na internet", text: "E-commerce, infoprodutos e serviços online." },
  { title: "Profissionais de marketing", text: "Que desejam aplicar copywriting no trabalho." },
  { title: "Agências em crescimento", text: "Que buscam atualização e nivelamento da equipe." },
];

const ForWhom = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Para quem é"
          title={
            <>
              Se você se encaixa em algum desses perfis,{" "}
              <span className="text-muted-foreground">a gente conversa.</span>
            </>
          }
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {audience.map((a) => (
            <div key={a.title} className="bg-card p-10 transition-colors duration-300 hover:bg-accent/40">
              <h3 className="text-lg text-foreground md:text-xl">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
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

export default ForWhom;
