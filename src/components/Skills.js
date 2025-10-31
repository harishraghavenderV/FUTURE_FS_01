import React from "react";
import html from "../assets/Html.png";
import css from "../assets/CSS.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/Nodejs.png";
import python from "../assets/Python.png";
import mongodb from "../assets/Mongodb.png";
import git from "../assets/git.png";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React.js", icon: reactjs },
    { name: "Node.js", icon: nodejs },
    { name: "Python", icon: python },
    { name: "MongoDB", icon: mongodb },
    { name: "Git & GitHub", icon: git },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:border-sky-400"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-3 transition-transform group-hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-sky-300">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
