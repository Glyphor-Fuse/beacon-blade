import { MapPin, Car, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function LocationInfo() {
  return (
    <section id="location" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-bold tracking-[0.4em] text-primary uppercase mb-6">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-display text-foreground font-bold mb-12">Visit the Blade</h3>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="bg-primary/10 p-4 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-widest text-primary">Location</h4>
                  <p className="text-muted-foreground font-light text-lg">112 Beacon Hill Ave, Boston, MA 02108</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="bg-primary/10 p-4 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <Car size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-widest text-primary">Executive Valet</h4>
                  <p className="text-muted-foreground font-light">
                    Complimentary white-glove valet service available at our private entrance. Secure, climate-controlled parking.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Phone size={18} />
                  <span className="text-sm font-bold tracking-widest underline decoration-primary/20 underline-offset-8">617-555-0199</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Mail size={18} />
                  <span className="text-sm font-bold tracking-widest underline decoration-primary/20 underline-offset-8">RESERVE@BEACONBLADE.COM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border border-primary/20 bg-background overflow-hidden p-2">
            <div className="w-full h-full bg-secondary/40 flex items-center justify-center relative grayscale opacity-50 contrast-150">
               {/* Map Pattern Placeholder */}
               <div className="text-center z-10 p-12 bg-background border border-primary/10 backdrop-blur-xl">
                  <h5 className="font-display text-2xl font-bold mb-2">Beacon Hill</h5>
                  <p className="text-[10px] tracking-[0.5em] text-primary uppercase">Heart of Boston</p>
               </div>
               <img src="/images/map-mockup.png" alt="Location Map" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;
