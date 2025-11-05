import { BadgeCheck, Globe2, Star, Users } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
  <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Garantia e Confiança</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="gradient-card-brand rounded-lg p-6 shadow-elegant border border-border/50 text-center">
            <BadgeCheck className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="font-semibold">+14 anos de mercado</p>
          </div>
        <div className="gradient-card-brand rounded-lg p-6 shadow-elegant border border-border/50 text-center">
            <Users className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="font-semibold">+500 eventos atendidos</p>
          </div>
        <div className="gradient-card-brand rounded-lg p-6 shadow-elegant border border-border/50 text-center">
            <Globe2 className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="font-semibold">Cobertura nacional</p>
          </div>
        <div className="gradient-card-brand rounded-lg p-6 shadow-elegant border border-border/50 text-center">
            <Star className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="font-semibold">Avaliações 5★</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TrustSection;