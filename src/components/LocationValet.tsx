import { MapPin, Car, Phone, Mail } from "lucide-react";

export function LocationValet() {
  return (
    <section id="location" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">Find Us</h2>
            <h3 className="text-4xl md:text-5xl font-display text-foreground font-bold mb-12">Beacon Hill</h3>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="bg-primary/5 p-5 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-widest uppercase mb-2 text-primary">The Address</h4>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    112 Beacon Street, Suite 400<br />
                    Boston, MA 02108
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="bg-primary/5 p-5 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Car size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-widest uppercase mb-2 text-primary">Valet Service</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Complimentary white-glove valet service available nightly at the main entrance. Please allow 15 minutes for car retrieval.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-primary">Phone</h4>
                  <p className="text-lg font-light tracking-widest">617-555-0199</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-primary">Inquiries</h4>
                  <p className="text-lg font-light tracking-widest">INFO@BEACONBLADE.COM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] border border-primary/20 p-2">
            <div className="w-full h-full bg-background relative overflow-hidden grayscale contrast-125 opacity-70">
              <img 
                src="/images/map-mockup.png" 
                alt="Location Map" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-md border border-primary/30 px-8 py-4 text-center">
                  <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-primary">Beacon & Blade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationValet;
