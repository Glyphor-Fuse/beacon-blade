import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CutsGallery } from "@/components/CutsGallery";
import { ChefBio } from "@/components/ChefBio";
import { InteractiveMenu } from "@/components/InteractiveMenu";
import { PhotoGallery } from "@/components/PhotoGallery";
import { LocationValet } from "@/components/LocationValet";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <Navbar />
          <Hero />
          <CutsGallery />
          <ChefBio />
          <InteractiveMenu />
          <PhotoGallery />
          <LocationValet />
          <FinalCTA />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
