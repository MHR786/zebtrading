import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const REASONS = [
  '100% Genuine OEM & Aftermarket Parts',
  'Competitive B2B Wholesale Pricing',
  'Dedicated Account Managers',
  'Massive Readily Available Inventory',
  'ISO 9001:2015 Certified Quality Control',
  'Streamlined 30-Day Return Policy',
];

export function WhyZeb() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10" />
              <img
                src={`${import.meta.env.BASE_URL}images/quality-parts.png`}
                alt="High Quality Brake Components"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-card border border-border rounded-xl p-6 hidden md:flex flex-col justify-center shadow-2xl z-20">
              <span className="text-5xl font-display font-bold text-accent mb-1">#1</span>
              <span className="text-sm font-bold text-foreground uppercase tracking-widest leading-tight">Supplier in<br />the Region</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              ENGINEERED FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">EXCELLENCE</span>
            </h2>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              At ZEB Trading, we don't just sell parts — we provide solutions. Our deep industry knowledge and robust supply chain mean you get the right parts at the right price, every time.
            </p>

            <ul className="space-y-4 mb-10">
              {REASONS.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="group flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                  bg-primary text-primary-foreground
                  shadow-[0_0_15px_rgba(220,38,38,0.3)]
                  hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]
                  hover:bg-red-500 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                  bg-card text-foreground
                  border border-border
                  hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
