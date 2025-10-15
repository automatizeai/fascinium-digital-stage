import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  eventType: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const eventTypes = [
  { value: "corporativo", label: "Evento Corporativo" },
  { value: "social", label: "Evento Social" },
  { value: "marketing", label: "Ativação de Marketing" },
  { value: "cultural", label: "Espetáculo Cultural" },
  { value: "outro", label: "Outro" },
];

const ContactSection = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    eventType: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleEventTypeSelect = (type: string) => {
    setFormData({ ...formData, eventType: type });
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    setStep(3);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with N8N webhook
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    setStep(4);
  };

  const resetForm = () => {
    setFormData({
      eventType: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    setStep(1);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 gradient-spotlight opacity-40" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold">
            O Grand Finale
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Vamos criar juntos uma experiência mágica e inesquecível
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 animate-scale-in">
          {/* Step 1: Event Type Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-primary" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  Para qual tipo de evento você busca nossa magia?
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eventTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant="outline"
                    size="lg"
                    onClick={() => handleEventTypeSelect(type.value)}
                    className="h-auto py-6 text-lg font-medium hover:bg-gradient-gold hover:text-primary-foreground hover:border-primary transition-smooth group"
                  >
                    {type.label}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="animate-fade-in space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-primary" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  Excelente! Conte-nos um pouco mais sobre você
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Voltar
                </Button>
                <Button type="submit" className="flex-1 bg-gradient-gold hover:shadow-glow">
                  Continuar
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </form>
          )}

          {/* Step 3: Additional Details */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="animate-fade-in space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-primary" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  Qual mensagem ou sensação deseja transmitir?
                </h3>
              </div>

              <div>
                <Label htmlFor="message">Conte-nos sobre sua visão (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="mt-2"
                  placeholder="Descreva o tema, estilo ou atmosfera que imagina para seu evento..."
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Voltar
                </Button>
                <Button type="submit" className="flex-1 bg-gradient-gold hover:shadow-glow">
                  Enviar Mensagem
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </form>
          )}

          {/* Step 4: Success Message */}
          {step === 4 && (
            <div className="text-center py-12 animate-scale-in">
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
                Obrigado!
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                Sua jornada conosco começou. Nossa equipe entrará em contato em breve para criar a magia perfeita para seu evento.
              </p>
              <Button onClick={resetForm} variant="outline" size="lg">
                Enviar Outra Mensagem
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
