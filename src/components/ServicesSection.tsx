import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Building2, PartyPopper } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: typeof Sparkles;
  description: string;
  images: string[];
}

const services: Service[] = [
  {
    id: "corporativo",
    title: "Eventos Corporativos",
    icon: Building2,
    description: "Ativações de marca, convenções, lançamentos de produtos e eventos empresariais que deixam uma impressão duradoura.",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    ],
  },
  {
    id: "tematico",
    title: "Eventos Temáticos",
    icon: PartyPopper,
    description: "Festas personalizadas, celebrações exclusivas e experiências imersivas que transportam seus convidados para outros mundos.",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    ],
  },
  {
    id: "cultural",
    title: "Espetáculos Culturais",
    icon: Sparkles,
    description: "Performances artísticas, shows temáticos e produções culturais que encantam e emocionam o público.",
    images: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800",
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
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold">
            O Encantamento
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Criamos experiências únicas que transformam eventos em momentos inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedService(service)}
              >
                <div className="relative overflow-hidden rounded-lg bg-card shadow-elegant transition-smooth hover:shadow-glow hover:scale-105">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
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
                <DialogTitle className="font-serif text-3xl text-gradient-gold">
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
