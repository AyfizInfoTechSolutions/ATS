import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiEye, FiServer } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
    const navigate = useNavigate();
  
  const policies = [
    {
      icon: <FiEye />,
      title: "Information Collection",
      content: "We collect only the information required to manage your trade operations efficiently. This includes basic details such as names, contact information, and company identifiers necessary for communication, logistics tracking, and compliance with international trade regulations."
    },
    {
      icon: <FiLock />,
      title: "Data Protection",
      content: "Your data is handled with strict confidentiality. Ayfiz Trade Services does not sell or share your information with third-party marketers. Data is only shared when required with authorised customs authorities and logistics partners to ensure smooth execution of your shipments."
    },
    {
      icon: <FiServer />,
      title: "Cookies & Performance",
      content: "We use cookies to improve platform performance and user experience. These help us monitor system stability, optimise functionality, and ensure consistent service across our global operations."
    },
    {
      icon: <FiShield />,
      title: "Security Protocols",
      content: "Our systems are protected with industry-standard security measures and encryption. Every interaction is secured to prevent unauthorised access and ensure your data remains protected at all times."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-dark pt-40 pb-20 px-6 lg:px-20 relative overflow-hidden">
      
      {/* ARCHITECTURAL BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[40vw] font-black uppercase leading-none translate-y-20 -translate-x-20">Secure</h2>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* HEADER */}
        <div className="border-b border-gray-100 pb-20 mb-20 [@media(max-width:768px)]:mb-2 [@media(max-width:768px)]:pb-2   grid grid-cols-1 lg:grid-cols-2 items-end gap-10">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-brand-accent" /> Privacy Framework
            </motion.p>
            <h1 className="text-6xl md:text-8xl [@media(max-width:768px)]:text-5xl  font-bold uppercase tracking-tighter leading-none">
              DATA PROTECTION <br />
              <span className="text-brand-primary italic">SECURITY.</span>
            </h1>
          </div>
          <div className="lg:text-right">
             <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-2">Ayfiz Protocol v2.0</p>
             <p className="text-xs text-gray-500 font-medium max-w-sm ml-auto">
              Protecting your data with clear, reliable security standards.
             </p>
          </div>
        </div>

        {/* POLICY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100">
          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 lg:p-20 border-r border-b border-gray-100 last:border-b-0 md:[&:nth-child(even)]:border-r-0 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 bg-white border border-gray-100 flex items-center justify-center text-brand-accent text-xl shadow-sm group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                  {policy.icon}
                </div>
                <span className="text-xs font-mono text-gray-300">0{idx + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight text-brand-dark mb-6">
                {policy.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed font-medium">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CONTACT CALLOUT */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center p-10 bg-brand-dark text-white gap-8">
           <div>
              <h4 className="text-xl font-bold uppercase tracking-tighter">Our Data Protection Officer is ready to assist  -  to -</h4>
              <p className="text-white/50 text-sm font-medium mt-1">Our team is here to help.</p>
           </div>
           <a 
             onClick={() => navigate("/contact")}
             href="mailto:info@ayfiz.com" 
             className="px-10 py-5 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-brand-accent hover:border-brand-accent transition-all"
           >
             Contact DPO
           </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;