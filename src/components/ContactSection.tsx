import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AuroraBackground } from "@/components/ui/aurora-background";

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  eventType: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  date: string;
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
    whatsapp: "",
    date: "",
    message: "",
  });
  const { toast } = useToast();

  // WhatsApp da Fascinium (conforme FloatingWhatsApp)
  const fasciniumWhatsApp = "5538991517757";
  const whatsappMessage = `Olá, Fascinium! Quero solicitar uma proposta personalizada.\n\n` +
    `• Tipo de evento: ${formData.eventType || "(não informado)"}\n` +
    `• Nome: ${formData.name || "(não informado)"}\n` +
    `• Empresa: ${formData.company || "(não informado)"}\n` +
    `• E-mail: ${formData.email || "(não informado)"}\n` +
    `• Telefone: ${formData.phone || "(não informado)"}\n` +
    `• WhatsApp: ${formData.whatsapp || "(não informado)"}\n` +
    `• Data: ${formData.date || "(não informado)"}\n` +
    `• Mensagem: ${formData.message || "(não informado)"}`;
  const whatsappHref = `https://api.whatsapp.com/send?phone=${fasciniumWhatsApp}&text=${encodeURIComponent(whatsappMessage)}`;

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
      whatsapp: "",
      date: "",
      message: "",
    });
    setStep(1);
  };

  return (
    <section id="contact" className="relative">
      <AuroraBackground className="min-h-screen py-20 px-4 flex items-center" showRadialGradient={true}>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary drop-shadow-lg">
              O Grand Finale
            </h2>
            <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-medium drop-shadow-md">
              Vamos criar juntos uma experiência mágica e inesquecível
            </p>
          </div>

          <div className="bg-background/40 backdrop-blur-md rounded-2xl shadow-elegant p-8 md:p-12 animate-scale-in border border-primary/20">
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              {/* Tipo de evento */}
              <div>
                <Label className="mb-2 block">Tipo de evento</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {eventTypes.map((et) => (
                    <button
                      type="button"
                      key={et.value}
                      onClick={() => setFormData({ ...formData, eventType: et.value })}
                      className={`px-3 py-2 rounded-md border transition-smooth ${
                        formData.eventType === et.value ? "bg-gradient-gold text-white border-primary" : "bg-card border-border"
                      }`}
                    >
                      {et.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dados básicos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input id="whatsapp" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="date">Data</Label>
                  <Input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              {/* CTA */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-gold text-white border border-primary hover:shadow-glow px-5 py-3 rounded-md transition-smooth font-semibold"
                  aria-label="Receber orçamento via WhatsApp"
                >
                  Receber orçamento via WhatsApp
                </a>
              </div>

              
            </form>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default ContactSection;
