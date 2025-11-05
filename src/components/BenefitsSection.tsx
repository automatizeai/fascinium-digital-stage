import { Sparkles, Users, Shirt, Shield } from "lucide-react";

type Highlight = {
  title: string;
  content: React.ReactNode;
  icon: typeof Sparkles;
  image: string;
};

const highlights: Highlight[] = [
  {
    title: "Engajamento imediato",
    content: (
      <>
        <span className="font-bold">Aumento</span> instantâneo no <span className="font-bold">engajamento</span> e <span className="font-bold">atenção</span> do público
      </>
    ),
    icon: Sparkles,
    image: "/beneficio1.jpg",
  },
  {
    title: "Personalização",
    content: (
      <>
        <span className="font-bold">Experiência personalizada</span> para cada marca/campanha
      </>
    ),
    icon: Sparkles,
    image: "/beneficio2.jpg",
  },
  {
    title: "Valores corporativos",
    content: (
      <>
        Performances que <span className="font-bold">fortalecem valores</span> corporativos e cultura interna
      </>
    ),
    icon: Shield,
    image: "/beneficio3.jpg",
  },
  {
    title: "Figurinos exclusivos",
    content: (
      <>
        <span className="font-bold">Ateliê</span> próprio e <span className="font-bold">Figurinos</span> exclusivos
      </>
    ),
    icon: Shirt,
    image: "/beneficio4.jpg",
  },
  {
    title: "Equipe profissional",
    content: (
      <>
        Equipe <span className="font-bold">profissional</span>
      </>
    ),
    icon: Users,
    image: "/beneficio5.jpg",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-24 px-4 relative">
      <div className="absolute inset-0 gradient-theatrical opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold">Benefícios e diferenciais</h2>
          <p className="mt-3 text-muted-foreground">Cada apresentação é única, saiba quais são os nossos difenciais</p>
        </div>

        {/* Linha superior: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.slice(0, 3).map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="rounded-2xl overflow-hidden shadow-elegant border border-border/50 bg-background/60 group">
                {/* Top visual inspired by the example (uses brand gradient) */}
                <div className="aspect-[9/7] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Benefício: ${item.title}`}
                    className="w-full h-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
                </div>
                {/* Bottom content area */}
                <div className="bg-card/70 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="w-6 h-6 text-primary" aria-hidden="true" />}
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Linha inferior: 2 cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.slice(3).map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="rounded-2xl overflow-hidden shadow-elegant border border-border/50 bg-background/60 group">
                <div className="aspect-[16/9] relative">
                  <img
                    src={item.image}
                    alt={`Benefício: ${item.title}`}
                    className="w-full h-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
                </div>
                <div className="bg-card/70 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="w-6 h-6 text-primary" aria-hidden="true" />}
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;