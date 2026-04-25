import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Services from "@/components/landing/Services";
import Mentorias from "@/components/landing/Mentorias";
import NotForYou from "@/components/landing/NotForYou";
import Examples from "@/components/landing/Examples";
import ForWhom from "@/components/landing/ForWhom";
import Process from "@/components/landing/Process";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Problem />
      <section id="servicos">
        <Services />
      </section>
      <section id="mentorias">
        <Mentorias />
      </section>
      <NotForYou />
      <Examples />
      <section id="para-quem">
        <ForWhom />
      </section>
      <section id="processo">
        <Process />
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
