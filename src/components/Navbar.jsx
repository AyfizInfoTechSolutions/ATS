import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-28 flex justify-between items-center relative">
        {/* 🔹 Logo Link */}
        <Link to="/" className="flex items-center cursor-pointer py-2">
          <img
            src={logo}
            alt="logo"
            className="h-28 md:h-32 w-auto object-contain transition-all duration-300 hover:scale-105"
          />
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[12px] lg:text-[13px] font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 🔹 CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="bg-brand-primary text-white px-6 lg:px-10 py-4 rounded-full text-[10px] 

            [@media(min-width:762px)_and_(max-width:768px)]:text-[7px]
            
            [@media(min-width:762px)_and_(max-width:768px)]:[px-2px]
             
            [@media(min-width:762px)_and_(max-width:768px)]:[py-2x]
            lg:text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30 hover:bg-brand-dark
             hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Get in Touch
            </button>
          </Link>
        </div>

        {/* 🔹 Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 outline-none"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span
                className={`h-[2px] w-full bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`h-[2px] w-full bg-black transition-all duration-300 ${isOpen ? "opacity-0 -translate-x-2" : ""}`}
              />
              <span
                className={`h-[2px] w-full bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden overflow-hidden border-t"
          >
            <div className="flex flex-col p-8 space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-brand-dark border-b border-slate-50 pb-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
