import { MessageSquareText } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=5538991517757"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex items-center justify-center bg-gradient-gold text-white shadow-glow hover:shadow-glow w-12 h-12 rounded-full transition-smooth"
      >
        <img
          src="/whatsapp.jpg"
          alt="WhatsApp"
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;