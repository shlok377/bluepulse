import SectionHeader from '../SectionHeader';
import DataPanel from '../DataPanel';
import ParticleField from '../ParticleField';
import atmosphereBg from '@/assets/atmosphere-bg.jpg';

const AtmosphereSection = () => {
  const atmosphereData = [
    { label: 'PM2.5', value: '12.4', unit: 'μg/m³', trend: 'down' as const },
    { label: 'Ozone', value: '68.7', unit: 'ppb', trend: 'stable' as const },
    { label: 'Pressure', value: '1013.2', unit: 'hPa', trend: 'up' as const },
    { label: 'Visibility', value: '15.2', unit: 'km', trend: 'up' as const },
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${atmosphereBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <ParticleField density={25} type="air" />
      
      <div className="container mx-auto px-24 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              <DataPanel 
                title="Atmospheric Exchange"
                metrics={atmosphereData}
                className="animate-fade-in"
              />
              
              <div className="glass-card p-6 space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Air Quality Index</h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-data-accent">Good</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-3 h-6 rounded ${i < 2 ? 'bg-data-accent' : 'bg-muted'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Atmospheric conditions are favorable with low particulate matter 
                  and stable pressure systems.
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeader 
              title="Atmospheric Exchange"
              subtitle="The dynamic layer where air quality, pressure systems, and pollutants interact, directly impacting weather and human health."
              altitude="15,000-25,000 ft"
              className="text-left lg:text-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;