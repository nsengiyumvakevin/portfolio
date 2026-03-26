import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
 
  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-[#0a0a0a]">
      <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
        Contact
      </h2>

      <div className="max-w-2xl mx-auto">
        {/* Info */}
        <p className="text-gray-400 mb-6 text-center">
          Feel free to reach out via email or social media for collaborations or projects.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com"
            
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition"
            title="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/"
          
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
           
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition"
            title="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:kevin@example.com"
            className="text-green-400 hover:text-green-500 transition"
            title="Email"
          >
            <AiOutlineMail size={24} />
          </a>
        </div>

        {/* Contact Form */}
        <form
          
        
          className="bg-black/50 p-6 rounded-lg border border-gray-800 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-green-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-green-400 focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-2 rounded-lg bg-[#111] text-white border border-gray-700 focus:border-green-400 focus:outline-none"
          ></textarea>
          <button
          
            type="submit"
            className="mt-2 px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-500/20 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}