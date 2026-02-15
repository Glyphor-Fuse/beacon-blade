export function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
          <div>
            <span className="text-3xl font-display font-bold tracking-tighter text-primary">
              BEACON <span className="text-foreground/40 font-light">&</span> BLADE
            </span>
            <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase mt-4">
              Curating Excellence Since 2024
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Discovery</h5>
              <ul className="space-y-2">
                <li><a href="#cuts" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">The Selection</a></li>
                <li><a href="#menu" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">The Menu</a></li>
                <li><a href="#gallery" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">Atmosphere</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Society</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">Instagram</a></li>
                <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Connect</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">Careers</a></li>
                <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[8px] uppercase tracking-[0.6em] text-muted-foreground">© 2024 BEACON & BLADE CULINARY GROUP</p>
          <p className="text-[8px] uppercase tracking-[0.6em] text-muted-foreground italic">Uncompromising Quality</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
