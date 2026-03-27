import React from 'react';
import { motion } from 'motion/react';
import { getAssetPath } from '../utils/assets';
import { History, Award, Heart, Users, Sprout, ArrowRight } from 'lucide-react';

export function Story() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm block">Our Heritage</span>
            <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight font-bold tracking-tighter">
              Rooted in <br />
              <span className="italic font-normal">Rollesby Since 1940</span>
            </h1>
            <p className="text-on-surface-variant text-xl italic font-serif leading-relaxed max-w-2xl mx-auto">
              Three generations of the Tacon family have been stewards of this land, growing with the seasons and serving the Norfolk community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 border-8 border-white">
              <img 
                src={getAssetPath('images/farm-shop-interior.png')} 
                alt="Original farm shop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-fixed rounded-full flex items-center justify-center p-6 text-primary font-headline text-lg text-center italic leading-tight shadow-xl border-4 border-white">
               A Legacy of Quality
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-6">
              <h2 className="font-headline text-5xl text-primary leading-tight">Grown by Hand, <br />Guided by Heritage</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed italic font-serif opacity-90">
                Farming is more than a business to us; it's a way of life. Every generation of the Tacon family has brought new ideas while staying true to the core values of hard work and respect for the Norfolk soil.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed italic font-serif opacity-90">
                Today, we combine traditional farming wisdom with modern sustainable practices. We are proud to be a part of the Norfolk agricultural community and to share the fruits of our labor with your family.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-primary/5">
              {[
                { label: 'Founded', value: '1940', icon: History },
                { label: 'Generations', value: '3rd', icon: Users },
                { label: 'Local Awards', value: '12+', icon: Award },
                { label: 'Happy Guests', value: '100k+', icon: Heart },
              ].map((stat, i) => (
                <div key={i} className="space-y-2 text-center group">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-3xl font-headline text-secondary leading-none">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-outline">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-32 relative overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-30"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline text-5xl text-primary">The Tacons Promise</h2>
            <p className="text-on-surface-variant italic font-serif text-lg">Values that have sustained us for over 80 years.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Quality First', desc: 'We never compromise. If it isn\'t good enough for our table, it isn\'t good enough for yours.' },
              { title: 'Community Pulse', desc: 'We support local producers and provide a space for our neighbors to connect and thrive.' },
              { title: 'Land Stewardship', desc: 'Protecting the Norfolk countryside for future generations is at the heart of everything we do.' },
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest p-12 rounded-[3.5rem] shadow-sm border border-primary/5 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-1 gap-1 bg-secondary mb-8 rounded-full" />
                <h3 className="font-headline text-3xl text-primary mb-6">{value.title}</h3>
                <p className="text-on-surface-variant leading-relaxed italic font-serif opacity-80">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
