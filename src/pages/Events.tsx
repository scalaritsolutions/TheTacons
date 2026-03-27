import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { EventBooking } from '../components/EventBooking';

const events = [
  {
    title: 'EasterFest at The Tacons',
    date: 'April 12 - 14, 2026',
    time: '10:00am - 4:00pm',
    desc: 'Join us for our annual Easter celebration! Egg hunts in the orchard, meet the farm animals, and seasonal treats from the shop.',
    image: '/images/easterfest-banner.png'
  },
  {
    title: 'Strawberry Festival',
    date: 'June 21, 2026',
    time: '9:00am - 6:00pm',
    desc: 'Celebrating the peak of strawberry season. Live music, strawberry cream teas, and the best picking of the year.',
    image: '/images/strawberry-festival.png'
  },
  {
    title: 'Harvest Supper',
    date: 'September 15, 2026',
    time: '7:00pm - 10:00pm',
    desc: 'An intimate long-table dinner in the fields, featuring a multi-course menu crafted entirely from our own harvest.',
    image: '/images/harvest-supper.png'
  }
];

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24">
      <EventBooking 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
        eventTitle={selectedEvent || ''} 
      />

      <section className="px-6 md:px-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Farm Gatherings</span>
          <h1 className="font-headline text-6xl text-primary mb-8">What's On</h1>
          <p className="text-on-surface-variant text-xl italic font-serif leading-relaxed">
            From seasonal festivals to educational workshops, our farm is a place for the community to gather and celebrate the land.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="space-y-32">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center group`}
            >
              <div className="md:w-1/2 relative">
                <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-fixed rounded-2xl -z-10 shadow-lg group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>
              <div className="md:w-1/2 space-y-8">
                <div className="flex items-center gap-4 text-secondary font-bold uppercase tracking-[0.2em] text-xs bg-secondary/5 self-start px-4 py-2 rounded-full">
                  <Calendar size={16} /> {event.date}
                </div>
                <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight">{event.title}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed italic font-serif opacity-90">
                  {event.desc}
                </p>
                <div className="flex items-center gap-6 text-on-surface-variant italic font-serif">
                   <div className="flex items-center gap-2"><Clock size={16} /> {event.time}</div>
                   <div className="flex items-center gap-2"><MapPin size={16} /> The Orchard</div>
                </div>
                <button 
                  onClick={() => setSelectedEvent(event.title)}
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-container hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
                >
                  Check Pricing & Dates <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
