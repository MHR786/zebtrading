import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Truck, Users, ShieldCheck, Clock, Phone, Package, BarChart3,
  RefreshCcw, ArrowRight, CheckCircle2, Headphones, Globe
} from 'lucide-react';

const MAIN_SERVICES = [
  {
    icon: Truck,
    title: 'Same-Day Delivery',
    tagline: 'Parts at your door, fast.',
    desc: 'We understand that downtime costs money. Our same-day dispatch service covers Dubai and surrounding emirates, with next-day delivery across the UAE and GCC. All orders placed before 2 PM are guaranteed same-day dispatch from our warehouse.',
    features: [
      'Orders before 2 PM ship same day',
      'Real-time tracking for every shipment',
      'GCC-wide delivery network',
      'White-glove delivery for bulk orders',
      'Emergency overnight international shipping',
    ],
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    tagline: 'The right part, every time.',
    desc: 'Our team of certified automotive technicians provides accurate OEM part matching, fitment checks, and installation guidance. Whether you\'re a workshop owner or a first-time buyer, we ensure you receive exactly the right component.',
    features: [
      'Certified automotive specialists on staff',
      'OEM number cross-referencing',
      'Vehicle-specific fitment verification',
      'Free technical support hotline',
      'Bulk sourcing for fleet operators',
    ],
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Quality Assurance',
    tagline: '100% authentic, fully guaranteed.',
    desc: 'Every part we sell undergoes rigorous quality checks. All genuine OEM parts come with full manufacturer warranty, and our certified aftermarket parts carry a minimum 12-month warranty. Your peace of mind is our priority.',
    features: [
      'Minimum 12-month warranty on all parts',
      'ISO-certified quality control process',
      '100% authentic OEM sourcing',
      'Counterfeit prevention guarantee',
      'Hassle-free warranty claims process',
    ],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: Package,
    title: 'B2B Wholesale Solutions',
    tagline: 'Scale your business with ZEB.',
    desc: 'We are a preferred supplier for auto workshops, fleet operators, and dealerships across the UAE. Our wholesale program offers preferential pricing, dedicated account managers, and flexible credit terms for approved business partners.',
    features: [
      'Tiered wholesale pricing structures',
      'Dedicated B2B account management',
      'Flexible 30/60/90-day payment terms',
      'Priority stock allocation',
      'Custom catalogue & API integration',
    ],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: RefreshCcw,
    title: 'Returns & Exchange',
    tagline: 'No-hassle return policy.',
    desc: 'Ordered the wrong part? No problem. Our straightforward 30-day return policy means you can exchange or return any part in its original condition, no questions asked. We process refunds within 3 business days.',
    features: [
      '30-day return window',
      'No restocking fees for wrong part orders',
      'Refunds processed within 3 business days',
      'Exchange with fitment guarantee',
      'Dedicated returns support team',
    ],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Globe,
    title: 'International Sourcing',
    tagline: 'If it exists, we can get it.',
    desc: 'Through our global supplier network spanning Japan, Germany, USA, and South Korea, we can source rare and discontinued parts that local markets cannot provide. Our international sourcing team handles customs, shipping, and import duties seamlessly.',
    features: [
      'Supplier network in 20+ countries',
      'Rare & discontinued part sourcing',
      'Full customs & import handling',
      'Competitive lead times',
      'Transparent cost breakdown',
    ],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
];

const PROCESS = [
  { step: '01', title: 'Submit Your Request', desc: 'Contact us with your part number, vehicle details, or description of what you need.' },
  { step: '02', title: 'Expert Matching', desc: 'Our specialists cross-reference your requirements and confirm exact fitment and availability.' },
  { step: '03', title: 'Quote & Confirm', desc: 'Receive a competitive quote. We offer transparent pricing with no hidden fees.' },
  { step: '04', title: 'Fast Delivery', desc: 'Your parts are dispatched same day and tracked from our warehouse to your door.' },
];

const FAQS = [
  { q: 'Do you supply to individual customers or only businesses?', a: 'We supply to everyone — from individual vehicle owners to large fleet operators. While our wholesale program is tailored to businesses, all customers enjoy competitive pricing and excellent service.' },
  { q: 'How do I know if a part is compatible with my vehicle?', a: 'Our parts advisors verify fitment using VIN numbers, OEM references, and vehicle-specific databases. Just provide your vehicle\'s year, make, model, and engine specification, and we\'ll confirm compatibility before dispatch.' },
  { q: 'Do you offer installation services?', a: 'We supply parts exclusively but maintain a trusted network of certified workshops across Dubai that we can refer you to for professional installation.' },
  { q: 'What is your delivery coverage area?', a: 'We offer same-day delivery across Dubai, Sharjah, and Ajman. Next-day delivery is available for Abu Dhabi, Ras Al Khaimah, and Fujairah. International shipping is available to all GCC countries and beyond.' },
  { q: 'Can I return a part if it is the wrong size?', a: 'Absolutely. Our 30-day return policy covers incorrect orders at no cost to you. We\'ll also help identify and dispatch the correct part immediately.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Truck className="absolute top-8 right-20 w-64 h-64 text-primary rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            More than just parts — a complete supply and support ecosystem designed to keep your vehicles on the road and your business running smoothly.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_SERVICES.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`bg-card border ${svc.border} rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300 group`}
                >
                  <div className={`w-14 h-14 rounded-xl ${svc.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${svc.color}`} />
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${svc.color} mb-1`}>{svc.tagline}</p>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 uppercase">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 ${svc.color} shrink-0 mt-0.5`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              HOW IT <span className="text-primary">WORKS</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A simple, streamlined process from enquiry to delivery.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+40px)] right-0 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h4 className="font-display font-bold text-foreground mb-2 uppercase">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              >
                <summary className="px-6 py-5 font-semibold text-foreground flex items-center justify-between list-none select-none hover:bg-secondary transition-colors">
                  {faq.q}
                  <span className="ml-4 text-muted-foreground text-lg group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Headphones className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">24/7 SUPPORT READY</h2>
          <p className="text-white/80 mb-8">Our parts advisors are available around the clock to help you find the right part at the right price.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm bg-white text-primary hover:bg-gray-100 transition-all"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+97141234567"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
