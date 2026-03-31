import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  MapPin, Phone, Mail, Send, Loader2, Clock, Headphones,
  MessageSquare, Building2, CheckCircle2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OFFICES = [
  {
    city: "NARA CITY, JAPAN",
    address: "297-1 Minamisho-CHO, NARA CITY",
    phone: "+81 90 9880 6070\n+81 90 8816 6070",
    email: "zt.zebtrading@gmail.com",
    hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  },
];

const INQUIRY_TYPES = [
  'Parts Enquiry',
  'Wholesale / B2B Pricing',
  'Technical Support',
  'Delivery & Logistics',
  'Returns & Warranty',
  'General Enquiry',
];

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    vehicleInfo: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 2 business hours.",
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', company: '', inquiryType: '', vehicleInfo: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Have a parts enquiry, wholesale quote request, or just want to know
            more about ZEB Trading? Our team is ready to help — 24/7.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <div className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 justify-start">
            <a
              href="tel:+81 90 9880 6070"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-primary" /> +81 90 9880 6070
            </a>
            <a
              href="mailto:info@zebtrading.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-primary" /> info@zebtrading.com
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <Clock className="w-4 h-4 text-accent" /> Mon–Sat: 8 AM – 6 PM GST
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <Headphones className="w-4 h-4 text-green-400" /> Emergency line
              available 24/7
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6 uppercase">
                  Our Offices
                </h2>
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="bg-card border border-border rounded-xl p-6 mb-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-4 h-4 text-primary" />
                      <h3 className="font-display font-bold text-foreground uppercase tracking-wide">
                        {office.city}
                      </h3>
                    </div>
                    <div className="space-y-2.5 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="whitespace-pre-line">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="hover:text-primary transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  <h3 className="font-display font-bold text-foreground uppercase">
                    Chat on WhatsApp
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant replies from our parts team via WhatsApp. Share
                  photos, OEM numbers, or vehicle details directly.
                </p>
                <a
                  href="https://wa.me/+81 90 9880 6070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-bold uppercase tracking-wider text-sm
                    bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" /> Open WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 uppercase">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Thank you,{" "}
                      <span className="text-foreground font-semibold">
                        {formData.name}
                      </span>
                      .
                    </p>
                    <p className="text-muted-foreground mb-8 text-sm">
                      One of our specialists will reach out to{" "}
                      <span className="text-foreground">{formData.email}</span>{" "}
                      within 2 business hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm bg-primary text-primary-foreground hover:bg-red-500 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2 uppercase">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground text-sm mb-8">
                      Fill in the form and our team will respond within 2
                      business hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="+971 50 000 0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Company / Workshop
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          Inquiry Type *
                        </label>
                        <select
                          required
                          value={formData.inquiryType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              inquiryType: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        >
                          <option value="">Select inquiry type...</option>
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          Vehicle Information (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.vehicleInfo}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              vehicleInfo: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="e.g. 2019 Toyota Camry 2.5L, VIN: 1HGBH41J..."
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          Message / Parts List *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                          placeholder="Please describe your requirements, list part numbers if known, or describe the issue you're trying to resolve..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm
                          bg-primary text-primary-foreground
                          border border-primary/50
                          shadow-[0_0_15px_rgba(220,38,38,0.3)]
                          hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]
                          hover:bg-red-500 transition-all duration-300
                          disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form you agree to our Privacy Policy.
                        We'll never share your data.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-72 bg-secondary border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <MapPin className="w-12 h-12 text-primary animate-bounce" />
          <p className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">
            297-1 Minamisho-CHO, NARA CITY, JAPAN
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-sm font-bold uppercase tracking-wider text-xs bg-primary text-primary-foreground hover:bg-red-500 transition-all"
          >
            Open in Google Maps
          </a>
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      <Footer />
    </div>
  );
}
