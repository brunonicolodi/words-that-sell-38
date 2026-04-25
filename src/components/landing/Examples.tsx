import SectionHeader from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

const examples = [
  "Melhore seus posts nas redes sociais",
  "Melhore sua abordagem no WhatsApp para vender mais",
  "Tenha clareza sobre o que faz você vender — e o que não faz",
];

const Examples = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Na prática"
          title={
            <>
              Por que copywriting é importante?{" "}
              <span className="text-muted-foreground">
                Porque palavras persuadem, engajam e convertem.
              </span>
            </>
          }
          description="Um bom copywriting é a diferença entre o cliente que rola o feed e o que para, lê e compra. Veja o que muda quando trabalhamos juntos:"
        />

        <ul className="mx-auto mt-16 max-w-3xl space-y-4">
          {examples.map((e) => (
            <li
              key={e}
              className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated"
            >
              <span className="text-base text-foreground md:text-lg">{e}</span>
              <ArrowUpRight className="h-5 w-5 text-primary-glow" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Examples;
