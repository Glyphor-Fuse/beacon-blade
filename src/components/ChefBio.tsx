import { motion } from "framer-motion";

export function ChefBio() {
  return (
    <section id="chef" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 border border-primary/20 overflow-hidden">
              <img 
                src="/images/chef-julian.png" 
                alt="Chef Julian Vane" 
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full border border-primary/5 -z-0" />
          </motion.div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">The Architect</h2>
            <h3 className="text-4xl md:text-6xl font-display text-foreground font-bold mb-10 leading-tight">Chef <br />Julian Vane</h3>
            <div className="space-y-8 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                To Chef Julian Vane, the kitchen is an operating theater. His approach is one of monastic focus, where precision is the only currency that matters.
              </p>
              <p>
                From his early years in the Basque country to his celebrated tenure in Tokyo, Vane has obsessively studied the alchemy of fat, fire, and steel. At Beacon & Blade, he presents his definitive manifesto.
              </p>
              <blockquote className="border-l-2 border-primary pl-8 py-2 italic text-foreground text-xl">
                "We do not simply cook; we curate the moment where the raw becomes the divine."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefBio;
