const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-background/30 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" aria-label="Fascinium" className="flex items-center gap-3">
          <img
            src="/logo-branca-fascinium.png"
            alt="Fascinium"
            className="h-10 w-auto"
          />
        </a>
        {/* Navegação: atalhos de texto */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#quem-somos"
            className="text-gradient-white font-bold tracking-wide hover:opacity-90 transition-smooth"
          >
            Quem somos
          </a>
          <a
            href="#services"
            className="text-gradient-white font-bold tracking-wide hover:opacity-90 transition-smooth"  
          >
            Soluções
          </a>
          <a
            href="#contact"
            className="text-gradient-white font-bold tracking-wide hover:opacity-90 transition-smooth"
          >
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;