import { useState, useEffect } from 'react';

interface DataMetric {
  label: string;
  value: string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

interface DataPanelProps {
  title: string;
  metrics: DataMetric[];
  className?: string;
}

const DataPanel = ({ title, metrics, className = '' }: DataPanelProps) => {
  const [animatedValues, setAnimatedValues] = useState<string[]>([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(metrics.map(metric => {
        const baseValue = parseFloat(metric.value);
        const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
        const newValue = baseValue + (baseValue * variation);
        return newValue.toFixed(2);
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [metrics]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-data-accent';
      case 'down': return 'text-data-warning';
      default: return 'text-data-primary';
    }
  };

  return (
    <div className={`data-panel ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={metric.label} className="space-y-2">
            <div className="text-sm text-muted-foreground">{metric.label}</div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-mono font-bold text-data-primary pulse-data">
                {animatedValues[index] || metric.value}
              </span>
              <span className="text-sm text-muted-foreground">{metric.unit}</span>
              <span className={`text-lg ${getTrendColor(metric.trend)}`}>
                {getTrendIcon(metric.trend)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPanel;