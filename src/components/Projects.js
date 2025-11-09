import React from "react";

const projects = [
  {
    title: "J.A.R.V.I.S AI Assistant",
    desc: "An AI assistant built with Python integrating speech recognition, NLP, and APIs to perform smart tasks.",
    tech: ["Python", "NLP", "Speech Recognition"],
    link: "#",
  },
  {
    title: "Blockchain Certificate Verification",
    desc: "Decentralized system to validate certificates securely using blockchain technology.",
    tech: ["Solidity", "Web3.js", "Node.js"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React and Tailwind CSS showcasing projects and achievements.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          My Projects 🚀
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-pink-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-700 px-3 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block mt-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
 