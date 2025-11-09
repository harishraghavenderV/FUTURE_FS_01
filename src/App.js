import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* 🌌 Global Layout */}
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white scroll-smooth">
          
          {/* 🔝 Persistent Navbar */}
          <Navbar />

          {/* 🌍 Page Content */}
          <main className="flex-grow">
            <Routes>
              {/* 🏠 Home Page */}
              <Route path="/" element={<Hero />} />

              {/* 👤 About Page */}
              <Route path="/about" element={<About />} />

              {/* ⚙️ Skills Page */}
              <Route path="/skills" element={<Skills />} />

              {/* 🚀 Projects Page */}
              <Route path="/projects" element={<Projects />} />

              {/* 🏆 Achievements Page */}
              <Route path="/achievements" element={<Achievements />} />

              {/* ✉️ Contact Page */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* 🧩 Sticky Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
