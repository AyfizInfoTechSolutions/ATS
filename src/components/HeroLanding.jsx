import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroLanding = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Horizontal Blueprint Line */}
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gray-100" />
        {/* Vertical Blueprint Line */}
        <div className="absolute top-0 left-[40%] w-[1px] h-full bg-gray-100" />
        
        {/* Subtle Watermark */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-gray-50 uppercase leading-none select-none">
          AYFIZ
        </h2>
      </div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10 border-x border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          
          {/* LEFT: MAIN CONTENT */}
          <div className="lg:col-span-7 p-10 lg:p-20 flex flex-col justify-center border-r border-gray-100">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-12 h-[2px] bg-brand-accent" />
              <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">
                Global Supply Chain Solutions
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-7xl md:text-[140px] font-bold uppercase tracking-tighter leading-[0.8] text-brand-dark mb-10"
            >
             CONNECT<br />
              <span className="text-brand-primary italic">THRIVE.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-500 font-medium max-w-xl leading-relaxed mb-12 border-l-4 border-gray-100 pl-10"
            >
              Streamlining international trade through expertise, technology, and a network that spans across UAE, KSA, India, and the UK.
            </motion.p>

            <div className="flex flex-wrap gap-8 items-center">
              <Link 
                to="/products"
                className="bg-brand-dark text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 flex items-center gap-4 group"
              >
                View Inventory 
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-lg" />
              </Link>
              
              <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark hover:text-brand-accent transition-colors">
                <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                  <FiPlay fill="currentColor" size={14} />
                </span>
                Watch Our Process
              </button>
            </div>
          </div>

          {/* RIGHT: TECHNICAL CARD */}
          <div className="lg:col-span-5 p-10 lg:p-20 bg-gray-50/50 flex flex-col justify-between">
            
            <div className="space-y-12">
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6">// Efficiency</h4>
                  <div className="flex items-baseline gap-4">
                     <span className="text-6xl font-bold tracking-tighter text-brand-dark">98.4</span>
                     <span className="text-xl font-bold text-brand-accent">%</span>
                  </div>
                  <p className="text-xs uppercase font-black tracking-widest text-gray-400 mt-2">Delivery Success Rate</p>
               </div>

               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6">// Presence</h4>
                  <div className="flex flex-wrap gap-3">
                    {["UAE", "KSA", "INDIA", "UK"].map(location => (
                      <span key={location} className="px-4 py-2 border border-gray-200 text-[10px] font-black tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all cursor-default">
                        {location}
                      </span>
                    ))}
                  </div>
               </div>
            </div>

            <div className="mt-20 p-8 bg-white border border-gray-100 shadow-xl relative group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-brand-accent opacity-20" />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Latest Update</p>
                <h5 className="text-lg font-bold uppercase tracking-tight text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                  Expanded Warehousing in Dubai Logistics City.
                </h5>
                <Link to="/blog" className="text-[10px] font-black uppercase tracking-widest text-brand-primary border-b border-brand-primary pb-1">
                  Read Announcement
                </Link>
            </div>

          </div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-[-90deg] translate-y-10 text-gray-400">Scroll</span>
        <div className="w-[1px] h-20 bg-gray-100 relative">
          <motion.div 
            animate={{ y: [0, 80] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-0 left-0 w-full h-8 bg-brand-accent" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;