import k2 from "../assets/k2.jpg"; // replace with your profile image
import { User, Folder, CheckSquare } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-[#111]">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-green-400 mb-10 text-center md:text-left">
        About Me
      </h2>

      <div className="md:flex md:items-center md:gap-12">
        {/* Profile Image */}
        <div className="md:flex-shrink-0 mb-8 md:mb-0 text-center">
          <img
            src={k2}
            alt="Kevin"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-green-400 mx-auto"
          />
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-400 mb-6 max-w-3xl">
            I am a passionate Full Stack Developer with experience in building modern web applications using React, Next.js, Node.js, and databases like MongoDB and MySQL. I love creating clean, responsive designs and writing efficient, scalable code.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-black/50 p-4 rounded-lg flex flex-col items-center">
              <User className="text-green-400 mb-2" />
              <span className="font-bold text-green-400 text-xl">3+</span>
              <span className="text-gray-400 text-sm">Years Experience</span>
            </div>
            <div className="bg-black/50 p-4 rounded-lg flex flex-col items-center">
              <Folder className="text-green-400 mb-2" />
              <span className="font-bold text-green-400 text-xl">15+</span>
              <span className="text-gray-400 text-sm">Projects Completed</span>
            </div>
            <div className="bg-black/50 p-4 rounded-lg flex flex-col items-center">
              <CheckSquare className="text-green-400 mb-2" />
              <span className="font-bold text-green-400 text-xl">5+</span>
              <span className="text-gray-400 text-sm">Clients Served</span>
            </div>
          </div>

          {/* Skills / Tools */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            {["React", "Next.js", "Node.js", "MongoDB", "MySQL", "Tailwind CSS"].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 border border-green-400 rounded-full text-green-400 hover:bg-green-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Call-to-Action */}
          <a
            href="/projects"
            className="inline-block px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-500/20 transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}