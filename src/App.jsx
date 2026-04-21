import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import BlogListing from './components/BlogListing'; // Your list component
import BlogDetail from './components/BlogDetail';   // Your detail component
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ProductsPage from "./components/ProductsPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;