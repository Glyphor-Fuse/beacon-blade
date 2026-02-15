import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = {
  starters: [
    { name: "Wagyu Carpaccio", price: "42", desc: "Shaved black truffles, 36-month reggiano, olive soil" },
    { name: "Bone Marrow Crème", price: "36", desc: "Smoked sea salt, brioche soldiers, herb gelée" },
    { name: "Iced Shellfish Tower", price: "145", desc: "Oysters, king crab, lobster, scallop crudo" },
  ],
  steaks: [
    { name: "A5 Miyazaki Strip", price: "185", desc: "Served with fresh wasabi and volcanic salt" },
    { name: "32oz Porterhouse", price: "165", desc: "45-day dry-aged heritage beef, carved table-side" },
    { name: "Center-Cut Fillet", price: "78", desc: "Aged 28 days, finished over white oak coals" },
  ],
  sides: [
    { name: "Truffle Pomme Purée", price: "24", desc: "Robuchon style with seasonal black truffles" },
    { name: "Charred Broccolini", price: "18", desc: "Garlic chips, chili oil, lemon essence" },
    { name: "Lobster Mac", price: "34", desc: "Five cheese blend, cold water lobster tail" },
  ],
};

export function InteractiveMenu() {
  return (
    <section id="menu" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">The Epicurean Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display text-foreground font-bold italic">Curated Selection</h3>
        </div>

        <Tabs defaultValue="steaks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/20 border border-primary/10 h-16 mb-16">
            <TabsTrigger value="starters" className="uppercase tracking-widest text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Beginnings</TabsTrigger>
            <TabsTrigger value="steaks" className="uppercase tracking-widest text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">The Cuts</TabsTrigger>
            <TabsTrigger value="sides" className="uppercase tracking-widest text-[10px] font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sides</TabsTrigger>
          </TabsList>

          {Object.entries(menuItems).map(([key, items]) => (
            <TabsContent key={key} value={key} className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between items-start gap-2 group cursor-default">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-2xl font-display font-semibold group-hover:text-primary transition-colors">{item.name}</h4>
                      <div className="flex-1 border-b border-dashed border-primary/20 hidden md:block" />
                      <span className="text-primary font-bold text-xl">${item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-light italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default InteractiveMenu;
