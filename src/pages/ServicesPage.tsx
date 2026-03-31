import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Truck,
  Users,
  ShieldCheck,
  Clock,
  Phone,
  Package,
  BarChart3,
  RefreshCcw,
  ArrowRight,
  CheckCircle2,
  Headphones,
  Globe,
  MapPin,
} from "lucide-react";

const MAIN_SERVICES = [
  {
    icon: Truck,
    title: "Global Logistics",
    tagline: "Nara to the World.",
    desc: "Operating from our headquarters at 297-1 Minamisho-CHO, Nara City, we manage a sophisticated supply chain that connects Japanese precision with global demand. We offer expedited shipping from Japan to our international hubs, ensuring critical parts reach the global market with unmatched speed.",
    features: [
      "Direct pipeline from Nara City, Japan",
      "Strategic regional distribution globally",
      "Real-time international tracking",
      "Customs & export documentation handling",
      "Air & Sea freight options available",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Globe,
    title: "Authentic JDM Sourcing",
    tagline: "Direct Japanese Access.",
    desc: "Our presence in Nara gives us a competitive edge in sourcing authentic Japanese Domestic Market (JDM) parts. We bridge the gap between niche Japanese manufacturers and international buyers, sourcing rare or discontinued components that local markets simply cannot find.",
    features: [
      "Direct access to Japanese auctions",
      "Network of 500+ Japanese suppliers",
      "Rare & discontinued part specialist",
      "Authenticity verification at source",
      "OEM & Tier-1 manufacturer relationships",
    ],
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    tagline: "Japanese Grade Assurance.",
    desc: "Every part dispatched from Nara or our international facilities undergoes a rigorous inspection protocol. We adhere to the highest Japanese quality standards, ensuring that every component—from a simple gasket to a complete engine assembly—is 100% authentic.",
    features: [
      "Standardized Japanese QC protocols",
      "Anti-counterfeit verification",
      "Manufacturer-backed warranties",
      "ISO 9001:2015 certified processes",
      "Full technical documentation provided",
    ],
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    tagline: "Engineering expertise.",
    desc: "Our advisors, trained in Japanese automotive specifications, provide expert fitment guidance and technical cross-referencing. We don’t just sell parts; we provide the technical knowledge needed to ensure your vehicle or fleet stays operational.",
    features: [
      "Japanese OEM specification experts",
      "VIN-based fitment verification",
      "Installation & technical support",
      "Bulk sourcing for fleet operators",
      "Multi-language support (JP/EN/Global)",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Package,
    title: "Wholesale & B2B",
    tagline: "Global supply for local business.",
    desc: "We empower auto workshops and dealerships globally with reliable wholesale solutions. By eliminating middlemen and sourcing directly from Japan, we offer competitive pricing and priority stock allocation to our professional partners.",
    features: [
      "Tiered wholesale pricing structures",
      "Dedicated global account managers",
      "Flexible credit terms for B2B",
      "Inventory management support",
      "API integration for digital orders",
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: RefreshCcw,
    title: "Returns & Support",
    tagline: "Global peace of mind.",
    desc: "Our commitment to the customer doesn't end at the border. We offer a transparent returns and exchange policy, managed through our international hubs, to ensure that distance is never a barrier to quality service.",
    features: [
      "30-day global return window",
      "International return hubs",
      "Rapid refund processing",
      "Exchange with fitment guarantee",
      "Dedicated after-sales support",
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Global Enquiry",
    desc: "Contact our Nara or international offices with your requirements or specific part numbers.",
  },
  {
    step: "02",
    title: "Japanese Sourcing",
    desc: "We verify availability across our Japanese network and confirm exact fitment.",
  },
  {
    step: "03",
    title: "Quality Inspection",
    desc: "Parts are inspected at our Nara facility before international dispatch.",
  },
  {
    step: "04",
    title: "Final Delivery",
    desc: "Tracked shipment to your door, handling all customs and logistics automatically.",
  },
];

const FAQS = [
  {
    q: "Do you ship directly from Japan?",
    a: "Yes, for rare or specific JDM components, we ship directly from our Nara facility. For high-demand items, we maintain stock in our international hubs for immediate delivery.",
  },
  {
    q: "How do you ensure parts are genuine?",
    a: "By being based in Japan at 297-1 Minamisho-CHO, we source directly from authorized manufacturers and Tier-1 suppliers, eliminating the risk of counterfeits commonly found in secondary markets.",
  },
  {
    q: "What are the typical lead times?",
    a: "International express delivery is highly optimized. Shipping from Japan typically takes 5-7 business days via air freight or 25-30 days via sea freight depending on the destination.",
  },
  {
    q: "Can you source parts for European vehicles?",
    a: "While we specialize in Japanese brands (Toyota, Nissan, Honda, etc.), our global network allows us to source OEM parts for German and American vehicles via our international partners.",
  },
  {
    q: "Do you provide customs support for international orders?",
    a: "Absolutely. We handle all export documentation from Japan and import clearance in the destination country, providing a door-to-door service with transparent costs.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Globe className="absolute top-8 right-20 w-64 h-64 text-primary rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Services</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              HQ: Nara City, Japan
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 uppercase">
            FROM NARA TO THE <span className="text-primary">WORLD</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            From our foundations in 297-1 Minamisho-CHO, we have built a global
            automotive ecosystem. We combine Japanese precision with
            international logistics to keep your fleet and business moving.
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
                  <div
                    className={`w-14 h-14 rounded-xl ${svc.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${svc.color}`} />
                  </div>
                  <p
                    className={`text-xs font-bold uppercase tracking-widest ${svc.color} mb-1`}
                  >
                    {svc.tagline}
                  </p>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 uppercase">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${svc.color} shrink-0 mt-0.5`}
                        />
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
              GLOBAL <span className="text-primary">WORKFLOW</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Japanese standards at every step of the supply chain.
            </p>
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
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+40px)] right-0 h-px bg-linear-to-r from-primary/50 to-transparent" />
                )}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h4 className="font-display font-bold text-foreground mb-2 uppercase">
                  {p.title}
                </h4>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 uppercase">
              SERVICE <span className="text-primary">INSIGHTS</span>
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
                <summary className="px-6 py-5 font-semibold text-foreground flex items-center justify-between list-none select-none hover:bg-secondary transition-colors uppercase text-sm tracking-wide">
                  {faq.q}
                  <span className="ml-4 text-muted-foreground text-lg group-open:rotate-45 transition-transform duration-200 shrink-0">
                    +
                  </span>
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
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 uppercase">
            CONNECT WITH OUR GLOBAL OFFICE
          </h2>
          <p className="text-white/80 mb-8">
            Whether you are in Nara, or anywhere globally, our team is ready to
            support your automotive sourcing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm bg-white text-primary hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+819088166070"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Nara HQ
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
