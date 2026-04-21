import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from './common/PageBanner';
import ServiceDetail from './ServiceDetail';

const servicesData = [
  {
    id: "trade-services",
    title: "Trade Services",
    short: "Comprehensive support in import/export, logistics, compliance, and market entry.",
    full: "International Trade Services facilitate global business by providing comprehensive support in import/export, logistics, compliance, and market entry strategies. These services streamline complex processes such as preparing accurate documentation, navigating customs clearance, managing tariffs, and securing trade financing.",
    extra: "They optimize logistics through efficient transportation management, supply chain coordination, and warehousing solutions, ensuring timely delivery across borders. Experts help businesses adhere to local laws, leverage trade agreements, and mitigate risks related to sanctions or trade restrictions.",
    stats: { efficiency: "96%", coverage: "Global" },
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "int-broking",
    title: "International Broking",
    short: "Intermediary for buying and selling assets like stocks, commodities, and currencies.",
    full: "International broking facilitates financial transactions across global markets, acting as an intermediary for buying and selling assets such as stocks, bonds, commodities, currencies, and derivatives. It provides clients access to international markets, enabling portfolio diversification.",
    extra: "Brokers offer advisory services, market insights, and trading support to help clients make informed decisions while ensuring compliance with local regulations. They assist in managing currency risks through hedging strategies and ensure accurate clearing and settlement.",
    stats: { security: "Tier 1", access: "High-Liquidity" },
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "business-consulting",
    title: "Overseas Consulting",
    short: "Market insights, tailored entry strategies, and regulatory compliance support.",
    full: "Overseas business consulting helps companies expand internationally by offering market insights, tailored strategies, and compliance support. It identifies opportunities and challenges through in-depth analysis of consumer behavior, cultural nuances, and competition.",
    extra: "Consultants craft market entry strategies, such as partnerships or wholly-owned subsidiaries, and develop distribution plans. They ensure compliance with local laws, trade regulations, and taxes while providing guidance on workforce localization and supply chain management.",
    stats: { accuracy: "98%", regions: "UAE/KSA/UK/IN" },
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "sourcing",
    title: "Sourcing Services",
    short: "Identifying and securing reliable suppliers to optimize your procurement chain.",
    full: "Sourcing services help companies find, evaluate, and secure suppliers or products to meet their procurement needs. They identify reliable suppliers, negotiate favorable terms, and ensure quality standards are met.",
    extra: "These services optimize supply chains, reduce costs, and improve efficiency. With expertise in global markets, sourcing services enable businesses to access the best resources worldwide while managing vendor relationships and mitigating risks.",
    stats: { vendors: "Verified", cost: "Optimized" },
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "warehousing",
    title: "Warehousing & Distribution",
    short: "Efficient storage and strategic movement for timely global delivery.",
    full: "Warehousing and Distribution services focus on efficiently storing goods and managing their movement for timely delivery. They include inventory management, order processing, and strategic storage to optimize space and reduce costs.",
    extra: "These services ensure goods are organized, accessible, and ready for dispatch. Distribution involves coordinating transportation and logistics to meet delivery schedules, enhancing customer satisfaction and operational efficiency.",
    stats: { uptime: "24/7", quality: "Premium" },
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000"
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="bg-white min-h-screen pt-20 overflow-x-hidden">
      <PageBanner title="SOLUTIONS" path="Home" />

      <AnimatePresence mode="wait">
        {!selectedService ? (
          <motion.section 
            key="list"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, y: -20 }}
            className="max-w-8xl  px-16 mx-auto border-x border-gray-100"
          >
            {servicesData.map((service, idx) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group grid grid-cols-1 md:grid-cols-12 border-b border-gray-200 cursor-pointer hover:bg-brand-soft transition-all duration-500"
              >
                {/* 1. Header Column */}
                <div className="md:col-span-5 p-10 lg:p-16 flex flex-col justify-between bg-white group-hover:bg-brand-soft transition-colors">
                  <div>
                    <span className="text-[10px] font-black tracking-[0.4em] text-brand-primary mb-4 block">
                      PROTOCOL. 0{idx + 1}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none group-hover:text-brand-primary transition-all">
                      {service.title}
                    </h2>
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-brand-accent animate-pulse"></span>
                    <p className="text-brand-accent font-black uppercase text-[10px] tracking-[0.3em]">
                      Deploy Details
                    </p>
                  </div>
                </div>

                {/* 2. Abstract Column */}
                <div className="md:col-span-4 p-10 lg:p-16 border-x border-gray-100 flex items-center bg-white group-hover:bg-brand-soft transition-colors">
                  <p className="text-lg text-gray-500 font-medium leading-tight italic">
                    "{service.short}"
                  </p>
                </div>

                {/* 3. FIXED HEIGHT Visual Column */}
                <div className="md:col-span-3 relative h-[250px] md:h-[350px] overflow-hidden bg-gray-200">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            ))}
          </motion.section>
        ) : (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>

      {/* Trust Bar */}
      <div className="bg-brand-dark py-16 text-white border-t border-gray-800">
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Instant Growth", status: "Enabled" },
            { label: "Expert Team", status: "Active" },
            { label: "Customer Service", status: "24/7" },
            { label: "Quality Assurance", status: "Certified" }
          ].map((item) => (
            <div key={item.label} className="border-l border-brand-primary/30 pl-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-1">{item.label}</p>
              <p className="text-xl font-bold uppercase tracking-tighter">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;