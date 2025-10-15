import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-gradient-gold mb-4">
              FASCINIUM
            </h3>
            <p className="text-muted-foreground">
              Transformando momentos em experiências mágicas desde 2010
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contato@fascinium.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                contato@fascinium.com.br
              </a>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-gold hover:shadow-glow transition-smooth group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-gold hover:shadow-glow transition-smooth group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-gold hover:shadow-glow transition-smooth group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fascinium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
