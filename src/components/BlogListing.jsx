import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
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

const posts = [
  {
    id: 1,
    title: "The Pros And Cons Of Trading in Modern Logistics",
    category: "Logistics Strategy",
    author: "Sevil Haslak",
    date: "Apr 14, 2026",
    excerpt: "Exploring how integrated ATS protocols are reshaping the way we handle freight volatility and supply chain settlements...",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Implementing AI in Fleet Management",
    category: "Tech Trends",
    author: "Gazali Oztepe",
    date: "Sep 27, 2026",
    excerpt: "Artificial intelligence is no longer a luxury. Learn how autonomous routing is saving carriers thousands in fuel costs...",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "The Future of Cold Chain Solutions",
    category: "Solutions",
    author: "Gulnaz Dagli",
    date: "Aug 28, 2026",
    excerpt: "Maintaining integrity in temperature-controlled environments using real-time sensor data and ATS tracking...",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200"
  }
];

const BlogListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      setIsError(true);
      return;
    }

    // simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Subscribed successfully ✅");
        setIsError(false);
        setEmail("");

        setTimeout(() => setMessage(""), 2000);
      } else if (response.status === 422) {
        setMessage(data.message || "Already subscribed");
        setIsError(true);

        setTimeout(() => setMessage(""), 2000);
      } else {
        setMessage("Something went wrong. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Please try again.");
      setIsError(true);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-brand-dark pt-20">
      <PageBanner title="BLOG" path="Home" />

      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="max-w-8xl px-16 mx-auto  py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-brand-primary"></span>
              <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Global Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl  [@media(max-width:768px)]:text-5xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]"
            >
              The <span className="text-brand-primary italic">ATS</span> <br />Dispatch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-500 font-medium max-w-xl border-l-4 border-brand-accent pl-6"
            >
              Critical intelligence for the modern supply chain...
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-2">Volume 04</span>
            <span className="text-sm font-bold text-gray-400 uppercase leading-none">Updated: April 2026</span>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-8xl mx-auto px-16  [@media(max-width:768px)]:px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-200">

          {/* Feed */}
          <div className="lg:col-span-8 border-r border-gray-200">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`group flex flex-col md:flex-row ${index !== posts.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="md:w-1/2 overflow-hidden relative">
                  <Link to={`/blog/${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full min-h-[350px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-0 left-0 bg-brand-primary text-white px-4 py-2 text-xs font-black uppercase">
                      {post.category}
                    </div>
                  </Link>
                </div>

                <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white group-hover:bg-brand-soft transition-colors duration-300">
                  <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                    <span className="h-px w-8 bg-gray-200" />
                    <span>By {post.author}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-3xl  [@media(max-width:768px)]:text-xl font-bold leading-tight mb-6 group-hover:text-brand-primary transition-colors uppercase tracking-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-500 mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-dark group-hover:text-brand-accent transition-colors"
                  >
                    Read Analysis <ArrowRight size={16} strokeWidth={3} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-gray-50 p-10"
          >
            <div className="sticky top-24 space-y-16">

              <div className="border-b-2 border-brand-dark pb-8">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-brand-primary">Search Archive</h3>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    className="w-full bg-transparent text-xl font-bold outline-none placeholder:text-gray-300"
                  />
                  <Search size={24} className="text-brand-dark" />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brand-primary">Sector Breakdown</h3>
                <ul className="space-y-6">
                  {['Logistics Strategy', 'Fleet Tech', 'Cold Chain', 'Terminal Ops'].map((item, idx) => (
                    <li key={item} className="flex items-baseline justify-between group cursor-pointer border-b border-gray-200 pb-2">
                      <span className="text-lg font-bold text-brand-dark group-hover:translate-x-2 transition-transform uppercase">{item}</span>
                      <span className="text-sm font-black text-gray-300 group-hover:text-brand-accent transition-colors">/0{idx + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-brand-primary p-10 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 leading-none">
                  Subscribe to the <br />ATS Report
                </h3>

                <p className="text-sm text-blue-100 mb-6 opacity-80">
                  Join 15,000+ logistics professionals...
                </p>

                <div className="space-y-3">
                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 p-4 text-sm outline-none focus:bg-white/20"
                  />

                  {/* Button */}
                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="w-full bg-brand-dark text-white text-xs font-black uppercase tracking-widest py-4 hover:bg-brand-accent transition-all disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Get Access"}
                  </button>

                  {/* Message */}
                  {message && (
                    <p className={`text-sm mt-2 ${isError ? "text-red-300" : "text-green-300"}`}>
                      {message}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.aside>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-between items-center border-t border-gray-200 pt-8"
        >
          <div className="text-xs font-black uppercase tracking-widest text-gray-400">
            Page {currentPage} of 10
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:border-brand-primary transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="px-6 h-12 border border-gray-200 flex items-center justify-center hover:border-brand-primary transition-all font-black uppercase text-xs tracking-widest">
              Next
            </button>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default BlogListing;