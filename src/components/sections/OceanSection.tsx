import SectionHeader from '../SectionHeader';
import DataPanel from '../DataPanel';
import ParticleField from '../ParticleField';
import deepOceanBg from '@/assets/deep-ocean-bg.jpg';

const OceanSection = () => {
  const oceanData = [
    { label: 'Current Velocity', value: '0.85', unit: 'm/s', trend: 'stable' as const },
    { label: 'Thermal Energy', value: '4.2', unit: 'PJ/day', trend: 'up' as const },
    { label: 'Temperature', value: '4.1', unit: '°C', trend: 'stable' as const },
    { label: 'Salinity', value: '34.8', unit: 'PSU', trend: 'stable' as const },
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${deepOceanBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <ParticleField density={40} type="water" />
      
      <div className="container mx-auto px-24 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              <DataPanel 
                title="Deep Ocean Currents"
                metrics={oceanData}
                className="animate-fade-in"
              />
              
              <div className="glass-card p-6 space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Thermohaline Circulation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Atlantic Meridional</span>
                    <span className="text-data-accent font-semibold">15.2 Sv</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pacific Deep Water</span>
                    <span className="text-data-primary font-semibold">8.7 Sv</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Deep ocean currents transport vast amounts of heat and nutrients, 
                  driving global climate regulation and marine ecosystem connectivity.
                </div>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="text-sm text-muted-foreground mb-2">Journey Complete</div>
                <div className="text-lg font-semibold text-data-accent">
                  From Jet Stream to Ocean Depths
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  40,000 ft → 2,000 m below sea level
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeader 
              title="Deep Ocean Currents"
              subtitle="The hidden engines of our planet's climate system, circulating heat, nutrients, and life across ocean basins in a continuous global dance."
              altitude="2,000 m below surface"
              className="text-left lg:text-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanSection;