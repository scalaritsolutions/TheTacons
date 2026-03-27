import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBasket, Search, Star } from 'lucide-react';
import { FreshList } from '../components/FreshList';
import { getAssetPath } from '../utils/assets';

const categories = ['All', 'Vegetables', 'Fruit', 'Dairy', 'Bakery', 'Pantry'];

const products = [
  {
    name: 'Norfolk Asparagus',
    price: '£4.50',
    unit: 'bundle',
    category: 'Vegetables',
    image: getAssetPath('images/asparagus-hero.png'),
    tag: 'Best Seller'
  },
  {
    name: 'Early Strawberries',
    price: '£3.80',
    unit: 'punnet',
    category: 'Fruit',
    image: getAssetPath('images/strawberry-fields.png'),
    tag: 'Picked Today'
  },
  {
    name: 'Free Range Eggs',
    price: '£2.80',
    unit: '6 pack',
    category: 'Dairy',
    image: getAssetPath('images/eggs-local.png'),
    tag: 'Local'
  },
  {
    name: 'Artisan Sourdough',
    price: '£4.20',
    unit: 'loaf',
    category: 'Bakery',
    image: getAssetPath('images/artisan-bread.png'),
    tag: 'Fresh'
  },
  {
    name: 'Local Honey',
    price: '£6.50',
    unit: 'jar',
    category: 'Pantry',
    image: getAssetPath('images/honey-jar.png'),
    tag: 'Norfolk'
  },
  {
    name: 'Organic Carrots',
    price: '£1.50',
    unit: 'kg',
    category: 'Vegetables',
    image: getAssetPath('images/organic-carrots.png'),
    tag: 'Organic'
  }
];

export function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFreshListOpen, setIsFreshListOpen] = useState(false);

  return (
    <div className="pt-32 pb-24">
      <FreshList isOpen={isFreshListOpen} onClose={() => setIsFreshListOpen(false)} />

      {/* Header */}
      <section className="px-6 md:px-12 mb-16 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Farm to Table</span>
            <h1 className="font-headline text-6xl text-primary mb-6">The Farm Shop</h1>
            <p className="text-on-surface-variant text-xl italic font-serif leading-relaxed">
              Explore our curated selection of Norfolk's finest produce. Every item is hand-selected for quality and flavor.
            </p>
          </div>
          <button 
            onClick={() => setIsFreshListOpen(true)}
            className="bg-secondary-fixed text-primary px-10 py-5 rounded-full font-bold hover:bg-secondary-fixed-dim hover:scale-105 transition-all flex items-center gap-3 shadow-lg border border-primary/5"
          >
            <ShoppingBasket size={24} /> 
            <div className="text-left leading-none">
              <span className="block text-[10px] uppercase tracking-widest mb-1">Live Updates</span>
              <span className="text-lg">Today's Fresh List</span>
            </div>
          </button>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 md:px-12 mb-12 max-w-screen-2xl mx-auto">
        <div className="bg-surface-container-low p-4 rounded-[2rem] flex flex-wrap items-center justify-between gap-6 border border-primary/5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all text-sm ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-14 pr-8 py-4 bg-surface-container-lowest rounded-full border border-primary/5 outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-64 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.filter(p => activeCategory === 'All' || p.category === activeCategory).map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-surface-container-lowest rounded-[2.5rem] overflow-hidden border border-primary/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="aspect-square relative overflow-hidden bg-surface-container-low">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary shadow-sm">
                  {product.tag}
                </div>
                <button className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-container">
                  <ShoppingBasket size={24} />
                </button>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1 block">{product.category}</span>
                    <h3 className="font-headline text-2xl text-primary">{product.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-headline text-2xl text-primary">{product.price}</p>
                    <p className="text-xs text-outline italic">per {product.unit}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-primary/5 flex items-center justify-between">
                   <div className="flex gap-1 text-secondary">
                      {[1,2,3,4,5].map(star => <Star key={star} size={12} fill="currentColor" />)}
                   </div>
                   <button className="text-primary font-bold text-sm italic font-serif hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">
                      View Details
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
