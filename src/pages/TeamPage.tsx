import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";

const LEADERSHIP = [
  {
    name: "Ziad El-Bassam",
    role: "Founder & Chief Executive Officer",
    dept: "Leadership",
    bio: "With 20+ years in the automotive supply industry, Ziad founded ZEB Trading in 2009 with a vision to bring transparent, reliable auto parts sourcing to the UAE. His deep supplier relationships and industry expertise have shaped the company's reputation for authenticity and excellence.",
    expertise: [
      "Strategic Partnerships",
      "Supply Chain Management",
      "Business Development",
      "Market Expansion",
    ],
    initials: "ZE",
    color: "bg-primary",
  },
  {
    name: "Nadia Al-Rashid",
    role: "Chief Operations Officer",
    dept: "Leadership",
    bio: "Nadia oversees all operational functions at ZEB Trading, including warehouse management, logistics, and quality assurance. Her systematic approach to process optimization has reduced order lead times by 40% since joining in 2014.",
    expertise: [
      "Operations Management",
      "Logistics & Distribution",
      "Quality Control",
      "Process Optimization",
    ],
    initials: "NA",
    color: "bg-accent",
  },
  {
    name: "Marcus Osei",
    role: "Chief Commercial Officer",
    dept: "Leadership",
    bio: "Marcus leads ZEB's commercial strategy, B2B partnerships, and key account management. He has personally developed relationships with over 300 workshop and dealership accounts across the GCC, growing revenues by 35% year-on-year.",
    expertise: [
      "B2B Sales Strategy",
      "Account Management",
      "Market Analysis",
      "Client Relations",
    ],
    initials: "MO",
    color: "bg-blue-500",
  },
];

const TEAM = [
  {
    name: "Ahmed Al-Farsi",
    role: "Head of Procurement",
    dept: "Procurement",
    bio: "Ahmed manages our global supplier network across Japan, Germany, South Korea, and the USA. His technical background as a mechanical engineer allows him to evaluate part quality at a granular level.",
    expertise: [
      "Global Sourcing",
      "Supplier Relations",
      "OEM Authentication",
      "Cost Negotiation",
    ],
    initials: "AA",
    color: "bg-green-600",
  },
  {
    name: "Sarah Chen",
    role: "Senior Parts Advisor",
    dept: "Technical",
    bio: "With a background in automotive engineering, Sarah leads our technical consultation team. She handles complex part-matching cases and is the go-to expert for European and Japanese vehicle specifications.",
    expertise: [
      "OEM Cross-Referencing",
      "European Vehicles",
      "Japanese Imports",
      "Customer Support",
    ],
    initials: "SC",
    color: "bg-purple-600",
  },
  {
    name: "James Okonkwo",
    role: "Logistics Manager",
    dept: "Logistics",
    bio: "James ensures every order leaves our warehouse on time and arrives in perfect condition. He designed our current delivery routing system that enables same-day delivery across Dubai and Sharjah.",
    expertise: [
      "Fleet Management",
      "Route Optimization",
      "Last-Mile Delivery",
      "Customs & Import",
    ],
    initials: "JO",
    color: "bg-orange-600",
  },
  {
    name: "Fatima Al-Marzouqi",
    role: "Quality Assurance Lead",
    dept: "Quality",
    bio: "Fatima is responsible for maintaining our ISO 9001:2015 certification and implementing quality control protocols across all incoming inventory. She has a zero-tolerance policy for counterfeit products.",
    expertise: [
      "ISO Compliance",
      "Counterfeit Detection",
      "Supplier Auditing",
      "Quality Standards",
    ],
    initials: "FA",
    color: "bg-teal-600",
  },
  {
    name: "David Kim",
    role: "B2B Account Manager",
    dept: "Sales",
    bio: "David manages relationships with our top-tier wholesale clients, including several major automotive dealerships across Abu Dhabi and Dubai. He specialises in fleet accounts and bulk sourcing contracts.",
    expertise: [
      "Fleet Accounts",
      "Wholesale Contracts",
      "Credit Management",
      "CRM Systems",
    ],
    initials: "DK",
    color: "bg-red-700",
  },
  {
    name: "Priya Sharma",
    role: "Digital Operations Specialist",
    dept: "Technology",
    bio: "Priya leads our digital transformation initiatives, including the B2B ordering portal and inventory management systems. She has streamlined the order-to-dispatch process, reducing errors by 60%.",
    expertise: [
      "ERP Systems",
      "B2B Portal",
      "Data Analytics",
      "Digital Processes",
    ],
    initials: "PS",
    color: "bg-indigo-600",
  },
  {
    name: "Khalid Al-Hamdan",
    role: "Warehouse Supervisor",
    dept: "Operations",
    bio: "Khalid oversees our 15,000 sq.ft. warehouse facility, managing a team of 20 staff and ensuring a 99.8% inventory accuracy rate. His deep knowledge of our SKU catalogue makes him an invaluable resource.",
    expertise: [
      "Inventory Management",
      "Team Leadership",
      "Safety Compliance",
      "Stock Accuracy",
    ],
    initials: "KH",
    color: "bg-amber-600",
  },
  {
    name: "Linda Torres",
    role: "Customer Experience Manager",
    dept: "Customer Service",
    bio: "Linda ensures every customer interaction with ZEB Trading exceeds expectations. She manages after-sales support, returns processing, and customer satisfaction metrics — achieving a 97% satisfaction rate.",
    expertise: [
      "Customer Relations",
      "Complaint Resolution",
      "After-Sales Support",
      "Team Training",
    ],
    initials: "LT",
    color: "bg-pink-600",
  },
];

function MemberCard({
  member,
  delay = 0,
}: {
  member: (typeof TEAM)[0];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(220,38,38,0.08)] flex flex-col"
    >
      <div className="relative h-40 bg-secondary flex items-center justify-center overflow-hidden">
        <div
          className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {member.initials}
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded text-xs font-bold bg-background/80 text-muted-foreground border border-border backdrop-blur-sm uppercase tracking-wider">
            {member.dept}
          </span>
        </div>
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${member.color}`}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-display font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.expertise.map((e) => (
            <span
              key={e}
              className="px-2 py-0.5 rounded text-[10px] font-semibold bg-secondary border border-border text-muted-foreground uppercase tracking-wider"
            >
              {e}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <a
            href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@zebtrading.com`}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Our Team</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              THE PEOPLE <span className="text-primary">BEHIND</span> ZEB
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of automotive specialists, logistics experts, and
              customer champions work together every day to ensure you receive
              the right part, at the right price, at the right time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-display font-bold text-foreground uppercase tracking-widest whitespace-nowrap">
              Leadership
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-display font-bold text-foreground uppercase tracking-widest whitespace-nowrap">
              Our Specialists
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-6">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">
                  Why Work With Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                A CULTURE OF{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                  EXCELLENCE
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At ZEB Trading, we believe great people build great companies.
                Our team is our greatest asset, and we invest in their growth,
                well-being, and professional development at every step.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Competitive salaries and performance bonuses",
                  "Annual professional development budget",
                  "Multicultural team from 12+ nationalities",
                  "Clear career progression pathways",
                  "Collaborative, non-hierarchical culture",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:careers@zebtrading.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                  bg-primary text-primary-foreground
                  shadow-[0_0_20px_rgba(220,38,38,0.4)]
                  hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
                  hover:bg-red-500 transition-all duration-300"
              >
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  val: "11",
                  label: "Years Avg Experience",
                  color: "bg-primary/10 border-primary/20",
                },
                {
                  val: "12+",
                  label: "Nationalities on Team",
                  color: "bg-accent/10 border-accent/20",
                },
                {
                  val: "97%",
                  label: "Staff Retention Rate",
                  color: "bg-green-500/10 border-green-500/20",
                },
                {
                  val: "25+",
                  label: "Team Members",
                  color: "bg-blue-500/10 border-blue-500/20",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.color} border rounded-2xl p-6 text-center`}
                >
                  <p className="text-4xl font-display font-bold text-foreground mb-2">
                    {stat.val}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
            HAVE A QUESTION FOR OUR TEAM?
          </h2>
          <p className="text-white/80 mb-8">
            Our specialists are available 24/7 to assist with part sourcing,
            technical queries, and wholesale enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm bg-white text-primary hover:bg-gray-100 transition-all"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+97141234567"
              className="flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> +971 4 123 4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
