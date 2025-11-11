import { Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="quem-somos" className="relative py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gradient-gold mb-6 sm:mb-12">
              Ladies & Gentleman: Welcome to the Fascinium!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              A Fascinium nasce da paixão pela arte e pelo desejo de transformar eventos em experiências memoráveis. Unimos criatividade, performance profissional e atendimento personalizado para encantar, emocionar e conectar pessoas.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Nossa equipe conta com ateliê próprio, desenvolvimento de figurinos exclusivos e atuação nacional para realizar eventos personalizados, de alto padrão técnico e artístico.
            </p>
          </div>

          {/* Imagem com efeito de raios dourados e moldura inclinada */}
          <div className="relative">
            {/* raios dourados estilo holofote */}
            <div
              className="absolute inset-[-40px] -z-10 opacity-60
              [background-image:radial-gradient(circle_at_60%_50%,hsl(45_100%_65%/.18),transparent_60%),repeating-conic-gradient(at_60%_50%,hsl(45_100%_65%/.12)_0deg_12deg,transparent_12deg_24deg)]
              [mask-image:radial-gradient(circle_at_center,black_10%,transparent_70%)]
              filter blur-[1px]"
            />

            {/* Moldura tipo polaroid com leve inclinação */}
            <div className="bg-white rounded-md p-2 sm:p-3 shadow-elegant transform rotate-6">
              <img
                src="/quemsomos.jpg"
                alt="Apresentação Fascinium"
                className="rounded-sm w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* detalhes de estrelas decorativas */}
            <Star className="absolute -top-6 -left-6 h-8 w-8 text-primary opacity-80" />
            <Star className="absolute -bottom-8 -right-8 h-10 w-10 text-primary opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;