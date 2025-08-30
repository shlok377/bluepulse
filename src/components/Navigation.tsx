import { useState, useEffect } from 'react';
import { Wind, Cloud, Waves, Anchor } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    { id: 'jetstream', label: 'Jet Stream', altitude: '40,000 ft', icon: Wind },
    { id: 'atmosphere', label: 'Atmosphere', altitude: '25,000 ft', icon: Cloud },
    { id: 'coastal', label: 'Coastal', altitude: 'Sea Level', icon: Waves },
    { id: 'ocean', label: 'Deep Ocean', altitude: '2,000 m below', icon: Anchor },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(index);
        }
      });
    };

    handleScroll(); // Call once on mount to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-2.5 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block group">
      {/* Narrow icon bar */}
      <div className="glass-card w-12 py-4 space-y-4 group-hover:opacity-0 transition-opacity duration-300">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-full flex justify-center p-2 rounded-lg transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-data-primary/20 text-data-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
              }`}
            >
              <IconComponent size={16} />
            </button>
          );
        })}
      </div>

      {/* Detailed sidebar that slides in from right */}
      <div className="glass-card p-4 space-y-4 absolute right-0 top-0 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 group ${
                activeSection === index 
                  ? 'bg-data-primary/20 text-data-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <IconComponent size={16} className={`transition-all duration-300 ${
                  activeSection === index ? 'text-data-primary' : 'text-muted-foreground'
                }`} />
                <div>
                  <div className="font-medium text-sm">{section.label}</div>
                  <div className="text-xs opacity-70">{section.altitude}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;