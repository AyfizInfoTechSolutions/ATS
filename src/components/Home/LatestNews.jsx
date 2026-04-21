import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LatestNews = () => {
 const posts = [
  {
    id: "01",
    date: "20 JAN",
    author: "Sultan Ahmed",
    title: "Trends Shaping the Import-Export Industry",
    desc: "Explore emerging trends including digitalization and green shipping across Africa.",
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: "02",
    date: "15 JAN",
    author: "Muhammed Ali",
    title: "Tips for Hassle-Free Shipping",
    desc: "Learn how to navigate customs regulations and documentation for smooth delivery.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    date: "10 JAN",
    author: "Zayd bin Malik",
    title: "Why Partnering with Us is Key",
    desc: "Discover how our global network simplifies your international trade operations.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
  },
];
  return (
    <section className="max-w-8xl mx-auto border-x border-gray-100 pt-32 bg-white relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="px-10 lg:px-20 mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[1px] bg-brand-accent" />
            <span className="text-brand-accent font-black uppercase tracking-[0.5em] text-[10px]">Strategic Insights</span>
          </div>
          <h2 className="text-6xl font-bold uppercase tracking-[-0.05em] text-brand-dark leading-[0.85]">
            LATEST <br />
            <span className="text-brand-primary italic opacity-90">NEWS.</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/blog" className="group flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.3em] transition-all">
            <span className="border-b-2 border-brand-accent pb-1 group-hover:pr-6 transition-all duration-500">Explore All Posts</span>
            <FiArrowRight className="text-brand-accent text-xl group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* NEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100 px-16">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className="group relative p-12 lg:p-20 border-r border-b border-gray-100 last:border-r-0 overflow-hidden cursor-pointer bg-white min-h-[600px]"
          >
            {/* FULL COLOR -> GRAYSCALE IMAGE TRANSITION */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out filter grayscale-0 group-hover:grayscale group-hover:scale-110 group-hover:brightness-50"
              />
              {/* Overlay that darkens only on hover to make white text pop */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-colors duration-700 z-10" />
            </div>

            {/* GHOST NUMBERING */}
            <span className="absolute top-10 right-10 text-8xl font-black text-gray-100/20 group-hover:text-white/10 transition-colors duration-500 pointer-events-none italic z-20">
              {post.id}
            </span>

            <div className="relative z-20 h-full flex flex-col justify-between">
              <div>
                {/* DATE & METADATA */}
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-xs font-black tracking-widest text-brand-accent group-hover:text-white transition-colors">
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-brand-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-200">
                    {post.author}
                  </span>
                </div>

                {/* TITLE */}
                <h4 className="text-3xl font-bold uppercase tracking-tighter leading-tight mb-8 text-brand-primary group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                  {post.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm leading-relaxed mb-12 font-medium group-hover:text-gray-100 transition-colors">
                  {post.desc}
                </p>
              </div>

              {/* ACTION LINK */}
              <div className="mt-auto">
                <div className="flex items-center gap-4 group/btn">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-500 bg-white/10 backdrop-blur-sm">
                    <FiArrowRight className="text-brand-dark group-hover:text-white text-xl transition-all" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark group-hover:text-white transition-colors">
                    Read Article
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM ACCENT SLIDER */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-brand-accent group-hover:w-full transition-all duration-700 ease-out z-30" />
          </motion.div>
        ))}
      </div>

      {/* FOOTER TICKER */}
      <div className="h-24 bg-gray-50 border-t border-gray-100 flex items-center px-10 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[1,2,3,4,5,6,7,8].map(i => (
            <span key={i} className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
              Global Logistics Protocol // Node {i} // Verification Active
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;