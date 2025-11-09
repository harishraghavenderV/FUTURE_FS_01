import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/developer.svg";

// 🌐 Social Icons
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaUserAstronaut } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* 📝 Left Text Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Hello! I'm{" "}
          <span className="text-sky-400 font-semibold">Harish Raghavender V</span>, a passionate{" "}
          <span className="text-purple-400 font-semibold">Full Stack Developer</span> and{" "}
          <span className="text-sky-400 font-semibold">AI Enthusiast</span>. I enjoy crafting
          user-friendly interfaces, automating workflows, and exploring intelligent systems powered by AI.
        </p>

        <p className="text-gray-400 leading-relaxed mb-8">
          My mission is to build scalable and efficient applications while constantly learning and applying
          cutting-edge technologies in software development.
        </p>

        {/* 🌐 Social Links with Icons */}
        <div className="flex flex-wrap gap-5 mt-6">
          {/* Contact */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.2 }}
            className="p-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400 text-slate-900 shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-400/60 transition-all"
          >
            <FaUserAstronaut size={22} />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:harishraghav2k4@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="p-4 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/60 transition-all"
          >
            <FaEnvelope size={22} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/harish-raghav-6130a4292/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-slate-900 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/60 transition-all"
          >
            <FaLinkedin size={22} />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/harishraghavenderV"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg shadow-gray-600/30 hover:shadow-gray-500/60 transition-all"
          >
            <FaGithub size={22} />
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://x.com/HarishR44790755"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="p-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-slate-900 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/60 transition-all"
          >
            <FaTwitter size={22} />
          </motion.a>
        </div>
      </div>

      {/* 🧠 Right Image Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <img
            src={profileImg}
            alt="Harish"
            className="relative w-64 md:w-80 rounded-full border-4 border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
