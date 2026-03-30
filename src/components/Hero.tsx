import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  const scrollToStats = () => {
    const el = document.getElementById('stats');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Industrial Auto Parts Warehouse"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Premium Aftermarket Parts</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6 drop-shadow-2xl">
            DRIVE FURTHER WITH{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">QUALITY</span>{' '}
            AUTO PARTS
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed border-l-2 border-primary pl-4">
            ZEB Trading delivers exceptional OEM and aftermarket parts for all major vehicle brands. Reliability, performance, and power you can trust.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                bg-primary text-primary-foreground
                border border-primary/50
                shadow-[0_0_20px_rgba(220,38,38,0.4)]
                hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
                hover:bg-red-500 transition-all duration-300"
            >
              Explore Parts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                bg-transparent text-foreground
                border-2 border-border
                hover:border-foreground transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute inset-10 bg-accent/20 blur-[80px] rounded-full" />
            <img
              src={`${import.meta.env.BASE_URL}images/engine-part.png`}
              alt="High Performance Engine Part"
              className="relative z-10 w-full h-full object-contain animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToStats}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
