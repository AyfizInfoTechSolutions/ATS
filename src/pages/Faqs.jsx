import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-10 flex items-center justify-between text-left group"
      >
        <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tighter transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-accent'}`}>
          {question}
        </h3>
        <div className={`flex-shrink-0 w-10 h-10 border rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-dark border-brand-dark text-white rotate-180' : 'border-gray-200 text-brand-dark group-hover:border-brand-accent group-hover:text-brand-accent'}`}>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-10 pl-0 md:pl-0 max-w-3xl">
              <p className="text-gray-500 text-lg leading-relaxed font-medium border-l-4 border-brand-accent/20 pl-8">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What primary sectors does Ayfiz operate in?",
      answer: "Ayfiz operates at the intersection of global trade, logistics, and brand studio services. We provide end-to-end supply chain solutions across the UAE, KSA, India, and the UK, alongside premium digital asset creation."
    },
    {
      question: "How do you ensure global shipping compliance?",
      answer: "Our execution blueprint includes rigorous multi-channel feedback loops and real-time performance monitoring. We align with international ISO standards and local trade regulations in every region of operation."
    },
    {
      question: "Can I track my cargo through the Ayfiz portal?",
      answer: "Yes. Registered partners have access to our 'Absolute Trade Portal' which provides real-time telemetry and status updates for all active international manifests."
    },
    {
      question: "How can I initiate a partnership or project?",
      answer: "You can reach out via our Support Center or direct email. Our response team typically reviews and initializes trade protocols within 12 hours of the first inquiry."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-dark pt-40 pb-20 px-6 lg:px-20 relative overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] font-black text-[250px] leading-none select-none pointer-events-none translate-x-20">
        FAQ
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 items-end">
          <div className="lg:col-span-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-brand-accent" /> Knowledge Base
            </motion.p>
            <h1 className="text-6xl md:text-8xl [@media(max-width:768px)]:text-5xl  font-bold uppercase tracking-tighter leading-[0.85]">
              FREQUENT <br />
              <span className="text-brand-primary italic">INQUIRIES.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-gray-400 font-medium text-sm border-l border-gray-100 pl-8 uppercase tracking-widest leading-loose">
              Finding clarity in the complexity of global trade and digital excellence.
            </p>
          </div>
        </div>

        {/* ACCORDION GRID */}
        <div className="border-t border-gray-100">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-8 p-16 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2">Still need assistance?</h4>
            <p className="text-gray-500 font-medium">Our technical support team is standing by for specialized queries.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-dark text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] relative z-10 hover:bg-brand-primary transition-colors"
          >
            Contact Command Center
          </motion.button>
          {/* Subtle decoration */}
          <div className="absolute right-0 bottom-0 w-32 h-32 border-r-8 border-b-8 border-white/50" />
        </div>

      </div>
    </div>
  );
};

export default Faqs;