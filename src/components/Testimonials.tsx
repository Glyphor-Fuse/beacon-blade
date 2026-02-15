import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const testimonials = [
  { quote: "A masterclass in restraint and luxury. The Olive Wagyu is transformative.", author: "ALEXIS VANCE", role: "CULINARY CRITIC" },
  { quote: "The most opulent dining experience in the city. The service is balletic.", author: "MARCUS THORNE", role: "RESTAURATEUR" },
  { quote: "Finally, a sanctuary that respects the ingredient and the patron equally.", author: "ELENA ROSSI", role: "LIFE & STYLE" },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative text-center"
            >
              <Star className="mx-auto text-primary/20 mb-8" size={32} />
              <p className="text-xl md:text-2xl font-display italic text-foreground mb-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h5 className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">{t.author}</h5>
                <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
