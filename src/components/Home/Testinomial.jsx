import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const feedback = [
    {
      name: "Mostfa Kalarod",
      company: "ERD Improvers, Tanzania",
      text: "Mychus Interfurn has been instrumental in our global expansion. Their expert consultancy and efficient trade solutions streamlined our import/export processes.",
      img: "https://via.placeholder.com/150", // Replace with image_9dc20c.png face 1
    },
    {
      name: "Andreas Hugi",
      company: "Swiss Refines",
      text: "Working with Mychus Interfurn has been a pleasure. Their knowledge of customs regulations and proactive approach have saved us time and money.",
      img: "https://via.placeholder.com/150", // Replace with image_9dc20c.png face 2
    },
  ];

  return (
    <section className="max-w-8xl mx-auto border-x border-gray-100 pt-16 bg-white relative overflow-hidden">
      
      {/* BACKGROUND DECORATION - Vertical Text */}
      <div className="absolute top-0 right-0 h-full flex items-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vh] font-black uppercase tracking-tighter rotate-90 origin-bottom-right translate-x-20">
          RELIABILITY
        </span>
      </div>

      <div className="px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Side: Strategic Heading */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[2px] bg-brand-accent"></span>
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">
              Verified Partnerships
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] text-brand-dark mb-10">
            WHAT PEOPLE <br /> 
            <span className="text-brand-primary italic">SAY.</span>
          </h2>
          
          <div className="relative p-8 bg-gray-50 border-r-4 border-brand-accent group">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 leading-relaxed">
              Trusted by global trade partners across <span className="text-brand-dark">4 continents</span> and <span className="text-brand-dark">12+ industrial sectors</span>.
            </p>
            {/* Architectural corner detail */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-accent/20" />
          </div>
        </div>

        {/* Right Side: High-End Testimonial Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100">
          {feedback.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-12 border-r border-gray-100 last:border-r-0 hover:bg-gray-50/30 transition-all duration-700 group relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-accent group-hover:w-full transition-all duration-700" />
              
              {/* Star Rating - Technical Style */}
              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors rotate-45" />
                ))}
              </div>

              <div className="relative">
                <span className="absolute -top-6 -left-4 text-6xl font-black text-gray-100 select-none group-hover:text-brand-accent/10 transition-colors">
                  “
                </span>
                <p className="text-gray-500 font-medium leading-relaxed mb-12 relative z-10 italic">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative">
                  {/* Portrait with Frame Effect */}
                  <div className="absolute -inset-2 border border-brand-accent/0 group-hover:border-brand-accent/10 transition-all rounded-full" />
                  <img
                    src={item.img}
                    className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ring-4 ring-white"
                    alt={item.name}
                  />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-brand-dark text-lg leading-none mb-2">
                    {item.name}
                  </h4>
                  <p className="text-[9px] font-black text-brand-accent uppercase tracking-widest">
                    // {item.company}
                  </p>
                </div>
              </div>

              {/* Decorative ID Number */}
              <span className="absolute bottom-6 right-8 text-[10px] font-black text-gray-200 uppercase tracking-widest">
                REF_0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;