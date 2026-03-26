import { Folder } from "lucide-react";
import training from "../assets/training.jpg";
import ai from "../assets/ai.jpg";
import ecommerce2 from "../assets/ecommerce2.jpg";
import ai2 from "../assets/ai2.jpg";

// const projectList = [
//   { name: "School Management System", desc: "...", image: training },
//   { name: "Portfolio Website", desc: "...", image: ai },
//   { name: "E-commerce Platform", desc: "...", image: ecommerce2 },
//   { name: "Chat Application", desc: "...", image: ai2 },
// ];

export default function Projects() {
  const projectList = [
    {
      name: "School Management System",
      desc: "Node.js + MySQL system with admin, teacher, student roles.",
      image: training,
    },
    {
      name: "Portfolio Website",
      desc: "Responsive React website hosted on Vercel.",
      image: ai
    },
    {
      name: "E-commerce Platform",
      desc: "Full stack e-commerce app with React, Node.js, and Stripe integration.",
      image: ecommerce2
    },
    {
      name: "Chat Application",
      desc: "Real-time chat app using Socket.io and Node.js backend.",
      image: ai2
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-[#0a0a0a]">
      <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-black rounded-xl border border-gray-800 overflow-hidden hover:border-green-400 transition"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Folder className="text-green-400" />
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </div>
              <p className="text-gray-400">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}