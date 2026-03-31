import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Target,
  Eye,
  Heart,
  Award,
  Globe2,
  Users,
  TrendingUp,
  ArrowRight,
  MapPin,
} from "lucide-react";

const TIMELINE = [
  {
    year: "2009",
    title: "Founding in Nara, Japan",
    desc: "ZEB Trading was established at 297-1 Minamisho-CHO, Nara City. We began with a core mission: to export the precision and reliability of Japanese automotive engineering to the global aftermarket.",
  },
  {
    year: "2012",
    title: "Global Expansion",
    desc: "Leveraging our Japanese sourcing network, we expanded our delivery operations internationally, establishing ourselves as a bridge between Japan and the World.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    desc: "Launched a high-tech B2B digital ordering portal, integrating our global inventory to reduce lead times by 40% for our wholesale partners.",
  },
  {
    year: "2024",
    title: "Global Parts Authority",
    desc: "Today, ZEB Trading stocks over 10,000 SKUs from 50+ global brands, serving 1,200+ business clients from our roots in Nara to our hubs across the World.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Japanese Precision",
    desc: "We carry the meticulous standards of Nara City into every order. Every part is cross-referenced against OEM specifications to ensure a perfect fit.",
  },
  {
    icon: Heart,
    title: "Integrity (Seijitsu)",
    desc: "Built on the Japanese value of Seijitsu (sincerity), we supply only genuine parts. Our reputation is built on absolute honesty with every partner.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We treat every client as a long-term partner. Our dedicated account managers bridge the gap between global manufacturers and international workshops.",
  },
  {
    icon: TrendingUp,
    title: "Kaizen Spirit",
    desc: "Continuous improvement drives us. We are constantly refining our supply chain to provide the fastest, most reliable service in the industry.",
  },
];

const STATS = [
  { value: "15+", label: "Years of Excellence" },
  { value: "10K+", label: "Parts in Stock" },
  { value: "1,200+", label: "Business Clients" },
  { value: "50+", label: "Global Brands" },
  { value: "20+", label: "Countries Served" },
  { value: "99%", label: "Order Accuracy" },
];

const CERTIFICATIONS = [
  { name: "Authorized Japanese OEM Sourcing", location: "Nara, Japan" },
  { name: "ISO 9001:2015 Quality Management", location: "Global Standard" },
  { name: "ESMA Compliant Products", location: "International Standards" },
  { name: "Authorised Bosch Service Distributor", location: "International" },
  { name: "Brembo Certified Reseller", location: "International" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">About Us</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  Founded in Nara, Japan
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                JAPANESE <span className="text-primary">HERITAGE,</span>
                <br />
                GLOBAL <span className="text-accent">EXPERTISE</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                What began in 2009 at{" "}
                <strong>297-1 Minamisho-CHO, Nara City</strong>, has evolved
                into a leading automotive parts authority. ZEB Trading was
                founded to bring the world-renowned precision of Japanese
                sourcing to the World.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our operations are built on the cornerstone of authenticity and
                efficiency. From our headquarters in Nara, we have spent over 15
                years refining a supply chain that connects the world's best
                manufacturers to professional workshops across the globe.
              </p>
            </div>
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/quality-parts.png`}
                alt="ZEB Trading Global Operations"
                className="w-full rounded-2xl border border-border object-cover aspect-[4/3] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-2xl hidden md:block">
                <p className="text-4xl font-display font-bold text-white">
                  2009
                </p>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-80 text-white/90">
                  Established in Nara
                </p>
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
                <p className="text-3xl font-display font-bold text-primary mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                  {s.label}
                </p>
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
              className="bg-card border border-border rounded-2xl p-10 relative overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                To bridge the gap between global automotive excellence and
                international demand by delivering precision-sourced parts with
                Japanese reliability, ensuring every vehicle we serve performs
                at its absolute peak.
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <Globe2 className="w-32 h-32 text-primary" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-10 relative overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                To be the World’s most trusted link in the automotive supply
                chain, recognized for bringing Japanese quality standards to the
                global market through innovation, transparency, and service
                excellence.
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-32 h-32 text-accent" />
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
              Guided by <span className="text-primary">Core Values</span>
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
                  <h4 className="font-display font-bold text-foreground mb-2 uppercase text-sm">
                    {v.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto italic">
              "From 297-1 Minamisho-CHO to the heart of the Global market."
            </p>
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
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-xs font-display font-bold text-primary leading-tight">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 flex-1 hover:border-primary/40 transition-all hover:shadow-md">
                    <h4 className="font-display font-bold text-foreground mb-1 uppercase text-sm tracking-wide">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.desc}
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 uppercase">
              Compliance & <span className="text-primary">Quality</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ensuring reliability from Japan to the World through international
              certifications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between bg-card border border-border rounded-xl px-5 py-4 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {cert.name}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                  {cert.location}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 uppercase">
            Meet the Team Behind ZEB
          </h2>
          <p className="text-white/80 mb-8">
            Get to know the passionate professionals bridging Japanese
            excellence with Global expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm bg-white text-primary hover:bg-gray-100 transition-all shadow-xl"
            >
              Meet the Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        {/* Subtle Japanese Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </section>

      <Footer />
    </div>
  );
}
