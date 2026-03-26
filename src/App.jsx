import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    
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
            <Route path="/contacts" element={<ContactPage/>}></Route>
          </Routes>
        </div>
      </div>
    
  );
}

export default App;