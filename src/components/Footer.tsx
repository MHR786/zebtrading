import { Logo } from './Logo';
import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const PRODUCT_LINKS = [
  { name: 'Engine Parts', href: '/products' },
  { name: 'Braking Systems', href: '/products' },
  { name: 'Suspension & Steering', href: '/products' },
  { name: 'Electrical & Lighting', href: '/products' },
  { name: 'Filters & Fluids', href: '/products' },
  { name: 'Transmission Parts', href: '/products' },
];

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              ZEB Trading is the premier destination for high-quality automotive parts.
              Serving garages, dealerships, and enthusiasts with genuine OEM and aftermarket solutions worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-bold uppercase tracking-wider text-xs
                bg-primary text-primary-foreground hover:bg-red-500 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground uppercase tracking-widest mb-6 text-sm">Products</h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground uppercase tracking-widest mb-6 text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">123 Industrial Zone, Sector 4<br />Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+97141234567" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+971 4 123 4567</a>
                  <a href="tel:+971509876543" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+971 50 987 6543</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:sales@zebtrading.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">sales@zebtrading.com</a>
                  <a href="mailto:info@zebtrading.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">info@zebtrading.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} ZEB Trading LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>30-Day Return Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
