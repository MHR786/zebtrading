import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'wouter';

const REVIEWS = [
  {
    name: "Mohammed Al-Rashidi",
    role: "Garage Owner",
    text: "ZEB Trading has completely transformed our supply chain. Their parts are always genuine, and the same-day delivery has saved us countless times."
  },
  {
    name: "Sarah Chen",
    role: "Procurement Manager",
    text: "The B2B pricing structure is the best in the market. Combined with their extensive stock of European car parts, they are our undisputed #1 supplier."
  },
  {
    name: "James Okonkwo",
    role: "Lead Mechanic",
    text: "You can't beat their technical support. Whenever we struggle identifying a specific obscure part, the ZEB team finds it immediately."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            DRIVEN BY <span className="text-accent">TRUST</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear what industry professionals have to say about partnering with ZEB Trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-background p-8 rounded-2xl border border-border relative group hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-border/40 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div>
                <h4 className="font-display font-bold text-lg text-foreground uppercase tracking-wide">
                  {review.name}
                </h4>
                <p className="text-primary text-xs font-bold tracking-widest uppercase">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm
              bg-card text-foreground border border-border
              hover:border-primary hover:text-primary transition-all duration-300"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
