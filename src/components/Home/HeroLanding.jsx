import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiPlay, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import bgVideo from "../../assets/bg-abs.mp4";
const HeroLanding = () => {
  const { scrollY } = useScroll();
  
  // Parallax and Scale transforms for that deep cinematic feel
  const yGhostText = useTransform(scrollY, [0, 500], [0, 100]);
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden selection:bg-brand-accent selection:text-white">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blueprint Grid Lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gray-50" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gray-50" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gray-50" />
        
        {/* Massive Ghost Typography */}
        <motion.h2 
          style={{ y: yGhostText }}
          className="absolute top-[15%] left-[-5%] text-[35vw] font-black text-gray-50 uppercase leading-none select-none"
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
          
          {/* LEFT COLUMN: BRAND MESSAGING */}
          <div className="lg:col-span-7 flex flex-col justify-center py-20 [@media(max-width:768px)]:py-4 lg:pr-20">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-brand-dark flex items-center justify-center shadow-sm">
                    <FiGlobe className="text-[10px] text-brand-accent" />
                  </div>
                ))}
              </div>
              <span className="text-brand-accent font-black uppercase tracking-[0.5em] text-[10px] bg-brand-accent/5 px-4 py-1.5 rounded-full">
                Unified Logistics Protocol
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl [@media(max-width:768px)]:text-5xl md:text-[78px] xl:text-[110px] font-bold uppercase tracking-tighter leading-[0.82] text-brand-dark mb-12"
            >
              SOURCE.  <br />
              <span className="text-brand-primary italic opacity-90">EXECUTE.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="relative mb-16 [@media(max-width:768px)]:mb-4 ">
              <p className="text-xl md:text-2xl  text-gray-500 font-medium max-w-xl [@media(min-width:1020px)_and_(max-width:1324px)]:w-[400px]
              
              
               [@media(max-width:1058px)]:pl-4
              leading-relaxed pl-12 border-l-2 border-brand-accent/20">
                Revolutionizing <span className="text-brand-dark font-bold">global trade</span> through high-performance supply chain networks across Asia and Europe.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center">
              <Link 
                to="/products"
                className="relative overflow-hidden bg-brand-dark text-white px-14 py-7 text-[11px] font-black uppercase tracking-[0.3em] group shadow-2xl shadow-brand-dark/20"
              >
                <span className="relative z-10 flex items-center gap-4 transition-transform group-hover:-translate-y-1">
                  Explore Inventory <FiArrowUpRight className="text-xl transition-transform group-hover:rotate-45" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-brand-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-expo"
                />
              </Link>
              
              <button className="flex items-center gap-5 text-[11px] font-black uppercase tracking-[0.3em] text-brand-dark group">
                <span className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all duration-700">
                  <FiPlay fill="currentColor" size={16} />
                </span>
                Watch Process
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VIDEO COMPOSITE */}
          <div className="lg:col-span-5 relative flex flex-col justify-end pb-20 mt-12 lg:mt-0">
            
            {/* VIDEO CONTAINER WITH MASK */}
            <div className="absolute top-0 right-0 w-full lg:w-[130%] h-[60vh] lg:h-[85%] z-0 overflow-hidden rounded-bl-[120px] lg:rounded-bl-[240px] bg-brand-dark group">
              <motion.video 
                style={{ scale: videoScale }}
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              >
                 <source src={bgVideo} type="video/mp4" />
              </motion.video>
              
              {/* Overlay for glass effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>

            {/* FLOATING DATA OVERLAYS */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="relative z-10 grid grid-cols-2 gap-4 lg:pr-10 "
            >
              <div className="bg-white/90 backdrop-blur-2xl p-10  [@media(max-width:768px)]:p-6 border-t-4 border-brand-accent shadow-2xl">
                 <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Delivery Rate</h4>
                 <div className="text-5xl [@media(max-width:768px)]:text-3xl font-bold tracking-tighter text-brand-dark">98<span className="text-brand-accent">.4</span></div>
                 <p className="text-[9px]  [@media(max-width:768px)]:text-[7px] font-bold
                  text-gray-400 mt-2 uppercase tracking-[0.2em]">Validated_Success</p>
              </div>
              <div className="bg-brand-dark/95 backdrop-blur-2xl p-10 [@media(max-width:768px)]:p-6 shadow-2xl">
                 <h4 className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">Nodes Active</h4>
                 <div className="text-5xl [@media(max-width:768px)]:text-3xl font-bold tracking-tighter text-white">24<span className="text-brand-accent">/7</span></div>
                 <p className="text-[9px] [@media(max-width:768px)]:text-[7px] font-bold
                  text-white/30 mt-2 uppercase tracking-[0.2em]">Global_Network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* --- FOOTER AUTO-TICKER --- */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-dark py-6 border-t [@media(max-width:768px)]:py-8 border-white/5 overflow-hidden z-20">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
           {[1, 2, 3, 4, 5].map(i => (
             <div key={i} className="flex items-center gap-10">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">End to End supply chains</span>
                <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Cross-Border trade</span>
                <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">High-Performance logistics</span>
                <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Real-Time Inventory</span>
                <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Strategic Global Sourcing</span>
                <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
             </div>
           ))}
        </motion.div>
      </div>

      {/* --- VERTICAL PROGRESS INDICATOR --- */}
     

    </section>
  );
};

export default HeroLanding;