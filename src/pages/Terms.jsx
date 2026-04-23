import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      id: "01",
      title: "Agreement of Terms",
      content: "Welcome to Ayfiz Trade Services. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. These terms govern your relationship with Ayfiz Trade Services and its associated entities."
    },
    {
      id: "02",
      title: "Intellectual Property",
      content: "All content on this website—including text, design, graphics, and data—is the property of Ayfiz Trade Services and is protected by applicable copyright and intellectual property laws.Unauthorised use, reproduction, or distribution of this content may result in legal action."
    },
    {
      id: "03",
      title: "Service Modifications",
      content: "Ayfiz Trade Services reserves the right to modify, suspend, or discontinue any part of its services or website content at any time without prior notice.Such changes may be made to reflect operational updates, regulatory requirements, or improvements to our services."
    },
    {
      id: "04",
      title: "Liability & Compliance",
      content: "While we strive to ensure accuracy, all content provided is for general informational purposes only. Ayfiz Trade Services does not guarantee the completeness or reliability of third-party data, including market or brokerage-related information.Users are advised to verify critical information independently before making business decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-dark pt-40 pb-20 px-6 lg:px-20 relative overflow-hidden">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] font-black text-[200px] leading-none select-none pointer-events-none">
        LEGAL
      </div>

      <div className="max-w-[1440px] mx-auto">
        {/* HEADER SECTION */}
        <div className="border-b border-gray-100 pb-20 mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-brand-accent" /> Governance & Compliance
          </motion.p>
          <h1 className="text-6xl md:text-8xl [@media(max-width:768px)]:text-5xl  font-bold uppercase tracking-tighter leading-none">
            TERMS & <br />
            <span className="text-brand-primary italic">CONDITIONS.</span>
          </h1>
          <p className="mt-10 text-gray-400 font-mono text-[10px] uppercase tracking-widest">
            Last Updated: April 2026 // Revision 4.0
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT: Quick Index (Sticky) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-40 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-8 underline decoration-brand-accent decoration-2 underline-offset-8">
                Document Index
              </h4>
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#section-${section.id}`}
                  className="block text-sm font-bold uppercase tracking-tighter text-gray-400 hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
                >
                  {section.id}. {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Detailed Content */}
          <div className="lg:col-span-8 space-y-32">
            {sections.map((section) => (
              <motion.div 
                key={section.id}
                id={`#section-${section.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-gray-100"
              >
                <span className="absolute left-[-1px] top-0 w-[2px] h-10 bg-brand-accent" />
                <span className="text-5xl font-black text-gray-50 absolute left-[-80px] top-0 select-none">
                  {section.id}
                </span>
                
                <h3 className="text-2xl font-bold uppercase tracking-tight text-brand-dark mb-6">
                  {section.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg font-medium max-w-2xl">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* TECHNICAL FOOTNOTE */}
            <div className="p-10 bg-gray-50 border-l-4 border-brand-dark mt-20">
              <p className="text-xs font-mono text-gray-400 leading-loose uppercase tracking-widest">
                Any dispute arising from the use of this website shall be governed by the laws of the United Arab Emirates, along with applicable international trade regulations. 
                Contact <span className="text-brand-accent">legal@ayfiz.com</span> For official legal enquiries.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;