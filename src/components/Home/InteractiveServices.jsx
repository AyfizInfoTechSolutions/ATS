import React from 'react';
import { motion } from 'framer-motion';

const InteractiveServices = () => {
  const services = [
  { 
    title: "Integrated Trade Operations", 
    desc: "Precision in Global Flow. We manage the full lifecycle of import and export operations, eliminating friction and ensuring smooth, compliant movement across borders." 
  },
  { 
    title: "Strategic Market Broking", 
    desc: "Asset Access & Alignment. We provide structured representation across international markets, helping you secure assets and manage cross-border transactions with clarity and control." 
  },
  { 
    title: "Expansion Architecture", 
    desc: "Intelligence for New Markets. We design market entry strategies that navigate regulatory environments and establish a stable, scalable presence in new regions." 
  },
  { 
    title: "Procurement Intelligence", 
    desc: "Validated Global Sourcing. We build reliable supply chains by identifying, vetting, and onboarding suppliers who consistently meet your quality and performance standards." 
  },
  { 
    title: "Infrastructure & Velocity", 
    desc: "Warehousing & Distribution. We support your supply chain with accurate inventory management and efficient distribution networks that keep operations moving without delay." 
  },
  { 
    title: "Regional Trade Gateway", 
    desc: "UAE · KSA · IND · UK. We operate across key trade corridors in the Middle East, Europe, and Asia, combining local expertise with disciplined execution." 
  },
];

  return (
    <section className="max-w-8xl mx-auto border-x border-gray-100 pt-32 bg-brand-dark text-white relative overflow-hidden">
      
      {/* BACKGROUND INTERACTIVE ELEMENT: Follows the "Technical" vibe */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.02] font-black text-[200px] leading-none select-none pointer-events-none">
        SERVICE
      </div>

      <div className="px-10 lg:px-20 [@media(max-width:768px)]:px-4 mb-20 relative z-10 flex flex-col lg:flex-row justify-between items-end gap-10">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-brand-accent"></span> // Technical Solutions
          </motion.p>
          <h2 className="text-6xl [@media(max-width:768px)]:text-5xl font-bold uppercase tracking-tighter leading-[0.85]">
            OUR <span className="text-brand-primary italic">TRADE SYSTEM.</span>
          </h2>
        </div>
        <div className="hidden lg:block text-right">
          <span className="text-[10px] font-black uppercase tracking-[1em] text-white/20">
            EST. 2026 / GLOBAL NETWORK
          </span>
        </div>
      </div>

      {/* THE GRID: With Advanced Interaction */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-12 lg:p-16 border-r border-b border-white/10 overflow-hidden cursor-pointer bg-transparent transition-all duration-700"
          >
            {/* LAYER 1: THE SCANNER EFFECT (Animated on Hover) */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out z-0" />

            {/* LAYER 2: THE BACKGROUND IMAGE (Subtle parallax) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0">
               <img src="http://googleusercontent.com/image_collection/image_retrieval/13421306354425646308_2" alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            </div>

            <div className="relative z-10">
              {/* TOP UI ELEMENT */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-[2px] bg-brand-accent group-hover:w-20 transition-all duration-500" />
                <span className="text-4xl font-black text-white/5 group-hover:text-brand-accent/40 transition-colors duration-500">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h4>
              
              <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-white transition-colors duration-500 mb-10">
                {service.desc}
              </p>

              {/* INTERACTIVE CTA */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-0 bg-brand-accent group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 text-brand-accent">
                  Initialize Request
                </span>
              </div>
            </div>

            {/* DECORATIVE CORNER - Blueprint Style */}
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/0 group-hover:border-brand-accent transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveServices;