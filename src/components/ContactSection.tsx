import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
    <section id="contact" className="relative">
      <AuroraBackground className="min-h-screen py-20 px-4 flex items-center" showRadialGradient={true}>
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold">
              O Grand Finale
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              Vamos criar juntos uma experiência mágica e inesquecível
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-elegant p-8 md:p-12 animate-scale-in border border-primary/10">
...
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default ContactSection;
