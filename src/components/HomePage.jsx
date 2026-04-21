import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiArrowRight,
    FiArrowUpRight,
    FiGlobe,
    FiMinus,
    FiPackage,
    FiPlus,
    FiSearch,
    FiTruck,
} from "react-icons/fi";
import HeroLanding from "./HeroLanding";
import LatestNews from "./Home/LatestNews";
import Testimonials from "./Home/Testinomial";

const HomePage = () => {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -60 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
        },
    };

    const scaleBar = (scale) => ({
        hidden: { scaleX: 0 },
        show: {
            scaleX: scale,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    });

    const revealLine = {
        hidden: { scaleX: 0 },
        show: {
            scaleX: 1,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(0);
    return (
        <main className="bg-white min-h-screen pt-20 overflow-hidden">
            <HeroLanding />

            <section className="relative max-w-8xl mx-auto border-x border-gray-100 bg-white overflow-hidden">
                {/* 🔥 subtle moving background */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-brand-accent/5 pointer-events-none"
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]"
                >
                    {/* LEFT */}
                    <div className="lg:col-span-5 p-10 lg:p-20 border-r border-gray-100 flex flex-col justify-center">
                        <motion.div
                            variants={fadeUp}
                            className="flex items-center gap-4 mb-8"
                        >
                            <motion.span
                                variants={revealLine}
                                className="w-12 h-[1px] bg-brand-accent origin-left"
                            />
                            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">
                                About Ayfiz
                            </span>
                        </motion.div>

                        {/* 🔥 Animated Heading */}
                        <motion.h2
                            variants={fadeUp}
                            className="text-6xl font-bold uppercase tracking-tighter leading-[0.9] text-brand-dark mb-10"
                        >
                            <motion.span
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="block"
                            >
                                WE HELP BUSINESSES
                            </motion.span>

                            <motion.span
                                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                                whileInView={{ letterSpacing: "-0.02em", opacity: 1 }}
                                transition={{ delay: 0.2, duration: 1 }}
                                className="text-brand-primary italic block"
                            >
                                CONNECT & THRIVE.
                            </motion.span>
                        </motion.h2>

                        {/* 🔥 Progress Bars */}
                        <div className="space-y-10 mt-6">
                            {[
                                { label: "Trade Solutions", value: 86 },
                                { label: "Strategic Sourcing", value: 96 },
                            ].map((skill, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.02 }}
                                    className="space-y-3 group"
                                >
                                    <div className="flex justify-between items-end">
                                        <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-dark transition-colors">
                                            {skill.label}
                                        </span>
                                        <span className="text-2xl font-bold tracking-tighter text-brand-dark">
                                            {skill.value}%
                                        </span>
                                    </div>

                                    <div className="h-[2px] w-full bg-gray-100 relative overflow-hidden">
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: skill.value / 100 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="absolute inset-0 bg-brand-accent origin-left"
                                        />

                                        {/* glow effect */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.4 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute inset-0 bg-brand-accent blur-sm"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-7 p-10 lg:p-20 flex flex-col justify-center bg-gray-50/50">
                        <motion.p
                            variants={fadeUp}
                            className="text-xl text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-brand-primary pl-10"
                        >
                            At Mychus Interfurn, we specialize in helping businesses connect
                            and thrive in the global marketplace. Our comprehensive range of
                            services is designed to facilitate seamless international trade,
                            enabling clients to expand their reach and capitalize on new
                            opportunities.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-sm text-gray-400 uppercase tracking-widest font-bold leading-loose max-w-lg"
                        >
                            Through expert consultancy, we guide businesses in navigating
                            complex markets and developing tailored strategies that align with
                            their goals.
                        </motion.p>

                        {/* 🔥 Badge */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className="mt-16 pt-10 border-t border-gray-200 flex items-center gap-6"
                        >
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-16 h-16 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent font-black italic"
                            >
                                ATS
                            </motion.div>

                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark">
                                Helping you run a more <br />
                                <span className="text-brand-accent">
                                    efficient & profitable business.
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            {/* --- OUR SERVICES: THE GRID BLUEPRINT --- */}
            <section className="max-w-[1440px] mx-auto border-x border-gray-100 py-32 bg-brand-dark text-white relative">
                {/* Subtle Side Label */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
                    <span className="text-[10px] font-black uppercase tracking-[1em] text-white/10 whitespace-nowrap">
                        CORE CAPABILITIES
                    </span>
                </div>

                <div className="px-10 lg:px-20 mb-20 text-center lg:text-left">
                    <p className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            // Expert Solutions
                    </p>
                    <h2 className="text-6xl font-bold uppercase tracking-tighter">
                        OUR{" "}
                        <span className="text-brand-primary italic">
                            PROVIDED SERVICES.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
                    {[
                        {
                            title: "Trade Services",
                            desc: "International Trade Services facilitate global business by providing expertise in import/export, logistics, and compliance.",
                        },
                        {
                            title: "International Broking",
                            desc: "Facilitating financial transactions, such as buying and selling assets, between parties across global markets.",
                        },
                        {
                            title: "Business Consulting",
                            desc: "Guidance to companies expanding internationally, providing market insights, strategies, and compliance support.",
                        },
                        {
                            title: "Sourcing Services",
                            desc: "Finding, evaluating, and securing suppliers or products to meet your procurement needs.",
                        },
                        {
                            title: "Warehouse & Distro",
                            desc: "Storing goods efficiently and managing their movement to ensure timely delivery to customers.",
                        },
                        {
                            title: "Exports & Imports",
                            desc: "Your trusted partner in global trade, specializing in UAE, KSA, India, and the UK regions.",
                        },
                    ].map((service, idx) => (
                        <div
                            key={idx}
                            className="p-12 border-r border-b border-white/10 hover:bg-brand-accent transition-all duration-500 group cursor-pointer relative overflow-hidden"
                        >
                            {/* Animated number background */}
                            <span className="absolute top-10 right-10 text-5xl font-black text-white/5 group-hover:text-white/20 transition-colors">
                                0{idx + 1}
                            </span>

                            <div className="w-10 h-1 bg-brand-accent group-hover:bg-white mb-8 transition-colors" />

                            <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6 group-hover:text-white">
                                {service.title}
                            </h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                {service.desc}
                            </p>

                            <div className="mt-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                                Learn More <span className="text-lg">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- OUR WORK PROCESS: THE EXECUTION BLUEPRINT --- */}
            <section className="max-w-[1440px] mx-auto border-x border-gray-100 py-32 bg-brand-dark text-white relative overflow-hidden">
                {/* BACKGROUND LARGE TEXT - Matches the 'AYFIZ' watermark style */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] font-black text-[250px] leading-none select-none pointer-events-none translate-x-20 -translate-y-10">
                    FLOW
                </div>

                <div className="px-10 lg:px-20 relative z-10">
                    <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 items-end gap-10">
                        <div>
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3"
                            >
                                <span className="w-8 h-[1px] bg-brand-accent" /> // System
                                Methodology
                            </motion.p>
                            <h2 className="text-6xl font-bold uppercase tracking-tighter leading-none">
                                How We <br />
                                <span className="text-brand-primary italic">
                                    Deliver Value.
                                </span>
                            </h2>
                        </div>
                        <div className="lg:pb-4">
                            <p className="text-slate-400 text-sm uppercase tracking-widest leading-loose max-w-md border-l border-white/10 pl-8">
                                A structured approach to global logistics ensuring precision at
                                every node of the supply chain.
                            </p>
                        </div>
                    </div>

                    {/* THE GRID: Matches the Service Grid spacing exactly */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
                        {[
                            {
                                id: "01",
                                title: "Research & Planning",
                                desc: "Thorough market research to identify trends and strategic opportunities tailored to your vertical.",
                            },
                            {
                                id: "02",
                                title: "Review & Launch",
                                desc: "Final adjustments based on multi-channel feedback to ensure a polished, risk-free execution.",
                            },
                            {
                                id: "03",
                                title: "Implementation",
                                desc: "Executing the plan with high-efficiency resource allocation and constant performance monitoring.",
                            },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-12 lg:p-16 border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-all group relative cursor-default"
                            >
                                {/* TOP ACCENT LINE - Animates on hover to orange */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-brand-accent transition-colors duration-500" />

                                {/* STEP NUMBER - Editorial Style */}
                                <div className="flex justify-between items-start mb-12">
                                    <span
                                        className="text-5xl font-black text-transparent stroke-text group-hover:text-brand-accent transition-all duration-700"
                                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                                    >
                                        {step.id}
                                    </span>
                                    <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-brand-accent transition-colors">
                                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-300">
                                    {step.title}
                                </h4>

                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    {step.desc}
                                </p>

                                {/* BOTTOM DECORATIVE ELEMENT */}
                                <div className="mt-12 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1 h-1 bg-brand-accent" />
                                    <div className="w-4 h-1 bg-brand-accent/30" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-[1440px] mx-auto border-x border-gray-100 py-24 bg-white">
                <div className="px-10 lg:px-20 mb-16 flex justify-between items-end">
                    <div>
                        <p className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              // Inventory
                        </p>
                        <h2 className="text-6xl font-bold uppercase tracking-tighter">
                            OUR <span className="italic text-brand-primary">PRODUCTS</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("/products")}
                        className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors"
                    >
                        View All Products
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-100">
                    {[
                        {
                            name: "Bitumen",
                            cat: "Industrial Grade",
                            img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600",
                        },
                        {
                            name: "Granite",
                            cat: "Natural Stone",
                            img: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=600",
                        },
                        {
                            name: "Mango",
                            cat: "Premium Produce",
                            img: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[600px] border-r border-gray-100 overflow-hidden"
                        >
                            <img
                                src={item.img}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-brand-dark to-transparent">
                                <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest">
                                    {item.cat}
                                </span>
                                <h3 className="text-3xl text-white font-bold uppercase tracking-tighter mt-2">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FAQ & SUPPORT SECTION --- */}
            <section className="max-w-[1440px] mx-auto border-x border-gray-100 grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-20 border-r border-gray-100">
                    <p className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            // Help Center
                    </p>
                    <h2 className="text-5xl font-bold uppercase tracking-tighter mb-12 text-brand-dark">
                        Questions &{" "}
                        <span className="text-brand-accent italic">Answers</span>
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What services do you offer for international trade?",
                                a: "We provide comprehensive solutions, including import-export documentation, customs clearance, freight forwarding, and end-to-end logistics support.",
                            },
                            {
                                q: "How do you ensure timely delivery of shipments?",
                                a: "Through our global network of logistics partners and real-time tracking systems that monitor every stage of transit.",
                            },
                            {
                                q: "What industries do you specialize in serving?",
                                a: "We specialize in Industrial Materials (Bitumen, Minerals) and Agricultural Produce (Fresh Fruits & Vegetables).",
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="border border-gray-100 p-6 cursor-pointer hover:border-brand-primary transition-colors"
                                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold uppercase tracking-tight text-sm">
                                        {faq.q}
                                    </h4>
                                    {openFaq === i ? (
                                        <FiMinus className="text-brand-accent" />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </div>
                                {openFaq === i && (
                                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-brand-soft p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-4xl font-bold uppercase tracking-tighter mb-6 text-brand-dark">
                            Still Have <br /> More Questions?
                        </h3>
                        <p className="text-gray-600 mb-10 font-medium">
                            Our expert support team is ready to handle your custom trade
                            inquiries 24/7.
                        </p>
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-brand-accent text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-brand-dark transition-all"
                        >
                            Contact Expert Team
                        </button>
                    </div>
                    <div className="absolute -bottom-10 -right-10 text-[20vw] font-black text-white/50 select-none">
                        ?
                    </div>
                </div>
            </section>

            {/* --- TECHNICAL STATS SECTION --- */}
            <section className="max-w-[1440px] mx-auto border-x border-gray-100 bg-brand-dark text-white">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: "Project Completed", value: "1224", icon: "🚀" },
                        { label: "Team Member", value: "30", icon: "👥" },
                        { label: "Years Experience", value: "15", icon: "📅" },
                        { label: "Satisfied Customers", value: "530", icon: "💬" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-12 lg:p-20 border-r border-white/10 text-center relative group overflow-hidden"
                        >
                            {/* Animated Background Number */}
                            <span className="absolute -bottom-4 -right-2 text-8xl font-black text-white/[0.03] select-none group-hover:text-brand-accent transition-colors duration-700">
                                {stat.value}
                            </span>

                            <div className="relative z-10">
                                <h3 className="text-6xl font-bold tracking-tighter mb-4 flex items-center justify-center gap-2">
                                    {stat.value}
                                </h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Testimonials />

            <LatestNews />
        </main>
    );
};

export default HomePage;
