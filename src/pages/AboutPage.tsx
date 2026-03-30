import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Target, Eye, Heart, Award, Globe2, Users, TrendingUp, ArrowRight, CheckCircle2, BarChart3
} from 'lucide-react';

const TIMELINE = [
  { year: '2009', title: 'Founded in Dubai', desc: 'ZEB Trading was established in Dubai\'s Al Quoz Industrial Area by Ziad El-Bassam with a vision to bring reliable auto parts to the UAE market.' },
  { year: '2012', title: 'GCC Expansion', desc: 'After rapid growth in the UAE, we expanded our delivery network across Saudi Arabia, Kuwait, Bahrain, and Qatar, serving 500+ workshops.' },
  { year: '2015', title: 'Warehouse Upgrade', desc: 'Moved to a 15,000 sq.ft. climate-controlled warehouse to accommodate our growing 5,000-part inventory and serve B2B clients more efficiently.' },
  { year: '2018', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification, formalizing our commitment to quality assurance in every part we source and supply.' },
  { year: '2021', title: 'Digital Transformation', desc: 'Launched real-time inventory management and a B2B digital ordering portal, reducing lead times by 40% for our wholesale partners.' },
  { year: '2024', title: '10,000+ SKUs Milestone', desc: 'Today, ZEB Trading stocks over 10,000 SKUs from 50+ global brands, serving 1,200+ business clients across the Middle East and beyond.' },
];

const VALUES = [
  { icon: Target, title: 'Precision', desc: 'The right part, at the right time. We cross-reference every order against vehicle specifications to eliminate errors before dispatch.' },
  { icon: Heart, title: 'Integrity', desc: 'We sell only genuine and certified parts. No counterfeits. No shortcuts. Our reputation is built on absolute honesty with every customer.' },
  { icon: Users, title: 'Partnership', desc: 'We treat every client as a long-term partner, not a transaction. Our dedicated account managers invest in understanding your business.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'Continuous improvement drives everything we do — from refining our sourcing process to enhancing the delivery experience.' },
];

const STATS = [
  { value: '15+', label: 'Years in Business' },
  { value: '10K+', label: 'Parts in Stock' },
  { value: '1,200+', label: 'Business Clients' },
  { value: '50+', label: 'Global Brands' },
  { value: '20+', label: 'Countries Served' },
  { value: '99%', label: 'Order Accuracy Rate' },
];

const CERTIFICATIONS = [
  'ISO 9001:2015 Quality Management',
  'Dubai Chamber of Commerce Member',
  'Authorised Bosch Service Distributor',
  'Brembo Certified Reseller',
  'UAE Ministry of Economy Registered',
  'ESMA Compliant Products',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">About Us</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                BUILT ON <span className="text-primary">TRUST,</span><br />DRIVEN BY <span className="text-accent">QUALITY</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For over 15 years, ZEB Trading has been the go-to supplier for auto parts in the UAE and across the Middle East. What began as a small operation in Dubai's industrial heartland has grown into a regional powerhouse serving workshops, dealerships, and fleet operators across 20+ countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Ziad El-Bassam, started ZEB Trading with a simple belief: the automotive aftermarket deserved a supplier that combined deep product knowledge with uncompromising quality standards. That belief remains the cornerstone of everything we do.
              </p>
            </div>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/quality-parts.png`}
                alt="ZEB Trading Warehouse"
                className="w-full rounded-2xl border border-border object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-2xl hidden md:block">
                <p className="text-4xl font-display font-bold">15+</p>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl font-display font-bold text-primary mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver the highest quality automotive parts with unmatched speed, accuracy, and transparency — empowering workshops, dealerships, and vehicle owners across the Middle East to keep every vehicle performing at its best.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted automotive parts supplier in the Middle East, recognised for our commitment to authenticity, innovation in supply chain management, and exceptional customer service that sets the industry standard.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              OUR <span className="text-primary">VALUES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2 uppercase">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              OUR <span className="text-primary">JOURNEY</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Fifteen years of growth, built one relationship at a time.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent hidden sm:block" />
            <div className="space-y-8">
              {TIMELINE.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 sm:gap-8 items-start relative"
                >
                  <div className="shrink-0 w-16 text-center relative z-10">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto">
                      <span className="text-xs font-display font-bold text-primary leading-tight text-center">{event.year}</span>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 flex-1 hover:border-primary/40 transition-colors">
                    <h4 className="font-display font-bold text-foreground mb-1 uppercase">{event.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              CERTIFICATIONS & <span className="text-primary">AFFILIATIONS</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our credentials prove our commitment to quality and compliance at every level.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4"
              >
                <Award className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">MEET THE TEAM BEHIND ZEB</h2>
          <p className="text-white/80 mb-8">Get to know the passionate professionals who make ZEB Trading the most trusted name in auto parts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/team" className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm bg-white text-primary hover:bg-gray-100 transition-all">
              Meet the Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
