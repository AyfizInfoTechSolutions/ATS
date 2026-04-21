import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiPlay, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroLanding = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for that "cinematic" feel
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden selection:bg-brand-accent selection:text-white">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gray-50" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gray-50" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gray-50" />
        
        {/* Massive Ghost Typography */}
        <motion.h2 
          style={{ y: y1 }}
          className="absolute top-[20%] left-[-5%] text-[40vw] font-black text-gray-50/50 uppercase leading-none"
        >
          AYFIZ
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1600px] w-full mx-auto relative z-10 px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[90vh] items-stretch">
          
          {/* LEFT: CONTENT ENGINE */}
          <div className="lg:col-span-7 flex flex-col justify-center py-20 lg:pr-20">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                    <FiGlobe className="text-[10px] text-brand-accent" />
                  </div>
                ))}
              </div>
              <span className="text-brand-accent font-black uppercase tracking-[0.5em] text-[10px] bg-brand-accent/5 px-3 py-1">
                Unified Global Logistics
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-[120px] xl:text-[150px] font-bold uppercase tracking-tighter leading-[0.85] text-brand-dark mb-12"
            >
             CONNECT.<br />
              <span className="text-brand-primary italic">THRIVE.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="relative mb-16">
              <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-xl leading-relaxed pl-12 border-l-[1px] border-brand-accent/30">
                Bridging the gap between <span className="text-brand-dark underline decoration-brand-accent underline-offset-4">European precision</span> and <span className="text-brand-dark">Asian scale</span>. 
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-10 items-center">
              <Link 
                to="/products"
                className="relative overflow-hidden bg-brand-dark text-white px-16 py-8 text-[11px] font-black uppercase tracking-[0.3em] group"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Explore Ecosystem <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-500" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-brand-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"
                />
              </Link>
              
              <button className="flex items-center gap-5 text-[11px] font-black uppercase tracking-[0.3em] text-brand-dark group">
                <span className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-brand-dark/20">
                  <FiPlay fill="currentColor" size={16} />
                </span>
                Our Philosophy
              </button>
            </motion.div>
          </div>

          {/* RIGHT: VISUAL & DATA COMPOSITE */}
          <div className="lg:col-span-5 relative flex flex-col justify-end pb-20">
            {/* The Cinematic Parallax Image */}
            <div className="absolute top-0 right-0 w-full lg:w-[120%] h-[70vh] lg:h-[80%] z-0 overflow-hidden rounded-bl-[100px] lg:rounded-bl-[200px]">
              <motion.img 
                style={{ scale }}
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* DATA OVERLAY CARDS */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="bg-white/80 backdrop-blur-xl p-10 border-t-4 border-brand-accent shadow-2xl">
                 <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Uptime</h4>
                 <div className="text-5xl font-bold tracking-tighter text-brand-dark">99<span className="text-brand-accent">.9</span></div>
                 <p className="text-[8px] font-bold text-gray-400 mt-2 uppercase tracking-widest">Network Stability</p>
              </div>
              <div className="bg-brand-dark p-10 shadow-2xl">
                 <h4 className="text-[10px] font-black text-gray-200/50 uppercase tracking-widest mb-4">Global Reach</h4>
                 <div className="text-5xl font-bold tracking-tighter text-white">12<span className="text-brand-accent">+</span></div>
                 <p className="text-[8px] font-bold text-gray-200/50 mt-2 uppercase tracking-widest">Strategic Hubs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* FOOTER TICKER (The Responsive Finisher) */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-dark py-6 border-t border-white/5 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
           {[1,2,3,4].map(i => (
             <div key={i} className="flex items-center gap-8">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Dubai Integrated Hub</span>
                <span className="w-2 h-2 bg-brand-accent rounded-full" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">London Strategic Port</span>
                <span className="w-2 h-2 bg-brand-accent rounded-full" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Mumbai Tech Corridor</span>
             </div>
           ))}
        </motion.div>
      </div>

      {/* SIDE SCROLL PROGRESS */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 items-center mix-blend-difference">
         <div className="text-[10px] font-black text-white uppercase tracking-widest rotate-90 mb-10">01 / Home</div>
         <div className="w-[2px] h-32 bg-white/20 relative">
            <motion.div 
              style={{ scaleY: scrollY }}
              className="absolute top-0 left-0 w-full bg-brand-accent origin-top"
            />
         </div>
      </div>

    </section>
  );
};

export default HeroLanding;