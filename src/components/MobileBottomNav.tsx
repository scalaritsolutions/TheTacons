import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBasket, Calendar, MapPin, Mail } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Shop', path: '/shop', icon: ShoppingBasket },
  { name: 'PYO', path: '/pyo', icon: Calendar },
  { name: 'Events', path: '/events', icon: MapPin },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-primary/10 px-6 py-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0,05)]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center gap-1 transition-all duration-300",
              isActive ? "text-secondary scale-110" : "text-primary/60 hover:text-primary"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
