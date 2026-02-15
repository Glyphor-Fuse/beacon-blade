import { motion } from "framer-motion";

const cuts = [
  {
    title: "A5 Olive Wagyu",
    region: "Kagawa Prefecture",
    notes: "Remarkably rich and buttery, fed on toasted olives for a unique profile.",
    image: "/images/cut-wagyu.png",
  },
  {
    title: "45-Day Tomahawk",
    region: "Heritage Creekstone",
    notes: "Himalayan salt-aged for intense beefiness and a nut-like finish.",
    image: "/images/cut-tomahawk.png",
  },
  {
    title: "The Blade Fillet",
    region: "Dakota Plains",
    notes: "The most tender cut in existence, hand-carved and flame-kissed.",
    image: "/images/cut-fillet.png",
  }
];

export function CutsGallery() {
  return (
    <section id="cuts" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">Signature Selection</h2>
          <h3 className="text-4xl md:text-6xl font-display text-foreground font-bold">Cuts of Excellence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cuts.map((cut, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-primary/10">
                <img 
                  src={cut.image} 
                  alt={cut.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Silver Accent Frame */}
                <div className="absolute inset-4 border border-primary/20 pointer-events-none group-hover:border-primary/50 transition-colors" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2 block">{cut.region}</span>
                  <h4 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{cut.title}</h4>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {cut.notes}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CutsGallery;
