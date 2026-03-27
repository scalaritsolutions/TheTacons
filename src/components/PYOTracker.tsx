import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const crops = [
  { name: 'Strawberries', status: 'Open', color: 'bg-green-500', icon: CheckCircle2, info: 'Picking now!' },
  { name: 'Raspberries', status: 'Coming June', color: 'bg-amber-500', icon: Clock, info: 'Almost ready' },
  { name: 'Asparagus', status: 'Closed', color: 'bg-red-500', icon: AlertCircle, info: 'See you next year' },
  { name: 'Sunflowers', status: 'Coming July', color: 'bg-amber-500', icon: Clock, info: 'Planted & growing' },
];

export function PYOTracker() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 border border-primary/5 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-headline text-2xl text-primary">Live Field Status</h3>
        <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Live Updates</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {crops.map((crop, i) => (
          <motion.div 
            key={crop.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-primary/5 hover:bg-primary/5 transition-all group"
          >
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm", crop.color)}>
              <crop.icon size={20} />
            </div>
            <div>
              <div className="font-headline text-lg text-primary">{crop.name}</div>
              <div className="text-xs text-on-surface-variant font-serif italic">{crop.status} — {crop.info}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-primary/5 text-center">
        <p className="text-sm text-on-surface-variant italic font-serif">
          Status updated every morning at 8:00 AM.
        </p>
      </div>
    </div>
  );
}
