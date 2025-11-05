import { Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <img
              src="/logo-branca-fascinium.png"
              alt="Fascinium"
              className="h-12 md:h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground">
              Transformando momentos em experiências mágicas desde 2011
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2">Localização</h4>
              <p className="text-muted-foreground">
                R. Boa Esperança, 275 - Vila Sumare, Montes Claros - MG
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contato@fascinium.com.br" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                contato@fascinium.com.br
              </a>
              <a 
                href="tel:+553899151-7757" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-4 h-4" />
                (38) 99151-7757
              </a>
            </div>

            {/* Social moved below Contact */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/fascinium/#" 
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-gold hover:shadow-glow transition-smooth group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://www.tiktok.com/@fascinium1" 
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-gold hover:shadow-glow transition-smooth group"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5 group-hover:text-primary-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
                <a 
                  href="http://www.youtube.com/@fasciniumentretenimento7444" 
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-gold hover:shadow-glow transition-smooth group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Dúvidas? */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Dúvidas?</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Quais serviços vocês oferecem?</p>
                <p>Personagens corporativos: mascotes, recepcionistas temáticos e interativos.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Qual prazo ideal para contratação?</p>
                <p>Recomendamos 2–4 semanas, mas atendemos urgências.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Como funciona a personalização?</p>
                <p>Briefing com sua equipe para alinhar marca, roteiro e figurino.</p>
              </div>
            </div>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fascinium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
