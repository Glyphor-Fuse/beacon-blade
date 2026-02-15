import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const galleryImages = [
  { src: "/images/gallery-1.png", title: "The Dining Room" },
  { src: "/images/gallery-2.png", title: "The Wine Vault" },
  { src: "/images/gallery-3.png", title: "Live Fire Grill" },
  { src: "/images/gallery-4.png", title: "Private Salon" },
];

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-32 bg-background border-t border-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">The Atmosphere</h2>
            <h3 className="text-4xl md:text-6xl font-display text-foreground font-bold">A Sanctuary <br />of Shadow</h3>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm font-light leading-relaxed">
            Every corner of Beacon & Blade is curated to enhance the sensory experience of luxury dining.
          </p>
        </div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent className="-ml-4">
            {galleryImages.map((img, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-2/3">
                <div className="relative aspect-[16/9] overflow-hidden group">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute bottom-10 left-10">
                    <span className="bg-background/40 backdrop-blur-md border border-border/20 text-foreground text-[10px] uppercase tracking-[0.4em] px-6 py-3 font-bold">
                      {img.title}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-16 w-16 border-primary/20 text-primary hover:border-primary transition-all bg-transparent" />
            <CarouselNext className="static translate-y-0 h-16 w-16 border-primary/20 text-primary hover:border-primary transition-all bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default PhotoGallery;
