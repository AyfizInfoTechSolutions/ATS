import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden px-10">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-gray-50 select-none pointer-events-none">
        404
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-brand-accent font-black uppercase tracking-[0.5em] text-xs mb-6">
            Error Code: Route_Missing
          </p>
          <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-brand-dark mb-8 leading-none">
            LOST IN <br /> <span className="text-brand-primary italic">TRANSIT.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed mb-12">
            The destination you are trying to reach has been relocated or never existed in our manifest. Let's get you back on the right track.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-4 bg-brand-dark text-white px-12 py-6 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-brand-accent transition-all duration-500 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> 
            Return to Base
          </Link>
        </motion.div>
      </div>

      {/* Technical sidebar detail */}
      <div className="absolute left-10 bottom-10 hidden lg:block">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">Protocol: Error_404</span>
          <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">Status: Connection_Terminated</span>
        </div>
      </div>
    </section>
  );
};

export default NotFound;