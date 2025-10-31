import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6 text-center border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Harish Raghavender V</span>. All rights reserved.
        </p>
        <div className="flex space-x-5 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-cyan-400 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
