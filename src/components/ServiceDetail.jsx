import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

// Define animation variants for orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ServiceDetail = ({ service, onBack }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-8xl px-16  [@media(max-width:768px)]:px-4 mx-auto bg-white min-h-[70vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-gray-100 overflow-hidden">
        
        {/* Sidebar */}
        <motion.div variants={itemVariants} className="lg:col-span-4 p-10 lg:p-16 border-r border-gray-200 bg-gray-50">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-accent hover:text-brand-dark transition-colors mb-20"
          >
            <FiArrowLeft /> Back to directory
          </button>

          <div className="space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6">Service Metrics</h3>
              <div className="space-y-4">
                {Object.entries(service.stats).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-[10px] uppercase font-bold text-gray-400">{key}</span>
                    <span className="text-sm font-black uppercase">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-8 border-2 border-brand-primary bg-white cursor-default">
              <h4 className="text-xs font-black uppercase mb-4 tracking-widest text-brand-accent underline">Operational Status</h4>
              <p className="text-2xl font-bold uppercase tracking-tighter">Active / On-Stream</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="lg:col-span-8 p-10 lg:p-20">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl  [@media(max-width:768px)]:text-3xl font-bold uppercase tracking-tighter leading-none mb-12"
          >
            {service.title.split(' ')[0]} <br/>
            <span className="text-brand-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="prose prose-xl text-gray-500 font-medium leading-relaxed max-w-none">
            <p className="text-brand-dark text-2xl font-bold border-l-4 border-brand-accent pl-8 mb-12 italic">
              {service.full}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-100">
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark">Execution Strategy</h4>
                <p className="text-sm leading-relaxed">Our execution utilizes automated tracking systems and verified customs protocols to ensure 0% deviation in global transit times.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-brand-accent">Compliance Framework</h4>
                <p className="text-sm leading-relaxed">Adhering to UAE, KSA, UK, and India regulatory standards. Full audit trail provided for every transaction node.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20 flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ y: -4 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-brand-dark text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all"
            >
              Request Deployment
            </motion.button>
            <motion.button 
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-200 px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:border-brand-primary transition-all"
            >
              Download PDF Specs
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceDetail;