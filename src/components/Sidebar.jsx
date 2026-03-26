import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Folder, Mail, Menu } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home />, to: "/" },
    { name: "About", icon: <User />, to: "/about" },
    { name: "Projects", icon: <Folder />, to: "/projects" },
    { name: "Skills", icon: <User />, to: "/skills" }, // or other icon
    { name: "Contact", icon: <Mail />, to: "/contact" },
  ];

  return (
    <>
      {/* Hamburger menu for mobile/tablet */}
      <div className="md:hidden flex items-center gap-4 p-4 bg-black text-white fixed top-0 left-0 w-full z-50">
        <Menu
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-green-400"
        />
        <h1 className="text-lg font-bold text-green-400">Kevin SaGa</h1>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-800 text-white z-50 transform
          md:translate-x-0 transition-transform duration-300 flex flex-col
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 text-2xl font-bold text-green-400 md:block hidden">
          Kevin
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 px-4 mt-2">
          {navItems.map((item, idx) => (
            <SidebarLink
              key={idx}
              icon={item.icon}
              text={item.name}
              to={item.to}
              onClick={() => setOpen(false)} // close sidebar on mobile
            />
          ))}
        </nav>

        {/* Optional footer */}
        <div className="mt-auto p-4 text-gray-500 text-sm">
          © 2026
        </div>
      </div>
    </>
  );
}

// Sidebar link component with icon & active state
function SidebarLink({ icon, text, to, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer 
        ${isActive ? "bg-green-500/20 text-green-400" : "hover:bg-green-500/10 hover:text-green-400"}
      `}
    >
      <span className="text-green-400">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}