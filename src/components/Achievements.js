import React from "react";

const achievements = [
  {
    title: "Python Flask Certification",
    desc: "Earned certification for completing an advanced Python Flask development course from Great Learning.",
    date: "2024",
  },
  {
    title: "Introduction to AI Certification",
    desc: "Successfully completed a certification on Introduction to AI from Infosys Springboard.",
    date: "2024",
  },
  {
    title: "Introduction to Computer Vision Certification",
    desc: "Completed a certification on Introduction to Computer Vision from Infosys Springboard.",
    date: "2024",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-slate-800 via-purple-900/20 to-slate-900 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
          Achievements 🏅
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/70 border border-slate-700 rounded-2xl shadow-lg hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-violet-400 mb-2">
                {ach.title}
              </h3>
              <p className="text-gray-300 mb-3">{ach.desc}</p>
              <span className="text-sm text-pink-400 font-medium">
                {ach.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
