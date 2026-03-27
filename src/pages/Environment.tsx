import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Recycle, Heart, Droplets, Sun } from 'lucide-react';

export function Environment() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-8"
          >
             <Leaf size={40} />
          </motion.div>
          <span className="text-secondary font-bold tracking-widest uppercase text-sm block">Our Sacred Trust</span>
          <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight font-bold tracking-tighter">
            Stewards <br />
            <span className="italic font-normal">of the Land</span>
          </h1>
          <p className="text-on-surface-variant text-xl italic font-serif leading-relaxed max-w-2xl mx-auto opacity-90">
            At The Tacons, we don't just farm the land; we nurture it. Our commitment to environmental harmony is woven into every furrow we plow.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto space-y-48">
        {/* Soil section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
               <Droplets size={16} /> Living Soil
            </div>
            <h2 className="font-headline text-5xl text-primary leading-tight">Biodiversity Beneath <br />Our Feet</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed italic font-serif opacity-80">
              Soil is a living, breathing community. We use crop rotation and natural cover cropping to build resilience without synthetic intervention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: 'Natural Nutrification', icon: Leaf },
                 { title: 'Minimal Tillage', icon: ShieldCheck },
                 { title: 'Wildlife Corridors', icon: Heart },
                 { title: 'Solar Powered', icon: Sun },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-primary/5">
                    <div className="text-secondary"><item.icon size={20} /></div>
                    <span className="font-headline text-primary">{item.title}</span>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: 5 }}
            whileInView={{ opacity: 1, rotate: 2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/asparagus-hero.png" 
                alt="Healthy Norfolk fields" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-fixed rounded-full -z-10 shadow-lg" />
          </motion.div>
        </div>

        {/* Zero waste section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl skew-x-1 border-8 border-white">
              <img 
                src="/images/strawberry-fields.png" 
                alt="Sustainability in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-1 md:order-2 space-y-8"
          >
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/5 rounded-full text-secondary text-xs font-bold uppercase tracking-widest">
               <Recycle size={16} /> Zero Waste
            </div>
            <h2 className="font-headline text-5xl text-primary leading-tight">Closing the Loop <br />in Rollesby</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed italic font-serif opacity-80">
              We are purging single-use plastics from our farm. Our PYO punnets are 100% biodegradable, and our shop celebrates "naked" produce that needs no wrapping.
            </p>
            <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                 <Recycle size={80} />
              </div>
              <p className="italic font-serif text-primary text-xl leading-relaxed relative z-10">
                "Our goal is simple: to leave this corner of Norfolk healthier than we found it for the next three generations."
              </p>
              <div className="mt-6 font-headline text-secondary">— The Tacon Family</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mt-48 px-6 md:px-12 max-w-screen-2xl mx-auto">
         <div className="bg-surface-container-high rounded-[4rem] p-16 md:p-24 text-center space-y-10 border border-primary/5 shadow-inner">
            <h2 className="font-headline text-5xl md:text-7xl text-primary">Join Our Mission</h2>
            <p className="text-on-surface-variant text-xl italic font-serif max-w-2xl mx-auto">
               Bring your own bags, pick with care, and help us preserve the beauty of our Norfolk home.
            </p>
            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold hover:bg-primary-container shadow-xl transition-all hover:scale-105 active:scale-95">
               Learn About Our Carbon Goals
            </button>
         </div>
      </section>
    </div>
  );
}
