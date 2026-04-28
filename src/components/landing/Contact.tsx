import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "b1a3650e-fc94-44d1-bd04-3bd18d47122d");
    formData.append("subject", "Novo contato - Palavras que Vendem");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: "Mensagem enviada",
          description: "Em breve entrarei em contato. Obrigado!",
        });
        form.reset();
      } else {
        toast({
          title: "Erro ao enviar",
          description: data.message || "Tente novamente em instantes.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Verifique sua conexão e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-foreground py-24 text-primary-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary blur-3xl" />
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/60 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70">
              Vamos conversar
            </span>
            <h2 className="mt-6 text-balance font-serif-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Não deixe suas vendas ao acaso.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Transforme suas palavras em resultados concretos. Preencha o
              formulário e vamos começar a escalar suas vendas.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-primary-foreground/10 bg-background/95 p-8 text-foreground shadow-elevated md:p-10"
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" required placeholder="Seu nome completo" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required placeholder="voce@email.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" name="whatsapp" type="tel" required placeholder="(00) 00000-0000" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="business">Seu negócio</Label>
                <Input id="business" name="business" placeholder="O que você vende?" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message">Como posso te ajudar?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Conte um pouco sobre o seu desafio..."
                  className="mt-2 resize-none"
                />
              </div>
              <Button type="submit" variant="cta" size="xl" className="w-full" disabled={loading}>
                {loading ? "Enviando..." : "Agendar conversa"}
                <Send />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
