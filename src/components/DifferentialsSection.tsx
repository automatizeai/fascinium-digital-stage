import { Palette, Users, Award } from "lucide-react";

const differentials = [
  {
    icon: Palette,
    title: "Criação Exclusiva",
    description: "Cada projeto é único. Desenvolvemos figurinos, cenografias e coreografias sob medida para seu evento.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-seamstress-threading-a-needle-43538-large.mp4",
  },
  {
    icon: Users,
    title: "Equipe Profissional",
    description: "Artistas qualificados, treinados continuamente para entregar performances impecáveis e memoráveis.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-group-of-dancers-rehearsing-a-routine-40875-large.mp4",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Excelência em cada detalhe, do primeiro contato até a execução. Sofisticação que supera expectativas.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-elegant-woman-in-a-hat-and-white-dress-43529-large.mp4",
  },
];

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

const DifferentialsSection = () => {
  return (
    <section id="differentials" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-theatrical opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold">
            Os Bastidores
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            O que torna cada experiência Fascinium verdadeiramente especial
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg bg-card shadow-elegant transition-smooth hover:shadow-glow">
                  {/* Video Background */}
                  <div className="aspect-video relative overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center transition-bounce group-hover:rotate-12">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-gold">
            Palavras de Quem Viveu a Magia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-elegant border border-border/50 animate-fade-in-up"
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
