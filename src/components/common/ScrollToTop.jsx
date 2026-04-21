import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 cursor-pointer group"
        >
          <div className="relative w-14 h-14 bg-brand-dark flex flex-col items-center justify-center overflow-hidden border border-white/10 group-hover:bg-brand-primary transition-all duration-500">
            <motion.div 
              animate={{ y: [0, -40, 40, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FiArrowUp className="text-white text-xl" />
            </motion.div>
            <div className="absolute inset-0 border border-brand-accent scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
          </div>
          <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-black uppercase tracking-widest text-brand-dark opacity-0 group-hover:opacity-100 transition-all">
            TOP
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;