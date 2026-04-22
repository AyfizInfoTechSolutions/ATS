import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageSquare, FiClock } from "react-icons/fi";

const Support = () => {
  const contactMethods = [
    {
      icon: <FiMail />,
      label: "Email Inquiry",
      value: "info@ayfiz.com",
      desc: "For general queries and documentation.",
      action: "mailto:info@ayfiz.com"
    },
    {
      icon: <FiPhone />,
      label: "Direct Line",
      value: "+91 85929 10000",
      desc: "Immediate assistance for active shipments.",
      action: "tel:+918592910000"
    },
    {
      icon: <FiMessageSquare />,
      label: "Support Ticket",
      value: "Open Portal",
      desc: "For registered partners and technical support.",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-dark pt-40 pb-20 px-6 lg:px-20 relative overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] font-black text-[200px] leading-none select-none pointer-events-none">
        HELP
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-brand-accent" /> Customer Assistance
            </motion.p>
            <h1 className="text-6xl md:text-8xl [@media(max-width:768px)]:text-5xl  font-bold uppercase tracking-tighter leading-[0.85]">
              SUPPORT <br />
              <span className="text-brand-primary italic">RESOURCES.</span>
            </h1>
          </div>
          <div className="hidden lg:block pb-4 text-right">
             <div className="flex items-center gap-3 text-gray-400 mb-2 justify-end">
                <FiClock className="text-brand-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Response Time</span>
             </div>
             <span className="text-2xl font-bold tracking-tighter uppercase text-brand-dark">&lt; 12 Hours</span>
          </div>
        </div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-gray-100 bg-gray-100">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 group hover:bg-brand-dark transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon & Label */}
              <div className="text-brand-accent text-2xl mb-12 group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 group-hover:text-white/50 transition-colors">
                {method.label}
              </h4>
              
              <h3 className="text-2xl [@media(max-width:768px)]:text-lg  font-bold uppercase tracking-tight text-brand-dark mb-4 group-hover:text-white transition-colors">
                {method.value}
              </h3>
              
              <p className="text-sm text-gray-500 font-medium group-hover:text-white/60 transition-colors">
                {method.desc}
              </p>

              {/* Decorative Corner Arrow */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                 <span className="text-white text-2xl">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* BOTTOM TECHNICAL SECTION */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="p-12 border border-gray-100 relative group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
            <h5 className="text-lg font-bold uppercase tracking-tight mb-6">FAQ & Documentation</h5>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Access our comprehensive library of trade regulations, shipping manifests, and brand studio guidelines.
            </p>
            <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary border-b border-brand-primary pb-1 hover:text-brand-dark hover:border-brand-dark transition-all">
              Browse Knowledge Base
            </button>
          </div>

          <div className="p-12 border border-gray-100 bg-gray-50/50">
            <h5 className="text-lg font-bold uppercase tracking-tight mb-6">Partner Onboarding</h5>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Interested in becoming an Ayfiz Absolute partner? Start your application process through our dedicated portal.
            </p>
            <button className="text-[10px] font-black uppercase tracking-widest text-brand-accent border-b border-brand-accent pb-1">
              Start Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;