import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WorkProcessAwesome = () => {
  // Array for steps
  const steps = [
    {
      id: "01",
      title: "Research & Planning",
      desc: "Thorough market research to identify trends and strategic opportunities tailored to your vertical.",
      tag: "// Analysis"
    },
    {
      id: "02",
      title: "Review & Launch",
      desc: "Final adjustments based on multi-channel feedback to ensure a polished, risk-free execution.",
      tag: "// Strategy"
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Executing the plan with high-efficiency resource allocation and constant performance monitoring.",
      tag: "// Execution"
    },
  ];

  return (
    <section className="max-w-8xl mx-auto border-x border-gray-100 py-40 bg-brand-dark text-white relative overflow-hidden">
      
      {/* 1. ANIMATED WATERMARK - Moves on scroll */}
      <motion.div 
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 p-10 opacity-[0.03] font-black text-[250px] leading-none select-none pointer-events-none"
      >
        FLOW
      </motion.div>

      <div className="px-10 lg:px-20 [@media(max-width:768px)]:px-8 relative z-10">
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 items-end gap-16">
          <div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8 overflow-hidden whitespace-nowrap"
            >
              <span className="w-12 h-[2px] bg-brand-accent flex-shrink-0" />
              <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">
                System Methodology / Execution
              </span>
            </motion.div>
            
            <h2 className="text-6xl [@media(max-width:768px)]:text-5xl font-bold uppercase tracking-tighter leading-[0.8]">
              How We <br /> 
              <span className="text-brand-primary italic">Deliver Value.</span>
            </h2>
          </div>
          
          <div className="lg:pb-4 relative">
            <p className="text-slate-400 text-sm uppercase tracking-widest leading-loose max-w-md border-l-2 border-brand-accent/20 pl-10 font-medium">
              A structured approach to global logistics ensuring precision at every node of the supply chain.
            </p>
            {/* Technical Detail */}
            <div className="absolute -bottom-10 right-0 text-[10px] font-mono text-white/10 uppercase tracking-widest hidden md:block">
              [ v1.0.4_methodology ]
            </div>
          </div>
        </div>

        {/* 2. THE GRID WITH MASK REVEALS */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 relative">
          
          {/* PROGRESS LINE - Animates across the top of the whole grid */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent origin-left z-20 shadow-[0_0_15px_rgba(255,98,53,0.5)]" 
          />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="p-12 lg:p-16 border-r border-white/10 last:border-r-0 hover:bg-white/[0.03] transition-all group relative cursor-crosshair overflow-hidden"
            >
              {/* HOVER GLOW EFFECT */}
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl rounded-full translate-y-20" />

              {/* STEP NUMBER - Outlined & Interactive */}
              <div className="flex justify-between items-start mb-16">
                 <div className="relative">
                   <span 
                     className="text-7xl font-black text-transparent transition-all duration-700 group-hover:text-brand-accent/20 group-hover:blur-[1px]" 
                     style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
                   >
                     {step.id}
                   </span>
                   {/* Ghost ID that slides out */}
                   <span className="absolute top-0 left-0 text-7xl font-black text-brand-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-2 transition-all duration-500">
                     {step.id}
                   </span>
                 </div>

                 <div className="flex flex-col items-end gap-2">
                   <span className="text-[9px] font-black text-brand-accent tracking-[0.3em] uppercase">{step.tag}</span>
                   <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-brand-accent group-hover:rotate-90 transition-all duration-500">
                     <div className="w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_10px_#ff6235]" />
                   </div>
                 </div>
              </div>

              {/* TITLE - Slide up effect */}
              <div className="overflow-hidden mb-6">
                <motion.h4 
                  whileInView={{ y: 0 }}
                  initial={{ y: 50 }}
                  transition={{ delay: idx * 0.3, duration: 0.5 }}
                  className="text-3xl font-bold uppercase tracking-tighter group-hover:text-brand-primary transition-colors"
                >
                  {step.title}
                </motion.h4>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed font-medium mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>

              {/* TECHNICAL FOOTER: Only visible on hover */}
              <div className="mt-auto flex items-center gap-6 opacity-20 group-hover:opacity-100 transition-all duration-500">
                <div className="flex gap-1">
                  <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 bg-brand-accent" />
                  <motion.div animate={{ height: [12, 4, 12] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 bg-brand-accent" />
                  <motion.div animate={{ height: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 bg-brand-accent" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">System_Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GRID LINES (SCROLL RESPONSIVE) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
    </section>
  );
};

export default WorkProcessAwesome;