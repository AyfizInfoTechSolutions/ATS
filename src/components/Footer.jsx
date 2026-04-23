import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ Updated links with routes
  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "About Company", path: "/about" },
      { name: "Our Services", path: "/services" },
      { name: "Products", path: "/products" },
      { name: "Blog", path: "/blog" },
    ],
    "Support": [
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "FAQs", path: "/faqs" },
      { name: "Support Center", path: "/support" },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/ayfizabsolutes/" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/ayfiz" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/ayfizabsolutes" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@Ayfiz" },
    { icon: <FaXTwitter />, href: "https://x.com/ayfizabsolutes" },
  ];

  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden border-t border-white/10">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-0 right-0 select-none pointer-events-none opacity-[0.02] overflow-hidden h-full">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter leading-none translate-y-20 translate-x-20 rotate-[-90deg]">
          AYFIZ
        </h2>
      </div>

      <div className="max-w-8xl mx-auto relative z-10 border-x border-white/10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:col-span-5 p-10 lg:p-20 border-r border-b lg:border-b-0 border-white/10"
          >
            <div className="w-20 h-1 bg-brand-accent mb-10 -mt-8" /> 
            
            <img
              src={logo}
              alt="Ayfiz"
              className="h-36 w-auto object-contain brightness-0 invert -mb-4 -mt-12"
            />

            <p className="text-slate-400 text-xl font-bold uppercase tracking-tight leading-tight max-w-sm mb-12">
              Empowering Global <br />
              <span className="text-brand-accent">
                Trade Solutions
              </span>{" "}
              for Seamless International Success.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-0">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* LINKS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div
                key={title}
                className="p-10 border-b lg:border-b-0 border-r border-white/10 group"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-10 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-accent" /> {title}
                </h4>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-slate-400 hover:text-brand-accent uppercase tracking-widest text-[11px] font-bold transition-all block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 border-brand-accent">
          <div className="p-10 flex flex-col sm:flex-row justify-between items-center border-r border-white/10 hover:bg-brand-accent/5 transition-colors group">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 sm:mb-0 group-hover:text-brand-accent">
              Mail us:
            </span>
            <a
              href="mailto:info@ayfiz.com"
              className="text-2xl font-bold tracking-tighter hover:text-brand-accent"
            >
              INFO@AYFIZ.COM
            </a>
          </div>

          <div className="p-10 flex flex-col sm:flex-row justify-between items-center hover:bg-brand-accent/5 transition-colors group">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 sm:mb-0 group-hover:text-brand-accent">
              Support:
            </span>
            <a
              href="tel:+918592910000"
              className="text-2xl font-bold tracking-tighter hover:text-brand-accent"
            >
              +91 9895127233
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 p-10 flex flex-col lg:flex-row justify-between items-center gap-8 bg-[#0a0a0a]">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            © {currentYear}{" "}
            <span className="text-white">Ayfiz Trading System</span>{" "}
            <span className="text-brand-accent mx-2">//</span> Crafted for Excellence.
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              to="/privacy"
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-brand-accent transition-colors font-bold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-brand-accent transition-colors font-bold"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-brand-accent transition-colors font-bold"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;