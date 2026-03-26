import k2 from "../assets/k2.jpg"; 
import {Link} from "react-router-dom"

export default function Hero() {
  return (
    <section
      id="home"
      // Added 'py-20' so content doesn't touch the top/bottom on mobile
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 lg:px-24 bg-[#0a0a0a] relative overflow-hidden py-20"
    >
      {/* Decorative green circle - hidden on small screens to save performance */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-500/10 blur-[100px] md:block hidden"></div>

      {/* Left text - Reordered for mobile: text comes AFTER image often looks better, 
          but standard is text first. 'order-2 md:order-1' handles this. */}
      <div className="flex-1 z-10 order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 leading-tight">
          Hi, I'm <span className="text-white">Kevin</span>
        </h1>
        <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          I'm a Full Stack Developer building modern, responsive, and 
          user-centric web applications.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to={"/projects"}
            className="px-8 py-3 bg-green-500 text-[#0a0a0a] font-bold rounded-lg hover:bg-green-400 transition-all duration-300 text-center"
          >
            View My Work
          </Link>
          <Link
            to={"/contact"}
            className="px-8 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300 text-center"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right image - 'order-1 md:order-2' puts image on top for mobile */}
      <div className="flex-1 mb-12 md:mb-0 z-10 order-1 md:order-2 flex justify-center">
        <div className="relative">
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-2xl"></div>
          <img
            src={k2}
            alt="Kevin"
            // Using aspect-square ensures a perfect circle even if the source isn't square
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-green-400 shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}