import SectionHeader from '../SectionHeader';
import DataPanel from '../DataPanel';
import ParticleField from '../ParticleField';
import jetStreamBg from '@/assets/jet-stream-bg.jpg';

const JetStreamSection = () => {
  const jetStreamData = [
    { label: 'Velocity', value: '145.8', unit: 'mph', trend: 'up' as const },
    { label: 'Altitude', value: '32,450', unit: 'ft', trend: 'stable' as const },
    { label: 'Mass Transport', value: '2.3M', unit: 'tons/day', trend: 'up' as const },
    { label: 'Coverage', value: '68.2', unit: '%', trend: 'stable' as const },
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${jetStreamBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <ParticleField density={15} type="air" />
      
      <div className="container mx-auto px-24 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="The Jet Stream"
              subtitle="High-altitude rivers of fast-moving air that circle the globe, driving weather patterns and connecting atmospheric systems."
              altitude="30,000-40,000 ft"
              className="text-left"
            />
          </div>
          
          <div className="grid gap-6">
            <DataPanel 
              title="Jet Stream Dynamics"
              metrics={jetStreamData}
              className="animate-fade-in"
            />
            
            <div className="glass-card p-6 space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Current Status</h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-data-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Monitoring atmospheric patterns...</span>
              </div>
              <div className="text-sm text-muted-foreground">
                The jet stream is currently experiencing moderate variability, with wind speeds 
                fluctuating between 120-180 mph across different latitudes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JetStreamSection;