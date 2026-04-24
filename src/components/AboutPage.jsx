import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from './common/PageBanner';
import trade from "../assets/fly.png"
const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen text-brand-dark font-sans antialiased pt-20 overflow-x-hidden">
      <PageBanner title="AYFIZ TRADE" path="Home" />

      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-16  [@media(max-width:768px)]:px-8 py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
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
              className="text-5xl sm:text-7xl [@media(max-width:768px)]:text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-8 break-words"
            >
              Driving Global  <br />
              <span className="text-brand-primary italic">Trade Forward
                .</span>
            </motion.h1>

            <p className="text-xl text-gray-500 font-medium max-w-2xl border-l-4 border-brand-accent pl-8 leading-relaxed">
              Smart sourcing. Efficient logistics. Scalable solutions designed and delivered streamlined trade services that help businesses move faster, operate smarter, and scale without barriers. From documentation to delivery, every step is built with precision, transparency, and control.
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
          <div className="lg:col-span-6 p-10 lg:p-16 border-r border-gray-200">
            <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
              <p className="text-2xl font-bold text-brand-dark leading-snug uppercase tracking-tight mb-12 border-b border-gray-100 pb-12">
                Ayfiz Trade Services engineers the infrastructure for businesses to scale within the global marketplace.            </p>

              <div className="text-gray-500 space-y-6">
                <p>
               By integrating deep industrial intelligence with high-fidelity operational strategies, we provide a definitive framework for international trade efficiency.      Our focus is the creation of seamless supply chains. From intelligent sourcing to precise warehousing and distribution.                 </p>
                <p>
               We ensure our partners maintain frictionless, real-time access to the world’s most critical markets.  Our commitment is rooted in structural excellence and the relentless pursuit of trade velocity.
                </p>
                <p>

                  At the heart of everything we do is a commitment to partnership - not just as a service provider, but as a strategic extension of your business. We invest the time to understand your industry, your objectives, and your operational realities, ensuring every solution is aligned with your growth trajectory.
                </p>
                <p>Whether you are entering a new market, optimizing an existing supply chain, or navigating the complexities of cross-border compliance, Ayfiz Trade Services remains a consistent partner - experienced, dependable, and built for the demands of modern global commerce.
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
                  src={trade}
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
            <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Optimizing <br /> Global Flow.</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              To engineer the strategic infrastructure and operational intelligence required for businesses to navigate international trade with zero friction.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 lg:p-16 space-y-8 group hover:bg-brand-soft transition-colors duration-500">
            <div className="flex items-baseline justify-between">
              <span className="text-6xl font-black text-gray-100 group-hover:text-brand-primary/20 transition-colors">02</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">The Vision</h3>
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Architecting Global <br />  Continuity.</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              To establish the definitive benchmark for integrated trade solutions, creating a future where every supply chain is transparent, resilient, and infinitely scalable.
            </p>
          </div>

          {/* Core */}
          <div className="p-10 lg:p-16 space-y-8 group hover:bg-brand-soft transition-colors duration-500">
            <div className="flex items-baseline justify-between">
              <span className="text-6xl font-black text-gray-100 group-hover:text-brand-primary/20 transition-colors">03</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary">The Core</h3>
            </div>
            <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Structural<br /> Integrity.</h4>
            <p className="text-gray-500 font-medium leading-relaxed">
              We believe that data fidelity is the foundation of global trust. Our framework ensures every stakeholder is synchronized through real-time transparency and absolute accountability.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL STATS BAR */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-8xl mx-auto flex justify-around   [@media(max-width:768px)]:grid  [@media(max-width:768px)]:gap-y-8  [@media(max-width:768px)]:justify-center">
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
              Unified Trade  <br />Systems.
            </motion.h2>
            <p className="text-xl text-blue-100/70 font-medium max-w-2xl leading-relaxed">
              We engineer intelligence into global flow to deliver a definitive market edge. Secure your position in our network.
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