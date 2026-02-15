import { MapPin, Car, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-4">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-display text-foreground font-bold mb-10">In the Heart of <br />Beacon Hill</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-3 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-muted-foreground font-light">112 Beacon Street, Boston, MA 02108</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-3 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Hours</h4>
                  <p className="text-muted-foreground font-light">Tue — Thu: 5:00 PM - 10:00 PM</p>
                  <p className="text-muted-foreground font-light">Fri — Sat: 5:00 PM - 11:30 PM</p>
                  <p className="text-muted-foreground font-light">Sun — Mon: Closed</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-secondary p-3 text-primary">
                  <Car size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Valet Service</h4>
                  <p className="text-muted-foreground font-light">
                    Complimentary executive valet service available from 4:30 PM daily. 
                    Arrival at the Beacon Street entrance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold tracking-widest uppercase py-7 px-8">
                Get Directions
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary py-7 px-8 font-bold tracking-widest uppercase">
                <Phone className="mr-2" size={16} /> Contact Us
              </Button>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] border border-primary/20 grayscale contrast-125">
             <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                {/* Mock Map View */}
                <div className="text-center p-8 bg-background/80 backdrop-blur-md border border-primary/20">
                  <MapPin className="mx-auto text-primary mb-4" size={48} />
                  <p className="text-sm font-bold tracking-widest uppercase">Interactive Map Loading...</p>
                  <p className="text-xs text-muted-foreground mt-2">Beacon & Blade, 112 Beacon St</p>
                </div>
                <img src="/images/map-placeholder.png" alt="Map Location" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
