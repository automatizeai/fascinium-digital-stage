import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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
      
      {/* Video Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-theater-stage-with-red-curtains-4148-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gradient-gold animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          FASCINIUM
        </h1>
        <div 
          className="text-xl md:text-2xl lg:text-3xl mb-6 text-foreground/90 font-light tracking-wide animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <span>Experiências Artísticas que Transformam</span>
            <Typewriter 
              text={["Momentos", "Eventos", "Celebrações", "Sonhos"]}
              speed={80}
              waitTime={2000}
              deleteSpeed={50}
              className="text-primary font-normal"
              cursorChar="|"
            />
          </div>
          <div className="text-center">
            <span>em Magia</span>
          </div>
        </div>
        <Button 
          onClick={scrollToServices}
          size="lg"
          className="group bg-gradient-gold hover:shadow-glow transition-smooth text-lg px-8 py-6 rounded-full animate-fade-in-up relative z-30 text-background font-semibold"
          style={{ animationDelay: "0.6s" }}
        >
          Descubra a Magia
          <ChevronDown className="ml-2 group-hover:translate-y-1 transition-smooth" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <ChevronDown className="text-primary w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
