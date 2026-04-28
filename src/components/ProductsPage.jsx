import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageBanner from "./common/PageBanner";
import tomato from "../assets/productImgs/tomato.jpg";
import potato from "../assets/productImgs/potato.jpg";
import onion from "../assets/productImgs/onion.jpg";
import ladiesFinger from "../assets/productImgs/ladiesFinger.jpg";
import drumstick from "../assets/productImgs/drumstick.webp";
import cucumber from "../assets/productImgs/cucumber.jpg";
import cauliflower from "../assets/productImgs/cauliflower.jpg";
import garlic from "../assets/productImgs/garlic.jpg";
import capsicum from "../assets/productImgs/capsicum.jpg";
import eggplant from "../assets/productImgs/eggplant.jpg";
import carrot from "../assets/productImgs/carrot.jpg";
import apple from "../assets/productImgs/apple.jpg";
import pineapple from "../assets/productImgs/pineapple.jpg";
import grapes from "../assets/productImgs/grapes.jpg";
import orange from "../assets/productImgs/orange.jpg";
import mango from "../assets/productImgs/mango.jpg";
import rambutan from "../assets/productImgs/rambutan.jpg";
import dragonfruit from "../assets/productImgs/dragonfruit.jpg";
import kiwi from "../assets/productImgs/kiwi.jpg";
import watermelon from "../assets/productImgs/watermelon.jpg";
import chilly from "../assets/productImgs/chilly.jpg";
import blackPepper from "../assets/productImgs/pepper.jpg";
import bitumen from "../assets/productImgs/bitumen.jpg";
import granite from "../assets/productImgs/granite.jpg";
import prawns from "../assets/productImgs/prawns.jpg";
import rice from "../assets/productImgs/rice.jpg";

const categories = [
  "All Product",
  "Vegetables",
  "Fruits",
  "Dry fruits",
  "Spices",
  "Petrol Chemicals",
  "Mining products",
  "Frozen Foods"
];

const productsData = [
  // Vegetables
  {
    name: "Tomato",
    category: "Vegetables",
    img: tomato,
  },
  {
    name: "Potato",
    category: "Vegetables",
    img: potato,
  },
  {
    name: "Onion",
    category: "Vegetables",
    img: onion,
  },
  {
    name: "Ladies Finger",
    category: "Vegetables",
    img: ladiesFinger,
  },
  {
    name: "Drumstick",
    category: "Vegetables",
    img: drumstick,
  },
  {
    name: "Cucumber",
    category: "Vegetables",
    img: cucumber,
  },
  {
    name: "Cauliflower",
    category: "Vegetables",
    img: cauliflower,
  },
  {
    name: "Garlic",
    category: "Vegetables",
    img: garlic,
  },
  {
    name: "Capsicum",
    category: "Vegetables",
    img: capsicum,
  },
  {
    name: "Eggplant",
    category: "Vegetables",
    img: eggplant,
  },
  {
    name: "Carrot",
    category: "Vegetables",
    img: carrot,
  },

  // Fruits
  {
    name: "Apple",
    category: "Fruits",
    img: apple,
  },
  {
    name: "Pineapple",
    category: "Fruits",
    img: pineapple,
  },
  {
    name: "Grapes",
    category: "Fruits",
    img: grapes
  },
  {
    name: "Orange",
    category: "Fruits",
    img: orange,
  },
  {
    name: "Mango",
    category: "Fruits",
    img: mango,
  },
  {
    name: "Rambutan",
    category: "Fruits",
    img: rambutan,
  },
  {
    name: "Dragon fruit",
    category: "Fruits",
    img: dragonfruit,
  },
  {
    name: "Kiwi",
    category: "Fruits",
    img: kiwi,
  },
  {
    name: "Watermelon",
    category: "Fruits",
    img: watermelon,
  },

  // Spices & Others
  {
    name: "Chilly",
    category: "Spices",
    img: chilly,
  },
  {
    name: "Black Pepper",
    category: "Spices",
    img: blackPepper,
  },
  {
    name: "Bitumen",
    category: "Petrol Chemicals",
    img: bitumen,
  },
  {
    name: "Granite",
    category: "Mining products",
    img: granite,
  },
  {
    name: "Prawns",
    category: "Frozen Foods",
    img: prawns,
  },
  {
    name: "Rice",
    category: "Other",
    img: rice,
  },
];

const ProductsPage = () => {
   const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Product");

  const filteredProducts =
    activeCategory === "All Product"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-white min-h-screen pt-24 overflow-x-hidden relative">
      <PageBanner title="TRADE RANGE" path="Home" />

      {/* --- INDUSTRIAL HEADER (Matches Site Identity) --- */}
      <section className="max-w-8xl px-16 [@media(max-width:768px)]:px-4  mx-auto border-x border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-100">
          <div className="lg:col-span-8 py-10  border-r border-gray-100 bg-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-brand-primary"></span>
              <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px]">
                Sourcing Network Active
              </span>
            </motion.div>

            <h2 className="text-6xl [@media(max-width:768px)]:text-5xl md:text-[110px] font-bold uppercase tracking-tighter leading-[0.8] text-brand-dark">
              EXPLORE OUR <br />
              <span className="text-brand-primary italic">PRODUCTS</span>
            </h2>
          </div>

          <div className="lg:col-span-4 p-10 lg:p-16 flex flex-col justify-end bg-gray-50/50">
            <div className="border-l-4 border-brand-accent pl-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-4">
                Core Logistics
              </p>
              <p className="text-2xl font-bold uppercase tracking-tighter text-brand-dark leading-tight">
                Empowering Global Trade Solutions for Seamless Success.
              </p>
            </div>
          </div>
        </div>

        {/* --- WRAPPING GRID FILTER (No Scroll) --- */}
        <div className="flex flex-wrap gap-0 bg-white pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-grow md:flex-none md:min-w-[150px] gap-2 py-6 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border-r border-b border-gray-100 ${activeCategory === cat
                  ? "bg-brand-dark text-white border-brand-dark"
                  : "bg-white text-brand-accent hover:bg-brand-soft hover:text-brand-primary"
                }`}
            >
              {cat}
            </button>
          ))}
          {/* Fill space for the grid lines */}
          <div className="flex-grow border-b border-gray-100 bg-gray-50/20 hidden md:block"></div>
        </div>
      </section>

      {/* --- VIBRANT PRODUCT GRID --- */}
      <section className="max-w-8xl mx-auto   px-16  [@media(max-width:768px)]:px-8 py-24 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -15 }}
                className="group relative h-[300px] overflow-hidden rounded-[30px] shadow-xl hover:shadow-brand-primary/20 transition-all duration-500"
              >
                {/* IMAGE: Full color by default, grayscale on hover */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-0 group-hover:grayscale group-hover:scale-110 transition-all duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 group-hover:to-brand-primary/20 transition-all" />

                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter [@media(max-width:768px)]:text-[14px]
">
                    {product.name}
                  </h3>
                  <div className="h-1 w-full bg-white/20 mt-4 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                    />
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-brand-primary text-white text-[9px] font-black px-3 py-1 rounded-full">
                  ITEM_{idx + 1}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- VIBRANT ENQUIRY SECTION --- */}
      <section className="bg-brand-soft py-32 relative overflow-hidden border-t border-gray-100">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />

        <div className="max-w-8xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-brand-dark"
          >
           Can’t find{" "}
            <span className="text-brand-accent italic">your product?</span>
          </motion.h2>
          <p className="text-xl text-gray-500 font-bold uppercase tracking-widest mb-12 max-w-3xl mx-auto leading-relaxed">
           Our global sourcing engine operates 24/7. Get in touch for custom procurement across industrial and agricultural commodities.
          </p>

          <button   onClick={() => navigate("/contact")} className="relative group overflow-hidden bg-brand-primary px-20 py-7 rounded-full shadow-2xl hover:shadow-brand-accent/40 transition-all duration-500 active:scale-95">
            <span className="relative z-10 text-white font-black uppercase tracking-[0.4em] text-sm">
              Enquiry Now
            </span>
            <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
