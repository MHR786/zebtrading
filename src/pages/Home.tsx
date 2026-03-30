import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Products } from '@/components/Products';
import { Brands } from '@/components/Brands';
import { Services } from '@/components/Services';
import { WhyZeb } from '@/components/WhyZeb';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

function HomeCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-black blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            READY TO FIND YOUR PART?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Browse our catalogue of over 10,000 genuine and aftermarket auto parts. Fast shipping across the UAE and the Middle East.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                bg-white text-primary hover:bg-gray-100 transition-all duration-300"
            >
              Browse Catalogue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                bg-transparent text-white border-2 border-white/50
                hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Brands />
        <WhyZeb />
        <Services />
        <Testimonials />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
