import AutoCarousel from "@/components/ui/AutoCarousel";

// Cards de diferenciais removidos conforme solicitação

const testimonials = [
  {
    quote: "A Fascinium transformou nosso evento corporativo em uma experiência verdadeiramente mágica. A atenção aos detalhes e a qualidade da performance superaram todas as nossas expectativas.",
    author: "Ana Carolina Silva",
    role: "Diretora de Marketing, TechCorp",
  },
  {
    quote: "Contratamos a Fascinium para minha festa de aniversário e foi simplesmente espetacular. Cada momento foi pensado com carinho e executado com perfeição absoluta.",
    author: "Ricardo Mendes",
    role: "Empresário",
  },
];

// Removida galeria avulsa; imagens agora estão dentro de cada sub-seção

const DifferentialsSection = () => {
  return (
    <section id="differentials" className="pt-8 md:pt-12 pb-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-theatrical opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
            Casos de Sucesso
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Clientes satisfeitos em eventos corporativos, feiras e lançamentos — veja o que tornamos possível
          </p>
        </div>

        {/* Auto-scrolling Carousel of Success Cases */}
        {(() => {
          const carouselImages = [
            { src: "/Casos/IMG_1595.jpg", alt: "Casos de Sucesso 1595" },
            { src: "/Casos/IMG_5317.jpg", alt: "Casos de Sucesso 5317" },
            { src: "/Casos/IMG_5659.jpg", alt: "Casos de Sucesso 5659" },
            { src: "/Casos/IMG_7267.jpg", alt: "Casos de Sucesso 7267" },
            { src: "/Casos/IMG_8295.jpg", alt: "Casos de Sucesso 8295" },
            { src: "/Casos/casos.JPG", alt: "Casos de Sucesso 1" },
            { src: "/Casos/casos2.JPG", alt: "Casos de Sucesso 2" },
            { src: "/Casos/casos3.JPG", alt: "Casos de Sucesso 3" },
            { src: "/Casos/casos4.JPG", alt: "Casos de Sucesso 4" },
            { src: "/Casos/casos5.jpg", alt: "Casos de Sucesso 5" },
            { src: "/Casos/casos6.jpg", alt: "Casos de Sucesso 6" },
            { src: "/Casos/recepcionista.jpg", alt: "Casos de Sucesso recepcionista" },
            { src: "/Casos/interativos.jpg", alt: "Casos de Sucesso interativos" },
            { src: "/Casos/mascote.jpg", alt: "Casos de Sucesso mascote" },
          ];
          return (
            carouselImages.length > 0 && (
              <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.20s" }}>
                <AutoCarousel
                  images={carouselImages}
                  speed={0.6}
                  className="py-2 md:py-4"
                  imageClassName="h-32 md:h-36 lg:h-44 w-auto"
                />
              </div>
            )
          );
        })()}

        {/* Fotos por sub-seção (dentro de cada card) */}

        {/* Grid de diferenciais removido conforme solicitado */}

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Palavras de Quem Viveu a Magia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="gradient-card-brand p-8 rounded-lg shadow-elegant border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.2}s` }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
