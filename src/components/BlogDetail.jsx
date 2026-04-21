import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBanner from './common/PageBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const BlogDetail = () => {
  const { id } = useParams();

  const post = {
    title: "The Pros And Cons Of Trading in Modern Logistics",
    category: "Logistics Strategy",
    date: "April 14, 2026",
    readTime: "8 min read",
    author: "Sevil Haslak",
    role: "Senior Logistics Strategist",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark font-sans antialiased">
      <PageBanner title="BLOG" path="Home" />

      {/* Header */}
      <header className="relative border-b border-gray-200">
        <div className="max-w-8xl mx-auto  px-16 flex flex-col lg:flex-row min-h-[60vh]">
          
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:w-1/2 py-10  flex flex-col justify-center bg-white order-2 lg:order-1"
          >
            <Link to="/blog" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-12 hover:text-brand-accent transition-all group">
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Dispatch
            </Link>

            <div className="inline-block bg-brand-primary text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest w-fit mb-6">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 border-t border-gray-100 pt-8">
              <div className="text-xs font-black uppercase tracking-widest">
                <p className="text-gray-400 mb-1">Author</p>
                <p>{post.author}</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="text-xs font-black uppercase tracking-widest">
                <p className="text-gray-400 mb-1">Published</p>
                <p>{post.date}</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative overflow-hidden order-1 lg:order-2 bg-gray-100"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            />
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-8xl mx-auto border-x border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Article */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-8 p-10 lg:p-20 border-r border-gray-200"
          >
            <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              
              <p className="text-2xl font-bold text-brand-dark leading-snug mb-12 border-l-4 border-brand-accent pl-8">
                The logistics industry is undergoing a massive transformation...
              </p>

              <p>
                In the modern era of freight management...
              </p>

              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-16 p-12 bg-brand-soft border border-brand-primary/20 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-2xl font-bold italic text-brand-dark leading-tight uppercase tracking-tight">
                    "The integration of ATS protocols has reduced transit friction..."
                  </p>
                  <cite className="block mt-6 text-xs font-black uppercase tracking-widest text-brand-primary">— Internal Sector Report, 2026</cite>
                </div>
                <span className="absolute -bottom-8 -right-4 text-[120px] font-black text-brand-dark/5 select-none">ATS</span>
              </motion.blockquote>

              <h2 className="text-3xl font-bold text-brand-dark uppercase tracking-tighter mb-8">
                Navigating the Global Market
              </h2>

              <p>
                Curabitur ut sem vitae mauris hendrerit interdum...
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 my-16"
              >
                <motion.div variants={fadeUp} className="p-10 border-b md:border-b-0 md:border-r border-gray-200">
                  <h4 className="font-black text-brand-primary uppercase tracking-[0.2em] text-xs mb-4">Functional Pros</h4>
                  <ul className="text-sm space-y-3 font-medium">
                    <li>• Real-time supply chain visibility</li>
                    <li>• Automated settlement cycles</li>
                    <li>• Reduced overhead friction</li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp} className="p-10 bg-gray-50">
                  <h4 className="font-black text-brand-accent uppercase tracking-[0.2em] text-xs mb-4">Structural Cons</h4>
                  <ul className="text-sm space-y-3 font-medium">
                    <li>• High initial technical barriers</li>
                    <li>• Cybersecurity framework requirements</li>
                    <li>• Rigorous data compliance</li>
                  </ul>
                </motion.div>
              </motion.div>
            </article>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-gray-100 flex items-center justify-between"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Share Report</span>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Copy'].map((platform) => (
                  <button key={platform} className="text-xs font-black uppercase tracking-widest px-6 py-3 border border-gray-200 hover:bg-brand-dark hover:text-white transition-all">
                    {platform}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-gray-50"
          >
            <div className="sticky top-0 p-10 lg:p-16 space-y-16">

              {/* Author */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-8 underline underline-offset-8">Analyst Profile</h3>
                <div className="flex flex-col gap-6">
                  <div className="w-20 h-20 bg-brand-dark text-white flex items-center justify-center text-3xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xl font-bold uppercase tracking-tight">{post.author}</p>
                    <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mt-1">{post.role}</p>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                      Specializing in integrated terminal operations...
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-brand-primary p-10 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 leading-none">
                  Subscribe to the <br />ATS Report
                </h3>
                <p className="text-sm text-blue-100 mb-8 opacity-80">
                  Join 15,000+ logistics professionals...
                </p>
                <div className="space-y-3">
                  <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/20 p-4 text-sm outline-none focus:bg-white/20" />
                  <button className="w-full bg-brand-dark text-white text-xs font-black uppercase tracking-widest py-4 hover:bg-brand-accent transition-all">
                    Get Access
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.aside>

        </div>
      </main>
    </div>
  );
};

export default BlogDetail;