import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] bg-brand-dark flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Massive ghost number */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 select-none">
          {progress}%
        </span>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden mb-8">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          
          <h2 className="text-white font-black uppercase tracking-[0.8em] text-[10px]">
            System.Initialize // <span className="text-brand-accent">Ayfiz</span>
          </h2>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/5" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/5" />
    </motion.div>
  );
};

export default LoadingPage;