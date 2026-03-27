import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface EventBookingProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

export function EventBooking({ isOpen, onClose, eventTitle }: EventBookingProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(step + 1);
  const reset = () => {
    setStep(1);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      nextStep();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            onClick={reset}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-primary/5"
          >
            <button onClick={reset} className="absolute top-6 right-6 text-primary hover:bg-primary/5 p-2 rounded-full transition-colors z-10">
              <X size={24} />
            </button>

            <div className="p-10">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Step 1 of 3</span>
                    <h3 className="font-headline text-3xl text-primary">Book {eventTitle}</h3>
                    <p className="text-on-surface-variant italic font-serif leading-relaxed">Choose your preferred date and time to join us on the farm.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-bold uppercase tracking-wider text-primary">Choose Date</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Sat 12th', 'Sun 13th', 'Mon 14th'].map(date => (
                        <button key={date} className="p-4 rounded-xl border border-primary/10 hover:border-secondary hover:bg-secondary/5 font-semibold text-primary transition-all text-center">
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button onClick={nextStep} className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-lg">
                    Next Step <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Step 2 of 3</span>
                    <h3 className="font-headline text-3xl text-primary">Guest Details</h3>
                    <p className="text-on-surface-variant italic font-serif leading-relaxed">Tell us how many of you are coming and provide your contact info.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-primary">Number of Guests</label>
                      <input type="number" defaultValue="2" min="1" className="w-full p-4 rounded-xl bg-surface-container-low border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-primary">Full Name</label>
                      <input type="text" placeholder="Your name" className="w-full p-4 rounded-xl bg-surface-container-low border border-primary/10 focus:ring-2 focus:ring-primary/20 outline-none" required />
                    </div>
                    
                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-lg disabled:opacity-50">
                      {isSubmitting ? "Processing..." : "Confirm Booking"}
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="py-10 text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-xl">
                    <CheckCircle size={48} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-headline text-4xl text-primary">You're All Set!</h3>
                    <p className="text-on-surface-variant italic font-serif leading-relaxed text-lg">
                      Thank you for booking **{eventTitle}**. We've sent a confirmation email to your inbox. See you at the farm!
                    </p>
                  </div>
                  <button onClick={reset} className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg">
                    Back to Events
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
