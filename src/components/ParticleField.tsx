import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface ParticleFieldProps {
  density?: number;
  type?: 'air' | 'water';
}

const ParticleField = ({ density = 20, type = 'air' }: ParticleFieldProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < density; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (type === 'water' ? 4 : 2) + 1,
        delay: Math.random() * 20,
      });
    }
    setParticles(newParticles);
  }, [density, type]);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            background: type === 'water' 
              ? 'hsl(var(--data-accent) / 0.4)' 
              : 'hsl(var(--data-primary) / 0.3)',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;