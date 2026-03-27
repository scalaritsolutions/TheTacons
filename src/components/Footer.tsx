import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 py-20 w-full max-w-screen-2xl mx-auto">
        <div>
          <div className="text-xl font-headline font-bold text-primary mb-6 uppercase tracking-widest">The Tacons</div>
          <p className="font-serif italic text-base text-primary/80 leading-relaxed max-w-xs">
            Bringing the finest flavors of the Norfolk countryside to your table since 1940.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="space-y-4">
              <h4 className="font-headline text-xl text-primary">Farm Shop Hours</h4>
              <p className="text-on-surface-variant font-serif italic leading-relaxed">
                Everyday 9am to 6pm<br />
                PYO (Seasonal) 10am to 5.30pm
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl text-primary">Contact Us</h4>
              <p className="text-on-surface-variant font-serif italic leading-relaxed">
                The Grange, Rollesby,<br />
                Norfolk, NR29 5AJ<br />
                01493 740236
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/environment" className="font-serif italic text-base text-primary/80 hover:text-secondary transition-opacity">Environment Policy</Link>
            <Link to="/accessibility" className="font-serif italic text-base text-primary/80 hover:text-secondary transition-opacity">Accessibility</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="flex gap-6 mb-8">
            <Facebook className="text-primary hover:text-secondary cursor-pointer transition-colors" size={24} />
            <Instagram className="text-primary hover:text-secondary cursor-pointer transition-colors" size={24} />
            <Twitter className="text-primary hover:text-secondary cursor-pointer transition-colors" size={24} />
          </div>
          <p className="font-serif italic text-base text-primary/80 text-left md:text-right">
            © {new Date().getFullYear()} The Tacons Farm Shop & PYO. <br />
            Crafted in Rollesby, Norfolk.
          </p>
        </div>
      </div>
    </footer>
  );
}
