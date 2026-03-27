import React from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, Package, TrendingUp, ShieldCheck, ClipboardList } from 'lucide-react';

const staffMembers = [
  { name: 'Charlie Tacon', role: 'Owner / Farm Manager', contact: '01493 740236' },
  { name: 'Emma Tacon', role: 'Retail & Events Manager', contact: 'office@thetacons.co.uk' },
  { name: 'David Smith', role: 'Head of Field Operations', status: 'In Fields' },
  { name: 'Sarah Jones', role: 'Shop Lead', status: 'At Counter' },
];

export function Internal() {
  return (
    <div className="pt-32 pb-24 bg-surface-container-lowest min-h-screen font-body">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block flex items-center gap-2">
              <ShieldCheck size={14} /> Staff-Only Internal Access
            </span>
            <h1 className="font-headline text-5xl text-primary">Farm Operations Hub</h1>
          </div>
          <div className="text-outline text-sm font-serif italic italic font-serif">
            Last Sync: Today 12:45 PM
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Dashboard Stats */}
          <div className="lg:col-span-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Today\'s Sales', value: '£2,450', icon: TrendingUp, color: 'text-green-600' },
                { label: 'PYO Visitors', value: '142', icon: Users, color: 'text-secondary' },
                { label: 'Active Orders', value: '18', icon: Package, color: 'text-primary' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-opacity-10 ${stat.color} bg-current`}>
                      <stat.icon size={24} />
                    </div>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-outline mb-1">{stat.label}</div>
                  <div className={`text-3xl font-headline ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-primary/5 shadow-sm">
              <h2 className="font-headline text-2xl text-primary mb-8 flex items-center gap-3">
                <Calendar size={24} /> Field Management Schedule
              </h2>
              <div className="space-y-6">
                {[
                  { field: 'Field 4 (Strawberries)', task: 'Morning Pick Complete', time: '08:00 AM', status: 'Ready for Public' },
                  { field: 'Field 9 (Asparagus)', task: 'Mechanical Harvest', time: '11:30 AM', status: 'In Progress' },
                  { field: 'The Orchard', task: 'Pre-Event Mowing', time: '02:00 PM', status: 'Scheduled' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-surface-container-lowest rounded-2xl border border-primary/5">
                    <div>
                      <div className="font-bold text-primary">{item.field}</div>
                      <div className="text-sm text-on-surface-variant font-serif italic">{item.task}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-outline">{item.time}</div>
                      <div className="text-xs font-bold text-secondary">{item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-primary p-10 rounded-[2.5rem] text-white shadow-xl">
              <h3 className="font-headline text-2xl mb-6 flex items-center gap-3">
                <ClipboardList size={24} /> Staff Roster
              </h3>
              <div className="space-y-6">
                {staffMembers.map((staff, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                    <div className="font-bold">{staff.name}</div>
                    <div className="text-xs text-white/70 italic font-serif">{staff.role}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1 opacity-80">{staff.contact || staff.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary-fixed p-10 rounded-[2.5rem] border border-primary/5">
               <h3 className="font-headline text-xl text-primary mb-4 italic font-serif">Owner's Note</h3>
               <p className="text-sm text-on-surface-variant font-serif italic leading-relaxed">
                 "Brilliant start to the asparagus season, everyone. Let's keep the quality high at the counter. Remember to check Field 4 irrigation before leaving tonight."
               </p>
               <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-primary">— C. Tacon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
