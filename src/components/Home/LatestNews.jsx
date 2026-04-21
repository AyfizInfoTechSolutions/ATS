import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const posts = [
    {
      date: "20 JAN",
      author: "Sultan Ahmed",
      title: "Trends Shaping the Import-Export Industry",
      desc: "Explore emerging trends including digitalization and green shipping across Africa.",
      img: "http://googleusercontent.com/image_collection/image_retrieval/13421306354425646308_2" 
    },
    {
      date: "15 JAN",
      author: "Muhammed Ali",
      title: "Tips for Hassle-Free Shipping",
      desc: "Learn how to navigate customs regulations and documentation for smooth delivery.",
      img: "http://googleusercontent.com/image_collection/image_retrieval/15455011910706436157_2"
    },
    {
      date: "10 JAN",
      author: "Zayd bin Malik",
      title: "Why Partnering with Us is Key",
      desc: "Discover how our global network simplifies your international trade operations.",
      img: "http://googleusercontent.com/image_collection/image_retrieval/7863628542450300503_1"
    },
  ];

  return (
    <section className="max-w-8xl mx-auto border-x border-gray-100 pt-16 bg-white relative">
      
      {/* SECTION HEADER */}
      <div className="px-10 lg:px-20 mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-brand-accent" />
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Insights & Updates</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold uppercase tracking-tighter text-brand-dark leading-none">
            LATEST <span className="text-brand-primary italic">NEWS.</span>
          </h2>
        </div>
        <Link to="/blog" className="text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-brand-accent pb-2 hover:text-brand-accent transition-all">
          Explore All Posts
        </Link>
      </div>

      {/* NEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-100">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-12 lg:p-16 border-r border-gray-100 last:border-r-0 overflow-hidden cursor-pointer"
          >
            {/* BACKGROUND REVEAL ON HOVER */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 scale-110 group-hover:scale-100 transition-all duration-700 pointer-events-none">
              <img src={post.img} alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative z-10">
              {/* DATE & AUTHOR */}
              <div className="flex flex-col mb-10">
                <span className="text-4xl font-black tracking-tighter text-gray-100 group-hover:text-brand-accent transition-colors duration-500">
                  {post.date}
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <span className="w-6 h-[1px] bg-brand-accent" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-dark">
                    BY {post.author}
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-brand-dark group-hover:translate-x-2 transition-transform duration-300 min-h-[64px]">
                {post.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {post.desc}
              </p>

              {/* BUTTON */}
              <div className="pt-8 border-t border-gray-50 group-hover:border-brand-accent transition-colors">
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark group-hover:text-brand-accent transition-all">
                  Read Article <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* BOTTOM ACCENT BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-brand-accent transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;