import React, { useState } from 'react';
import { getAssetPath } from '../utils/assets';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Sprout, Calendar, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FreshList } from '../components/FreshList';

export function Home() {
  const [isFreshListOpen, setIsFreshListOpen] = useState(false);

  return (
    <div className="pt-32">
      <FreshList isOpen={isFreshListOpen} onClose={() => setIsFreshListOpen(false)} />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7"
          >
            <span className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4 block font-semibold">Est. 1940 • Rollesby, Norfolk</span>
            <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight font-bold tracking-tighter">
              Field Fresh <br />
              <span className="italic font-normal">to your</span> Fork
            </h1>
            <p className="mt-8 text-xl text-on-surface-variant max-w-xl font-serif italic leading-relaxed">
              Discover the true taste of Norfolk. From our world-famous asparagus to sun-ripened strawberries, we bring the season's finest directly from our fields to your basket. Open daily 9am - 6pm.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-container hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg">
                Shop the Harvest <ArrowRight size={20} />
              </Link>
              <button 
                onClick={() => setIsFreshListOpen(true)}
                className="bg-surface-container-high text-primary px-10 py-4 rounded-full font-bold hover:bg-secondary/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-primary/5"
              >
                <ShoppingBasket size={20} /> Today's Fresh List
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 relative z-10 border-8 border-white">
              <img 
                className="w-full h-full object-cover" 
                src={getAssetPath('images/farm-shop-interior.png')}
                alt="The Tacons Farm Shop Interior"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-fixed rounded-2xl -z-10 flex items-center justify-center p-6 text-on-surface font-headline text-xl text-center italic shadow-lg">
              Harvested Daily in Norfolk
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-30"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">What's in Season?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto italic font-serif text-lg">
              The rhythm of our farm is dictated by the seasons. Here's what we're proud to offer right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Field-Fresh Veg', desc: 'Grown right here in Rollesby, harvested every morning for maximum flavor.', icon: Leaf },
              { title: 'Local Norfolk Produce', desc: 'Supporting our neighbors with local honey, jams, and artisanal breads.', icon: Sprout },
              { title: 'Seasonal Events', desc: 'From EasterFest to Pumpkin Picking, there is always something happening.', icon: Calendar },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm border border-primary/5 group transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed italic font-serif opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Highlight */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <img 
              src={getAssetPath('images/asparagus-hero.png')}
              alt="Fresh Rollesby Asparagus" 
              className="rounded-[3rem] shadow-2xl rotate-[-2deg] border-8 border-white"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Seasonal Spotlight</span>
            <h2 className="font-headline text-5xl text-primary leading-tight mb-6">Our Famous <br />Rollesby Asparagus</h2>
            <p className="text-on-surface-variant text-xl leading-relaxed mb-8 italic font-serif">
              Tender, flavorful, and only available for a short window. Our asparagus is a local legend, grown in the unique sandy soils of Norfolk.
            </p>
            <Link to="/shop" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-flex items-center gap-2 group text-lg">
              Explore our full harvest <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
