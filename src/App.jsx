import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import Skills from "./Pages/Skills";
import ProductDetails from "./Pages/ProductDetails";
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />}>
            <Route path="skills" element={<Skills />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
