import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Layout & Global Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';


// Pages
import AboutPage from "./components/AboutPage";
import BlogDetail from './components/BlogDetail';
import BlogListing from './components/BlogListing';
import LoadingPage from './components/common/LoadingPage';
import NotFound from './components/common/NotFound';
import ScrollToTop from './components/common/ScrollToTop';
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import ServicesPage from "./components/ServicesPage";
import Faqs from './pages/Faqs';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Terms from './pages/Terms';

// A small wrapper to handle "Scroll to top on Route Change"
const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated system initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Matches the progress bar speed
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollReset />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingPage key="loader" />
        ) : (
          <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
            <Navbar />

            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Blog Routes */}
                <Route path="/blog" element={<BlogListing />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/support" element={<Support />} />
                {/* 404 Route - This catches everything else */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;