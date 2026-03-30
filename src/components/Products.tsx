import { motion } from 'framer-motion';
import { Settings, CircleDot, Activity, Zap, Droplets, GitBranch, Car, Wind, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

const CATEGORIES = [
  { name: 'Engine Parts', icon: Settings, desc: 'Pistons, valves, and timing belts for maximum performance.' },
  { name: 'Braking Systems', icon: CircleDot, desc: 'High-friction pads and rotors for ultimate stopping power.' },
  { name: 'Suspension', icon: Activity, desc: 'Shocks and struts to maintain perfect road control.' },
  { name: 'Electrical', icon: Zap, desc: 'Batteries, alternators, and advanced LED lighting.' },
  { name: 'Filters & Fluids', icon: Droplets, desc: 'Premium oils, air filters, and cooling solutions.' },
  { name: 'Transmission', icon: GitBranch, desc: 'Clutches and gear components for smooth shifting.' },
  { name: 'Body Parts', icon: Car, desc: 'Mirrors, bumpers, and panels to restore aesthetics.' },
  { name: 'Exhaust Systems', icon: Wind, desc: 'Mufflers and catalytic converters for optimal airflow.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export function Products() {
  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            COMPREHENSIVE <span className="text-primary">INVENTORY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From essential maintenance to high-performance upgrades, we stock everything your vehicle needs to stay on the road.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div key={idx} variants={item} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-colors duration-500 rounded-xl" />

                <div className="relative h-full bg-card border border-border group-hover:border-primary/50 rounded-xl p-6 flex flex-col items-start text-left transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.2)] overflow-hidden">

                  <span className="absolute -right-4 -top-8 text-[120px] font-display font-bold text-border/20 group-hover:text-primary/5 transition-colors duration-300 pointer-events-none select-none">
                    0{idx + 1}
                  </span>

                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border border-border group-hover:border-transparent text-accent">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {cat.desc}
                  </p>

                  <Link
                    href="/products"
                    className="mt-auto flex items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                  >
                    View Catalog
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
              bg-primary text-primary-foreground
              shadow-[0_0_20px_rgba(220,38,38,0.4)]
              hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
              hover:bg-red-500 transition-all duration-300"
          >
            Browse Full Catalogue
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
