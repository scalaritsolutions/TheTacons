import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Info, ArrowRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';
import { PYOTracker } from '../components/PYOTracker';

const crops = [
  {
    name: 'Strawberries',
    status: 'Picking Now',
    statusColor: 'bg-green-500 text-white',
    period: 'May - July',
    progress: 75,
    peak: 'Peak Season',
    info: 'Field 4 & 5 Open'
  },
  {
    name: 'Raspberries',
    status: 'Coming Soon',
    statusColor: 'bg-amber-500 text-white',
    period: 'June - August',
    progress: 25,
    peak: 'Mid-July',
    info: 'Est. Arrival: June 20th'
  },
  {
    name: 'Broad Beans',
    status: 'Ready Soon',
    statusColor: 'bg-amber-500 text-white',
    period: 'June - July',
    progress: 85,
    peak: 'Late June',
    info: 'Check daily'
  }
];

export function PYO() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7"
          >
            <span className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4 block font-semibold">Pick Your Own</span>
            <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight font-bold tracking-tighter">
              Nature's <br />Calendar
            </h1>
            <p className="mt-8 text-xl text-on-surface-variant max-w-xl font-serif italic">
              Harvest the very best of Norfolk with your own hands. From our famous strawberries to seasonal beans and sunflowers, there's always something fresh to gather.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 border-8 border-white">
              <img 
                className="w-full h-full object-cover" 
                src={getAssetPath('/images/strawberry-fields.png')} 
                alt="Strawberries in field"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Tracker Integration */}
      <section className="px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-32">
               <h2 className="font-headline text-4xl text-primary mb-6">Real-Time Field Status</h2>
               <p className="text-on-surface-variant italic font-serif leading-relaxed mb-8">
                  Our fields change daily. Check here for the latest updates on what's open and ready for picking before you visit.
               </p>
               <div className="p-6 bg-secondary-fixed rounded-2xl italic font-serif text-primary border border-primary/5">
                  "The best time to pick is early morning when the fruit is still cool from the night air."
               </div>
            </div>
            <div className="lg:col-span-8">
               <PYOTracker />
            </div>
         </div>
      </section>

      {/* Detailed Availability */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-30"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="font-headline text-4xl text-primary">Seasonal Availability Guide</h2>
            <p className="font-body text-sm uppercase tracking-widest text-outline">Updated Weekly</p>
          </div>

          <div className="space-y-6">
            {crops.map((crop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                  <div className="md:col-span-1">
                    <h3 className="font-headline text-2xl text-primary">{crop.name}</h3>
                    <div className={`mt-3 inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${crop.statusColor} shadow-sm`}>
                      {crop.status}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="h-3 bg-surface-container-low rounded-full overflow-hidden relative shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${crop.progress}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="absolute inset-y-0 left-0 bg-secondary rounded-full"
                      />
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-outline uppercase tracking-[0.2em]">
                      <span>{crop.period.split(' - ')[0]}</span>
                      <span className="text-secondary">{crop.peak}</span>
                      <span>{crop.period.split(' - ')[1]}</span>
                    </div>
                  </div>
                  <div className="md:col-span-1 text-right">
                    <button className="text-primary font-bold border-b-2 border-secondary/30 hover:border-secondary transition-all italic font-serif flex items-center gap-2 ml-auto group">
                      {crop.info} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="font-headline text-5xl text-primary leading-tight">A Simple Guide <br />to Gathering</h2>
            <p className="mt-6 text-on-surface-variant text-lg italic font-serif leading-relaxed">We believe in slow living and high quality. Here is how we ensure the best experience for our visitors and our crops.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Grab Your Punnets', desc: 'Visit the field kiosk to collect your clean, recyclable punnets and get a quick orientation.', color: 'bg-primary-fixed' },
              { num: '02', title: 'Pick With Care', desc: 'Look for fruit that is deep in color all the way to the stem. A gentle twist is all it takes.', color: 'bg-secondary-fixed' },
              { num: '03', title: 'Weight & Pay', desc: 'Bring your bounty back to the Farm Shop. We weigh by the kilo for a fair price.', color: 'bg-primary-container text-white' },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`space-y-6 ${i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-24' : ''}`}
              >
                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center font-headline text-2xl shadow-lg border-2 border-white ${step.color}`}>
                  {step.num}
                </div>
                <h4 className="font-headline text-xl text-primary">{step.title}</h4>
                <p className="text-on-surface-variant leading-relaxed italic font-serif">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="relative bg-primary rounded-[3rem] overflow-hidden min-h-[500px] flex items-center p-12 md:p-24 shadow-2xl">
          <div className="absolute inset-0">
            <img 
              className="w-full h-full object-cover opacity-50 scale-105" 
              src="/images/strawberry-fields.png" 
              alt="Norfolk fields"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-tight">Ready for a Day <br />in the Fields?</h2>
            <p className="text-white/90 text-xl mb-12 font-serif italic max-w-lg leading-relaxed">Check our daily opening times (10am - 5:30pm) and find your way to Rollesby. The harvest waits for no one.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-secondary text-white px-10 py-5 rounded-full font-bold hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all shadow-xl">
                Plan Your Visit
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-xl">
                View Farm Map
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
