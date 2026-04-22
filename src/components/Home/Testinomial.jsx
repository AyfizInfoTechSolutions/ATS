import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const feedback = [
    {
      name: "Mostfa Kalarod",
      company: "ERD Improvers, Tanzania",
      text: "Mychus Interfurn has been instrumental in our global expansion. Their expert consultancy and efficient trade solutions streamlined our import/export processes.",
      img: "https://i.pravatar.cc/150?u=mostfa",
    },
    {
      name: "Andreas Hugi",
      company: "Swiss Refines",
      text: "Working with Mychus Interfurn has been a pleasure. Their knowledge of customs regulations and proactive approach have saved us time and money.",
      img: "https://i.pravatar.cc/150?u=andreas",
    },
    {
      name: "Zayd bin Malik",
      company: "Gulf Logistics",
      text: "Their precision in handling documentation for the UAE market is unmatched. A true partner in modern trade.",
      img: "https://i.pravatar.cc/150?u=zayd",
    },
  ];

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % feedback.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + feedback.length) % feedback.length);
  };

  // Animation variants for the sliding effect
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="max-w-8xl mx-auto border-x border-gray-100 pt-32  bg-white relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-gray-900 h-full" />
        ))}
      </div>

      <div className="px-10 lg:px-20 relative z-10">
        
        {/* HEADER & NAV */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-20 h-[1px] bg-brand-accent"></span>
              <span className="text-brand-accent font-black uppercase tracking-[0.6em] text-[10px]">
                Global Endorsements
              </span>
            </div>
            <h2 className="text-6xl [@media(max-width:768px)]:text-4xl font-bold uppercase tracking-tighter leading-[0.8] text-brand-dark">
              VOICES OF <br /> 
              <span className="text-brand-primary italic">CONVICTION.</span>
            </h2>
          </div>

          {/* CUSTOM NAVIGATION */}
          <div className="flex gap-4">
            <button 
              onClick={prevStep}
              className="w-16 h-16 border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all group"
            >
              <FiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextStep}
              className="w-16 h-16 bg-brand-dark text-white flex items-center justify-center hover:bg-brand-primary transition-all group"
            >
              <FiChevronRight className="text-2xl group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* CAROUSEL AREA */}
        <div className="relative h-[500px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Quote Content */}
              <div className="lg:col-span-8">
                <div className="mb-1 text-brand-accent">
                   <span className="text-6xl font-serif">“</span>
                </div>
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-dark leading-tight italic">
                  {feedback[index].text}
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-end gap-6 text-right">
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden border-8 border-gray-50 shadow-xl">
                  <img
                    src={feedback[index].img}
                    className="w-full h-full object-cover"
                    alt={feedback[index].name}
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
                </div>
                <div className="text-right">
                  <h4 className="font-black uppercase tracking-tighter text-brand-dark text-2xl [@media(max-width:768px)]:text-xl leading-none mb-2">
                    {feedback[index].name}
                  </h4>
                  <p className="text-xs font-black text-brand-accent uppercase tracking-[0.2em]">
                    // {feedback[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TECHNICAL PROGRESS BAR */}
        <div className="mt-24 border-t border-gray-100 pt-10 flex items-center justify-between   [@media(max-width:768px)]:gap-8 [@media(max-width:768px)]:mt-42">
          <div className="flex gap-2 ">
            {feedback.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${i === index ? 'w-12 bg-brand-accent' : 'w-4 bg-gray-200'}`} 
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
            System_Status: Operational // Data_Set: 0{index + 1}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;