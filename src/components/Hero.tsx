import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Opulent Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block">
            The Pinnacle of Bostonian Luxury
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold text-foreground mb-10 leading-[0.85]">
            Steel <span className="italic text-primary">&</span> <br />Shadow
          </h1>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-16 font-light tracking-wide leading-relaxed">
            An uncompromising celebration of fire, craftsmanship, and the world's finest wagyu. 
            Welcome to the intersection of heat and heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-9 text-xs font-bold tracking-[0.4em] uppercase min-w-[280px]">
              Reserve Your Table
            </Button>
            <Button size="lg" variant="ghost" className="text-foreground hover:text-primary hover:bg-background/5 px-12 py-9 text-xs font-bold tracking-[0.4em] uppercase border border-border/20">
              Explore Menu
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}

export default Hero;
