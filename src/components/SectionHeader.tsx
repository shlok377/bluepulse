interface SectionHeaderProps {
  title: string;
  subtitle: string;
  altitude?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, altitude, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      {altitude && (
        <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-data-accent">
          Altitude: {altitude}
        </div>
      )}
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;