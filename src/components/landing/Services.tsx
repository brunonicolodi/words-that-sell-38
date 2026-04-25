import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import { FileText, MessageSquareText, Megaphone } from "lucide-react";

const services = [
  {
    icon: MessageSquareText,
    title: "Tom de Voz da Marca",
    text: "Saiba COMO e O QUE falar — e, principalmente, POR QUE. Estudo aprofundado mais material para você aplicar.",
    tag: "Estudo + Aplicação",
  },
  {
    icon: FileText,
    title: "Roteiros, Landing Pages & Copy",
    text: "Eu escrevo para você. Páginas, scripts e materiais de venda prontos para serem usados.",
    tag: "Material final",
  },
  {
    icon: Megaphone,
    title: "Editoria para Redes Sociais",
    text: "O que postar no seu Instagram? Calendário, pilares e direção criativa que conversam com vendas.",
    tag: "Estudo + Aplicação",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-soft py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="O que eu vendo"
          title={
            <>
              Materiais práticos.{" "}
              <span className="text-muted-foreground">Pesquisa, estudo e entrega.</span>
            </>
          }
          description="Não se trata apenas de escrever textos bonitos, mas de criar mensagens que geram dor, desejo ou medo — impulsionando vendas e aumentando conversão."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-ink text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-primary-glow">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default Services;
