import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

import Home from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ContactPage from "./pages/ContactPage";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // trigger loader on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // adjust speed here

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <div className="flex bg-[#0a0a0a] min-h-screen text-white">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    
      <AppWrapper />
    
  );
}