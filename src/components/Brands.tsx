const BRANDS = [
  "BOSCH", "NGK", "DENSO", "MONROE", "BREMBO", 
  "MANN-FILTER", "MAHLE", "GATES", "SKF", "VALEO", 
  "DELPHI", "TRW"
];

export function Brands() {
  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      
      {/* Shadow masks for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary to-transparent z-10" />

      <div className="flex overflow-hidden space-x-16 group relative z-0">
        <div className="flex space-x-16 items-center animate-marquee group-hover:[animation-play-state:paused]">
          {BRANDS.map((brand, i) => (
            <span key={`a-${i}`} className="text-2xl md:text-4xl font-display font-bold text-primary-foreground uppercase whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
              {brand}
            </span>
          ))}
        </div>
        <div className="flex space-x-16 items-center animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {BRANDS.map((brand, i) => (
            <span key={`b-${i}`} className="text-2xl md:text-4xl font-display font-bold text-primary-foreground uppercase whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
