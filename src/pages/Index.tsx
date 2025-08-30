import { useEffect } from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import Navigation from '@/components/Navigation';
import JetStreamSection from '@/components/sections/JetStreamSection';
import AtmosphereSection from '@/components/sections/AtmosphereSection';
import CoastalSection from '@/components/sections/CoastalSection';
import OceanSection from '@/components/sections/OceanSection';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'BluePulse - Atmospheric to Oceanic Journey';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience an immersive journey from jet streams to deep ocean currents with real-time environmental data visualization.');
    }
  }, []);

  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      
      {/* Hero Introduction */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-ocean-abyss via-ocean-deep to-ocean-mid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
        
        <div className="container mx-auto px-24 text-center z-10 relative">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 glass-card text-sm font-mono text-data-primary">
              Immersive Environmental Data Visualization
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent leading-tight">
              BluePulse
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
              Journey from the jet stream to the ocean depths and witness how 
              atmospheric and oceanic systems dance together in real-time
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-data-primary rounded-full animate-pulse" />
                <span>Real-time Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-data-accent rounded-full animate-pulse" />
                <span>Interactive Journey</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-data-warning rounded-full animate-pulse" />
                <span>Global Coverage</span>
              </div>
            </div>
            
            <div className="pt-8">
              <div className="text-sm text-muted-foreground mb-4">Scroll to begin your descent</div>
              <div className="animate-bounce">
                <svg className="w-6 h-6 mx-auto text-data-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Sections */}
      <JetStreamSection />
      <AtmosphereSection />
      <CoastalSection />
      <OceanSection />
      
      {/* Footer */}
      <footer className="py-12 bg-ocean-abyss text-center">
        <div className="container mx-auto px-24">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Data Sources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-data-primary">Atmospheric Data</div>
                <div>NOAA, European Centre for Medium-Range Weather Forecasts</div>
              </div>
              <div>
                <div className="font-semibold text-data-accent">Oceanic Data</div>
                <div>Global Ocean Observing System, Argo Float Network</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-data-primary font-semibold">BluePulse</p>
              <p className="text-xs text-muted-foreground mt-1">
                Connecting atmospheric and oceanic systems through immersive data visualization
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
