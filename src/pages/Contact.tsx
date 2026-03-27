import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Navigation } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Always Welcome</span>
              <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight font-bold tracking-tighter">Visit <br />the Farm</h1>
              <p className="mt-8 text-xl text-on-surface-variant max-w-xl font-serif italic leading-relaxed opacity-90">
                Whether you're visiting for our famous asparagus or a day of strawberry picking, we can't wait to see you in Rollesby.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">Location</h4>
                  <p className="text-on-surface-variant leading-relaxed italic font-serif opacity-80 text-sm">
                    The Grange, Rollesby, <br />
                    Great Yarmouth, Norfolk, NR29 5AJ
                  </p>
                </div>
              </div>

              <div className="space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">Shop Hours</h4>
                  <p className="text-on-surface-variant leading-relaxed italic font-serif opacity-80 text-sm">
                    Daily: 9am - 6pm <br />
                    PYO: 10am - 5:30pm
                  </p>
                </div>
              </div>

              <div className="space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">Direct Line</h4>
                  <p className="text-on-surface-variant text-lg font-headline text-primary">01493 740236</p>
                </div>
              </div>

              <div className="space-y-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">Email</h4>
                  <p className="text-on-surface-variant text-lg font-headline text-primary underline decoration-secondary/30">office@thetacons.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-container-low p-12 rounded-[3rem] border border-primary/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <MessageSquare size={120} />
            </div>
            <h3 className="font-headline text-4xl text-primary mb-10">Send a Note</h3>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Your Name</label>
                  <input type="text" className="w-full p-5 rounded-2xl bg-white border border-primary/5 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all" placeholder="E.g. James Smith" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input type="email" className="w-full p-5 rounded-2xl bg-white border border-primary/5 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all" placeholder="name@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">What is this regarding?</label>
                <select className="w-full p-5 rounded-2xl bg-white border border-primary/5 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all appearance-none cursor-pointer">
                  <option>General Harvest Enquiry</option>
                  <option>Pick Your Own Status</option>
                  <option>EasterFest & Events</option>
                  <option>Wholesale Opportunities</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Your Message</label>
                <textarea rows={5} className="w-full p-5 rounded-2xl bg-white border border-primary/5 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all" placeholder="How can we help you today?"></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-primary-container hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="h-[600px] bg-surface-container-high rounded-[4rem] overflow-hidden relative border-8 border-white shadow-2xl group">
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-center space-y-6 scale-90 group-hover:scale-100 transition-transform duration-700">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                   <Navigation size={32} />
                </div>
                <h4 className="font-headline text-3xl text-primary">Open in Maps</h4>
                <p className="text-on-surface-variant italic font-serif">NR29 5AJ, Rollesby, Norfolk</p>
                <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-secondary/90 transition-all">Get Directions</button>
             </div>
          </div>
          <img 
            src="/images/farm-shop-interior.png" 
            alt="Map location overview" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 paper-texture pointer-events-none opacity-20" />
        </div>
      </section>
    </div>
  );
}
