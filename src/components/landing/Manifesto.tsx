import CTAButton from "./CTAButton";

const Manifesto = () => {
  return (
    <section className="bg-brand-soft/40 py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Word-style page */}
        <article className="relative mx-auto max-w-3xl">
          {/* Page */}
          <div className="relative rounded-sm border-2 border-foreground bg-white p-10 shadow-card md:p-16">
            {/* Toolbar mock */}
            <div className="absolute -top-8 left-0 right-0 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] border border-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] border border-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] border border-foreground/20" />
                <span className="ml-3">copywriting.docx</span>
              </span>
              <span className="hidden md:inline">Página 1 de 1 · 312 palavras</span>
            </div>

            {/* Document header */}
            <header className="mb-8 border-b border-dashed border-foreground/30 pb-6">
              <h2 className="text-3xl leading-tight text-foreground md:text-4xl">
                Por que o seu Instagram não está vendendo?
              </h2>
            </header>

            {/* Document body */}
            <div className="space-y-6 font-serif text-[17px] leading-[1.85] text-foreground md:text-[18px]" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
              <p>
                Todo mundo diz pra você criar um Instagram pro seu negócio. Então
                você cria. <span className="font-script text-2xl text-brand-deep">E o que consegue com isso?</span>
              </p>

              <p>
                Mais trabalho e frustração, porque não sente que ele realmente
                está ajudando você no que interessa:{" "}
                <mark className="bg-brand/70 px-1 font-bold not-italic text-foreground">
                  VENDER MAIS
                </mark>
                .
              </p>

              <p>
                E sim, é possível. Mesmo que você tenha um pequeno, médio ou
                grande negócio aqui, em{" "}
                <span className="underline decoration-brand decoration-[3px] underline-offset-4">
                  Erechim
                </span>
                .
              </p>

              <p>
                Você já parou para pensar por que algumas marcas conseguem vender
                tão bem nas redes sociais, enquanto outras lutam para engajar e
                converter?
              </p>

              <p className="border-l-2 border-foreground pl-5">
                A diferença está no <strong>poder das palavras</strong>. E é
                exatamente isso que eu tenho feito nos últimos anos da minha
                carreira: transformar palavras em oportunidades de venda.
              </p>

              <p>
                Se você é um pequeno ou microempresário, uma marca que vende
                online, ou até mesmo um profissional de marketing que quer dominar
                a arte do copywriting, eu tenho a solução para você.
              </p>

              <p>
                Não se trata apenas de escrever textos bonitos, mas de criar
                mensagens que geram{" "}
                <span className="font-bold">dor, desejo ou medo</span>,
                impulsionando suas vendas e aumentando sua conversão.
              </p>

              {/* Hand-written signature */}
              <div className="pt-6">
                <p className="font-script text-3xl text-brand-deep">— vamos conversar?</p>
              </div>
            </div>

            {/* Margin note (desktop) */}
            <div className="pointer-events-none absolute -right-6 top-32 hidden rotate-6 md:block">
              <div className="rounded-sm border-2 border-foreground bg-brand px-3 py-1.5 text-xs font-bold uppercase tracking-widest shadow-card">
                Leia até o fim ↓
              </div>
            </div>
          </div>

          {/* Paperclip / corner accent */}
          <div className="absolute -top-3 left-12 hidden h-6 w-16 rotate-[-8deg] rounded-sm border-2 border-foreground bg-brand shadow-card md:block" />

          <div className="mt-12 flex justify-center">
            <CTAButton />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Manifesto;
