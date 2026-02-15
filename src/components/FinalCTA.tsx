import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-48 bg-background relative overflow-hidden text-center">
      {/* Decorative Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-bold text-foreground mb-10 leading-tight">
            The Table <br /> Is <span className="italic text-primary">Set.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-16 font-light tracking-wide">
            Limited nightly seatings. Experience the new standard of Bostonian luxury.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-16 py-10 text-sm font-bold tracking-[0.4em] uppercase shadow-[0_0_50px_rgba(192,192,200,0.15)]">
            Book Reservation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
