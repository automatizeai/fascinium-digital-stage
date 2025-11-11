import { useState, useEffect } from "react";
// Botão removido conforme solicitação
import { Typewriter } from "@/components/ui/typewriter";
import { renderCanvas } from "@/components/ui/canvas";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Initialize canvas
    renderCanvas();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Interactive Background */}
      <canvas
        className="pointer-events-none absolute inset-0 z-5"
        id="canvas"
      />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src="/banner3.png"
          alt="Fascinium banner"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-background/70 to-background z-10" />

      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1
            className="font-serif font-bold mb-8 text-white leading-tight md:leading-[1.1] animate-fade-in-up"
          style={{ animationDelay: "0.10s" }}
        >
          <span className="block uppercase text-3xl md:text-5xl lg:text-6xl">Transforme seu Evento Empresarial</span>
          <span className="block mt-2 md:mt-8 normal-case text-2xl md:text-4xl lg:text-4xl tracking-tight font-normal">Personagens exclusivos e experiências memoráveis!</span>
        </h1>
      </div>
      <p
        className="absolute inset-x-0 bottom-6 z-20 text-base md:text-lg lg:text-xl text-white italic font-normal tracking-wide animate-fade-in-up max-w-8xl mx-auto px-4 text-center"
        style={{ animationDelay: "0.4s" }}
      >
        Atraia, engaje e surpreenda seu público com arte viva, profissionalismo e personalização total.
      </p>

      {/* Floating CTA removido conforme solicitação */}
    </section>
  );
};

export default HeroSection;
