import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const STATS = [
  { label: 'Parts in Stock', value: 10000, suffix: '+' },
  { label: 'Global Brands', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Support Available', value: 24, suffix: '/7' },
];

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="stats" className="py-16 bg-secondary border-y border-border relative overflow-hidden">
      {/* Decorative side lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x border-border/50">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-2 flex items-center justify-center">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                <span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
