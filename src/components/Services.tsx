import { motion } from 'framer-motion';
import { Truck, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const SERVICES = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Same-day dispatch and rapid delivery across the region to minimize your downtime.',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    desc: 'Our technical team provides accurate part-matching and installation advice.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Assured',
    desc: '100% authentic parts backed by comprehensive manufacturer warranties.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            BEYOND <span className="text-accent">THE PART</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver a complete service experience, ensuring you get exactly what you need, when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-background rounded-xl p-8 border border-border text-center hover:border-accent/50 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-card border border-border rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
              bg-accent text-background
              hover:bg-yellow-400 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
