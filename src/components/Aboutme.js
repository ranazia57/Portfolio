import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-top px-6 py-16">
      <div className="text-center max-w-2xl ">
        <h2 className="text-4xl md:text-5xl  font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-300 animate-pulse">
          About Me
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-6">
          I'm a passionate Full Stack Developer with expertise in web development and problem-solving skills. I specialize in
          creating dynamic, responsive, and user-friendly applications using modern technologies such as React, Node.js, and MongoDB.
        </p>
        <p className="text-slate-300 text-lg md:text-xl mb-6">
          I believe in continuous learning, and I love to take on challenging projects that push me to improve my skills. My goal is
          to contribute to impactful projects that make a difference and leave a lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/project"
            className="bg-green-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="/contect"
            className="border border-green-400 text-green-400 py-3 px-8 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-center gap-8 mt-12">
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-400 mb-4">Skills</h3>
          <ul className="space-y-4">
            <li className="text-slate-300">✔ JavaScript (ES6+)</li>
            <li className="text-slate-300">✔ React.js</li>
            <li className="text-slate-300">✔ Node.js & Express</li>
            <li className="text-slate-300">✔ MongoDB</li>
            <li className="text-slate-300">✔ Git & GitHub</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-green-400 mb-4">Tools & Technologies</h3>
          <ul className="space-y-4">
            <li className="text-slate-300">✔ VS Code</li>
            <li className="text-slate-300">✔ Node JS</li>
            <li className="text-slate-300">✔ ThunderClient</li>
            <li className="text-slate-300">✔ Tailwind CSS</li>
            <li className="text-slate-300">✔ GitHub</li>
          </ul>
        </div>
      </div> */}

      {/* <div className="mt-16 flex justify-center">
        <img
          src="../mypic.jpg"
          alt="About Me"
          className="w-72 h-72 rounded-full border-4 border-green-400 object-cover shadow-xl transition-transform duration-500 transform hover:scale-110"
        />
      </div> */}
    </section>
  );
};

export default Aboutme;
