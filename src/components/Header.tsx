import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { getAssetPath } from '../utils/assets';
import { ShoppingBasket, Menu, X, MapPin, ChevronDown, Leaf, Star, Calendar, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const megaMenuData = [
  {
    title: 'Our Produce',
    path: '/shop',
    items: [
      { name: 'Fresh Vegetables', desc: 'Harvested daily from our fields', icon: Leaf, path: '/shop?cat=Vegetables' },
      { name: 'Seasonal Fruit', desc: 'Norfolk berries and orchard fruits', icon: Star, path: '/shop?cat=Fruit' },
      { name: 'Pantry & Deli', desc: 'Local honey, jams, and cheeses', icon: ShoppingBasket, path: '/shop?cat=Pantry' },
    ]
  },
  {
    title: 'Experiences',
    path: '/pyo',
    items: [
      { name: 'PYO Seasons', desc: 'Pick your own strawberries & more', icon: Calendar, path: '/pyo' },
      { name: 'Farm Events', desc: 'EasterFest, Pumpkin Picking & more', icon: Star, path: '/events' },
      { name: 'Visit Us', desc: 'Find your way to Rollesby', icon: MapPin, path: '/contact' },
    ]
  },
  {
    title: 'About Us',
    path: '/story',
    items: [
      { name: 'Our Story', desc: 'Three generations of farming', icon: Info, path: '/story' },
      { name: 'Environment', desc: 'Our commitment to the land', icon: Leaf, path: '/environment' },
      { name: 'Careers', desc: 'Join the Tacon family team', icon: Star, path: '/contact' },
    ]
  }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/5 transition-all duration-300"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-headline font-bold text-primary uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs">T</span>
          <img 
            src={getAssetPath('images/tacons-logo.png')} 
            alt="The Tacons Logo" 
            className="w-8 h-8 object-contain brightness-0 invert"
          />
          The Tacons
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {megaMenuData.map((menu) => (
            <div 
              key={menu.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.title)}
            >
              <Link
                to={menu.path}
                className={cn(
                  "font-headline text-base tracking-tight transition-all hover:text-secondary flex items-center gap-1 py-2",
                  location.pathname === menu.path && !activeMenu
                    ? "text-secondary font-semibold" 
                    : "text-primary"
                )}
              >
                {menu.title}
                <ChevronDown size={14} className={cn("transition-transform duration-300", activeMenu === menu.title ? "rotate-180" : "")} />
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === menu.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[450px] bg-white rounded-2xl shadow-2xl border border-primary/5 p-6 mt-2 overflow-hidden bg-surface-container-lowest"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {menu.items.map((item) => (
                        <Link 
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all group"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <item.icon size={24} />
                          </div>
                          <div>
                            <div className="font-headline text-lg text-primary">{item.name}</div>
                            <div className="text-sm text-on-surface-variant font-serif italic">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary/5 flex justify-between items-center px-2">
                       <span className="text-xs font-bold uppercase tracking-widest text-outline">Est. 1940</span>
                       <Link to={menu.path} className="text-xs font-bold text-secondary hover:underline" onClick={() => setActiveMenu(null)}>View All</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-container transition-all items-center gap-2 shadow-sm">
            <MapPin size={18} />
            Visit Us
          </button>
          
          <button 
             className="lg:hidden text-primary p-2 hover:bg-primary/5 rounded-full transition-colors"
             onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[72px] bg-background z-40 lg:hidden overflow-y-auto px-6 py-10"
          >
            <div className="flex flex-col gap-10">
              {megaMenuData.map((menu) => (
                <div key={menu.title} className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-outline px-2">{menu.title}</div>
                  <div className="flex flex-col gap-2">
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-xl active:bg-primary/10"
                      >
                         <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                            <item.icon size={20} />
                          </div>
                          <div className="text-lg font-headline text-primary">{item.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-primary/5">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold w-full shadow-lg">
                  Visit Us in Rollesby
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
