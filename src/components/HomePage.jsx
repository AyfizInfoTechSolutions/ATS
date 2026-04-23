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
import LatestNews from "./Home/LatestNews";
import Testimonials from "./Home/Testinomial";
import InteractiveServices from "./Home/InteractiveServices";
import WorkProcessAwesome from "./Home/WorkProcessAwesome";
import HeroLanding from "./Home/HeroLanding";
import bitumen from "../assets/productImgs/bitumen.jpg";
import granite from "../assets/productImgs/granite.jpg";
import mango from "../assets/productImgs/mango.jpg";

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
          <div className="lg:col-span-5 p-10 lg:p-20 [@media(max-width:768px)]:p-4 border-r border-gray-100 flex flex-col justify-center">
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
              className="text-6xl [@media(max-width:768px)]:text-5xl font-bold uppercase tracking-tighter leading-[0.9] text-brand-dark mb-10"
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
          <div className="lg:col-span-7 p-10 lg:p-20 [@media(max-width:768px)]:p-4 flex flex-col justify-center bg-gray-50/50">
            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-brand-primary pl-10"
            >
              At Ayfiz Trade Services, we enable businesses to operate with clarity and control in the global marketplace. In an environment shaped by volatility and regulation, success depends on more than opportunity—it depends on execution.
              We bring together sourcing intelligence, trade compliance, and end-to-end supply chain management into a unified system designed for reliability.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-400 uppercase tracking-widest font-bold leading-loose max-w-lg"
            >
              Every engagement is built around precision, from supplier selection to final delivery.
              Our role goes beyond facilitation. We design trade operations that hold under pressure—so you can expand into new markets, build stronger supply networks, and grow with confidence.
            </motion.p>

            {/* 🔥 Badge */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="mt-16 pt-10 border-t border-gray-200 flex items-center gap-6"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 rounded-full border-2 [@media(max-width:768px)]:w-13 [@media(max-width:768px)]:h-10 [@media(max-width:768px)]:text-[12px] border-brand-accent flex items-center justify-center text-brand-accent font-black italic"
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
      <InteractiveServices />

      <WorkProcessAwesome />

      <section className="max-w-8xl mx-auto border-x border-gray-100 py-24 [@media(max-width:768px)]:py-12 bg-white">
        <div className="px-10 lg:px-20 [@media(max-width:768px)]:px-4 mb-16 flex justify-between items-end">
          <div>
            <p className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              // Inventory
            </p>
            <h2 className="text-6xl [@media(max-width:768px)]:text-4xl    font-bold uppercase tracking-tighter">
              OUR <span className="italic text-brand-primary">PRODUCTS</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="text-[10px] font-black uppercase tracking-widest border-b-2 [@media(max-width:768px)]:mx-4 border-brand-accent pb-1 hover:text-brand-accent transition-colors"
          >
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-gray-100">
          {[
            {
              name: "Bitumen",
              cat: "Industrial Grade",
              img: bitumen,
            },
            {
              name: "Granite",
              cat: "Natural Stone",
              img: granite,
            },
            {
              name: "Mango",
              cat: "Premium Produce",
              img: mango,
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
      <section className="max-w-8xl mx-auto border-x border-gray-100 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 lg:p-20  [@media(max-width:768px)]:p-4 border-r border-gray-100">
          <p className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            // Help Center
          </p>
          <h2 className="text-5xl  [@media(max-width:768px)]:text-4xl [@media(max-width:768px)]:mb-4  font-bold uppercase tracking-tighter mb-12 text-brand-dark">
            Questions &{" "}
            <span className="text-brand-accent italic">Answers</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What primary sectors does Ayfiz operate in?",
                a:
                  "Ayfiz operates across global trade, logistics, and supply chain management. We deliver end-to-end trade solutions across the UAE, KSA, India, and the UK, combining sourcing, compliance, and execution into one integrated system.",
              },
              {
                q: "How do you ensure global shipping compliance?",
                a:
                  "We ensure compliance through strict documentation control, accurate tariff classification, and alignment with international regulations across every trade lane we operate in. Our team manages every requirement proactively, reducing delays and ensuring smooth customs clearance.",
              },
              {
                q: "Can I track my cargo through the Ayfiz portal?",
                a:
                  "Yes. Our clients have access to the Ayfiz Trade Portal, where they can track shipments in real time, monitor documentation status, and stay updated at every stage of the process.",
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
      <section className="max-w-8xl mx-auto border-x border-gray-100 bg-brand-dark text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Project Completed", value: "1000+", icon: "🚀" },
            { label: "Team Member", value: "40+", icon: "👥" },
            { label: "Years Experience", value: "15+", icon: "📅" },
            { label: "Satisfied Customers", value: "530+", icon: "💬" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-12 lg:p-20 border-r border-white/10 text-center relative group overflow-hidden"
            >
              {/* Animated Background Number */}
              <span className="absolute bottom-1 right-1 text-7xl font-black text-white/[0.03] select-none group-hover:text-brand-accent transition-colors duration-700">
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
