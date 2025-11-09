import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import devImg from "../assets/developer.svg";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 🧩 Handle resizing safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // 🖱 Track Mouse Movement for Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🌀 Subtle background hue animation on scroll
  const { scrollYProgress } = useScroll();
  const hueRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-white overflow-hidden px-6 md:px-20"
    >
      {/* 🔮 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900"
        style={{
          backgroundSize: "400% 400%",
          zIndex: 0,
          filter: `hue-rotate(${hueRotate})`,
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 🌟 Floating Glowing Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sky-400 rounded-full blur-sm opacity-70"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            scale: Math.random() * 1.2 + 0.4,
          }}
          animate={{
            y: [Math.random() * 100, Math.random() * -100],
            x: [Math.random() * 100 - 50, Math.random() * -100 + 50],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            zIndex: 1,
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
          }}
        />
      ))}

      {/* ✨ Left Section */}
      <motion.div
        className="text-center md:text-left md:w-1/2 space-y-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi There! <span className="inline-block animate-wave">👋</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
          I'M HARISH RAGHAVENDER V
        </h2>

        <h3 className="text-xl md:text-2xl font-light text-gray-300">
          <Typewriter
            options={{
              strings: ["Full Stack Developer 💻", "AI Enthusiast 🤖"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          {/* 🚀 View My Work Button */}
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.08 }}
            className="px-6 py-3 bg-gradient-to-r from-sky-400 to-fuchsia-500 rounded-xl font-semibold text-slate-900 transition-transform shadow-lg shadow-fuchsia-500/30"
          >
            View My Work 🚀
          </motion.a>

          {/* 📄 Download Resume Button */}
          <motion.a
            href="/harish resume.pdf"
            download
            whileHover={{ scale: 1.08 }}
            className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-sky-400 rounded-xl font-semibold text-slate-900 transition-transform shadow-lg shadow-sky-500/30"
          >
            Download Resume 📄
          </motion.a>
        </div>
      </motion.div>

      {/* 🧠 Right Section (Your Image) */}
      <motion.div
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
        }}
      >
        <img
          src={devImg}
          alt="Developer Illustration"
          className="w-80 md:w-96 drop-shadow-2xl animate-float"
        />
      </motion.div>

      {/* 🩵 Background Glow Effects */}
      <motion.div
        className="absolute w-72 h-72 bg-sky-500/20 blur-3xl rounded-full top-10 left-10"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full bottom-10 right-10"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />
    </section>
  );
};

export default Hero;
