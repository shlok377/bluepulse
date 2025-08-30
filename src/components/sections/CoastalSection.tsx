import SectionHeader from '../SectionHeader';
import DataPanel from '../DataPanel';
import ParticleField from '../ParticleField';
import coastalBg from '@/assets/coastal-bg.jpg';

const CoastalSection = () => {
  const coastalData = [
    { label: 'Sea Temperature', value: '22.8', unit: '°C', trend: 'up' as const },
    { label: 'Humidity', value: '78.5', unit: '%', trend: 'stable' as const },
    { label: 'Wind Speed', value: '18.3', unit: 'km/h', trend: 'down' as const },
    { label: 'Wave Height', value: '1.8', unit: 'm', trend: 'stable' as const },
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${coastalBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <ParticleField density={30} type="water" />
      
      <div className="container mx-auto px-24 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="Coastal Waters"
              subtitle="The critical boundary where ocean and atmosphere meet, creating complex interactions that drive regional climate and marine ecosystems."
              altitude="Sea Level"
              className="text-left"
            />
          </div>
          
          <div className="grid gap-6">
            <DataPanel 
              title="Coastal Dynamics"
              metrics={coastalData}
              className="animate-fade-in"
            />
            
            <div className="glass-card p-6 space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Ocean-Atmosphere Interface</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Heat Exchange</div>
                  <div className="text-data-accent font-semibold">Active</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Evaporation Rate</div>
                  <div className="text-data-primary font-semibold">High</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Coastal waters are actively exchanging heat and moisture with the atmosphere, 
                influencing local weather patterns and marine productivity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoastalSection;