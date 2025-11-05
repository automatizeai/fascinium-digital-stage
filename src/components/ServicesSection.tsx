import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Users, Bot, PartyPopper } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: typeof Sparkles;
  description: string;
  images: string[];
}

const services: Service[] = [
  {
    id: "mascotes",
    title: "Mascotes Corporativos",
    icon: Sparkles,
    description:
      "Personagens icônicos para ativações de marca, convenções e lançamentos. Ideal para feiras e eventos de grande circulação.",
    images: [
      "/mascote.jpg",
    ],
  },
  {
    id: "recepcionistas",
    title: "Recepcionistas Temáticos",
    icon: Users,
    description:
      "Recepção elegante e interativa para convenções, premiações e eventos corporativos. Fortalece percepção de marca com atendimento personalizado.",
    images: [
      "/recepcionista.jpg",
    ],
  },
  {
    id: "interativos",
    title: "Personagens Interativos",
    icon: Bot,
    description:
      "Dinâmica com o público para estandes, endomarketing e ativações tecnológicas. Ideal para engajamento em feiras e lançamentos.",
    images: [
      "/interativos.jpg",
    ],
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-spotlight opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
            Pacotes e Soluções Rápidas
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o tipo de personagem e receba uma proposta sob medida para seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedService(service)}
              >
            <div className="relative overflow-hidden rounded-xl gradient-card-brand shadow-elegant transition-smooth hover:shadow-glow hover:scale-[1.02]">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-3">
                        <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl text-primary">
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">{selectedService.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {selectedService.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${selectedService.title} ${idx + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
