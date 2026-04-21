import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from './common/PageBanner';

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen text-brand-dark font-sans antialiased pt-20 overflow-x-hidden">
      <PageBanner title="AYFIZ" path="Home" />

      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-24 py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-px bg-brand-primary"></span>
              <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Corporate Intelligence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-8 break-words"
            >
              Securing The <br />
              <span className="text-brand-primary italic">Ayfiz Solution.</span>
            </motion.h1>

            <p className="text-xl text-gray-500 font-medium max-w-2xl border-l-4 border-brand-accent pl-8 leading-relaxed">
              Engineering efficient supply chains and strategic sourcing models for the global marketplace. We don't just move cargo; we integrate commerce.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-2">V. 01 / PROFILE</span>
            <span className="text-sm font-bold text-gray-400 uppercase leading-none">Status: Operational</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: INDUSTRIAL CONTENT & VISUALS */}
      <section className="max-w-[1440px]  mx-auto border-x border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-6 p-10 lg:p-20 border-r border-gray-200">
            <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
              <p className="text-2xl font-bold text-brand-dark leading-snug uppercase tracking-tight mb-12 border-b border-gray-100 pb-12">
                At Ayfiz Trading Solutions, we are dedicated to empowering businesses with the tools and expertise needed to thrive in the complex global marketplace.
              </p>
              
              <div className="text-gray-500 space-y-6">
                <p>
                  With a strong focus on international trade efficiency, our team combines industry-specific knowledge and innovative strategies to provide a comprehensive range of professional services. 
                </p>
                <p>
                  Our commitment to operational excellence extends to sourcing solutions, warehousing, and distribution, ensuring that our clients have seamless, real-time access to global markets.
                </p>
              </div>
            </article>
          </div>

          {/* Right Side: Visuals & Grids */}
          <div className="lg:col-span-6 bg-gray-50 p-10 lg:p-20">
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-8 underline underline-offset-8 text-center md:text-left">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 bg-white">
                  {[
                    "Sourcing Solutions", "Warehousing / Distribution", 
                    "Terminal Operations", "Customs Brokerage", 
                    "Consultancy", "Global Dispatch"
                  ].map((service) => (
                    <div key={service} className="p-8 border border-gray-100 font-black uppercase text-xs tracking-[0.2em] group hover:bg-brand-dark hover:text-white transition-all">
                      • {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 w-full border-2 border-gray-200 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1500" 
                  alt="Operations" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                />
                <div className="absolute top-0 right-0 bg-brand-primary text-white px-4 py-2 text-[10px] font-black uppercase">
                  Logistics Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OPERATIONAL VALUES (MISSION & VISION) */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* Mission */}
          <div className="p-10 lg:p-16 space-y-8 group hover:bg-brand-soft transition-colors duration-500">
            <div className="flex items-baseline justify-between">
              <span className="text-6xl font-black text-gray-100 group-hover:text-brand-primary/20 transition-colors">01</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary">The Mission</h3>
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Streamlining <br /> Global Flow.</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              To provide the technical infrastructure and strategic intelligence that allows businesses to navigate international trade without friction.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 lg:p-16 space-y-8 group hover:bg-brand-soft transition-colors duration-500">
            <div className="flex items-baseline justify-between">
              <span className="text-6xl font-black text-gray-100 group-hover:text-brand-primary/20 transition-colors">02</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">The Vision</h3>
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Architecting <br /> Tomorrow.</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              Becoming the standard-bearer for digitalized trading solutions, where every supply chain is transparent and infinitely scalable.
            </p>
          </div>

          {/* Core */}
          <div className="p-10 lg:p-16 space-y-8 group hover:bg-brand-soft transition-colors duration-500">
            <div className="flex items-baseline justify-between">
              <span className="text-6xl font-black text-gray-100 group-hover:text-brand-primary/20 transition-colors">03</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary">The Core</h3>
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Absolute <br /> Transparency.</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              We believe data integrity is the only way to build trust in global trade. Our solutions ensure every stakeholder is aligned in real-time.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL STATS BAR */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-6 flex justify-between px-16">
          {[
            { label: "Active Nodes", val: "150+" },
            { label: "Countries Served", val: "42" },
            { label: "Success Rate", val: "99.8%" },
            { label: "Trade Volume", val: "$2B+" }
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-4xl font-black uppercase tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="bg-brand-dark text-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-gray-800">
          <div className="lg:col-span-8 p-10 lg:p-20 border-r border-gray-800">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] mb-8"
            >
              Integrating Global <br />Commerce.
            </motion.h2>
            <p className="text-xl text-blue-100/70 font-medium max-w-2xl leading-relaxed">
              At Ayfiz, we don't just solve logistics; we engineer competitive advantages. Join our network today.
            </p>
          </div>
          
          <div className="lg:col-span-4 p-10 lg:p-20 flex flex-col justify-center gap-6">
            <button className="w-full bg-brand-primary text-white text-xs font-black uppercase tracking-widest py-5 hover:bg-white hover:text-brand-dark transition-all duration-300">
              Initiate Project Hub
            </button>
            <button className="w-full border-2 border-white/20 text-white text-xs font-black uppercase tracking-widest py-5 hover:border-brand-accent hover:text-brand-accent transition-all duration-300">
              Operational Consultancy
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;