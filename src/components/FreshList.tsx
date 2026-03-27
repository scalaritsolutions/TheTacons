import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBasket, ShoppingCart, Leaf } from 'lucide-react';

interface FreshListProps {
  isOpen: boolean;
  onClose: () => void;
}

const currentHarvest = [
  { name: 'Rollesby Asparagus', price: '£4.50', unit: 'bunch', picked: '7:45 AM', image: '/images/asparagus-hero.png' },
  { name: 'Early Strawberries', price: '£3.80', unit: 'punnet', picked: '8:20 AM', image: '/images/strawberry-fields.png' },
  { name: 'Fresh Carrots', price: '£1.50', unit: 'kg', picked: '7:30 AM', image: '/images/organic-carrots.png' },
  { name: 'Free Range Eggs', price: '£2.80', unit: 'half dozen', picked: 'Daily', image: '/images/eggs-local.png' },
];

export function FreshList({ isOpen, onClose }: FreshListProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-surface-container-lowest shadow-2xl border-l border-primary/5 p-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-headline text-3xl text-primary">Picked Today</h3>
              <button onClick={onClose} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {currentHarvest.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-grow">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-secondary/5 px-2 py-0.5 rounded">Just In</span>
                        <span className="text-[10px] text-outline italic">Picked {item.picked}</span>
                     </div>
                    <div className="font-headline text-lg text-primary">{item.name}</div>
                    <div className="text-sm text-on-surface-variant font-serif italic">{item.price} / {item.unit}</div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-primary shadow-sm">
                    <ShoppingCart size={18} />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-secondary-fixed p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-primary">
                 <Leaf size={24} />
                 <h4 className="font-headline text-xl">Field to Fork</h4>
              </div>
              <p className="text-sm text-primary/80 italic font-serif leading-relaxed">
                Items marked "Picked Today" are harvested before 9:00 AM each morning for ultimate freshness and flavor.
              </p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm shadow-md">
                 Shop the Full Harvest
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
