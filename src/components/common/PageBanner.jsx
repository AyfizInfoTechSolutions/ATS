import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgVideo from "../../assets/banner.mp4"; // Import your video

const PageBanner = ({ title = "Page Title", path = "Home" }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative w-full h-[45vh] min-h-[400px] lg:h-[65vh] flex items-center overflow-hidden bg-[#020617] pt-20">
      {/* Background Infrastructure */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.1] z-20" // Increased Z-index to stay above video
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
        
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/50 to-[#020617] z-10" />
          
          {/* Video Implementation */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale brightness-50 scale-110"
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute right-[-5%] top-[-10%] w-[50%] h-[120%] bg-brand-primary rounded-full blur-[120px] z-10"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-8 shadow-2xl"
        >
          <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">{path}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_10px_#3b82f6]" />
          <span className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase">{title}</span>
        </motion.div>

        <div className="flex flex-wrap pointer-events-none">
          {title.split("").map((char, index) => (
            <div key={index} className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block text-6xl md:text-7xl [@media(max-width:768px)]:text-3xl  [@media(max-width:1028px)_and_(min-width:801px)]:text-8xl lg:text-[8rem] font-black leading-none tracking-tighter ${
                  index === 0 ? "text-brand-primary" : "text-white"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 1, duration: 1 }}
          className="h-1.5 bg-gradient-to-r from-brand-primary to-transparent mt-6 rounded-full"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </div>
    </div>
  );
};

export default PageBanner;