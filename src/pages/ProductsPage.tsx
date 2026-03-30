import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Settings, CircleDot, Activity, Zap, Droplets, GitBranch, Car, Wind,
  ArrowRight, Search, CheckCircle2, Package, Shield, Truck
} from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Engine Parts',
    icon: Settings,
    desc: 'Complete range of engine components including pistons, connecting rods, camshafts, crankshafts, timing belts, gaskets, and valve assemblies. Compatible with all major vehicle brands.',
    items: ['Pistons & Rings', 'Cylinder Head Gaskets', 'Timing Belts & Chains', 'Camshafts & Crankshafts', 'Valve Assemblies', 'Engine Mounts', 'Oil Pumps', 'Water Pumps'],
    brands: ['Mahle', 'Elring', 'Victor Reinz', 'Gates', 'Febi Bilstein'],
    color: 'from-red-500/10 to-red-900/5',
    border: 'border-red-500/20',
  },
  {
    name: 'Braking Systems',
    icon: CircleDot,
    desc: 'High-performance braking components ensuring maximum stopping power and safety. From OEM replacements to performance upgrades for all vehicle types.',
    items: ['Brake Pads (Front & Rear)', 'Brake Discs & Rotors', 'Brake Calipers', 'Brake Drums', 'Brake Lines & Hoses', 'Brake Fluid', 'ABS Sensors', 'Master Cylinders'],
    brands: ['Brembo', 'TRW', 'Ferodo', 'ATE', 'Bosch'],
    color: 'from-orange-500/10 to-orange-900/5',
    border: 'border-orange-500/20',
  },
  {
    name: 'Suspension & Steering',
    icon: Activity,
    desc: 'Precision-engineered suspension and steering components to maintain vehicle stability, comfort, and handling on all road conditions.',
    items: ['Shock Absorbers', 'Coil Springs', 'Control Arms', 'Ball Joints', 'Tie Rod Ends', 'Wheel Bearings', 'Steering Racks', 'Power Steering Pumps'],
    brands: ['Monroe', 'Sachs', 'KYB', 'Bilstein', 'SKF'],
    color: 'from-yellow-500/10 to-yellow-900/5',
    border: 'border-yellow-500/20',
  },
  {
    name: 'Electrical & Lighting',
    icon: Zap,
    desc: 'Complete electrical system components including batteries, starters, alternators, and advanced LED and HID lighting solutions.',
    items: ['Car Batteries', 'Alternators', 'Starter Motors', 'Ignition Coils', 'Spark Plugs', 'Headlights (LED/HID/Halogen)', 'Sensors & Switches', 'Fuses & Relays'],
    brands: ['Bosch', 'NGK', 'Denso', 'Valeo', 'Varta'],
    color: 'from-blue-500/10 to-blue-900/5',
    border: 'border-blue-500/20',
  },
  {
    name: 'Filters & Fluids',
    icon: Droplets,
    desc: 'Premium filtration and fluid products to keep your engine clean, cool, and running smoothly. Extending vehicle life and maintaining performance.',
    items: ['Oil Filters', 'Air Filters', 'Fuel Filters', 'Cabin Air Filters', 'Engine Oils', 'Transmission Fluid', 'Brake Fluid', 'Coolant & Antifreeze'],
    brands: ['Mann-Filter', 'Mahle', 'Fram', 'Castrol', 'Mobil'],
    color: 'from-green-500/10 to-green-900/5',
    border: 'border-green-500/20',
  },
  {
    name: 'Transmission',
    icon: GitBranch,
    desc: 'Full range of automatic and manual transmission parts ensuring smooth gear changes and drivetrain performance for all vehicle types.',
    items: ['Clutch Kits', 'Flywheel Assemblies', 'Transmission Filters', 'CV Joints & Axles', 'Gear Shift Cables', 'Torque Converters', 'Differential Seals', 'Gearbox Mounts'],
    brands: ['Sachs', 'LUK', 'ZF', 'Valeo', 'Febi Bilstein'],
    color: 'from-purple-500/10 to-purple-900/5',
    border: 'border-purple-500/20',
  },
  {
    name: 'Body Parts',
    icon: Car,
    desc: "Genuine and aftermarket body panels, mirrors, bumpers, and glass to restore your vehicle's appearance to factory-perfect condition.",
    items: ['Front & Rear Bumpers', 'Side Mirrors & Housings', 'Bonnet & Boot Lids', 'Door Panels', 'Windscreens & Glass', 'Grilles & Trims', 'Fenders & Quarter Panels', 'Lights & Lenses'],
    brands: ['TYC', 'Depo', 'ABAKUS', 'Prasco', 'Valeo'],
    color: 'from-cyan-500/10 to-cyan-900/5',
    border: 'border-cyan-500/20',
  },
  {
    name: 'Exhaust Systems',
    icon: Wind,
    desc: 'Complete exhaust solutions from catalytic converters to performance mufflers, reducing emissions while maximizing engine efficiency.',
    items: ['Catalytic Converters', 'Mufflers & Silencers', 'Exhaust Manifolds', 'Flex Pipes', 'Lambda / O2 Sensors', 'Exhaust Clamps & Brackets', 'DPF Filters', 'EGR Valves'],
    brands: ['Walker', 'Bosal', 'Magneti Marelli', 'Klarius', 'Eberspächer'],
    color: 'from-rose-500/10 to-rose-900/5',
    border: 'border-rose-500/20',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 22 } },
};

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const filtered = CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.items.some((i) => i.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-secondary border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Settings className="absolute top-8 right-20 w-64 h-64 text-primary rotate-12" />
          <CircleDot className="absolute bottom-4 left-16 w-48 h-48 text-accent -rotate-6" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">Products</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
                OUR <span className="text-primary">CATALOGUE</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Over 10,000 genuine OEM and aftermarket auto parts across 8 major categories. Whatever your vehicle needs, we have it in stock.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Parts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Brands</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">8</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Categories</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-8 relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search parts (e.g. brake pads, oil filter, spark plug...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-background border border-border rounded-sm pl-12 pr-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {[
              { icon: Shield, text: 'Genuine OEM Parts' },
              { icon: Package, text: '10,000+ SKUs In Stock' },
              { icon: Truck, text: 'Same-Day Dispatch' },
              { icon: CheckCircle2, text: 'Warranty on All Parts' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
              <p className="text-muted-foreground text-lg">No categories match your search.</p>
              <button onClick={() => setSearch('')} className="mt-4 text-primary underline text-sm">Clear search</button>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {filtered.map((cat) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.name}
                    variants={item}
                    className={`group bg-card border ${cat.border} rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(220,38,38,0.08)]`}
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <div>
                        <h2 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {cat.name}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {cat.items.map((part) => (
                        <div key={part} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {part}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-semibold">Featured Brands</p>
                        <div className="flex flex-wrap gap-2">
                          {cat.brands.map((b) => (
                            <span key={b} className="px-2 py-0.5 rounded text-xs bg-secondary border border-border text-muted-foreground font-medium">{b}</span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-sm font-bold uppercase tracking-wider text-xs
                          bg-primary text-primary-foreground
                          hover:bg-red-500 transition-all duration-300 shrink-0"
                      >
                        Request Quote
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-4">
            CAN'T FIND WHAT YOU NEED?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our expert parts advisors can source any part for any vehicle. Send us the OEM number or vehicle details and we'll find it for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
              bg-primary text-primary-foreground
              shadow-[0_0_20px_rgba(220,38,38,0.4)]
              hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
              hover:bg-red-500 transition-all duration-300"
          >
            Contact Our Parts Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
